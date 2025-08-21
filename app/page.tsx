"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Phone, Star } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [showInquiry, setShowInquiry] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [lookingFor, setLookingFor] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

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

  const latestProject = {
    id: 1,
    title: "Luxury Villa in Sector 47",
    location: "Sector 47, Gurgaon, Haryana",
    image: "/luxury-modern-residence.png",
    status: "New Launch",
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <section className="relative h-[700px] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium">
                  ✨ Latest Project
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text">
                  Dream Home
                </span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Experience luxury living with our newest premium property featuring world-class amenities and prime
                location.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/properties/${latestProject.id}`}>
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold shadow-2xl hover:shadow-gold-500/25 transition-all duration-300"
                  >
                    View Details
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Schedule Visit
                </Button>
              </div>
            </div>

            {/* Right Content - Latest Project Card */}
            <div className="lg:flex justify-end hidden">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full hover:bg-white/15 transition-all duration-500 group">
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
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{latestProject.title}</h3>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{latestProject.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 text-sm">Contact for Pricing</span>
                      <div className="text-3xl font-bold text-gold-400">Price on Request</div>
                    </div>
                    <Link href={`/properties/${latestProject.id}`}>
                      <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30">
                        Explore →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>

      {/* Quick Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Find Your Perfect Property</h2>
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

                <Link href="/properties">
                  <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">Search Properties</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties with verified documentation and transparent
              pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Luxury Villa in Sector 47",
                location: "Gurgaon, Haryana",
                bedrooms: 4,
                bathrooms: 5,
                area: "3200 sq.ft",
                tag: "New Launch",
                image: "/luxury-modern-residence.png",
              },
              {
                id: 2,
                title: "Premium Apartment",
                location: "Dwarka, Delhi",
                bedrooms: 3,
                bathrooms: 3,
                area: "1850 sq.ft",
                tag: "Ready to Move",
                image: "/modern-apartment-building.png",
              },
              {
                id: 3,
                title: "Commercial Space",
                location: "Cyber City, Gurgaon",
                bedrooms: 0,
                bathrooms: 2,
                area: "2500 sq.ft",
                tag: "Investment",
                image: "/modern-glass-office.png",
              },
              {
                id: 4,
                title: "Penthouse Suite",
                location: "Golf Course Road",
                bedrooms: 5,
                bathrooms: 6,
                area: "4500 sq.ft",
                tag: "Exclusive",
                image: "/luxury-villa-garden-pool.png",
              },
              {
                id: 5,
                title: "Family Home",
                location: "Faridabad, Haryana",
                bedrooms: 3,
                bathrooms: 2,
                area: "1650 sq.ft",
                tag: "Best Value",
                image: "/comfortable-family-house.png",
              },
              {
                id: 6,
                title: "Studio Apartment",
                location: "Noida Extension",
                bedrooms: 1,
                bathrooms: 1,
                area: "850 sq.ft",
                tag: "Affordable",
                image: "/modern-studio-apartment.png",
              },
            ].map((property) => (
              <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">{property.tag}</Badge>
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
                      <span>{property.area}</span>
                    </div>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Why Choose Dhawan Properties?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in the real estate market, we've built our reputation on trust,
                transparency, and delivering exceptional results for our clients. Every property in our portfolio is
                thoroughly verified and comes with complete documentation support.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From first-time homebuyers to seasoned investors, we provide personalized guidance and end-to-end
                support throughout your property journey.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
                <div className="text-gray-600">Properties Sold</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-gold-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-gold-600 mb-2">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-gold-600 mb-2">100%</div>
                <div className="text-gray-600">RERA Compliant</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Gurgaon",
                quote:
                  "Dhawan Properties made our home buying journey incredibly smooth. Their transparency and attention to detail is unmatched.",
                result: "Closed in 14 days",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                location: "Delhi",
                quote:
                  "I saved lakhs thanks to their negotiation skills and market knowledge. Highly recommend for first-time buyers.",
                result: "Saved ₹12L",
                rating: 5,
              },
              {
                name: "Amit Patel",
                location: "Noida",
                quote:
                  "Professional service from start to finish. They handled all documentation and made the process stress-free.",
                result: "Hassle-free experience",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
              <p className="text-gray-300 mb-8">
                Get in touch with our expert team today. We'll help you find the perfect property that matches your
                needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919876543210">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Quick Inquiry</h3>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thank you for your inquiry! We will contact you soon.")
                }}
              >
                <Input placeholder="Your Name" required />
                <Input placeholder="Phone Number" type="tel" required />
                <Select required>
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
                <Button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  Submit Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
    </div>
  )
}
