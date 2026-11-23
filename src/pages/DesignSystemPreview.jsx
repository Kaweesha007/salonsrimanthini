import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { Card, EditorialImageCard } from '@/components/common/Card'
import { SectionContainer } from '@/components/layout/SectionContainer'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { salonConfig } from '@/data/salonData'
import { bridalCollections } from '@/data/bridalData'
import {
  Sparkles,
  Crown,
  Heart,
  Palette,
  Type,
  Layers,
  ArrowRight,
  ExternalLink,
  Phone,
  MapPin,
  CheckCircle2,
} from '@/icons'

export function DesignSystemPreview() {
  const colorTokens = [
    {
      group: "Accent Metals (Champagne & Antique Gold)",
      description: "Reflecting traditional Sri Lankan bridal jewelry, gold thread embroidery, and radiant warmth.",
      colors: [
        { name: "Gold 500 (Primary)", hex: "#B8913D", token: "var(--gold-500)", textDark: true },
        { name: "Gold 400 (Lustre)", hex: "#CCA95E", token: "var(--gold-400)", textDark: true },
        { name: "Gold 600 (Antique)", hex: "#9E7630", token: "var(--gold-600)", textDark: false },
        { name: "Champagne", hex: "#F7EDE0", token: "var(--color-champagne)", textDark: true },
        { name: "Antique Bronze", hex: "#A67C52", token: "var(--color-bronze-warm)", textDark: false },
      ],
    },
    {
      group: "Raw Silk & Alabaster Canvases",
      description: "Organic, luminous neutrals that replace stark cold whites with warm editorial serenity.",
      colors: [
        { name: "Canvas Base", hex: "#FAF8F5", token: "var(--color-canvas)", textDark: true, border: true },
        { name: "Alabaster Subtle", hex: "#F4EFE9", token: "var(--color-canvas-subtle)", textDark: true, border: true },
        { name: "Warm Parchment", hex: "#EDE6DC", token: "var(--color-canvas-warm)", textDark: true, border: true },
        { name: "Pure Card Surface", hex: "#FFFFFF", token: "var(--color-surface-pure)", textDark: true, border: true },
      ],
    },
    {
      group: "Editorial Obsidian & Noir",
      description: "Deep, rich espresso charcoals for high-contrast typography without harshness.",
      colors: [
        { name: "Noir 950 (Absolute)", hex: "#0D0C0E", token: "var(--noir-950)", textDark: false },
        { name: "Noir 900 (Primary)", hex: "#151417", token: "var(--noir-900)", textDark: false },
        { name: "Noir 700 (Body Text)", hex: "#38343F", token: "var(--noir-700)", textDark: false },
        { name: "Noir 500 (Muted)", hex: "#716B7A", token: "var(--noir-500)", textDark: false },
      ],
    },
    {
      group: "Bridal Rose Blush & Terracotta",
      description: "Subtle romantic flush evoking lotus petals, bridal cheeks, and warm silk hues.",
      colors: [
        { name: "Rose 500 (Terracotta)", hex: "#C47D6C", token: "var(--rose-500)", textDark: false },
        { name: "Rose 400 (Blush)", hex: "#D9A595", token: "var(--rose-400)", textDark: true },
        { name: "Rose 200 (Whisper)", hex: "#F3DED5", token: "var(--rose-200)", textDark: true },
        { name: "Rose 50 (Glow)", hex: "#FCF7F6", token: "var(--rose-50)", textDark: true, border: true },
      ],
    },
  ]

  const shadowDemos = [
    { name: "Whisper Subtle", token: "var(--shadow-subtle)", class: "shadow-subtle", desc: "Fine elements & pills" },
    { name: "Alabaster Elevated", token: "var(--shadow-elevated)", class: "shadow-elevated", desc: "Cards & interactive elements" },
    { name: "Gold Luxury", token: "var(--shadow-luxury)", class: "shadow-luxury", desc: "Featured bridal showcases" },
    { name: "Editorial Float", token: "var(--shadow-editorial)", class: "shadow-editorial", desc: "Modals & floating drawers" },
  ]

  return (
    <div className="space-y-4">
      {/* 1. Brand Identity & Header Banner */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-surface-subtle via-surface-canvas to-surface-canvas border-b border-noir-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="gold" size="sm">
                  Official Visual Design System
                </Badge>
                <span className="text-xs text-gold-700 font-sans tracking-wide">
                  Kurunegala, Sri Lanka
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-noir-950 font-normal leading-tight">
                {salonConfig.name} <span className="italic text-gold-600">Visual Identity</span>
              </h1>

              <p className="quote-editorial text-gold-800/90 mt-4 text-xl sm:text-2xl font-serif">
                "{salonConfig.tagline}"
              </p>

              <p className="text-sm sm:text-base text-noir-600 mt-4 leading-relaxed max-w-2xl font-sans">
                A bespoke, editorial design language engineered specifically for a premier Sri Lankan bridal dressing and luxury aesthetics sanctuary. Built to evoke timeless elegance, craftsmanship, and serenity while rejecting generic cookie-cutter templates.
              </p>
            </div>

            {/* Quick Sister's Salon Profile Card */}
            <div className="glass-panel p-6 rounded-xl border-gold-300/50 max-w-md w-full shadow-subtle">
              <div className="flex items-center justify-between pb-3 border-b border-noir-100 mb-3">
                <span className="eyebrow text-gold-700">Client Sister's Salon</span>
                <span className="text-[10px] text-emerald-700 font-medium inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live Profile Linked
                </span>
              </div>
              <p className="font-serif text-lg font-medium text-noir-900">{salonConfig.name}</p>
              <p className="text-xs text-noir-500 mt-1 flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span>{salonConfig.address}</span>
              </p>
              <p className="text-xs text-noir-700 mt-2 font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Hotline: {salonConfig.displayPhone}</span>
              </p>

              <div className="mt-4 pt-3 border-t border-noir-100 flex items-center justify-between">
                <a
                  href={salonConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 hover:text-gold-900"
                >
                  <span>Open Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] uppercase tracking-luxury text-noir-400">
                  Bridal Specialist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Colour System Architecture */}
      <SectionContainer id="colors" bg="canvas">
        <SectionHeading
          eyebrow="Visual System • Color Tokens"
          title="Curated Luxury"
          titleAccent="Palette Architecture"
          description="A calibrated harmony of antique metals, raw silk canvases, and obsidian charcoals. Designed to convey prestige without relying on heavy saturated neon gradients."
          align="left"
        />

        <div className="space-y-10">
          {colorTokens.map((palette) => (
            <div key={palette.group} className="space-y-3">
              <div className="border-b border-noir-100 pb-2">
                <h3 className="font-serif text-xl text-noir-900 font-medium">
                  {palette.group}
                </h3>
                <p className="text-xs text-noir-500 font-sans mt-0.5">
                  {palette.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {palette.colors.map((c) => (
                  <div
                    key={c.name}
                    className="bg-surface-pure rounded-lg p-3 border border-noir-100 shadow-subtle flex flex-col justify-between"
                  >
                    <div
                      className={`h-20 w-full rounded-md mb-3 ${c.border ? 'border border-noir-200' : ''}`}
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <p className="text-xs font-semibold text-noir-900 leading-tight">{c.name}</p>
                      <p className="text-[11px] font-mono text-noir-500 mt-1 uppercase">{c.hex}</p>
                      <p className="text-[10px] font-mono text-gold-700 mt-0.5 truncate">{c.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 3. Typography & Hierarchy System */}
      <SectionContainer id="typography" bg="subtle">
        <SectionHeading
          eyebrow="Visual System • Editorial Type"
          title="Haute Couture"
          titleAccent="Typographic Rhythm"
          description="Pairing the high-contrast transitional elegance of Cormorant Garamond with the optical clarity of Plus Jakarta Sans creates an unmistakable high-fashion editorial tone."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specimen Card Left */}
          <div className="lg:col-span-7 space-y-6">
            <Card variant="editorial" className="p-8 sm:p-10 space-y-6">
              <div>
                <span className="eyebrow text-gold-600 block mb-2">Display Hierarchy • Serif</span>
                <h1 className="text-4xl sm:text-5xl font-serif text-noir-950 font-normal">
                  Kandyan Bridal <span className="italic font-serif text-gold-600">Splendour</span>
                </h1>
                <p className="text-xs text-noir-400 font-mono mt-1">
                  Font: Cormorant Garamond / Playfair Display • Tracking: -0.02em
                </p>
              </div>

              <div className="pt-4 border-t border-noir-100">
                <span className="eyebrow text-gold-600 block mb-2">Section Headline • H2</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-noir-900 font-medium">
                  Artisanal Saree Draping & Pre-Bridal Skin Rituals
                </h2>
              </div>

              <div className="pt-4 border-t border-noir-100">
                <span className="eyebrow text-gold-600 block mb-2">Editorial Pull-Quote</span>
                <p className="quote-editorial text-noir-800">
                  "Every bride deserves to feel like a timeless masterpiece on her sacred day."
                </p>
              </div>

              <div className="pt-4 border-t border-noir-100">
                <span className="eyebrow text-gold-600 block mb-2">Clean Editorial Body Copy • Sans</span>
                <p className="text-sm sm:text-base text-noir-600 leading-relaxed font-sans">
                  At Salon Srimanthini, bridal dressing is an inherited fine art. From authentic 7-strand Padakam placements to bespoke veil architectures, every single tuck, pin, and contour is tailored with reverent precision.
                </p>
                <p className="text-xs text-noir-400 font-mono mt-2">
                  Font: Plus Jakarta Sans • Weight: 400 • Line Height: 1.65
                </p>
              </div>
            </Card>
          </div>

          {/* Type Scale Specs Right */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="glass" className="p-6 space-y-4">
              <h4 className="font-serif text-lg font-medium text-noir-900">
                Design Hierarchy Roles
              </h4>
              <ul className="space-y-3 text-xs text-noir-700 font-sans">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-noir-900">Eyebrow Badges:</strong> Uppercase, tracking `0.22em`, 10-11px, gold or obsidian for category labeling.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-noir-900">Editorial Titles:</strong> Cormorant Garamond 500 with contextual italic swashes for elegance.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-noir-900">Atmospheric Accents:</strong> Italiana serif for singular accent emblems and monograms.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-noir-900">Micro-Metadata:</strong> Monospace/compact sans for pricing, timings, and technical specifications.
                  </div>
                </li>
              </ul>
            </Card>

            <Card variant="noir" className="p-6">
              <span className="eyebrow text-gold-400 block mb-2">High-Contrast Noir Mode</span>
              <h3 className="font-serif text-2xl text-gold-100 font-normal">
                Regal Evening & Bridal Suite
              </h3>
              <p className="text-xs text-noir-300 mt-2 leading-relaxed">
                Obsidian containers (`--noir-950`) provide breathing space and visual weight for evening reception attire and VIP bridal suite presentations.
              </p>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* 4. Bridal Dresses & Couture Collections Showcase */}
      <SectionContainer id="bridal-collections" bg="canvas">
        <SectionHeading
          eyebrow="Couture Attire Focus • Sourced from Sister's Salon Page"
          title="Bridal Dresses &"
          titleAccent="Artisanal Attire"
          description="Designed to spotlight the salon's core specialty: Kandyan Osari, Western gowns, and Indian bridal ensembles. Notice the asymmetric, non-repetitive framing."
          align="center"
        />

        {/* Highlight Banner on Facebook Source */}
        <div className="mb-10 max-w-4xl mx-auto glass-panel p-4 rounded-xl border-gold-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-noir-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-800 flex items-center justify-center font-bold">
              FB
            </div>
            <div>
              <p className="font-semibold text-noir-900">
                Sister's Salon Facebook Integration Pipeline
              </p>
              <p className="text-noir-500">
                Photos from <span className="underline font-mono">facebook.com/SalonSrimanthini</span> can be placed into <code className="bg-surface-canvas px-1 rounded">src/assets/images/bridal/</code>
              </p>
            </div>
          </div>
          <a
            href={salonConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-gold-700 hover:text-gold-900 shrink-0 uppercase tracking-luxury text-[11px]"
          >
            Browse Facebook Albums <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Editorial Non-Repetitive Showcase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Large Kandyan Showcase (Cols 1-7) */}
          <div className="md:col-span-7">
            <EditorialImageCard
              image={bridalCollections[0].image}
              badge={bridalCollections[0].tag}
              category={bridalCollections[0].category}
              title={bridalCollections[0].title}
              subtitle={bridalCollections[0].sanskritName}
              description={bridalCollections[0].description}
              aspect="tall"
            />
            {/* Attire Features Breakdown */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-noir-700 bg-surface-pure p-4 rounded-xl border border-noir-100">
              {bridalCollections[0].dressDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-gold-600 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Stack (Cols 8-12) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <EditorialImageCard
              image={bridalCollections[1].image}
              badge={bridalCollections[1].tag}
              category={bridalCollections[1].category}
              title={bridalCollections[1].title}
              subtitle={bridalCollections[1].sanskritName}
              description={bridalCollections[1].description}
              aspect="square"
            />

            <EditorialImageCard
              image={bridalCollections[2].image}
              badge={bridalCollections[2].tag}
              category={bridalCollections[2].category}
              title={bridalCollections[2].title}
              subtitle={bridalCollections[2].sanskritName}
              description={bridalCollections[2].description}
              aspect="landscape"
            />
          </div>
        </div>

        {/* Bottom Dual Card Row for Homecoming & Retinue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-noir-100">
          <EditorialImageCard
            image={bridalCollections[3].image}
            badge={bridalCollections[3].tag}
            category={bridalCollections[3].category}
            title={bridalCollections[3].title}
            subtitle={bridalCollections[3].sanskritName}
            description={bridalCollections[3].description}
            aspect="landscape"
          />

          <EditorialImageCard
            image={bridalCollections[4].image}
            badge={bridalCollections[4].tag}
            category={bridalCollections[4].category}
            title={bridalCollections[4].title}
            subtitle={bridalCollections[4].sanskritName}
            description={bridalCollections[4].description}
            aspect="landscape"
          />
        </div>
      </SectionContainer>

      {/* 5. Button, Form Controls & Interactive Primitives */}
      <SectionContainer id="components" bg="subtle">
        <SectionHeading
          eyebrow="Visual System • Reusable Primitives"
          title="Component Architecture"
          titleAccent="& Interaction States"
          description="Tactile buttons, responsive badges, and subtle elevation tokens crafted for high-touch luxury interactions without clunky template buttons."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Button Matrix */}
          <Card variant="editorial" className="p-8 space-y-6">
            <h4 className="font-serif text-xl font-medium text-noir-900">
              Tactile Button Variants
            </h4>
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md">
                  Primary Gold Button
                </Button>
                <span className="text-xs text-noir-500 font-mono">`variant="primary"`</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="noir" size="md">
                  Obsidian Noir Button
                </Button>
                <span className="text-xs text-noir-500 font-mono">`variant="noir"`</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="md">
                  Hairline Outline Button
                </Button>
                <span className="text-xs text-noir-500 font-mono">`variant="outline"`</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="secondary" size="md">
                  Alabaster Surface Button
                </Button>
                <span className="text-xs text-noir-500 font-mono">`variant="secondary"`</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="ghost" size="md" className="group">
                  <span>Editorial Text Action</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Button>
                <span className="text-xs text-noir-500 font-mono">`variant="ghost"`</span>
              </div>
            </div>
          </Card>

          {/* Badges & Shadows Matrix */}
          <Card variant="editorial" className="p-8 space-y-6">
            <h4 className="font-serif text-xl font-medium text-noir-900">
              Badge & Eyebrow Semantics
            </h4>
            <div className="flex flex-wrap gap-3">
              <Badge variant="gold" size="sm">Gold Accent</Badge>
              <Badge variant="noir" size="sm">Noir Editorial</Badge>
              <Badge variant="rose" size="sm">Blush Rose</Badge>
              <Badge variant="outline" size="sm">Delicate Outline</Badge>
              <Badge variant="minimal" size="sm">• Minimal Bullet</Badge>
            </div>

            <div className="pt-6 border-t border-noir-100">
              <h4 className="font-serif text-lg font-medium text-noir-900 mb-3">
                Elevation & Shadow Tokens
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {shadowDemos.map((s) => (
                  <div
                    key={s.name}
                    className={`p-4 rounded-lg bg-surface-pure border border-noir-100 text-xs ${s.class}`}
                  >
                    <p className="font-semibold text-noir-900">{s.name}</p>
                    <p className="text-[10px] text-noir-500 font-mono mt-0.5">{s.token}</p>
                    <p className="text-[10px] text-gold-700 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  )
}

export default DesignSystemPreview
