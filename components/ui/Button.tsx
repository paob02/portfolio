import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  // Light mode: resting state is the old hovered look (brightened), hover
  // drops back to the plain accent color — an intentional inversion.
  // Dark mode keeps the original behavior (plain at rest, brightens on hover).
  primary:
    "bg-accent text-accent-foreground brightness-150 hover:brightness-100 active:brightness-95 " +
    "dark:text-[var(--palette-linen)] dark:brightness-100 dark:hover:brightness-150",
  secondary: "border border-border bg-surface text-foreground hover:bg-border",
  ghost: "text-foreground-muted hover:bg-surface hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-body",
};

// Intersection of both attribute sets so callers get autocomplete for whichever
// element this ends up rendering as. React types both sets as effectively all
// optional, so this never forces props that don't apply.
type SharedAttributes = Omit<
  ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children" | "color"
>;

type ButtonProps = SharedAttributes & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders as a Next.js `Link` for internal paths, or a new-tab `<a>` for http(s)/mailto/tel — omit for a real `<button>`. */
  href?: string;
  className?: string;
  children: ReactNode;
};

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

/** Pill-shaped, soft-shadowed action button. Rounded-full rather than a boxy rectangle — a small, deliberate warmth cue. */
export function Button({ variant = "primary", size = "md", href, className, children, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
