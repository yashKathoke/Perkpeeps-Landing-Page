import React from 'react'

export default function HowItWorksSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden border-t border-border bg-background text-foreground transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-foreground/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-foreground/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-20 text-foreground">
                    <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6 animate-in fade-in zoom-in duration-700">
                        <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
                            The Blueprint
                        </span>
                    </span>
                    <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        What actually happens
                        <br />
                        <span className="text-foreground neon-glow opacity-60">in your café</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Step 01 */}
                    <div className="group relative bg-neutral-dark/30 border border-border p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-foreground/30 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 border border-border group-hover:scale-110 transition-transform">
                            <span className="font-outfit font-black text-foreground">01</span>
                        </div>
                        <h3 className="text-xl font-outfit font-bold text-foreground mb-3 tracking-tight">Entrance & Scan</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            A customer walks in and scans a QR on your counter. No app, no account, zero friction.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">No App</span>
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">No Login</span>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="group relative bg-neutral-dark/30 border border-border p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-foreground/30 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 border border-border group-hover:scale-110 transition-transform">
                            <span className="font-outfit font-black text-foreground">02</span>
                        </div>
                        <h3 className="text-xl font-outfit font-bold text-foreground mb-3 tracking-tight">Order & Pay</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            They order and pay like normal. Every penny flows through your current system.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">Your POS</span>
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">Stay Fast</span>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="group relative bg-neutral-dark/30 border border-border p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-foreground/30 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 border border-border group-hover:scale-110 transition-transform">
                            <span className="font-outfit font-black text-foreground">03</span>
                        </div>
                        <h3 className="text-xl font-outfit font-bold text-foreground mb-3 tracking-tight">The Magic Tap</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            When you complete the order, the visit is counted. Rewards unlock naturally as they come back.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">Visits Stack</span>
                            <span className="px-2 py-1 rounded-md bg-muted border border-border text-[10px] font-bold text-foreground/60 tracking-tighter uppercase">Auto Rewards</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Anchor */}
                <div className="relative group overflow-hidden rounded-[2.5rem] border border-border bg-neutral-dark/40 p-10 backdrop-blur-xl text-center">
                    <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="relative z-10 text-2xl md:text-3xl font-outfit font-bold text-foreground max-w-3xl mx-auto leading-tight">
                        PerkPeeps is a QR-based loyalty layer that tracks real visits — <br />
                        <span className="text-foreground neon-glow opacity-80">without touching your POS.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
