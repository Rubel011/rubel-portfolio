"use client";

import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/fade-in";
import { experiences } from "@/lib/portfolio-data";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { BadgeCompo } from "./badge.compo";

export function Experience() {
  return (
    <section className="space-y-10 py-16">
      <SectionTitle title="Experience" subtitle="Places I've made an impact" />
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-1.75 top-2 bottom-2 hidden w-px bg-linear-to-b from-purple-500/50 via-blue-500/30 to-transparent sm:block" />

        {experiences.map((exp, index) => (
          <FadeIn key={exp.company} delay={index * 0.15}>
            <div className="relative flex gap-6" key={index}>
              {/* Timeline dot */}
              <div className="relative z-10 mt-1.5 hidden sm:block">
                <div className="h-3.5 w-3.5 rounded-full border-2 border-purple-500 bg-black" />
              </div>

              <Card className="flex-1 border-neutral-800/50 bg-neutral-900/30 py-0">
                <CardHeader className="px-6 pt-5 pb-0">
                  <CardTitle className="text-base font-semibold text-neutral-100">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-purple-400"
                    >
                      {exp.company}
                      <ArrowUpRightIcon className="size-3.5 text-neutral-500" />
                    </a>
                  </CardTitle>
                  <CardDescription className="text-sm text-neutral-400">
                    {exp.role}
                    <span className="text-neutral-600">&middot;</span>
                    <span className="text-neutral-500">{exp.location}</span>
                    <span className="text-neutral-600">&middot;</span>
                    <span className="text-neutral-500">{exp.type}</span>
                  </CardDescription>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="border-neutral-800 text-xs text-neutral-500"
                    >
                      {exp.period}
                    </Badge>
                  </CardAction>
                </CardHeader>

                <CardContent className="px-6 pt-4 pb-0">
                  <Separator className="mb-4 bg-neutral-800/60" />
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
                </CardContent>

                <CardFooter className="flex-wrap gap-1.5 px-6 pt-4 pb-5">
                  {exp.techStack.map((tech, ind) => (
                    // <Badge
                    //   key={tech}
                    //   variant="secondary"
                    //   className="border border-neutral-800/50 bg-neutral-800/30 text-[11px] text-neutral-500"
                    // >
                    //   {tech}
                    // </Badge>
                    <BadgeCompo key={ind} text={tech} />
                  ))}
                  <div className="ml-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neutral-500 hover:text-purple-400"
                      asChild
                    >
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                        <ArrowUpRightIcon className="size-3" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
