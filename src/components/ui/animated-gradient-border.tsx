"use client";

import { cn } from "@/lib/utils";

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative rounded-xl p-[1px]", containerClassName)}>
      <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_var(--angle),theme(colors.purple.500),theme(colors.blue.500),theme(colors.cyan.400),theme(colors.purple.500))] opacity-60 blur-sm animate-[spin_4s_linear_infinite]" />
      <div className="absolute inset-0 rounded-xl bg-[conic-gradient(from_var(--angle),theme(colors.purple.500),theme(colors.blue.500),theme(colors.cyan.400),theme(colors.purple.500))] animate-[spin_4s_linear_infinite]" />
      <div
        className={cn(
          "relative rounded-xl bg-neutral-950",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
