"use client";

import { motion } from "framer-motion";
import { BottleVisual } from "@/components/bottle-visual";
import { buttonVariants } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

type Perfume = {
  name: string;
  family: string;
  notes: string[];
  price: string;
  variant: "flacon" | "tall" | "round";
};

const perfumes: Perfume[] = [
  {
    name: "Aube",
    family: "Floral Musk",
    notes: ["Peony", "Iris", "White Musk"],
    price: "Rp 1.480.000",
    variant: "flacon",
  },
  {
    name: "Nocturne",
    family: "Amber Woody",
    notes: ["Bergamot", "Cedar", "Amber"],
    price: "Rp 1.680.000",
    variant: "tall",
  },
  {
    name: "Sable",
    family: "Warm Spice",
    notes: ["Saffron", "Sandalwood", "Vanilla"],
    price: "Rp 1.560.000",
    variant: "round",
  },
];

export function PerfumeCollection() {
  return (
    <section id="koleksi" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.42em] text-champagne-deep">
            Koleksi
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Tiga komposisi, tiga suasana.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Diformulasikan untuk iklim tropis — ringan saat pertama disemprot, lalu
          menghangat mengikuti suhu tubuh.
        </p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {perfumes.map((perfume, index) => (
          <motion.article
            key={perfume.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease,
            }}
            className="group flex flex-col"
          >
            <div className="relative flex h-72 items-center justify-center rounded-2xl border border-border/70 bg-card/60 transition-colors group-hover:border-champagne-deep/40">
              <div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-8 h-16 rounded-full bg-champagne/25 blur-2xl"
              />
              <BottleVisual
                variant={perfume.variant}
                className="relative h-56 w-auto"
              />
            </div>

            <div className="mt-6 flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl text-foreground">{perfume.name}</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {perfume.family}
              </p>
            </div>

            <ul className="mt-3 flex flex-wrap gap-2">
              {perfume.notes.map((note) => (
                <li
                  key={note}
                  className="rounded-4xl border border-border/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/60 pt-5">
              <p className="text-sm text-foreground/80">{perfume.price}</p>
              <a
                href="#kontak"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "text-[11px] uppercase tracking-[0.16em]",
                })}
              >
                Lihat detail
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}