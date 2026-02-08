"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function Projects() {
  return (
    <section id="projects" className="space-y-8 py-12">
      <SectionTitle title="Things I've Built" />
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-dashed border-neutral-800 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-950/80"
          >
            <div className="flex flex-col gap-5 sm:flex-row">
              <div
                className="flex h-32 w-full shrink-0 items-center justify-center rounded-md sm:h-auto sm:w-36"
                style={{ background: project.gradient }}
              >
                <span className="text-3xl font-bold text-white/20">
                  {project.title[0]}
                </span>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-medium text-neutral-100 transition-colors group-hover:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-blue-500"
                    >
                      Live <ArrowUpRight size={12} />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-blue-500"
                    >
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-800 px-2.5 py-0.5 text-[10px] text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
