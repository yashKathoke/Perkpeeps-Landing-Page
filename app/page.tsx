import React from 'react'
import HeroSection from '@/components/perkpeeps/hero'
import GhostPhaseSection from '@/components/perkpeeps/ghost-phase'
import FeaturesSection from '@/components/perkpeeps/features'
import FounderSection from '@/components/perkpeeps/founder-invite'
import FooterSection from '@/components/perkpeeps/footer'
import ScrollProgress from '@/components/scroll-progress'

export default function Page() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <ScrollProgress />
      <HeroSection />
      <GhostPhaseSection />
      <FeaturesSection />
      <FounderSection />
      <FooterSection />
    </main>
  )
}
