# Design System — LUVE

Acuan tetap pengembangan UI LUVE. Diperbarui 2026-09-21 saat penyempurnaan dark luxury.
Seluruh nilai warna hidup di `app/globals.css` sebagai CSS custom properties (oklch) —
jangan hardcode hex di komponen.

## Tema

**Dark luxury** — default site adalah mode gelap (`class="dark"` di `<html>`,
`color-scheme: dark`). Mode `.dark` di globals.css adalah sumber kebenaran; blok `:root`
(light) dipertahankan hanya sebagai fallback shadcn, jangan dipakai untuk styling baru
kecuali diminta light mode.

| Token | Nilai oklch | Peran |
|---|---|---|
| `--background` | `oklch(0.16 0.012 60)` | near-black warm (ink) |
| `--foreground` | `oklch(0.965 0.006 85)` | cream |
| `--champagne` | `oklch(0.84 0.06 84)` | gold terang — glow, aura, highlight |
| `--champagne-deep` | `oklch(0.7 0.08 78)` | gold deep — eyebrow label, link, aksen teks |
| `--sand` | `oklch(0.22 0.012 70)` | panel/section alternatif sangat gelap |
| `--ink` | cream di dark mode | label botol dsb. |

Aturan: **tidak ada warna cerah/playful**. Aksen selain gold hanya `--destructive`.
Deep maroon belum dipakai — kalau perlu, tambah token baru di globals.css, jangan inline.

## Tipografi

- Heading & angka besar: **Cormorant Garamond** (`font-serif`), weight 300–600, italic
  untuk frasa penekanan (`text-champagne-deep`).
- Body & UI: **Inter** (`font-sans`), thin/normal.
- Eyebrow label per section: `text-[11px] uppercase tracking-[0.42em] text-champagne-deep`.
- Label kecil (harga, tag, nav): `text-[11px] uppercase tracking-[0.16em]`–`[0.2em]`.
- Wordmark "LUVE": `font-serif tracking-[0.35em]`.

## Spacing & Layout

- Konten: `max-w-6xl px-6` (CTA band `max-w-3xl`).
- Section padding: `py-32` mobile → `lg:py-40` — breathable, jangan dikurangi.
- Grid gap besar antar kolom: `gap-16`; gap antar item grid produk `gap-10`.
- Divider: `border-border/60` (section) — konsisten, jangan campur `/70` untuk hal setara.
- Heading section `mt-4/5` dari eyebrow; paragraf `mt-6`; blok kutipan `mt-10`.

## Motion (Framer Motion)

- Easing global: `const ease = [0.22, 1, 0.36, 1]` — salin per file (kecil, tidak perlu lib).
- Durasi: reveal 0.8–0.9s, hero entrance 1.1s, hover 0.3–0.5s, transisi CSS 500–700ms.
- Scroll reveal: `whileInView` + `viewport={{ once: true, margin: "-80px"|"-120px" }}`.
- Parallax hero: `useScroll` + `useTransform`, MotionValue di layer `style` terpisah,
  bukan dicampur di `animate`.
- Idle float bottle cerita: `animate={{ y: [0,-8,0] }}` loop 7s easeInOut.
- Reduced motion ditangani `MotionConfig reducedMotion="user"` (motion-provider.tsx) —
  jangan tambah CSS keyframes manual.

## Komponen & Interaksi

- Button via `buttonVariants` (shadcn/base-ui). CTA primer: ukuran `lg`,
  `px-8 text-[11px] uppercase tracking-[0.2em]`, glow
  `shadow-[0_0_40px_-12px_var(--champagne)]`, hover `-translate-y-0.5 bg-primary/90`.
- Semua elemen clickable: `cursor-pointer`.
- Produk card: lift `whileHover={{ y: -6 }}`; bottle zoom `group-hover:scale-[1.06]`
  (700ms); panel `overflow-hidden` + gradient overlay `from-ink/40` fade-in saat hover;
  border gold menebal + aura champagne `/20→/30`.
- Header: sticky blur, border/bg solid setelah scroll >24px (`useMotionValueEvent`).
- Marquee nilai brand (`brand-marquee.tsx`, antara Koleksi dan Cerita): dua baris identik
  (duplikat `aria-hidden`), `motion x ["0%","-50%"]` linear 40s loop, fade tepi via
  mask-image, pemisah diamond SVG kecil. Reduced-motion otomatis diam via MotionConfig.
- Aset produk: SVG `BottleVisual` (varian `flacon|tall|round`) — konsisten, tanpa foto.
  Kalau nanti pakai foto asli: `next/image`, zoom via `group-hover:scale-[1.05]`,
  overlay gradient tetap `from-ink/40`.

## Struktur

```
app/        layout.tsx (dark, font, metadata) · page.tsx (Hero → Collection → Marquee → Story → CtaBand → Footer)
components/ hero, perfume-collection, brand-marquee, brand-story, cta-band, bottle-visual,
            site-header, site-footer, motion-provider, ui/button
```

## Anti-pattern (jangan)

- Hex/rgb literal di className; warna tailwind default (blue-500 dll.)
- Animasi < 300ms untuk reveal, atau easing default (ease-out bawaan).
- Glow champagne > `opacity ~25%` — di atas itu terlihat murah.
- Menambah dependency UI (Magic UI dsb.) tanpa kebutuhan nyata; komponen saat ini
  cukup custom + shadcn.
