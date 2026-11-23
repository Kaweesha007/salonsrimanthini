import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceCategories } from '@/data/servicesData'
import { Clock, Tag, Sparkles, ArrowRight, Calendar } from '@/icons'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function ServiceMenu({ activeCategoryId = 'bridal', onBookService }) {
  const [selectedCatId, setSelectedCatId] = useState(activeCategoryId)

  // Sync if parent updates
  React.useEffect(() => {
    if (activeCategoryId) {
      setSelectedCatId(activeCategoryId)
    }
  }, [activeCategoryId])

  const currentCategory =
    serviceCategories.find((c) => c.id === selectedCatId) || serviceCategories[0]

  return (
    <section id="services" className="py-24 md:py-32 bg-surface-canvas relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" size="sm" className="mb-3">
            Published Salon Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
            The Srimanthini <em className="italic font-serif text-gold-600">Treatment Menu</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
            Transparent published pricing for all salon treatments and bridal suites. All prices shown in Sri Lankan Rupees (LKR).
          </p>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === selectedCatId
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-5 py-2.5 rounded-pill text-xs font-sans uppercase tracking-luxury font-medium transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-noir-950 text-gold-300 shadow-luxury border border-noir-800'
                    : 'bg-surface-pure text-noir-700 hover:text-noir-950 border border-noir-200/70 hover:border-gold-400/50'
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Category Details & Services List (Split Layout) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Category Editorial Sidebar (Cols 1-4) */}
            <div className="lg:col-span-4 bg-surface-pure rounded-2xl p-6 border border-noir-200/80 shadow-subtle space-y-5 sticky top-28">
              <div className="relative h-56 rounded-xl overflow-hidden bg-noir-900">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-eyebrow text-gold-300 block mb-1">
                    {currentCategory.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl font-medium">
                    {currentCategory.name}
                  </h3>
                </div>
              </div>

              <div>
                <p className="quote-editorial text-sm text-gold-800 font-serif mb-2">
                  "{currentCategory.tagline}"
                </p>
                <p className="text-xs text-noir-600 leading-relaxed font-sans">
                  {currentCategory.description}
                </p>
              </div>

              <div className="pt-4 border-t border-noir-100 flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onBookService(currentCategory.name)}
                  className="w-full justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Quick Book This Category
                </Button>
                <p className="text-[11px] text-center text-noir-400">
                  Custom consultations available on request
                </p>
              </div>
            </div>

            {/* Individual Treatments List (Cols 5-12) */}
            <div className="lg:col-span-8 space-y-4">
              {currentCategory.services.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-surface-pure border border-noir-200/80 shadow-subtle hover:border-gold-400/60 hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="space-y-1.5 flex-grow pr-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-noir-900 group-hover:text-gold-700 transition-colors">
                        {item.name}
                      </h4>
                      {item.popular && (
                        <span className="text-[9.5px] uppercase tracking-luxury px-2.5 py-0.5 rounded-pill bg-gold-50 text-gold-800 border border-gold-300/60 font-semibold">
                          Client Favorite
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-noir-500 font-sans leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-noir-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-600" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Price & Book Action */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-noir-100">
                    <span className="font-serif text-lg sm:text-xl font-semibold text-noir-950">
                      {item.price}
                    </span>
                    <button
                      onClick={() => onBookService(`${currentCategory.name} - ${item.name}`)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-noir-900 text-gold-100 hover:bg-gold-500 hover:text-noir-950 text-xs uppercase tracking-luxury font-medium transition-all duration-300"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ServiceMenu
