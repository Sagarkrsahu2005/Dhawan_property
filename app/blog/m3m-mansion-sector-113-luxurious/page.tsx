"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { properties } from "../../../lib/property-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";

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
  const m3mProperty = properties.find((p) => 
    p.title.toLowerCase().includes("m3m") && p.title.toLowerCase().includes("mansion")
  );
  
  // Use luxury images for M3M Mansion
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
            <Badge className="bg-navy-900 text-white">Luxury Apartments</Badge>
            <span className="text-xs text-gray-500">RERA: <b>RC/REP/HARERA/GGM/802/534/2024/29</b></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">M3M Mansion Sector 113 luxurious</h1>
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
            src={m3mProperty?.image || "/modern-apartment-building.png"}
            alt="M3M Mansion Exterior"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-2">M3M Mansion: Luxurious Living in Sector 113</h2>
            <p className="mb-4 text-gray-700">M3M Mansion, nestled in Sector 113 along the Dwarka Expressway in Gurugram, is a luxurious residential development by M3M India Pvt. Ltd. This project offers an unparalleled living experience, combining modern architecture with expansive green spaces and world-class amenities. Strategically located at the border of Delhi and Gurgaon, M3M Mansion provides residents with seamless connectivity and a serene environment.</p>

            <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
            <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">M3M India Pvt. Ltd.</td></tr>
                <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 113, Dwarka Expressway, Gurugram</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Land Area</td><td className="p-2">Approximately 11 acres</td></tr>
                <tr><td className="font-semibold p-2">Configuration</td><td className="p-2">3.5, 4.5, and 5 BHK apartments and penthouse</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">Over 950 residences</td></tr>
                <tr><td className="font-semibold p-2">Tower Details</td><td className="p-2">8 high-rise towers</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Possession</td><td className="p-2">Expected by February 2032</td></tr>
                <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">RC/REP/HARERA/GGM/802/534/2024/29</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">3.5 BHK Apartments</Badge>
              <Badge variant="outline">4.5 BHK Apartments</Badge>
              <Badge variant="outline">5 BHK Penthouses</Badge>
            </div>

            {/* Gallery - interactive carousel with increased height */}
            <Carousel images={m3mProperty?.images || luxuryImages} />

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design and Sustainability</h2>
            <p className="mb-2 text-gray-700">M3M Mansion is thoughtfully designed to offer spacious interiors with abundant natural light, ensuring a comfortable and luxurious lifestyle. The residences feature:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Flooring:</b> Laminated wooden flooring in bedrooms</li>
              <li><b>Kitchens:</b> Modular kitchens equipped with chimney and hob</li>
              <li><b>Living Areas:</b> Air-conditioning in living and dining areas</li>
              <li><b>Bathrooms:</b> Branded sanitary ware and fittings</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
            <p className="mb-2 text-gray-700">M3M Mansion boasts a strategic location with excellent connectivity to key areas:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Dwarka Expressway:</b> Direct access ensures smooth travel to Delhi and other parts of Gurugram</li>
              <li><b>Indira Gandhi International Airport:</b> Approximately a 7-minute drive</li>
              <li><b>Diplomatic Enclave:</b> Around 15 minutes away</li>
              <li><b>Dwarka Golf Course:</b> Approximately 10 minutes by car</li>
              <li><b>Bharat Vandana Park:</b> About 10 minutes drive</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
            <p className="mb-2 text-gray-700">M3M Mansion offers a plethora of amenities designed to enhance residents' lifestyles:</p>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Clubhouse:</b> State-of-the-art facility with various recreational options</li>
              <li><b>Swimming Pool:</b> Olympic-sized pool for relaxation and fitness</li>
              <li><b>Sports Facilities:</b> Golf chip & putt space, cricket box, squash court, basketball court, and tennis court</li>
              <li><b>Fitness Center:</b> Well-equipped gymnasium and yoga zone</li>
              <li><b>Entertainment:</b> Mini theatre and gaming zone</li>
              <li><b>Wellness:</b> Spa, sauna, and pleasure spa</li>
              <li><b>Children's Facilities:</b> Kids' play area, pet-friendly parks, and dedicated green spaces</li>
              <li><b>Additional Amenities:</b> Business center, amphitheatre, banquet hall, and cycling track</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Special Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Central Greens:</b> Unobstructed views of Delhi Reserve Greens and central landscaped areas</li>
              <li><b>Security:</b> Comprehensive perimeter security, CCTV surveillance, and smart card access</li>
              <li><b>Parking:</b> Ample surface parking for visitors and residents</li>
              <li><b>Lobby:</b> Double-height lobbies with luxurious seating areas</li>
              <li><b>Balconies:</b> Generously sized wrap-around balconies enhancing outdoor living spaces</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Developer Profile</h2>
            <p className="mb-4 text-gray-700">M3M India Pvt. Ltd. is a renowned real estate developer known for its commitment to quality, innovation, and timely delivery. With a focus on creating luxurious and sustainable living spaces, M3M has established itself as a leader in the real estate sector, particularly in North India.</p>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Opportunity</h2>
            <p className="mb-4 text-gray-700">M3M Mansion in Sector 113, Gurugram, offers a unique blend of luxury, comfort, and connectivity. With its strategic location, world-class amenities, and thoughtfully designed residences, it presents an exceptional opportunity for those seeking an elevated living experience. The project's proximity to the airport and excellent connectivity make it ideal for both end-users and investors.</p>

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
              <Link href="/blog/elan-the-presidential-sector-106-top-20-luxurious-apartments" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/banner.jpg" alt="Elan The Presidential" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Luxury Project</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Elan The Presidential Sector 106</div>
                    <div className="text-xs text-gray-500">Pinnacle of luxury living by Elan Limited in Gurgaon.</div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/max-estate-360-top-20-luxurious-apartments" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-1.jpg" alt="Max Estate 360" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Luxury Highrise</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Max Estate 360 Luxury Apartments</div>
                    <div className="text-xs text-gray-500">Premium highrise with 60+ amenities by Max Estates.</div>
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
