"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-neutral-800/50 bg-black/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold text-neutral-100 tracking-tight transition-colors hover:text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-blue-500 text-xs font-bold text-white">
            {siteConfig.name[0]}
          </span>
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-xs text-neutral-400 transition-all hover:bg-neutral-800/50 hover:text-neutral-200"
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="sm"
            className="ml-2 h-8 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 px-4 text-xs font-medium text-white hover:from-purple-500 hover:to-blue-500"
            asChild
          >
            <Link href="/#contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile nav (Shadcn Sheet) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-800/50 hover:text-neutral-200"
                aria-label="Toggle menu"
              >
                <ListIcon size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              showCloseButton={false}
              className="border-b border-neutral-800/50 bg-black/80 backdrop-blur-2xl"
            >
              <div className="mx-auto max-w-4xl px-6">
                {/* Top bar with logo and close */}
                <div className="flex h-16 items-center justify-between">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-sm font-semibold text-neutral-100"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-blue-500 text-xs font-bold text-white">
                      {siteConfig.name[0]}
                    </span>
                    {siteConfig.name}
                  </Link>
                  <SheetClose asChild>
                    <button
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-800/50 hover:text-neutral-200"
                      aria-label="Close menu"
                    >
                      <XIcon size={20} />
                    </button>
                  </SheetClose>
                </div>

                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Mobile navigation menu</SheetDescription>
                </SheetHeader>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 border-t border-neutral-800/50 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-300 transition-all hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA */}
                <div className="border-t border-neutral-800/50 py-4">
                  <Button
                    size="lg"
                    className="h-11 w-full rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-sm font-medium text-white hover:from-purple-500 hover:to-blue-500"
                    asChild
                  >
                    <Link href="/#contact" onClick={() => setOpen(false)}>
                      Hire Me
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
