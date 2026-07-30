import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3";

const levelClasses: Record<HeadingLevel, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

type SectionHeadingProps = {
  /** Small kicker above the title, e.g. "Case Study" or "About" — for personality, not just labeling. */
  eyebrow?: string;
  /** Extra classes for the eyebrow specifically — e.g. to override its color per-instance. */
  eyebrowClassName?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Controls both the semantic tag and the visual size — keeps document outline and design in sync. */
  as?: HeadingLevel;
  align?: "left" | "center";
  className?: string;
};

/** The recurring intro block for a page section: optional eyebrow, heading, optional supporting copy. */
export function SectionHeading({
  eyebrow,
  eyebrowClassName,
  title,
  description,
  as = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-wide text-accent",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading className={cn(levelClasses[as], "text-foreground")}>{title}</Heading>
      {description && (
        <p
          className={cn(
            "mt-4 text-body-lg text-foreground-muted",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
