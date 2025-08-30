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
  const smartworldProperty = properties.find((p) => 
    p.title.toLowerCase().includes("smartworld") && p.title.toLowerCase().includes("one")
  );
  
  // Use luxury images for Smartworld One DXP
  const luxuryImages = [
    "/modern-apartment-building.png",
    "/luxury-modern-residence.png",
    "/comfortable-family-house.png",
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
              <Badge className="bg-navy-900 text-white">Modern Luxury</Badge>
              <span className="text-xs text-gray-500">RERA: <b>DLRERA2020A0011</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Smartworld One DXP Sector 113 Premium Residential Complex</h1>
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
              src={smartworldProperty?.image || "/modern-apartment-building.png"}
              alt="Smartworld One DXP Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Smartworld One DXP: Redefining Urban Luxury Living</h2>
              <p className="mb-4 text-gray-700">Smartworld One DXP, located in Sector 113, Gurgaon, is a landmark residential project that blends luxury with modern living. The project is developed by Smartworld Developers, renowned for delivering innovative and high-quality residential complexes. Positioned along the Dwarka Expressway, Smartworld One DXP promises a lifestyle that offers not only modern amenities but also strategic location advantages.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Smartworld Developers</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 113, Dwarka Expressway, Gurgaon, Haryana</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Area</td><td className="p-2">Approximately 5 acres</td></tr>
                  <tr><td className="font-semibold p-2">Towers</td><td className="p-2">Multiple high-rise towers</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">Over 500 units</td></tr>
                  <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">DLRERA2020A0011</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Architect</td><td className="p-2">UHA London</td></tr>
                  <tr><td className="font-semibold p-2">Landscaping</td><td className="p-2">Element Design Studio, Singapore</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Unit Configurations</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">3.5 BHK: 1,927-2,450 sq.ft.</Badge>
                <Badge variant="outline">4.5 BHK: 2,733-3,006 sq.ft.</Badge>
                <Badge variant="outline">5 BHK: Custom sizes</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Facade Design:</b> Sleek, modern aesthetic with glass and steel elements</li>
                <li><b>Spacious Residences:</b> High ceilings, open layouts, and large windows with panoramic views</li>
                <li><b>Landscaping:</b> Lush green spaces with themed gardens, walking tracks, and water bodies</li>
                <li><b>Sustainability Focus:</b> Rainwater harvesting, energy-efficient lighting, and waste management</li>
                <li><b>Home Automation:</b> State-of-the-art smart home systems for lights, AC, curtains, and security</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Delhi Connectivity:</b> Just a few minutes away from Delhi</li>
                <li><b>IGI Airport:</b> Just a 7-minute drive away</li>
                <li><b>Diplomatic Enclave:</b> Located just 5 minutes away</li>
                <li><b>Education:</b> Close to DPS and The Shri Ram School</li>
                <li><b>Healthcare:</b> Near Medanta and Fortis hospitals</li>
                <li><b>Entertainment:</b> Close to Ambience Mall and DLF Cyber Hub</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={smartworldProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
              <p className="mb-2 text-gray-700">Smartworld One DXP offers extensive amenities designed for modern family lifestyle:</p>
              
              <h3 className="text-md font-bold text-navy-900 mb-2">Clubhouse & Work:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Clubhouse:</b> 100,000 sq. ft. with multi-purpose hall, party rooms, and exclusive lounge</li>
                <li><b>Co-working Space:</b> 24×7 co-working space with high-speed internet and meeting rooms</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Fitness & Wellness:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Gymnasium with state-of-the-art fitness equipment</li>
                <li>Yoga & Meditation Room for mindfulness practices</li>
                <li>Spa, Sauna, and wellness center</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Sports & Recreation:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Basketball, tennis, and badminton courts</li>
                <li>Indoor sports complex with table tennis and squash</li>
                <li>Mini theater and amphitheater for events</li>
                <li>Sunken pool bar for relaxation</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Children & Family:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Multiple children's play areas with safe equipment</li>
                <li>Water play zones for young children</li>
                <li>Library and study area for quiet learning</li>
                <li>Barbecue zone for social gatherings</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: Smartworld Developers</h2>
              <p className="mb-4 text-gray-700">Smartworld Developers has built a strong reputation for delivering high-quality projects with timely delivery and customer satisfaction. With a focus on innovative design and modern amenities, Smartworld has established itself as a trusted name in the real estate industry, particularly in the NCR region.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Potential</h2>
              <p className="mb-4 text-gray-700">Smartworld One DXP offers excellent investment potential with high ROI prospects, rapid infrastructure development in the area, and increasing demand for luxury properties in Gurugram. The strategic location on Dwarka Expressway and comprehensive amenities make it an ideal choice for both residential living and investment purposes.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Looking for Smart Home Technologies?</div>
                <div className="text-gray-200 mb-2">Explore modern residential projects with cutting-edge automation and amenities.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/signature-global-twin-tower-dxp" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://www.yhataw.com/wp-content/uploads/2024/12/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg" alt="Signature Global Twin Tower DXP" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Twin Towers</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Signature Global Twin Tower DXP</div>
                      <div className="text-xs text-gray-500">Iconic luxury towers with 600+ apartments in Sector 84.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/m3m-mansion-sector-113-luxurious" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg" alt="M3M Mansion" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Luxury Apartments</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">M3M Mansion Sector 113</div>
                      <div className="text-xs text-gray-500">Luxurious living by M3M India in the same sector.</div>
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
