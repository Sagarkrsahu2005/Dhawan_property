"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface LoadingScreenProps {
  onCompleteAction: () => void
}

export default function LoadingScreen({ onCompleteAction }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 50 })
      gsap.set(progressBarRef.current, { scaleX: 0 })

      // Animation timeline
      const tl = gsap.timeline()

      // Logo entrance
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      
      // Text entrance
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      
      // Progress bar animation
      .to(progressBarRef.current, {
        scaleX: 1,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (progressBarRef.current) {
            const transform = progressBarRef.current.style.transform
            const scaleValue = transform.match(/scaleX\(([^)]+)\)/)
            if (scaleValue) {
              const progressValue = Math.round(parseFloat(scaleValue[1]) * 100)
              setProgress(Math.min(100, progressValue))
            }
          }
        }
      }, "-=0.3")
      
      // Exit animation
      .to([logoRef.current, textRef.current, progressBarRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.in",
        stagger: 0.1
      }, "+=0.5")
      
      .to(containerRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        onComplete: onCompleteAction
      }, "-=0.3")

    }, containerRef)

    return () => ctx.revert()
  }, [onCompleteAction])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-navy-900 via-blue-900 to-indigo-900 z-50 flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center text-white">
        {/* Logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-2xl font-bold text-navy-900">DP</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
            Dhawan Properties
          </h1>
        </div>

        {/* Loading text */}
        <div ref={textRef} className="mb-8">
          <p className="text-lg text-gray-300 mb-2">Loading your dream home experience...</p>
          <p className="text-sm text-gray-400">{progress}%</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full origin-left"
          />
        </div>
      </div>
    </div>
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleLoadingComplete = () => {
    setShowLoading(false)
    
    // Animate in the main content
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
    }
  }

  return (
    <>
      {showLoading && <LoadingScreen onCompleteAction={handleLoadingComplete} />}
      <div ref={contentRef} style={{ opacity: showLoading ? 0 : 1 }}>
        {children}
      </div>
    </>
  )
}
