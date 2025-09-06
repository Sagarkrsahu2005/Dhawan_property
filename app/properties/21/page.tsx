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
import Footer from "@/components/footer"

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
  
  // Amenity image modal state
  const [selectedAmenityImage, setSelectedAmenityImage] = useState<string>("")
  const [amenityImageModal, setAmenityImageModal] = useState(false)

  // Pricing data
  const pricingPlans = [
    // {
    //   size: "1200 sq. ft.",
    //   price: "₹1.20 Cr*",
    //   eoiAmount: "₹75,000",
    //   description: "Compact family plot",
    //   features: ["Corner Plot Available", "East/North Facing", "24x50 ft dimensions"]
    // },
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

  // Amenities data with high-quality images
  const amenitiesData = [
    {
      title: "Resort-Style Swimming Pool",
      description: "Olympic-sized infinity pool with poolside lounge and cabana areas",
      image: "/WhatsApp Image 2025-09-05 at 20.04.05.jpeg", // Official project render
      features: ["25-meter lap pool", "Kids' splash zone", "Pool deck seating", "Poolside café"]
    },
    {
      title: "The Verdania Enclave",
      description: "11,000 sq.ft luxury clubhouse with premium facilities and event spaces",
      image: "/WhatsApp Image 2025-09-05 at 20.03.47.jpeg", // Official project render
      features: ["Multi-purpose hall", "Party lawn", "Business center", "Lounge areas"]
    },
    {
      title: "Sports & Recreation Complex",
      description: "Professional sports facilities with multiple courts and coaching",
      image: "/WhatsApp Image 2025-09-05 at 20.04.18.jpeg", // Official project render - aerial view
      features: ["Tennis courts", "Badminton courts", "Basketball court", "Cricket practice nets"]
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art gym with modern equipment and personal training",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: ["Cardio equipment", "Weight training", "Yoga studio", "Personal trainers"]
    },
    {
      title: "Children's Play Area",
      description: "5,000 sq.ft dedicated kids zone with safe play equipment and activities",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      features: ["Adventure playground", "Toddler area", "Sand pit", "Safety surfacing"]
    },
    {
      title: "Premium Plotted Community",
      description: "24 acres of beautifully planned residential plots with modern infrastructure",
      image: "/WhatsApp Image 2025-09-05 at 20.04.36.jpeg", // Official project render - evening view
      features: ["40ft wide roads", "Underground utilities", "Gated community", "RERA approved"]
    }
  ]

  const handleAmenityImageClick = (imageSrc: string) => {
    setSelectedAmenityImage(imageSrc)
    setAmenityImageModal(true)
  }

  // FAQ data
  const faqData = [
    {
      question: "What is the total project area of Godrej Verdania Estate?",
      answer: "Godrej Verdania Estate spans across 24 acres of prime land in Manglia, Indore, offering a resort-style living experience with world-class amenities."
    },
    {
      question: "What are the available plot sizes and pricing?",
      answer: "We offer flexible plot sizes ranging from 1500 sq. ft. to 2500 sq. ft. starting from ₹1.50 Cr* to ₹2.50 Cr*. EOI amount starts at just ₹75,000 for priority allotment."
    },
    {
      question: "Is the project RERA approved?",
      answer: "Yes, Godrej Verdania Estate is fully RERA approved with registration number P-SWR-25-5891, ensuring complete transparency and legal compliance."
    },
    {
      question: "What are the key amenities offered?",
      answer: "The project features a premium clubhouse (~11,000 sq. ft.), swimming pool, gymnasium, kids' play area, jogging tracks, 24/7 security, rainwater harvesting, and solar lighting systems."
    },
    {
      question: "What is the possession timeline?",
      answer: "The project is scheduled for possession by 2027. Infrastructure development and amenity construction are progressing as per the planned timeline."
    },
    {
      question: "Are there any restrictions on home construction?",
      answer: "No, this is a freehold property offering complete construction freedom. You can build your custom dream home as per your requirements while following basic community guidelines."
    },
    // {
    //   question: "What is the payment plan structure?",
    //   answer: "We offer flexible payment plans with easy EMI options. The EOI amount secures your plot with priority allotment advantage. Detailed payment schedule available on inquiry."
    // },
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
                      Starting ₹1.50 Cr*
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
                <span className="font-semibold text-navy-900">1500-2500 sq.ft</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Total Area</span>
                <span className="font-semibold text-navy-900">24 Acres</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Possession</span>
                <span className="font-semibold text-navy-900">2027</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">RERA</span>
                <span className="font-semibold text-navy-900">P-SWR-25-5891</span>
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
              <Button variant="outline" className="w-full border-navy-900 text-navy-900" asChild>
                <a href="tel:+919999628400">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
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
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Indore's Premier Plotted Development on 24 Acres of Pristine Greenery. Located strategically off Bypass Road in Manglia, Indore, offering the perfect blend of modern amenities, strategic location, and sustainable living in India's cleanest city.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Building className="w-6 h-6 text-gold-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">The Verdania Enclave</h4>
                  <p className="text-sm text-gray-600">11,000 sq. ft. Premium Clubhouse</p>
                </div>
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Trees className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">Resort Township</h4>
                  <p className="text-sm text-gray-600">24 acres with 2.4 acres community space</p>
                </div>
              </div>
            </div>

            {/* Why Choose Plots Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Why Buy Residential Plots?</h3>
                <p className="text-gray-600">Experience the trust and excellence of Godrej Properties</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">Transparency</h4>
                  <p className="text-sm text-gray-600">Complete transparency in all dealings and documentation</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">Enriched Lifestyle</h4>
                  <p className="text-sm text-gray-600">World-class amenities and green spaces</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-gold-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">Trust</h4>
                  <p className="text-sm text-gray-600">Legacy of Godrej Properties excellence</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">Execution Expertise</h4>
                  <p className="text-sm text-gray-600">Proven track record of timely delivery</p>
                </div>
              </div>
            </div>

            {/* Why Indore Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Why Indore?</h3>
                <p className="text-gray-600">India's smartest and cleanest city with rapid growth</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-green-50 to-blue-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="font-bold text-navy-900 mb-1">8 Years</h4>
                  <p className="text-sm text-gray-600">India's Cleanest City Award</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-bold text-navy-900 mb-1">#4 Rank</h4>
                  <p className="text-sm text-gray-600">National Quality of Living Index</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-orange-50 to-red-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-bold text-navy-900 mb-1">116+</h4>
                  <p className="text-sm text-gray-600">Thriving Start-ups</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-purple-50 to-pink-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h4 className="font-bold text-navy-900 mb-1">146+</h4>
                  <p className="text-sm text-gray-600">Infrastructure Projects</p>
                </div>
              </div>
            </div>

            {/* Connectivity Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Premium Connectivity</h3>
                <p className="text-gray-600">Strategically located for easy access to key destinations</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-navy-900">Major Roads</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• A.B. Road - 800 meters</p>
                    <p className="text-gray-700">• Bypass Road - 1.3 km</p>
                    <p className="text-gray-700">• Indore-Ujjain Road - Quick Access</p>
                  </div>
                </div>
                
                <div className="p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Building className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-navy-900">Key Areas</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• Nipania - 15 mins</p>
                    <p className="text-gray-700">• Palasia - 25 mins</p>
                    <p className="text-gray-700">• Vijay Nagar - 30 mins</p>
                  </div>
                </div>
                
                <div className="p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Car className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-navy-900">Transport</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">• Indore Junction - 30 mins</p>
                    <p className="text-gray-700">• Indore Airport - 35 mins</p>
                    <p className="text-gray-700">• IT Parks - 35 mins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Features Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Premium Project Features</h3>
                <p className="text-gray-600">Thoughtfully designed for modern living</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏞️</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">2.4 Acres</h4>
                  <p className="text-sm text-gray-600">Open Community Space</p>
                </div>
                
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛣️</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">40 ft Wide</h4>
                  <p className="text-sm text-gray-600">Boulevard Roads</p>
                </div>
                
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">11,000 Sq.Ft</h4>
                  <p className="text-sm text-gray-600">The Verdania Enclave</p>
                </div>
                
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">5,000 Sq.Ft</h4>
                  <p className="text-sm text-gray-600">Kids Play Area</p>
                </div>
                
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏡</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">Freehold</h4>
                  <p className="text-sm text-gray-600">Construction Freedom</p>
                </div>
                
                <div className="text-center p-6 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2">RERA Approved</h4>
                  <p className="text-sm text-gray-600">P-SWR-25-5891</p>
                </div>
              </div>
            </div>

            {/* EXCLUSIVE LAUNCH OFFER */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="p-4 bg-gradient-to-r from-gold-50 to-orange-50 border-2 border-gold-300 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">🎯</span>
                    <h4 className="text-lg font-bold text-gold-800">EXCLUSIVE LAUNCH OFFER!</h4>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="mb-3">
                    <span className="text-2xl font-black text-red-600">₹17-20 Lakhs Discount*</span>
                  </div>
                  <div className="bg-navy-900 text-white px-4 py-2 rounded-lg inline-block mb-2">
                    <p className="text-sm font-bold">💰 "Book Smart, Save Big - Your Dream Plot Awaits!" 💰</p>
                  </div>
                  <p className="text-xs text-gold-800">
                    <strong>⚡ Limited Time Offer:</strong> Priority Allotment with just ₹75,000 EOI • First Come, First Serve!
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Amenities */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Premium Amenities</h3>
                <p className="text-lg text-gray-600">World-class amenities designed for modern living</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenitiesData.map((amenity, index) => (
                  <div 
                    key={index}
                    className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => handleAmenityImageClick(amenity.image)}
                  >
                    <img 
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-semibold">{amenity.title}</h4>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Amenities List */}
              <div className="mt-12 p-6 bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl border border-navy-200">
                <h4 className="text-lg font-semibold text-navy-900 mb-4 text-center">Additional Premium Features</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">24/7 Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Power Backup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Water Treatment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Solar Lighting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Jogging Track</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Community Hall</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Underground Parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-navy-700">Yoga & Meditation</span>
                  </div>
                </div>
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

            {/* Brochure Downloads */}
            {propertyData.brochures && propertyData.brochures.length > 0 && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Download Brochures</h3>
                </div>
                
                <div className="space-y-4">
                  {propertyData.brochures.map((brochure, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/60 border border-white/40 rounded-xl hover:bg-white/80 transition-all group">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-lg flex items-center justify-center shadow-lg">
                          {brochure.type === "Info Docket" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {brochure.type === "Layout Plans" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10z" />
                            </svg>
                          )}
                          {brochure.type === "Investment Guide" && (
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-900 text-lg">{brochure.title}</h4>
                          <p className="text-sm text-gray-600 max-w-md">{brochure.description}</p>
                        </div>
                      </div>
                      <Button 
                        className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-2 rounded-lg group-hover:bg-gold-600 transition-all"
                        onClick={() => {
                          // Direct download using window.open with the file URL
                          window.open(brochure.fileUrl, '_blank');
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-navy-50 to-blue-50 border border-navy-200 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-navy-800">
                      <strong>All brochures are updated with latest project information and pricing.</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Location */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Location</h3>
              <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0074596218606!2d75.92223757504753!3d22.802187479328886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631df5e6dfc8f3%3A0xfd8abbe13d8df486!2sVerdania%20Estate%20%7C%20Godrej%20Plots%20Indore!5e0!3m2!1sen!2sus!4v1757015017807!5m2!1sen!2sus"
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
                <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white" asChild>
                  <a href="https://wa.me/919999628400" target="_blank" rel="noopener noreferrer">
                    WhatsApp Inquiry
                  </a>
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

      {/* Amenity Image Preview Modal */}
      {amenityImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-[90vh] mx-4">
            <button
              onClick={() => setAmenityImageModal(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedAmenityImage}
              alt="Amenity Preview"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white p-4 rounded-xl">
              <h3 className="text-xl font-bold mb-2">
                {amenitiesData.find(amenity => amenity.image === selectedAmenityImage)?.title}
              </h3>
              <p className="text-sm opacity-90 mb-3">
                {amenitiesData.find(amenity => amenity.image === selectedAmenityImage)?.description}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {amenitiesData.find(amenity => amenity.image === selectedAmenityImage)?.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-200">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
