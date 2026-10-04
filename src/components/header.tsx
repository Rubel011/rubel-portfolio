"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);
  const email = siteConfig.availability.email;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-8 px-6">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span className="t-h3 whitespace-nowrap">{siteConfig.name}</span>
          <span className="t-data hidden text-faint sm:inline">
            {siteConfig.role}
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-7 text-sm md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="link-quiet text-soft transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden h-9 rounded-md px-3.5 text-sm md:inline-flex"
            asChild
          >
            <a href={`mailto:${email}`}>Email me</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-md md:hidden"
                aria-label="Open menu"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5h14M2 13h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              showCloseButton={false}
              className="border-b border-border bg-background"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Site navigation</SheetDescription>
              </SheetHeader>

              <div className="mx-auto w-full max-w-[1180px] px-6 pb-6">
                <div className="flex h-16 items-center justify-between">
                  <span className="t-h3">{siteConfig.name}</span>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-9 rounded-md"
                      aria-label="Close menu"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 4l10 10M14 4L4 14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Button>
                  </SheetClose>
                </div>

                <Separator />

                <nav aria-label="Main" className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-border py-3 text-[0.9375rem] text-soft last:border-b-0 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <Button className="mt-4 h-10 w-full rounded-md text-sm" asChild>
                  <a href={`mailto:${email}`} onClick={() => setOpen(false)}>
                    Email me
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
