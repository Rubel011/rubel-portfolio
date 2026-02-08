import Link from "next/link";
import { siteConfig } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="about" className="space-y-6 py-16">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-100">
          Hi, I&apos;m {siteConfig.name}
        </h1>
        <p className="text-sm text-neutral-500">
          {siteConfig.skills.join(" \u2022 ")}
        </p>
      </div>
      <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
        {siteConfig.tagline}
      </p>
      {siteConfig.availability.open && (
        <p className="text-sm text-neutral-500">
          Currently open to new opportunities.{" "}
          <Link
            href={`mailto:${siteConfig.availability.email}`}
            className="inline-flex items-center border border-dashed border-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Get in touch
          </Link>
        </p>
      )}
    </section>
  );
}
