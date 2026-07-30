import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-border bg-[var(--palette-spiced-wine)] dark:bg-[var(--palette-cafe-noir)]">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 sm:px-8">
        {/* Header is a dark fill in both modes (Spiced Wine / Café noir), so
            text is hardcoded rather than following the usual foreground
            tokens — both modes want the same light text here. */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--palette-linen)]"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--palette-latte)] transition-colors hover:text-[var(--palette-linen)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
