"use client";

import { motion } from "framer-motion";
import { BottleVisual } from "@/components/bottle-visual";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-sand to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col items-start gap-7"
        >
          <motion.p
            variants={fade}
            transition={{ duration: 0.9, ease }}
            className="text-[11px] uppercase tracking-[0.42em] text-champagne-deep"
          >
            Eau de Parfum — Racikan 2026
          </motion.p>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.9, ease }}
            className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
          >
            Elegansi yang
            <span className="block italic text-champagne-deep">tinggal di kulit.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            transition={{ duration: 0.9, ease }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            LUVE meracik setiap komposisi perlahan — dari bunga yang dipetik sebelum
            fajar, sampai kehangatan yang tertinggal berjam-jam kemudian.
          </motion.p>

          <motion.div
            variants={fade}
            transition={{ duration: 0.9, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#koleksi"
              className={buttonVariants({
                size: "lg",
                className: "px-7 text-[11px] uppercase tracking-[0.2em]",
              })}
            >
              Jelajahi Koleksi
            </a>
            <a
              href="#cerita"
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className: "text-[11px] uppercase tracking-[0.2em]",
              })}
            >
              Kenali Filosofi
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease }}
          className={cn("relative mx-auto h-[420px] w-full max-w-sm")}
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-champagne/25 blur-3xl" />
          <BottleVisual variant="tall" className="relative drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}