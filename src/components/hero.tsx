import Link from "next/link";
import { siteConfig } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@/components/icons";
import { RequestTrace } from "@/components/request-trace";

export function Hero() {
  return (
    <section id="about" className="pt-14 pb-16 sm:pt-20">
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_10rem]">
        <img
          src="/images/my_image2.jpeg"
          alt={siteConfig.name}
          width={930}
          height={1128}
          className="order-first h-24 w-24 rounded-md border border-border object-cover object-top lg:order-none lg:col-start-2 lg:row-start-1 lg:h-auto lg:w-40 lg:aspect-4/5 lg:justify-self-end"
        />

        <div className="lg:col-start-1 lg:row-start-1">
          <h1 className="t-display">{siteConfig.name}</h1>

          <p className="t-lead measure mt-6 text-soft">
            I build and run the backends behind high-traffic consumer products.
            Two platforms I shipped at Techaircraft, SurveysIQ and Earneasy24,
            serve more than a million active users on Node.js, MongoDB, and
            Redis.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="t-data flex items-center gap-2 text-signal">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-signal"
              />
              Open to new work
            </p>
            <p className="t-data text-faint">2+ years experience</p>
            <p className="t-data text-faint">{siteConfig.shortLocation}</p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-4">
            <Button className="h-10 rounded-md px-4 text-sm" asChild>
              <a href={`mailto:${siteConfig.availability.email}`}>Email me</a>
            </Button>
            <Button
              variant="outline"
              className="h-10 rounded-md px-4 text-sm"
              asChild
            >
              <a
                href={siteConfig.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
                <ArrowUpRight className="ml-1.5 size-3.5 text-faint" />
              </a>
            </Button>
            <Link
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet t-meta ml-1 inline-flex items-center gap-1.5 text-soft hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="size-3.5 text-faint" />
            </Link>
          </div>
        </div>
      </div>

      <RequestTrace />
    </section>
  );
}
