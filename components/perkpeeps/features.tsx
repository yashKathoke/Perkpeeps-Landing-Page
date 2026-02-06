import React from 'react'
import { QrCode, Zap, Users, Gamepad2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    id: 'zero-friction',
    title: 'Zero Downloads',
    subtitle: 'No App Store. No "Forgot Password."',
    description: 'Just a 5-second browser-based ritual. Scan, gain XP, done. Your customers stay in flow.',
    icon: QrCode,
    size: 'lg',
    color: 'from-primary to-secondary',
  },
  {
    id: 'agnostic',
    title: 'POS Agnostic',
    subtitle: 'We touch hearts, not your sales tech.',
    description: 'Your payment system, inventory, and operations stay untouched. We layer on top.',
    icon: Zap,
    size: 'sm',
    color: 'from-accent to-primary',
  },
  {
    id: 'staff',
    title: 'Staff Stays Human',
    subtitle: 'Built for the 4:00 PM rush.',
    description: 'Minimal taps. Zero training. Your team keeps serving with ease, not complexity.',
    icon: Users,
    size: 'sm',
    color: 'from-secondary to-accent',
  },
  {
    id: 'dopamine',
    title: 'Dopamine Driven',
    subtitle: 'Streaks, Levels, XP.',
    description: 'Turn a coffee habit into a game. Customers return for the ritual. You own the habit loop.',
    icon: Gamepad2,
    size: 'lg',
    color: 'from-primary to-accent',
  },
]

interface CardProps {
  feature: typeof features[0]
  index: number
}

function FeatureCard({ feature, index }: CardProps) {
  const Icon = feature.icon

  return (
    <div
      key={feature.id}
      className={cn(
        "group relative rounded-2xl border border-neutral-light/20 backdrop-blur-sm p-8 overflow-hidden transition-all duration-300 cursor-pointer bg-neutral-dark/30 shadow-lg hover:shadow-2xl hover:scale-105",
        feature.size === 'lg'
          ? 'md:col-span-2 min-h-80 hover:border-primary/50'
          : 'md:col-span-1 min-h-80 hover:border-secondary/50',
        feature.color === 'from-primary to-secondary' && 'hover:shadow-primary/20',
        feature.color === 'from-accent to-primary' && 'hover:shadow-accent/20',
        feature.color === 'from-secondary to-accent' && 'hover:shadow-secondary/20',
        feature.color === 'from-primary to-accent' && 'hover:shadow-primary/20'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="mb-4 inline-block p-3 rounded-xl bg-neutral-medium/50 group-hover:bg-neutral-medium transition-all duration-300">
            <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
          </div>

          <h3 className="font-outfit font-black text-3xl md:text-4xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>

          <p className="text-sm font-outfit font-bold text-muted-foreground mb-4">{feature.subtitle}</p>

          <p className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {feature.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-8 inline-flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          <span className="text-sm font-outfit font-bold">Learn more</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Border animation on hover */}
      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none" />
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23fff' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-primary uppercase tracking-wide">
              Built for the Modern Maker
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-white">
            Why PerkPeeps is Different
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four pillars designed for cafés that understand the vibe is as important as the coffee.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Card A - Double width */}
          <FeatureCard feature={features[0]} index={0} />

          {/* Card B */}
          <FeatureCard feature={features[1]} index={1} />

          {/* Card C */}
          <FeatureCard feature={features[2]} index={2} />

          {/* Card D - Double width at bottom */}
          <FeatureCard feature={features[3]} index={3} />
        </div>
      </div>
    </section>
  )
}
