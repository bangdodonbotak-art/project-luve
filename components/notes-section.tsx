import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { notes } = siteContent;

export function NotesSection() {
  return (
    <section id="notes" className="w-full border-t border-gold/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="text-center font-display text-2xl tracking-[0.3em] text-gold uppercase sm:text-3xl">
            {notes.title}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-20">
          {notes.groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="grid gap-6 border-t border-gold/15 pt-10 md:grid-cols-[220px_1fr_1.2fr] md:gap-12">
                <h3 className="font-display text-lg font-medium tracking-[0.28em] text-ivory uppercase">
                  {group.label}
                </h3>
                <p className="text-base leading-relaxed text-gold/90">
                  {group.ingredients.join("  ·  ")}
                </p>
                <p className="text-base leading-relaxed text-ivory/65">
                  {group.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
