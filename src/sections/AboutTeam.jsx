import React from 'react'
import { motion } from 'framer-motion'
import { teamMembers, craftStandards } from '@/data/teamData'
import { salonConfig } from '@/data/salonData'
import { salonLogoProfile } from '@/assets/images/bridal'
import { Sparkles, ShieldCheck, Crown, Heart } from '@/icons'
import { Badge } from '@/components/common/Badge'

export function AboutTeam() {
  // Update first team member with authentic salon founder image from Facebook
  const membersWithRealPhoto = teamMembers.map((member, i) => {
    if (i === 0) {
      return { ...member, image: salonLogoProfile }
    }
    return member
  })

  return (
    <section id="about" className="py-24 md:py-32 bg-surface-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="gold" size="sm" className="mb-3">
            Heritage & Craft
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-noir-950 font-normal">
            Master Artistry Behind <em className="italic font-serif text-gold-600">{salonConfig.name}</em>
          </h2>
          <div className="h-[1.5px] bg-gold-400/30 w-16 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-noir-500 font-sans leading-relaxed">
            Founded on a passion for celebrated bridal beauty in Kurunegala, our team brings global salon academy certifications and reverent care to every client.
          </p>
        </div>

        {/* 3 Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {membersWithRealPhoto.map((member, idx) => (
            <div
              key={idx}
              className="group bg-surface-pure rounded-2xl overflow-hidden border border-noir-200/80 shadow-subtle hover:shadow-luxury transition-all duration-500 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden bg-noir-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-editorial group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-eyebrow text-gold-300 block mb-1">
                    {member.experience}
                  </span>
                  <h3 className="font-serif text-2xl font-medium">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gold-200/80 font-sans mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-luxury text-gold-700 font-semibold block mb-1">
                    Specialty Focus:
                  </span>
                  <p className="text-xs text-noir-800 font-medium leading-snug">
                    {member.specialty}
                  </p>
                  <p className="text-xs text-noir-500 font-sans leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Craft Standards */}
        <div className="p-8 sm:p-12 rounded-2xl bg-surface-subtle border border-noir-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow text-gold-700 block mb-2">Our Quality Creed</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-noir-950 font-normal">
              Hospital-Grade Hygiene & Client Sanctuary
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftStandards.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-surface-pure border border-noir-100 shadow-subtle space-y-2">
                <ShieldCheck className="w-5 h-5 text-gold-600 mb-2" />
                <h4 className="font-serif text-base font-semibold text-noir-900 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-noir-500 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
