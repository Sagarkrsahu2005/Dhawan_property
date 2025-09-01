"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full pointer-events-none"
      
      // Random sizes and colors
      const size = Math.random() * 4 + 1
      const opacity = Math.random() * 0.3 + 0.1
      const isGold = Math.random() > 0.7
      
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.backgroundColor = isGold ? "#f59e0b" : "#ffffff"
      particle.style.opacity = opacity.toString()
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      container.appendChild(particle)
      particles.push(particle)
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 10 + 10,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      })

      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      })
    })

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  )
}

export function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return

    const shapes = bgRef.current.children
    
    Array.from(shapes).forEach((shape, index) => {
      gsap.to(shape, {
        rotation: 360,
        duration: 20 + Math.random() * 10,
        ease: "none",
        repeat: -1
      })

      gsap.to(shape, {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
        duration: 8 + Math.random() * 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      })
    })
  }, [])

  return (
    <div ref={bgRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-br from-gold-500/10 to-orange-500/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rotate-45 blur-lg" />
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rotate-12 blur-xl" />
      <div className="absolute top-40 right-1/4 w-28 h-28 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl rotate-45 blur-lg" />
    </div>
  )
}
