import type { Metadata } from "next";
import { Cinzel, Pinyon_Script, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MusicPlayer } from "@/components/music-player";
import { VideoSoundToggle } from "@/components/video-sound-toggle";
import { siteContent } from "@/data/site-content";
import { ProductJsonLd } from "@/components/product-json-ld";
import { cn } from "@/lib/utils";

/*
  Sistem tipografi LUVE:
  - Display : Cinzel       -> judul, wordmark, tagline hero, label kapital (tracking lebar)
  - Script  : Pinyon Script -> aksen tulisan tangan, huruf biasa saja, ukuran besar (lihat .text-script)
  - Body    : Tenor Sans   -> paragraf, menu, chip, tombol
*/
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-display",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luve.my.id"),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.luve.my.id/",
    siteName: "LUVE",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LUVE Eau de Parfum — More than a fragrance, it's a feeling.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full",
        "font-body antialiased",
        cinzel.variable,
        pinyonScript.variable,
        tenorSans.variable,
      )}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <ProductJsonLd />
        <MotionProvider>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
          <MusicPlayer />
          <VideoSoundToggle />
        </MotionProvider>
      </body>
    </html>
  );
}
