import { experiences } from "@/lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function Experience() {
  return (
    <section className="space-y-8 py-12">
      <SectionTitle title="Places I've Made an Impact" />
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-sm font-medium text-neutral-100">
                  {exp.company}
                </h3>
                <p className="text-xs text-neutral-500">
                  {exp.role} &middot; {exp.type}
                </p>
              </div>
              <span className="text-xs text-neutral-600">{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.accomplishments.map((item, i) => (
                <li
                  key={i}
                  className="text-xs leading-relaxed text-neutral-400"
                >
                  <span className="mr-2 text-neutral-600">{"\u25B9"}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-800 px-2.5 py-0.5 text-[10px] text-neutral-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
