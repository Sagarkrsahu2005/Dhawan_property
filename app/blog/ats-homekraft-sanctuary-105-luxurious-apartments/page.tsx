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
  const atsProperty = properties.find((p) => 
    p.title.toLowerCase().includes("ats") && p.title.toLowerCase().includes("sanctuary")
  );
  
  // Use luxury images for ATS HomeKraft Sanctuary
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
              <Badge className="bg-navy-900 text-white">Art Deco Living</Badge>
              <span className="text-xs text-gray-500">Phase 1: <b>450 units available</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">ATS HomeKraft Sanctuary 105 Luxurious Apartments in Dwarka Express</h1>
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
              src={atsProperty?.image || "/comfortable-family-house.png"}
              alt="ATS HomeKraft Sanctuary 105 Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">ATS Homekraft Sanctuary 105: A Luxurious Residential Haven</h2>
              <p className="mb-4 text-gray-700">ATS Homekraft Sanctuary 105 is an upcoming residential project located in Sector 105, Gurgaon, along the Dwarka Expressway. Developed by ATS Homekraft, a subsidiary of the renowned ATS Group, this project aims to provide a luxurious and comfortable living experience, combining modern architecture with nature and art.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">ATS Homekraft (ATS Group)</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 105, Dwarka Expressway, Gurgaon</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Land Parcel</td><td className="p-2">Approximately 13.07 acres</td></tr>
                  <tr><td className="font-semibold p-2">Towers</td><td className="p-2">11 towers (G+32 and G+34 floors)</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">Approximately 734 apartments</td></tr>
                  <tr><td className="font-semibold p-2">Phase 1 Units</td><td className="p-2">450 units available</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Configuration</td><td className="p-2">3 BHK + Study, 4 BHK + Servant</td></tr>
                  <tr><td className="font-semibold p-2">Design Theme</td><td className="p-2">Art Deco inspired architecture</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations & Pricing</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">3 BHK + Study: 1,800-1,900 sq.ft.</Badge>
                <Badge variant="outline">4 BHK + Servant: 2,700-2,900 sq.ft.</Badge>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>3 BHK + Study:</b> Starting at ₹2.09 crore</li>
                <li><b>4 BHK + Servant:</b> Starting at ₹3 crore</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design and Concept</h2>
              <p className="mb-4 text-gray-700">The design of ATS Homekraft Sanctuary 105 draws inspiration from Art Deco, blending contemporary elements with grandeur. The project emphasizes a harmonious integration of art, architecture, and nature, providing residents with a serene and aesthetically pleasing environment.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway Access:</b> Direct connectivity via 60-meter and 40-meter wide roads</li>
                <li><b>Dwarka City:</b> Approximately 3.5 km away</li>
                <li><b>Diplomatic Enclave:</b> Around 3 km, housing various embassies</li>
                <li><b>IGI Airport:</b> A 10-minute drive to Terminal 3</li>
                <li><b>Upcoming Metro Station:</b> Within walking distance, enhancing public transport connectivity</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={atsProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
              <p className="mb-2 text-gray-700">ATS Homekraft Sanctuary 105 offers a plethora of amenities designed to cater to various recreational and wellness needs:</p>
              
              <h3 className="text-md font-bold text-navy-900 mb-2">Sports Facilities:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Tennis Court</li>
                <li>Basketball Court</li>
                <li>Badminton Court</li>
                <li>Squash Court</li>
                <li>Cricket Pitch</li>
                <li>Skating Rink</li>
                <li>Pickleball Court</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Recreational Facilities:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Floral, Fragrance, Butterfly, and Miyawaki Gardens</li>
                <li>Amphitheatre for cultural events</li>
                <li>Kids' Play Area with innovative features</li>
                <li>Tree House Library with curated collections</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Wellness and Leisure:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Gymnasium with modern equipment</li>
                <li>Swimming Pool</li>
                <li>Yoga Pavilion</li>
                <li>Salon services</li>
                <li>Sauna and Steam Room</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Entertainment and Social:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Art Gallery</li>
                <li>Vegan Café</li>
                <li>Pool Table</li>
                <li>Table Tennis</li>
                <li>Golf Simulator</li>
                <li>Carrom and Chess</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: ATS Homekraft</h2>
              <p className="mb-4 text-gray-700">ATS Homekraft, a subsidiary of the ATS Group, is committed to delivering affordable homes without compromising on quality. With a legacy spanning over 26 years, the ATS Group has successfully completed 17 projects and currently has 14 ongoing projects across seven cities in India. The group's dedication to excellence is reflected in the positive feedback from residents, with past projects receiving an average rating of 4.7 out of 5 for construction quality.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
              <p className="mb-4 text-gray-700">ATS Homekraft Sanctuary 105 stands as a testament to luxurious living, offering a blend of modern amenities, strategic location, and thoughtful design. Whether you're seeking a serene retreat or a vibrant community, this project caters to diverse lifestyles and preferences, making it an excellent investment opportunity.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Interested in Art Deco Luxury Living?</div>
                <div className="text-gray-200 mb-2">Discover premium residential projects that blend art, architecture, and nature.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/m3m-crown-sector-111-dwarka-express" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic.jpg" alt="M3M Crown" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Luxury Apartments</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">M3M Crown Sector 111</div>
                      <div className="text-xs text-gray-500">Epitome of luxury with 11 towers and 726 exclusive apartments.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/godrej-vrikshya-sector-103-eco-luxury-residences" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-1.webp" alt="Godrej Vrikshya" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-green-600 text-white mb-2">Eco-Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Godrej Vrikshya Sector 103</div>
                      <div className="text-xs text-gray-500">Nature-inspired luxury living with sustainable design features.</div>
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
