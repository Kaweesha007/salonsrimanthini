import React from 'react'
import { motion } from 'framer-motion'
import { sampleServices } from '@/data/salonData'
import { Card } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { Clock, ArrowRight, Sparkles } from '@/icons'
import { fadeIn, staggerContainer } from '@/utils/motion'

export function Services() {
  return (
    <section id="services" className="py-20 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="primary" size="md" className="mb-3">
            Signature Rituals
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900 mb-4">
            Curated Experiences for Every Aesthetic
          </h2>
          <p className="text-sm sm:text-base text-dark-700/80 leading-relaxed">
            Every treatment is tailored to accentuate your innate beauty and provide an unforgettable sensory escape.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sampleServices.map((service) => (
            <motion.div key={service.id} variants={fadeIn('up', 0.1)}>
              <Card variant="glass" className="h-full flex flex-col justify-between hover:shadow-luxury">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wide text-primary-700 font-semibold">
                      {service.category}
                    </span>
                    <span className="font-serif font-bold text-lg text-primary-800">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-dark-900 mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-dark-700/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-dark-700/70">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary-600" />
                    {service.duration}
                  </span>
                  <button className="inline-flex items-center gap-1 text-primary-700 font-semibold hover:text-primary-900 transition-colors">
                    Reserve
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="md">
            View Complete Treatment Menu
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
