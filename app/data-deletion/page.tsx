import React from 'react'
import Link from 'next/link'
import FooterSection from '@/components/perkpeeps/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data Deletion Policy - PerkPeeps',
    description: 'How to request the deletion of your data from the PerkPeeps platform.',
}

export default function DataDeletionPage() {
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
                    <h1 className="text-4xl md:text-6xl font-outfit font-black tracking-tighter mb-4 italic">
                        Your Data, Your Rules.
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        We respect your privacy. If you want out, we make it easy.
                    </p>
                </header>

                {/* Data Deletion Content */}
                <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm space-y-12 text-pretty">
                    <div className="flex items-start gap-4">
                        <span className="text-4xl">🗑️</span>
                        <div>
                            <h2 className="text-2xl font-outfit font-bold mb-2">Data Deletion Policy</h2>
                            <p className="text-muted-foreground">PerkPeeps respects user data rights and provides clear paths to remove your information from our systems.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">How to Request Deletion</h3>
                        <p className="text-muted-foreground">A customer may request deletion of their data by:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-xl border border-border bg-muted/30">
                                <p className="font-bold mb-2">Option 1</p>
                                <p className="text-sm text-muted-foreground">Contact the café you joined directly. They can initiate the deletion via their merchant dashboard.</p>
                            </div>
                            <div className="p-6 rounded-xl border border-border bg-muted/30">
                                <p className="font-bold mb-2">Option 2</p>
                                <p className="text-sm text-muted-foreground">Email <a href="mailto:hello@perkpeeps.com" className="text-primary hover:underline">hello@perkpeeps.com</a> with your mobile number. We&apos;ll handle the rest.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-outfit font-bold border-l-4 border-primary pl-4">What Happens After Deletion?</h3>
                        <p className="text-muted-foreground leading-relaxed">In compliance with the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong>, once a deletion request is processed, the following actions are taken:</p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="text-primary">✦</span>
                                <p><span className="font-bold">Personal Identifiers Removed:</span> Your phone number and OTP status are permanently wiped from our database.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary">✦</span>
                                <p><span className="font-bold">Activity Anonymized:</span> Your loyalty history and order records are either fully deleted or stripped of identifying info for café reporting.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary">✦</span>
                                <p><span className="font-bold">Zero Contact:</span> You will no longer receive transactional WhatsApp or SMS messages from the platform.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-primary/20 bg-primary/5 text-center">
                        <p className="text-sm font-medium">
                            Deletion requests are processed within <span className="text-primary font-bold">72 hours</span> as per DPDP guidelines.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-border">
                        <h3 className="font-bold mb-4">Meta/Facebook Requirement</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            This page serves as our official Data Deletion Callback URL/Instructions as required by Meta for the WhatsApp Business Platform.
                            Users who have interacted with our WhatsApp bot can use the methods above to request data removal.
                        </p>
                    </div>
                </div>
            </div>

            <FooterSection />
        </main>
    )
}