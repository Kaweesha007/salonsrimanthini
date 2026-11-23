import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Phone, Calendar, Clock, CheckCircle2, MessageCircle } from '@/icons'
import { salonConfig } from '@/data/salonData'
import { Button } from '@/components/common/Button'

export function BookingModal({ isOpen, onClose, initialService = "Bridal Couture" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    time: 'Morning (9:00 AM - 1:00 PM)',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Keep service synchronized if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  const serviceOptions = [
    "Bridal Couture (Kandyan / Western / Indian)",
    "Haircut, Styling & Balayage",
    "Brazilian Keratin / Hair Botox",
    "24K Gold Illuminating Facial",
    "Spa Pedicure & Russian Gel Manicure",
    "Men's Executive Grooming",
    "The Royal Bridal All-Inclusive Suite (Offer)",
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppBooking = (e) => {
    e.preventDefault()

    // Format WhatsApp message
    const message = encodeURIComponent(
      `*New Appointment Booking Request — Salon Srimanthini*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Preferred Date:* ${formData.date || 'Flexible'}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      (formData.notes ? `*Special Notes:* ${formData.notes}\n` : '') +
      `\n_Sent via Salon Srimanthini Website_`
    )

    const whatsappUrl = `https://wa.me/94713529979?text=${message}`
    window.open(whatsappUrl, '_blank')
    setIsSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-noir-950/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-surface-pure rounded-2xl shadow-editorial border border-gold-300/40 p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-noir-100 hover:bg-gold-100 text-noir-700 hover:text-noir-900 flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <span className="eyebrow text-gold-700 block mb-1">
                  Concierge Reservation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-noir-900 font-medium">
                  Reserve Your Ritual
                </h3>
                <p className="text-xs sm:text-sm text-noir-500 mt-1 font-sans">
                  Quick booking via WhatsApp concierge or hotline. Advance reservations recommended for bridal consultations.
                </p>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Nimasha Perera"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 077 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                    Select Experience / Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-pure"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-pure"
                    >
                      <option>Early Morning (4:00 AM - 8:00 AM) — Bridal Only</option>
                      <option>Morning (9:00 AM - 1:00 PM)</option>
                      <option>Afternoon (1:00 PM - 5:00 PM)</option>
                      <option>Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Special Request / Message */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                    Special Notes or Treatment Details
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your wedding date, hair length, or specific aesthetic goals..."
                    className="w-full px-3.5 py-2 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50 resize-none"
                  />
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="w-full justify-center shadow-luxury"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Continue to WhatsApp Booking ↗
                  </Button>
                </div>

                {/* Direct Phone Backup */}
                <div className="text-center pt-2">
                  <p className="text-xs text-noir-500">
                    Prefer direct calling? Speak to concierge at{' '}
                    <a
                      href={`tel:${salonConfig.phone}`}
                      className="font-semibold text-gold-700 hover:underline"
                    >
                      {salonConfig.displayPhone}
                    </a>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-noir-900 font-medium">
                Opening WhatsApp...
              </h3>
              <p className="text-sm text-noir-600 max-w-sm mx-auto">
                Your reservation details have been prepared for WhatsApp. If WhatsApp didn't open automatically, please tap the button below.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleWhatsAppBooking}
                >
                  Open WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsSubmitted(false)
                    onClose()
                  }}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default BookingModal
