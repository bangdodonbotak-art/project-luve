import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { experience, images } = siteContent;

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden border-t border-gold/10"
    >
      {/* Latar foto penuh layar — landscape di desktop, portrait di HP. */}
      <Image
        src={images.portrait}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 size-full object-cover md:hidden"
      />
      <Image
        src={images.landscape}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 hidden size-full object-cover md:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-28 sm:px-8">
        <Reveal>
          <h2 className="text-center font-display text-2xl tracking-[0.3em] text-gold uppercase sm:text-3xl">
            {experience.title}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-8 h-px w-16 bg-gold/50"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 space-y-6">
            {experience.paragraphs.map((p) => (
              <p
                key={p}
                className="text-center text-base leading-relaxed text-ivory/85 sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
