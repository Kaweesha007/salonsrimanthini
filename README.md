# Salon Srimanthini — Luxury Beauty & Bridal Sanctuary

A modern, high-fashion salon website for **Salon Srimanthini** (`Kurunegala, Sri Lanka`). Redesigned from the ground up following the architectural benchmarks of industry leaders (inspired by the layout, transparency, published pricing, and WhatsApp booking workflow of [naturals.lk](https://naturals.lk/)).

---

## ✨ Redesign Highlights

- **Cinematic Photographic Hero**: Full-screen photographic hero with parallax zoom, luxury Cormorant Garamond display typography, dual CTAs (*Book an Appointment ↗* and *Explore Services*), and animated scroll cues.
- **Dynamic Sticky Navigation**: Transparent glass navigation over the hero that transitions into a frosted, high-contrast solid alabaster bar on scroll, with full mobile drawer navigation.
- **Editorial Brand Philosophy**: Split-layout introduction presenting the authentic story of Salon Srimanthini, its Kurunegala heritage, and key metrics (1,500+ Happy Brides, 15+ Years Mastery, 4.9 Rating).
- **"Choose Your Beauty Mood" Category Tiles**: 5 interactive service tiles (*Bridal Couture*, *Hair & Scalp*, *Skin & Aesthetics*, *Nails & Lash*, *Men's Executive Suite*) with photography, descriptions, published price links, and quick-book triggers.
- **Published Pricing Menu**: Tabbed treatment catalog featuring transparent pricing in Sri Lankan Rupees (LKR), treatment durations, benefit breakdowns, and instant booking links.
- **High-Emphasis Bridal Dresses Showcase**: Dedicated asymmetrical showcase of Sri Lankan bridal couture:
  - Traditional Kandyan Royalty (Regal Osari, 7-necklace gold suites, Padakam, Nalalpatiya)
  - Contemporary Western White Bridal Gowns (Chantilly lace, cathedral veils, tiaras)
  - Indian Silk Sarees & Royal Lehengas (Kanchipuram weaves, precision draping)
  - Reception & Homecoming Evening Gowns
  - Bridal Retinue Suite (Bridesmaids & Flower girls)
- **Special Offers & Bridal Packages**: Bundled experiences (*The Royal Bridal All-Inclusive Suite*, *Keratin Silk & Colour Rejuvenation*, *Goddess Glow Retreat*) with transparent savings and package checklists.
- **Heritage, Team & Craft Standards**: Profiles of Master Bridal Couturier Srimanthini Rajapakse, Senior Hair Alchemists, and 4 Hospital-Grade Sterilization Craft Standards.
- **Immersive Gallery with Full-Screen Lightbox**: High-resolution gallery with category filters (*All*, *Bridal Dresses*, *Hair*, *Skin*, *Sanctuary*) and click-to-expand lightbox view.
- **Poruwa Ceremony Testimonials**: Real feedback from Sri Lankan brides celebrating their wedding morning transformations.
- **Direct WhatsApp Concierge & Modal**:
  - Global `BookingModal` that captures appointment details and sends a pre-formatted message directly to `+94 71 352 9979`.
  - Floating WhatsApp concierge button.
  - Mobile sticky bottom bar (*Home*, *Services*, *Center Book*, *Offers*, *WhatsApp*).

---

## 📁 Project Architecture

```
srimanthini/
├── index.html                  # HTML entry with Cormorant Garamond & Plus Jakarta Sans
├── package.json
├── tailwind.config.js          # Extended theme tokens (Gold, Canvas, Noir, Rose)
├── vite.config.js
├── DESIGN_SYSTEM.md            # Complete design system documentation
│
└── src/
    ├── assets/
    │   └── images/
    │       └── bridal/         # Dedicated folder for sister's Facebook photos
    ├── components/
    │   ├── common/
    │   │   ├── Badge.jsx       # Eyebrow & status badges
    │   │   ├── Button.jsx      # Tactile luxury button system (primary, noir, outline, ghost)
    │   │   ├── Card.jsx        # Editorial frames & EditorialImageCard
    │   │   ├── BookingModal.jsx# Global WhatsApp appointment booking modal
    │   │   └── WhatsAppWidget.jsx # Floating bottom-right chat widget
    │   └── layout/
    │       ├── MobileBottomBar.jsx # Sticky mobile quick action bar
    │       ├── SectionContainer.jsx# Uniform vertical section shell
    │       └── SectionHeading.jsx  # Reusable editorial section titles
    ├── data/
    │   ├── salonData.js        # Contact details (071 352 9979, Kurunegala), social links, reviews
    │   ├── servicesData.js     # Published treatments catalog & LKR pricing
    │   ├── bridalData.js       # Bridal collections & dress specifications
    │   ├── offersData.js       # Curated packages with savings
    │   ├── galleryData.js      # Portfolio images & category tags
    │   └── teamData.js         # Master stylists & hygiene craft standards
    ├── hooks/
    │   ├── useLenis.js         # Lenis smooth inertia scroll
    │   └── useMediaQuery.js    # Responsive breakpoint hook
    ├── icons/                  # Centralized Lucide icons & custom SVG monograms
    ├── layout/
    │   ├── Navbar.jsx          # Transparent-to-solid navigation with mobile drawer
    │   ├── Footer.jsx          # Professional footer with hours & Kurunegala map details
    │   └── Layout.jsx          # Global shell wrapper
    ├── sections/
    │   ├── Hero.jsx            # Cinematic full-screen photographic hero
    │   ├── BrandIntro.jsx      # Editorial philosophy & metrics
    │   ├── BeautyMoodGrid.jsx  # 6 "Beauty mood" interactive tiles
    │   ├── ServiceMenu.jsx     # Tabbed service menu with published LKR prices
    │   ├── BridalCoutureShowcase.jsx # Bridal dresses, Osari & Western gown showcase
    │   ├── OffersSection.jsx   # Bundled packages with savings
    │   ├── AboutTeam.jsx       # Team profiles & sterilization standards
    │   ├── GallerySection.jsx  # Filterable image gallery + lightbox
    │   ├── Testimonials.jsx    # Real bride reviews
    │   ├── BookingCTA.jsx      # High-impact booking invitation
    │   └── ContactSection.jsx  # Location, hours, and direct inquiry form
    ├── styles/
    │   ├── globals.css         # Main stylesheet with Lenis resets & utilities
    │   ├── typography.css      # Editorial serif & eyebrow styles
    │   └── variables.css       # CSS custom properties for luxury tokens
    ├── utils/
    │   ├── cn.js               # Tailwind class merger (clsx + tailwind-merge)
    │   └── motion.js           # Framer Motion animation presets
    ├── App.jsx                 # App root with booking modal state orchestration
    └── main.jsx
```

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev
# Server runs on http://localhost:3000

# Build for production
npm run build
```
