import React from 'react'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-neutral-dark">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
