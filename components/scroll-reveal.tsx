"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
}

export default function ScrollReveal({ children, delay = 0, duration = 700, yOffset = 20 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`
        transform transition-all ease-out
        ${isVisible ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${yOffset}px]`}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
