import React from 'react'
import Link from 'next/link'
import FooterSection from '@/components/perkpeeps/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy - PerkPeeps',
    description: 'Privacy Policy for PerkPeeps users and cafés.',
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="font-outfit font-bold text-xl tracking-tighter flex items-center gap-2 group">
                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                            P
                        </span>
                        PerkPeeps
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-primary transition-colors border border-border px-4 py-2 rounded-full hover:bg-muted"
                    >
                        Back home
                    </Link>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-outfit font-black tracking-tighter mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        How we handle your data. Transparently and with respect.
                    </p>
                </header>

                {/* Privacy Policy Content */}
                <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm space-y-8 text-pretty">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-4">Last updated: February 08, 2026</p>
                        <p className="leading-relaxed">
                            PerkPeeps (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides a QR-based loyalty and ordering platform for cafés and food businesses.
                            This Privacy Policy explains how we collect, use, store, and protect personal information when PerkPeeps is used by cafés and their customers.
                        </p>
                        <p className="mt-4 leading-relaxed italic">
                            We take privacy seriously and design PerkPeeps to collect only what is necessary to operate a simple, in-store loyalty system.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">1. Information We Collect</h3>

                        <div className="ml-5 space-y-4">
                            <div>
                                <h4 className="font-bold mb-2">1.1 Information from Customers (End Users)</h4>
                                <p className="text-muted-foreground mb-2">When a customer joins a café’s loyalty program using PerkPeeps, we may collect:</p>
                                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                                    <li>Mobile phone number</li>
                                    <li>One-time password (OTP) verification status</li>
                                    <li>Loyalty activity (visits, rewards earned, redemptions)</li>
                                    <li>Orders placed via QR (items and total spend)</li>
                                </ul>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                                <p className="font-bold mb-2 text-sm uppercase tracking-wider">We do not require customers to:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    <li className="flex items-center gap-2">❌ Download an app</li>
                                    <li className="flex items-center gap-2">❌ Create passwords</li>
                                    <li className="flex items-center gap-2">❌ Share email addresses</li>
                                    <li className="flex items-center gap-2">❌ Personal profiles</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-2">1.2 Information from Cafés (Business Users)</h4>
                                <p className="text-muted-foreground mb-2">When a café uses PerkPeeps, we may collect:</p>
                                <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                                    <li>Business name and outlet details</li>
                                    <li>Menu items and pricing</li>
                                    <li>Staff activity related to order and reward management</li>
                                    <li>Contact details of the business owner or admin</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">2. How We Use Information</h3>
                        <p className="text-muted-foreground">We use collected information strictly to:</p>
                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                            <li>Operate the loyalty and ordering system</li>
                            <li>Track visits and reward progress</li>
                            <li>Prevent fraud and incorrect redemptions</li>
                            <li>Display reward status to customers</li>
                            <li>Provide dashboards and reports to café owners</li>
                            <li>Send essential service messages (e.g., OTP verification)</li>
                        </ul>
                        <p className="font-bold text-primary mt-4">We do not sell or rent personal data.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">3. WhatsApp & Messaging Use</h3>
                        <p className="text-muted-foreground">PerkPeeps may use WhatsApp or SMS only for transactional purposes, such as:</p>
                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                            <li>OTP verification</li>
                            <li>Reward confirmations</li>
                            <li>Essential service-related communication</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">All messaging complies with Meta WhatsApp Business Platform policies.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">4. Data Sharing</h3>
                        <p className="leading-relaxed text-muted-foreground">
                            We do not share personal data with third parties except trusted service providers required to operate PerkPeeps (e.g., messaging or hosting services) or when legally required by law.
                        </p>
                        <p className="font-bold">Customer data is scoped to the café they visit and is never shared across cafés.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">5. Data Retention</h3>
                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                            <li>Loyalty progress is retained as long as the café uses PerkPeeps</li>
                            <li>Earned rewards may expire based on café-defined rules</li>
                            <li>Customers may request deletion of their data at any time</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">6. Data Security</h3>
                        <p className="text-muted-foreground">
                            We implement reasonable technical and organizational safeguards to protect data, including secure access controls, encrypted communication, and limited internal access.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">7. User Rights</h3>
                        <p className="text-muted-foreground">
                            Customers have the right to access their stored data, request correction or deletion, or opt out of messaging where applicable. Requests can be made via the café or by contacting us directly.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-border mt-8">
                        <h3 className="font-bold mb-4">Contact</h3>
                        <div className="grid gap-2 text-muted-foreground">
                            <p>Email: <a href="mailto:yashkathoke@perkpeeps.com" className="text-primary hover:underline">yashkathoke@perkpeeps.com</a></p>
                            <p>Business Name: PerkPeeps</p>
                            <p>Country: India</p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    )
}