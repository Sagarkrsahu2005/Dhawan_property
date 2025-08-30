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
  const signatureTwinProperty = properties.find((p) => 
    p.title.toLowerCase().includes("signature") && p.title.toLowerCase().includes("twin")
  );
  
  // Use luxury images for Signature Global Twin Tower DXP
  const luxuryImages = [
    "/luxury-modern-residence.png",
    "/modern-apartment-building.png",
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
              <Badge className="bg-navy-900 text-white">Iconic Twin Towers</Badge>
              <span className="text-xs text-gray-500">RERA: <b>RC/REP/HARERA/GGM/866/598/2024/93</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Signature Global Twin Tower DXP Iconic Luxury Residences</h1>
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
              src={signatureTwinProperty?.image || "/luxury-modern-residence.png"}
              alt="Signature Global Twin Tower DXP Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Signature Global Twin Tower DXP: Architectural Masterpiece</h2>
              <p className="mb-4 text-gray-700">Signature Global Twin Tower DXP, located in Sector 84, Gurugram, is an iconic luxury residential project that aims to redefine premium living in the National Capital Region (NCR). Situated along the rapidly developing Dwarka Expressway, this project offers a blend of sophistication, modern design, and world-class amenities.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Developer</td><td className="p-2">Signature Global</td></tr>
                  <tr><td className="font-semibold p-2">Location</td><td className="p-2">Sector 84, Dwarka Expressway, Gurugram</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Area</td><td className="p-2">5 Acres</td></tr>
                  <tr><td className="font-semibold p-2">Towers</td><td className="p-2">2 high-rise towers (45 floors each)</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">600+ luxury apartments and penthouses</td></tr>
                  <tr><td className="font-semibold p-2">RERA Registration</td><td className="p-2">RC/REP/HARERA/GGM/866/598/2024/93</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Floor Height</td><td className="p-2">Approximately 12 feet</td></tr>
                  <tr><td className="font-semibold p-2">Apartments per Floor</td><td className="p-2">4 apartments (exclusivity ensured)</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Unit Types and Sizes</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">3 BHK: ~2,650 sq.ft.</Badge>
                <Badge variant="outline">3.5 BHK: ~2,980 sq.ft.</Badge>
                <Badge variant="outline">4.5 BHK: ~3,785 sq.ft.</Badge>
                <Badge variant="outline">Penthouses: Custom sizes</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design & Features</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Grand Entrance Lobbies:</b> Triple-height lobbies designed for grandeur</li>
                <li><b>Private Elevators:</b> Exclusive elevator access for select apartments</li>
                <li><b>Expansive Balconies:</b> Large balconies with panoramic cityscape views</li>
                <li><b>Sustainability Focus:</b> Eco-friendly materials, rainwater harvesting, energy-efficient systems</li>
                <li><b>Smart Home Features:</b> Complete home automation for lighting, HVAC, and appliances</li>
                <li><b>Biophilic Design:</b> Incorporation of natural elements throughout the development</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location & Connectivity</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway:</b> Direct access for seamless connectivity</li>
                <li><b>NH-8:</b> Just a few minutes away connecting Delhi to Jaipur</li>
                <li><b>Proposed Metro Station:</b> Enhanced connectivity via Delhi Metro network</li>
                <li><b>Educational Institutions:</b> DPS, Euro International School, Suncity School nearby</li>
                <li><b>Healthcare:</b> Close to Medanta, Artemis, and Fortis hospitals</li>
                <li><b>Shopping & Entertainment:</b> South Point Mall, Omaxe Mall, Ardee Mall within reach</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={signatureTwinProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">The Gem Clubhouse & Amenities</h2>
              <p className="mb-2 text-gray-700">Signature Global Twin Tower DXP boasts world-class amenities spanning over 20,000+ sq. ft.:</p>
              
              <h3 className="text-md font-bold text-navy-900 mb-2">Fitness & Wellness:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Fully equipped gymnasium with modern equipment</li>
                <li>Yoga and meditation center for mindfulness</li>
                <li>Spa and wellness facilities</li>
                <li>Multiple swimming pools including heated lap pool</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Sports & Recreation:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>Badminton courts, squash courts, and multi-purpose sports hall</li>
                <li>Tennis court and dedicated jogging track</li>
                <li>Children's play area with safe, age-appropriate equipment</li>
                <li>Landscaped gardens and green walkways</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Security & Convenience:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li>5-Tier security system with surveillance and access control</li>
                <li>High-speed elevators for quick vertical transportation</li>
                <li>100% power backup for uninterrupted services</li>
                <li>Multi-purpose hall for social events and gatherings</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: Signature Global</h2>
              <p className="mb-4 text-gray-700">Signature Global has built a strong reputation for delivering quality projects on time with innovative approach to real estate. Known for their attention to detail and customer-centric approach, Signature Global has established itself as a trusted developer in the luxury residential segment of the NCR region.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Potential</h2>
              <p className="mb-4 text-gray-700">Signature Global Twin Tower DXP represents a solid investment opportunity with growing demand for luxury housing in Gurugram, high rental yield potential due to premium features and prime location, and the strong reputation of Signature Global for quality delivery and customer satisfaction.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Interested in Iconic Twin Tower Living?</div>
                <div className="text-gray-200 mb-2">Experience architectural brilliance with luxury amenities and prime location.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/signature-global-deluxe-dxp-sector-37d-luxury-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://risehomesholding.com/wp-content/uploads/2025/01/de-luxe%2037d.webp" alt="Signature Global Deluxe DXP" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Ultra-Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Signature Global Deluxe DXP</div>
                      <div className="text-xs text-gray-500">Another premium project by Signature Global in Sector 37D.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/smartworld-one-dxp-sector-113" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-3.jpeg" alt="Smartworld One DXP" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Modern Luxury</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Smartworld One DXP</div>
                      <div className="text-xs text-gray-500">Premium residential complex in Sector 113 with smart features.</div>
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
