import React from 'react'
import { motion } from 'framer-motion'
import { salonConfig } from '@/data/salonData'
import { Calendar, Phone, Sparkles } from '@/icons'
import { Button } from '@/components/common/Button'

export function BookingCTA({ onOpenBooking }) {
  return (
    <section className="relative py-24 md:py-32 bg-noir-950 text-white overflow-hidden text-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-gold-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-gold-300 text-xs font-sans uppercase tracking-eyebrow font-medium">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          Your Next Transformation Begins Here
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal leading-tight text-white">
          Ready to make your sacred day<br />
          <em className="italic font-serif text-gold-300">an eternal memory?</em>
        </h2>

        <p className="text-sm sm:text-base text-noir-300 max-w-xl mx-auto font-sans leading-relaxed">
          From early morning bridal preparations to revitalizing hair therapies, reserve your bespoke experience at {salonConfig.name}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto shadow-luxury"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book an Appointment ↗
          </Button>

          <a
            href={`tel:${salonConfig.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm uppercase tracking-luxury px-8 py-4 rounded-pill border border-gold-400/40 text-gold-200 hover:bg-gold-500/10 transition-all font-sans"
          >
            <Phone className="w-4 h-4 mr-2 text-gold-400" />
            Call Concierge: {salonConfig.displayPhone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
