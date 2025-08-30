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
  const godrejProperty = properties.find((p) => 
    p.title.toLowerCase().includes("godrej") && p.title.toLowerCase().includes("vrikshya")
  );
  
  // Use eco-friendly and luxury images for Godrej Vrikshya
  const ecoLuxuryImages = [
    "/luxury-villa-garden-pool.png",
    "/comfortable-family-house.png",
    "/modern-apartment-building.png",
    "/luxury-modern-residence.png",
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
              <Badge className="bg-green-600 text-white">Eco-Luxury Living</Badge>
              <span className="text-xs text-gray-500">RERA: <b>RC/REP/HARERA/GGM/783/515/2024/135</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Godrej Vrikshya Sector 103 Eco-Luxury Residences</h1>
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
              src={godrejProperty?.image || "/luxury-villa-garden-pool.png"}
              alt="Godrej Vrikshya Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Godrej Vrikshya: Nature-Inspired Luxury Living</h2>
              <p className="mb-4 text-gray-700">Godrej Vrikshya is a premium eco-luxury residential development by Godrej Properties, strategically located in Sector 103, Dwarka Expressway, Gurugram. This thoughtfully designed project combines sustainable living with modern luxury, offering spacious apartments surrounded by lush greenery and world-class amenities.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Godrej Properties</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 103, Dwarka Expressway, Gurugram</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Land Area</td><td className="p-2">14.86 acres</td></tr>
                  <tr><td className="font-semibold p-2">Configuration</td><td className="p-2">2 BHK, 3 BHK, 4 BHK</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Towers</td><td className="p-2">6-7 towers</td></tr>
                  <tr><td className="font-semibold p-2">Total Units</td><td className="p-2">Approximately 1,000 units</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Green Coverage</td><td className="p-2">75% open spaces</td></tr>
                  <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">RC/REP/HARERA/GGM/783/515/2024/135</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Specifications</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">2 BHK: 1,200-1,400 sq.ft.</Badge>
                <Badge variant="outline">3 BHK: 1,800-2,200 sq.ft.</Badge>
                <Badge variant="outline">4 BHK: 2,500-3,000 sq.ft.</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Eco-Luxury Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Green Building Certification:</b> IGBC Gold/Platinum certified</li>
                <li><b>Rainwater Harvesting:</b> Sustainable water management system</li>
                <li><b>Solar Panels:</b> Renewable energy integration</li>
                <li><b>Waste Management:</b> Advanced waste segregation and recycling</li>
                <li><b>Energy Efficient:</b> LED lighting and smart energy systems</li>
                <li><b>Air Quality:</b> Enhanced air purification systems</li>
                <li><b>Water Treatment:</b> STP and water recycling facilities</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={godrejProperty?.images || ecoLuxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Premium Amenities</h2>
              <p className="mb-2 text-gray-700">Godrej Vrikshya offers extensive luxury amenities with an eco-conscious approach:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Clubhouse:</b> 50,000 sq. ft. eco-luxury clubhouse</li>
                <li><b>Swimming Pool:</b> Natural pool with eco-friendly filtration</li>
                <li><b>Fitness Center:</b> Modern gym with outdoor fitness zones</li>
                <li><b>Landscaping:</b> Themed gardens and tree-lined walkways</li>
                <li><b>Sports Facilities:</b> Tennis court, badminton court, cricket pitch</li>
                <li><b>Children's Area:</b> Nature-themed play areas and adventure zones</li>
                <li><b>Jogging Track:</b> Dedicated jogging and cycling tracks</li>
                <li><b>Yoga Deck:</b> Outdoor yoga and meditation spaces</li>
                <li><b>Community Spaces:</b> Amphitheater, gazebos, BBQ areas</li>
                <li><b>Convenience:</b> Retail spaces, convenience store</li>
                <li><b>Security:</b> 24/7 security with smart access control</li>
                <li><b>EV Charging:</b> Electric vehicle charging stations</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <p className="mb-2 text-gray-700">Strategic connectivity from Sector 103:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway:</b> Direct connectivity</li>
                <li><b>NH 8:</b> 5 km distance</li>
                <li><b>IGI Airport:</b> 20 km connectivity</li>
                <li><b>Cyber City:</b> 15 km distance</li>
                <li><b>Gurgaon Railway Station:</b> 12 km connectivity</li>
                <li><b>Delhi Border:</b> 8 km distance</li>
                <li><b>Upcoming Metro:</b> Proposed metro connectivity</li>
                <li><b>Educational Hubs:</b> Close to top schools and colleges</li>
                <li><b>Healthcare:</b> Near leading hospitals and medical centers</li>
                <li><b>Shopping:</b> Easy access to malls and markets</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: Godrej Properties</h2>
              <p className="mb-4 text-gray-700">Godrej Properties is one of India's leading real estate developers, known for their commitment to sustainability and innovation. With over 25 years of experience, Godrej Properties has delivered numerous award-winning projects across major cities, consistently focusing on green building practices and customer satisfaction.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Sustainability Initiatives</h2>
              <p className="mb-4 text-gray-700">Godrej Vrikshya stands out as an eco-conscious development with multiple green initiatives including rainwater harvesting, solar power integration, waste management systems, and extensive green spaces covering 75% of the project area. The project aims to achieve IGBC certification for its sustainable design and construction practices.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
              <p className="mb-4 text-gray-700">Godrej Vrikshya presents an excellent investment opportunity with its unique positioning as an eco-luxury development by a renowned developer. The project's focus on sustainability, strategic location on Dwarka Expressway, and comprehensive amenities make it attractive to environmentally conscious buyers and investors seeking premium residential properties.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Interested in Eco-Luxury Living?</div>
                <div className="text-gray-200 mb-2">Discover sustainable luxury properties that blend modern comfort with environmental consciousness.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/bptp-amstoria-verti-greens-sector-102-luxurious-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg" alt="BPTP Amstoria Verti Greens" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-green-600 text-white mb-2">Sustainable Living</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">BPTP Amstoria Verti Greens</div>
                      <div className="text-xs text-gray-500">Sustainable luxury apartments with vertical gardens in Sector 102.</div>
                    </CardContent>
                  </Card>
                </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
