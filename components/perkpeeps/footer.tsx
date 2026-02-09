import React from 'react'
import { Instagram, TrendingUp } from 'lucide-react'

export default function FooterSection() {
  const spotsRemaining: number = 5 // Out of 20
  const message = "Yo PerkPeeps! I want to level up my shop. Let's talk."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/918459954252?text=${encodedMessage}`

  const totalSpots = 20
  const spotsUsed = totalSpots - spotsRemaining

  return (
    <footer className="relative py-24 px-4 overflow-hidden bg-background text-foreground border-t border-border transition-colors duration-500">
      {/* Background shadow glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-24">
          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter mb-8 text-foreground">
            Ready to turn one-timers
            <br />
            <span className="text-foreground/60">into all-the-timers?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the batch of 20 early partner cafés. No fees. No fuss.
          </p>

          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-foreground text-background font-outfit font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center shadow-xl"
            >
              <div className="relative flex items-center gap-3">
                Join the Awakening Now
                <TrendingUp className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Spots counter */}
        <div className="mb-24 p-10 rounded-[2.5rem] border border-border bg-neutral-dark/30 backdrop-blur-sm text-center">
          <p className="text-[10px] text-foreground/30 font-bold uppercase tracking-[0.3em] mb-6">
            Batch 01 Availability
          </p>

          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span className="text-6xl md:text-8xl font-outfit font-black text-foreground">{spotsUsed}</span>
            <span className="text-3xl text-foreground/20 font-outfit font-bold">/</span>
            <span className="text-6xl md:text-8xl font-outfit font-black text-foreground/10">{totalSpots}</span>
          </div>

          <div className="w-full h-1 bg-foreground/5 rounded-full overflow-hidden mb-6 max-w-md mx-auto">
            <div
              className="h-full bg-foreground transition-all duration-1000"
              style={{ width: `${(spotsUsed / totalSpots) * 100}%` }}
            />
          </div>

          <p className="text-sm text-foreground/60 font-outfit font-bold tracking-tight">
            {spotsRemaining} early access {spotsRemaining === 1 ? 'spot' : 'spots'} remaining
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-16" />

        {/* Links Only (Socials Hidden) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-center md:text-left transition-colors duration-500">
          <div>
            <h3 className="font-outfit font-black text-xl mb-4 text-foreground">🧋 PerkPeeps</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto md:mx-0">
              QR-based loyalty and ordering built for cafés and bubble tea shops.
              No apps. No POS lock-in. Just repeat customers.
            </p>
          </div>

          <div className="md:text-right">
            <div className="flex flex-col md:items-end gap-8">
              <div>
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">Contact</p>
                <a href="mailto:yashkathoke@perkpeeps.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors font-medium">
                  yashkathoke@perkpeeps.com
                </a>
              </div>

              <div>
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">Legal</p>
                <div className="space-y-3 flex flex-col items-center md:items-end">
                  <a href="/privacy" className="text-xs text-foreground/40 hover:text-foreground transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-xs text-foreground/40 hover:text-foreground transition-colors">Terms & Conditions</a>
                  <a href="/data-deletion" className="text-xs text-foreground/40 hover:text-foreground transition-colors">Data Deletion Policy</a>
                  <p className="text-[10px] text-foreground/20 italic mt-1">Messaging comply with Meta WhatsApp Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center opacity-20">
          <p className="text-[10px] tracking-widest uppercase mb-2">Built for real cafés © 2026 PerkPeeps</p>
        </div>
      </div>
    </footer>
  )
}
