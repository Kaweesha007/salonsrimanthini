import React, { useState } from 'react'
import { Hero } from '@/sections/Hero'
import { BrandIntro } from '@/sections/BrandIntro'
import { BeautyMoodGrid } from '@/sections/BeautyMoodGrid'
import { ServiceMenu } from '@/sections/ServiceMenu'
import { BridalCoutureShowcase } from '@/sections/BridalCoutureShowcase'
import { OffersSection } from '@/sections/OffersSection'
import { AboutTeam } from '@/sections/AboutTeam'
import { GallerySection } from '@/sections/GallerySection'
import { Testimonials } from '@/sections/Testimonials'
import { BookingCTA } from '@/sections/BookingCTA'
import { ContactSection } from '@/sections/ContactSection'

export function Home({ onOpenBooking }) {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('bridal')

  const handleSelectCategoryFromGrid = (catId) => {
    setSelectedServiceCategory(catId)
    const menuEl = document.getElementById('services')
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleQuickBook = (serviceName) => {
    onOpenBooking(serviceName)
  }

  return (
    <>
      {/* 1. Cinematic Photographic Hero */}
      <Hero onOpenBooking={() => onOpenBooking('Bridal Couture')} />

      {/* 2. Editorial Brand Introduction & Stats */}
      <BrandIntro />

      {/* 3. Image-Led Beauty Mood Categories */}
      <BeautyMoodGrid
        onSelectCategory={handleSelectCategoryFromGrid}
        onQuickBook={handleQuickBook}
      />

      {/* 4. Complete Service Menu with Published Prices */}
      <ServiceMenu
        activeCategoryId={selectedServiceCategory}
        onBookService={handleQuickBook}
      />

      {/* 5. Bridal Dresses & Couture Showcase (Client's Core Specialty) */}
      <BridalCoutureShowcase onOpenBooking={handleQuickBook} />

      {/* 6. Curated Packages & Special Offers */}
      <OffersSection onClaimOffer={handleQuickBook} />

      {/* 7. About Us, Master Stylists & Craft Standards */}
      <AboutTeam />

      {/* 8. Immersive Filterable Gallery with Lightbox */}
      <GallerySection />

      {/* 9. Discerning Client Love & Reviews */}
      <Testimonials />

      {/* 10. High-Impact Closing Booking Banner */}
      <BookingCTA onOpenBooking={() => onOpenBooking()} />

      {/* 11. Sanctuary Location & Concierge Contact */}
      <ContactSection />
    </>
  )
}

export default Home
