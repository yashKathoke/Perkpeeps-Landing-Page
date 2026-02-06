import React from 'react'

export default function WhatNextSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden border-t border-border bg-background text-foreground transition-colors duration-500">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6 animate-in fade-in zoom-in duration-700">
                    <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
                        The Handover
                    </span>
                </span>
                <h2 className="font-outfit font-black text-4xl md:text-5xl text-foreground mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    What happens next
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Visual Divider / Journey Line */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent -z-10" />

                    {/* Point 1 */}
                    <div className="space-y-6 group">
                        <div className="w-14 h-14 mx-auto bg-neutral-dark rounded-2xl border border-border flex items-center justify-center text-foreground/40 font-outfit font-black text-xl group-hover:border-foreground/40 group-hover:text-foreground transition-all duration-500 shadow-xl shadow-black/40">
                            1
                        </div>
                        <div>
                            <p className="text-xl font-outfit font-bold text-foreground mb-2">You message us.</p>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                We ask about your café — <br />
                                <span className="text-foreground/40">not your tech stack.</span>
                            </p>
                        </div>
                    </div>

                    {/* Point 2 */}
                    <div className="space-y-6 group md:translate-y-4">
                        <div className="w-14 h-14 mx-auto bg-neutral-dark rounded-2xl border border-border flex items-center justify-center text-foreground/40 font-outfit font-black text-xl group-hover:border-foreground/40 group-hover:text-foreground transition-all duration-500 shadow-xl shadow-black/40">
                            2
                        </div>
                        <div>
                            <p className="text-xl font-outfit font-bold text-foreground mb-2">We walk you through.</p>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                See exactly how this would <br />
                                <span className="text-foreground/40">look in your space.</span>
                            </p>
                        </div>
                    </div>

                    {/* Point 3 */}
                    <div className="space-y-6 group">
                        <div className="w-14 h-14 mx-auto bg-neutral-dark rounded-2xl border border-border flex items-center justify-center text-foreground/40 font-outfit font-black text-xl group-hover:border-foreground/40 group-hover:text-foreground transition-all duration-500 shadow-xl shadow-black/40">
                            3
                        </div>
                        <div>
                            <p className="text-xl font-outfit font-bold text-foreground mb-2">No pitch. No pressure.</p>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                If it’s not a fit, we’ll tell you. <br />
                                <span className="text-foreground/40">No obligation.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
