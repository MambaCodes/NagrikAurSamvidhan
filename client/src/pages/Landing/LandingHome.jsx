import LandingAbout from '@/components/About/LandingAbout'
import { LandingCTA } from '@/components/CTA/LandingCTA'
import { LandingFAQ } from '@/components/FAQ/LandingFAQ'
import { LandingFeature1 } from '@/components/Features/LandingFeature1'
import { LandingFeature2 } from '@/components/Features/LandingFeature2'
import LandingHero from '@/components/Hero/LandingHero'
import { LandingMarquee } from '@/components/Testimonials/LandingMarquee'
import React from 'react'

function LandingHome() {
  return (
    <>
    <LandingHero/>
    <LandingFeature1/>
    <LandingFeature2/>
    <LandingMarquee/>
    <LandingCTA/>
    <LandingAbout/>
    <LandingFAQ/>
    </>
  )
}

export default LandingHome