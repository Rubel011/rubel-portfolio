"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
          {title}
          <span className="ml-1 text-purple-400">.</span>
        </h2>
        {subtitle && (
          <p className="text-sm text-neutral-500">{subtitle}</p>
        )}
        <div className="h-1 w-12 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
      </div>
    </FadeIn>
  );
}
