"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { siteConfig } from "@/lib/portfolio-data";

const kolkataTime = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

export function Contact() {
  const email = siteConfig.availability.email;
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(kolkataTime.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <Section id="contact" label="Contact" note="Kolkata, India">
      <p className="t-lead measure">
        I&apos;m open to full-time roles and contract work on Node.js and AWS
        systems. Email is the fastest way to reach me.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${email}`}
          className="link-quiet t-h2 font-medium text-foreground"
        >
          {email}
        </a>
        <Button
          variant="outline"
          className="h-9 rounded-md px-3 text-sm"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(email);
              setCopied(true);
              toast.success("Email address copied");
            } catch {
              toast.error("Couldn't copy. Select the address instead.");
            }
          }}
        >
          {copied ? (
            <CheckIcon className="mr-1.5 size-3.5 text-signal" />
          ) : (
            <CopyIcon className="mr-1.5 size-3.5 text-faint" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <dl className="mt-9 grid gap-x-10 gap-y-5 border-t border-border pt-7 sm:grid-cols-3">
        <div>
          <dt className="t-data text-faint">Local time</dt>
          <dd className="t-data mt-1.5 text-soft">
            {now ? `${now} IST` : "--:-- IST"}
          </dd>
        </div>
        <div>
          <dt className="t-data text-faint">GitHub</dt>
          <dd className="t-data mt-1.5">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-soft hover:text-foreground"
            >
              Rubel011
            </a>
          </dd>
        </div>
        <div>
          <dt className="t-data text-faint">LinkedIn</dt>
          <dd className="t-data mt-1.5">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet text-soft hover:text-foreground"
            >
              rubel-foridi
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
