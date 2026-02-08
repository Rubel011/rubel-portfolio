import { siteConfig } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-neutral-800 py-6">
      <div className="flex items-center justify-between text-[10px] text-neutral-600">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>{siteConfig.location}</span>
      </div>
    </footer>
  );
}
