import React from 'react'
import { motion } from 'framer-motion'
import { specialOffers } from '@/data/offersData'
import { Sparkles, CheckCircle2, Tag, Calendar, ArrowRight } from '@/icons'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function OffersSection({ onClaimOffer }) {
  return (
    <section id="offers" className="py-24 md:py-32 bg-surface-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="rose" size="sm" className="mb-3">
            <Tag className="w-3 h-3 mr-1" />
            Curated Seasonal Packages
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
            Signature Bundles & <em className="italic font-serif text-gold-600">Bridal Suites</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
            Experience our most celebrated treatments bundled together with substantial savings and complimentary VIP sanctuary amenities.
          </p>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {specialOffers.map((offer) => {
            const isFeatured = offer.id === 'royal-bridal-all-inclusive'
            return (
              <div
                key={offer.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  isFeatured
                    ? 'bg-noir-950 text-gold-50 border-2 border-gold-400/60 shadow-editorial lg:-translate-y-2'
                    : 'bg-surface-pure text-noir-900 border border-noir-200/80 shadow-subtle hover:shadow-elevated'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className={`text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-semibold ${
                      isFeatured
                        ? 'bg-gold-500 text-noir-950 shadow-glow'
                        : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                    }`}
                  >
                    {offer.badge}
                  </span>
                  <span className="text-xs font-mono font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-pill border border-emerald-200">
                    {offer.savings}
                  </span>
                </div>

                {/* Offer Title & Pricing */}
                <div className="space-y-3 mb-6">
                  <span className={`eyebrow block ${isFeatured ? 'text-gold-400' : 'text-gold-700'}`}>
                    {offer.eyebrow}
                  </span>
                  <h3 className={`font-serif text-2xl font-normal ${isFeatured ? 'text-white' : 'text-noir-950'}`}>
                    {offer.title}
                  </h3>
                  <p className={`text-xs leading-relaxed font-sans ${isFeatured ? 'text-noir-300' : 'text-noir-600'}`}>
                    {offer.description}
                  </p>

                  <div className="pt-3 flex items-baseline gap-3">
                    <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold-500">
                      {offer.offerPrice}
                    </span>
                    <span className="text-xs font-mono text-noir-400 line-through">
                      {offer.regularPrice}
                    </span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className={`pt-6 border-t ${isFeatured ? 'border-noir-800' : 'border-noir-100'} space-y-2.5 mb-8 flex-grow`}>
                  <p className={`text-[11px] font-sans uppercase tracking-luxury font-semibold ${isFeatured ? 'text-gold-300' : 'text-noir-700'}`}>
                    Package Inclusions:
                  </p>
                  <ul className="space-y-2">
                    {offer.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? 'text-gold-400' : 'text-gold-600'}`} />
                        <span className={isFeatured ? 'text-noir-300' : 'text-noir-700'}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Claim CTA Button */}
                <Button
                  variant={isFeatured ? 'primary' : 'noir'}
                  size="md"
                  onClick={() => onClaimOffer(offer.title)}
                  className="w-full justify-center shadow-subtle"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Claim This Offer ↗
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OffersSection
