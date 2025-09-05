"use client"

import { useState, useRef, useEffect } from "react"
import { properties } from "@/lib/property-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowLeft, ArrowRight, Star, Phone, Mail, Bed, Bath, Square, Building, TreePine, Car, Shield, Wifi } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

// Carousel component
function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, images.length])

  const goTo = (idx: number) => setCurrent((idx + images.length) % images.length)

  return (
    <div className="relative w-full mb-6">
      <div className="overflow-hidden rounded-lg w-full h-80 flex items-center justify-center bg-gray-100">
        <img
          src={images[current]}
          alt={`Godrej Verdania Estate Gallery ${current + 1}`}
          className="object-cover w-full h-80 transition-all duration-500"
        />
      </div>
      {/* Prev/Next buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={() => goTo(current - 1)}
            aria-label="Previous"
            type="button"
          >
            <ArrowLeft className="w-5 h-5 text-navy-900" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={() => goTo(current + 1)}
            aria-label="Next"
            type="button"
          >
            <ArrowRight className="w-5 h-5 text-navy-900" />
          </button>
        </>
      )}
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-navy-900" : "bg-gray-300"}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}

export default function GodrejVerdaniaBlogPost() {
  const godrejVerdania = properties.find((p) => p.title.toLowerCase().includes("godrej verdania estate"))
  if (!godrejVerdania) return <div>Property data not found.</div>

  const plotSizes = [
    { size: "1500 sq. ft.", price: "₹1.50 Cr*", description: "Perfect for small families" },
    { size: "1800 sq. ft.", price: "₹1.80 Cr*", description: "Ideal for medium families" },
    { size: "2000 sq. ft.", price: "₹2.00 Cr*", description: "Spacious family plots" },
    { size: "2500 sq. ft.", price: "₹2.50 Cr*", description: "Premium large plots" }
  ]

  const keyFeatures = [
    { icon: TreePine, title: "24 Acres Resort Living", description: "Sprawling green spaces and resort-style amenities" },
    { icon: Building, title: "Premium Clubhouse", description: "11,000 sq. ft. The Verdania Enclave with world-class facilities" },
    { icon: Shield, title: "RERA Approved", description: "P-SWR-25-5891 ensuring transparency and compliance" },
    { icon: Car, title: "Strategic Location", description: "Prime location in Manglia with excellent connectivity" }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Header */}
          <div className="mb-6">
            <Link href="/blog" className="text-sm text-navy-900 hover:underline flex items-center mb-2">
              ← Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge className="bg-navy-900 text-white">Premium Plotted Development</Badge>
              <Badge className="bg-green-100 text-green-800">New Launch</Badge>
              <Badge className="bg-gold-100 text-gold-800">Indore</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">
              Godrej Verdania Estate - Indore's Most Awaited Plotted Development
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
              <span>By Dhawan Properties</span>
              <span>•</span>
              <span>Updated {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Manglia, Indore
              </span>
            </div>
          </div>

          {/* Main Property Card */}
          <Card className="shadow-lg border border-gray-100 mb-8">
            <Carousel images={godrejVerdania.images || [godrejVerdania.image]} />
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">Project Overview</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {godrejVerdania.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-gold-600" />
                      <span className="text-sm"><strong>RERA:</strong> {godrejVerdania.projectSpecs?.rera}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TreePine className="w-4 h-4 text-green-600" />
                      <span className="text-sm"><strong>Land Area:</strong> {godrejVerdania.projectSpecs?.landParcel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm"><strong>Location:</strong> {godrejVerdania.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Plot Sizes & Pricing</h3>
                  <div className="space-y-3">
                    {plotSizes.map((plot, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-navy-900">{plot.size}</span>
                          <span className="text-gold-600 font-bold">{plot.price}</span>
                        </div>
                        <p className="text-xs text-gray-600">{plot.description}</p>
                      </div>
                    ))}
                    <div className="bg-gold-50 border border-gold-200 rounded-lg p-3 mt-4">
                      <p className="text-sm text-gold-800">
                        <strong>EOI Amount:</strong> Starting at just ₹75,000/- Only!
                      </p>
                      <p className="text-xs text-gold-600 mt-1">Priority Allotment Advantage • Limited Signature Plots</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Godrej Verdania Estate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <feature.icon className="w-6 h-6 text-gold-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Premium Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {godrejVerdania.amenities.slice(0, 12).map((amenity, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-700">{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Highlights */}
          <Card className="bg-gradient-to-r from-navy-900 to-navy-800 text-white mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Investment Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gold-300">Location Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Located on Indore-Ujjain Road</li>
                    <li>• 20 km from Devi Ahilya Bai Holkar International Airport</li>
                    <li>• Direct access to NH-52 Highway</li>
                    <li>• Close to Super Corridor development</li>
                    <li>• India's cleanest city - Indore</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gold-300">Investment Benefits</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• High appreciation potential in growing Indore market</li>
                    <li>• Freehold property with complete ownership</li>
                    <li>• Custom home construction freedom</li>
                    <li>• Trusted Godrej Properties legacy</li>
                    <li>• RERA compliance ensures transparency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="mb-8">
            <Card className="border-2 border-gold-200 bg-gold-50">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-navy-900 mb-2">Book Your Plot Today!</h2>
                  <p className="text-gray-600">Don't miss this opportunity to be part of Indore's most premium plotted development</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white" asChild>
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Site Visit
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-navy-900 text-navy-900" asChild>
                    <Link href={`/properties/${godrejVerdania.slug || godrejVerdania.id}`}>
                      View Full Details
                    </Link>
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <a href="https://wa.me/919999628400" target="_blank" rel="noopener noreferrer">
                      WhatsApp Inquiry
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Explore More Premium Properties</h3>
                <p className="text-gray-300">Discover our curated collection of luxury residential developments</p>
              </div>
              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold whitespace-nowrap">
                <Link href="/properties">View All Properties</Link>
              </Button>
            </div>
            
            {/* Disclaimer */}
            <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-4">
              <p>*Prices are subject to change. *T&C Apply. All images are for representational purposes only.</p>
              <p className="mt-1">RERA Registration: P-SWR-25-5891</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
