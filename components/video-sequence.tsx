"use client";

import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/data/site-content";

/*
  Pemutar video berurutan LUVE: 001 -> 002 -> 003 -> ulang.
  - Tanpa atribut loop: perpindahan didorong event onEnded.
  - Crossfade AnimatePresence (mode sync) ±0,6s; video berikutnya dipreload
    di elemen senyap di latar supaya tidak ada kedip hitam.
  - Hemat data/baterai: pause saat keluar viewport (IntersectionObserver)
    atau saat tab tersembunyi.
  - Semua video autoplay; fallback hanya saat autoplay diblokir browser
    atau semua video gagal -> poster + tombol putar
    (bar emas juga jadi pemilih video manual).
  - Semua path dibaca dari data/site-content.ts.
*/

const { videoSequence, images, hero } = siteContent;
const videos: string[] = [...videoSequence.items];
const count = videos.length;
const FADE = 0.6;

export function VideoSequence() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [gestureNeeded, setGestureNeeded] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const failRef = useRef(0);

  const next = (active + 1) % count;
  // Poster + tombol putar hanya saat autoplay ditolak browser
  // atau semua video gagal dimuat.
  const showPoster = gestureNeeded;
  const playing = !showPoster && onScreen && tabVisible;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    const onVis = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Satu titik kontrol play/pause untuk semua kondisi.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.play()
        .then(() => {
          failRef.current = 0;
        })
        .catch(() => setGestureNeeded(true));
    } else {
      v.pause();
    }
  }, [playing, active]);

  const goTo = (i: number) => {
    if (i === active) return;
    videoRef.current?.pause(); // hanya satu video yang berjalan
    failRef.current = 0;
    setProgress(0);
    setActive(i);
  };

  const handleEnded = (e: SyntheticEvent<HTMLVideoElement>) => {
    if (e.currentTarget !== videoRef.current) return;
    setProgress(0);
    setActive((a) => (a + 1) % count);
  };

  const handleError = (e: SyntheticEvent<HTMLVideoElement>) => {
    if (e.currentTarget !== videoRef.current) return;
    setProgress(0);
    failRef.current += 1;
    if (failRef.current >= count) {
      setGestureNeeded(true); // semua gagal -> hentikan, tampilkan poster
      return;
    }
    setActive((a) => (a + 1) % count);
  };

  const handleTime = (e: SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    if (v !== videoRef.current) return;
    setProgress(v.duration ? v.currentTime / v.duration : 0);
  };

  return (
    <section aria-label={hero.brand} className="relative w-full bg-black">
      <div
        ref={rootRef}
        className="relative aspect-video w-full overflow-hidden rounded-lg"
      >
        {/* video berikutnya — preload senyap di latar supaya mulus */}
        <video
          key={next}
          src={videos[next]}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full opacity-0"
        />

        <AnimatePresence>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <video
              ref={(el) => {
                if (el) videoRef.current = el;
              }}
              src={videos[active]}
              poster={images.landscape}
              muted
              playsInline
              autoPlay
              preload="auto"
              aria-label={`${hero.brand} ${active + 1} / ${count}`}
              className="size-full object-cover object-center"
              onEnded={handleEnded}
              onError={handleError}
              onTimeUpdate={handleTime}
            />
          </motion.div>
        </AnimatePresence>

        {/* poster + tombol putar (autoplay diblokir browser) */}
        <AnimatePresence>
          {showPoster && (
            <motion.button
              key="poster"
              type="button"
              onClick={() => setGestureNeeded(false)}
              aria-label={hero.brand}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="group absolute inset-0 z-10 grid place-items-center bg-black/40"
            >
              <span className="grid size-14 place-items-center rounded-full border border-gold/60 bg-black/30 text-gold transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
                <svg viewBox="0 0 24 24" className="ms-1 size-5 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* indikator progres: tiga garis emas tipis, bisa diketuk */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex gap-2 px-4 pb-2 sm:px-6 sm:pb-3">
          {videos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${hero.brand} ${i + 1} / ${count}`}
              aria-current={i === active ? "step" : undefined}
              className="flex h-6 flex-1 items-center rounded-full outline-none focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span className="relative block h-[2px] w-full overflow-hidden rounded-full bg-white/25">
                <motion.span
                  className="absolute inset-y-0 left-0 block w-full bg-gold"
                  style={{ transformOrigin: "left center" }}
                  initial={false}
                  animate={{ scaleX: i === active ? progress : 0 }}
                  transition={
                    i === active
                      ? { duration: 0.25, ease: "linear" }
                      : { duration: 0.3 }
                  }
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
