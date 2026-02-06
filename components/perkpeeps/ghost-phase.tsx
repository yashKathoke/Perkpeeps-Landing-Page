'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function GhostPhaseSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let rafId: number
    let cachedTop = 0
    let cachedHeight = 0

    // Function to update dimensions - runs on mount and resize
    const updateDimensions = () => {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      cachedTop = rect.top + scrollTop
      cachedHeight = rect.height
    }

    const handleScroll = () => {
      // Use requestAnimationFrame to decouple read/write and sync with refresh rate
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight

        // Calculate current relative top position without triggering reflow via getBoundingClientRect
        const currentTop = cachedTop - scrollY

        // Calculate progress: 0 when entering from bottom, 1 when fully past
        // We want 0 to 1 range while the element is crossing the viewport
        const progress = (windowHeight - currentTop) / (windowHeight + cachedHeight)

        // Clamp between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress))

        element.style.setProperty('--scroll-progress', clampedProgress.toString())
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="ghost-phase"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{ '--scroll-progress': '0' } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23fff' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-secondary uppercase tracking-wide">
              Chapter 01: The Ghost Phase
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
            <span className="text-foreground">They come.</span>
            <br />
            <span className="text-foreground">They go.</span>
            <br />
            <span className="text-accent neon-glow-accent">You never know.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            84% of customers won't download an app. Your regulars stay invisible. Their data disappears.
            Your loyalty strategy stalls.
          </p>
        </div>

        {/* Parallax visual - Before/After transformation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before State */}
          <div className="relative group overflow-hidden rounded-2xl border border-neutral-light/30 backdrop-blur-sm transition-all duration-500" style={{
            opacity: 'calc(1 - var(--scroll-progress) * 0.5)',
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-neutral-medium to-neutral-dark" />

            {/* Grayscale overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-medium/60 to-neutral-light/40 opacity-60" />

            <div className="relative z-10 p-8 h-80 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-32 h-32 rounded-full bg-neutral-light/20 flex items-center justify-center border-2 border-neutral-light/40">
                <div className="text-5xl font-outfit font-black text-neutral-light/40">?</div>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-outfit font-black text-neutral-light/60">INVISIBLE</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Customer data unknown. No loyalty tracking. No repeat insights. They're just another transaction.
                </p>
              </div>
              <div className="pt-4 flex flex-col gap-2 w-full">
                <div className="h-2 bg-neutral-light/10 rounded-full" />
                <div className="h-2 bg-neutral-light/10 rounded-full w-3/4" />
              </div>
            </div>
          </div>

          {/* After State */}
          <div className="relative group overflow-hidden rounded-2xl border-2 transition-all duration-500" style={{
            borderColor: 'rgba(193, 255, 114, calc(0.3 + var(--scroll-progress) * 0.7))',
            opacity: 'calc(0.4 + var(--scroll-progress) * 0.6)',
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />

            {/* Animated particles background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-20 h-20 rounded-full border border-primary/30"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${-10 + i * 20}%`,
                    opacity: 'calc(var(--scroll-progress) * 0.4)',
                    animation: `float ${3 + i}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 p-8 h-80 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-3 border-primary neon-glow" style={{
                opacity: 'calc(0.3 + var(--scroll-progress) * 0.7)',
              }}>
                <div className="text-5xl font-outfit font-black text-primary">✓</div>
              </div>
              <div className="space-y-3">
                <p className="text-2xl font-outfit font-black text-primary neon-glow" style={{
                  opacity: 'calc(0.5 + var(--scroll-progress) * 0.5)',
                }}>KNOWN</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Complete customer profile. Loyalty tracking active. Personalized rewards. They're your VIP.
                </p>
              </div>
              <div className="pt-4 flex flex-col gap-2 w-full">
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" style={{
                  opacity: 'calc(0.3 + var(--scroll-progress) * 0.7)',
                }} />
                <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full w-3/4" style={{
                  opacity: 'calc(0.3 + var(--scroll-progress) * 0.7)',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center p-6 rounded-xl bg-neutral-dark/50 border border-neutral-light/20 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-outfit font-black text-accent">84%</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Won't Download Apps</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-neutral-dark/50 border border-neutral-light/20 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-outfit font-black text-secondary">0%</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Customer Data Captured</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-neutral-dark/50 border border-neutral-light/20 backdrop-blur-sm">
            <p className="text-3xl md:text-4xl font-outfit font-black text-primary">∞</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">Lost Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
