"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { setMusicDuck } from "@/components/music-player";

/*
  Mengendalikan suara SEMUA <video> di halaman sebagai satu grup:
  - Setel properti .muted langsung (atribut muted tetap ada -> autoplay
    senyap awal tidak terganggu, sesuai aturan browser).
  - Video preload tak terlihat (opacity-0 di video-sequence) dilewati.
  - MutationObserver membawa status ke klip baru saat video-sequence
    berganti klip (elemen <video> di-remount).
*/
function applySound(on: boolean) {
  for (const v of Array.from(document.querySelectorAll("video"))) {
    if (getComputedStyle(v).opacity === "0") continue;
    v.muted = !on;
  }
}

export function VideoSoundToggle() {
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    if (!soundOn) return;
    const mo = new MutationObserver(() => applySound(true));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [soundOn]);

  const toggle = () => {
    const on = !soundOn;
    setSoundOn(on);
    applySound(on);
    setMusicDuck(on);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={soundOn}
      aria-label={soundOn ? "Mute video sound" : "Unmute video sound"}
      className="fixed right-20 bottom-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-gold/50 bg-black/70 text-gold backdrop-blur-md transition-colors duration-200 hover:bg-gold hover:text-black"
    >
      {soundOn ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
    </button>
  );
}
