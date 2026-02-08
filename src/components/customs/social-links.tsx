"use client";

import { GithubLogo, LinkedinLogo, FileText } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/portfolio-data";

const links = [
  { label: "GitHub", href: siteConfig.socials.github, icon: GithubLogo },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: LinkedinLogo,
  },
  { label: "Resume", href: siteConfig.socials.resume, icon: FileText },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 pb-12">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-800 px-3.5 py-1.5 text-xs text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200"
        >
          <Icon size={14} weight="regular" />
          {label}
        </a>
      ))}
    </div>
  );
}
