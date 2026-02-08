"use client";

import { CalendarBlank } from "@phosphor-icons/react";
import Link from "next/link";
import { blogPosts } from "@/lib/portfolio-data";
import { SectionTitle } from "./section-title";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Blog() {
  return (
    <section id="blog" className="space-y-8 py-12">
      <SectionTitle title="Sharing What I Learn" />
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Link
            key={post.title}
            href={post.slug}
            className="group block rounded-lg border border-dashed border-neutral-800 p-5 transition-colors hover:border-neutral-700 hover:bg-neutral-950/80"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-neutral-200 transition-colors group-hover:text-blue-500">
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
                <CalendarBlank size={12} />
                {formatDate(post.date)}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href="#"
          className="text-xs text-neutral-500 transition-colors hover:text-neutral-300"
        >
          View all posts &rarr;
        </Link>
      </div>
    </section>
  );
}
