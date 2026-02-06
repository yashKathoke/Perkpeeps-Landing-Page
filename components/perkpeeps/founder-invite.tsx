import React from 'react'
import Image from 'next/image'
import { Mail, MessageCircle, Phone } from 'lucide-react'

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
      className="group relative rounded-2xl border border-neutral-light/20 backdrop-blur-sm p-8 overflow-hidden transition-all duration-500 hover:border-primary/50 bg-neutral-dark/30 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Avatar */}
        <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
          <div className="w-full h-full rounded-full bg-neutral-dark flex items-center justify-center overflow-hidden relative">
            {founder.image ? (
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <span className="text-2xl font-outfit font-black text-primary">{founder.name[0]}</span>
            )}
          </div>
        </div>

        <h3 className="font-outfit font-black text-2xl mb-1 text-primary">{founder.name}</h3>
        <p className="text-sm text-primary font-outfit font-bold mb-3">{founder.title}</p>
        <p className="text-sm text-muted-foreground mb-6 italic">"{founder.vibe}"</p>

        {/* Contact options */}
        <div className="space-y-3">
          {/* Email */}
          <a
            href={`mailto:${founder.email}`}
            className="flex items-center gap-3 p-3 rounded-lg bg-neutral-dark/50 hover:bg-neutral-dark transition-colors duration-300 group/link"
          >
            <Mail className="w-4 h-4 text-secondary group-hover/link:text-primary transition-colors" />
            <span className="text-sm text-muted-foreground group-hover/link:text-foreground transition-colors break-all">
              {founder.email}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-neutral-dark/50 hover:bg-primary/20 transition-colors duration-300 group/link text-left"
          >
            <MessageCircle className="w-4 h-4 text-primary group-hover/link:scale-110 transition-transform flex-shrink-0" />
            <span className="text-sm text-muted-foreground group-hover/link:text-primary transition-colors">
              Message on WhatsApp
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${founder.displayPhone}`}
            className="flex items-center gap-3 p-3 rounded-lg bg-neutral-dark/50 hover:bg-accent/20 transition-colors duration-300 group/link"
          >
            <Phone className="w-4 h-4 text-accent group-hover/link:text-dragonfruit transition-colors" />
            <span className="text-sm text-muted-foreground group-hover/link:text-foreground transition-colors">
              {founder.displayPhone}
            </span>
          </a>
        </div>
      </div>

      {/* Border animation */}
      <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
    </div>
  )
}

export default function FounderSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>



      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-sm mb-6">
            <span className="text-xs font-outfit font-bold text-secondary uppercase tracking-wide">
              Radical Honesty
            </span>
          </span>

          <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 text-white">
            Talk to the Builders
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            We're hand-selecting our first 20 partner cafés. No fees, no fuss, just early access to the future of loyalty.
          </p>

          <p className="text-sm text-primary font-outfit font-bold">
            If you're in a rush, text the founders directly. We're in the shop, just like you.
          </p>
        </div>

        {/* Founder grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {founders.map((founder, index) => (
            <FounderCard key={founder.id} founder={founder} index={index} />
          ))}
        </div>

        {/* Priority line message */}
        <div className="mt-12 p-6 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm text-center">
          <p className="text-sm text-muted-foreground mb-2">PRIORITY LINE FOR PARTNERS</p>
          <h3 className="font-outfit font-black text-xl md:text-2xl text-primary mb-3">
            Direct Access to the Builders
          </h3>
          <p className="text-sm text-foreground max-w-2xl mx-auto">
            No hold times. No corporate bots. Just the founders who built this, ready to listen to your café's unique story.
            Message them directly. They respond within hours.
          </p>
        </div>
      </div>
    </section>
  )
}
