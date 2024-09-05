import Meteors from "@/components/magicui/meteors";
import LandingAbout from '@/components/About/LandingAbout'
import { LandingCTA } from '@/components/CTA/LandingCTA'
import LandingFAQ from '@/components/FAQ/LandingFAQ'
import { LandingFeature1 } from '@/components/Features/LandingFeature1'
import { LandingFeature2 } from '@/components/Features/LandingFeature2'
import LandingHero from '@/components/Hero/LandingHero'
import { LandingMarquee } from '@/components/Testimonials/LandingMarquee'
import React from 'react'

function LandingHome() {
  return (
    <div className="relative overflow-hidden">
      <Meteors number={30} />
      <div className="relative z-10"> 
        <LandingHero />
        <LandingFeature1 />
        <LandingFeature2 />
        <LandingMarquee />
        <LandingCTA />
        <LandingAbout />
        <LandingFAQ />
      </div>
    </div>
  );
}

export default LandingHome;
