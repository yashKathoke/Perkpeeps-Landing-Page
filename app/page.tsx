import React from 'react'
import HeroSection from '@/components/perkpeeps/hero'
import GhostPhaseSection from '@/components/perkpeeps/ghost-phase'
import HowItWorksSection from '@/components/perkpeeps/how-it-works'
import FeaturesSection from '@/components/perkpeeps/features'
import AfterStateSection from '@/components/perkpeeps/after-state'
import WhatReplacesSection from '@/components/perkpeeps/what-replaces'
import WhatNextSection from '@/components/perkpeeps/what-next'
import FounderSection from '@/components/perkpeeps/founder-invite'
import FooterSection from '@/components/perkpeeps/footer'
import ScrollProgress from '@/components/scroll-progress'

export default function Page() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <ScrollProgress />
      <HeroSection />
      <GhostPhaseSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AfterStateSection />
      <WhatReplacesSection />
      <WhatNextSection />
      <FounderSection />
      <FooterSection />
    </main>
  )
}
