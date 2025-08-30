"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
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
  const elanProperty = properties.find((p) => 
    p.title.toLowerCase().includes("elan") && p.title.toLowerCase().includes("presidential")
  );
  
  // Use luxury images if Elan property not found in data
  const luxuryImages = [
    "/luxury-villa-garden-pool.png",
    "/luxury-modern-residence.png",
    "/modern-villa-floor-plan.png",
    "/comfortable-family-house.png"
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
            <span className="text-xs text-gray-500">RERA: <b>101 of 2022</b></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Elan The Presidential Sector 106-Top 20 Luxurious Apartments</h1>
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
            src={elanProperty?.image || "/luxury-villa-garden-pool.png"}
            alt="Elan The Presidential Exterior"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-2">Elan The Presidential: A Pinnacle of Luxury Living</h2>
            <p className="mb-4 text-gray-700">Elan The Presidential is a premier residential project situated in Sector 106, Gurgaon, along the rapidly developing Dwarka Expressway. Developed by Elan Limited, renowned for its commitment to quality and luxury, this project offers an unparalleled living experience for discerning homeowners.</p>

            <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
            <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Elan Limited</td></tr>
                <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 106, Dwarka Expressway, Gurgaon</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Property Type</td><td className="p-2">Luxury Apartments and Penthouses</td></tr>
                <tr><td className="font-semibold p-2">Total Area</td><td className="p-2">Approximately 30 acres</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Configuration</td><td className="p-2">3, 4, and 5 BHK units</td></tr>
                <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">101 of 2022</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Unit Configurations & Sizes</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">3 BHK: 2,500 sq.ft.</Badge>
              <Badge variant="outline">4 BHK: 3,200 sq.ft.</Badge>
              <Badge variant="outline">5 BHK: 4,499 sq.ft.</Badge>
            </div>

            {/* Gallery - interactive carousel */}
            <Carousel images={elanProperty?.images || luxuryImages} />

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Excellence</h2>
            <p className="mb-4 text-gray-700">Designed by the esteemed architectural firm UHA London, Elan The Presidential showcases contemporary aesthetics combined with functional design. The development emphasizes expansive balconies, high ceilings, and open spaces, ensuring ample natural light and ventilation. The use of premium materials and finishes further enhances the luxurious appeal of the residences.</p>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Connectivity:</b> Situated along the Dwarka Expressway, offering seamless connectivity to Delhi and Gurgaon</li>
              <li><b>IGI Airport:</b> Approximately 20-minute drive</li>
              <li><b>Cyber Hub and Udyog Vihar:</b> Around 15 minutes by car</li>
              <li><b>Ambience Mall:</b> Just a short drive away for shopping and entertainment</li>
              <li><b>Educational Institutions:</b> Reputed schools and colleges in close vicinity</li>
              <li><b>Healthcare Facilities:</b> Top-tier hospitals easily accessible</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">World-Class Amenities</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Clubhouse:</b> State-of-the-art facility with various recreational options</li>
              <li><b>Swimming Pools:</b> Olympic-sized pool and indoor heated pool</li>
              <li><b>Fitness Center:</b> Fully equipped gymnasium for health enthusiasts</li>
              <li><b>Sports Facilities:</b> Tennis and badminton courts</li>
              <li><b>Children's Play Area:</b> Dedicated spaces for young residents</li>
              <li><b>Landscaped Greens:</b> Extensive central greens and jogging tracks</li>
              <li><b>Spa and Wellness Center:</b> Facilities for relaxation and rejuvenation</li>
              <li><b>High-Speed Elevators:</b> Quick and efficient movement within towers</li>
              <li><b>24/7 Security:</b> Advanced CCTV surveillance and biometric access</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Special Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Private Terraces:</b> Select units offer private terraces with panoramic views</li>
              <li><b>Smart Home Automation:</b> Modern automation systems for enhanced convenience</li>
              <li><b>Dedicated Parking:</b> Ample parking space with 3-level basement parking</li>
              <li><b>Concierge Services:</b> Personalized services for residents' daily needs</li>
              <li><b>Pet-Friendly:</b> Designated pet zones for animal lovers</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Potential</h2>
            <p className="mb-4 text-gray-700">Gurgaon has consistently been a hotspot for real estate investments, with properties in Sector 106 witnessing steady appreciation. The strategic location, coupled with the luxurious offerings of Elan The Presidential, makes it a lucrative investment opportunity. The ongoing development of the Dwarka Expressway is expected to further enhance connectivity and infrastructure, positively impacting property values in the vicinity.</p>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Developer's Commitment</h2>
            <p className="mb-4 text-gray-700">Elan Limited stands committed to delivering projects that exemplify luxury, quality, and timely possession. With a track record of successful developments, the company ensures that every project meets the highest standards of construction and design.</p>

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
              <Link href="/blog/sobha-altus-sector-106-luxurious-apartments-in-dwarka-express" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.jpg" alt="Sobha Altus Sector 106" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Luxury Project</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Sobha Altus Sector 106 Luxurious Apartments</div>
                    <div className="text-xs text-gray-500">Ultra-luxury residences by Sobha Limited in Dwarka Expressway.</div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/max-estate-360-top-20-luxurious-apartments" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-1.jpg" alt="Max Estate 360" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Luxury Highrise</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Max Estate 360-Top 20 Luxurious Apartments</div>
                    <div className="text-xs text-gray-500">Luxury highrise by Max Estates with 60+ amenities.</div>
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
