import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppWidget } from '@/components/common/WhatsAppWidget'
import { MobileBottomBar } from '@/components/layout/MobileBottomBar'

export function Layout({ children, onOpenBooking }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface-canvas selection:bg-gold-200 selection:text-noir-950">
      {/* Navigation with transparent-to-solid transition */}
      <Navbar onOpenBooking={() => onOpenBooking('General Appointment')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Floating Desktop & Mobile WhatsApp Concierge Widget */}
      <WhatsAppWidget />

      {/* Mobile Sticky Bottom Action Bar matching naturals.lk */}
      <MobileBottomBar onOpenBooking={() => onOpenBooking('Quick Mobile Booking')} />
    </div>
  )
}

export default Layout
