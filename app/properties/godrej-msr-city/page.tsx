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
import { getPropertyBySlug, properties, getSimilarProperties } from "@/lib/property-data"
import BrochureDownload from "@/components/brochure-download"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function GodrejMSRCityPage() {
  const propertyData = getPropertyBySlug("godrej-msr-city")
  
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

  // New gallery data
  const barcaGalleryImages = [
    {
      src: "https://www.godrejshettiigere.com/assets/img/gallery/1.webp",
      alt: "Gallery of MSR City Barca Godrej - Image 1",
    },
    {
      src: "https://www.godrejshettiigere.com/assets/img/gallery/2.webp",
      alt: "Gallery of MSR City Barca Godrej - Image 2",
    },
    {
      src: "https://www.godrejshettiigere.com/assets/img/gallery/3.webp",
      alt: "Gallery of MSR City Barca Godrej - Image 3",
    },
    {
      src: "https://www.godrejshettiigere.com/assets/img/gallery/4.webp",
      alt: "Gallery of MSR City Barca Godrej - Image 4",
    },
  ];

            // Amenity image preview state
  const [selectedAmenityImage, setSelectedAmenityImage] = useState<string | null>(null)
  const [amenityImageModal, setAmenityImageModal] = useState(false)

  // Amenities data with high-quality images
const amenitiesData = [
    {
        title: "Skateboarding Rink",
        description: "A dedicated rink for skateboarding enthusiasts to practice and enjoy.",
        image: "https://images.unsplash.com/photo-1675705967868-3afe16d8800f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Skatepark
        features: ["Smooth concrete surface", "Ramps and rails", "Safety barriers", "Night lighting"]
    },
    {
        title: "Lap Pool",
        description: "A full-sized lap pool for fitness and recreation.",
        image: "https://images.unsplash.com/photo-1687834618283-1b9e12de54a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pool
        features: ["25-meter length", "Lane markers", "Lounge deck", "Changing rooms"]
    },
    {
        title: "Indoor Gymnasium",
        description: "A well-equipped indoor gym for a workout in the fresh air.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80", // Indoor gym
        features: ["Weather-resistant equipment", "Calisthenics station", "Rubberized flooring", "Shaded areas"]
    },
    {
        title: "Community Cafe",
        description: "A cozy cafe for residents to relax and socialize.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Cafe
        features: ["Indoor and outdoor seating", "Gourmet coffee and snacks", "Free Wi-Fi", "Community events"]
    },
    {
        title: "Children's Play Area",
        description: "A safe and fun play area for children of all ages.",
        image: "https://images.unsplash.com/photo-1581579127101-8a8317965d68?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Playground
        features: ["Modern play structures", "Sandpit", "Seating for parents", "Soft-fall surface"]
    },
    {
        title: "Grand Clubhouse",
        description: "A 1.5 Lakh sq. ft. clubhouse with a variety of facilities.",
        image: "https://godrejsbangalore.com/godrej-shettigere/img/gallery/g3.webp", // Clubhouse
        features: ["Co-working space", "Business center", "Kids' arena", "Large gym"]
    }
]

  const handleAmenityImageClick = (imageSrc: string) => {
    setSelectedAmenityImage(imageSrc)
    setAmenityImageModal(true)
  }

  // FAQ data
  const faqData = [
    {
      question: "What is the total project area of Godrej MSR City?",
      answer: "Godrej MSR City is a large-scale development. The exact acreage is available in the project brochure."
    },
    {
      question: "What are the available unit types and pricing?",
      answer: "Godrej MSR City offers a range of residential options. Please contact us for the latest availability and pricing information."
    },
    {
      question: "Is the project RERA approved?",
      answer: "Yes, the project is registered as “BARCA AT GODREJ MSR CITY” with RERA No: PRM/KA/RERA/1250/303/PR/010425/007644."
    },
    {
      question: "What are the key amenities offered?",
      answer: "The project boasts a 1.5 lakh sq. ft. clubhouse, a large gym, co-working spaces, a kids' arena, a skateboarding rink, a lap pool, an outdoor gym, and a community cafe."
    },
    {
      question: "What is the possession timeline?",
      answer: "For details on the possession timeline, please download the project brochure or contact our sales team."
    },
    {
      question: "How is the connectivity from North Bengaluru?",
      answer: "The project is well-connected via Bellary Road (NH 44) and the upcoming Doddajala Metro Station. It is also close to the Kempegowda International Airport."
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
          page: `property-${propertyData.slug}`,
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
                      Price on Request
                    </div>
                    <Button
                      className="bg-gold-500/90 hover:bg-gold-600 text-navy-900 backdrop-blur-sm"
                      onClick={() => setIsEnquiryOpen(true)}
                    >
                      Request Price
                    </Button>
                  </div>
                </div>

                <div className="mt-4 text-center lg:text-left">
                  <p className="text-lg font-semibold text-white bg-black/30 backdrop-blur-sm rounded-md px-3 py-1 inline-block">
                    Just pay 20% amount now 80% after 4 years or at the time of possession
                  </p>
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
                <span className="font-semibold text-navy-900">Residential Apartments</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Configurations</span>
                <span className="font-semibold text-navy-900">2, 3 & 4 BHK</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Clubhouse</span>
                <span className="font-semibold text-navy-900">1.5 Lakh sq.ft</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Possession</span>
                <span className="font-semibold text-navy-900">2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">RERA</span>
                <span className="font-semibold text-navy-900">PRM/KA/RERA/1250/303/PR/010425/007644</span>
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
              <h3 className="text-2xl font-bold text-navy-900 mb-6">About Godrej MSR City</h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Experience the Mediterranean lifestyle in the heart of North Bengaluru. Godrej MSR City is a landmark project that combines the charm of European architecture with modern amenities, creating a unique living experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Building className="w-6 h-6 text-gold-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">1.5 Lakh Sq.Ft. Clubhouse</h4>
                  <p className="text-sm text-gray-600">One of the largest in Bengaluru</p>
                </div>
                <div className="p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                  <Trees className="w-6 h-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-navy-900 mb-1">Mediterranean Theme</h4>
                  <p className="text-sm text-gray-600">Sun-lit spaces and breezy balconies</p>
                </div>
              </div>
            </div>

            {/* Why North Bengaluru Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Why North Bengaluru?</h3>
                <p className="text-gray-600">The future of Bengaluru is taking flight in the North</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-green-50 to-blue-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">✈️</div>
                  <h4 className="font-bold text-navy-900 mb-1">Airport Proximity</h4>
                  <p className="text-sm text-gray-600">Close to Kempegowda International Airport</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-blue-50 to-purple-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-bold text-navy-900 mb-1">Aerospace Park</h4>
                  <p className="text-sm text-gray-600">Major innovation and job hub</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-orange-50 to-red-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">💼</div>
                  <h4 className="font-bold text-navy-900 mb-1">Business Hubs</h4>
                  <p className="text-sm text-gray-600">Near Manyata Tech Park and other IT parks</p>
                </div>
                
                <div className="text-center p-4 backdrop-blur-sm bg-gradient-to-br from-purple-50 to-pink-50 border border-white/20 rounded-xl">
                  <div className="text-3xl mb-3">🚇</div>
                  <h4 className="font-bold text-navy-900 mb-1">Metro Connectivity</h4>
                  <p className="text-sm text-gray-600">Upcoming Doddajala Metro Station</p>
                </div>
              </div>
            </div>

            {/* Connectivity Section */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Seamless Connectivity</h3>
                <p className="text-gray-600">The best of both worlds: fast lanes and slow living</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden cursor-pointer hover:bg-white/40 transition-all group"
                  onClick={() => openFullScreen(['/Barca/connectivity-nh44.png'], 0)}
                >
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src="/Barca/connectivity-nh44.png"
                      alt="Connectivity Image 1"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-navy-900 mb-1">NH 44 - Bellary Road</h4>
                    <p className="text-sm text-gray-600">2 Kms Away</p>
                  </div>
                </div>
                
                <div 
                  className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden cursor-pointer hover:bg-white/40 transition-all group"
                  onClick={() => openFullScreen(['/Barca/connectivity-metro.png'], 0)}
                >
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src="/Barca/connectivity-metro.png"
                      alt="Connectivity Image 2"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-navy-900 mb-1">Doddajala Metro</h4>
                    <p className="text-sm text-gray-600">4 Kms Away (Upcoming)</p>
                  </div>
                </div>
                
                <div 
                  className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden cursor-pointer hover:bg-white/40 transition-all group"
                  onClick={() => openFullScreen(['/Barca/connectivity-airport.png'], 0)}
                >
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <img
                      src="/Barca/connectivity-airport.png"
                      alt="Connectivity Image 3"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="font-semibold text-navy-900 mb-1">International Airport</h4>
                    <p className="text-sm text-gray-600">9 Kms Away</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Amenities */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Premium Amenities</h3>
                <p className="text-lg text-gray-600">A slice of the Mediterranean, right in Bengaluru</p>
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
            </div>

            {/* Gallery of MSR City Barca Godrej */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Gallery Of MSR City Barca Godrej</h3>
                <p className="text-lg text-gray-600">A glimpse into the exquisite design and lifestyle.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {barcaGalleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="relative group overflow-hidden rounded-2xl aspect-video cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={() => openFullScreen(barcaGalleryImages.map(img => img.src), index)}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brochures */}
            {propertyData.brochures && propertyData.brochures.length > 0 && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <BrochureDownload propertyTitle={propertyData.title} brochures={propertyData.brochures} />
              </div>
            )}

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
                  src={propertyData.mapEmbedUrl}
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
              src={selectedAmenityImage || ''}
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
