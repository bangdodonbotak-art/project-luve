import { siteContent } from "@/data/site-content";

const { images } = siteContent;

/**
 * Interlude video penuh layar — fit to screen via object-cover,
 * sumber portrait untuk layar kecil, landscape untuk besar.
 * Poster memakai foto webp yang sama (aturannya: <video> untuk video).
 */
export function MediaBand() {
  return (
    <section className="relative h-dvh max-h-[900px] w-full overflow-hidden border-t border-gold/10 bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={images.landscape}
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      >
        <source media="(max-width: 767px)" srcSet={images.videoPortrait} />
        <source srcSet={images.videoLandscape} />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"
      />
    </section>
  );
}
