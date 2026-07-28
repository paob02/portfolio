import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "narrow" | "default" | "wide";

// narrow: long-form reading text (about copy, case study prose)
// default: general page content
// wide: image-heavy layouts, project grids
const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-2xl",
  default: "max-w-3xl",
  wide: "max-w-5xl",
};

type ContainerProps = {
  /** Element to render as — use "section"/"article" etc. when semantics call for it. */
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
};

/** Horizontal max-width + centering + page gutters. Pair with `Section` for vertical rhythm. */
export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto px-6 sm:px-8", sizeClasses[size], className)}>
      {children}
    </Tag>
  );
}
