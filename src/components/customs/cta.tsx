"use client";

import { CalendarBlank } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/portfolio-data";
import { SectionTitle } from "./section-title";

export function CallToAction() {
  return (
    <section id="contact" className="space-y-6 py-12">
      <SectionTitle title="Looking for a Developer? Let's Talk" />
      <div className="flex flex-col gap-4">
        <p className="text-xs leading-relaxed text-neutral-500">
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out.
        </p>
        <a
          href={siteConfig.meetingLink}
          className="inline-flex w-fit items-center gap-2 rounded-md border border-dashed border-neutral-800 px-4 py-2 text-xs text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          <CalendarBlank size={14} />
          Schedule a meeting
        </a>
      </div>
    </section>
  );
}
