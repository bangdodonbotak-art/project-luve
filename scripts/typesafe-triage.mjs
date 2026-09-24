// Triage severity temuan security-review LUVE memakai TypeSafe Jev (System One).
// Jalankan: node scripts/typesafe-triage.mjs
// Key dibaca dari .env.local (TYPESAFE_API_KEY) — tidak pernah dicetak.
import { readFileSync } from "node:fs";

function loadKey() {
  if (process.env.TYPESAFE_API_KEY) return process.env.TYPESAFE_API_KEY;
  const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  const m = env.match(/^TYPESAFE_API_KEY=(.+)$/m);
  if (!m) throw new Error("TYPESAFE_API_KEY tidak ditemukan di .env.local");
  return m[1].trim();
}

const CONTEXT = {
  app: "LUVE — landing page statis parfum premium, Next.js 16 App Router, deploy statis/edge.",
  surface:
    "Tidak ada form, tidak ada input user, tidak ada database, tidak ada auth, tidak ada route handler/API, tidak ada cookie/localStorage. Semua teks dari data/site-content.ts yang dikontrol developer saat build.",
};

const FINDINGS = {
  F1: "Link keluar (wa.me, instagram) memakai target=_blank. Sudah dipasang rel=\"noopener noreferrer\".",
  F2: "Tidak ada dangerouslySetInnerHTML/eval/innerHTML; semua teks dirender React dari konten statis (auto-escape).",
  F3: "next.config kosong — tidak ada security headers (CSP, X-Frame-Options, Referrer-Policy) dan X-Powered-By default masih aktif.",
  F4: "npm audit pada dependency production: 0 vulnerability.",
  F5: "8 file .mp4 video (~beberapa MB) dan .webp d serve dari public/ tanpa proteksi; potensi biaya bandwidth/DoS ringan.",
  F6: "Paket `shadcn` (CLI scaffolding) berada di dependencies runtime, seharusnya devDependencies. Paket `cn` berasal dari repo resmi shadcn-ui (MIT).",
  F7: "Rencana integrasi TypeSafe scent-finder: key server-side via route handler — belum diimplementasi; hanya file .env.local di gitignore.",
  F8: "File skills-lock.json + .agents/ berisi skills pihak ketiga (GitHub) dengan hash — supply-chain agent tooling, bukan app.",
};

const questions = Object.fromEntries(
  Object.entries(FINDINGS).map(([id, text]) => [
    id,
    {
      type: "choice",
      instructions:
        `Mengingat arsitektur aplikasi, seberapa serius temuan berikut?\n` +
        `Temuan: ${text}`,
      criteria: {
        Cosmetic: "tidak ada dampak keamanan nyata",
        Low: "hanya hardening/penguatan, risiko kecil",
        Medium: "risiko nyata dalam konteks ini",
        High: "dapat dieksploitasi / harus segera diperbaiki",
      },
    },
  ])
);

const res = await fetch("https://api.typesafe.ai/v1/systemone", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${loadKey()}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ state: { context: CONTEXT, findings: FINDINGS }, model: "jev-latest", questions }),
});
if (!res.ok) {
  console.error("Gagal:", res.status, (await res.text()).slice(0, 400));
  process.exit(1);
}
const { answers, usage } = await res.json();
for (const [id, a] of Object.entries(answers)) {
  console.log(
    `${id}  ->  ${a.choice}   (confidence ${a.confidence?.toFixed?.(2) ?? "?"})`
  );
}
console.log("usage:", usage);
