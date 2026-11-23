import React from 'react'

/**
 * Custom Salon Monogram Emblem SVG
 */
export function SalonLogoIcon({ className = "w-8 h-8 text-gold" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <path
        d="M32 36C32 28 42 24 50 24C58 24 68 28 68 36C68 46 48 48 50 58C52 68 64 68 68 64"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="74" r="2.5" fill="currentColor" />
    </svg>
  )
}

export default SalonLogoIcon
