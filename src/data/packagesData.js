/**
 * Salon Srimanthini — Official Packages & Transparent Pricing
 * Directly sourced from the official Salon Srimanthini bridal brochure
 */

export const bridalWeddingPackages = [
  {
    id: "platinum-package",
    category: "wedding",
    badge: "Exclusive Suite",
    isPopular: false,
    isFeatured: true,
    title: "Platinum Package",
    subtitle: "The Ultimate Royal Bridal Experience",
    price: "145,000 LKR",
    numericPrice: 145000,
    includes: [
      "Bridal Saree - Outside Vendor",
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Fresh Flower Bouquet",
    ],
    freeServices: [
      "Consultation",
      "Mother's Dressing",
      "Saree and Jewellery Selection Shop Visits",
      "Trials",
    ],
    footnote: "* If the saree of the outside vendor is more than 35,000 LKR, the bride must bear the additional amount",
    theme: "noir", // Dark luxury card
  },
  {
    id: "gold-package",
    category: "wedding",
    badge: "Most Popular",
    isPopular: true,
    isFeatured: false,
    title: "Gold Package",
    subtitle: "Complete Signature Luxury Bridal Dressing",
    price: "115,000 LKR",
    numericPrice: 115000,
    includes: [
      "Bridal Saree",
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Fresh Flower Bouquet",
    ],
    freeServices: [
      "Consultation",
      "Mother's Dressing",
      "Saree and Jewellery Selection Shop Visits",
      "Trials",
    ],
    theme: "gold",
  },
  {
    id: "silver-package",
    category: "wedding",
    badge: "Classic Elegance",
    isPopular: false,
    isFeatured: false,
    title: "Silver Package",
    subtitle: "Graceful Bridal Styling with Bouquet Options",
    price: "105,000 LKR",
    numericPrice: 105000,
    includes: [
      "Bridal Saree",
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Fresh and Artificial Flower Bouquet",
    ],
    freeServices: [
      "Consultation",
      "Saree and Jewellery Selection Shop Visits",
      "Trials",
    ],
    theme: "surface",
  },
  {
    id: "bronze-package",
    category: "wedding",
    badge: "Essential Bridal",
    isPopular: false,
    isFeatured: false,
    title: "Bronze Package",
    subtitle: "Essential Radiance & Traditional Artistry",
    price: "85,000 LKR",
    numericPrice: 85000,
    includes: [
      "Bridal Saree",
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Artificial Flower Bouquet",
    ],
    freeServices: [
      "Consultation",
      "Saree and Jewellery Selection Shop Visits",
      "Trials",
    ],
    theme: "surface",
  },
]

export const ceremonyPackages = [
  {
    id: "homecoming-package",
    category: "ceremony",
    badge: "Reception Glamour",
    title: "Homecoming Package",
    subtitle: "Breathtaking post-wedding reception transformation",
    includes: [
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Artificial Bouquet",
    ],
    pricingOptions: [
      { label: "Package I – Frock", price: "45,000 LKR" },
      { label: "Package II – Lehenga", price: "50,000 LKR" },
      { label: "Package III – Kandyan", price: "60,000 LKR" },
    ],
    freeServices: ["Consultation & Setting"],
  },
  {
    id: "going-away-package",
    category: "ceremony",
    badge: "Departure Glow",
    title: "Going Away Package",
    subtitle: "Effortless elegance for your grand send-off",
    price: "30,000 LKR",
    footnote: "* Without dress and transport",
    includes: [
      "Bridal HD Makeup",
      "Bridal Hairstyle",
      "Jewellery",
      "Artificial Bouquet",
    ],
    freeServices: ["Touch-up Consultation"],
  },
  {
    id: "engagement-package",
    category: "ceremony",
    badge: "Milestone Celebration",
    title: "Engagement Packages",
    subtitle: "Fresh, radiant styling for your auspicious promise ceremony",
    options: [
      {
        id: "engagement-1",
        name: "Engagement Package I",
        price: "30,000 LKR",
        bouquet: "Artificial Bouquet",
        includes: [
          "Bridal HD Makeup",
          "Bridal Hairstyle",
          "Jewellery",
          "Artificial Bouquet",
        ],
      },
      {
        id: "engagement-2",
        name: "Engagement Package II",
        price: "38,000 LKR",
        bouquet: "Fresh Bouquet",
        includes: [
          "Bridal HD Makeup",
          "Bridal Hairstyle",
          "Jewellery",
          "Fresh Bouquet",
        ],
      },
    ],
  },
]

// Backward compatibility alias for any existing imports
export const specialOffers = bridalWeddingPackages
