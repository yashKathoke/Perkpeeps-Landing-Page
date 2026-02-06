"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// DEVELOPER CONTROL: Set to true to show the theme toggle, false to hide it.
export const SHOW_THEME_TOGGLE = true;

// Note: This matches the user requirement "toggle should be in developer hand"
// Typically placed in a fixed corner or navbar for dev-controlled theme testing.
export function ThemeToggle() {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted || !SHOW_THEME_TOGGLE) return null;

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="fixed bottom-8 right-8 z-[9999] w-14 h-14 rounded-full border-2 border-foreground/20 bg-background/80 backdrop-blur-xl flex items-center justify-center text-foreground shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all hover:scale-110 active:scale-90 group"
            aria-label="Toggle Theme"
        >
            <div className="relative w-7 h-7 flex items-center justify-center">
                <Sun className="absolute w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute w-full h-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
