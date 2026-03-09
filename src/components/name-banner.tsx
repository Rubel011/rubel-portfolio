"use client";

import { siteConfig } from "@/lib/portfolio-data";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/fade-in";
import { ClosingPlasma } from "./ui/closing-plasma";
import FluidBackground from "./customs/fluid.backgroud";

export function NameBanner() {
  return (
    <FadeIn direction="none" duration={0.8}>
      <section className="relative overflow-hidden py-16 select-none">
        <div className="absolute inset-0 -z-10">
          <ClosingPlasma/>
        </div>

        {/* <FluidBackground/> */}
        <Separator className="bg-neutral-800/50" />
        <div className="relative flex items-center justify-center py-8 sm:py-12 md:py-16 overflow-hidden">
          {/* Background gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]" />

          <h2
            className="text-center font-bold uppercase leading-none tracking-tight"
            style={{
              fontSize: "clamp(4rem, 15vw, 14rem)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(59, 130, 246, 0.6)",
            }}
          >
            {siteConfig.name}
          </h2>
          {/* Bottom shadow/fade overlay */}
          {/* <div
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{
              height: "60%",
              background:
                "linear-gradient(to top, oklch(0.145 0 0) 0%, transparent 100%)",
            }}
          /> */}
        </div>
        <Separator className="bg-neutral-800/50" />
      </section>
    </FadeIn>
  );
}
