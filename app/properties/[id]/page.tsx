"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const propertiesData = {
  "1":{
    id: 1,
    title: "Luxury Villa in Sector 47",
    location: "Sector 47, Gurgaon, Haryana",
    bedrooms: 4,
    bathrooms: 5,
    area: 3200,
    yearBuilt: 2023,
    type:  "Villa",
    status: "New Launch",
    description:
      "Experience luxury living at its finest in this stunning 4-bedroom villa located in the prestigious Sector 47 of Gurgaon. This contemporary home features spacious interiors, premium finishes, and world-class amenities.",
    images: [
      "/luxury-villa-garden-pool.png",
      "/luxury-modern-residence.png",
      "/modern-apartment-building.png",
      "/comfortable-family-house.png",
    ],
    floorPlans: {
      "4BHK": [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type A • 3,200 sq.ft",
          downloadUrl: "/floor-plans/villa-4bhk-a.pdf",
        },
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type B • 3,400 sq.ft",
          downloadUrl: "/floor-plans/villa-4bhk-b.pdf",
        },
      ],
      Penthouse: [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Penthouse • 4,500 sq.ft",
          downloadUrl: "/floor-plans/villa-penthouse.pdf",
        },
      ],
    },
    amenities: [
      { name: "Swimming Pool", icon: Waves },
      { name: "Private Garden", icon: Trees },
      { name: "Parking (2 Cars)", icon: Car },
      { name: "Home Gym", icon: Dumbbell },
      { name: "24/7 Security", icon: Shield },
      { name: "Smart Home", icon: Home },
      { name: "High Speed WiFi", icon: Wifi },
      { name: "Power Backup", icon: Zap },
      { name: "Club House", icon: Building },
      { name: "Kids Play Area", icon: Users },
    ],
    nearbyPlaces: [
      { name: "DLF Cyber Hub", distance: "2.5 km", type: "Business" },
      { name: "Medanta Hospital", distance: "3.2 km", type: "Healthcare" },
      { name: "DPS School", distance: "1.8 km", type: "Education" },
      { name: "Ambience Mall", distance: "4.1 km", type: "Shopping" },
      { name: "Golf Course", distance: "2.0 km", type: "Recreation" },
      { name: "Metro Station", distance: "1.5 km", type: "Transport" },
    ],
    agent: {
      name: "Rajesh Dhawan",
      phone: "+91 98765 43210",
      email: "rajesh@dhawanproperties.in",
      image: "/professional-real-estate-agent.png",
    },
  },
  "2": {
    id: 2,
    title: "Modern Apartment in DLF Phase 2",
    location: "DLF Phase 2, Gurgaon, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    yearBuilt: 2022,
    type: "Apartment",
    status: "Ready to Move",
    description:
      "Spacious 3BHK apartment in the heart of DLF Phase 2 with modern amenities and excellent connectivity to major business hubs.",
    images: [
      "/modern-apartment-building.png",
      "/luxury-modern-residence.png",
      "/comfortable-family-house.png",
      "/luxury-villa-garden-pool.png",
    ],
    floorPlans: {
      "2BHK": [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type A • 1,200 sq.ft",
          downloadUrl: "/floor-plans/apt-2bhk-a.pdf",
        },
      ],
      "3BHK": [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type A • 1,850 sq.ft",
          downloadUrl: "/floor-plans/apt-3bhk-a.pdf",
        },
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type B • 1,950 sq.ft",
          downloadUrl: "/floor-plans/apt-3bhk-b.pdf",
        },
      ],
    },
    amenities: [
      { name: "Swimming Pool", icon: Waves },
      { name: "Gym & Fitness", icon: Dumbbell },
      { name: "Covered Parking", icon: Car },
      { name: "24/7 Security", icon: Shield },
      { name: "Power Backup", icon: Zap },
      { name: "High Speed WiFi", icon: Wifi },
      { name: "Club House", icon: Building },
      { name: "Kids Play Area", icon: Users },
    ],
    nearbyPlaces: [
      { name: "Cyber City", distance: "1.2 km", type: "Business" },
      { name: "Fortis Hospital", distance: "2.8 km", type: "Healthcare" },
      { name: "Delhi Public School", distance: "1.5 km", type: "Education" },
      { name: "DLF Mall", distance: "0.8 km", type: "Shopping" },
      { name: "City Park", distance: "1.0 km", type: "Recreation" },
      { name: "IFFCO Chowk Metro", distance: "2.2 km", type: "Transport" },
    ],
    agent: {
      name: "Priya Sharma",
      phone: "+91 98765 43211",
      email: "priya@dhawanproperties.in",
      image: "/professional-real-estate-agent.png",
    },
  },
  "3": {
    id: 3,
    title: "Premium Office Space in Cyber City",
    location: "Cyber City, Gurgaon, Haryana",
    bedrooms: 0,
    bathrooms: 4,
    area: 2500,
    yearBuilt: 2023,
    type: "Commercial",
    status: "New Launch",
    description:
      "State-of-the-art office space in the heart of Cyber City with modern infrastructure, high-speed connectivity, and premium amenities for businesses.",
    images: [
      "/modern-glass-office.png",
      "/modern-apartment-building.png",
      "/luxury-modern-residence.png",
      "/comfortable-family-house.png",
    ],
    floorPlans: {
      "Small Office": [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type A • 1,500 sq.ft",
          downloadUrl: "/floor-plans/office-small-a.pdf",
        },
      ],
      "Large Office": [
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type A • 2,500 sq.ft",
          downloadUrl: "/floor-plans/office-large-a.pdf",
        },
        {
          image: "/modern-villa-floor-plan.png",
          label: "Type B • 3,000 sq.ft",
          downloadUrl: "/floor-plans/office-large-b.pdf",
        },
      ],
    },
    amenities: [
      { name: "High Speed WiFi", icon: Wifi },
      { name: "Power Backup", icon: Zap },
      { name: "Parking", icon: Car },
      { name: "24/7 Security", icon: Shield },
      { name: "Conference Rooms", icon: Building },
      { name: "Cafeteria", icon: Users },
    ],
    nearbyPlaces: [
      { name: "DLF Cyber Hub", distance: "0.5 km", type: "Business" },
      { name: "Medanta Hospital", distance: "2.0 km", type: "Healthcare" },
      { name: "Cyber City Metro", distance: "0.3 km", type: "Transport" },
      { name: "DLF Mall", distance: "1.5 km", type: "Shopping" },
      { name: "Golf Course", distance: "2.5 km", type: "Recreation" },
    ],
    agent: {
      name: "Amit Kumar",
      phone: "+91 98765 43212",
      email: "amit@dhawanproperties.in",
      image: "/professional-real-estate-agent.png",
    },
  },
}

