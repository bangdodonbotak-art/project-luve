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
