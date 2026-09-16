import { Button } from "@/components/ui/Button";
import { ImageGallery, type GalleryImage } from "./ImageGallery";

export type MediaGroup = {
  label: string;
  images?: GalleryImage[];
  pdfs?: { url: string; label: string }[];
};

type GroupedGalleryProps = {
  groups: MediaGroup[];
};

/** Renders case study assets under labeled headings, e.g. several images of the same
 *  logo applied to different items, each with its own group heading. */
export function GroupedGallery({ groups }: GroupedGalleryProps) {
  if (groups.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <div key={group.label}>
          <h2 className="text-h3 text-foreground">{group.label}</h2>

          {group.images && group.images.length > 0 && (
            <div className="mt-4">
              <ImageGallery images={group.images} />
            </div>
          )}

          {group.pdfs && group.pdfs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {group.pdfs.map((pdf) => (
                <Button key={pdf.url} href={pdf.url} variant="secondary" target="_blank" rel="noopener noreferrer">
                  {pdf.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
