import { siteContent } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const { signature, product, contact, hero } = siteContent;

const waUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`
  : "";

export function SignatureSection() {
  return (
    <section id="contact" className="w-full border-t border-gold/10 bg-black">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance font-display text-2xl tracking-[0.3em] text-gold uppercase sm:text-3xl">
            {signature.title}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-gold/50" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 space-y-5">
            {signature.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-ivory/70">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Kartu produk — size/price hanya tampil kalau sudah diisi. */}
        <Reveal delay={0.14}>
          <div className="mt-14 border border-gold/25 px-8 py-10 sm:px-14">
            <h3 className="font-display text-lg font-medium tracking-[0.28em] text-ivory uppercase">
              {signature.productName}
            </h3>
            {(product.size || product.price) && (
              <p className="mt-4 text-base tracking-[0.18em] text-gold uppercase">
                {[product.size, product.price].filter(Boolean).join("  ·  ")}
              </p>
            )}
            {waUrl ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-gold px-10 py-3.5 text-sm tracking-[0.22em] text-black uppercase transition-colors hover:bg-gold-deep"
              >
                {hero.secondaryCta.label}
              </a>
            ) : (
              <p className="mt-8 text-sm leading-relaxed text-ivory/45">
                {contact.whatsappMessage}
              </p>
            )}
          </div>
        </Reveal>

        {/* Penutup tulisan tangan. */}
        <Reveal delay={0.2}>
          <div className="mt-14 space-y-2">
            {signature.closingLines.map((line) => (
              <p key={line} className="text-script text-gold">
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Kontak opsional — dirender hanya kalau datanya diisi. */}
        {(contact.email || contact.instagram) && (
          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm tracking-[0.18em] text-ivory/60 uppercase transition-colors hover:text-gold"
                >
                  {contact.email}
                </a>
              )}
              {contact.instagram && (
                <a
                  href={`https://instagram.com/${contact.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-[0.18em] text-ivory/60 uppercase transition-colors hover:text-gold"
                >
                  @{contact.instagram}
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
