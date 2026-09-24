import { siteContent } from "@/data/site-content";

const navLinks = siteContent.nav;
const brand = siteContent.hero.brand;
const tagline = siteContent.hero.tagline;
const copyright = siteContent.footer.copyright;

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gold/15 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 py-12 text-center sm:px-8">
        <p className="font-display text-2xl font-medium tracking-[0.32em] text-ivory uppercase">
          {brand}
        </p>
        <p className="font-display max-w-md text-sm leading-relaxed tracking-[0.24em] text-ivory/50 uppercase">
          {tagline}
        </p>

        <nav aria-label="Footer" className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-body tracking-[0.22em] text-ivory/60 uppercase transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="h-px w-16 bg-gold/40" aria-hidden="true" />

        <p className="text-[11px] tracking-[0.08em] text-ivory/40">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
