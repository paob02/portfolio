"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/lib/case-studies";

type ProjectCarouselProps = {
  caseStudies: CaseStudy[];
};

const arrowButtonClasses =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors " +
  "hover:border-transparent hover:bg-surface hover:text-foreground " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-40";

/**
 * Shows one project card at a time, stepped through with prev/next arrows.
 *
 * Every card is rendered simultaneously, stacked into the same grid cell
 * (`col-start-1 row-start-1` on all of them). CSS Grid sizes that cell to
 * its tallest child automatically, and only the active card is visible —
 * so the carousel's height is always the height of the tallest project,
 * never the currently-showing one. That's what stops the whole block
 * (and the "View all work" button below it) from jumping up and down as
 * you page through projects with differently-long summaries.
 */
export function ProjectCarousel({ caseStudies }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Featured work">
      <div className="grid">
        {caseStudies.map((caseStudy, i) => (
          <div
            key={caseStudy.slug}
            className={cn("col-start-1 row-start-1", i === index ? "visible" : "invisible")}
            aria-hidden={i !== index}
          >
            <ProjectCard
              href={`/work/${caseStudy.slug}`}
              title={caseStudy.title}
              summary={caseStudy.summary}
              coverImage={caseStudy.coverImage}
              coverImageAlt={caseStudy.coverImageAlt}
              role={caseStudy.role}
              year={caseStudy.year}
              tags={caseStudy.tags}
            />
          </div>
        ))}
      </div>

      {caseStudies.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setIndex((i) => i - 1)}
            disabled={index === 0}
            aria-label="Previous project"
            className={arrowButtonClasses}
          >
            <ChevronIcon direction="left" className="h-5 w-5" />
          </button>
          <p className="text-caption">
            {index + 1} / {caseStudies.length}
          </p>
          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            disabled={index === caseStudies.length - 1}
            aria-label="Next project"
            className={arrowButtonClasses}
          >
            <ChevronIcon direction="right" className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
