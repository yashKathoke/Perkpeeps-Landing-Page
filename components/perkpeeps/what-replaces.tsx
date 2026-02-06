import React from 'react'
import { X, CheckCircle2 } from 'lucide-react'

export default function WhatReplacesSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden border-t border-border bg-background text-foreground transition-colors duration-500">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-[100px] -z-10" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6">
                        <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
                            The Cleanup
                        </span>
                    </span>
                    <h2 className="font-outfit font-black text-5xl md:text-6xl leading-tight text-foreground mb-6 tracking-tighter">
                        What you can <br /><span className="text-foreground neon-glow opacity-60">stop doing</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Rejection Wall */}
                    <div className="group bg-neutral-dark/30 border border-border p-10 rounded-[2.5rem] backdrop-blur-sm hover:border-foreground/20 transition-colors duration-500">
                        <p className="text-sm font-outfit font-bold text-muted-foreground uppercase tracking-widest mb-8 text-center">Retired Methods</p>
                        <div className="space-y-6">
                            {[
                                "plastic stamp cards that get lost",
                                "loyalty apps customers won’t download",
                                "POS-locked reward systems",
                                "complicated rules staff won’t explain"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group/item">
                                    <div className="w-6 h-6 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 mt-1 border border-border group-hover/item:bg-foreground/10 transition-colors">
                                        <X className="w-3 h-3 text-foreground/40" />
                                    </div>
                                    <span className="text-lg text-muted-foreground/60 font-light line-through decoration-foreground/20 decoration-2 group-hover/item:text-muted-foreground transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Affirmation wall */}
                    <div className="relative group bg-neutral-dark/40 border border-border p-10 rounded-[2.5rem] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-foreground/30">
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <p className="text-sm font-outfit font-bold text-foreground/60 uppercase tracking-widest mb-8 text-center">The Protocol</p>
                        <div className="space-y-8 relative z-10">
                            <div className="flex items-center gap-4 group/aff">
                                <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-border flex items-center justify-center group-hover/aff:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5 text-foreground" />
                                </div>
                                <span className="text-xl font-outfit font-bold text-foreground transition-colors">You keep your POS.</span>
                            </div>
                            <div className="flex items-center gap-4 group/aff">
                                <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-border flex items-center justify-center group-hover/aff:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5 text-foreground" />
                                </div>
                                <span className="text-xl font-outfit font-bold text-foreground transition-colors">You keep your flow.</span>
                            </div>
                            <div className="flex items-center gap-4 group/aff">
                                <div className="w-10 h-10 rounded-xl bg-foreground/10 border border-border flex items-center justify-center group-hover/aff:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5 text-foreground" />
                                </div>
                                <span className="text-2xl font-outfit font-black text-foreground neon-glow opacity-80">Stop losing regulars.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
