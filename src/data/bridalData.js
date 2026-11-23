import {
  bridalVideoPoster,
  bridalDressKandyan,
  bridalDressWestern,
  bridalSareeJewellery,
  bridalReceptionDress,
  bridalRetinueCouture,
  bridalLookCloseup,
} from '@/assets/images/bridal'

/**
 * Salon Srimanthini — Bridal Dress & Couture Collections
 * Bound directly to real photography from https://www.facebook.com/SalonSrimanthini/
 */

export const bridalCollections = [
  {
    id: "kandyan-royalty",
    title: "Traditional Kandyan Bridal Royalty",
    sanskritName: "Upcountry Bridal Couture",
    category: "Traditional Sri Lankan",
    description:
      "Handcrafted Kandyan Osari draped with regal precision, adorned with the sacred 7 necklaces (Agasti & Padakam), Nalalpatiya headpiece, and filigree waist chain.",
    dressDetails: [
      "Heavy hand-embroidered gold zardozi border",
      "Authentic 7-necklace traditional brass & gold jewelry suite",
      "Custom velvet or brocade bridal jacket",
      "Traditional jasmine floral crown styling",
    ],
    // Authentic bridal photo from Facebook
    image: bridalVideoPoster || bridalDressKandyan,
    localImageHint: "src/assets/images/bridal/bridal_video_poster.jpg",
    tag: "Signature Specialty",
  },
  {
    id: "western-white-couture",
    title: "Contemporary Western Bridal Gown",
    sanskritName: "Grace & Ivory Lace",
    category: "Western Bridal",
    description:
      "Exquisite ivory and champagne lace gowns featuring cathedral-length sheer illusion veils, crystal tiaras, and sculpted corset bodices tailored to perfection.",
    dressDetails: [
      "French Chantilly lace and structured satin silhouette",
      "Cathedral-length hand-beaded tulle veil",
      "Delicate bridal updo or Hollywood glam waves",
      "Soft luminescent dewy bridal makeup",
    ],
    // Authentic bridal gown photo from Facebook
    image: bridalDressWestern,
    localImageHint: "src/assets/images/bridal/bridal_dress_western.jpg",
    tag: "High Couture",
  },
  {
    id: "indian-silk-lehenga",
    title: "Indian Bridal & Saree Draping",
    sanskritName: "Kanchipuram & Zardozi Glam",
    category: "Indian & Saree Artistry",
    description:
      "Pure Kanchipuram silk sarees and couture royal lehengas meticulously draped with pleat precision, paired with heritage temple jewellery and matte regal glam.",
    dressDetails: [
      "Pure gold zari Kanchipuram or Banarasi bridal weave",
      "Double dupatta styling for royal lehengas",
      "Antique matte gold temple jewellery setting",
      "Smokey kohl eye and crimson bridal pout",
    ],
    // Authentic saree & jewellery photo from Facebook
    image: bridalSareeJewellery,
    localImageHint: "src/assets/images/bridal/bridal_saree_jewellery.jpg",
    tag: "Artisanal Draping",
  },
  {
    id: "reception-homecoming",
    title: "Reception & Homecoming Glamour",
    sanskritName: "Second-Look Radiance",
    category: "Evening & Homecoming",
    description:
      "Sophisticated evening glamour designed for the bride's grand reception entrance. Sculptural gowns, shimmering pastels, and effortless modern waves.",
    dressDetails: [
      "Fluid metallic shimmer and pastel blush tones",
      "Statement chandelier earrings and hair jewels",
      "Textured red-carpet waves or sleek ponytail",
      "Long-wear radiant champagne glow",
    ],
    // Authentic reception dress photo from Facebook
    image: bridalReceptionDress,
    localImageHint: "src/assets/images/bridal/bridal_reception_dress.jpg",
    tag: "Modern Romance",
  },
  {
    id: "bridal-retinue",
    title: "Bridal Retinue & Bridesmaids",
    sanskritName: "Harmonious Celebration",
    category: "Retinue Suite",
    description:
      "Coordinated styling for the Maid of Honor, bridesmaids, and sweet flower girls, ensuring visual poetry and harmony across the entire wedding party.",
    dressDetails: [
      "Custom color-palette coordination with bridal attire",
      "Harmonious hairstyle variations",
      "Delicate baby's breath and fresh floral accessories",
      "Fresh luminous camera-ready beauty",
    ],
    // Authentic retinue photo from Facebook
    image: bridalRetinueCouture,
    localImageHint: "src/assets/images/bridal/bridal_retinue_couture.jpg",
    tag: "Retinue Artistry",
  },
]
