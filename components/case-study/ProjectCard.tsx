import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type ProjectCardLayout = "vertical" | "horizontal";

type ProjectCardProps = {
  href: string;
  title: string;
  summary: string;
  coverImage: string;
  coverImageAlt: string;
  role?: string;
  year?: string;
  tags?: string[];
  /** "vertical": image on top, for grids. "horizontal": image beside content from sm up (still stacks on mobile), for a list. */
  layout?: ProjectCardLayout;
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
  layout = "vertical",
  className,
}: ProjectCardProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Card as="article" padding="none" hover className={isHorizontal ? "sm:flex sm:flex-row" : undefined}>
        <div
          className={cn(
            "relative aspect-[4/3] overflow-hidden bg-background",
            isHorizontal && "sm:aspect-auto sm:w-2/5 sm:shrink-0"
          )}
        >
          <Image
            src={coverImage}
            alt={coverImageAlt}
            fill
            sizes={isHorizontal ? "(min-width: 640px) 40vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className={cn("p-6 sm:p-8", isHorizontal && "sm:flex sm:flex-1 sm:flex-col sm:justify-center")}>
          {tags && tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          <h3 className="text-h3 text-foreground line-clamp-2">{title}</h3>
          <p className="mt-2 text-body text-foreground-muted line-clamp-3">{summary}</p>
          {(role || year) && (
            <p className="mt-4 text-caption">
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
