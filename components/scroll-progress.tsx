'use client'

import React, { useState, useEffect } from 'react'
import ProgressBar from '@/components/perkpeeps/progress-bar'

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0
            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return <ProgressBar progress={scrollProgress} />
}
