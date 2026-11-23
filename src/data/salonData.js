import { salonLogoProfile, salonCoverHero } from '@/assets/images/bridal'

/**
 * Salon Srimanthini — Official Brand & Business Configuration
 * Based on the authentic Salon Srimanthini salon profile in Kurunegala, Sri Lanka
 */

export const salonConfig = {
  name: "Salon Srimanthini",
  tagline: "We make your DAY a MEMORY!!!",
  category: "Luxury Bridal Dressing, Couture Hair & Aesthetic Sanctuary",
  phone: "+94 71 352 9979",
  displayPhone: "071 352 9979",
  address: "Gonagama Junction, Thiththawella, Kurunegala, Sri Lanka",
  postalCode: "60000",
  timings: "Monday – Sunday: 4:00 AM – 8:00 PM",
  facebookUrl: "https://www.facebook.com/SalonSrimanthini/",
  whatsappUrl: "https://wa.me/94713529979?text=Hello%20Salon%20Srimanthini,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
  established: "Kurunegala, Sri Lanka",
  logoImage: salonLogoProfile,
  coverImage: salonCoverHero,
  metrics: {
    happyBrides: "1,500+",
    yearsOfArtistry: "15+",
    clientRating: "4.9 / 5.0",
    bridalSuites: "3 Private Suites",
  },
}

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Offers", href: "#offers" },
  { name: "Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export const clientReviews = [
  {
    id: 1,
    bride: "Sanduni Senaratne",
    event: "Kandyan Wedding Bride",
    rating: 5,
    quote:
      "Srimanthini akka and her team made my wedding morning completely stress-free. The 7 necklaces and Osari were draped with absolute perfection, and it lasted without a single crease throughout the entire Poruwa ceremony and photoshoot!",
    date: "Recent Wedding",
  },
  {
    id: 2,
    bride: "Rashmi Wickramatunga",
    event: "Western Church Wedding & Reception",
    rating: 5,
    quote:
      "The veil placement and lace gown styling were breathtaking. My hair and glowing dewy makeup stayed intact for over 14 hours. Truly the finest bridal salon in Kurunegala.",
    date: "Recent Wedding",
  },
  {
    id: 3,
    bride: "Dr. Anoma Jayasuriya",
    event: "Keratin & 24K Gold Facial",
    rating: 5,
    quote:
      "The salon ambiance is luxurious, immaculate, and calming. The 24K gold facial left my skin visibly transformed. Highly recommended for regular grooming and wedding prep.",
    date: "Client Favorite",
  },
]
