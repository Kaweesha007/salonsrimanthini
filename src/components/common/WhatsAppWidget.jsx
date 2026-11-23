import React from 'react'
import { motion } from 'framer-motion'
import { salonConfig } from '@/data/salonData'
import { MessageCircle } from '@/icons'

export function WhatsAppWidget() {
  const handleOpenWhatsApp = () => {
    window.open(salonConfig.whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleOpenWhatsApp}
        className="flex items-center gap-2.5 px-4 py-3 rounded-pill bg-[#25D366] text-white shadow-luxury hover:shadow-glow transition-all duration-300 font-sans text-xs font-semibold uppercase tracking-wider"
        aria-label="Chat with Salon Srimanthini on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>Chat on WhatsApp</span>
      </motion.button>
    </div>
  )
}

export default WhatsAppWidget
