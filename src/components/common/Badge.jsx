import React from 'react'
import { cn } from '@/utils/cn'

/**
 * Editorial Eyebrow & Status Badge
 * Delicately proportioned for luxury editorial hierarchy
 */
export function Badge({
  children,
  variant = 'gold',
  size = 'sm',
  className,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center font-sans uppercase font-medium tracking-eyebrow'

  const variants = {
    gold: 'bg-gold-50 text-gold-800 border border-gold-300/60 rounded-pill',
    noir: 'bg-noir-900 text-gold-200 border border-noir-800 rounded-pill',
    rose: 'bg-rose-50 text-rose-700 border border-rose-200/70 rounded-pill',
    minimal: 'bg-transparent text-gold-700 px-0 py-0 tracking-widest',
    outline: 'bg-transparent text-noir-800 border border-noir-300 rounded-pill',
  }

  const sizes = {
    xs: 'text-[9.5px] px-2.5 py-0.5 gap-1',
    sm: 'text-[11px] px-3.5 py-1 gap-1.5',
    md: 'text-xs px-4 py-1.5 gap-2',
  }

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  )
}

export default Badge
