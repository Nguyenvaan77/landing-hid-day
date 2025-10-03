"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface ScrollAnimateSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimateSection({ children, className = "", delay = 0 }: ScrollAnimateSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const delayClass = delay > 0 ? `delay-${delay}` : ""

  return (
    <section ref={elementRef} className={`scroll-animate ${delayClass} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </section>
  )
}
