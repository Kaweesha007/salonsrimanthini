# Salon Srimanthini — Premium Visual Design System

An editorial, high-fashion visual identity and design system for **Salon Srimanthini**, a luxury bridal dressing studio and aesthetic sanctuary in Kurunegala, Sri Lanka.

---

## 1. Brand Identity & Philosophy

> **Salon Srimanthini** (`Kurunegala, Sri Lanka`)  
> **Brand Slogan**: *"We make your DAY a MEMORY!!!"*  
> **Core Specialty**: Traditional Sri Lankan Kandyan Bridal Dressing, Western Haute Couture Bridal Gowns, Indian Silk Saree Draping, and Rejuvenation Rituals.  
> **Official Facebook**: [facebook.com/SalonSrimanthini](https://www.facebook.com/SalonSrimanthini/) • **Hotline**: `071 352 9979`

### Visual Principles & Anti-Patterns Avoided
- **No Cliché Barbershop or Discount Salon Grids**: Eliminates monotonous 3-box identical cards, generic stock scissors icons, and saturated neon pink gradients.
- **Quiet Luxury & Editorial Serenity**: Employs generous white space, asymmetrical layouts, whisper-soft box shadows, and organic textures reminiscent of raw silk and alabaster stone.
- **Cultural Authenticity**: Celebrates the regality of Sri Lankan wedding heritage (Kandyan *Osari*, traditional 7-necklace gold jewellery suites, fresh jasmine floral arrangements) balanced with modern international couture.

---

## 2. Colour Palette & Design Tokens

Configured in `src/styles/variables.css` and wired into Tailwind CSS:

### Color Token Reference Table

| Role | CSS Variable | Hex Code | Purpose & Aesthetic Context |
| :--- | :--- | :--- | :--- |
| **Gold Primary** | `--gold-500` | `#B8913D` | Primary brand accent; reflects traditional bridal gold jewellery |
| **Gold Lustre** | `--gold-400` | `#CCA95E` | Interactive hover states and metallic highlights |
| **Antique Bronze** | `--color-bronze-warm` | `#A67C52` | Deeper metallic grounding and luxury borders |
| **Champagne** | `--color-champagne` | `#F7EDE0` | Soft metallic tints, tags, and badge backgrounds |
| **Canvas Base** | `--color-canvas` | `#FAF8F5` | Primary luminous background (replaces cold #ffffff) |
| **Canvas Subtle** | `--color-canvas-subtle` | `#F4EFE9` | Alternating section background and image card frames |
| **Surface Pure** | `--color-surface-pure` | `#FFFFFF` | Crisp focal card surfaces with subtle rim borders |
| **Glass Translucent** | `--color-surface-glass` | `rgba(255,255,255,0.76)` | Frosted navigation bars and floating info drawers |
| **Editorial Noir** | `--noir-900` | `#151417` | High-contrast editorial typography and primary headings |
| **Obsidian Dark** | `--noir-950` | `#0D0C0E` | High-fashion contrast sections, evening bridal suites, footer |
| **Noir Body** | `--noir-700` | `#38343F` | Highly readable body copy with relaxed leading |
| **Bridal Blush** | `--rose-500` | `#C47D6C` | Warm terracotta rose accent for bridal cheeks & petals |

---

## 3. Typographic Hierarchy

Typography is loaded via Google Fonts in `index.html` and styled in `src/styles/typography.css`:

```
Display Headings  : Cormorant Garamond / Playfair Display (Serif, 500, tight tracking)
Accent Emblems    : Italiana (Serif, 400)
Eyebrows / Meta   : Plus Jakarta Sans (Sans, 600, uppercase, letter-spacing: 0.22em)
Editorial Body    : Plus Jakarta Sans (Sans, 400/500, line-height: 1.65)
Pull Quotes       : Cormorant Garamond Italic (Serif, 400 italic, line-height: 1.5)
```

---

## 4. Elevation, Spacing & Border Radii

### Whisper Elevation (No Muddy Shadows)
- `var(--shadow-subtle)`: `0 2px 8px -1px rgba(21, 20, 23, 0.04)`
- `var(--shadow-elevated)`: `0 14px 32px -6px rgba(21, 20, 23, 0.05), 0 4px 12px -2px rgba(21, 20, 23, 0.02)`
- `var(--shadow-luxury)`: `0 24px 48px -12px rgba(184, 145, 61, 0.14)`
- `var(--shadow-editorial)`: `0 30px 60px -15px rgba(21, 20, 23, 0.08)`

### Border Radii Standards
- **Pills / Badges**: `rounded-pill` (`9999px`)
- **Interactive Cards**: `rounded-xl` (`24px`)
- **Containers / Modals**: `rounded-2xl` (`32px`)
- **Image Frames**: `rounded-[18px]` with smooth corner clipping

---

## 5. Component System Architecture

### 1. Button System (`src/components/common/Button.jsx`)
- `primary`: Antique gold with rich noir text and subtle luxury shadow
- `noir`: Deep obsidian container with gold border highlights
- `outline`: Delicate 1px hairline border with champagne hover fill
- `secondary`: Pure alabaster surface button
- `ghost`: Minimalist editorial text link with hover arrow translation

### 2. Card System (`src/components/common/Card.jsx`)
- `editorial`: Natural white surface with whisper elevation
- `glass`: Frosted glass panel with `backdrop-blur-md`
- `noir`: Deep espresso container for evening bridal attire
- `EditorialImageCard`: Image-forward framing with aspect ratio modes (`tall`, `square`, `landscape`), floating status badges, and typography captions.

### 3. Section Architecture (`src/components/layout/SectionContainer.jsx`)
- Standardized vertical padding: `py-20 md:py-28 lg:py-32`
- Reusable `SectionHeading` featuring Eyebrow badge, serif title, gold hairline accent bar, and lead description.

---

## 6. Bridal Dress & Facebook Page Asset Pipeline

As requested by the client, real imagery from the sister's salon page ([https://www.facebook.com/SalonSrimanthini/](https://www.facebook.com/SalonSrimanthini/)) is integrated through a dedicated asset directory:

```
src/assets/images/bridal/
├── kandyan-bride.jpg     # Traditional Kandyan Osari & 7 necklaces
├── western-gown.jpg      # Western white lace bridal gown & veil
├── indian-lehenga.jpg    # Indian silk saree draping & bridal lehenga
├── reception-dress.jpg   # Second-look evening homecoming couture
└── bridesmaids.jpg       # Bridal retinue & flower girls
```
