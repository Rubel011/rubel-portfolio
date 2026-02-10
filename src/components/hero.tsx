"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FadeIn } from "@/components/ui/fade-in";
import { GridBackground } from "@/components/ui/grid-background";
import {
  ArrowDownIcon,
  EnvelopeSimpleIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";
import { SparklesCore } from "@/components/ui/sparkles";

export function Hero() {
  return (
    // <GridBackground>
    <section
      id="about"
      className="relative flex min-h-[80vh] flex-col justify-center py-20"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative space-y-8">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={80}
            className="h-full w-full"
            particleColor="#a78bfa"
            speed={1.5}
          />
        </div>
        <FadeIn delay={0.1}>
          <Badge
            variant="outline"
            className="border-green-500/30 bg-green-500/5 px-3 py-1.5 text-xs text-green-400"
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for work
          </Badge>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative">
            <h1 className="relative z-10 text-5xl font-bold tracking-tight text-neutral-100 sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg font-medium text-neutral-400 sm:text-xl">
            {siteConfig.role}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <TextGenerateEffect
            words={siteConfig.tagline}
            className="max-w-2xl text-base leading-relaxed text-neutral-500"
          />
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {siteConfig.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="border border-neutral-800 bg-neutral-900/50 text-neutral-400"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Button
              size="lg"
              className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-6 font-medium text-white shadow-lg shadow-purple-500/20 transition-all hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/30"
              asChild
            >
              <Link href={`mailto:${siteConfig.availability.email}`}>
                <EnvelopeSimpleIcon size={18} className="mr-2" />
                Get in Touch
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-neutral-800 bg-neutral-900/50 px-6 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              asChild
            >
              <Link href={siteConfig.socials.resume}>
                <DownloadSimpleIcon size={18} className="mr-2" />
                Resume
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1} className="mt-auto pt-12">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <ArrowDownIcon size={14} className="animate-bounce" />
          Scroll to explore
        </div>
      </FadeIn>
    </section>
    // </GridBackground>
  );
}
