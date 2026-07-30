import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  coverImage: string;
  coverImageAlt: string;
  role?: string;
  year?: string;
  tags?: string[];
  /** Set false for a text-only card (e.g. a compact list) — default true shows the cover image on top. */
  showImage?: boolean;
  className?: string;
};

/** A case study teaser: cover image plus title/summary/meta, entirely clickable. */
export function ProjectCard({
  href,
  title,
  summary,
  coverImage,
  coverImageAlt,
  role,
  year,
  tags,
  showImage = true,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Card
        as="article"
        padding="none"
        hover
        // `!` is required on every color/border override here, light AND dark:
        // Card's own base classes (`bg-surface`, `border-border`) are plain,
        // unconditional utilities at the same specificity, and Tailwind's
        // internal ordering happens to emit them *after* these arbitrary-value
        // ones — so without `!` they silently win and the override does
        // nothing (confirmed via the compiled CSS, not assumed). Both the
        // light and dark variants need `!` for the *same* reason a plain `!`
        // on only the light one would break dark mode: an unconditional
        // `!important` rule beats a media-scoped rule that lacks `!important`,
        // regardless of which mode is active — so dark mode needs its own
        // `!important` to win back its own media query.
        className="border-2 border-[var(--palette-deep-olive)]! bg-[var(--palette-cedar)]! dark:border-[var(--palette-clockwork)]! dark:bg-[var(--palette-weathered)]!"
      >
        {showImage && (
          <div className="relative aspect-[4/3] overflow-hidden bg-background">
            <Image
              src={coverImage}
              alt={coverImageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="p-6 sm:p-8">
          {tags && tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          {/* Card is a deliberately distinct color in every mode now, so text
              colors are fixed here rather than following the page's normal
              foreground tokens (which would be illegible against it). Light
              mode is all Linen now (title included); dark mode keeps its
              existing Linen title / Café noir body split. */}
          <h3 className="text-h3 text-[var(--palette-linen)] line-clamp-2">{title}</h3>
          <p className="mt-2 text-body text-[var(--palette-linen)] line-clamp-3 dark:text-[var(--palette-cafe-noir)]">
            {summary}
          </p>
          {(role || year) && (
            <p className="mt-4 text-[length:var(--text-caption-size)] leading-[var(--text-caption-leading)] font-[var(--text-caption-weight)] tracking-[var(--text-caption-tracking)] text-[var(--palette-linen)] dark:text-[var(--palette-cafe-noir)]">
              {role}
              {role && year ? " · " : null}
              {year}
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
}
