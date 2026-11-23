import React from 'react'
import { motion } from 'framer-motion'
import { serviceCategories } from '@/data/servicesData'
import { ArrowRight, Sparkles } from '@/icons'
import { fadeIn, staggerContainer } from '@/utils/motion'

export function BeautyMoodGrid({ onSelectCategory, onQuickBook }) {
  return (
    <section className="py-20 md:py-28 bg-surface-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-700 block mb-2">
              Curated Rituals • Published Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
              Signature <em className="italic font-serif text-gold-600">Beauty Categories</em>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-noir-500 max-w-md font-sans">
            Tap into exactly what you need today. Every category reveals a dedicated treatment menu with published pricing and direct concierge booking.
          </p>
        </div>

        {/* 5 Category Tiles Grid (Asymmetrical Layout featuring Bridal Couture) */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {serviceCategories.map((category, idx) => {
            const isFeaturedBridal = category.id === 'bridal'
            return (
              <motion.div
                key={category.id}
                variants={fadeIn('up', 0.1)}
                className={`group relative flex flex-col rounded-2xl overflow-hidden bg-surface-pure border border-noir-200/80 shadow-subtle hover:shadow-luxury transition-all duration-500 ${
                  isFeaturedBridal ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Image Frame with Zoom */}
                <div className={`relative w-full overflow-hidden bg-noir-900 ${isFeaturedBridal ? 'h-72 sm:h-80' : 'h-64 sm:h-72'}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-editorial group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/85 via-noir-950/25 to-transparent opacity-85 group-hover:opacity-65 transition-opacity duration-500" />

                  {/* Top Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-pill bg-surface-pure/90 backdrop-blur-md text-noir-900 text-[10.5px] uppercase tracking-eyebrow font-medium shadow-sm">
                      {category.eyebrow}
                    </span>
                  </div>

                  {/* Floating Title Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gold-300 font-sans tracking-wide mt-0.5 line-clamp-1">
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body & Actions */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <p className="text-xs sm:text-sm text-noir-600 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Creative Actions matching naturals.lk */}
                  <div className="pt-3 border-t border-noir-100 flex items-center justify-between gap-3 text-xs">
                    <button
                      onClick={() => onSelectCategory(category.id)}
                      className="inline-flex items-center gap-1.5 font-semibold text-noir-900 hover:text-gold-700 transition-colors uppercase tracking-luxury text-[11px]"
                    >
                      <span>View Menu & Prices</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                    </button>

                    <button
                      onClick={() => onQuickBook(category.name)}
                      className="px-3.5 py-1.5 rounded-pill bg-gold-50 text-gold-800 hover:bg-gold-500 hover:text-noir-950 border border-gold-300/60 font-medium transition-all duration-300 text-[11px] uppercase tracking-wider"
                    >
                      Quick Book
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default BeautyMoodGrid
