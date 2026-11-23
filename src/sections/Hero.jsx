import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Sparkles } from '@/icons'
import { Button } from '@/components/common/Button'
import { salonConfig } from '@/data/salonData'
import { salonCoverHero } from '@/assets/images/bridal'
import { fadeIn, staggerContainer } from '@/utils/motion'

export function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir-950 text-white">
      {/* Cinematic Photographic Background with Authentic Facebook Cover Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={salonCoverHero}
          alt="Salon Srimanthini Luxury Bridal & Beauty Sanctuary"
          className="w-full h-full object-cover object-center filter brightness-[0.58] contrast-[1.08]"
          priority="true"
        />

        {/* Sophisticated Dual Vignette Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/45 to-noir-950/65" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-noir-950/20 to-noir-950/70" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20">
        <motion.div
          variants={staggerContainer(0.18, 0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Eyebrow Pill */}
          <motion.div variants={fadeIn('up', 0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 backdrop-blur-md border border-white/20 text-gold-300 text-xs sm:text-[13px] font-sans uppercase tracking-eyebrow font-medium shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Hair · Skin · Nails · Bridal Couture
            </span>
          </motion.div>

          {/* Main Editorial Display Headline */}
          <motion.h1
            variants={fadeIn('up', 0.2)}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.05] tracking-tight text-white max-w-4xl"
          >
            One sanctuary.<br />
            Every ritual.<br />
            <em className="font-serif italic font-light text-gold-300">All of you.</em>
          </motion.h1>

          {/* Editorial Subtitle */}
          <motion.p
            variants={fadeIn('up', 0.35)}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl leading-relaxed font-sans font-light"
          >
            Kurunegala’s premier sanctuary for bespoke bridal dressing, precision hair styling, and restorative clinical therapies. We make your sacred day a timeless memory.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={fadeIn('up', 0.45)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              className="w-full sm:w-auto text-sm uppercase tracking-luxury shadow-luxury font-medium"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book an Appointment ↗
            </Button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm uppercase tracking-luxury px-8 py-4 rounded-pill border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 font-sans"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          const intro = document.getElementById('brand-intro')
          if (intro) intro.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="text-[10px] font-sans uppercase tracking-eyebrow font-medium">
          Scroll to discover
        </span>
        <span className="text-sm">↓</span>
      </motion.div>
    </section>
  )
}

export default Hero
