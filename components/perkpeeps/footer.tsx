import React from 'react'
import { Instagram, TrendingUp, ArrowRight } from 'lucide-react'

export default function FooterSection() {
  const spotsRemaining: number = 5 // Out of 20
  const message = "Yo PerkPeeps! I want to level up my shop. Let's talk."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`

  const totalSpots = 20
  const spotsUsed = totalSpots - spotsRemaining

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23fff' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2
            className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-foreground animate-in fade-in zoom-in duration-700"
          >
            Ready to turn one-timers
            <br />
            <span className="text-primary neon-glow">into all-the-timers?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
            Join the batch of 20 early partner cafés. First mover advantage. Full support. Zero fees until launch.
          </p>

          {/* Primary CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground font-outfit font-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
            >
              <div className="relative flex items-center gap-3">
                Join the Awakening Now
                <TrendingUp className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
              <div className="absolute inset-0 rounded-xl animate-glow-pulse" />
            </a>
          </div>
        </div>

        {/* Spots counter */}
        <div
          className="mb-16 p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm text-center animate-in fade-in zoom-in duration-700 delay-400 fill-mode-both"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-muted-foreground text-sm uppercase font-outfit font-bold tracking-widest">
              Batch 01 Status
            </span>
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-5xl md:text-6xl font-outfit font-black text-primary">{spotsUsed}</span>
            <span className="text-2xl text-muted-foreground font-outfit font-bold">/</span>
            <span className="text-5xl md:text-6xl font-outfit font-black text-muted-foreground">{totalSpots}</span>
          </div>

          <p className="text-muted-foreground mb-6">Spots Claimed in Batch 01</p>

          {/* Progress bar */}
          <div className="w-full h-3 bg-neutral-dark rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
              style={{ width: `${(spotsUsed / totalSpots) * 100}%` }}
            />
          </div>

          <p className="text-sm text-accent font-outfit font-bold">
            {spotsRemaining} {spotsRemaining === 1 ? 'spot' : 'spots'} remaining for early access
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-light/30 to-transparent mb-16" />

        {/* Socials and links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left - About */}
          <div className="text-center md:text-left">
            <h3 className="font-outfit font-black text-xl mb-3 text-white">PerkPeeps</h3>
            <p className="text-sm text-muted-foreground">
              The invisible loyalty layer for cafés that understand vibes and business aren't mutually exclusive.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="text-center">
            <h3 className="font-outfit font-black text-sm mb-4 text-primary uppercase tracking-wider">Follow Along</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-neutral-dark/50 border border-neutral-light/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-neutral-dark/50 border border-neutral-light/20 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.51v13.54a2.86 2.86 0 0 1-5.48-1.45 2.86 2.86 0 1 1 5.45 1.42V12a5.33 5.33 0 0 0-5.33 5.33 5.33 5.33 0 0 0 5.33 5.33 5.33 5.33 0 0 0 5.33-5.33 5.33 5.33 0 0 0-.25-1.71h3.6v-3.5a4.8 4.8 0 0 0-4.38-4.43z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="font-outfit font-black text-sm mb-4 text-secondary uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2 flex flex-col items-center md:items-end">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="mailto:hello@perkpeeps.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-neutral-light/10 pt-8 text-center">
          <p className="text-xs text-muted-foreground mb-4">
            Built with vibe, shipped with care. PerkPeeps © 2024. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Currently accepting the first 20 partner cafés. Batch 02 opens Spring 2024.
          </p>
        </div>
      </div>
    </footer>
  )
}
