import React from 'react'
import Link from 'next/link'
import FooterSection from '@/components/perkpeeps/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms & Conditions - PerkPeeps',
    description: 'Terms & Conditions governing the use of PerkPeeps by cafés and their customers.',
}

export default function TermsPage() {
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
                        Terms & Conditions
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        The ground rules for using PerkPeeps. Straightforward and fair.
                    </p>
                </header>

                <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm space-y-8 text-pretty">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground mb-4">Last updated: February 09, 2026</p>
                        <p className="leading-relaxed text-muted-foreground">
                            These Terms & Conditions govern the use of PerkPeeps by cafés and their customers. By using PerkPeeps, you agree to these terms.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">1. Service Description</h3>
                        <p className="text-muted-foreground">PerkPeeps provides:</p>
                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                            <li>QR-based ordering</li>
                            <li>Loyalty tracking</li>
                            <li>Reward management tools</li>
                        </ul>
                        <div className="bg-muted p-4 rounded-xl mt-4 border border-border">
                            <p className="font-bold text-sm">⚠️ PerkPeeps does not process payments.</p>
                            <p className="text-sm text-muted-foreground">All payments occur directly between customers and cafés using existing POS systems.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">2. WhatsApp Business Terms</h3>
                        <p className="text-muted-foreground">By using PerkPeeps OTP services, you agree to the following:</p>
                        <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
                            <li>You agree to the <Link href="https://www.whatsapp.com/legal/business-terms/" className="text-primary hover:underline" target="_blank">WhatsApp Business Terms</Link>.</li>
                            <li>You provide explicit opt‑in to receive utility messages (OTP verification).</li>
                            <li>You will not use the platform for any form of spam or bulk messaging.</li>
                        </ul>
                        <p className="text-sm text-muted-foreground italic">
                            WhatsApp is a trademark of Meta Platforms, Inc.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">3. Commerce Policy</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            PerkPeeps enables cafés to sell food and beverages. We are strictly compliant with the <Link href="https://business.whatsapp.com/policy" className="text-primary hover:underline" target="_blank">WhatsApp Commerce Policy</Link>.
                        </p>
                        <p className="text-muted-foreground">
                            The sale of prohibited items (including but not limited to weapons, adult products, or regulated goods) is strictly forbidden on this platform.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">4. Café Responsibilities</h3>
                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                            <li>Accurately define reward rules and offers</li>
                            <li>Honor rewards earned by customers</li>
                            <li>Ensure staff correctly confirm redemptions</li>
                            <li>Use customer data only for legitimate business purposes</li>
                            <li><strong>Commercial Spam:</strong> Do not use the platform for unsolicited marketing; only café admins may use verified templates.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">5. Customer Use & Prohibited Actions</h3>
                        <p className="text-muted-foreground mb-2">Customers agree to:</p>
                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                            <li>Provide accurate mobile numbers for OTP verification</li>
                            <li>Not attempt to abuse or manipulate the loyalty system</li>
                            <li>Follow café policies regarding reward redemption</li>
                        </ul>
                        <div className="bg-destructive/10 p-4 rounded-xl mt-4 border border-destructive/20">
                            <p className="font-bold text-sm text-destructive uppercase tracking-wider mb-2">Prohibited:</p>
                            <ul className="list-disc ml-5 space-y-1 text-sm text-muted-foreground">
                                <li>OTP sharing or bypass attempts</li>
                                <li>Automated abuse or bot scripts</li>
                                <li>Commercial spam (Messaging is restricted to service-utility only)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">6. Availability</h3>
                        <p className="text-muted-foreground">
                            PerkPeeps is provided on an &quot;as-is&quot; basis. Uptime may be affected by internet connectivity, device limitations, or scheduled maintenance.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">7. Limitation of Liability</h3>
                        <p className="text-muted-foreground">
                            PerkPeeps is not liable for lost profits, incorrect reward configurations by cafés, or POS/payment-related issues. Our liability is limited to the fees paid for the service, where applicable.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">8. Termination</h3>
                        <p className="text-muted-foreground">
                            We may suspend or terminate access if terms are violated, the service is misused (including automated abuse), or as required by law.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">9. Governing Law</h3>
                        <p className="text-muted-foreground">
                            These terms are governed by the laws of Maharashtra, India.
                        </p>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    )
}
