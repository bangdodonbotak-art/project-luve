# Laporan Security Review — Project LUVE

**Tanggal:** 2026-09-23 · **Scope:** seluruh working tree (rebuild landing page) · **Metode:** audit manual (skill `security-review` gagal auto-run karena repo tanpa remote `origin/HEAD`, alur dijalankan manual) · **Bantuan TypeSafe:** skema triage severity via Jev disiapkan di `scripts/typesafe-triage.mjs` (belum dieksekusi — classifier tooling sesi sedang timeout; jalankan `node scripts/typesafe-triage.mjs`).

## Postur aplikasi

LUVE adalah **halaman statis murni**: satu route (`app/page.tsx`), tanpa form, tanpa input pengguna, tanpa database, tanpa auth, tanpa route handler, tanpa cookie/localStorage. Seluruh teks & path aset dibaca dari `data/site-content.ts` yang dikontrol developer saat build. **Permukaan serangan sangat kecil** — ini fakta yang menentukan severity semua temuan di bawah.

## Verifikasi yang lolos (tidak ada temuan)

| Cek | Hasil |
| --- | --- |
| XSS (`dangerouslySetInnerHTML`, `innerHTML`, `eval`, `document.write`) | ✅ tidak ada |
| Kebocoran secret ke client (`NEXT_PUBLIC_*`, `process.env` di komponen) | ✅ tidak ada |
| `.env.local` tracked di git | ✅ untracked (di-ignore `*.env*`) — hanya `TYPESAFE_API_KEY` |
| `target="_blank"` tabnabbing | ✅ semua anchor eksternal (`wa.me`, instagram) sudah `rel="noopener noreferrer"` |
| Inline `<script>` / remote code | ✅ tidak ada |
| Aset publik (favicon, `public/*.webp|mp4`) | ✅ hanya media, tidak ada file config/secret ikut ter-serve |
| Aset di luar `site-content.ts` yang di-hardcode | ✅ hanya domain URL resmi (`wa.me`, `instagram.com`, `mailto:`) — data user tetap dari konten |
| Dependensi mencurigakan (`cn`) | ✅ paket resmi `shadcn-ui/cn` (MIT), di-export ulang dari `lib/utils.ts` |

## Temuan & rekomendasi

### LOW

1. **Tidak ada security headers & `X-Powered-By` aktif** (`next.config.ts` kosong).
   Rekomendasi: tambahkan `headers()` di `next.config.ts`: `Content-Security-Policy` (minimal `default-src 'self'`; font self-hosted via `next/font` sehingga CSP ketat feasible), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`; dan `poweredByHeader: false`.
   *Dampak nyata di app statis: kecil (_clickjacking_ statis, fingerprinting Next) — murni hardening.*

2. **`shadcn` (CLI scaffolding) berada di `dependencies` runtime**, seharusnya `devDependencies`. Tidak berdampak keamanan langsung (tidak di-bundle ke client), tapi melebarkan permukaan audit & image. Pindahkan saat dependency cleanup.

3. **8 video `.mp4` (beberapa MB) di-serve tanpa proteksi/cache-policy** dari `public/`. Bukan kerentanan, tapi risiko bandwidth/abuse ringan. Rekomendasi: `Cache-Control` + rate-limit di CDN/edge, pertimbangkan poster-image lazy-load.

### INFO

4. **`gsap` + `framer-motion` (13.x) + `lenis` dipakai bersamaan** — dua engine animasi = bundle membengkak dan permukaan dependency ganda. Tidak ada vulnerability (audit bersih), tapi pertimbangkan konsolidasi.

5. **`npm audit`: 0 vulnerability (production).** Jalankan ulang `npm audit` (semua env) sebelum deploy.

6. **Supply-chain agent tooling**: `.agents/` + `skills-lock.json` berisi skills pihak ketiga dari GitHub. Terkunci via `computedHash` ✅, bukan bagian dari app yang di-deploy ✅. Perlu review berkala saat skill di-update.

7. **Integrasi TypeSafe (rencana scent-finder)**: wajib server-side. Ketika diimplementasi, route handler `POST /api/scent` harus: (a) memuat `process.env.TYPESAFE_API_KEY` hanya di server, (b) **validasi + rate-limit input pengguna**, (c) tidak pernah meneruskan body mentah ke API luar. Catatan saat ini hanya `.env.local` gitignore — belum ada kode, jadi belum ada risiko.

### Tidak ditemukan

Critical / High: **tidak ada**, mengingat tidak ada jalur eksekusi data tak-tepercaya sama sekali.

## Triage TypeSafe (Siapkan — jalankan `node scripts/typesafe-triage.mjs`)

Setiap temuan dibuat sebagai satu `Choice` sempit dengan 4 level severity (`Cosmetic/Low/Medium/High`), dibagikan satu `state` konteks arsitektur. Pertanyaan bersifat independen → satu request, jawaban paralel. `confidence` distribusi di-print per temuan. Threshold keputusan (mis. "perbaiki sekarang" ≥ Medium) dievaluasi terhadap datanya — sesuai dokumen TypeSafe. Status: **belum dieksekusi** karena tooling Bash sesi sedang timeout (classifier `qwen3.8-flash:free unavailable`); key tidak pernah dicetak oleh skrip.

## Prioritas tindak lanjut

1. (Low) `securityHeaders` di `next.config.ts` — 10 menit, penutup temuan #1.
2. (Cleanup) pindahkan `shadcn` ke devDeps; putuskan gsap vs framer-motion.
3. (Sebelum fitur) saat build scent-finder: route handler + validasi + rate-limit sesuai catatan #7.
4. (Opsional) jalankan skrip triage TypeSafe dan bandingkan outputnya dengan severity manual di atas.

## Catatan keterbatasan

- Repo belum pernah punya `origin` — review berbasis working tree lokal, bukan diff PR.
- Tidak ada `package-lock` registry-integrity check mendalam (mis. lockfile diff terhadap previous commit) — `npm audit` bersih untuk produksi.
- Triage Jev belum berjalan pada laporan ini (lihat alasan tooling di atas).
