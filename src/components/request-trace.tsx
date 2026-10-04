/**
 * The one deliberate motion on the page: a request travelling the stack,
 * drawn once on load. Pure CSS so it costs no JavaScript; the global
 * reduced-motion rule collapses it to its end state.
 *
 * Each stage draws the connector to the next one, so the line never runs
 * past the final node.
 */
const stages = [
  {
    name: "Edge",
    detail: "CloudFront CDN",
    note: "Static and cacheable responses answered before they reach the origin.",
  },
  {
    name: "API",
    detail: "Express on ECS Fargate",
    note: "Containerised Express services behind an application load balancer.",
  },
  {
    name: "Cache",
    detail: "Redis / BullMQ",
    note: "Hot reads served from Redis, slow work handed to queued workers.",
  },
  {
    name: "Data",
    detail: "MongoDB indexes",
    note: "Compound indexes and aggregation pipelines keeping queries off the hot path.",
  },
  {
    name: "Payments",
    detail: "Razorpay / Easebuzz / Paytm / Instamojo",
    note: "Signed webhooks, UPI deduplication, reconciliation against settled transactions.",
  },
];

export function RequestTrace() {
  return (
    <figure className="mt-14 sm:mt-16">
      <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
        {stages.map((stage, index) => {
          const last = index === stages.length - 1;

          return (
            <li
              key={stage.name}
              className="trace-stage relative pl-6 lg:pl-0"
              style={{ animationDelay: `${200 + index * 130}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 block size-2 rounded-[1px] bg-primary lg:static"
              />

              {last ? null : (
                <span
                  aria-hidden="true"
                  className="trace-line absolute top-[3.5px] left-0 hidden h-px w-[calc(100%+1.5rem)] bg-rule-strong lg:block"
                  style={{ animationDelay: `${60 + index * 130}ms` }}
                />
              )}
              {last ? null : (
                <span
                  aria-hidden="true"
                  className="trace-line-y absolute top-2 left-[3.5px] h-[calc(100%+2rem)] w-px bg-rule-strong lg:hidden"
                  style={{ animationDelay: `${60 + index * 130}ms` }}
                />
              )}

              <h3 className="t-h3 mt-0.5 lg:mt-4">{stage.name}</h3>
              <p className="t-data mt-1.5 text-faint">{stage.detail}</p>
              <p className="t-body mt-2 max-w-[26ch] text-soft">{stage.note}</p>
            </li>
          );
        })}
      </ol>

      <figcaption className="t-meta measure mt-8 border-t border-border pt-4 text-faint">
        The path a write request takes through the systems I maintain at work.
      </figcaption>
    </figure>
  );
}
