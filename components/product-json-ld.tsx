import { siteContent } from "@/data/site-content";

const SITE_URL = "https://www.luve.my.id";

/*
  Structured data Product. `offers` hanya dirender kalau harga sudah diisi di
  data/site-content.ts — jangan pernah menulis harga palsu (mis. Rp 0) ke schema.
  Harga diambil dari string tampil (mis. "Rp 450.000") dengan membuang non-digit.
*/
export function ProductJsonLd() {
  const { meta, signature, product, images } = siteContent;
  const digits = product.price.replace(/\D/g, "");
  const price = digits ? Number(digits) : null;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: signature.productName,
    description: meta.description,
    image: `${SITE_URL}${images.landscape}`,
    brand: { "@type": "Brand", name: "LUVE" },
  };
  if (price !== null) {
    data.offers = {
      "@type": "Offer",
      url: SITE_URL,
      priceCurrency: "IDR",
      price,
      availability: "https://schema.org/InStock",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
