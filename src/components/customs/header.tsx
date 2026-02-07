import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/portfolio-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dashed border-neutral-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold text-neutral-100 tracking-tight hover:text-white transition-colors"
        >
          <Image
            src="/images/my_image2.jpeg"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="object-cover"
            style={{ borderRadius: "60% 40% 50% 70% / 50% 40% 60% 50%" }}
          />
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md border border-dashed border-transparent px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:border-neutral-800 hover:bg-neutral-900 hover:text-neutral-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
