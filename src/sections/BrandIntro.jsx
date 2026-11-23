import React from 'react'
import { motion } from 'framer-motion'
import { salonConfig } from '@/data/salonData'
import { Sparkles, Crown, ShieldCheck, Star } from '@/icons'
import { fadeIn, staggerContainer } from '@/utils/motion'

export function BrandIntro() {
  const stats = [
    { value: salonConfig.metrics.happyBrides, label: "Discerning Brides Styled", icon: Crown },
    { value: salonConfig.metrics.yearsOfArtistry, label: "Years of Craft Mastery", icon: Sparkles },
    { value: salonConfig.metrics.clientRating, label: "Client Love Rating", icon: Star },
    { value: "Hospital Grade", label: "Autoclave Sterilization", icon: ShieldCheck },
  ]

  return (
    <section id="brand-intro" className="relative py-24 md:py-32 bg-surface-canvas overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-noir-950 font-serif text-[18vw] leading-none whitespace-nowrap">
        SRIMANTHINI
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Split Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow text-gold-700 block mb-3">
              The Srimanthini Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal leading-[1.15]">
              Choose your<br />
              <em className="italic font-serif text-gold-600">beauty mood.</em>
            </h2>

            <div className="h-[1.5px] bg-gold-400/30 w-20 my-6" />

            <p className="quote-editorial text-gold-800/90 text-lg sm:text-xl">
              "{salonConfig.tagline}"
            </p>
          </motion.div>

          {/* Right Column: Lead Paragraph & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-base sm:text-lg text-noir-700 font-sans leading-relaxed">
              Step into an oasis where sacred wedding traditions blend seamlessly with contemporary European aesthetic techniques. Every appointment at Salon Srimanthini is treated as a bespoke ritual tailored to accentuate your natural elegance.
            </p>
            <p className="text-sm text-noir-500 font-sans leading-relaxed">
              Whether you are preparing for your Poruwa wedding ceremony, seeking a dimensional hair colour transformation, or indulging in restorative skin therapies, our master artists welcome you with attentive poise and clinical care.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-noir-200">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="space-y-1">
                    <Icon className="w-4 h-4 text-gold-600 mb-1" />
                    <p className="font-serif text-xl sm:text-2xl font-semibold text-noir-950">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-sans text-noir-500 uppercase tracking-luxury leading-tight">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandIntro
