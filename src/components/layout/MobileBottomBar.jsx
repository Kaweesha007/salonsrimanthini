import React from 'react'
import { Sparkles, Calendar, MessageCircle, Scissors, Tag } from '@/icons'
import { salonConfig } from '@/data/salonData'

export function MobileBottomBar({ onOpenBooking }) {
  return (
    <nav
      aria-label="Mobile quick links"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-pure/95 backdrop-blur-xl border-t border-noir-200/80 px-2 py-2 flex items-center justify-around shadow-editorial"
    >
      <a
        href="#home"
        className="flex flex-col items-center gap-1 text-[10px] text-noir-700 hover:text-gold-700 font-medium tracking-wide py-1 px-2"
      >
        <Sparkles className="w-4 h-4 text-gold-600" />
        <span>Home</span>
      </a>

      <a
        href="#services"
        className="flex flex-col items-center gap-1 text-[10px] text-noir-700 hover:text-gold-700 font-medium tracking-wide py-1 px-2"
      >
        <Scissors className="w-4 h-4 text-gold-600" />
        <span>Services</span>
      </a>

      {/* Prominent Center Booking Button */}
      <button
        onClick={onOpenBooking}
        className="flex flex-col items-center justify-center -mt-5 w-12 h-12 rounded-full bg-gold-500 text-noir-950 shadow-luxury border-2 border-surface-pure font-bold"
        aria-label="Book appointment now"
      >
        <Calendar className="w-5 h-5" />
      </button>

      <a
        href="#offers"
        className="flex flex-col items-center gap-1 text-[10px] text-noir-700 hover:text-gold-700 font-medium tracking-wide py-1 px-2"
      >
        <Tag className="w-4 h-4 text-gold-600" />
        <span>Offers</span>
      </a>

      <button
        onClick={() => window.open(salonConfig.whatsappUrl, '_blank')}
        className="flex flex-col items-center gap-1 text-[10px] text-[#25D366] font-medium tracking-wide py-1 px-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
        <span>WhatsApp</span>
      </button>
    </nav>
  )
}

export default MobileBottomBar
