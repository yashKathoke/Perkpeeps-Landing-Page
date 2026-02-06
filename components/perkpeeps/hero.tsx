import React from 'react'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function HeroSection() {
  const message = "Yo PerkPeeps! I want to level up my shop. Let's talk."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/919767892053?text=${encodedMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>



      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Level badge */}
        <div
          className="inline-block mb-8 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm animate-in fade-in zoom-in duration-700"
        >
          <span className="text-xs font-outfit font-bold text-primary uppercase tracking-wide">
            Level 01: The Awakening
          </span>
        </div>

        {/* Main headline with kinetic animation */}
        <h1
          className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <span className="text-primary neon-glow">Your Brand.</span>
          <br />
          <span className="text-primary neon-glow">Their Ritual.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both"
        >
          Ditch the plastic cards and the cringe apps. PerkPeeps is the invisible rewards layer for cafés
          that care about vibe as much as boba.
        </p>

        {/* CTA Button */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-outfit font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              Join the Awakening
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 rounded-xl animate-glow-pulse opacity-0 group-hover:opacity-100" />
          </a>

          <a
            href="#ghost-phase"
            className="px-8 py-4 border-2 border-primary/50 text-primary font-outfit font-bold rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
          >
            Discover More
          </a>
        </div>

        {/* Floating phone mockup */}
        <div
          className="relative h-96 md:h-[500px] flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-both"
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-64 h-96 bg-gradient-to-br from-neutral-light to-neutral-dark rounded-3xl border-8 border-neutral-dark shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Phone screen content */}
              <div className="absolute inset-4 bg-gradient-to-b from-neutral-medium to-neutral-dark rounded-2xl p-6 flex flex-col items-center justify-center">
                <Smartphone className="w-16 h-16 text-primary/30 mb-4" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-3">QR Scan & Vibe</p>
                  <div className="w-24 h-24 bg-primary/10 rounded-lg border border-primary/30 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-primary text-2xl font-bold">QR</div>
                  </div>
                  <div className="bg-accent/20 border border-accent/50 rounded-lg px-4 py-3">
                    <p className="text-sm font-outfit font-bold text-accent">+500 XP UNLOCKED</p>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-glow-pulse" />
            </div>

            {/* Floating particle effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
