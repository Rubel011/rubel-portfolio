"use client";

import { ArrowUpRightIcon, StarIcon, GitForkIcon } from "@phosphor-icons/react";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SpotlightCard } from "@/components/ui/spotlight";
import { projects } from "@/lib/portfolio-data";
import { useGitHubStats } from "@/hooks/use-github-stats";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const stats = useGitHubStats(project.repo);

  return (
    <SpotlightCard
      className="group h-full border border-neutral-800/50 bg-neutral-900/30"
      spotlightColor={
        index === 0
          ? "rgba(139, 92, 246, 0.12)"
          : "rgba(6, 182, 212, 0.12)"
      }
    >
      {/* Project image banner */}
      <div className="h-36 w-full overflow-hidden rounded-t-xl transition-all duration-500 group-hover:h-40">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-neutral-100 transition-colors group-hover:text-white">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 px-2 text-xs text-neutral-500 hover:text-purple-400"
              asChild
            >
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live <ArrowUpRightIcon size={12} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 px-2 text-xs text-neutral-500 hover:text-purple-400"
              asChild
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code <ArrowUpRightIcon size={12} />
              </a>
            </Button>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border border-neutral-800/50 bg-neutral-800/30 text-[11px] text-neutral-500"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {stats && (
            <div className="flex shrink-0 items-center gap-3 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <StarIcon size={14} weight="fill" className="text-yellow-500/70" />
                {stats.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitForkIcon size={14} className="text-neutral-500" />
                {stats.forks}
              </span>
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Projects() {
  return (
    <section id="projects" className="space-y-10 py-16">
      <SectionTitle
        title="Projects"
        subtitle="Things I've built"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.15}>
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
