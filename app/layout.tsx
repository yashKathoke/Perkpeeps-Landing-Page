import React from "react"
import type { Metadata, Viewport } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const _outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
})

const _plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'PerkPeeps - Invisible Loyalty Layer for Independent Cafés',
  description: 'The invisible rewards layer for cafés that care about vibe. Join 20 partner cafés in the awakening.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#08090A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{
      '--font-outfit': _outfit.style.fontFamily,
      '--font-plus-jakarta': _plusJakartaSans.style.fontFamily,
    } as React.CSSProperties}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
