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
  const m3mCrownProperty = properties.find((p) => 
    p.title.toLowerCase().includes("m3m") && p.title.toLowerCase().includes("crown")
  );
  
  // Use luxury images for M3M Crown
  const luxuryImages = [
    "/luxury-modern-residence.png",
    "/modern-apartment-building.png",
    "/luxury-villa-garden-pool.png",
    "/comfortable-family-house.png",
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
              <Badge className="bg-navy-900 text-white">Luxury Apartments</Badge>
              <span className="text-xs text-gray-500">RERA: <b>GGM/687/419/2023/31</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">M3M Crown Sector 111 Dwarka Express Luxury Residences</h1>
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
              src={m3mCrownProperty?.image || "/luxury-modern-residence.png"}
              alt="M3M Crown Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">M3M Crown: Epitome of Luxury and Sophistication</h2>
              <p className="mb-4 text-gray-700">M3M Crown, situated in Sector 111 along the Dwarka Expressway in Gurugram, is an epitome of luxury and sophistication. Developed by M3M India, this residential project offers meticulously designed 3 and 4 BHK apartments, combining modern architecture with opulent interiors to provide residents with an unparalleled living experience.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">M3M India</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 111, Dwarka Expressway, Gurugram</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Land Area</td><td className="p-2">Approximately 16 acres</td></tr>
                  <tr><td className="font-semibold p-2">Configuration</td><td className="p-2">3 and 4 BHK apartments</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">726 exclusive apartments</td></tr>
                  <tr><td className="font-semibold p-2">Tower Details</td><td className="p-2">11 high-rise towers, each with G+31 floors</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Possession</td><td className="p-2">Expected by December 2026</td></tr>
                  <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">GGM/687/419/2023/31</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design and Sustainability</h2>
              <p className="mb-4 text-gray-700">M3M Crown showcases contemporary architecture with expansive layouts and abundant natural light. The residences are designed to offer panoramic views of the central greens and water bodies, creating a serene living environment. The project emphasizes sustainable living with energy-efficient designs and ample green spaces.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway Access:</b> Direct connectivity facilitates seamless travel to Delhi and other parts of Gurugram</li>
                <li><b>Indira Gandhi International Airport:</b> Approximately 7 minutes by car</li>
                <li><b>Diplomatic Enclave II:</b> 10 minutes away</li>
                <li><b>India International Convention Centre:</b> 10 minutes drive</li>
                <li><b>Bharat Vandana Park:</b> 15 minutes by car</li>
                <li><b>Delhi Golf Course:</b> 15 minutes drive</li>
                <li><b>International Sports Complex:</b> 15 minutes away</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={m3mCrownProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
              <p className="mb-2 text-gray-700">M3M Crown offers a plethora of world-class amenities designed to enhance residents' lifestyles:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Clubhouse:</b> A 75,000 sq. ft. facility featuring a fitness center, spa, and multi-purpose lounge</li>
                <li><b>Swimming Pool:</b> A rooftop pool offering relaxation with panoramic views</li>
                <li><b>Sports Facilities:</b> Golf putting, bowling alley, squash court, and tennis court for sports enthusiasts</li>
                <li><b>Themed Gardens:</b> Zen Garden, French Garden, and Butterfly Valley, among others, promoting a tranquil environment</li>
                <li><b>Entertainment Options:</b> Mini theater, multi-cuisine restaurants, and a library for leisure activities</li>
                <li><b>Fitness and Well-being:</b> Yoga and meditation center, jogging track, and a fully equipped gymnasium</li>
                <li><b>Security:</b> A comprehensive three-tier security system, including CCTV surveillance and smart card access</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Special Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Central Landscape:</b> A 5.5-acre central green space with community and social activity areas, enhancing the sense of community</li>
                <li><b>Waterfront Club:</b> A sophisticated club with a terraced garden and café, offering a resort-like experience</li>
                <li><b>High-Speed Elevators:</b> Multiple elevators per tower, ensuring minimal waiting times and efficient vertical transportation</li>
                <li><b>Premium Finishes:</b> Residences feature laminated wooden flooring in bedrooms, imported marble in living/dining areas, modular kitchens with premium fittings, and branded sanitary ware in bathrooms</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: M3M India</h2>
              <p className="mb-4 text-gray-700">M3M India, established in 1998, has emerged as a prominent real estate developer in India, particularly in North India. The company is renowned for identifying emerging real estate markets, delivering projects with speed, class, and innovation. M3M's commitment to quality construction, timely delivery, and contemporary designs has earned it a reputation for excellence in the industry.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
              <p className="mb-4 text-gray-700">M3M Crown in Sector 111, Gurugram, offers a luxurious and sustainable living experience. With its strategic location, world-class amenities, and commitment to quality, it presents an exceptional opportunity for discerning homebuyers and investors seeking a blend of elegance, comfort, and connectivity.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Looking for Luxury Properties by M3M?</div>
                <div className="text-gray-200 mb-2">Explore premium residential projects with world-class amenities and strategic locations.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/m3m-mansion-sector-113-luxurious" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg" alt="M3M Mansion" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Luxury Apartments</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">M3M Mansion Sector 113</div>
                      <div className="text-xs text-gray-500">Luxurious 3.5, 4.5 & 5 BHK apartments by M3M India in Dwarka Expressway.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/signature-global-deluxe-dxp-sector-37d-luxury-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://risehomesholding.com/wp-content/uploads/2025/01/de-luxe%2037d.webp" alt="Signature Global Deluxe DXP" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Ultra-Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Signature Global Deluxe DXP</div>
                      <div className="text-xs text-gray-500">Ultra-luxury apartments with premium amenities in Sector 37D.</div>
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
