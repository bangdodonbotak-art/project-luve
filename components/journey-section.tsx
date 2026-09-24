import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { journey } = siteContent;

export function JourneySection() {
  return (
    <section className="w-full border-t border-gold/10 bg-black">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="text-center font-display text-2xl tracking-[0.3em] text-gold uppercase sm:text-3xl">
            {journey.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {journey.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="h-full border-t border-gold/15 pt-8">
                <h3 className="font-display text-xl font-medium tracking-[0.28em] text-ivory uppercase">
                  {item.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gold/90">
                  {item.ingredients.join("  ·  ")}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ivory/65">
                  {item.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
