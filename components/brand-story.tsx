"use client";

import { motion } from "framer-motion";
import { BottleVisual } from "@/components/bottle-visual";

const ease = [0.22, 1, 0.36, 1] as const;

const milestones = [
  { value: "24", label: "Jam ketahanan aroma" },
  { value: "12", label: "Bahan baku pilihan" },
  { value: "6", label: "Minggu maserasi" },
];

export function BrandStory() {
  return (
    <section id="cerita" className="scroll-mt-20 border-y border-border/60 bg-sand/60">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto h-[360px] w-full max-w-xs"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-6 bottom-0 h-24 rounded-full bg-champagne/30 blur-2xl"
          />
          <BottleVisual variant="flacon" className="relative" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="text-[11px] uppercase tracking-[0.42em] text-champagne-deep">
            Filosofi
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Diramu perlahan, bukan dirumus cepat.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Setiap botol LUVE melewati maserasi enam minggu sebelum layak disemprotkan.
            Kami memilih jalan yang lebih lambat karena aroma tidak bisa dipercepat —
            ia hanya bisa dirawat.
          </p>

          <blockquote className="mt-10 border-l border-champagne-deep/40 pl-6 font-serif text-2xl italic leading-snug text-foreground/80">
            &ldquo;Wangi bukan sekadar tanda kehadiran &mdash; ia cara mengingat.&rdquo;
          </blockquote>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
            {milestones.map((milestone) => (
              <div key={milestone.label}>
                <p className="font-serif text-3xl text-foreground">
                  {milestone.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {milestone.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}