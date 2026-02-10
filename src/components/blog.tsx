"use client";

import { CalendarBlankIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { SpotlightCard } from "@/components/ui/spotlight";
import { blogPosts } from "@/lib/portfolio-data";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Blog() {
  return (
    <section id="blog" className="space-y-10 py-16">
      <SectionTitle
        title="Blog"
        subtitle="Sharing what I learn"
      />
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <FadeIn key={post.title} delay={index * 0.1}>
            <Link href={post.slug}>
              <SpotlightCard className="group border border-neutral-800/50 bg-neutral-900/30 p-5 transition-all hover:border-neutral-700/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-purple-400">
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                      <CalendarBlankIcon size={12} />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <ArrowRightIcon
                    size={16}
                    className="mt-1 shrink-0 text-neutral-700 transition-all group-hover:translate-x-1 group-hover:text-purple-400"
                  />
                </div>
              </SpotlightCard>
            </Link>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="flex justify-end">
          <Link
            href="#"
            className="group flex items-center gap-1 text-xs text-neutral-500 transition-colors hover:text-purple-400"
          >
            View all posts{" "}
            <ArrowRightIcon
              size={12}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
