import React from 'react'
import { ArrowRight, Smartphone } from 'lucide-react'

export default function HeroSection() {
  const message = "Yo PerkPeeps! I want to level up my shop. Let's talk."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/918459954252?text=${encodedMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 bg-background text-foreground transition-colors duration-500">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Level badge */}
        <div
          className="inline-block mb-8 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm animate-in fade-in zoom-in duration-700"
        >
          <span className="text-xs font-outfit font-bold text-foreground/60 uppercase tracking-widest">
            The Invisible Layer
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <span className="text-foreground neon-glow">Your Brand.</span>
          <br />
          <span className="text-foreground neon-glow">Their Ritual.</span>
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
            className="group relative px-8 py-4 bg-foreground text-background font-outfit font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center min-w-[200px]"
          >
            <div className="relative flex items-center gap-2">
              Join the Awakening
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a
            href="#ghost-phase"
            className="px-8 py-4 border-2 border-border text-foreground font-outfit font-bold rounded-xl hover:bg-muted transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
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
            <div className="relative w-64 h-96 bg-neutral-dark rounded-3xl border-8 border-neutral-dark shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-4 bg-background rounded-2xl p-6 flex flex-col items-center justify-center">
                <Smartphone className="w-16 h-16 text-foreground/10 mb-4" />
                <div className="text-center">
                  <p className="text-[10px] text-foreground/40 mb-3 tracking-widest uppercase">Ritual Active</p>
                  <div className="w-24 h-24 bg-muted rounded-lg border border-border mx-auto mb-4 flex items-center justify-center">
                    <div className="text-foreground/20 text-2xl font-bold">QR</div>
                  </div>
                  <div className="bg-foreground text-background rounded-lg px-4 py-3">
                    <p className="text-sm font-outfit font-bold tracking-widest">+500 XP</p>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
