"use client";

import { GithubLogoIcon, LinkedinLogoIcon, FileTextIcon } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const links = [
  { label: "GitHub", href: siteConfig.socials.github, icon: GithubLogoIcon },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: LinkedinLogoIcon,
  },
  { label: "Resume", href: siteConfig.socials.resume, icon: FileTextIcon },
];

export function SocialLinks() {
  return (
    <FadeIn delay={0.1}>
      <div className="flex flex-wrap gap-2 pb-12">
        {links.map(({ label, href, icon: Icon }) => (
          <Button
            key={label}
            variant="outline"
            size="sm"
            className="gap-2 rounded-full border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200"
            asChild
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={14} weight="regular" />
              {label}
            </a>
          </Button>
        ))}
      </div>
    </FadeIn>
  );
}
