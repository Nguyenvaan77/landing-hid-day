"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?:
    | "fade-in-up"
    | "fade-in-down"
    | "fade-in-left"
    | "fade-in-right"
    | "scale-in"
    | "rotate-in"
    | "flip-in"
    | "bounce-in"
    | "slide-diagonal"
    | "zoom-rotate"
  delay?: number
  className?: string
}

export default function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const animationClass = `animate-${animation}`
  const delayClass = delay > 0 ? `animate-stagger-${Math.min(delay, 6)}` : ""

  return (
    <section ref={elementRef} className={`${animationClass} ${delayClass} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </section>
  )
}
