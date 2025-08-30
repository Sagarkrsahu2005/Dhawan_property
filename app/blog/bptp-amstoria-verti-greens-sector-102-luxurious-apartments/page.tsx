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
  const bptpProperty = properties.find((p) => 
    p.title.toLowerCase().includes("bptp") && p.title.toLowerCase().includes("verti")
  );
  
  // Use luxury images for BPTP Verti Greens
  const luxuryImages = [
    "/modern-apartment-building.png",
    "/luxury-villa-garden-pool.png",
    "/luxury-modern-residence.png",
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
              <Badge className="bg-navy-900 text-white">Vertical Gardens</Badge>
              <span className="text-xs text-gray-500">RERA: <b>GGM/910/642/2025/1</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">BPTP Amstoria Verti Greens Sector 102-Luxurious Apartments Bang on Dwarka Express</h1>
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
              src={bptpProperty?.image || "/modern-apartment-building.png"}
              alt="BPTP Amstoria Verti Greens Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">BPTP Amstoria Verti Greens: Sustainable Luxury Living</h2>
              <p className="mb-4 text-gray-700">BPTP Verti Greens, also known as BPTP Amstoria Verti Greens Sector 102, is a luxurious residential project located in Sector 102, Gurugram, along the Dwarka Expressway. The development spans approximately 12 acres and comprises five high-rise towers, each rising up to 45 floors. The project is designed to offer a blend of modern living with sustainable features, including vertical gardens inspired by global architectural landmarks.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">BPTP Limited</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 102, Dwarka Expressway, Gurugram</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Area</td><td className="p-2">12.05 acres</td></tr>
                  <tr><td className="font-semibold p-2">Number of Towers</td><td className="p-2">5</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Floors per Tower</td><td className="p-2">G+45</td></tr>
                  <tr><td className="font-semibold p-2">Total Units</td><td className="p-2">885 luxury apartments</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">RERA Registration</td><td className="p-2">GGM/910/642/2025/1</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">2 BHK + Utility: 1,600 sq.ft.</Badge>
                <Badge variant="outline">3 BHK + Utility: 2,400 sq.ft.</Badge>
                <Badge variant="outline">4 BHK: 3,200 sq.ft. (upcoming)</Badge>
              </div>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={bptpProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🌿 Design & Sustainability</h2>
              <p className="mb-2 text-gray-700">The project emphasizes sustainable living through:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Vertical Gardens:</b> Inspired by global structures like Milan's Bosco Verticale, featuring green spaces at various levels</li>
                <li><b>Green Building Certification:</b> Designed to meet green building standards, promoting energy efficiency</li>
                <li><b>Mivan Construction Technology:</b> Ensures high-quality, durable structures</li>
                <li><b>Environmental Responsibility:</b> Focus on eco-friendly living and sustainability</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
              <p className="mb-2 text-gray-700">BPTP Verti Greens offers a comprehensive range of luxury amenities:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Clubhouse:</b> 155,000 sq. ft. spread across three clubhouses</li>
                <li><b>Swimming Pool:</b> All-weather pool for year-round enjoyment</li>
                <li><b>Sports Facilities:</b> Tennis courts, indoor badminton court, table tennis, gaming room</li>
                <li><b>Wellness & Leisure:</b> Spa, mini theatre, elegant dining, fitness center</li>
                <li><b>Children's Play Area:</b> Vibrant spaces for kids</li>
                <li><b>Concierge Services:</b> Assistance with daily needs</li>
                <li><b>Power Backup:</b> 100% backup for uninterrupted living</li>
                <li><b>Rainwater Harvesting:</b> Sustainable water management</li>
                <li><b>Green-rated Buildings:</b> Environmentally friendly construction</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location & Connectivity</h2>
              <p className="mb-2 text-gray-700">Strategically located on the Dwarka Expressway, BPTP Verti Greens offers:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Direct Access:</b> To Dwarka Expressway, NH-8, and nearby sectors</li>
                <li><b>IGI Airport:</b> 10 minutes</li>
                <li><b>Cyber Hub:</b> 10-15 minutes</li>
                <li><b>Ambience Mall:</b> 10-15 minutes</li>
                <li><b>Schools & Hospitals:</b> 5-10 minutes to reputed institutions</li>
                <li><b>Rapid Metro & Railway:</b> 8 minutes</li>
                <li><b>Seamless Connectivity:</b> Easy access to Delhi, Noida, Faridabad, and Sohna</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Construction Quality</h2>
              <p className="mb-2 text-gray-700">Key construction highlights:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Mivan Technology:</b> High-quality, durable construction methodology</li>
                <li><b>Green Building Standards:</b> Meeting international environmental standards</li>
                <li><b>Vertical Garden Integration:</b> Innovative green architecture throughout the towers</li>
                <li><b>Premium Specifications:</b> High-end finishes and quality materials</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
              <p className="mb-4 text-gray-700">BPTP Amstoria Verti Greens presents an excellent investment opportunity with its unique vertical garden concept, strategic location on Dwarka Expressway, and comprehensive amenities. The project's focus on sustainability and green living makes it appealing to environmentally conscious buyers while offering modern luxury and convenience.</p>

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
                <Link href="/blog/krisumi-waterfall-residences-sector-36a-luxurious" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png" alt="Krisumi Waterfall Residences" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Indo-Japanese Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Krisumi Waterfall Residences</div>
                      <div className="text-xs text-gray-500">Unique Indo-Japanese luxury living experience in Sector 36A.</div>
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
