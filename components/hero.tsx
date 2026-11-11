"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { siteContent } from "@/data/site-content";

const { hero, images } = siteContent;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh w-full flex-col items-center justify-start overflow-hidden"
    >
      {/* Poster/fallback foto — portrait di HP, landscape di desktop (fit to screen). */}
      <Image
        src={images.portrait}
        alt="Botol LUVE Eau de Parfum di antara bergamot, blackcurrant, melati, dan kayu hangat"
        fill
        priority
        sizes="(min-width: 768px) 0px, 100vw"
        className="absolute inset-0 size-full object-cover md:hidden"
      />
      <Image
        src={images.landscape}
        alt="Botol LUVE Eau de Parfum di antara bergamot, blackcurrant, melati, dan kayu hangat"
        fill
        priority
        sizes="(max-width: 767px) 0px, 100vw"
        className="absolute inset-0 hidden size-full object-cover md:block"
      />

      {/* Video latar — source portrait untuk layar kecil, landscape untuk besar. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      >
        <source media="(max-width: 767px)" srcSet={images.videoPortrait} />
        <source srcSet={images.videoLandscape} />
      </video>

      {/* Overlay gradasi agar teks tetap kontras. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black"
      />

      {/* Scrim lokal di belakang blok teks: tanpa ini, huruf ivory/gold tenggelam
          di area gambar yang terang (bergamot, bunga melati, amber). Botolnya tinggi
          dan tepat di tengah, jadi scrim harus menutup zona teks sampai ~70% hero —
          bukan cuma lingkaran kecil di tengah. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(ellipse_72%_62%_at_50%_30%,rgba(0,0,0,0.8),rgba(0,0,0,0.5)_55%,rgba(0,0,0,0.18)_78%,transparent_92%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-24 pb-16 text-center sm:px-8 md:pt-28"
      >
        <motion.p
          variants={item}
          className="font-display text-xs font-medium tracking-[0.34em] text-gold uppercase sm:text-sm"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-6xl leading-none font-medium tracking-[0.16em] text-ivory uppercase sm:text-7xl lg:text-8xl"
        >
          {hero.brand}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl font-display text-sm leading-relaxed tracking-[0.26em] break-words text-ivory/80 uppercase sm:text-base"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center bg-gold px-8 py-3.5 text-sm tracking-[0.22em] text-black uppercase transition-colors duration-200 hover:bg-gold-deep sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center border border-ivory/35 px-8 py-3.5 text-sm tracking-[0.22em] text-ivory/85 uppercase transition-colors duration-200 hover:border-gold hover:text-gold sm:w-auto"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
