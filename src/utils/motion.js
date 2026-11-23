/**
 * Framer Motion Animation Variants & Configurations
 * Designed for luxurious, smooth salon interactions
 */

export const luxuryTransition = {
  duration: 0.8,
  ease: [0.25, 1, 0.5, 1],
}

export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  }
}

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export const scaleUp = (delay = 0) => {
  return {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        delay,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  }
}

export const hoverGlow = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
}
