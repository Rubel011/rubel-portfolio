import Link from "next/link";
import { Section } from "@/components/section";
import { ArrowUpRight } from "@/components/icons";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="work"
      label="Experience"
      note={`${experiences.length} roles, 2023 onward`}
    >
      <ol>
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="grid gap-x-8 gap-y-4 border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p className="t-data text-faint">
              {exp.period.split("Present")[0].trimEnd()}{" "}
              {exp.period.includes("Present") ? (
                <span className="text-signal">Present</span>
              ) : null}
            </p>

            <div className="min-w-0">
              <h3 className="t-h3">
                <Link
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  {exp.company}
                  <ArrowUpRight className="ml-1.5 inline size-3.5 align-[-0.09em] text-faint" />
                </Link>
              </h3>

              <p className="t-meta mt-1.5 flex flex-wrap items-center gap-x-3 text-soft">
                <span>{exp.role}</span>
                <span className="text-faint">{exp.location}</span>
                <span className="text-faint">{exp.type}</span>
              </p>

              <ul className="mt-5 space-y-2.5">
                {exp.accomplishments.map((item) => (
                  <li
                    key={item}
                    className="t-body measure relative pl-5 text-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.72em] left-0 h-px w-2.5 bg-rule-strong"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="t-data mt-5 text-faint">
                {exp.techStack.join("  /  ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
