import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );
}
