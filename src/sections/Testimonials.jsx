import React from 'react'
import { motion } from 'framer-motion'
import { clientReviews, salonConfig } from '@/data/salonData'
import { Star, Sparkles, Heart } from '@/icons'
import { Badge } from '@/components/common/Badge'

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="rose" size="sm" className="mb-3">
            <Heart className="w-3 h-3 mr-1 text-rose-600" />
            Client Love & Poruwa Memories
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
            Voices of Discerning <em className="italic font-serif text-gold-600">Brides & Patrons</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
            Real stories from brides who trusted Salon Srimanthini on their most cherished mornings in Kurunegala.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-surface-pure border border-noir-200/80 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="quote-editorial text-sm sm:text-base text-noir-800 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-noir-100 flex items-center justify-between mt-6">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-noir-950">
                    {review.bride}
                  </h4>
                  <p className="text-xs text-gold-700 font-sans">
                    {review.event}
                  </p>
                </div>
                <span className="text-[11px] text-noir-400 font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
