import type { NextConfig } from "next";

/*
  Security headers (hasil security-review 2026-09-23, temuan LOW #1).

  Catatan:
  - Font self-hosted via next/font -> font-src 'self' sudah cukup.
  - 'unsafe-inline' untuk script/style diminta oleh hydration App Router
    dan style inline Framer Motion; connect-src 'self' tetap memblokir
    kebocoran data ke domain lain.
  - Hanya dipasang di production supaya dev server (WebSocket HMR) tidak kena CSP.
*/
const productionHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: blob:",
      "media-src 'self' data: blob:",
      "connect-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'none'",
    ].join("; "),
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/:path*", headers: productionHeaders }];
  },
};

export default nextConfig;
