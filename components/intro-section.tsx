import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { intro, images } = siteContent;

export function IntroSection() {
  return (
    <section className="w-full border-t border-gold/10 bg-black">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-16 md:py-32">
        <Reveal>
          <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden mx-auto md:max-w-none md:mx-0">
            <Image
              src={images.portrait}
              alt=""
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <h2 className="font-display text-3xl leading-snug font-medium text-ivory sm:text-4xl">
            {intro.heading}
          </h2>
          <div className="mt-8 space-y-6">
            {intro.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ivory/70">
                {p}
              </p>
            ))}
          </div>
          {/* Aksen tulisan tangan — kalimat pendek, huruf biasa. */}
          <p className="text-script mt-10 text-gold">{intro.highlight}</p>
          <p className="mt-8 text-base leading-relaxed text-ivory/70">
            {intro.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
