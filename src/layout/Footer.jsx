import React from 'react'
import { salonConfig, navigationLinks } from '@/data/salonData'
import { Sparkles, Phone, MapPin, Clock, ArrowRight } from '@/icons'

export function Footer() {
  return (
    <footer className="bg-noir-950 text-gold-50 pt-20 pb-12 border-t border-noir-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-noir-800">
          {/* Main Brand Narrative with Real Facebook Logo Image */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-400/50 shrink-0">
                <img
                  src={salonConfig.logoImage}
                  alt={salonConfig.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-normal tracking-wide text-gold-100">
                  {salonConfig.name}
                </h3>
                <span className="text-[10px] tracking-eyebrow uppercase text-gold-400 block font-sans">
                  Kurunegala • Sri Lanka
                </span>
              </div>
            </div>

            <p className="quote-editorial text-gold-200/80 mb-6 max-w-md">
              "{salonConfig.tagline}"
            </p>

            <p className="text-sm text-noir-400 leading-relaxed max-w-sm mb-6">
              Dedicated to celebrating Sri Lankan brides through exquisite Kandyan Osari draping, contemporary Western couture, and holistic rejuvenation rituals.
            </p>

            <a
              href={salonConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-gold-400 hover:text-gold-200 transition-colors"
            >
              <span>Visit Official Facebook Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs uppercase tracking-eyebrow text-gold-400 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-noir-300">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-200 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Salon Sanctuary Location & Hours */}
          <div className="md:col-span-4">
            <h4 className="font-sans text-xs uppercase tracking-eyebrow text-gold-400 font-semibold mb-6">
              Sanctuary & Appointments
            </h4>
            <ul className="space-y-4 text-sm text-noir-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{salonConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${salonConfig.phone}`} className="hover:text-gold-200 transition-colors">
                  {salonConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{salonConfig.timings}</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-lg bg-noir-900 border border-noir-800">
              <p className="text-xs text-gold-200/90 font-medium">
                Bridal Consultations
              </p>
              <p className="text-[11px] text-noir-400 mt-1">
                Advance reservations recommended for bridal attire fittings and trial sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-noir-500 font-sans">
          <p>© {new Date().getFullYear()} {salonConfig.name}. All rights reserved.</p>
          <p className="tracking-wide text-noir-400">
            Luxury Bridal Design System • Kurunegala, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
