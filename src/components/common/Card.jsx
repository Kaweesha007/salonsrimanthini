import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

/**
 * Editorial Card Component
 * Avoids repetitive 3-box templates; features high-fashion framing and whisper elevations
 */
export function Card({
  children,
  className,
  variant = 'editorial',
  hover = true,
  ...props
}) {
  const variants = {
    // Clean editorial frame with luminous white surface
    editorial:
      'bg-surface-pure border border-noir-100 rounded-xl p-8 shadow-subtle transition-all duration-500 hover:shadow-elevated hover:border-gold-300/40',

    // Soft Alabaster Translucent Glass Panel
    glass:
      'glass-panel rounded-xl p-8 shadow-subtle transition-all duration-500 hover:shadow-luxury',

    // Borderless Canvas Card (Natural Breathing Room)
    canvas:
      'bg-surface-subtle/80 rounded-xl p-8 transition-all duration-500 hover:bg-surface-subtle',

    // High-Contrast Obsidian Card
    noir:
      'bg-noir-900 border border-noir-800 text-gold-50 rounded-xl p-8 shadow-editorial transition-all duration-500 hover:border-gold-600/30',

    // Minimal Framing without background
    minimal:
      'bg-transparent p-0 transition-all duration-300',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -3, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } : undefined}
      className={cn('relative', variants[variant], className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * Editorial Image Showcase Component
 * Tailored specifically for bridal dresses and couture styling photography
 */
export function EditorialImageCard({
  image,
  category,
  title,
  subtitle,
  description,
  aspect = 'portrait', // 'portrait' | 'square' | 'landscape'
  badge,
  className,
}) {
  const aspectRatios = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    tall: 'aspect-[4/5]',
    landscape: 'aspect-[16/10]',
  }

  return (
    <div className={cn('group relative flex flex-col', className)}>
      {/* Image Framing Container */}
      <div className={cn('editorial-frame w-full', aspectRatios[aspect])}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />

        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 via-noir-950/10 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Top Floating Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-surface-glass/95 backdrop-blur-md text-noir-900 text-[10.5px] uppercase tracking-eyebrow px-3 py-1 rounded-pill font-medium border border-white/60 shadow-subtle">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Editorial Caption Area */}
      <div className="pt-4 flex flex-col">
        {category && (
          <span className="eyebrow text-gold-700 mb-1">
            {category}
          </span>
        )}
        <h4 className="font-serif text-xl sm:text-2xl text-noir-900 font-medium group-hover:text-gold-700 transition-colors duration-300">
          {title}
        </h4>
        {subtitle && (
          <p className="font-accent text-sm text-gold-600/90 italic mt-0.5">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-xs sm:text-sm text-noir-600 mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default Card
