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
  const signatureProperty = properties.find((p) => 
    p.title.toLowerCase().includes("signature") && p.title.toLowerCase().includes("global")
  );
  
  // Use luxury images for Signature Global DXP
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
              <Badge className="bg-navy-900 text-white">Ultra-Luxury</Badge>
              <span className="text-xs text-gray-500">RERA: <b>RC/REP/HARERA/GGM/783/515/2024/10</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Signature Global Deluxe DXP Sector 37D Ultra-Luxury Apartments</h1>
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
              src={signatureProperty?.image || "/luxury-modern-residence.png"}
              alt="Signature Global Deluxe DXP Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Signature Global Deluxe DXP: Ultra-Luxury Living</h2>
              <p className="mb-4 text-gray-700">Signature Global Deluxe DXP, Gurgaon, is an ultra-luxury residential project developed by Signature Global Developers Pvt. Ltd. Strategically located along the Dwarka Expressway, this high-rise development offers a blend of modern architecture, premium amenities, and excellent connectivity, making it a prime choice for discerning homebuyers and investors.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Project Name</td><td className="p-2">Signature Global Deluxe DXP</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 37D, Gurgaon</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Signature Global Developers Pvt. Ltd.</td></tr>
                  <tr><td className="font-semibold p-2">Total Area</td><td className="p-2">Approximately 16.65 acres</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Number of Towers</td><td className="p-2">10 high-rise towers</td></tr>
                  <tr><td className="font-semibold p-2">Total Units</td><td className="p-2">Approximately 900 apartments</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">RERA Registration</td><td className="p-2">RC/REP/HARERA/GGM/783/515/2024/10</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Specifications</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">2 BHK: 2,164 sq.ft.</Badge>
                <Badge variant="outline">3 BHK + Utility: 2,469 sq.ft.</Badge>
                <Badge variant="outline">4.5 BHK: 3,253 sq.ft.</Badge>
                <Badge variant="outline">Penthouses: On Request</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Premium Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Spacious Layouts:</b> Each apartment designed with en-suite bathrooms and expansive balconies</li>
                <li><b>Premium Interiors:</b> Marble flooring, fully loaded modular kitchens</li>
                <li><b>Climate Control:</b> Temperature-controlled VRF air-conditioning systems</li>
                <li><b>Natural Light:</b> Ample natural light and ventilation in all units</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={signatureProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Key Features and Amenities</h2>
              <p className="mb-2 text-gray-700">Signature Global Deluxe DXP offers world-class amenities:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Clubhouse:</b> Expansive 80,000 sq. ft. clubhouse with spa, gym, salon, playrooms</li>
                <li><b>Swimming Pools:</b> Seven swimming pools, including two heated pools</li>
                <li><b>Security:</b> 5-tier security system with 24/7 surveillance and access control</li>
                <li><b>Parking:</b> Podium and underground parking with car washing facilities</li>
                <li><b>Green Spaces:</b> 60% project area dedicated to green spaces, Miyawaki forest, waterbodies</li>
                <li><b>Smart Features:</b> Smart controlled access, smart door locks, EV charging points</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Additional Amenities</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Recreation:</b> Barbeque area, basketball court, electronic games room, jogging track</li>
                <li><b>Wellness:</b> Reflexology area, yoga and meditation area, spa facilities</li>
                <li><b>Entertainment:</b> Restaurant, café, mini theater, squash court</li>
                <li><b>Family Facilities:</b> Kids play area, co-working space, e-library, skate park, pet zone</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <p className="mb-2 text-gray-700">Sector 37D offers excellent connectivity and infrastructure:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Major Roads:</b> Adjacent to Dwarka Expressway, easy access to NH-8, Southern Peripheral Road</li>
                <li><b>Employment Hubs:</b> Close to Cyber City, Golf Course, Sohna, Manesar, Kadipur Industrial Area</li>
                <li><b>Education:</b> Euro International School, Suncity School, Green Field School, Narayana E Techno</li>
                <li><b>Healthcare:</b> Signature Advanced Super Speciality Hospital, Medanta, SGT Hospital, Park Hospital</li>
                <li><b>Shopping:</b> South Point Mall, Central Plaza Mall, Ardee Mall, retail centers</li>
                <li><b>Transport:</b> 20 minutes from HUDA City Centre metro, 10 minutes from IGI Airport</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Potential</h2>
              <p className="mb-2 text-gray-700">Signature Global Deluxe DXP presents lucrative investment opportunities:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>High ROI Potential:</b> Ultra-luxury amenities and strategic location contribute to high returns</li>
                <li><b>Growing Demand:</b> Steady increase in demand for luxury properties in Gurgaon</li>
                <li><b>Developer Reputation:</b> Signature Global known for quality construction and timely delivery</li>
                <li><b>Future Developments:</b> Upcoming metro lines, commercial hubs, educational institutes</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Sustainability and Eco-Friendly Initiatives</h2>
              <p className="mb-4 text-gray-700">The project incorporates eco-friendly features such as rainwater harvesting systems, energy-efficient lighting, and waste management practices. This commitment aligns with global environmental concerns and contributes to creating a healthier and more sustainable living environment for residents.</p>

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
                <Link href="/blog/bptp-amstoria-verti-greens-sector-102-luxurious-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg" alt="BPTP Amstoria Verti Greens" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Vertical Gardens</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">BPTP Amstoria Verti Greens</div>
                      <div className="text-xs text-gray-500">Sustainable luxury living with vertical gardens in Sector 102.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/krisumi-waterfall-residences-sector-36a-luxurious" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png" alt="Krisumi Waterfall Residences" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Indo-Japanese Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Krisumi Waterfall Residences</div>
                      <div className="text-xs text-gray-500">Unique Indo-Japanese luxury living experience.</div>
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
