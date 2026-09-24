// Semua teks dan path aset website LUVE ada di file ini.
// Edit di sini saja; komponen hanya membaca dari file ini.

export const siteContent = {
  meta: {
    title: "LUVE Eau de Parfum · Unisex",
    description:
      "LUVE is an exquisite unisex Eau de Parfum that brings together vibrant fruits, delicate florals, precious woods, amber and musk.",
  },

  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Notes", href: "#notes" },
    { label: "Unisex", href: "#unisex" },
    { label: "Contact", href: "#contact" },
  ],
  navCta: { label: "Shop", href: "#contact" },

  // Ganti file di folder public dengan nama yang sama, atau ubah path di bawah.
  images: {
    landscape: "/luve_landscape.webp", // gambar 16:9
    portrait: "/luve_potrait.webp", // gambar 9:16
    videoLandscape: "/luve_video_landscape.mp4", // video 16:9
    videoPortrait: "/luve_video_potrait.mp4", // video 9:16
    unisexVideo: "/luve_video_landscape_004.mp4", // video 16:9 untuk section unisex
  },

  videoSequence: {
    items: [
      "/luve_video_landscape_001.mp4",
      "/luve_video_landscape_002.mp4",
      "/luve_video_landscape_003.mp4",
    ],
  },

  hero: {
    brand: "LUVE",
    tagline: "MORE THAN A FRAGRANCE. IT'S A FEELING.",
    eyebrow: "EAU DE PARFUM · UNISEX",
    primaryCta: { label: "Discover LUVE", href: "#experience" },
    secondaryCta: { label: "Order now", href: "#contact" },
  },

  intro: {
    heading: "A fragrance created to leave an impression.",
    paragraphs: [
      "LUVE is an exquisite unisex Eau de Parfum that brings together the freshness of vibrant fruits, the elegance of delicate florals, the warmth of precious woods, and the sensual depth of amber and musk.",
    ],
    highlight: "Modern yet timeless. Sophisticated yet effortless.",
    closing:
      "LUVE is designed for those who do not simply wear a fragrance — they make it part of their identity.",
  },

  experience: {
    title: "THE LUVE EXPERIENCE",
    paragraphs: [
      "The journey begins with a luminous burst of Bergamot, Mandarin, Pear, Blackcurrant, and Pink Pepper, creating a fresh and captivating first impression.",
      "As the fragrance develops, a sophisticated floral heart emerges. Jasmine, Rose, Orange Blossom, and Ylang-Ylang create a smooth and elegant bouquet, balanced with the natural freshness of Fig Leaf.",
      "At the heart of LUVE lies a warm and addictive character. Sandalwood, Cedarwood, Cashmere Wood, and Vetiver bring depth and sophistication, while Amber, Vanilla, Tonka Bean, and White Musk create a sensual finish that lingers beautifully on the skin.",
      "The result is a fragrance that feels fresh, elegant, warm, sensual, and unmistakably modern.",
    ],
  },

  notes: {
    title: "FRAGRANCE NOTES",
    groups: [
      {
        label: "TOP NOTES",
        ingredients: [
          "Bergamot",
          "Mandarin Orange",
          "Pear",
          "Blackcurrant",
          "Pink Pepper",
        ],
        description:
          "A bright and vibrant opening. Juicy pear and blackcurrant create a subtle fruity sweetness, while bergamot and mandarin bring sparkling citrus freshness. A touch of pink pepper adds a refined, slightly spicy character.",
      },
      {
        label: "HEART NOTES",
        ingredients: [
          "Jasmine",
          "Rose",
          "Orange Blossom",
          "Ylang-Ylang",
          "Fig Leaf",
        ],
        description:
          "The fragrance gradually reveals an elegant floral heart. Jasmine provides creamy sophistication, rose adds a soft romantic character, while orange blossom brings a luminous freshness. Ylang-ylang creates a smooth exotic nuance, complemented by the green, slightly milky character of fig leaf.",
      },
      {
        label: "BASE NOTES",
        ingredients: [
          "Sandalwood",
          "Cedarwood",
          "Cashmere Wood",
          "Vetiver",
          "Amber",
          "Vanilla",
          "Tonka Bean",
          "White Musk",
        ],
        description:
          "The final impression is warm, smooth, and deeply sensual. Creamy sandalwood and cedarwood provide a refined woody foundation, while cashmere wood adds softness and elegance. Vetiver introduces a subtle earthy freshness. Amber, vanilla, and tonka bean create a warm, addictive sweetness, finished with clean white musk that leaves a sophisticated and long-lasting trail.",
      },
    ],
  },

  journey: {
    title: "THE OLFACTIVE JOURNEY",
    items: [
      {
        name: "FRUITY",
        ingredients: ["Bergamot", "Mandarin", "Pear", "Blackcurrant"],
        line: "Bright, juicy, fresh, and effortlessly captivating.",
      },
      {
        name: "FLORAL",
        ingredients: ["Jasmine", "Rose", "Orange Blossom", "Ylang-Ylang"],
        line: "Elegant, smooth, luminous, and beautifully balanced.",
      },
      {
        name: "WOODY",
        ingredients: ["Sandalwood", "Cedarwood", "Cashmere Wood", "Vetiver"],
        line: "Warm, sophisticated, earthy, and deeply refined.",
      },
      {
        name: "AMBER & MUSK",
        ingredients: ["Amber", "Vanilla", "Tonka Bean", "White Musk"],
        line: "Sensual, warm, addictive, and lingering.",
      },
    ],
  },

  unisex: {
    title: "A FRAGRANCE WITHOUT BOUNDARIES",
    paragraphs: [
      "LUVE is intentionally created as a unisex fragrance, balancing fresh citrus and fruity notes with elegant florals, warm woods, and sensual musks.",
    ],
    statements: [
      "It does not belong to a gender.",
      "It belongs to the person wearing it.",
    ],
    closing:
      "Whether worn during the day or after dark, LUVE adapts naturally to your presence — becoming softer on some skin, warmer on others, and uniquely yours over time.",
  },

  signature: {
    title: "YOUR SIGNATURE. YOUR LUVE.",
    paragraphs: [
      "Some fragrances are remembered for their ingredients.",
      "Others are remembered for the feeling they leave behind.",
      "LUVE is both.",
      "A sophisticated composition of fruits, flowers, woods, amber, vanilla, and musk — created to become more than a fragrance.",
      "It becomes part of your presence.",
    ],
    productName: "LUVE EAU DE PARFUM",
    closingLines: ["Wear the feeling.", "Leave the impression."],
  },

  // Isi sendiri: belum ada datanya.
  product: {
    size: "", // contoh: "50 ml"
    price: "", // contoh: "Rp 0"
  },

  contact: {
    whatsapp: "", // format: 628xxxxxxxxxx (tanpa + dan spasi)
    whatsappMessage: "Hello, I'd like to order LUVE Eau de Parfum.",
    email: "",
    instagram: "",
  },

  footer: {
    copyright: "© 2026 LUVE. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
