"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { siteContent } from "@/data/site-content";

/*
  Ducking: saat suara video diaktifkan, panggil setMusicDuck(true) — musik
  dijeda sementara; setMusicDuck(false) mengembalikan status musik sebelumnya.
  Komponen ini dipasang sekali di layout sehingga <audio> tidak pernah dibuat
  ulang saat scroll/navigasi.
*/
let ducked = false;
const duckListeners = new Set<(on: boolean) => void>();

export function setMusicDuck(on: boolean) {
  if (ducked === on) return;
  ducked = on;
  duckListeners.forEach((l) => l(on));
}

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const wasPlayingRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onDuck = (on: boolean) => {
      const a = audioRef.current;
      if (!a) return;
      if (on) {
        wasPlayingRef.current = !a.paused;
        a.pause();
      } else if (wasPlayingRef.current) {
        wasPlayingRef.current = false;
        a.play().catch(() => {});
      }
    };
    duckListeners.add(onDuck);
    return () => {
      duckListeners.delete(onDuck);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={siteContent.images.music}
        preload="none"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-gold/50 bg-black/70 text-gold backdrop-blur-md transition-colors duration-200 hover:bg-gold hover:text-black"
      >
        {playing ? <Pause className="size-5" /> : <Music className="size-5" />}
      </button>
    </>
  );
}
