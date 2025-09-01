"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ScrollRevealText({ children, className = "", delay = 0 }: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      const lines = textRef.current?.querySelectorAll('.line')
      if (!lines || lines.length === 0) return

      gsap.fromTo(lines, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, textRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

export function FadeInUp({ children, className = "", delay = 0 }: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, elementRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function ScaleInAnimation({ children, className = "" }: { 
  children: React.ReactNode
  className?: string
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, {
        scale: 0.8,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, elementRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function SlideInFromLeft({ children, className = "", distance = 100 }: { 
  children: React.ReactNode
  className?: string
  distance?: number
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, {
        x: -distance,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, elementRef)

    return () => ctx.revert()
  }, [distance])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function SlideInFromRight({ children, className = "", distance = 100 }: { 
  children: React.ReactNode
  className?: string
  distance?: number
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, {
        x: distance,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, elementRef)

    return () => ctx.revert()
  }, [distance])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function RotateInAnimation({ children, className = "" }: { 
  children: React.ReactNode
  className?: string
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, {
        rotation: -180,
        scale: 0.5,
        opacity: 0
      }, {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, elementRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export function StaggeredFadeIn({ children, className = "", staggerDelay = 0.1 }: { 
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const childElements = containerRef.current?.children
      if (!childElements || childElements.length === 0) return

      gsap.fromTo(childElements, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [staggerDelay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
