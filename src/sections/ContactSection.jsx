import React, { useState } from 'react'
import { salonConfig } from '@/data/salonData'
import { MapPin, Phone, Clock, MessageCircle, ExternalLink, Sparkles, Send } from '@/icons'
import { Button } from '@/components/common/Button'
import { Badge } from '@/components/common/Badge'

export function ContactSection() {
  const [inquiry, setInquiry] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSendInquiry = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `*Online Inquiry — Salon Srimanthini*\nName: ${inquiry.name}\nPhone: ${inquiry.phone}\nMessage: ${inquiry.message}`
    )
    window.open(`https://wa.me/94713529979?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-canvas relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" size="sm" className="mb-3">
            Sanctuary & Concierge
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
            Visit Our <em className="italic font-serif text-gold-600">Kurunegala Studio</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
            Conveniently situated at Gonagama Junction with private parking, dedicated bridal dressing suites, and tranquil styling bays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Location Details Left (Cols 1-5) */}
          <div className="lg:col-span-5 bg-surface-pure rounded-2xl p-8 border border-noir-200/80 shadow-subtle space-y-6">
            <div className="pb-4 border-b border-noir-100">
              <span className="eyebrow text-gold-700 block mb-1">Sanctuary Address</span>
              <h3 className="font-serif text-2xl text-noir-950 font-medium">
                {salonConfig.name}
              </h3>
              <p className="text-xs text-gold-700 font-sans mt-0.5">
                Kurunegala District, Sri Lanka
              </p>
            </div>

            <ul className="space-y-5 text-sm text-noir-700 font-sans">
              <li className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-900">Physical Address</p>
                  <p className="text-xs text-noir-500 mt-0.5 leading-relaxed">
                    {salonConfig.address}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-900">Hotline & Bookings</p>
                  <a
                    href={`tel:${salonConfig.phone}`}
                    className="text-xs text-gold-700 hover:underline font-medium block mt-0.5"
                  >
                    {salonConfig.displayPhone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-noir-900">Operating Hours</p>
                  <p className="text-xs text-noir-500 mt-0.5">
                    {salonConfig.timings}
                  </p>
                  <p className="text-[11px] text-gold-700 mt-0.5 italic">
                    (Early 4:00 AM slots reserved for morning Poruwa brides)
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-noir-100 flex items-center justify-between">
              <a
                href={salonConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-noir-900 hover:text-gold-700 transition-colors uppercase tracking-luxury text-[11px]"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={salonConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Direct Message Form Right (Cols 6-12) */}
          <div className="lg:col-span-7 bg-surface-pure rounded-2xl p-8 border border-noir-200/80 shadow-subtle space-y-6">
            <div>
              <span className="eyebrow text-gold-700 block mb-1">Direct Message</span>
              <h3 className="font-serif text-2xl text-noir-900 font-medium">
                Send an Inquiry to Our Concierge
              </h3>
              <p className="text-xs text-noir-500 font-sans mt-1">
                Have a wedding query or service question? Drop a message and we'll reply directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendInquiry} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    placeholder="e.g. 077 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-luxury text-noir-700 font-semibold mb-1">
                  Your Inquiry / Wedding Date *
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiry.message}
                  onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  placeholder="Tell us about the services you're inquiring about, wedding date, number of bridesmaids, etc..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-noir-200 text-xs sm:text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-surface-canvas/50 resize-none"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                type="submit"
                className="w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry to WhatsApp ↗
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
