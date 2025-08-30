"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "          </div>
        </div>
        </div>
      </div>
    </>
  );
}ink";
import { properties } from "../../../lib/property-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";

// Carousel component
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
  const maxEstate = properties.find((p) => p.title.toLowerCase().includes("max estate 360"));
  if (!maxEstate) return <div>Property data not found.</div>;
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white py-10">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-navy-900 hover:underline flex items-center mb-2">← Back to Blog</Link>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="bg-navy-900 text-white">Luxury Highrise</Badge>
            <span className="text-xs text-gray-500">Possession: <b>{maxEstate.projectSpecs?.possession || "2028"}</b></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Max Estate 360 – Top 20 Luxurious Apartments</h1>
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span>By <b>Max Estates</b></span>
            <span>•</span>
            <span>Updated Aug 29, 2025</span>
            <span>•</span>
            <span>Luxury Apartments</span>
          </div>
        </div>
        <Card className="shadow-lg border border-gray-100">
          <img
            src={maxEstate.image || maxEstate.images?.[0] || "/placeholder.jpg"}
            alt="Max Estate 360 Exterior"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-2">About Max Estates</h2>
            <p className="mb-4 text-gray-700">Max Estates, the real estate arm of the Max Group, is known for sustainable, Grade A developments in Delhi NCR. Since 2016, they have delivered projects that prioritize resident well-being, luxury, and community.</p>

            <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
            <p className="mb-4 text-gray-700"><b>Max Estate 360</b> is a luxury highrise in Sector 36A, Gurugram, at the confluence of Dwarka Expressway and CPR. The project features 3 & 4 BHK apartments with wraparound balconies, 60+ amenities, a car-free ground, and IGBC Platinum Pre-certification.</p>
            <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Land Parcel</td><td className="p-2">{maxEstate.projectSpecs?.landParcel || "11.8 Acres"}</td></tr>
                <tr><td className="font-semibold p-2">Towers</td><td className="p-2">{maxEstate.projectSpecs?.towers || "6"}</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Floors</td><td className="p-2">{maxEstate.projectSpecs?.floors || "17"}</td></tr>
                <tr><td className="font-semibold p-2">Club House</td><td className="p-2">{maxEstate.projectSpecs?.clubHouse || "Yes"}</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Parking</td><td className="p-2">{maxEstate.projectSpecs?.carParking || "3 Level Basement"}</td></tr>
                <tr><td className="font-semibold p-2">Possession</td><td className="p-2">{maxEstate.projectSpecs?.possession || "2028"}</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations & Floor Plans</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">2 BR + Store: 2,149 sq.ft.</Badge>
              <Badge variant="outline">3 BR + Servant: 2,611 sq.ft.</Badge>
              <Badge variant="outline">4 BR + Servant: 3,531 sq.ft.</Badge>
            </div>
            {/* Gallery - interactive carousel */}
            {maxEstate.images && maxEstate.images.length > 0 && (
              <Carousel images={maxEstate.images} />
            )}

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Key Amenities & Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              {maxEstate.amenities.map((a, i) => <li key={i}>{a}</li>)}
              <li>60+ well-being amenities, community clubhouse, sports block, primary healthcare, car-free ground</li>
              <li>IGBC Platinum Pre-certified, sustainable design</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location & Connectivity</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Sector 36A, Gurugram – confluence of Dwarka Expressway & CPR</li>
              <li>Excellent connectivity to Cyber City, Golf Course Road, IGI Airport</li>
              <li>Close to top schools, hospitals, and business districts</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Other Max Estates Projects</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Max Estate 128, Noida:</b> 4 & 5 BHK, 4,400–6,000 sq.ft., near Jewar Airport, metro, luxury amenities</li>
              <li><b>Max Towers, Noida:</b> Ready-to-move office spaces, 5,258–25,500 sq.ft., state-of-the-art facilities</li>
              <li><b>222 Rajpur, Dehradun:</b> 5-acre enclave, villas with private gardens, forest views, tranquil living</li>
            </ul>

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
              <div className="text-gray-200 mb-2">Our team can help you find the perfect property or answer your questions.</div>
            </div>
            <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
          </div>
          <div>
            <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/blog/how-to-verify-property-documents" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="/luxury-modern-residence.png" alt="How to Verify Property Documents" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Legal Guide</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">How to Verify Property Documents</div>
                    <div className="text-xs text-gray-500">A comprehensive guide to checking all essential documents before purchasing a property.</div>
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
  )
}