const FullScreenViewer = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) => {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
        if (e.key === "ArrowLeft") onPrev()
        if (e.key === "ArrowRight") onNext()
      }
      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [isOpen, onClose, onNext, onPrev])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev * 1.5, 5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev / 1.5, 0.5))
  const handleReset = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => setIsDragging(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Controls */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomOut}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomIn}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onClose}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Navigation */}
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border border-white/20 text-white hover:bg-white/20 z-10"
      >
        <ArrowLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border border-white/20 text-white hover:bg-white/20 z-10"
      >
        <ArrowRight className="w-6 h-6" />
      </Button>

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          draggable={false}
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0)
  const [fullScreenImages, setFullScreenImages] = useState<string[]>([])

  const [activeFloorPlanType, setActiveFloorPlanType] = useState("")
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0)

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const propertyData = propertiesData[params.id as keyof typeof propertiesData]

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(0)} L`
    } else {
      return `₹${price.toLocaleString()}`
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyData.images.length) % propertyData.images.length)
  }

  const openFullScreen = (images: string[], index: number) => {
    setFullScreenImages(images)
    setFullScreenImageIndex(index)
    setIsFullScreenOpen(true)
  }

  const nextFullScreenImage = () => {
    setFullScreenImageIndex((prev) => (prev + 1) % fullScreenImages.length)
  }

  const prevFullScreenImage = () => {
    setFullScreenImageIndex((prev) => (prev - 1 + fullScreenImages.length) % fullScreenImages.length)
  }

  const nextFloorPlan = () => {
    if (!propertyData.floorPlans || !activeFloorPlanType) return
    const currentPlans = propertyData.floorPlans[activeFloorPlanType]
    if (!currentPlans || currentPlans.length === 0) return
    setCurrentFloorPlanIndex((prev) => (prev + 1) % currentPlans.length)
  }

  const prevFloorPlan = () => {
    if (!propertyData.floorPlans || !activeFloorPlanType) return
    const currentPlans = propertyData.floorPlans[activeFloorPlanType]
    if (!currentPlans || currentPlans.length === 0) return
    setCurrentFloorPlanIndex((prev) => (prev - 1 + currentPlans.length) % currentPlans.length)
  }

  const handleFloorPlanTypeChange = (type: string) => {
    setActiveFloorPlanType(type)
    setCurrentFloorPlanIndex(0)
  }

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {}

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long"
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!phone || !/^[+]?[\d\s-()]{10,}$/.test(phone)) {
      errors.phone = "Please enter a valid phone number"
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }

    return errors
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const errors = validateForm(formData)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsSubmitting(false)
      return
    }

    setFormErrors({})

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Thank you for your message! Our agent will contact you soon.")
    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  const floorPlanTypes = propertyData && propertyData.floorPlans ? Object.keys(propertyData.floorPlans) : []

  useEffect(() => {
    if (floorPlanTypes.length > 0) {
      setActiveFloorPlanType(floorPlanTypes[0])
    }
  }, [floorPlanTypes])

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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-navy-900">
                Dhawan Properties
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-navy-900 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-navy-900 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-navy-900 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-navy-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-navy-900 transition-colors">
                Contact
              </Link>
            </div>
            <a href={`tel:${propertyData.agent.phone}`}>
              <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

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
                src={propertyData.images[currentImageIndex] || "/placeholder.svg"}
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
                    <Button className="bg-gold-500/90 hover:bg-gold-600 text-navy-900 backdrop-blur-sm">
                      Schedule Visit
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
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-4 mt-4 overflow-x-auto">
              {propertyData.images.map((image, index) => (
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
                <span className="font-semibold text-navy-900">{propertyData.type}</span>
              </div>
              {propertyData.bedrooms > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-700">Bedrooms</span>
                  <span className="font-semibold text-navy-900">{propertyData.bedrooms} BHK</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Bathrooms</span>
                <span className="font-semibold text-navy-900">{propertyData.bathrooms}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Area</span>
                <span className="font-semibold text-navy-900">{propertyData.area} sq.ft</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="text-gray-700">Year Built</span>
                <span className="font-semibold text-navy-900">{propertyData.yearBuilt}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Status</span>
                <Badge className="bg-green-100 text-green-800">{propertyData.status}</Badge>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Visit
              </Button>
              <a href={`tel:${propertyData.agent.phone}`}>
                <Button
                  variant="outline"
                  className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {propertyData.bedrooms > 0 && (
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 text-center shadow-xl">
              <Bed className="w-8 h-8 text-navy-900 mx-auto mb-2" />
              <div className="text-2xl font-bold text-navy-900">{propertyData.bedrooms}</div>
              <div className="text-gray-600">Bedrooms</div>
            </div>
          )}
          <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 text-center shadow-xl">
            <Bath className="w-8 h-8 text-navy-900 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">{propertyData.bathrooms}</div>
            <div className="text-gray-600">Bathrooms</div>
          </div>
          <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 text-center shadow-xl">
            <Square className="w-8 h-8 text-navy-900 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">{propertyData.area}</div>
            <div className="text-gray-600">Sq. Ft.</div>
          </div>
          <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 text-center shadow-xl">
            <Calendar className="w-8 h-8 text-navy-900 mx-auto mb-2" />
            <div className="text-2xl font-bold text-navy-900">{propertyData.yearBuilt}</div>
            <div className="text-gray-600">Year Built</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{propertyData.description}</p>
            </div>

            {/* Amenities */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {propertyData.amenities.map((amenity, index) => {
                  const IconComponent = amenity.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl"
                    >
                      <IconComponent className="w-5 h-5 text-navy-900" />
                      <span className="text-gray-700 font-medium">{amenity.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {propertyData.floorPlans && Object.keys(propertyData.floorPlans).length > 0 && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Floor Plans</h3>

                {/* Unit Type Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {floorPlanTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleFloorPlanTypeChange(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeFloorPlanType === type
                          ? "bg-navy-900 text-white"
                          : "bg-white/50 text-navy-900 hover:bg-white/70"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Floor Plan Carousel */}
                {activeFloorPlanType && propertyData.floorPlans[activeFloorPlanType] && (
                  <div className="relative backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl p-4">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <img
                        src={
                          propertyData.floorPlans[activeFloorPlanType][currentFloorPlanIndex]?.image ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="Floor Plan"
                        className="w-full h-full object-contain cursor-pointer transition-transform hover:scale-105"
                        onClick={() =>
                          openFullScreen(
                            propertyData.floorPlans[activeFloorPlanType].map((plan) => plan.image),
                            currentFloorPlanIndex,
                          )
                        }
                      />

                      {/* Navigation arrows */}
                      {propertyData.floorPlans[activeFloorPlanType].length > 1 && (
                        <>
                          <button
                            onClick={prevFloorPlan}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all"
                          >
                            <ChevronLeft className="w-6 h-6 text-navy-900" />
                          </button>
                          <button
                            onClick={nextFloorPlan}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-2 hover:bg-white/30 transition-all"
                          >
                            <ChevronRight className="w-6 h-6 text-navy-900" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Floor Plan Info */}
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h4 className="font-semibold text-navy-900">
                          {propertyData.floorPlans[activeFloorPlanType][currentFloorPlanIndex]?.label}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {currentFloorPlanIndex + 1} of {propertyData.floorPlans[activeFloorPlanType].length}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                        onClick={() => {
                          const downloadUrl =
                            propertyData.floorPlans[activeFloorPlanType][currentFloorPlanIndex]?.downloadUrl
                          if (downloadUrl) {
                            // In a real app, this would trigger a download
                            alert("Floor plan download started!")
                          }
                        }}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>

                    {/* Dots indicator */}
                    {propertyData.floorPlans[activeFloorPlanType].length > 1 && (
                      <div className="flex justify-center space-x-2 mt-4">
                        {propertyData.floorPlans[activeFloorPlanType].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentFloorPlanIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentFloorPlanIndex ? "bg-navy-900" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Nearby Places */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Nearby Places</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyData.nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl"
                  >
                    <div>
                      <div className="font-semibold text-navy-900">{place.name}</div>
                      <div className="text-sm text-gray-600">{place.type}</div>
                    </div>
                    <div className="text-gold-600 font-semibold">{place.distance}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Location</h3>
              <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(propertyData.location)}`}
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
                  src={propertyData.agent.image || "/placeholder.svg"}
                  alt={propertyData.agent.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-navy-900">{propertyData.agent.name}</div>
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
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    required
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="I'm interested in this property. Please contact me with more details."
                    className="backdrop-blur-sm bg-white/50 border-white/30"
                    rows={4}
                    required
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white"
                  disabled={isSubmitting}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/${propertyData.agent.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent"
                  >
                    WhatsApp
                  </Button>
                </a>
                <div className="flex space-x-2">
                  <a href={`tel:${propertyData.agent.phone}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </a>
                  <a href={`mailto:${propertyData.agent.email}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Views</span>
                  <span className="font-semibold text-navy-900">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inquiries</span>
                  <span className="font-semibold text-navy-900">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Listed</span>
                  <span className="font-semibold text-navy-900">2 days ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Property ID</span>
                  <span className="font-semibold text-navy-900">DP{propertyData.id.toString().padStart(4, "0")}</span>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {[
                  { id: 1, title: "3 BHK Apartment", location: "Sector 45, Gurgaon", price: "₹2.1 Cr" },
                  { id: 2, title: "4 BHK Villa", location: "Sector 50, Gurgaon", price: "₹3.8 Cr" },
                  { id: 3, title: "2 BHK Flat", location: "Sector 43, Gurgaon", price: "₹1.5 Cr" },
                ].map((item) => (
                  <Link key={item.id} href={`/properties/${item.id}`}>
                    <div className="flex space-x-3 p-3 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all cursor-pointer">
                      <img
                        src="/comfortable-family-house.png"
                        alt="Similar property"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-navy-900 text-sm">{item.title}</div>
                        <div className="text-xs text-gray-600">{item.location}</div>
                        <div className="text-gold-600 font-semibold text-sm">{item.price}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/properties">
                <Button
                  variant="outline"
                  className="w-full mt-4 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                >
                  View All Similar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden backdrop-blur-md bg-white/90 border-t border-white/30 p-4 shadow-2xl">
        <div className="flex space-x-3">
          <a href={`tel:${propertyData.agent.phone}`} className="flex-1">
            <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </a>
          <a
            href={`https://wa.me/${propertyData.agent.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">WhatsApp</Button>
          </a>
          <Button
            className="flex-1 bg-gold-500 hover:bg-gold-600 text-navy-900"
            onClick={() => {
              const form = document.querySelector("form")
              if (form) {
                form.scrollIntoView({ behavior: "smooth", block: "center" })
                const firstInput = form.querySelector("input")
                if (firstInput) {
                  setTimeout(() => firstInput.focus(), 500)
                }
              }
            }}
          >
            Enquire
          </Button>
        </div>
      </div>

      <FullScreenViewer
        images={fullScreenImages}
        currentIndex={fullScreenImageIndex}
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
        onNext={nextFullScreenImage}
        onPrev={prevFullScreenImage}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dhawan Properties</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in real estate with verified listings and transparent dealings.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Investment Consulting</li>
                <li>Legal Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@dhawanproperties.in</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>Sector 14, Gurgaon, Haryana 122001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dhawan Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
