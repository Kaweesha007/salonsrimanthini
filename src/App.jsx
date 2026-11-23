import React, { useState } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { Layout } from '@/layout/Layout'
import { Home } from '@/pages/Home'
import { BookingModal } from '@/components/common/BookingModal'

export function App() {
  // Initialize Lenis smooth scroll for inertia momentum
  useLenis()

  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingService, setBookingService] = useState('Bridal Couture')

  const handleOpenBooking = (service = 'Bridal Couture') => {
    setBookingService(service)
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
  }

  return (
    <Layout onOpenBooking={handleOpenBooking}>
      {/* Complete Redesigned Homepage */}
      <Home onOpenBooking={handleOpenBooking} />

      {/* Global High-Converting Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingService}
      />
    </Layout>
  )
}

export default App
