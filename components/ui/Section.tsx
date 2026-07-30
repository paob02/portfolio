import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionTone = "base" | "surface";
type SectionSpacing = "default" | "compact" | "none";

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-section", // fluid 48px -> 96px, see --spacing-section in globals.css
  compact: "py-12 sm:py-16",
  none: "",
};

type SectionProps = {
  as?: ElementType;
  /** "surface" applies a warm tinted band — use sparingly to separate sections, like layered paper. */
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
  children: ReactNode;
};

/** Vertical rhythm + optional background tone for a page section. Nest a `Container` inside for width. */
export function Section({
  as: Tag = "section",
  tone = "base",
  spacing = "default",
  id,
  className,
  children,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(spacingClasses[spacing], tone === "surface" && "bg-section-surface", className)}
    >
      {children}
    </Tag>
  );
}
