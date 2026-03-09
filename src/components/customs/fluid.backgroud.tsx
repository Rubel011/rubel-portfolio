import { useEffect, useRef } from "react";

/*
 * Animated dark fluid marble background.
 * Uses WebGL with simplex-style noise to create an organic,
 * ever-moving dark water / marble surface effect.
 */

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2  u_resolution;

  /* ---- simplex-ish 3D noise (Ashima Arts) ---- */
  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g  = step(x0.yzx, x0.xyz);
    vec3 l  = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x  = x_ * ns.x + ns.yyyy;
    vec4 y  = y_ * ns.x + ns.yyyy;
    vec4 h  = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }
  /* ---- end noise ---- */

  void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float t = u_time * 0.12;

    /* warp coordinates with noise for that alive marble feel */
    float warp1 = snoise(vec3(uv * 3.0, t * 0.7));
    float warp2 = snoise(vec3(uv * 2.5 + 5.0, t * 0.5));
    vec2 warped = uv + vec2(warp1, warp2) * 0.18;

    /* layered noise */
    float n1 = snoise(vec3(warped * 4.0, t));
    float n2 = snoise(vec3(warped * 8.0 - 3.0, t * 1.3));
    float n3 = snoise(vec3(warped * 16.0 + 7.0, t * 0.9));

    float marble = n1 * 0.5 + n2 * 0.3 + n3 * 0.15;
    marble = marble * 0.5 + 0.5; /* remap 0-1 */

    /* subtle vein / ridge lines */
    float vein = abs(sin((warped.x + warped.y) * 6.0 + marble * 6.2831));
    vein = pow(vein, 3.0);

    /* colour palette — deep dark blue / teal tones */
    vec3 deep    = vec3(0.01, 0.02, 0.04);
    vec3 mid     = vec3(0.04, 0.08, 0.14);
    vec3 highlight = vec3(0.10, 0.20, 0.32);
    vec3 accent  = vec3(0.15, 0.30, 0.45);

    vec3 col = mix(deep, mid, marble);
    col = mix(col, highlight, vein * 0.4);

    /* occasional bright streaks */
    float streak = smoothstep(0.65, 0.85, marble) * vein;
    col += accent * streak * 0.5;

    /* soft vignette */
    float vig = 1.0 - length((uv - 0.5) * 1.3);
    vig = smoothstep(0.0, 0.7, vig);
    col *= vig * 0.9 + 0.1;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function initGL(canvas: any) {
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
  if (!gl) return null;

  function compile(type: any, src: any) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prog));
    return null;
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const loc = gl.getAttribLocation(prog, "a_position");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    uTime: gl.getUniformLocation(prog, "u_time"),
    uRes: gl.getUniformLocation(prog, "u_resolution"),
  };
}

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (!canvas) return;

    const ctx = initGL(canvas);
    if (!ctx) return;
    const { gl, uTime, uRes } = ctx;

    let raf: any;
    const start = performance.now();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function frame() {
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#020408",
      }}
    >
      {/* WebGL fluid canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Demo content overlay — remove or replace with your own */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            color: "#e8e8ec",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Ship your dream product.
        </h1>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 560,
            marginTop: 20,
            lineHeight: 1.5,
          }}
        >
          Beautiful, performance-driven components to help you build faster and
          better. Open source and free to use.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              border: "none",
              background: "#fff",
              color: "#0a0a0a",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Start Building <span style={{ fontSize: 18 }}>→</span>
          </button>
          <button
            style={{
              padding: "14px 32px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              color: "#ccc",
              fontWeight: 500,
              fontSize: 16,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
