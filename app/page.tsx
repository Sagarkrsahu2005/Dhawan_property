"use client"

import { useEffect, useState } from "react"
import { properties, type Property, getPropertiesSortedByNewest, getLatestProperty } from "@/lib/property-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Phone, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { HeroAnimations, PropertyCardAnimations, SectionAnimations, StatCounterAnimation, TextRevealAnimation } from "@/components/animations"
import FloatingParticles, { AnimatedBackground } from "@/components/floating-particles"
import MagneticHover, { TiltHover } from "@/components/magnetic-hover"

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Gurgaon",
    quote: "Dhawan Properties made our home buying journey incredibly smooth. Their transparency and attention to detail is unmatched.",
    result: "Closed in 14 days",
    rating: 5,
  },
  {
    name: "Gatik Sharma",
    location: "Delhi",
    quote: "I saved lakhs thanks to their negotiation skills and market knowledge. Highly recommend for first-time buyers.",
    result: "Saved ₹12L",
    rating: 5,
  },
  {
    name: "Amit Patel",
    location: "Noida",
    quote: "Professional service from start to finish. They handled all documentation and made the process stress-free.",
    result: "Hassle-free experience",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    quote: "Outstanding service! They found me the perfect investment property with excellent ROI potential. Very professional team.",
    result: "15% ROI achieved",
    rating: 5,
  },
  {
    name: "Vikash Gupta",
    location: "Indore",
    quote: "Excellent guidance throughout the property purchase. Their local market knowledge in Indore is exceptional.",
    result: "Perfect location found",
    rating: 5,
  },
  {
    name: "Neha Singh",
    location: "Pune",
    quote: "They helped me sell my property at 20% above market rate. Their marketing strategy and negotiation skills are top-notch.",
    result: "20% above market price",
    rating: 5,
  },
  {
    name: "Rohit Agarwal",
    location: "Bangalore",
    quote: "From property search to final documentation, everything was handled professionally. Highly recommend their services.",
    result: "Seamless transaction",
    rating: 5,
  },
  {
    name: "Anita Verma",
    location: "Hyderabad",
    quote: "Best real estate consultants I've worked with. They understood my requirements and delivered exactly what I wanted.",
    result: "Dream home delivered",
    rating: 5,
  },
  {
    name: "Kiran Patel",
    location: "Ahmedabad",
    quote: "Their post-sale support is amazing. Even after closing, they helped with interior designers and loan processing.",
    result: "Complete support",
    rating: 5,
  }
]

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-4">
              <TiltHover>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <Badge variant="secondary" className="mt-2 bg-gold-100 text-gold-800">
                      {testimonial.result}
                    </Badge>
                  </div>
                </Card>
              </TiltHover>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 z-10"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-5 h-5 text-navy-900" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-300 z-10"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-5 h-5 text-navy-900" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold-500 scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile View - Stack vertically on small screens */}
      <div className="md:hidden mt-8">
        <div className="text-center text-sm text-gray-500 mb-4">
          {currentIndex + 1} - {Math.min(currentIndex + 3, testimonials.length)} of {testimonials.length} reviews
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [showInquiry, setShowInquiry] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [lookingFor, setLookingFor] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Inline (on-page) Quick Inquiry form state
  const [qName, setQName] = useState("")
  const [qEmail, setQEmail] = useState("")
  const [qPhone, setQPhone] = useState("")
  const [qLookingFor, setQLookingFor] = useState("")
  const [qMessage, setQMessage] = useState("")
  const [qSubmitting, setQSubmitting] = useState(false)
  const [qSubmitted, setQSubmitted] = useState(false)

  // Property display state
  const [showAllProperties, setShowAllProperties] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [showPropertyModal, setShowPropertyModal] = useState(false)

  useEffect(() => {
    const alreadyShown = typeof window !== "undefined" && window.localStorage.getItem("inq_shown")
    const t = setTimeout(() => {
      if (!alreadyShown) setShowInquiry(true)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setSubmitting(true)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, lookingFor, message, page: "home" }),
      })
      if (!res.ok) throw new Error("Request failed")
      setSubmitted(true)
      if (typeof window !== "undefined") window.localStorage.setItem("inq_shown", "1")
    } catch (err) {
      alert("Something went wrong. Please try again or contact us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!qName || !qPhone) return
    setQSubmitting(true)
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qName,
          phone: qPhone,
          email: qEmail,
          lookingFor: qLookingFor,
          message: qMessage,
          page: "home-inline",
        }),
      })
      if (!res.ok) throw new Error("Request failed")
      setQSubmitted(true)
    } catch (err) {
      alert("Something went wrong. Please try again or contact us directly.")
    } finally {
      setQSubmitting(false)
    }
  }

  // Get properties sorted by newest first (latest properties on top)
  const sortedProperties = getPropertiesSortedByNewest()
  
  // Use the latest property as the hero project
  const latestProject = getLatestProperty()

  // Handle property card click
  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
    setShowPropertyModal(true)
  }

  // Handle View More toggle
  const handleViewMore = () => {
    setShowAllProperties(!showAllProperties)
  }

  // Determine which properties to show (using sorted properties)
  const displayedProperties = showAllProperties ? sortedProperties : sortedProperties.slice(0, 6)

  // Initialize animations
  const { heroRef, titleRef, subtitleRef, buttonsRef, cardRef, floatingElementsRef } = HeroAnimations()
  const propertyCardsRef = PropertyCardAnimations()
  const quickSearchRef = SectionAnimations()
  const statsRef = SectionAnimations()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <section ref={heroRef} className="relative h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('${latestProject.image}')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/70 via-blue-900/60 to-indigo-900/70" />

        {/* Animated Background Elements */}
        <AnimatedBackground />
        <FloatingParticles />

        {/* Floating Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium">
                  ✨ Latest Project
                </span>
              </div>

              <h1 ref={titleRef} className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text">
                  Dream Home
                </span>
              </h1>

              <p ref={subtitleRef} className="text-xl text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience luxury living with our newest premium property featuring world-class amenities and prime
                location.
              </p>

              {/* Minimal Payment Badge */}
              <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-black/30 to-black/20 backdrop-blur-md rounded-full border border-gold-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-semibold text-white">Employee Special</span>
                </div>
                <div className="h-4 w-px bg-gold-500/50"></div>
                <div className="flex items-center space-x-2 text-white">
                  <span className="text-lg font-bold text-gold-400">20%</span>
                  <span className="text-xs">now</span>
                  <span className="text-gold-400">→</span>
                  <span className="text-lg font-bold text-gold-400">80%</span>
                  <span className="text-xs">@possession</span>
                </div>
              </div>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <MagneticHover strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold shadow-2xl hover:shadow-gold-500/25 transition-all duration-300"
                  >
                    <Link href="/contact">Schedule Visit</Link>
                  </Button>
                </MagneticHover>
                {/* <MagneticHover strength={0.2}>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                      <Link href="/contact">Schedule Visit</Link>
                  </Button>
                </MagneticHover> */}
              </div>
            </div>

            {/* Right Content - Latest Project Card */}
            <div className="lg:flex justify-end hidden">
              <TiltHover className="w-full max-w-md">
                <div ref={cardRef} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
                  {/* Property Image */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={latestProject.image || "/placeholder.svg"}
                      alt={latestProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500/90 backdrop-blur-sm text-navy-900 text-sm font-semibold rounded-full">
                        {latestProject.status}
                      </span>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-4 text-center">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{latestProject.title}</h3>
                      <div className="flex items-center justify-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{latestProject.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-2">
                      <div>
                        <span className="text-gray-400 text-sm">Contact for Pricing</span>
                        {/* <div className="text-3xl font-bold text-gold-400">Price on Request</div> */}
                      </div>
                      <MagneticHover strength={0.1}>
                        <Button asChild className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 whitespace-nowrap">
                          <Link href={`/properties/${latestProject.slug || latestProject.id}`}>View Details</Link>
                        </Button>
                      </MagneticHover>
                    </div>
                  </div>
                </div>
              </TiltHover>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Search */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={quickSearchRef}>
            <TextRevealAnimation className="text-center mb-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Find Your Perfect Property</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Search through our curated collection of premium properties using our advanced filters
              </p>
            </TextRevealAnimation>

            <TiltHover>
              <Card className="shadow-lg backdrop-blur-sm bg-white/95">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="noida">Noida</SelectItem>
                      </SelectContent>
                    </Select>

                    <MagneticHover strength={0.1}>
                      <Button asChild className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                        <Link href="/properties">Search Properties</Link>
                      </Button>
                    </MagneticHover>
                  </div>
                </CardContent>
              </Card>
            </TiltHover>
          </div>
        </div>
      </section> */}

      {/* Featured Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TextRevealAnimation>
              <h2 className="text-4xl font-bold text-navy-900 mb-4">
                {showAllProperties ? 'All Properties' : 'Featured Properties'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {showAllProperties 
                  ? 'Browse our complete collection of premium properties with verified documentation and transparent pricing.'
                  : 'Discover our handpicked selection of premium properties with verified documentation and transparent pricing.'
                }
              </p>
            </TextRevealAnimation>
          </div>

          <div ref={propertyCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => (
              <TiltHover key={property.id}>
                <Card 
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-100/50"
                  onClick={() => handlePropertyClick(property)}
                >
                  <div className="relative">
                    <img
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.id === latestProject.id ? (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold shadow-lg">Latest Project</Badge>
                    ) : (
                      property.tag && (
                        <Badge className="absolute top-4 left-4 bg-gray-200 text-navy-900">{property.tag}</Badge>
                      )
                    )}
                    {/* Click overlay indicator */}
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <span className="text-navy-900 font-semibold text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-navy-900">{property.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms} BHK</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms} Bath</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area} sq.ft</span>
                      </div>
                    </div>
                    <MagneticHover strength={0.1}>
                      <Button 
                        asChild 
                        className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                      >
                        <Link 
                          href={`/properties/${property.slug || property.id}`}
                          onClick={(e) => {
                            e.stopPropagation() // Prevent card click when button is clicked
                          }}
                        >
                          View Full Details
                        </Link>
                      </Button>
                    </MagneticHover>
                  </CardContent>
                </Card>
              </TiltHover>
            ))}
          </div>

          {/* View More / View Less Button */}
          <div className="text-center mt-12">
            <MagneticHover strength={0.2}>
              <Button
                onClick={handleViewMore}
                variant="outline"
                size="lg"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent px-8 py-3"
              >
                {showAllProperties ? `View Less (Showing ${displayedProperties.length} of ${properties.length})` : `View All Properties (${properties.length} Available)`}
              </Button>
            </MagneticHover>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={statsRef}>
              <TextRevealAnimation>
                <h2 className="text-4xl font-bold text-navy-900 mb-6">Why Choose Dhawan Properties?</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 15 years of experience in the real estate industry, we have built a reputation for trust,
                  transparency, and exceptional service. Every property in our portfolio is thoroughly verified and comes with complete documentation support.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From first-time homebuyers to seasoned investors, we provide personalized guidance and end-to-end
                  support throughout your property journey.
                </p>
              </TextRevealAnimation>
              <MagneticHover strength={0.1}>
                <Button asChild variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </MagneticHover>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <TiltHover>
                <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    <StatCounterAnimation endValue={1000} />+
                  </div>
                  <div className="text-gray-600">Properties Sold</div>
                </Card>
              </TiltHover>
              <TiltHover>
                <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    <StatCounterAnimation endValue={15} />+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </Card>
              </TiltHover>
              <TiltHover>
                <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    <StatCounterAnimation endValue={500} />+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </Card>
              </TiltHover>
              <TiltHover>
                <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    <StatCounterAnimation endValue={100} />%
                  </div>
                  <div className="text-gray-600">RERA Compliant</div>
                </Card>
              </TiltHover>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextRevealAnimation className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real experiences from real customers</p>
          </TextRevealAnimation>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <TextRevealAnimation>
                <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
                <p className="text-gray-300 mb-8">
                  Get in touch with our expert team today. We'll help you find the perfect property that matches your
                  needs and budget.
                </p>
              </TextRevealAnimation>
              <div className="flex flex-col sm:flex-row gap-4">
                <MagneticHover strength={0.2}>
                  <a href="tel:+919999628400">
                    <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </MagneticHover>
                <MagneticHover strength={0.2}>
                  <a href="https://wa.me/919999628400" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                    >
                      WhatsApp Us
                    </Button>
                  </a>
                </MagneticHover>
              </div>
            </div>
            <TiltHover>
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Quick Inquiry</h3>
              {qSubmitted ? (
                <div className="space-y-3">
                  <p className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
                    Thank you! Your inquiry has been received. Our team will contact you soon.
                  </p>
                  <Button onClick={() => setQSubmitted(false)} variant="outline" className="w-full">
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-3">
                  <Input placeholder="Your Name" value={qName} onChange={(e) => setQName(e.target.value)} required />
                  <Input placeholder="Email" type="email" value={qEmail} onChange={(e) => setQEmail(e.target.value)} />
                  <Input placeholder="Phone Number" type="tel" value={qPhone} onChange={(e) => setQPhone(e.target.value)} required />
                  <Select value={qLookingFor} onValueChange={setQLookingFor}>
                    <SelectTrigger>
                      <SelectValue placeholder="I'm looking for..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy Property</SelectItem>
                      <SelectItem value="sell">Sell Property</SelectItem>
                      <SelectItem value="rent">Rent Property</SelectItem>
                      <SelectItem value="invest">Investment Options</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Message (optional)" value={qMessage} onChange={(e) => setQMessage(e.target.value)} rows={3} />
                  <MagneticHover strength={0.1}>
                    <Button type="submit" disabled={qSubmitting} className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                      {qSubmitting ? "Sending..." : "Submit Inquiry"}
                    </Button>
                  </MagneticHover>
                </form>
              )}
            </Card>
          </TiltHover>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dhawan Properties",
            "url": "https://dhavanproperties.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://dhavanproperties.com/properties?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Property Listings Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Properties",
            "numberOfItems": sortedProperties.slice(0, 6).length,
            "itemListElement": sortedProperties.slice(0, 6).map((property, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Accommodation",
                "name": property.title,
                "description": property.description,
                "image": property.image,
                "url": `https://dhavanproperties.com/properties/${property.slug || property.id}`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": property.location
                },
                "numberOfRooms": property.bedrooms,
                "floorSize": {
                  "@type": "QuantitativeValue",
                  "value": property.area,
                  "unitCode": "SQF"
                }
              }
            }))
          })
        }}
      />

      {/* Quick Inquiry Modal (auto-opens after 3s) */}
      <Dialog open={showInquiry} onOpenChange={setShowInquiry}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Quick Inquiry</DialogTitle>
            <DialogDescription>Share your details and well get back to you shortly.</DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="space-y-4 py-2">
              <p className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
                Thank you! Your inquiry has been received. Our team will contact you soon.
              </p>
              <DialogFooter>
                <Button onClick={() => setShowInquiry(false)} className="bg-navy-900 hover:bg-navy-800 text-white">
                  Close
                </Button>
              </DialogFooter>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Select value={lookingFor} onValueChange={setLookingFor}>
                <SelectTrigger>
                  <SelectValue placeholder="I'm looking for..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy Property</SelectItem>
                  <SelectItem value="sell">Sell Property</SelectItem>
                  <SelectItem value="rent">Rent Property</SelectItem>
                  <SelectItem value="invest">Investment Options</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Well never share your details.</span>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") window.localStorage.setItem("inq_shown", "1")
                    setShowInquiry(false)
                  }}
                  className="underline"
                >
                  No thanks
                </button>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Property Details Modal */}
      <Dialog open={showPropertyModal} onOpenChange={setShowPropertyModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-navy-900">
                  {selectedProperty.title}
                </DialogTitle>
                <DialogDescription className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {selectedProperty.location}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Property Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedProperty.image || "/placeholder.svg"}
                    alt={selectedProperty.title}
                    className="w-full h-64 object-cover"
                  />
                  {selectedProperty.tag && (
                    <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">
                      {selectedProperty.tag}
                    </Badge>
                  )}
                </div>

                {/* Property Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProperty.bedrooms > 0 && (
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-2 text-navy-900" />
                      <div className="font-semibold">{selectedProperty.bedrooms} BHK</div>
                      <div className="text-sm text-gray-600">Bedrooms</div>
                    </div>
                  )}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-navy-900" />
                    <div className="font-semibold">{selectedProperty.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-2 text-navy-900" />
                    <div className="font-semibold">{selectedProperty.area}</div>
                    <div className="text-sm text-gray-600">Sq. Ft</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 mx-auto mb-2 text-navy-900 font-bold text-lg">📅</div>
                    <div className="font-semibold">{selectedProperty.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Possession</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProperty.description}</p>
                </div>

                {/* Amenities */}
                {selectedProperty.amenities && selectedProperty.amenities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {selectedProperty.amenities.map((amenity: string, index: number) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Specifications */}
                {selectedProperty.projectSpecs && (
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">Project Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProperty.projectSpecs.landParcel && (
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">Land Parcel:</span>
                          <span className="font-medium">{selectedProperty.projectSpecs.landParcel}</span>
                        </div>
                      )}
                      {selectedProperty.projectSpecs.towers && (
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">Towers:</span>
                          <span className="font-medium">{selectedProperty.projectSpecs.towers}</span>
                        </div>
                      )}
                      {selectedProperty.projectSpecs.possession && (
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">Possession:</span>
                          <span className="font-medium">{selectedProperty.projectSpecs.possession}</span>
                        </div>
                      )}
                      {selectedProperty.projectSpecs.rera && (
                        <div className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">RERA:</span>
                          <span className="font-medium">{selectedProperty.projectSpecs.rera}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Nearby Places */}
                {selectedProperty.nearbyPlaces && selectedProperty.nearbyPlaces.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">Nearby Places</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProperty.nearbyPlaces.map((place: any, index: number) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{place.name}</div>
                            <div className="text-sm text-gray-600">{place.type}</div>
                          </div>
                          <div className="text-sm font-medium text-navy-900">{place.distance}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    asChild 
                    className="flex-1 bg-navy-900 hover:bg-navy-800 text-white"
                  >
                    <Link href={`/properties/${selectedProperty.slug || selectedProperty.id}`}>
                      View Full Property Page
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-gold-500 text-gold-600 hover:bg-gold-50"
                    onClick={() => {
                      setShowPropertyModal(false)
                      setShowInquiry(true)
                    }}
                  >
                    Inquire Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
