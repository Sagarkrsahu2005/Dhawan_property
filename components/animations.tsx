"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroAnimations() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        y: 100,
        opacity: 0
      })
      
      gsap.set(cardRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.9
      })

      // Hero entrance animation
      const tl = gsap.timeline({ delay: 0.5 })
      
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(cardRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8")

      // Floating elements animation
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children
        gsap.to(elements, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(3, 5)",
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5
        })
      }

      // Parallax effect for background
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        y: -100,
        ease: "none"
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return {
    heroRef,
    titleRef,
    subtitleRef,
    buttonsRef,
    cardRef,
    floatingElementsRef
  }
}

export function PropertyCardAnimations() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children
      if (!cards) return

      gsap.fromTo(cards, {
        y: 100,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Hover animations
      Array.from(cards).forEach((card) => {
        const cardElement = card as HTMLElement
        
        cardElement.addEventListener("mouseenter", () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })

    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return cardsRef
}

export function SectionAnimations() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.children
      if (!elements) return

      gsap.fromTo(elements, {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return sectionRef
}

export function StatCounterAnimation({ endValue, duration = 2 }: { endValue: number, duration?: number }) {
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!numberRef.current) return

    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(obj.value).toString()
          }
        },
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

    }, numberRef)

    return () => ctx.revert()
  }, [endValue, duration])

  return <span ref={numberRef}>0</span>
}

export function TextRevealAnimation({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, {
        clipPath: "inset(0 100% 0 0)"
      }, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

export function LoadingAnimation() {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loaderRef.current) return

    const ctx = gsap.context(() => {
      const dots = loaderRef.current?.children
      if (!dots) return

      gsap.to(dots, {
        y: -20,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.1,
        yoyo: true,
        repeat: -1
      })

    }, loaderRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={loaderRef} className="flex space-x-2 justify-center">
      <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
      <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
      <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
    </div>
  )
}

export function ButtonHoverEffect({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <button ref={buttonRef} className={className}>
      {children}
    </button>
  )
}
