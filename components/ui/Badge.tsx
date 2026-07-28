import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "neutral" | "accent";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border border-border bg-background text-foreground-muted",
  // Tinted with the accent color itself (at low opacity) rather than a
  // separate hardcoded color, so it stays correct if the palette changes.
  accent: "border border-transparent bg-accent/10 text-accent",
};

type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
};

// Uses Tailwind's stock text-xs/tracking-wide rather than the design system's
// `text-label` utility — that utility bakes in a muted text color, which would
// fight the `accent` variant's color class (two unconditional classes setting
// the same property have no reliable winner). Small deliberate divergence.
export function Badge({ variant = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
