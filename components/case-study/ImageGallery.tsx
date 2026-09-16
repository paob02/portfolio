import Image from "next/image";
import { cn } from "@/lib/cn";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  /** Set true to stack images full-width instead of the default 2-column grid. */
  stacked?: boolean;
};

/**
 * A responsive grid of images shown at their natural aspect ratio. Deliberately
 * never crops (no `fill` + `object-cover`) — some case studies use this for
 * tall, text-dense poster scans where cropping to a fixed tile would cut off
 * content, not just casual photos.
 */
export function ImageGallery({ images, stacked = false }: ImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid gap-6", images.length > 1 && !stacked && "sm:grid-cols-2")}>
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={images.length > 1 && !stacked ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 60vw, 100vw"}
          className="h-auto w-full rounded-card border border-border"
        />
      ))}
    </div>
  );
}
