import Link from "next/link";
import { Section } from "@/components/section";
import { ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/lib/portfolio-data";

const username = siteConfig.socials.github.split("/").pop();

export function OpenSource() {
  return (
    <Section id="open-source" label="Open source" note="Live from GitHub">
      <p className="t-data text-faint">Commits per day, last 12 months</p>

      <div className="mt-4 overflow-hidden rounded-md border border-border bg-card px-5 py-6 sm:px-6">
        <img
          src={`https://ghchart.rshah.org/1b3fd8/${username}`}
          alt={`Contribution calendar for github.com/${username}`}
          loading="lazy"
          className="w-full"
        />
      </div>

      <Link
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="link-quiet t-meta mt-5 inline-flex items-center gap-1.5 text-soft hover:text-foreground"
      >
        github.com/{username}
        <ArrowUpRight className="size-3.5 text-faint" />
      </Link>
    </Section>
  );
}
