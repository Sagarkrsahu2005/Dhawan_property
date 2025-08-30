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
  const krisumiProperty = properties.find((p) => 
    p.title.toLowerCase().includes("krisumi") && p.title.toLowerCase().includes("waterfall")
  );
  
  // Use luxury images for Krisumi Waterfall
  const luxuryImages = [
    "/luxury-villa-garden-pool.png",
    "/luxury-modern-residence.png",
    "/comfortable-family-house.png",
    "/modern-villa-floor-plan.png",
    "/modern-apartment-building.png"
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
              <Badge className="bg-navy-900 text-white">Indo-Japanese Luxury</Badge>
              <span className="text-xs text-gray-500">RERA: <b>GGM/271/2018/03</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Krisumi Waterfall Residences Sector 36A Luxurious</h1>
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
              src={krisumiProperty?.image || "/luxury-villa-garden-pool.png"}
              alt="Krisumi Waterfall Residences Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Krisumi Waterfall Residences: An Indo-Japanese Luxury Living Experience</h2>
              <p className="mb-4 text-gray-700">Krisumi Waterfall Residences is an exclusive luxury residential development situated in Sector 36A, Gurgaon. This unique project is a collaboration between Sumitomo Corporation, a prestigious Japanese multinational, and Krishna Group, a well-established Indian real estate developer. The project seamlessly blends Japanese architectural aesthetics with modern luxury, offering a lifestyle focused on simplicity, nature, and tranquility.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Sumitomo Corporation & Krishna Group</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 36A, Gurgaon</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Project Area</td><td className="p-2">5.4 to 6 acres (Part of 65-acre Krisumi City)</td></tr>
                  <tr><td className="font-semibold p-2">Towers</td><td className="p-2">3 towers (G+21, G+27, G+34 floors)</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">433 to 450 exclusive apartments</td></tr>
                  <tr><td className="font-semibold p-2">Possession</td><td className="p-2">December 2024 - Early 2025</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">RERA Registration</td><td className="p-2">GGM/271/2018/03</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations & Sizes</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">2 BHK: 1,448 sq.ft.</Badge>
                <Badge variant="outline">3 BHK: 1,800-2,538 sq.ft.</Badge>
                <Badge variant="outline">3+S BHK: Various sizes</Badge>
                <Badge variant="outline">Penthouses: 3,800-6,569 sq.ft.</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Pricing Details</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>2 BHK:</b> Around ₹2.00 Crores</li>
                <li><b>3 BHK:</b> ₹4.5 Crores to ₹6.5 Crores</li>
                <li><b>Penthouses:</b> ₹7.49 Crores to ₹9.85 Crores</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={krisumiProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Japanese Design Philosophy</h2>
              <p className="mb-2 text-gray-700">Krisumi Waterfall Residences incorporates various Japanese design elements:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Taki (Waterfall):</b> Water symbolizing purity and tranquility</li>
                <li><b>Kekkai (Transition):</b> Seamless flow between indoor and outdoor spaces</li>
                <li><b>Hikari, Kage (Light and Shadow):</b> Dynamic interplay enhancing ambiance</li>
                <li><b>Engawa (Connection):</b> Large windows connecting interior with landscape</li>
                <li><b>Tsuboniwa (Small Garden):</b> Minimalist garden designs</li>
                <li><b>Kaiyussei (Stroll Garden):</b> Special garden for tranquil walks and meditation</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Key Amenities - Clubhouse "Sudare"</h2>
              <p className="mb-2 text-gray-700">The expansive 36,000 sq. ft. clubhouse offers world-class amenities:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Indoor Facilities:</b> Fully equipped gymnasium, restaurant & bar lounge, spa & salon, mini cinema theatre</li>
                <li><b>Sports:</b> Badminton and squash courts, tennis court, skating rink</li>
                <li><b>Social Spaces:</b> Banquet hall, lounge areas, amphitheaters, party lawns</li>
                <li><b>Outdoor:</b> Swimming pool, Japanese-inspired landscaping with koi ponds</li>
                <li><b>Children's Areas:</b> Safe and secure play areas</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Sustainability Features</h2>
              <p className="mb-2 text-gray-700">Awarded 4-star GRIHA rating for sustainable design:</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Energy Efficiency:</b> Solar panels to reduce external power dependence</li>
                <li><b>Water Conservation:</b> Rainwater harvesting systems</li>
                <li><b>Eco-friendly:</b> Water-saving technologies and minimal environmental footprint</li>
                <li><b>Security:</b> Multi-level security with CCTV surveillance and access control</li>
                <li><b>Convenience:</b> 100% power backup, service elevators, piped gas systems</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>IGI Airport:</b> Just 10 minutes drive</li>
                <li><b>Connectivity:</b> Well-connected to Delhi, Gurgaon, NH-8</li>
                <li><b>Cyber Hub 2:</b> Close to major commercial hub</li>
                <li><b>Education:</b> Near Delhi Public School, Rishi Public School</li>
                <li><b>Healthcare:</b> Shree Shyam Hospital, Prime Hospital in proximity</li>
                <li><b>Transport:</b> Close to upcoming Inter-State Bus Terminal (ISBT)</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Living Experience</h2>
              <p className="mb-4 text-gray-700">Krisumi Waterfall Residences promises an exceptional living experience that blends modern luxury with serene elegance. The tranquil surroundings, combined with the project's focus on nature and spaciousness, make it ideal for those seeking peace and luxury. The development's extensive amenities and commitment to sustainability offer a lifestyle that blends the best of Indian and Japanese cultures.</p>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
