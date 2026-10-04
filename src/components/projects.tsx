"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { ArrowUpRight } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty";
import { projects } from "@/lib/portfolio-data";
import { useGitHubStats } from "@/hooks/use-github-stats";

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const { stats, isLoading } = useGitHubStats(project.repo);

  return (
    <article className="grid gap-x-8 gap-y-5 sm:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,1fr)_8rem]">
      <a
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block w-36 self-start overflow-hidden rounded-sm border border-border bg-muted sm:w-full"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-video w-full object-cover object-top"
        />
      </a>

      <div className="min-w-0">
        <h3 className="t-h3">{project.title}</h3>
        <p className="t-body measure mt-2 text-soft">{project.description}</p>
        <p className="t-data mt-3 text-faint">
          {project.techStack.join("  /  ")}
        </p>
      </div>

      <div className="t-data flex flex-wrap items-start gap-x-5 gap-y-2 text-faint lg:flex-col lg:items-end lg:gap-y-1.5">
        {isLoading ? (
          <>
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </>
        ) : stats ? (
          <>
            <span>
              {stats.stars} {stats.stars === 1 ? "star" : "stars"}
            </span>
            <span>
              {stats.forks} {stats.forks === 1 ? "fork" : "forks"}
            </span>
          </>
        ) : null}

        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet inline-flex items-center gap-1 text-soft hover:text-foreground"
        >
          Live
          <ArrowUpRight className="size-3.5" />
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet inline-flex items-center gap-1 text-soft hover:text-foreground"
        >
          Source
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </article>
  );
}

export function Projects({
  limit,
  label = "Selected work",
}: {
  limit?: number;
  label?: string;
}) {
  if (projects.length === 0) {
    return (
      <Section id="projects" label={label}>
        <Empty className="border border-dashed border-rule-strong">
          <EmptyTitle>No projects listed yet</EmptyTitle>
          <EmptyDescription>
            Repositories and live links will appear here.
          </EmptyDescription>
        </Empty>
      </Section>
    );
  }

  const shown = limit === undefined ? projects : projects.slice(0, limit);

  return (
    <Section
      id="projects"
      label={label}
      note={
        shown.length < projects.length
          ? `${shown.length} of ${projects.length}`
          : `${projects.length} projects`
      }
    >
      <ul>
        {shown.map((project) => (
          <li
            key={project.title}
            className="border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0"
          >
            <ProjectRow project={project} />
          </li>
        ))}
      </ul>

      {shown.length < projects.length ? (
        <div className="mt-8">
          <Link href="/projects" className="link-quiet t-meta text-soft">
            All {projects.length} projects
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
