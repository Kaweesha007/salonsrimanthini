import React from 'react'
import { motion } from 'framer-motion'
import { bridalCollections } from '@/data/bridalData'
import { salonConfig } from '@/data/salonData'
import { Sparkles, Calendar, ExternalLink, ArrowRight, Crown } from '@/icons'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'
import { EditorialImageCard } from '@/components/common/Card'

export function BridalCoutureShowcase({ onOpenBooking }) {
  return (
    <section id="bridal-couture" className="py-24 md:py-32 bg-surface-pure relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Facebook Source Note */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="gold" size="sm" className="mb-3">
              <Crown className="w-3.5 h-3.5 mr-1 text-gold-700" />
              Sri Lankan Bridal Couture Mastery
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal leading-[1.15]">
              Bespoke Bridal Dresses &<br />
              <em className="italic font-serif text-gold-600">Sacred Artistry</em>
            </h2>
            <div className="h-[1.5px] bg-gold-400/30 w-20 my-5" />
            <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
              From hand-embroidered Kandyan Osari adorned with heirloom gold necklaces to French Chantilly lace western gowns, discover our curated bridal portfolios.
            </p>
          </div>

          {/* Facebook Sister Salon Link Card */}
          <div className="glass-panel p-4 rounded-xl border-gold-300/60 max-w-md w-full shadow-subtle flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-noir-900">
                Salon Srimanthini Portfolio
              </p>
              <p className="text-[11px] text-noir-500 font-sans">
                Browse latest real brides on Facebook
              </p>
            </div>
            <a
              href={salonConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-noir-900 text-gold-200 hover:bg-gold-500 hover:text-noir-950 text-[11px] uppercase tracking-luxury font-medium transition-all"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Editorial Asymmetric Bridal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Showcase (Cols 1-7): Traditional Kandyan Bridal Royalty */}
          <div className="md:col-span-7 space-y-4">
            <EditorialImageCard
              image={bridalCollections[0].image}
              badge={bridalCollections[0].tag}
              category={bridalCollections[0].category}
              title={bridalCollections[0].title}
              subtitle={bridalCollections[0].sanskritName}
              description={bridalCollections[0].description}
              aspect="tall"
            />

            {/* In-Depth Dress Architecture Details */}
            <div className="p-5 rounded-xl bg-surface-subtle border border-noir-100 space-y-2">
              <span className="eyebrow text-gold-700 block">Attire & Jewellery Composition:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-noir-700">
                {bridalCollections[0].dressDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Stack (Cols 8-12): Western Gown & Indian Silk */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <EditorialImageCard
                image={bridalCollections[1].image}
                badge={bridalCollections[1].tag}
                category={bridalCollections[1].category}
                title={bridalCollections[1].title}
                subtitle={bridalCollections[1].sanskritName}
                description={bridalCollections[1].description}
                aspect="square"
              />
              <div className="p-4 rounded-xl bg-surface-subtle border border-noir-100 text-xs text-noir-600">
                <span className="font-semibold text-noir-900 block mb-1">Gown Details:</span>
                <p>French Chantilly lace, illusion cathedral train, sculpted pearl corset, and tailored bridal updo.</p>
              </div>
            </div>

            <div className="space-y-4">
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
        </div>

        {/* Bottom Row: Reception & Retinue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-noir-100">
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

        {/* Direct Bridal Consultation CTA Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-noir-950 text-gold-50 border border-gold-400/30 shadow-editorial flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="eyebrow text-gold-400">Exclusive Bridal Booking</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Planning Your Wedding in Kurunegala or Across Sri Lanka?
            </h3>
            <p className="text-xs sm:text-sm text-noir-300 max-w-xl font-sans">
              Schedule your private bridal attire consultation and hair trial with Srimanthini Rajapakse. Advance booking secures your auspicious date.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenBooking('Bridal Couture')}
              className="text-xs uppercase tracking-luxury"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Bridal Consultation ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BridalCoutureShowcase
