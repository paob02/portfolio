"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CollapsibleSectionProps = {
  title: string;
  children: ReactNode;
};

/**
 * A work-page section: a bordered header box (title + chevron) that's collapsed by
 * default, expanding to reveal the section's cards when the header is clicked.
 */
export function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 first:mt-10">
      <h2 className="text-h3">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-card border-2 border-[var(--palette-weathered)] bg-background px-6 py-4 text-left text-foreground"
        >
          <span>{title}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--palette-weathered)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "ml-4 h-5 w-5 shrink-0 transition-transform duration-300",
              open ? "rotate-0" : "rotate-180"
            )}
          >
            <path d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </h2>
      {open && <div className="mt-6 flex flex-col gap-8">{children}</div>}
    </div>
  );
}
