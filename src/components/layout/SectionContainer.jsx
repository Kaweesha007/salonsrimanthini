import React from 'react'
import { cn } from '@/utils/cn'

/**
 * Reusable Section Shell
 * Enforces consistent vertical rhythm, container boundaries, and background surfaces
 */
export function SectionContainer({
  children,
  id,
  bg = 'canvas', // 'canvas' | 'subtle' | 'pure' | 'noir'
  className,
  containerClassName,
  ...props
}) {
  const backgrounds = {
    canvas: 'bg-surface-canvas',
    subtle: 'bg-surface-subtle',
    pure: 'bg-surface-pure',
    noir: 'bg-noir-950 text-gold-50',
  }

  return (
    <section
      id={id}
      className={cn('relative py-20 md:py-28 lg:py-32 overflow-hidden', backgrounds[bg], className)}
      {...props}
    >
      <div className={cn('max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
