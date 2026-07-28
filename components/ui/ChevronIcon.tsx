import { cn } from "@/lib/cn";

type ChevronIconProps = {
  direction?: "left" | "right";
  className?: string;
};

/** The chevron used by `BackLink` and carousel prev/next controls — shared so both stay visually identical. */
export function ChevronIcon({ direction = "left", className }: ChevronIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={cn(direction === "right" && "rotate-180", className)}
    >
      <path
        d="M12.5 15.5 6.5 10l6-5.5"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
