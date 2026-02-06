import React from 'react'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'

const founders = [
  {
    id: 1,
    name: 'Yash Kathoke',
    title: 'Co-Founder & Developer',
    email: 'kathokeyash130@gmail.com',
    whatsapp: '919767892053',
    displayPhone: '+91 97678 92053',
    vibe: 'Engineers the magic. Perfects the vibe.',
    image: '/yash.jpg',
  },
  {
    id: 2,
    name: 'Gokul Petkar',
    title: 'Co-Founder & Marketer',
    email: 'gokulpetkar@gmail.com',
    whatsapp: '918459954252',
    displayPhone: '+91 84599 54252',
    vibe: 'Trying to make it big and help you make it bigger',
    image: '/gokulpetkar.jpeg',
  },
]

interface FounderCardProps {
  founder: typeof founders[0]
  index: number
}

function FounderCard({ founder, index }: FounderCardProps) {
  const message = "Yo PerkPeeps! I want to level up my shop. Let's talk."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${founder.whatsapp}?text=${encodedMessage}`

  return (
    <div
      key={founder.id}
      className="group relative rounded-2xl border border-border backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-foreground/30 bg-neutral-dark/30 shadow-lg"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Avatar */}
        <div className="mb-6 w-20 h-20 rounded-full border border-border p-1">
          <div className="w-full h-full rounded-full bg-neutral-dark flex items-center justify-center overflow-hidden relative">
            {founder.image ? (
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="80px"
              />
            ) : (
              <span className="text-2xl font-outfit font-black text-foreground">{founder.name[0]}</span>
            )}
          </div>
        </div>

        <h3 className="font-outfit font-black text-2xl mb-1 text-foreground">{founder.name}</h3>
        <p className="text-[10px] text-foreground/40 font-outfit font-bold mb-3 tracking-widest uppercase">{founder.title}</p>
        <p className="text-sm text-muted-foreground mb-6 italic">"{founder.vibe}"</p>

        {/* Contact options */}
        <div className="space-y-2">
          {/* Email */}
          <a
            href={`mailto:${founder.email}`}
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-foreground/5 transition-all duration-300 group/link overflow-hidden px-4"
          >
            <Mail className="w-4 h-4 text-foreground/20 group-hover/link:text-foreground transition-colors flex-shrink-0" />
            <span className="text-sm text-foreground/40 group-hover/link:text-foreground transition-colors truncate">
              {founder.email}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-foreground text-background font-bold text-center justify-center hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Message Founder</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function FounderSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background transition-colors duration-500">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
              Radical Honesty
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl leading-tight tracking-tighter mb-6 text-foreground">
            Talk to the Builders
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're hand-selecting our first 20 partner cafés. Direct access, zero corporate fuss.
          </p>
        </div>

        {/* Founder grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>

        {/* Priority line message */}
        <div className="mt-12 p-8 rounded-[2rem] border border-border bg-neutral-dark/30 backdrop-blur-sm text-center">
          <p className="text-[10px] text-foreground/30 font-bold uppercase tracking-[0.2em] mb-4">Direct Terminal</p>
          <h3 className="font-outfit font-black text-2xl text-foreground mb-4">
            No hold times. No corporate bots.
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Just the founders who built this, ready to listen to your café's unique story.
            Message them directly. They typically respond within hours.
          </p>
        </div>
      </div>
    </section>
  )
}
