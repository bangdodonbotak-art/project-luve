"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { label: "Koleksi", href: "#koleksi" },
  { label: "Cerita", href: "#cerita" },
  { label: "Kontak", href: "#kontak" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-2xl leading-none tracking-[0.35em] text-foreground"
        >
          LUVE
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#koleksi"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "hidden text-[11px] uppercase tracking-[0.16em] md:inline-flex",
            })}
          >
            Belanja
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="navigasi-seluler"
            className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="navigasi-seluler"
            aria-label="Navigasi seluler"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <ul className="mx-auto w-full max-w-6xl px-6 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}