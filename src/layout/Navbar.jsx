import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Sparkles, MapPin, Calendar } from '@/icons'
import { Button } from '@/components/common/Button'
import { navigationLinks, salonConfig } from '@/data/salonData'

export function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top Editorial Concierge Bar (Hides gently on scroll for sleekness) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-noir-950/85 backdrop-blur-md text-gold-200/90 text-[11px] font-sans py-2 px-6 border-b border-noir-850 hidden md:block"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-gold-300">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span className="tracking-widest uppercase text-[10px]">{salonConfig.tagline}</span>
                </span>
                <span className="text-noir-600">•</span>
                <span className="flex items-center gap-1.5 text-gold-200/80">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>{salonConfig.address}</span>
                </span>
              </div>

              <div className="flex items-center gap-5">
                <span className="text-gold-200/70">Hours: 4:00 AM – 8:00 PM Daily</span>
                <span className="text-noir-600">•</span>
                <a
                  href={`tel:${salonConfig.phone}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-gold-400" />
                  <span className="font-medium tracking-wide">Concierge: {salonConfig.displayPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? 'bg-surface-pure/95 backdrop-blur-xl border-b border-noir-200/70 shadow-elevated py-3'
            : 'bg-gradient-to-b from-noir-950/80 via-noir-950/40 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Brand Image from Facebook */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-400/50 shadow-sm shrink-0">
              <img
                src={salonConfig.logoImage}
                alt={salonConfig.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-normal tracking-tight transition-colors ${
                  isScrolled ? 'text-noir-950 group-hover:text-gold-700' : 'text-white group-hover:text-gold-300'
                }`}
              >
                {salonConfig.name}
              </span>
              <span
                className={`text-[9.5px] tracking-eyebrow uppercase font-medium ${
                  isScrolled ? 'text-gold-700' : 'text-gold-300/90'
                }`}
              >
                Bridal & Beauty Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-luxury font-medium transition-colors relative py-1 group ${
                  isScrolled
                    ? 'text-noir-800 hover:text-gold-700'
                    : 'text-white/90 hover:text-gold-300'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Button
              variant={isScrolled ? 'primary' : 'primary'}
              size="sm"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex shadow-luxury font-medium"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book Appointment ↗
            </Button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-noir-900 hover:bg-noir-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-4 top-20 bg-surface-pure/98 backdrop-blur-2xl p-6 rounded-2xl shadow-editorial border border-gold-300/40 flex flex-col gap-4 z-50"
          >
            <div className="pb-3 border-b border-noir-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={salonConfig.logoImage}
                  alt={salonConfig.name}
                  className="w-9 h-9 rounded-full object-cover border border-gold-400"
                />
                <div>
                  <p className="font-serif text-lg font-medium text-noir-900">{salonConfig.name}</p>
                  <p className="text-[10px] tracking-eyebrow uppercase text-gold-700">{salonConfig.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-noir-100 flex items-center justify-center text-noir-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-sans uppercase tracking-luxury text-noir-800 py-3 px-3 rounded-lg hover:bg-gold-50/70 hover:text-gold-700 transition-colors font-medium border-b border-noir-100/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setIsOpen(false)
                  onOpenBooking()
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment ↗
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setIsOpen(false)
                  window.open(salonConfig.whatsappUrl, '_blank')
                }}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
