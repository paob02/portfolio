import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-8 text-caption sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
