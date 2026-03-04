"use client";

import { siteConfig } from "@/lib/portfolio-data";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/ui/fade-in";

export function NameBanner() {
  return (
    <FadeIn direction="none" duration={0.8}>
      <section className="relative overflow-hidden py-16 select-none">
        <Separator className="bg-neutral-800/50" />
        <div className="flex items-center justify-center py-8 sm:py-12 md:py-16">
          <h2
            className="text-center font-bold uppercase leading-none tracking-tight text-neutral-900"
            style={{
              fontSize: "clamp(4rem, 15vw, 14rem)",
            }}
          >
            {siteConfig.shortName}
          </h2>
        </div>
        <Separator className="bg-neutral-800/50" />
      </section>
    </FadeIn>
  );
}
