import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LUVE — Parfum Premium",
  description:
    "LUVE menghadirkan parfum premium dengan komposisi olfaktori yang diracik perlahan. Elegansi yang tinggal di kulit.",
  keywords: [
    "parfum premium",
    "eau de parfum",
    "LUVE",
    "parfum lokal",
    "Bandung",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "LUVE",
    title: "LUVE — Parfum Premium",
    description:
      "Elegansi yang tinggal di kulit. Diracik perlahan di Bandung dari bahan baku Grasse dan Nusantara.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        cormorant.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}