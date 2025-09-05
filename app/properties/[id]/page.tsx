"use client"

import React, { useState, useEffect } from "react"
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
import { getPropertyById, properties, getSimilarProperties } from "@/lib/property-data"
import BrochureDownload from "@/components/brochure-download"
import Navigation from "@/components/navigation"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // Quick Enquiry form state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [enquiryName, setEnquiryName] = useState("")
  const [enquiryPhone, setEnquiryPhone] = useState("")
  const [enquiryMessage, setEnquiryMessage] = useState("")
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)

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

  // Add a stub for handleFormSubmit to resolve missing function error
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0)
  const [fullScreenImages, setFullScreenImages] = useState<string[]>([])

  const [activeFloorPlanType, setActiveFloorPlanType] = useState("")
  const [currentFloorPlanIndex, setCurrentFloorPlanIndex] = useState(0)

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle params - could be a Promise or already resolved
  const resolvedParams = params instanceof Promise ? React.use(params) : params
  const propertyData = getPropertyById(resolvedParams.id)

  // Get similar properties for this property
  const similarProperties = propertyData ? getSimilarProperties(propertyData.id, 3) : []

  // Debug log for similar properties (can be removed in production)
  useEffect(() => {
    if (propertyData && similarProperties.length > 0) {
      console.log(`Similar properties for "${propertyData.title}":`, similarProperties.map(p => ({ id: p.id, title: p.title })))
    }
  }, [propertyData, similarProperties])

  // If property not found, show error
  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/properties">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
    if (!propertyData.images || propertyData.images.length === 0) return
    setCurrentImageIndex((prev) => (prev + 1) % (propertyData.images?.length || 1))
  }

  const prevImage = () => {
    if (!propertyData.images || propertyData.images.length === 0) return
    setCurrentImageIndex((prev) => (prev - 1 + (propertyData.images?.length || 1)) % (propertyData.images?.length || 1))
  }

  const openFullScreen = (images: string[] | undefined, index: number) => {
    if (!images || images.length === 0) return
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

  // Normalize floor plan type for robust tab selection
  const normalizeType = (type: string) => type.trim().toLowerCase().replace(/\s+/g, ' ')
  const handleFloorPlanTypeChange = (type: string) => {
    // Find the actual key in propertyData.floorPlans that matches the normalized type
    if (!propertyData.floorPlans) return
    const actualKey = Object.keys(propertyData.floorPlans).find(
      (key) => normalizeType(key) === normalizeType(type)
    )
    if (actualKey) {
      setActiveFloorPlanType(actualKey)
      setCurrentFloorPlanIndex(0)
    }
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
                      asChild
                    >
                      <a href="/contact">Schedule Visit</a>
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
              <a href={`tel:${propertyData.agent?.phone || ''}`}>
                <Button
                  variant="outline"
                  className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              {/* <Button
                variant="outline"
                className="w-full border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button> */}
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

            {/* Sizes Section */}
            {propertyData.sizes && propertyData.sizes.length > 0 && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {propertyData.sizes.map((size, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl">
                      <span className="font-semibold text-navy-900">{size.type}</span>
                      <span className="text-gold-600 font-semibold">{size.size}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Specifications (for all properties) */}
            {propertyData.projectSpecs && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Project Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Clean, consistent card layout for all specs */}
                  {propertyData.projectSpecs.landParcel && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-3xl font-extrabold text-navy-900 mb-1">{propertyData.projectSpecs.landParcel} <span className="text-lg font-bold">Acres</span></span>
                      <span className="text-gray-700 text-base font-semibold">Acres</span>
                      <span className="text-gray-700 text-sm font-medium">Land Parcel</span>
                    </div>
                  )}
                  {propertyData.projectSpecs.towers && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-3xl font-extrabold text-navy-900 mb-1">{propertyData.projectSpecs.towers}</span>
                      <span className="text-gray-700 text-base font-semibold">Towers</span>
                    </div>
                  )}
                  {propertyData.projectSpecs.floors && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-2xl font-extrabold text-navy-900 mb-1 whitespace-pre-line break-words">{propertyData.projectSpecs.floors}</span>
                      <span className="text-gray-700 text-base font-semibold">Floors</span>
                    </div>
                  )}
                  {/* {propertyData.projectSpecs.openArea && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-xl font-extrabold text-navy-900 mb-1 whitespace-pre-line break-words">{propertyData.projectSpecs.openArea}</span>
                      <span className="text-gray-700 text-base font-semibold">Open Area</span>
                    </div>
                  )} */}
                  {propertyData.projectSpecs.clubHouse && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-2xl font-extrabold text-navy-900 mb-1">{propertyData.projectSpecs.clubHouse} <span className="text-base font-bold">sq. ft.</span></span>
                      <span className="text-gray-700 text-base font-semibold">Club House</span>
                    </div>
                  )}
                  {propertyData.projectSpecs.carParking && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-xl font-extrabold text-navy-900 mb-1 whitespace-pre-line break-words">{propertyData.projectSpecs.carParking}</span>
                      <span className="text-gray-700 text-base font-semibold">Car Parking</span>
                    </div>
                  )}
                  {propertyData.projectSpecs.possession && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-3xl font-extrabold text-navy-900 mb-1">{propertyData.projectSpecs.possession}</span>
                      <span className="text-gray-700 text-base font-semibold">Possession</span>
                    </div>
                  )}
                  {propertyData.projectSpecs.waitTime && (
                    <div className="flex flex-col items-center justify-center p-6 min-h-[120px] bg-white rounded-xl shadow border border-gray-200 text-center break-words">
                      <span className="text-xl font-extrabold text-navy-900 mb-1 whitespace-pre-line break-words">{propertyData.projectSpecs.waitTime}</span>
                      <span className="text-gray-700 text-base font-semibold">Wait Time</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Amenities */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 tracking-tight">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {propertyData.amenities && propertyData.amenities.length > 0 ? (
                  propertyData.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-white border border-gray-100 rounded-lg shadow-sm"
                    >
                      <div className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 text-navy-900">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#1e293b" strokeWidth="2" fill="#f1f5f9" /><path d="M9.5 12.5l2 2 3-4" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-navy-900 text-sm font-medium">{amenity}</span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-500 py-8">
                    Amenities information will be updated soon.
                  </div>
                )}
              </div>
            </div>

            {/* Brochure Downloads */}
            {propertyData.brochures && propertyData.brochures.length > 0 && (
              <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
                <BrochureDownload 
                  propertyTitle={propertyData.title}
                  brochures={propertyData.brochures}
                />
              </div>
            )}

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
                        normalizeType(activeFloorPlanType) === normalizeType(type)
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
                          "/placeholder.svg"
                        }
                        alt="Floor Plan"
                        className="w-full h-full object-contain cursor-pointer transition-transform hover:scale-105"
                        onClick={() =>
                          openFullScreen(
                            (propertyData.floorPlans?.[activeFloorPlanType] || []).map((plan) => plan.image),
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
                            propertyData.floorPlans?.[activeFloorPlanType]?.[currentFloorPlanIndex]?.downloadUrl
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

                {/* Fullscreen Floor Plan Modal */}
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
                      alt="Floor Plan Fullscreen"
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
            )}

            {/* Nearby Places */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Nearby Places</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyData.nearbyPlaces && propertyData.nearbyPlaces.length > 0 ? (
                  propertyData.nearbyPlaces.map((place, index) => (
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
                  ))
                ) : (
                  <div className="col-span-full text-center text-gray-500 py-8">
                    Nearby places information will be updated soon.
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Location</h3>
              <div className="backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl overflow-hidden">
                <iframe
                  src={propertyData.mapEmbedUrl || `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(propertyData.location)}`}
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
                  src={propertyData.agent?.image || "/placeholder.svg"}
                  alt={propertyData.agent?.name || ''}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-navy-900">{propertyData.agent?.name}</div>
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
                  href={`https://wa.me/${propertyData.agent?.phone?.replace(/[^0-9]/g, "") || ''}`}
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
                  <a href={`tel:${propertyData.agent?.phone || ''}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </a>
                  <a href={`mailto:${propertyData.agent?.email || ''}`} className="flex-1">
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
                {similarProperties.length > 0 ? (
                  similarProperties.map((property) => (
                    <Link key={property.id} href={`/properties/${property.slug || property.id}`}>
                      <div className="flex space-x-3 p-3 backdrop-blur-sm bg-white/30 border border-white/20 rounded-xl hover:bg-white/40 transition-all cursor-pointer">
                        <img
                          src={property.image || "/comfortable-family-house.png"}
                          alt={property.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-navy-900 text-sm">{property.title}</div>
                          <div className="text-xs text-gray-600">{property.location}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="text-xs bg-blue-100 text-blue-800">{property.status}</Badge>
                            <span className="text-xs text-gray-400">{property.bedrooms} BHK</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-400">{property.area} sq.ft</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-4">
                    <p>No similar properties found.</p>
                  </div>
                )}
              </div>
              <Link href="/properties">
                <Button
                  variant="outline"
                  className="w-full mt-4 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                >
                  View All Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden backdrop-blur-md bg-white/90 border-t border-white/30 p-4 shadow-2xl">
        <div className="flex space-x-3">
          <a href={`tel:${propertyData.agent?.phone || ''}`} className="flex-1">
            <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
          </a>
          <a
            href={`https://wa.me/${propertyData.agent?.phone?.replace(/[^0-9]/g, "") || ''}`}
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
                  asChild
                >
                  <a href="https://www.facebook.com/dhawanpropertis" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                  asChild
                >
                  <a href="https://www.instagram.com/dhawanproperties2019?igsh=MWs5emJ5aWdoNWxjZg==" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
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
                  <a href="tel:+919999628400" className="hover:text-white transition-colors">+91 99996-28400</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:Dhawanproperties2019@gmail.com" className="hover:text-white transition-colors">Dhawanproperties2019@gmail.com</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-9 h-9 mr-2 mt-1" />
                  <span>203, 2nd Floor, Express Building,
                        H-BIk Mkt, Ashok Vihar Ph.-1,
                        New Delhi-110052</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dhawan Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for Property */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": propertyData.title,
            "description": propertyData.description,
            "image": propertyData.image,
            "url": `https://dhavanproperties.com/properties/${propertyData.slug || propertyData.id}`,
            "brand": {
              "@type": "Organization",
              "name": "Dhawan Properties"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "price": "Contact for Price",
              "seller": {
                "@type": "Organization",
                "name": "Dhawan Properties"
              }
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Bedrooms",
                "value": propertyData.bedrooms
              },
              {
                "@type": "PropertyValue",
                "name": "Bathrooms", 
                "value": propertyData.bathrooms
              },
              {
                "@type": "PropertyValue",
                "name": "Area",
                "value": `${propertyData.area} sq ft`
              },
              {
                "@type": "PropertyValue",
                "name": "Property Type",
                "value": propertyData.type
              },
              {
                "@type": "PropertyValue",
                "name": "Status",
                "value": propertyData.status
              }
            ]
          })
        }}
      />

      {/* Property as Accommodation Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Accommodation",
            "name": propertyData.title,
            "description": propertyData.description,
            "image": propertyData.image,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": propertyData.location
            },
            "numberOfRooms": propertyData.bedrooms,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": propertyData.area,
              "unitCode": "SQF"
            },
            "amenityFeature": propertyData.amenities.map(amenity => ({
              "@type": "LocationFeatureSpecification",
              "name": amenity
            })),
            "provider": {
              "@type": "RealEstateAgent",
              "name": "Dhawan Properties",
              "url": "https://dhavanproperties.com"
            }
          })
        }}
      />
    </div>
  )
}
