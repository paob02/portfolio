import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--palette-deep-olive)] dark:bg-[var(--palette-cedar)]">
      <div className="mx-auto max-w-3xl px-6 py-8 text-[length:var(--text-caption-size)] leading-[var(--text-caption-leading)] font-[var(--text-caption-weight)] tracking-[var(--text-caption-tracking)] text-[var(--palette-linen)] sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
