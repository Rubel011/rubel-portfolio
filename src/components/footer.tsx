import Link from "next/link";
import { siteConfig } from "@/lib/portfolio-data";

const links = [
  { label: "Email", href: `mailto:${siteConfig.availability.email}` },
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "Résumé", href: siteConfig.socials.resume },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-data flex flex-wrap items-center gap-x-4 text-faint">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>{siteConfig.location}</span>
        </p>

        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="link-quiet t-data text-soft hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
