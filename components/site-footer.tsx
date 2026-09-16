type FooterLink = { label: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Koleksi",
    links: [
      { label: "Aube", href: "#koleksi" },
      { label: "Nocturne", href: "#koleksi" },
      { label: "Sable", href: "#koleksi" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang LUVE", href: "#cerita" },
      { label: "Jurnal" },
      { label: "Karier" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Pengiriman" },
      { label: "Pengembalian" },
      { label: "Hubungi Kami", href: "#kontak" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="kontak" className="border-t border-border/60 bg-sand/50">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl leading-none tracking-[0.35em] text-foreground">
            LUVE
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Parfum premium yang diracik perlahan di Bandung, dengan bahan baku
            pilihan dari Grasse dan Nusantara.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-[11px] uppercase tracking-[0.28em] text-foreground">
              {column.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span
                      className="text-sm text-muted-foreground/60"
                      aria-disabled="true"
                    >
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LUVE Parfum. Seluruh hak cipta dilindungi.</p>
          <p className="uppercase tracking-[0.18em]">Bandung — Indonesia</p>
        </div>
      </div>
    </footer>
  );
}