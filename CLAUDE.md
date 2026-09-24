# CLAUDE.md — Project LUVE

## Brand
LUVE — parfum premium. Nuansa elegan, mewah, minimalis; storytelling produk lebih penting daripada fitur teknis.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (animasi/transisi)
- shadcn/ui — style: Sera atau Luma (editorial/lembut, sesuai kesan brand)

## Workflow & Tooling
- Gunakan skill **UI/UX Pro Max** untuk keputusan design system (tipografi, spacing, warna, layout)
- Gunakan **Magic UI / shadcn CLI** untuk generate komponen — cek dulu apakah komponen shadcn/ui standar sudah cukup sebelum tambah dependency baru
- Ikuti workflow **ECC** (agents: planner → architect → code-reviewer) untuk fitur baru; jangan langsung implementasi tanpa rencana singkat
- Simpan keputusan penting (struktur folder, brand guideline, keputusan desain, konvensi penamaan) ke **MCP memory** supaya persisten antar sesi

## Conventions
- Komponen di `components/`, halaman di `app/`
- Style utama: Sera/Luma preset — tipografi jadi elemen visual utama, hindari UI yang terasa "generic SaaS"
- Semua animasi lewat Framer Motion, hindari CSS animation manual kecuali sangat sederhana

## Do
- Review sebelum commit — jalankan `code-reviewer` agent ECC
- Update file ini kalau ada keputusan arsitektur baru

## Don't
- Jangan install MCP/plugin baru tanpa cek dulu apakah bentrok dengan yang sudah ada (ECC, claude-mem, shadcn)

## Aturan Rebuild (berlaku sejak rebuild dari awal)
1. Jangan jalankan dev server — verifikasi cukup dengan `npm run build`.
2. Jangan `git commit` (kecuali diminta eksplisit).
3. Kerjakan satu tahap, lalu berhenti dan laporkan singkat apa yang selesai.
4. Semua teks, path aset, dan pengaturan tampilan HANYA boleh dibaca dari `data/site-content.ts` (termasuk key `images` dan `media`). Jangan hardcode string tampilan di komponen; jangan ubah isi file itu.
5. Tidak ada 3D / three.js / react-three-fiber sama sekali.
6. Foto `.webp` dirender lewat `next/image`; video lewat tag `<video>` (bukan komponen 3D/canvas).
7. Tidak boleh ada overflow horizontal pada lebar 360–430px (cek kelas `overflow-x`, lebar fix, dan tracking huruf besar).
