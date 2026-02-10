"use client";

import { CalendarBlankIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/lib/portfolio-data";

export function CallToAction() {
  return (
    <section id="contact" className="py-16">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800/50 bg-neutral-900/30 p-8 sm:p-12">
          {/* Background gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative space-y-6">
            <SectionTitle
              title="Let's Work Together"
              subtitle="I'm always interested in new projects and opportunities"
            />

            <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello — my inbox is always open. Let&apos;s build
              something amazing together.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-6 font-medium text-white shadow-lg shadow-purple-500/20 transition-all hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/30"
                asChild
              >
                <a href={`mailto:${siteConfig.availability.email}`}>
                  <EnvelopeSimpleIcon size={18} className="mr-2" />
                  Send an Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-neutral-800 bg-neutral-900/50 px-6 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                asChild
              >
                <a href={siteConfig.meetingLink}>
                  <CalendarBlankIcon size={18} className="mr-2" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
