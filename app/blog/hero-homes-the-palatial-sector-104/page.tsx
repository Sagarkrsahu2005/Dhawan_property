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
  const heroProperty = properties.find((p) => 
    p.title.toLowerCase().includes("hero") && p.title.toLowerCase().includes("palatial")
  );
  
  // Use luxury images for Hero Homes The Palatial
  const luxuryImages = [
    "/luxury-villa-garden-pool.png",
    "/luxury-modern-residence.png",
    "/comfortable-family-house.png",
    "/modern-apartment-building.png",
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
              <Badge className="bg-navy-900 text-white">European-Themed</Badge>
              <span className="text-xs text-gray-500">RERA: <b>RC/REP/HARERA/GGM/907/639/2025/09</b></span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Hero Homes The Palatial Sector 104 Ultra-Luxury European Residences</h1>
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
              src={heroProperty?.image || "/luxury-villa-garden-pool.png"}
              alt="Hero Homes The Palatial Exterior"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-navy-900 mb-2">Hero Homes The Palatial: Epitome of Opulence and Sophistication</h2>
              <p className="mb-4 text-gray-700">Hero Homes The Palatial is an ultra-luxury residential project developed by Hero Realty, a prominent real estate arm of the renowned Hero Group. Located in Sector 104, Gurugram, along the Dwarka Expressway, this project epitomizes opulence and sophistication. With its European-themed architecture, state-of-the-art amenities, and strategic location, The Palatial offers a lifestyle that seamlessly blends comfort, convenience, and grandeur.</p>

              <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
              <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Project Name</td><td className="p-2">Hero Homes The Palatial</td></tr>
                  <tr><td className="font-semibold p-2">Developer</td><td className="p-2">Hero Realty (Hero Group)</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Location</td><td className="p-2">Sector 104, Dwarka Expressway, Gurugram</td></tr>
                  <tr><td className="font-semibold p-2">Land Area</td><td className="p-2">Approximately 11 acres</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">650 exclusive residences</td></tr>
                  <tr><td className="font-semibold p-2">Towers</td><td className="p-2">5 high-rise towers (up to 43 floors each)</td></tr>
                  <tr className="bg-gray-50"><td className="font-semibold p-2">RERA Registration</td><td className="p-2">RC/REP/HARERA/GGM/907/639/2025/09</td></tr>
                  <tr><td className="font-semibold p-2">Completion Date</td><td className="p-2">2029</td></tr>
                </tbody>
              </table>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Configuration & Specifications</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">3 BHK + Servant: 2,833 sq.ft.</Badge>
                <Badge variant="outline">4 BHK + Servant: 3,457 sq.ft.</Badge>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Architectural Design</h2>
              <p className="mb-4 text-gray-700">The Palatial boasts European-themed architecture, characterized by its grandeur and elegance. The development comprises five high-rise towers, each rising up to 43 floors, making it one of the tallest landmarks in the vicinity. The low-density design ensures exclusivity, with only four apartments per floor, allowing for ample natural light and ventilation. Each unit is a corner apartment, offering panoramic views of the surrounding landscape.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location Advantages</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Dwarka Expressway:</b> Direct access ensures seamless connectivity to Delhi and Gurugram</li>
                <li><b>Indira Gandhi International Airport:</b> 12 km distance</li>
                <li><b>Gurugram Railway Station:</b> 3 km connectivity</li>
                <li><b>Diplomatic Enclave:</b> 11 km proximity</li>
                <li><b>Dwarka Sector 21 Metro Station:</b> 12 km distance</li>
                <li><b>Educational Institutions:</b> Royal Oak International School and Shanti Niketan Public School nearby</li>
                <li><b>Shopping & Entertainment:</b> Surrounded by numerous malls, restaurants, and entertainment centers</li>
              </ul>

              {/* Gallery - interactive carousel with increased height */}
              <Carousel images={heroProperty?.images || luxuryImages} />

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Premium Amenities & Features</h2>
              <p className="mb-2 text-gray-700">Hero Homes The Palatial offers world-class amenities designed for luxury living:</p>
              
              <h3 className="text-md font-bold text-navy-900 mb-2">Clubhouse & Wellness (60,000 sq.ft.):</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Grand Double-Height Lobby:</b> Air-conditioned lobby exuding luxury and sophistication</li>
                <li>Branded gymnasium with modern equipment</li>
                <li>Temperature-controlled swimming pool</li>
                <li>Spa and sauna facilities</li>
                <li>Jogging and walking tracks</li>
                <li>Yoga and meditation zones</li>
                <li>Concierge and help desk services</li>
                <li>Retail, F&B, and entertainment area</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Smart Living Features:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Home Automation:</b> Smart control for lighting, climate, and security features</li>
                <li><b>High-Speed Elevators:</b> Five dedicated elevators for swift movement</li>
                <li><b>Five-Tier Security:</b> CCTV surveillance and manned entry points</li>
              </ul>

              <h3 className="text-md font-bold text-navy-900 mb-2">Green Spaces & Recreation:</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                <li><b>Open Green Spaces:</b> Approximately 70% of project area dedicated to greenery</li>
                <li>Kids' play zone with safe entertainment options</li>
                <li>Multiple sports courts and recreational areas</li>
                <li>Landscaped gardens and community spaces</li>
              </ul>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">🏗️ Developer Profile: Hero Realty</h2>
              <p className="mb-4 text-gray-700">Hero Realty is the real estate arm of the renowned Hero Group, known for their commitment to quality and innovation. With a legacy of excellence in various industries, Hero Group brings their expertise and trustworthiness to the real estate sector, ensuring timely delivery and superior construction quality in all their projects.</p>

              <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment Potential</h2>
              <p className="mb-4 text-gray-700">The Palatial is situated in a rapidly developing area with ongoing infrastructure projects, ensuring property appreciation and rental demand. The strategic location, coupled with the project's premium offerings and Hero Group's reputation, makes it an attractive option for both end-users and investors seeking luxury residential properties with strong growth potential.</p>

              <div className="mt-6 text-xs text-gray-400 text-center">
                For more details, contact <span className="font-semibold text-navy-900">Kapil Dhawan</span> at <a href="tel:+919999628400" className="underline">+91 99996-28400</a>
              </div>
            </CardContent>
          </Card>
          
          {/* Related Articles/CTA */}
          <div className="mt-12">
            <div className="bg-navy-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-lg font-bold mb-1">Experience European-Themed Luxury?</div>
                <div className="text-gray-200 mb-2">Discover opulent living spaces with world-class amenities by the trusted Hero Group.</div>
              </div>
              <a href="tel:+919999628400" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-2 rounded-lg transition">Call Now</a>
            </div>
            <div>
              <div className="text-lg font-bold text-navy-900 mb-4">Related Articles</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/ats-homekraft-sanctuary-105-luxurious-apartments" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/pzh8n6cdx58t4t82buhy.jpeg" alt="ATS HomeKraft Sanctuary" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Art Deco Living</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">ATS HomeKraft Sanctuary 105</div>
                      <div className="text-xs text-gray-500">Art Deco inspired luxury apartments in nearby Sector 105.</div>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/signature-global-twin-tower-dxp" className="block group">
                  <Card className="hover:shadow-lg transition-all overflow-hidden">
                    <img src="https://www.yhataw.com/wp-content/uploads/2024/12/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg" alt="Signature Global Twin Tower" className="w-full h-32 object-cover" />
                    <CardContent className="p-4">
                      <Badge className="bg-navy-900 text-white mb-2">Iconic Towers</Badge>
                      <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Signature Global Twin Tower DXP</div>
                      <div className="text-xs text-gray-500">Iconic twin towers with luxury residences in Sector 84.</div>
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
