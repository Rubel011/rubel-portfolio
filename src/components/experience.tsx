"use client";

import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import { experiences } from "@/lib/portfolio-data";
import { CardSpotlight } from "./ui/card-spotlight";

export function Experience() {
  return (
    <section className="space-y-10 py-16">
      <SectionTitle
        title="Experience"
        subtitle="Places I've made an impact"
      />
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-1.75 top-2 bottom-2 hidden w-px bg-linear-to-b from-purple-500/50 via-blue-500/30 to-transparent sm:block" />

        {experiences.map((exp, index) => (
          <FadeIn key={exp.company} delay={index * 0.15}>
            <div className="relative flex gap-6">
              {/* Timeline dot */}
              <div className="relative z-10 mt-1.5 hidden sm:block">
                <div className="h-3.5 w-3.5 rounded-full border-2 border-purple-500 bg-black" />
              </div>

              <CardSpotlight className="flex-1 border border-neutral-800/50 bg-neutral-900/30 p-6">
                <div className="space-y-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-neutral-100">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {exp.role}{" "}
                        <span className="text-neutral-600">&middot;</span>{" "}
                        <span className="text-neutral-500">{exp.type}</span>
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="w-fit border-neutral-800 text-xs text-neutral-500"
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="space-y-2">
                    {exp.accomplishments.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm leading-relaxed text-neutral-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/60" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="border border-neutral-800/50 bg-neutral-800/30 text-[11px] text-neutral-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
