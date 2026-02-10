"use client";

import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span className="text-neutral-800">&middot;</span>
          <span>{siteConfig.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition-colors hover:text-neutral-400"
          >
            <GithubLogoIcon size={16} />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition-colors hover:text-neutral-400"
          >
            <LinkedinLogoIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
