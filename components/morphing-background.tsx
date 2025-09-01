"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const blobs: HTMLDivElement[] = []

    // Create morphing blobs
    for (let i = 0; i < 5; i++) {
      const blob = document.createElement("div")
      blob.className = "absolute rounded-full opacity-20 blur-3xl pointer-events-none"
      
      // Different sizes and colors for each blob
      const sizes = [120, 160, 200, 140, 180]
      const colors = [
        "bg-gradient-to-br from-blue-400 to-purple-600",
        "bg-gradient-to-br from-purple-400 to-pink-600", 
        "bg-gradient-to-br from-gold-400 to-orange-600",
        "bg-gradient-to-br from-cyan-400 to-blue-600",
        "bg-gradient-to-br from-emerald-400 to-teal-600"
      ]
      
      blob.style.width = `${sizes[i]}px`
      blob.style.height = `${sizes[i]}px`
      blob.className += ` ${colors[i]}`
      
      // Random initial position
      blob.style.left = `${Math.random() * 100}%`
      blob.style.top = `${Math.random() * 100}%`
      
      container.appendChild(blob)
      blobs.push(blob)
    }

    // Animate blobs with morphing effect
    blobs.forEach((blob, index) => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      
      // Create morphing animation
      tl.to(blob, {
        scale: `random(0.8, 1.4)`,
        x: `random(-200, 200)`,
        y: `random(-200, 200)`,
        duration: `random(8, 15)`,
        ease: "sine.inOut",
        delay: index * 2
      })
      .to(blob, {
        scale: `random(0.6, 1.2)`,
        x: `random(-300, 300)`,
        y: `random(-300, 300)`,
        duration: `random(10, 18)`,
        ease: "sine.inOut"
      })

      // Separate opacity animation
      gsap.to(blob, {
        opacity: `random(0.1, 0.4)`,
        duration: `random(4, 8)`,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 5
      })

      // Morphing border radius for organic shapes
      gsap.to(blob, {
        borderRadius: "random(30%, 70%) random(30%, 70%) random(30%, 70%) random(30%, 70%)",
        duration: `random(6, 12)`,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 3
      })
    })

    return () => {
      blobs.forEach(blob => {
        if (blob.parentNode) {
          blob.parentNode.removeChild(blob)
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

export function GlowingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const orbs: HTMLDivElement[] = []

    // Create glowing orbs
    for (let i = 0; i < 8; i++) {
      const orb = document.createElement("div")
      orb.className = "absolute rounded-full pointer-events-none"
      
      const size = Math.random() * 40 + 20
      orb.style.width = `${size}px`
      orb.style.height = `${size}px`
      orb.style.background = `radial-gradient(circle, rgba(${Math.random() > 0.5 ? '245, 158, 11' : '59, 130, 246'}, 0.6) 0%, transparent 70%)`
      orb.style.filter = "blur(2px)"
      
      // Random position
      orb.style.left = `${Math.random() * 100}%`
      orb.style.top = `${Math.random() * 100}%`
      
      container.appendChild(orb)
      orbs.push(orb)
    }

    // Float animation for orbs
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: `+=${Math.random() * 400 + 200}`,
        x: `+=${Math.random() * 200 - 100}`,
        duration: Math.random() * 15 + 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 5
      })

      gsap.to(orb, {
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 4 + 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      })

      gsap.to(orb, {
        scale: Math.random() * 0.5 + 0.8,
        duration: Math.random() * 6 + 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 3
      })
    })

    return () => {
      orbs.forEach(orb => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb)
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
