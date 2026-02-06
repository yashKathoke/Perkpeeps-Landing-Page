'use client'

import React, { useEffect, useRef } from 'react'


export default function ScrollProgress() {
    // We will update the DOM node directly to avoid React re-renders on every scroll event
    const progressRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let rafId: number

        const handleScroll = () => {
            // Debounce updates to animation frames
            rafId = requestAnimationFrame(() => {
                if (!progressRef.current) return

                const windowHeight = document.documentElement.scrollHeight - window.innerHeight
                const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0

                // Direct DOM update
                progressRef.current.style.width = `${scrolled}%`
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(rafId)
        }
    }, [])

    // Pass the ref to the inner component using a prop or cloneElement, 
    // but since ProgressBar is simple, we might need to modify it or just inline the structure here
    // for maximum performance. Let's look at ProgressBar structure.
    // It takes 'progress' number prop.
    // To allow direct ref access, it is cleaner to just inline the div here or pass a ref.
    // Let's modify this component to render the bar directly to simplify ref usage.

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-neutral-dark">
            <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-75 ease-out origin-left"
                style={{ width: '0%' }}
            />
        </div>
    )
}
