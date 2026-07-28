import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardPadding = "none" | "sm" | "md" | "lg";

const paddingClasses: Record<CardPadding, string> = {
  none: "", // caller manages internal spacing — e.g. ProjectCard's full-bleed image
  sm: "p-6",
  md: "p-8",
  lg: "p-12",
};

type CardProps = {
  as?: ElementType;
  padding?: CardPadding;
  /** Adds a gentle lift + deeper shadow on hover, for cards that are themselves clickable. */
  hover?: boolean;
  className?: string;
  children: ReactNode;
};

/** The base surface for grouped content: soft rounded corners, warm neutral fill, quiet shadow. */
export function Card({ as: Tag = "div", padding = "md", hover = false, className, children }: CardProps) {
  return (
    <Tag
      className={cn(
        "overflow-hidden rounded-card border border-border bg-surface shadow-card",
        hover && "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elevated",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Tag>
  );
}
