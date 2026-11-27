import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  bridalWeddingPackages,
  ceremonyPackages,
} from '@/data/packagesData'
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Gift,
  Info,
  Crown,
  Heart,
  Flower2,
  ArrowRight,
  Gem,
} from '@/icons'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function PackagesSection({ onClaimOffer }) {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'wedding', 'homecoming', 'ceremony'
  const [selectedHomecomingOption, setSelectedHomecomingOption] = useState(0)
  const [selectedEngagementOption, setSelectedEngagementOption] = useState(0)

  const homecoming = ceremonyPackages.find((p) => p.id === 'homecoming-package')
  const goingAway = ceremonyPackages.find((p) => p.id === 'going-away-package')
  const engagement = ceremonyPackages.find((p) => p.id === 'engagement-package')

  return (
    <section id="packages" className="py-24 md:py-32 bg-surface-subtle relative overflow-hidden">
      {/* Decorative ambient subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="gold" size="sm" className="mb-3">
            <Crown className="w-3.5 h-3.5 mr-1.5 text-gold-600" />
            Official Salon Srimanthini Packages
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal tracking-tight">
            Curated Bridal & <em className="italic font-serif text-gold-600">Ceremony Packages</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-600 font-sans leading-relaxed">
            Transparent published packages for your special day. From complete Platinum wedding day suites to Homecoming receptions and Going Away styling.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {[
              { id: 'all', label: 'All Packages (7)' },
              { id: 'wedding', label: 'Wedding Day Suites (4)' },
              { id: 'homecoming', label: 'Homecoming' },
              { id: 'ceremony', label: 'Going Away & Engagement' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-noir-950 text-gold-300 shadow-md scale-105 font-medium'
                    : 'bg-surface-pure text-noir-700 hover:text-noir-950 hover:bg-gold-50/60 border border-noir-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Main Wedding Packages (Platinum, Gold, Silver, Bronze) */}
        {(activeTab === 'all' || activeTab === 'wedding') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] bg-gold-400/40 flex-grow max-w-[40px]" />
              <h3 className="font-serif text-xl sm:text-2xl text-noir-900 tracking-wide flex items-center gap-2">
                <Crown className="w-5 h-5 text-gold-500" />
                Wedding Day Bridal Suites
              </h3>
              <span className="text-[11px] font-sans uppercase tracking-widest text-noir-400">
                (4 Tiers)
              </span>
              <span className="h-[1px] bg-gold-400/40 flex-grow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {bridalWeddingPackages.map((pkg) => {
                const isPlatinum = pkg.id === 'platinum-package'
                const isGold = pkg.id === 'gold-package'

                return (
                  <motion.div
                    key={pkg.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ${
                      isPlatinum
                        ? 'bg-noir-950 text-gold-50 border-2 border-gold-400/80 shadow-editorial lg:-translate-y-2'
                        : isGold
                        ? 'bg-surface-pure text-noir-900 border-2 border-gold-300 shadow-elevated'
                        : 'bg-surface-pure text-noir-900 border border-noir-200/90 shadow-subtle hover:shadow-elevated'
                    }`}
                  >
                    {/* Top Tier Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-semibold ${
                          isPlatinum
                            ? 'bg-gold-500 text-noir-950 shadow-glow'
                            : isGold
                            ? 'bg-gold-100 text-gold-900 border border-gold-300'
                            : 'bg-noir-100 text-noir-700'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                      {isPlatinum && (
                        <span className="flex items-center gap-1 text-[10px] text-gold-400 font-sans tracking-wide">
                          <Crown className="w-3 h-3 text-gold-400" /> Top Suite
                        </span>
                      )}
                    </div>

                    {/* Title & Price */}
                    <div className="mb-6">
                      <h4
                        className={`font-serif text-2xl font-normal tracking-wide ${
                          isPlatinum ? 'text-white' : 'text-noir-950'
                        }`}
                      >
                        {pkg.title}
                      </h4>
                      <p
                        className={`text-[11px] mt-1 font-sans leading-relaxed ${
                          isPlatinum ? 'text-noir-300' : 'text-noir-500'
                        }`}
                      >
                        {pkg.subtitle}
                      </p>

                      <div className="mt-4 pt-3 border-t border-dashed border-noir-200/40">
                        <span className="text-[10px] uppercase tracking-eyebrow block text-gold-600 font-semibold mb-0.5">
                          Total Package Price
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold-500">
                            {pkg.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Inclusions List */}
                    <div
                      className={`pt-5 border-t ${
                        isPlatinum ? 'border-noir-800' : 'border-noir-100'
                      } space-y-2 mb-6`}
                    >
                      <p
                        className={`text-[11px] font-sans uppercase tracking-luxury font-semibold ${
                          isPlatinum ? 'text-gold-300' : 'text-noir-800'
                        }`}
                      >
                        This Package Includes:
                      </p>
                      <ul className="space-y-2">
                        {pkg.includes.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-sans">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                isPlatinum ? 'text-gold-400' : 'text-gold-600'
                              }`}
                            />
                            <span className={isPlatinum ? 'text-noir-300' : 'text-noir-700'}>
                              {inc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Free Services List */}
                    {pkg.freeServices && pkg.freeServices.length > 0 && (
                      <div
                        className={`p-3.5 rounded-xl mb-6 ${
                          isPlatinum
                            ? 'bg-noir-900 border border-gold-500/20'
                            : 'bg-gold-50/50 border border-gold-200/60'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-2">
                          <Gift className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                          <span
                            className={`text-[10.5px] font-sans uppercase tracking-widest font-semibold ${
                              isPlatinum ? 'text-gold-400' : 'text-gold-800'
                            }`}
                          >
                            Free Services:
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {pkg.freeServices.map((freeItem, fi) => (
                            <li
                              key={fi}
                              className={`text-[11px] font-sans flex items-center gap-1.5 ${
                                isPlatinum ? 'text-noir-300' : 'text-noir-700'
                              }`}
                            >
                              <span className="text-gold-500">•</span>
                              <span>{freeItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Footnote if applicable */}
                    {pkg.footnote && (
                      <div className="mb-6 flex items-start gap-1.5">
                        <Info className="w-3 h-3 text-gold-500 shrink-0 mt-0.5" />
                        <p
                          className={`text-[10px] leading-tight italic ${
                            isPlatinum ? 'text-noir-400' : 'text-noir-500'
                          }`}
                        >
                          {pkg.footnote}
                        </p>
                      </div>
                    )}

                    {/* Book Package CTA */}
                    <div className="mt-auto pt-2">
                      <Button
                        variant={isPlatinum ? 'primary' : isGold ? 'primary' : 'noir'}
                        size="sm"
                        onClick={() => onClaimOffer(`${pkg.title} (${pkg.price})`)}
                        className="w-full justify-center shadow-subtle text-xs"
                      >
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        Book {pkg.title.split(' ')[0]} ↗
                      </Button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* 2. Ceremony & Occasion Packages Grid */}
        {(activeTab === 'all' || activeTab === 'homecoming' || activeTab === 'ceremony') && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] bg-gold-400/40 flex-grow max-w-[40px]" />
              <h3 className="font-serif text-xl sm:text-2xl text-noir-900 tracking-wide flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                Homecoming, Going Away & Engagement Packages
              </h3>
              <span className="h-[1px] bg-gold-400/40 flex-grow" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* HOMECOMING PACKAGE */}
              {(activeTab === 'all' || activeTab === 'homecoming') && homecoming && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface-pure rounded-2xl p-7 border border-noir-200/90 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-semibold bg-rose-50 text-rose-800 border border-rose-200/60">
                        {homecoming.badge}
                      </span>
                      <Heart className="w-4 h-4 text-rose-500" />
                    </div>

                    <h4 className="font-serif text-2xl text-noir-950 font-normal">
                      {homecoming.title}
                    </h4>
                    <p className="text-xs text-noir-500 font-sans mt-1 mb-5">
                      {homecoming.subtitle}
                    </p>

                    {/* Includes */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-noir-100">
                      <p className="text-[11px] font-sans uppercase tracking-luxury font-semibold text-noir-800">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {homecoming.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-noir-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Attire Options Selector */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-[11px] font-sans uppercase tracking-luxury font-semibold text-noir-800">
                        Select Attire Option & Pricing:
                      </p>
                      <div className="space-y-2">
                        {homecoming.pricingOptions.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedHomecomingOption(i)}
                            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-sans transition-all ${
                              selectedHomecomingOption === i
                                ? 'bg-gold-50/80 border-gold-400 text-noir-950 font-medium shadow-sm'
                                : 'bg-surface-subtle/50 border-noir-200 text-noir-700 hover:border-gold-300'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                  selectedHomecomingOption === i
                                    ? 'bg-gold-500 ring-2 ring-gold-200'
                                    : 'border border-noir-300'
                                }`}
                              />
                              {opt.label}
                            </span>
                            <span className="font-serif font-semibold text-gold-700">
                              {opt.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="noir"
                      size="sm"
                      onClick={() =>
                        onClaimOffer(
                          `Homecoming: ${homecoming.pricingOptions[selectedHomecomingOption].label} (${homecoming.pricingOptions[selectedHomecomingOption].price})`
                        )
                      }
                      className="w-full justify-center text-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      Book Homecoming ({homecoming.pricingOptions[selectedHomecomingOption].price}) ↗
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* GOING AWAY PACKAGE */}
              {(activeTab === 'all' || activeTab === 'ceremony') && goingAway && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface-pure rounded-2xl p-7 border border-noir-200/90 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        {goingAway.badge}
                      </span>
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                    </div>

                    <h4 className="font-serif text-2xl text-noir-950 font-normal">
                      {goingAway.title}
                    </h4>
                    <p className="text-xs text-noir-500 font-sans mt-1 mb-5">
                      {goingAway.subtitle}
                    </p>

                    <div className="mb-6 p-4 rounded-xl bg-surface-subtle border border-noir-150">
                      <span className="text-[10px] uppercase tracking-eyebrow block text-gold-600 font-semibold mb-0.5">
                        Package Investment
                      </span>
                      <span className="font-serif text-3xl font-semibold text-gold-600">
                        {goingAway.price}
                      </span>
                    </div>

                    {/* Includes */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-sans uppercase tracking-luxury font-semibold text-noir-800">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {goingAway.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-noir-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {goingAway.footnote && (
                      <div className="mb-6 flex items-start gap-1.5 p-3 rounded-lg bg-noir-50 border border-noir-200/60">
                        <Info className="w-3.5 h-3.5 text-noir-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] italic text-noir-600">
                          {goingAway.footnote}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="noir"
                      size="sm"
                      onClick={() => onClaimOffer(`${goingAway.title} (${goingAway.price})`)}
                      className="w-full justify-center text-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      Book Going Away ↗
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* ENGAGEMENT PACKAGES */}
              {(activeTab === 'all' || activeTab === 'ceremony') && engagement && (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-surface-pure rounded-2xl p-7 border border-noir-200/90 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-semibold bg-gold-50 text-gold-900 border border-gold-300">
                        {engagement.badge}
                      </span>
                      <Gem className="w-4 h-4 text-gold-600" />
                    </div>

                    <h4 className="font-serif text-2xl text-noir-950 font-normal">
                      {engagement.title}
                    </h4>
                    <p className="text-xs text-noir-500 font-sans mt-1 mb-5">
                      {engagement.subtitle}
                    </p>

                    {/* Engagement Package Option Selector */}
                    <div className="space-y-3 mb-6">
                      <p className="text-[11px] font-sans uppercase tracking-luxury font-semibold text-noir-800">
                        Choose Tier & Bouquet Type:
                      </p>
                      <div className="grid grid-cols-1 gap-2.5">
                        {engagement.options.map((opt, i) => (
                          <div
                            key={opt.id}
                            onClick={() => setSelectedEngagementOption(i)}
                            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                              selectedEngagementOption === i
                                ? 'bg-gold-50/70 border-gold-400 shadow-sm'
                                : 'bg-surface-subtle/50 border-noir-200 hover:border-gold-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-serif text-sm font-medium text-noir-950">
                                {opt.name}
                              </span>
                              <span className="font-serif font-semibold text-gold-600 text-base">
                                {opt.price}
                              </span>
                            </div>
                            <span className="text-[11px] text-noir-500 font-sans block mt-1">
                              With: {opt.bouquet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Active Option Includes */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-sans uppercase tracking-luxury font-semibold text-noir-800">
                        {engagement.options[selectedEngagementOption].name} Includes:
                      </p>
                      <ul className="space-y-2">
                        {engagement.options[selectedEngagementOption].includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-noir-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="noir"
                      size="sm"
                      onClick={() =>
                        onClaimOffer(
                          `${engagement.options[selectedEngagementOption].name} (${engagement.options[selectedEngagementOption].price})`
                        )
                      }
                      className="w-full justify-center text-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      Book {engagement.options[selectedEngagementOption].name} ↗
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PackagesSection
