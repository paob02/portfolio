import { cn } from "@/lib/cn";

type FigmaEmbedProps = {
  /** A regular figma.com design/proto share URL — pass it through as-is, this builds the embed URL. */
  url: string;
  /** Accessible name for the iframe, e.g. "Group Project — Figma prototype". */
  title: string;
  className?: string;
};

/** An interactive, click-through Figma file or prototype, embedded via Figma's own embed endpoint. */
export function FigmaEmbed({ url, title, className }: FigmaEmbedProps) {
  const embedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

  return (
    <div className={cn("overflow-hidden rounded-card border border-border shadow-card", className)}>
      <iframe
        src={embedSrc}
        title={title}
        className="aspect-video w-full"
        allow="fullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
