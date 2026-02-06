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
  },
  {
    id: 'agnostic',
    title: 'POS Agnostic',
    subtitle: 'We touch hearts, not your sales tech.',
    description: 'Your payment system, inventory, and operations stay untouched. We layer on top.',
    icon: Zap,
    size: 'sm',
  },
  {
    id: 'staff',
    title: 'Staff Stays Human',
    subtitle: 'Built for the 4:00 PM rush.',
    description: 'Minimal taps. Zero training. Your team keeps serving with ease, not complexity.',
    icon: Users,
    size: 'sm',
  },
  {
    id: 'dopamine',
    title: 'Dopamine Driven',
    subtitle: 'Streaks, Levels, XP.',
    description: 'Turn a coffee habit into a game. Customers return for the ritual. You own the habit loop.',
    icon: Gamepad2,
    size: 'lg',
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
        "group relative rounded-2xl border border-border backdrop-blur-sm p-8 overflow-hidden transition-all duration-300 cursor-pointer bg-neutral-dark/30 shadow-lg hover:shadow-xl hover:scale-[1.02]",
        feature.size === 'lg' ? 'md:col-span-2 min-h-80 hover:border-foreground/30' : 'md:col-span-1 min-h-80 hover:border-foreground/30'
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background gradient (Theme-aware) */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-foreground to-transparent transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="mb-4 inline-block p-3 rounded-xl bg-muted group-hover:bg-foreground/10 transition-all duration-300">
            <Icon className="w-6 h-6 text-foreground transition-colors" />
          </div>

          <h3 className="font-outfit font-black text-3xl md:text-4xl mb-2 text-foreground transition-colors duration-300">
            {feature.title}
          </h3>

          <p className="text-[10px] font-outfit font-bold text-foreground/40 mb-4 tracking-widest uppercase">{feature.subtitle}</p>

          <p className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {feature.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-8 inline-flex items-center gap-2 text-foreground/60 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
          <span className="text-sm font-outfit font-bold">Learn more</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background transition-colors duration-500">
      {/* Background shadow glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
              Core Protocol
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter mb-6 text-foreground">
            Why PerkPeeps
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minimalist infrastructure, maximalist engagement.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          <FeatureCard feature={features[0]} index={0} />
          <FeatureCard feature={features[1]} index={1} />
          <FeatureCard feature={features[2]} index={2} />
          <FeatureCard feature={features[3]} index={3} />
        </div>
      </div>
    </section>
  )
}
