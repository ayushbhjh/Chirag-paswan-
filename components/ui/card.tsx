import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur-xl dark:bg-white/5",
        className
      )}
    >
      {children}
    </div>
  );
}
