"use client";

import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/portfolio-data";

const username = siteConfig.socials.github.split("/").pop();

export function GitHubStats() {
  return (
    <section id="github-stats" className="space-y-10 py-16">
      <SectionTitle
        title="GitHub Stats"
        subtitle="My open-source contributions"
      />

      {/* Activity Graph */}
      <FadeIn>
        <div className="overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30">
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=0a0a0a&color=a3a3a3&line=a855f7&point=06b6d4`}
            alt="Activity Graph"
            loading="lazy"
            className="w-full"
          />
        </div>
      </FadeIn>

      {/* Stats Card + Top Languages */}
      <div className="grid gap-6 sm:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&bg_color=0a0a0a&title_color=a855f7&icon_color=06b6d4&text_color=a3a3a3`}
              alt="GitHub Stats"
              loading="lazy"
              className="w-full"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0a0a&title_color=a855f7&text_color=a3a3a3`}
              alt="Top Languages"
              loading="lazy"
              className="w-full"
            />
          </div>
        </FadeIn>
      </div>

      {/* Streak Stats */}
      <FadeIn delay={0.3}>
        <div className="overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30">
          <img
            src={`https://github-readme-streak-stats-eight.vercel.app?user=${username}&theme=tokyonight&hide_border=true&date_format=j%20M%5B%20Y%5D&background=0a0a0a&ring=a855f7&fire=06b6d4&currStreakLabel=a3a3a3&sideLabels=a3a3a3&dates=525252`}
            alt="GitHub Streak"
            loading="lazy"
            className="mx-auto w-full max-w-2xl"
          />
        </div>
      </FadeIn>

      {/* Contribution Calendar */}
      <FadeIn delay={0.4}>
        <div className="overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-4">
          <img
            src={`https://ghchart.rshah.org/a855f7/${username}`}
            alt="GitHub Contribution Calendar"
            loading="lazy"
            className="w-full"
          />
        </div>
      </FadeIn>
    </section>
  );
}
