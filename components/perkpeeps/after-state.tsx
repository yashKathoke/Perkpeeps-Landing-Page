import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function AfterStateSection() {
    return (
        <section className="relative py-24 px-4 overflow-hidden border-t border-border bg-background text-foreground transition-colors duration-500">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] bg-foreground/5 rounded-full blur-[120px] -z-10" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm mb-6">
                        <span className="text-xs font-outfit font-bold text-foreground/40 uppercase tracking-widest">
                            The Evolution
                        </span>
                    </span>
                    <h2 className="font-outfit font-black text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground mb-6">
                        What changes
                        <br />
                        <span className="text-foreground neon-glow opacity-60">after PerkPeeps</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="group relative bg-neutral-dark/30 border border-border p-10 rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:border-foreground/30">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <CheckCircle2 className="w-24 h-24 text-foreground" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-8 border border-border">
                                <CheckCircle2 className="w-7 h-7 text-foreground" />
                            </div>
                            <h3 className="text-3xl font-outfit font-black text-foreground mb-4 leading-tight">You start seeing <br /><span className="text-foreground/40">familiar names.</span></h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Customers come back sooner. They know they’re close to something. They don’t need reminders or pushy apps.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-neutral-dark/30 border border-border p-10 rounded-[2.5rem] backdrop-blur-md transition-all duration-500 hover:border-foreground/30 md:mt-12">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <CheckCircle2 className="w-24 h-24 text-foreground" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-8 border border-border">
                                <CheckCircle2 className="w-7 h-7 text-foreground" />
                            </div>
                            <h3 className="text-3xl font-outfit font-black text-foreground mb-4 leading-tight">Staff don’t <br /><span className="text-foreground/40">explain loyalty.</span></h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                They just confirm rewards. No "download this app" scripts. No awkward pauses. Just seamless hospitality.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Statement */}
                    <div className="md:col-span-2 mt-12 relative group overflow-hidden rounded-[3rem] border border-border bg-neutral-dark/40 p-12 backdrop-blur-xl text-center">
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10 space-y-4">
                            <p className="text-2xl md:text-3xl font-outfit font-bold text-foreground/40">
                                You’re not managing software.
                            </p>
                            <p className="text-4xl md:text-6xl font-outfit font-black text-foreground neon-glow tracking-tight opacity-80">
                                You’re building a habit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
