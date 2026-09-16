import Image from "next/image";
import { ImageGallery } from "./ImageGallery";

const BASE = "/images/case-studies/graphicdesign";

// Row heights are shared clamp() values so paired images always render at
// exactly the same height as each other, at any viewport width.
const LOGO_ROW_HEIGHT = "h-[clamp(180px,26vw,320px)]";
const MARKE_ROW_HEIGHT = "h-[clamp(220px,30vw,360px)]";
const TROJA_ROW_HEIGHT = "h-[clamp(220px,30vw,360px)]";

const imageClassName = "w-auto rounded-card border border-border object-contain";

/**
 * A one-off, hand-laid-out gallery for the NollKIT case study: pairs of images
 * that need to match each other's height exactly, which the generic
 * `ImageGallery` grid (sized by column width, not by explicit height) can't do.
 */
export function NollkitGallery() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap items-start gap-6">
        <Image
          src={`${BASE}/Logo_Final_09CCDA.png`}
          alt="The final NollKIT logo."
          width={3300}
          height={2400}
          quality={100}
          className={`${LOGO_ROW_HEIGHT} ${imageClassName}`}
        />
        <Image
          src={`${BASE}/logoAxeln.png`}
          alt="The NollKIT logo applied to a jacket sleeve."
          width={223}
          height={218}
          quality={100}
          className={`${LOGO_ROW_HEIGHT} ${imageClassName}`}
        />
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <Image
          src={`${BASE}/markesput.png`}
          alt="The NollKIT badge embroidered onto fabric."
          width={482}
          height={708}
          quality={100}
          className={`${MARKE_ROW_HEIGHT} ${imageClassName}`}
        />
        <div className={`flex ${MARKE_ROW_HEIGHT} flex-col gap-4`}>
          <Image
            src={`${BASE}/Marke22.png`}
            alt="The NollKIT 2022 badge design."
            width={2000}
            height={2000}
            quality={100}
            className={`min-h-0 flex-1 ${imageClassName}`}
          />
          <Image
            src={`${BASE}/marketyg.png`}
            alt="The NollKIT badge design printed on fabric."
            width={627}
            height={602}
            quality={100}
            className={`min-h-0 flex-1 ${imageClassName}`}
          />
        </div>
      </div>

      <ImageGallery
        images={[
          {
            src: `${BASE}/Nollan1.png`,
            alt: "The Nollan mascot character design, version 1.",
            width: 390,
            height: 394,
          },
          {
            src: `${BASE}/Nollan2.png`,
            alt: "The Nollan mascot character design, version 2.",
            width: 262,
            height: 229,
          },
          {
            src: `${BASE}/Nollanprint.png`,
            alt: "The Nollan print design.",
            width: 1193,
            height: 1229,
          },
          {
            src: `${BASE}/Phadderprint.png`,
            alt: "The Phadder print design.",
            width: 1588,
            height: 957,
          },
        ]}
      />

      <div className="flex flex-wrap items-start gap-6">
        <Image
          src={`${BASE}/trojaaxeln.png`}
          alt="The NollKIT branding applied to a shirt sleeve."
          width={252}
          height={234}
          quality={100}
          className={`${TROJA_ROW_HEIGHT} ${imageClassName}`}
        />
        <Image
          src={`${BASE}/framsidatransparent_22.png`}
          alt="The NollKIT branding on the front of a shirt."
          width={3754}
          height={3493}
          quality={100}
          className={`${TROJA_ROW_HEIGHT} ${imageClassName}`}
        />
      </div>
    </div>
  );
}
