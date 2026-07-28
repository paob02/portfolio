import Link from "next/link";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { cn } from "@/lib/cn";

type BackLinkProps = {
  href: string;
  /** Accessible name — this renders icon-only, so a real label is required (e.g. "Back to work"). */
  label: string;
  className?: string;
};

/** A small circular back-arrow button, for returning from a detail page to its index. */
export function BackLink({ href, label, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors",
        "hover:border-transparent hover:bg-surface hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <ChevronIcon className="h-5 w-5" />
    </Link>
  );
}
