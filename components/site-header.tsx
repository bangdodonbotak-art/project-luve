"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

const navLinks = siteContent.nav;
const navCta = siteContent.navCta;
const brand = siteContent.hero.brand;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 8));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || open
          ? "border-gold/15 bg-black/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-[0.32em] text-ivory uppercase"
        >
          {brand}
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-[0.22em] text-ivory/70 uppercase transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navCta.href}
            className="border border-gold/60 px-5 py-2 text-sm font-body tracking-[0.22em] text-gold uppercase transition-colors duration-200 hover:bg-gold hover:text-black"
          >
            {navCta.label}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center text-ivory/80 transition-colors hover:text-gold md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/15 bg-black/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-body tracking-[0.22em] text-ivory/80 uppercase transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href={navCta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center border border-gold/60 px-5 py-3 text-sm font-body tracking-[0.22em] text-gold uppercase transition-colors duration-200 hover:bg-gold hover:text-black"
                >
                  {navCta.label}
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
