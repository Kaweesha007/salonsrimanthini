import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryItems } from '@/data/galleryData'
import { salonConfig } from '@/data/salonData'
import { ExternalLink, X, Sparkles, Crown } from '@/icons'
import { Badge } from '@/components/common/Badge'

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filterTabs = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'bridal', label: 'Bridal Dresses & Couture' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'skin', label: 'Skin Rituals' },
    { id: 'salon', label: 'Sanctuary Ambiance' },
  ]

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface-pure relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Badge variant="gold" size="sm" className="mb-3">
              Visual Narrative
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
              Immersive <em className="italic font-serif text-gold-600">Client Gallery</em>
            </h2>
            <div className="h-[1.5px] bg-gold-400/30 w-16 my-5" />
            <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
              Explore our real bridal dressings, precision hair artistry, and peaceful Kurunegala studio moments. Tap any image to inspect in full resolution.
            </p>
          </div>

          <a
            href={salonConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-noir-950 text-gold-300 hover:bg-gold-500 hover:text-noir-950 text-xs uppercase tracking-luxury font-medium transition-all shadow-subtle shrink-0"
          >
            <span>Facebook Photo Stream</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-pill text-xs font-sans uppercase tracking-luxury font-medium transition-all shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-gold-500 text-noir-950 shadow-luxury font-semibold'
                  : 'bg-surface-subtle text-noir-700 hover:text-noir-950 hover:bg-noir-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry / Editorial Asymmetry) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer bg-noir-900 shadow-subtle hover:shadow-luxury transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/85 via-noir-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-pill bg-white/90 backdrop-blur-md text-noir-900 text-[10px] uppercase tracking-eyebrow font-medium shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Caption on Hover */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-serif text-lg sm:text-xl font-medium leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gold-300/90 font-sans mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-noir-950/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-noir-950 rounded-2xl overflow-hidden shadow-editorial border border-gold-400/40 z-10 flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-noir-900/80 text-white hover:text-gold-300 flex items-center justify-center backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative flex-grow overflow-hidden flex items-center justify-center bg-black max-h-[70vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-noir-950 text-white border-t border-noir-850">
                <span className="eyebrow text-gold-400 block mb-1">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl text-gold-100">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-noir-300 mt-1 font-sans">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
