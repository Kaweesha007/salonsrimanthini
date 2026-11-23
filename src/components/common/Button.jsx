import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

/**
 * Luxury Salon Button Component
 * Avoids gaudy gradients and embraces tactile, editorial elegance
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  className,
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500/50 disabled:opacity-40 disabled:pointer-events-none group'

  const shapes = {
    pill: 'rounded-pill',
    rounded: 'rounded-md',
    sharp: 'rounded-none',
  }

  const variants = {
    // Rich Antique Gold Button with Deep Noir Text
    primary:
      'bg-gold-500 hover:bg-gold-600 text-noir-950 font-semibold shadow-subtle hover:shadow-luxury tracking-wide border border-gold-400/30',

    // Deep Obsidian Noir Button for Grounded Authority
    noir:
      'bg-noir-900 hover:bg-noir-950 text-gold-100 border border-noir-800 hover:border-gold-500/40 shadow-subtle hover:shadow-editorial',

    // Delicate Hairline Luxury Outline
    outline:
      'border border-gold-600/40 text-noir-900 hover:text-gold-700 bg-transparent hover:bg-gold-50/60 shadow-none hover:border-gold-500',

    // Soft Alabaster Translucent
    secondary:
      'bg-surface-pure text-noir-900 border border-noir-200/60 hover:border-gold-400/60 shadow-subtle hover:shadow-elevated',

    // Understated Editorial Text Link
    ghost:
      'text-noir-800 hover:text-gold-700 bg-transparent p-0 tracking-wide font-normal hover:bg-transparent',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5 tracking-wider uppercase font-sans text-[11px]',
    md: 'text-sm px-6 py-3 gap-2 tracking-wide font-sans',
    lg: 'text-base px-8 py-4 gap-2.5 tracking-luxury font-sans',
  }

  return (
    <motion.button
      whileHover={{ y: disabled ? 0 : -1.5 }}
      whileTap={{ y: disabled ? 0 : 0.5 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(baseStyles, shapes[shape], variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
