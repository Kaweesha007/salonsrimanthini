import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Badge } from '@/components/common/Badge'

/**
 * Editorial Section Heading
 * Reusable visual hierarchy with Eyebrow, Serif Display Heading, and Lead Paragraph
 */
export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = 'center', // 'center' | 'left'
  badgeVariant = 'gold',
  className,
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl mb-14 md:mb-20',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {/* Eyebrow Label */}
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block"
        >
          <Badge variant={badgeVariant} size="sm">
            {eyebrow}
          </Badge>
        </motion.div>
      )}

      {/* Main Editorial Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-900 leading-[1.15]"
      >
        {title}{' '}
        {titleAccent && (
          <span className="italic font-serif font-normal text-gold-600">
            {titleAccent}
          </span>
        )}
      </motion.h2>

      {/* Subtle Hairline Accent Line (Optional Underline Accent) */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={cn(
          'h-[1.5px] bg-gold-400/30 w-16 my-5',
          isCenter ? 'mx-auto' : 'mr-auto'
        )}
      />

      {/* Subtitle / Lead Paragraph */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-base text-noir-600 leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
