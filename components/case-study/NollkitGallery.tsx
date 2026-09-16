import Image from "next/image";

const BASE = "/images/case-studies/graphicdesign";

// Row heights are shared clamp() values so paired images always render at
// exactly the same height as each other, at any viewport width.
const LOGO_ROW_HEIGHT = "h-[clamp(96px,22vw,320px)]";
const MARKE_ROW_HEIGHT = "h-[clamp(112px,26vw,360px)]";
const TROJA_ROW_HEIGHT = "h-[clamp(96px,26vw,360px)]";
const NOLLAN_ROW_HEIGHT = "h-[clamp(96px,24vw,340px)]";
const PHADDER_ROW_HEIGHT = "h-[clamp(80px,18vw,260px)]";

const imageClassName = "w-auto shrink-0 rounded-card border border-border";
// Rows never wrap onto a second line (which would look like vertical stacking) —
// on a viewport too narrow to fit both images at their minimum height, the row
// scrolls horizontally instead.
const rowClassName = "flex flex-nowrap items-start gap-6 overflow-x-auto";

/**
 * A one-off, hand-laid-out gallery for the NollKIT case study: pairs of images
 * that need to match each other's height exactly, which the generic
 * `ImageGallery` grid (sized by column width, not by explicit height) can't do.
 */
export function NollkitGallery() {
  return (
    <div className="flex flex-col gap-10">
      <div className={rowClassName}>
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

      <div className={rowClassName}>
        <div className={`flex ${MARKE_ROW_HEIGHT} flex-col gap-4 shrink-0`}>
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
        <Image
          src={`${BASE}/markesput.png`}
          alt="The NollKIT badge embroidered onto fabric."
          width={482}
          height={708}
          quality={100}
          className={`${MARKE_ROW_HEIGHT} ${imageClassName}`}
        />
      </div>

      <div className={rowClassName}>
        <Image
          src={`${BASE}/framsidatransparent_22.png`}
          alt="The NollKIT branding on the front of a shirt."
          width={3754}
          height={3493}
          quality={100}
          className={`${TROJA_ROW_HEIGHT} ${imageClassName}`}
        />
        <Image
          src={`${BASE}/trojaaxeln.png`}
          alt="The NollKIT branding applied to a shirt sleeve."
          width={252}
          height={234}
          quality={100}
          className={`${TROJA_ROW_HEIGHT} ${imageClassName}`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className={rowClassName}>
          <Image
            src={`${BASE}/Nollanprint.png`}
            alt="The Nollan print design."
            width={1193}
            height={1229}
            quality={100}
            className={`${NOLLAN_ROW_HEIGHT} ${imageClassName}`}
          />
          <Image
            src={`${BASE}/Nollan1.png`}
            alt="The Nollan mascot character design."
            width={390}
            height={394}
            quality={100}
            className={`${NOLLAN_ROW_HEIGHT} ${imageClassName}`}
          />
        </div>
        <div className={rowClassName}>
          <Image
            src={`${BASE}/Phadderprint.png`}
            alt="The Phadder print design."
            width={1588}
            height={957}
            quality={100}
            className={`${PHADDER_ROW_HEIGHT} ${imageClassName}`}
          />
          <Image
            src={`${BASE}/phadder1.png`}
            alt="The Phadder mascot character design."
            width={263}
            height={212}
            quality={100}
            className={`${PHADDER_ROW_HEIGHT} ${imageClassName}`}
          />
        </div>
      </div>
    </div>
  );
}
