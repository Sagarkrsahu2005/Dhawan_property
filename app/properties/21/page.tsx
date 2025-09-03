"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  Calendar,
  Download,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Car,
  Dumbbell,
  Waves,
  Trees,
  Shield,
  Home,
  Wifi,
  Zap,
  Building,
  Users,
  Star,
  MessageCircle,
  X,
  ChevronDown,
  ChevronUp,
  IndianRupee,
} from "lucide-react"
import Link from "next/link"
import { getPropertyById, properties, getSimilarProperties } from "@/lib/property-data"
import BrochureDownload from "@/components/brochure-download"
import Navigation from "@/components/navigation"

export default function GodrejVerdaniaPage() {
  const propertyData = getPropertyById(21)
  
  // State for image gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0)
  const [fullScreenImages, setFullScreenImages] = useState<string[]>([])

  // Form states
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Quick Enquiry form state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [enquiryName, setEnquiryName] = useState("")
  const [enquiryPhone, setEnquiryPhone] = useState("")
  const [enquiryMessage, setEnquiryMessage] = useState("")
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)

  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  // Pricing data
  const pricingPlans = [
    {
      size: "1200 sq. ft.",
      price: "₹1.20 Cr*",
      eoiAmount: "₹75,000",
      description: "Compact family plot",
      features: ["Corner Plot Available", "East/North Facing", "24x50 ft dimensions"]
    },
    {
      size: "1500 sq. ft.",
      price: "₹1.50 Cr*",
      eoiAmount: "₹75,000",
      description: "Ideal family plot",
      features: ["Premium Location", "Multiple Facing Options", "30x50 ft dimensions"],
      popular: true
    },
    {
      size: "1800 sq. ft.",
      price: "₹1.80 Cr*",
      eoiAmount: "₹75,000",
      description: "Spacious family plot",
      features: ["Prime Corner Plots", "Wide Road Frontage", "36x50 ft dimensions"]
    },
    {
      size: "2000 sq. ft.",
      price: "₹2.00 Cr*",
      eoiAmount: "₹75,000",
      description: "Large family plot",
      features: ["Boulevard Facing", "Premium Sector", "40x50 ft dimensions"]
    },
    {
      size: "2500 sq. ft.",
      price: "₹2.50 Cr*",
      eoiAmount: "₹1,00,000",
      description: "Luxury family plot",
      features: ["Signature Plots", "Park Facing", "50x50 ft dimensions"]
    }
  ]

  // FAQ data
  const faqData = [
    {
      question: "What is the total project area of Godrej Verdania Estate?",
      answer: "Godrej Verdania Estate spans across 24 acres of prime land in Manglia, Indore, offering a resort-style living experience with world-class amenities."
    },
    {
      question: "What are the available plot sizes and pricing?",
      answer: "We offer flexible plot sizes ranging from 1200 sq. ft. to 2500 sq. ft. starting from ₹1.20 Cr* to ₹2.50 Cr*. EOI amount starts at just ₹75,000 for priority allotment."
    },
    {
      question: "Is the project RERA approved?",
      answer: "Yes, Godrej Verdania Estate is fully RERA approved with registration number P-SWR-25–589, ensuring complete transparency and legal compliance."
    },
    {
      question: "What are the key amenities offered?",
      answer: "The project features a premium clubhouse (~11,000 sq. ft.), swimming pool, gymnasium, kids' play area, jogging tracks, 24/7 security, rainwater harvesting, and solar lighting systems."
    },
    {
      question: "What is the possession timeline?",
      answer: "The project is scheduled for possession by 2026. Infrastructure development and amenity construction are progressing as per the planned timeline."
    },
    {
      question: "Are there any restrictions on home construction?",
      answer: "No, this is a freehold property offering complete construction freedom. You can build your custom dream home as per your requirements while following basic community guidelines."
    },
    {
      question: "What is the payment plan structure?",
      answer: "We offer flexible payment plans with easy EMI options. The EOI amount secures your plot with priority allotment advantage. Detailed payment schedule available on inquiry."
    },
    {
      question: "How is the connectivity from Manglia, Indore?",
      answer: "Excellent connectivity via Indore-Ujjain Road, 20 km from airport, direct access to NH-52 Highway, and close to the upcoming Super Corridor development."
    }
  ]

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!propertyData) return;
    
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enquiryName,
          phone: enquiryPhone,
          message: enquiryMessage,
          page: `property-${propertyData.id}`,
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setEnquirySubmitted(true);
      setEnquiryName("");
      setEnquiryPhone("");
      setEnquiryMessage("");
      setTimeout(() => {
        setIsEnquiryOpen(false);
        setEnquirySubmitted(false);
      }, 1500);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  }

  // Image navigation functions
  const nextImage = () => {
    if (propertyData?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % propertyData.images!.length)
    }
  }

  const prevImage = () => {
    if (propertyData?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + propertyData.images!.length) % propertyData.images!.length)
    }
  }

  const openFullScreen = (images: string[] | undefined, index: number) => {
    if (images) {
      setFullScreenImages(images)
      setFullScreenImageIndex(index)
      setIsFullScreenOpen(true)
    }
  }

  const nextFullScreenImage = () => {
    setFullScreenImageIndex((prev) => (prev + 1) % fullScreenImages.length)
  }

  const prevFullScreenImage = () => {
    setFullScreenImageIndex((prev) => (prev - 1 + fullScreenImages.length) % fullScreenImages.length)
  }

  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/properties">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">Back to Properties</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-white/60 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-navy-900">
              Properties
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-medium">{propertyData.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
              <img
                src={propertyData.images?.[currentImageIndex] || "/placeholder.svg"}
                alt={propertyData.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
                onClick={() => openFullScreen(propertyData.images, currentImageIndex)}
              />

              {/* Glassmorphism overlay with property info */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 shadow-2xl leading-3">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">{propertyData.title}</h1>
                    <div className="flex items-center text-white/90 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{propertyData.location}</span>
                    </div>
                    <Badge className="bg-gold-500/90 text-navy-900 backdrop-blur-sm">{propertyData.status}</Badge>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      Starting ₹1.20 Cr*
                    </div>
                    <Button
                      className="bg-gold-500/90 hover:bg-gold-600 text-navy-900 backdrop-blur-sm"
                      onClick={() => setIsEnquiryOpen(true)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Action buttons */}
              <div className="absolute top-6 right-6 flex space-x-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`backdrop-blur-md border border-white/30 rounded-full p-2 transition-all ${
                    isLiked ? "bg-red-500/90 text-white" : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </button>
                <button className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all">
                  <Share2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Fullscreen Modal for Property Images */}
              {isFullScreenOpen && fullScreenImages.length > 0 && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                  <button
                    className="absolute top-6 right-6 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
                    onClick={() => setIsFullScreenOpen(false)}
                    aria-label="Close fullscreen"
                  >
                    <X className="w-8 h-8" />
                  </button>
                  <button
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
                    onClick={prevFullScreenImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-10 h-10" />
                  </button>
                  <img
                    src={fullScreenImages[fullScreenImageIndex]}
                    alt="Property Fullscreen"
                    className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                  />
                  <button
                    className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
                    onClick={nextFullScreenImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-10 h-10" />
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4 mt-4 overflow-x-auto">
              {(propertyData.images || []).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? "border-gold-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                    onClick={(e) => {
                      e.stopPropagation()
                      openFullScreen(propertyData.images, index)
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Details Card */}
          <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-2xl h-fit">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Property Details</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Property Type</span>
                <span className="font-semibold text-navy-900">Plotted Development</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Plot Sizes</span>
                <span className="font-semibold text-navy-900">1200-2500 sq.ft</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Total Area</span>
                <span className="font-semibold text-navy-900">24 Acres</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Possession</span>
                <span className="font-semibold text-navy-900">2026</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">RERA</span>
                <span className="font-semibold text-navy-900">P-SWR-25–589</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Status</span>
                <Badge className="bg-green-100 text-green-800">{propertyData.status}</Badge>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button 
                className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                onClick={() => setIsEnquiryOpen(true)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Site Visit
              </Button>
              <Button variant="outline" className="w-full border-navy-900 text-navy-900">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/919999628400" target="_blank" rel="noopener noreferrer">
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">About Godrej Verdania Estate</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {propertyData.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Building className="w-6 h-6 text-gold-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">Premium Clubhouse</h4>
                  <p className="text-sm text-gray-600">The Verdania Enclave - 11,000 sq. ft.</p>
                </div>
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Trees className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">Resort Living</h4>
                  <p className="text-sm text-gray-600">24 acres of lush green spaces</p>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                <IndianRupee className="w-6 h-6 mr-2 text-gold-600" />
                Plot Sizes & Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {pricingPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-gold-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gold-500 text-navy-900 text-xs">Popular</Badge>
                      </div>
                    )}
                    <CardContent className="p-4">
                      <div className="text-center mb-3">
                        <h4 className="text-lg font-bold text-navy-900">{plan.size}</h4>
                        <p className="text-xs text-gray-600">{plan.description}</p>
                      </div>
                      <div className="text-center mb-3">
                        <div className="text-xl font-bold text-gold-600">{plan.price}</div>
                        <div className="text-xs text-gray-600">EOI: {plan.eoiAmount}</div>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full bg-navy-900 hover:bg-navy-800 text-white text-sm py-2"
                        onClick={() => setIsEnquiryOpen(true)}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gold-50 border border-gold-200 rounded-xl">
                <p className="text-xs text-gold-800 text-center">
                  <strong>Special Offer:</strong> Priority Allotment with just ₹75,000 EOI • Limited Time Offer
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 tracking-tight">Premium Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {propertyData.amenities && propertyData.amenities.length > 0 ? (
                  propertyData.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-navy-100 text-navy-900">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" stroke="#1e293b" strokeWidth="2" fill="#f1f5f9" />
                          <path d="M9.5 12.5l2 2 3-4" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-navy-900 text-sm font-medium leading-relaxed">{amenity}</span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-500 py-8">
                    Amenities information will be updated soon.
                  </div>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-white/20 rounded-xl overflow-hidden">
                    <button
                      className="w-full p-4 text-left bg-white/30 hover:bg-white/40 transition-all flex justify-between items-center"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <span className="font-semibold text-navy-900">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-navy-900" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-navy-900" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="p-4 bg-white/20 border-t border-white/20">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Location</h3>
              <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80"
                  title="Property Location"
                />
              </div>
              <div className="mt-4 p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                <div className="flex items-center text-navy-900">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="font-medium">{propertyData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Contact Agent</h3>

              {/* Agent Info */}
              <div className="flex items-center space-x-4 mb-6 p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                <img
                  src={propertyData.agent?.image || "/professional-real-estate-agent.png"}
                  alt={propertyData.agent?.name || 'Kapil Dhawan'}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-navy-900">{propertyData.agent?.name || 'Kapil Dhawan'}</div>
                  <div className="text-sm text-gray-600">Property Consultant</div>
                  <div className="flex items-center text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                  <a href="tel:+919999628400">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href="mailto:info@dhawanproperties.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Enquiry Modal */}
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-navy-900">Quick Enquiry</h3>
                <button
                  onClick={() => setIsEnquiryOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {enquirySubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-4xl mb-4">✓</div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your enquiry has been submitted successfully. We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={enquiryName}
                      onChange={(e) => setEnquiryName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      value={enquiryPhone}
                      onChange={(e) => setEnquiryPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message (optional)"
                      rows={3}
                      value={enquiryMessage}
                      onChange={(e) => setEnquiryMessage(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
