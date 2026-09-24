import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { unisex, images } = siteContent;

export function UnisexSection() {
  return (
    <section id="unisex" className="w-full border-t border-gold/10 bg-black">
      {/* Blok teks atas */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-24 pb-16 text-center sm:px-8 md:pt-32 md:pb-20">
        <Reveal>
          <h2 className="text-balance font-display text-2xl leading-snug font-medium tracking-[0.14em] text-ivory uppercase sm:text-3xl">
            {unisex.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {unisex.paragraphs.map((p) => (
            <p key={p} className="mt-8 text-base leading-relaxed text-ivory/70">
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      {/* Video penuh lebar 16:9 — autoplay, poster webp sebagai fallback */}
      <Reveal delay={0.16}>
        <div className="relative aspect-video w-full overflow-hidden border-y border-gold/10">
          <video
            src={images.unisexVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={images.landscape}
            aria-hidden="true"
            className="size-full object-cover object-center"
          />
        </div>
      </Reveal>

      {/* Blok teks bawah */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-16 pb-24 text-center sm:px-8 md:pt-20 md:pb-32">
        {/* Aksen tulisan tangan — dua kalimat pendek, huruf biasa. */}
        <Reveal delay={0.16}>
          <div className="space-y-2">
            {unisex.statements.map((s) => (
              <p key={s} className="text-script text-gold">
                {s}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-14 text-base leading-relaxed text-ivory/70">
            {unisex.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
