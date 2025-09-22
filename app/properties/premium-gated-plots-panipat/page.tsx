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
  Eye,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPropertyBySlug, properties, getSimilarProperties } from "@/lib/property-data"
import BrochureDownload from "@/components/brochure-download"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PremiumGatedPlotsPanipatPage() {
  const propertyData = getPropertyBySlug("premium-gated-plots-panipat")
  
  // State for image gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(0)
  const [fullScreenImages, setFullScreenImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  // New gallery data for premium gated development
  const galleryImages = [
    {
      src: "/premium-gated-plots-main.jpg",
      alt: "Premium Gated Development - Main View",
    },
    {
      src: "/premium-gated-plots-layout.jpg",
      alt: "Premium Plots - Layout Plan",
    },
    {
      src: "/premium-gated-plots-amenities.jpg",
      alt: "Luxury Amenities - Clubhouse & Pool",
    },
    {
      src: "/premium-gated-plots-green-spaces.jpg",
      alt: "Green Spaces - Landscaped Gardens",
    }
  ]

  // Amenity image preview state
  const [selectedAmenityImage, setSelectedAmenityImage] = useState<string | null>(null)
  const [amenityImageModal, setAmenityImageModal] = useState(false)

  // Amenities data with high-quality images for premium development
  const amenitiesData = [
    {
        title: "Multi Purpose Hall",
        description: "Spacious multi-purpose hall for community events and gatherings.",
        image: "https://images.unsplash.com/photo-1740368306429-2f4353b2181a?q=80&w=1716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Community events", "Social gatherings", "Cultural programs", "Meeting space"]
    },
    {
        title: "Games Room",
        description: "Dedicated games room with indoor recreational activities.",
        image: "https://images.unsplash.com/photo-1627257064094-6d31fbd8ffad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Indoor games", "Table tennis", "Carom board", "Recreation zone"]
    },
    {
        title: "Gymnasium",
        description: "Modern gymnasium with state-of-the-art fitness equipment.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0",
        features: ["Modern equipment", "Cardio machines", "Weight training", "Fitness classes"]
    },
    {
        title: "Swimming Pool",
        description: "Luxurious swimming pool with spa facilities for relaxation.",
        image: "https://images.unsplash.com/photo-1555952920-212a8b84bfec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Swimming pool", "Spa facilities", "Pool deck", "Relaxation area"]
    },
    {
        title: "Iconic Fountain",
        description: "Beautiful iconic fountain as the centerpiece of the community.",
        image: "https://images.unsplash.com/photo-1441038135232-ccf5d757a17f?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Decorative fountain", "Landscape feature", "Water feature", "Community landmark"]
    },
    {
        title: "Landscaped Gardens",
        description: "Beautifully landscaped gardens with wide tree-lined avenues.",
        image: "https://images.unsplash.com/photo-1668120089662-42642838cfef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Landscaped gardens", "Tree-lined avenues", "Walking paths", "Green spaces"]
    }
  ]

  const handleAmenityImageClick = (imageSrc: string) => {
    setSelectedAmenityImage(imageSrc)
    setAmenityImageModal(true)
  }

  // FAQ data for the new premium gated development
  const faqData = [
    {
      question: "What is the total project area and number of plots?",
      answer: "This premium gated development spans over 43 Acres offering 750 independent plots ranging from 100-500 Sq.Yd in a secure enclave."
    },
    {
      question: "What are the available plot sizes and payment options?",
      answer: "Plot sizes range from 100 to 500 Sq.Yd with flexible 1-1.5 years payment plan. EOI amount is ₹5,00,000/-. Contact our sales team for detailed pricing."
    },
    {
      question: "What are the possession and payment details?",
      answer: "Possession is available in 1 year with a flexible 1-1.5 years payment plan. The project offers easy payment terms for your convenience."
    },
    {
      question: "What are the key amenities offered?",
      answer: "The project features 30+ life designed amenities including luxe clubhouse with pool, spa & gym, multi-purpose hall, games room, gymnasium, iconic fountain, and 3-tier security."
    },
    {
      question: "What makes this project eco-friendly?",
      answer: "The development features eco-wise living with rainwater reuse system, smart lighting, wide tree-lined avenues, and landscaped gardens for sustainable living."
    },
    {
      question: "How is the connectivity from Sector 40, Panipat?",
      answer: "Excellent connectivity with direct NH-44 Delhi-Punjab Highway access. Panipat City Centre (7 mins), Delhi Public School (10 mins), and major commercial hubs nearby."
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

  // Keyboard navigation for image modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        const images = [
          "/luxury-villa-garden-pool.png",
          "/modern-villa-floor-plan.png", 
          "/luxury-modern-residence.png",
          "/modern-apartment-building.png",
          "/comfortable-family-house.png",
          "/modern-studio-apartment.png"
        ];
        
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const currentIndex = images.indexOf(selectedImage);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
          setSelectedImage(images[prevIndex]);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          const currentIndex = images.indexOf(selectedImage);
          const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
          setSelectedImage(images[nextIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link href="/properties">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              View All Properties
            </Button>
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
            <Link href="/" className="hover:text-navy-900">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-navy-900">Properties</Link>
            <span>/</span>
            <span className="text-navy-900 font-medium">{propertyData.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero Section with Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Main image gallery */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Main image */}
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={propertyData.images?.[currentImageIndex] || propertyData.image}
                  alt={`${propertyData.title} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Image overlay controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Navigation arrows */}
                {propertyData.images && propertyData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-navy-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-navy-900" />
                    </button>
                  </>
                )}

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full backdrop-blur-sm shadow-lg transition-colors ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => openFullScreen(propertyData.images, currentImageIndex)}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>

                {/* Image counter */}
                {propertyData.images && propertyData.images.length > 1 && (
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {propertyData.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail strip */}
              {propertyData.images && propertyData.images.length > 1 && (
                <div className="p-4 bg-white border-t">
                  <div className="flex space-x-2 overflow-x-auto">
                    {propertyData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex ? 'border-navy-900' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Property info */}
          <div className="space-y-6">
            {/* Property header */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {propertyData.tag}
                </Badge>
                <Badge variant="outline" className="border-navy-200 text-navy-700">
                  {propertyData.status.replace('-', ' ').toUpperCase()}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-navy-900 mb-3">{propertyData.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{propertyData.location}</span>
              </div>

              {/* <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600">EOI Amount:</span>
                <span className="font-bold text-navy-900">₹5,00,000/-</span>
              </div> */}
            </div>

            {/* Quick specs */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Quick Specs</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Project Type:</span>
                  <span className="font-medium text-navy-900">Premium Gated Plots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Area:</span>
                  <span className="font-medium text-navy-900">43 Acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Plots:</span>
                  <span className="font-medium text-navy-900">750 Plots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plot Sizes:</span>
                  <span className="font-medium text-navy-900">100-500 Sq.Yd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Possession:</span>
                  <span className="font-medium text-navy-900">In 1 Year</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Quick Enquiry
              </Button>
              <Button variant="outline" className="border-navy-200 text-navy-700 hover:bg-navy-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
          {/* Left column - Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">About This Premium Gated Development</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              Discover a place where your aspirations take root and flourish. Set amidst lush, open landscapes, these premium plots—ranging from 900 to 4500 sq. ft.—offer the freedom to design a home that reflects your individuality. With effortless access to highways, key city hubs, and daily conveniences, this address strikes the perfect balance between calm retreat and seamless connectivity in one of Haryana's fastest-growing destinations.
            </p>
            <p className="mb-4">
              Crafted by the trusted legacy of Properties, this gated community is enriched with thoughtful luxuries: a grand clubhouse, refreshing pool, landscaped gardens, and dedicated sports zones for recreation. Wide tree-lined avenues, modern infrastructure, and eco-conscious features make every day smoother, greener, and more refined.
            </p>
            <p>
              Backed by round-the-clock security, this is more than land—it's a foundation for a lifestyle that grows richer with time. A Grand Royal Luxurious Project offering premium 100 - 500 Sq.yd plots in a secure enclave, promising returns in Panipat's booming growth corridor with eco-wise living featuring rainwater reuse & smart lighting.
            </p>
              </div>
            </div>

            {/* A Glimpse of the Luxury - Premium Design */}
            <div className="relative overflow-hidden">
              {/* Luxury Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50/30 via-white/60 to-navy-50/40 backdrop-blur-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(185,157,88,0.1)_0%,_transparent_50%)]"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm border border-gold-200/60 rounded-3xl p-10 shadow-2xl shadow-gold-900/10">
                {/* Premium Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-6 shadow-lg shadow-gold-500/25">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-700 to-gold-600 bg-clip-text text-transparent mb-4">
                    A Glimpse of the Luxury
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-4 rounded-full"></div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Experience the architectural marvel and sophisticated design of this premium development through our exclusive gallery of luxury living.
                  </p>
                </div>
                
                {/* Premium Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { 
                      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Luxury Villa with Garden Pool",
                      title: "Villa Elegance",
                      description: "Sophisticated outdoor living"
                    },
                    { 
                      src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Modern Villa Floor Plan",
                      title: "Architectural Design",
                      description: "Thoughtfully planned spaces"
                    },
                    { 
                      src: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Luxury Modern Residence",
                      title: "Contemporary Living",
                      description: "Modern luxury redefined"
                    },
                    { 
                      src: "https://images.unsplash.com/photo-1665507279656-0cdec047c4ea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Modern Apartment Building",
                      title: "Premium Infrastructure",
                      description: "Iconic development facade"
                    },
                    { 
                      src: "https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Comfortable Family House",
                      title: "Family Sanctuary",
                      description: "Comfort meets elegance"
                    },
                    { 
                      src: "https://images.unsplash.com/photo-1721902022254-3b8c85c2498f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                      alt: "Modern Studio Apartment",
                      title: "Designer Interiors",
                      description: "Curated luxury spaces"
                    }
                  ].map((image, index) => (
                    <div 
                      key={index}
                      className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-gray-900/15 group-hover:shadow-2xl group-hover:shadow-gold-900/25 transition-all duration-500">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        
                        {/* Luxury Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Premium Hover Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          {/* Top Corner - View Icon */}
                          <div className="flex justify-end">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          {/* Bottom Content */}
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                            <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                            <p className="text-white/90 text-sm">{image.description}</p>
                          </div>
                        </div>
                        
                        {/* Golden Border Animation */}
                        <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/50 rounded-2xl transition-colors duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Premium Call-to-Action */}
                <div className="text-center mt-12 pt-8 border-t border-gold-200/50">
                  <p className="text-gray-600 mb-6 text-lg">
                    Discover more exclusive features and premium amenities
                  </p>
                  <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-gold-500/25 transform hover:scale-105 transition-all duration-300">
                    <Star className="w-5 h-5 mr-2" />
                    Explore Premium Collection
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Project Highlights</h2>
              <p className="text-gray-600 mb-6">
                This premium gated development distinguishes itself with contemporary design, world-class amenities, and strategic location, providing residents a luxurious and modern living experience in Panipat's growth corridor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "43 Acres Premium Gated Community",
                  "750 Total Plots (100-500 Sq.Yd)",
                  "Luxe Clubhouse with Pool, Spa & Gym",
                  "Multi Purpose Hall & Games Room",
                  "Iconic Fountain & Swimming Pool",
                  "30+ Life Designed Amenities",
                  "3-Tier Security with 24x7 Surveillance",
                  "Eco-wise Living with Smart Infrastructure",
                  "Direct NH-44 Highway Access",
                  "1-1.5 Years Flexi Payment Plan"
                ].map((highlight, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">A host of unparalleled amenities</h2>
              <p className="text-gray-600 mb-8">
                This premium gated development provides a luxurious residential experience with a range of top-notch amenities. The community is designed for modern living, promoting a balanced and fulfilling lifestyle in Panipat's growth corridor.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenitiesData.map((amenity, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => handleAmenityImageClick(amenity.image)}
                  >
                    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={amenity.image}
                          alt={amenity.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to view details
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">{amenity.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Connectivity */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Location Connectivity</h2>
              <p className="text-gray-600 mb-6">
                Strategically positioned in Sector 40, Panipat, this premium development boasts excellent connectivity, ensuring residents easy access to key destinations, educational institutions, and urban conveniences for a seamless and well-connected lifestyle.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {propertyData.nearbyPlaces?.map((place, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                      <div>
                        <span className="font-medium text-navy-900">{place.name}</span>
                        <span className="text-gray-500 text-sm ml-2">({place.type})</span>
                      </div>
                    </div>
                    <span className="font-bold text-blue-600">{place.distance}</span>
                  </div>
                ))}
              </div>

              {propertyData.mapEmbedUrl && (
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src={propertyData.mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${propertyData.title} Location Map`}
                  />
                </div>
              )}
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-navy-900">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Sidebar */}
          <div className="space-y-6">
            {/* Agent info */}
            {propertyData.agent && (
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={propertyData.agent.image}
                    alt={propertyData.agent.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">{propertyData.agent.name}</h4>
                    <p className="text-gray-600 text-sm">Property Consultant</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(`tel:${propertyData.agent?.phone}`)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {propertyData.agent.phone}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(`mailto:${propertyData.agent?.email}`)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                </div>
              </div>
            )}

            {/* Project specifications */}
            {propertyData.projectSpecs && (
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Project Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(propertyData.projectSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </span>
                      <span className="font-medium text-navy-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Plan & Investment Highlights */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Payment Plan & Investment Highlights</h3>
              <div className="space-y-4">
                {/* <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                  <span className="text-gray-700 font-medium">EOI Amount:</span>
                  <span className="font-bold text-green-700">₹5,00,000/-</span>
                </div> */}
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <span className="text-gray-700 font-medium">Payment Plan:</span>
                  <span className="font-bold text-blue-700">1-1.5 Years Flexi</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <span className="text-gray-700 font-medium">Possession:</span>
                  <span className="font-bold text-purple-700">In 1 Year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <span className="text-gray-700 font-medium">Highway Access:</span>
                  <span className="font-bold text-orange-700">NH-44 Direct</span>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-navy-50 to-gold-50 rounded-lg border border-gold-200">
                  <p className="text-sm text-gray-700 text-center">
                    <span className="font-semibold">✨ Limited Time Offer:</span> Book now in Panipat's fastest growing corridor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Enquiry Modal */}
        {isEnquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
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

      {/* Premium Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <X className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {(() => {
                  const images = [
                    "/luxury-villa-garden-pool.png",
                    "/modern-villa-floor-plan.png", 
                    "/luxury-modern-residence.png",
                    "/modern-apartment-building.png",
                    "/comfortable-family-house.png",
                    "/modern-studio-apartment.png"
                  ];
                  const currentIndex = images.indexOf(selectedImage);
                  return `${currentIndex + 1} / ${images.length}`;
                })()}
              </span>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const images = [
                  "/luxury-villa-garden-pool.png",
                  "/modern-villa-floor-plan.png", 
                  "/luxury-modern-residence.png",
                  "/modern-apartment-building.png",
                  "/comfortable-family-house.png",
                  "/modern-studio-apartment.png"
                ];
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                setSelectedImage(images[prevIndex]);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            <button
              onClick={() => {
                const images = [
                  "/luxury-villa-garden-pool.png",
                  "/modern-villa-floor-plan.png", 
                  "/luxury-modern-residence.png",
                  "/modern-apartment-building.png",
                  "/comfortable-family-house.png",
                  "/modern-studio-apartment.png"
                ];
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(images[nextIndex]);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Main Image Container */}
            <div className="relative max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Premium Development Gallery"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {(() => {
                        const imageInfo = [
                          { src: "/luxury-villa-garden-pool.png", title: "Villa Elegance", description: "Sophisticated outdoor living spaces" },
                          { src: "/modern-villa-floor-plan.png", title: "Architectural Design", description: "Thoughtfully planned living spaces" },
                          { src: "/luxury-modern-residence.png", title: "Contemporary Living", description: "Modern luxury redefined" },
                          { src: "/modern-apartment-building.png", title: "Premium Infrastructure", description: "Iconic development facade" },
                          { src: "/comfortable-family-house.png", title: "Family Sanctuary", description: "Comfort meets elegance" },
                          { src: "/modern-studio-apartment.png", title: "Designer Interiors", description: "Curated luxury spaces" }
                        ];
                        return imageInfo.find(img => img.src === selectedImage)?.title || "Premium Gallery";
                      })()}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {(() => {
                        const imageInfo = [
                          { src: "/luxury-villa-garden-pool.png", title: "Villa Elegance", description: "Sophisticated outdoor living spaces" },
                          { src: "/modern-villa-floor-plan.png", title: "Architectural Design", description: "Thoughtfully planned living spaces" },
                          { src: "/luxury-modern-residence.png", title: "Contemporary Living", description: "Modern luxury redefined" },
                          { src: "/modern-apartment-building.png", title: "Premium Infrastructure", description: "Iconic development facade" },
                          { src: "/comfortable-family-house.png", title: "Family Sanctuary", description: "Comfort meets elegance" },
                          { src: "/modern-studio-apartment.png", title: "Designer Interiors", description: "Curated luxury spaces" }
                        ];
                        return imageInfo.find(img => img.src === selectedImage)?.description || "Experience premium luxury living";
                      })()}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
                      <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
                      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/50 backdrop-blur-sm rounded-2xl p-3">
              {[
                "/luxury-villa-garden-pool.png",
                "/modern-villa-floor-plan.png", 
                "/luxury-modern-residence.png",
                "/modern-apartment-building.png",
                "/comfortable-family-house.png",
                "/modern-studio-apartment.png"
              ].map((imageSrc, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imageSrc)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === imageSrc 
                      ? 'border-gold-400 scale-110' 
                      : 'border-white/30 hover:border-white/60 hover:scale-105'
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                  {selectedImage === imageSrc && (
                    <div className="absolute inset-0 bg-gold-400/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}