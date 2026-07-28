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
  className?: string;
};

/** A case study teaser: full-bleed cover image over a padded content block, entirely clickable. */
export function ProjectCard({
  href,
  title,
  summary,
  coverImage,
  coverImageAlt,
  role,
  year,
  tags,
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
      <Card as="article" padding="none" hover>
        <div className="relative aspect-[4/3] overflow-hidden bg-background">
          <Image
            src={coverImage}
            alt={coverImageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6 sm:p-8">
          {tags && tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
          <h3 className="text-h3 text-foreground">{title}</h3>
          <p className="mt-2 text-body text-foreground-muted">{summary}</p>
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
