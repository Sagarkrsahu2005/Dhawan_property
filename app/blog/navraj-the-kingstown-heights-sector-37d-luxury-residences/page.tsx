"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { properties } from "../../../lib/property-data";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Carousel component with increased height
function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  const goTo = (idx: number) => setCurrent((idx + images.length) % images.length);

  return (
    <div className="relative w-full mb-6">
      <div className="overflow-hidden rounded-lg w-full h-80 flex items-center justify-center bg-gray-100">
        <img
          src={images[current]}
          alt={`Gallery ${current + 1}`}
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
  );
}

export default function BlogPost() {
  const navrajProperty = properties.find((p) => 
    p.title.toLowerCase().includes("navraj") && p.title.toLowerCase().includes("kingstown")
  );
  
  // Use luxury images for Navraj KingsTown Heights
  const luxuryImages = [
    "/comfortable-family-house.png",
    "/luxury-modern-residence.png",
    "/modern-apartment-building.png",
    "/luxury-villa-garden-pool.png",
    "/modern-villa-floor-plan.png"
  ];
  
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white py-10">
        <div className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <div className="mb-6">
            <Link href="/blog" className="text-sm text-navy-900 hover:underline flex items-center mb-2">← Back to Blog</Link>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge className="bg-navy-900 text-white">Ultra-Luxury Residences</Badge>
              <span className="text-xs text-gray-500">RERA: <b>18 of 2025</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Navraj The KingsTown Heights Sector 37D Ultra-Luxury Residences</h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
              <span>By <b>Admin</b></span>
              <span>•</span>
              <span>Updated Aug 29, 2025</span>
              <span>•</span>
              <span>Uncategorized</span>
            </div>
          </div>
          
          <Card className="shadow-lg border border-gray-100">
            <img
              src={navrajProperty?.image || "/comfortable-family-house.png"}
              alt="Navraj The KingsTown Heights Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Navraj The KingsTown Heights: Ultra-Luxury Living</h2>
              <p className="mb-4 text-gray-700">Navraj The Kingstown Heights is an ultra-luxury residential development by Navraj Buildtech Pvt. Ltd., strategically located in Sector 37D, Dwarka Expressway, Gurugram. This high-rise residential project offers contemporary living spaces designed to provide spacious and well-ventilated apartments with premium amenities and excellent connectivity.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Navraj Buildtech Pvt. Ltd.</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 37D, Dwarka Expressway, Gurugram</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Land Area</td><td className="p-2">25 acres (Phase 1: 9 acres)</td></tr>
                  <tr><td className="font-semibold p-2">Configuration</td><td className="p-2">3 BHK + Servant Room, 4 BHK + Servant Room</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Towers</td><td className="p-2">5 towers (G+37 floors)</td></tr>
                  <tr><td className="font-semibold p-2">Total Units</td><td className="p-2">Approximately 600 units</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Ceiling Height</td><td className="p-2">12.5 feet</td></tr>
                  <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">18 of 2025</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Specifications</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">3 BHK + Servant: 2,400 sq.ft.</Badge>
                <Badge variant="outline">4 BHK + Servant: 3,300 sq.ft.</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Premium Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Private Lift Lobbies:</b> Each apartment has private lift access</li>
                <li><b>VRV Air Conditioning:</b> Advanced climate control system</li>
                <li><b>Fresh Air Provision:</b> In all apartments and club areas</li>
                <li><b>Ultra-Luxury Specifications:</b> Premium finishes and fittings</li>
                <li><b>A+ Grade Construction:</b> High-quality construction partner</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={navrajProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
              <p className="mb-2 text-gray-700">Navraj The Kingstown Heights offers extensive club facilities:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Club Space:</b> 1 lakh sq. ft. of club space across 5 different clubs</li>
                <li><b>Swimming Pools:</b> 3 swimming pools, including an all-weather pool</li>
                <li><b>Lobby:</b> Triple-height lobby with premium finishes</li>
                <li><b>Entertainment:</b> Multi-purpose halls, mini theater</li>
                <li><b>Fitness:</b> Fitness center, outdoor gym</li>
                <li><b>Sports:</b> Tennis court, basketball court, badminton court</li>
                <li><b>Recreation:</b> Jogging tracks, oxygen parks, amphitheater</li>
                <li><b>Community:</b> Theme gardens, gazebo seating</li>
                <li><b>Convenience:</b> Store, pharmacy, EV charging stations</li>
                <li><b>Security:</b> Visitor monitoring system</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <p className="mb-2 text-gray-700">Strategic connectivity from Sector 37D:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway:</b> 0.5 km from direct access</li>
                <li><b>NH 48:</b> 4.5 km connectivity</li>
                <li><b>Hero Honda Chowk:</b> 6 km distance</li>
                <li><b>Rajiv Chowk:</b> 9 km connectivity</li>
                <li><b>Dwarka & IFFCO Chowk:</b> 15 km distance</li>
                <li><b>Cyber City:</b> 17 km connectivity</li>
                <li><b>IGI Airport:</b> 21 km distance</li>
                <li><b>Global City:</b> Near upcoming development</li>
                <li><b>Industrial Areas:</b> Close to Manesar employment centers</li>
                <li><b>Shopping:</b> 10 minutes to Dwarka and Ansal Plaza</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: Navraj Infratech</h2>
              <p className="mb-4 text-gray-700">Navraj Infratech is a prominent real estate developer known for delivering high-quality residential projects in the Delhi NCR region. With a focus on luxury living and customer satisfaction, Navraj Infratech aims to provide modern and spacious homes that cater to the evolving needs of urban dwellers.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
              <p className="mb-4 text-gray-700">Navraj The KingsTown Heights offers an excellent investment opportunity with its ultra-luxury amenities, strategic location on Dwarka Expressway, and comprehensive club facilities. The project's focus on premium living spaces and extensive amenities makes it attractive to luxury homebuyers and investors seeking high-end residential properties.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Need Expert Real Estate Advice?</div>
                <div className="text-gray-200 mb-2">Our team can help you find the perfect luxury property or answer your questions.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/signature-global-deluxe-dxp-sector-37d-luxury-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://risehomesholding.com/media/product/567588151_de-luxe%2037d.webp" alt="Signature Global Deluxe DXP" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Ultra-Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Signature Global Deluxe DXP</div>
                      <div className="text-xs text-gray-500">Ultra-luxury apartments with premium amenities in Sector 37D.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/m3m-mansion-sector-113-luxurious" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg" alt="M3M Mansion" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Luxury Apartments</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">M3M Mansion Sector 113</div>
                      <div className="text-xs text-gray-500">Luxurious living by M3M India in Dwarka Expressway.</div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
