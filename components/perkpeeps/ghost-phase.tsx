'use client'

import React, { useRef, useEffect } from 'react'

export default function GhostPhaseSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let rafId: number
    let cachedTop = 0
    let cachedHeight = 0

    const updateDimensions = () => {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      cachedTop = rect.top + scrollTop
      cachedHeight = rect.height
    }

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const currentTop = cachedTop - scrollY
        const progress = (windowHeight - currentTop) / (windowHeight + cachedHeight)
        const clampedProgress = Math.max(0, Math.min(1, progress))
        element.style.setProperty('--scroll-progress', clampedProgress.toString())
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    window.addEventListener('scroll', handleScroll, { passive: true })
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
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-background transition-colors duration-500"
      style={{ '--scroll-progress': '0' } as React.CSSProperties}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
              Chapter 01: The Ghost Phase
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter mb-6 text-foreground">
            They come.
            <br />
            They go.
            <br />
            <span className="text-foreground/40">You never know.</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            84% of customers won't download an app. Your regulars stay invisible.
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before State */}
          <div className="relative group overflow-hidden rounded-2xl border border-border p-10 bg-neutral-dark/30 backdrop-blur-md transition-all duration-500" style={{
            opacity: 'calc(1 - var(--scroll-progress) * 0.5)',
          }}>
            <div className="relative z-10 h-64 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 rounded-full border border-border flex items-center justify-center bg-muted">
                <span className="text-4xl font-outfit font-black text-foreground/10">?</span>
              </div>
              <p className="text-xl font-outfit font-black text-foreground/20 tracking-widest uppercase">Invisible</p>
            </div>
          </div>

          {/* After State */}
          <div className="relative group overflow-hidden rounded-2xl border transition-all duration-500 p-10 bg-neutral-dark/40 backdrop-blur-md" style={{
            borderColor: 'hsl(var(--foreground) / calc(0.1 + var(--scroll-progress) * 0.4))',
            opacity: 'calc(0.4 + var(--scroll-progress) * 0.6)',
          }}>
            <div className="relative z-10 h-64 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 rounded-full border-2 border-foreground flex items-center justify-center bg-foreground/10 shadow-[0_0_30px_var(--glow-color)]">
                <span className="text-4xl font-outfit font-black text-foreground">✓</span>
              </div>
              <p className="text-xl font-outfit font-black text-foreground tracking-widest uppercase neon-glow">Known</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { label: "Won't Download Apps", val: "84%" },
            { label: "Data Captured", val: "0%" },
            { label: "Lost Regulars", val: "∞" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-border bg-muted/30">
              <p className="text-3xl font-outfit font-black text-foreground">{stat.val}</p>
              <p className="text-[10px] text-foreground/40 mt-2 uppercase tracking-widest leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
