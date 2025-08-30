import { properties } from "../../../lib/property-data";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function BlogPost() {
  const sobhaAltus = properties.find((p) => p.title.toLowerCase().includes("sobha altus"));
  if (!sobhaAltus) return <div>Property data not found.</div>;
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-navy-900 hover:underline flex items-center mb-2">← Back to Blog</Link>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="bg-navy-900 text-white">Ultra Luxury</Badge>
            <span className="text-xs text-gray-500">Possession: <b>{sobhaAltus.projectSpecs?.possession || "2028-2031"}</b></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Sobha Altus, Sector 106, Gurgaon</h1>
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span>By <b>Sobha Limited</b></span>
            <span>•</span>
            <span>Updated Aug 29, 2025</span>
            <span>•</span>
            <span>Luxury Apartments</span>
          </div>
        </div>
        <Card className="shadow-lg border border-gray-100">
          <img
            src={sobhaAltus.image || sobhaAltus.images?.[0] || "/placeholder.jpg"}
            alt="Sobha Altus Exterior"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-2">About the Developer</h2>
            <p className="mb-4 text-gray-700">Sobha Limited is a leading real estate developer in India, renowned for its quality construction, innovative design, and timely delivery. With a legacy of excellence, Sobha brings its expertise to every project, setting new benchmarks in luxury living.</p>

            <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
            <p className="mb-4 text-gray-700"><b>Sobha Altus</b> is an ultra-luxury project spread across <b>{sobhaAltus.projectSpecs?.landParcel || "5.51"} acres</b> with <b>{sobhaAltus.projectSpecs?.towers || "3"} towers</b>, offering <b>293</b> exclusive residences. The project features contemporary “Wave Style” architecture, biophilic design, wraparound balconies, and a grand drop-off experience. Possession expected in <b>{sobhaAltus.projectSpecs?.possession || "2028-2031"}</b>.</p>
            <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Land Parcel</td><td className="p-2">{sobhaAltus.projectSpecs?.landParcel || "5.51"} Acres</td></tr>
                <tr><td className="font-semibold p-2">Towers</td><td className="p-2">{sobhaAltus.projectSpecs?.towers || "3"}</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">293</td></tr>
                <tr><td className="font-semibold p-2">Club House</td><td className="p-2">46,080.5 sq. ft.</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Parking</td><td className="p-2">3 Level Basement</td></tr>
                <tr><td className="font-semibold p-2">Possession</td><td className="p-2">{sobhaAltus.projectSpecs?.possession || "2028-2031"}</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">RERA</td><td className="p-2">RC/HARERA/GGM/828/560/2024/55</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations & Floor Plans</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Studio (1 BHK): 677 sq.ft.</Badge>
              <Badge variant="outline">3 BHK: ~2,870 sq.ft.</Badge>
              <Badge variant="outline">4 BHK: 3,361–4,077 sq.ft.</Badge>
              <Badge variant="outline">5 BHK Penthouse: Expansive layouts</Badge>
            </div>
            {/* Gallery - use images if available */}
            {sobhaAltus.images && sobhaAltus.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-6">
                {sobhaAltus.images.map((img, i) => (
                  <img key={i} src={img} alt={`Sobha Altus Gallery ${i + 1}`} className="rounded-lg" />
                ))}
              </div>
            )}

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Key Amenities & Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Club House:</b> 46,080.5 sq.ft. (Waverly Club)</li>
              <li><b>Swimming Pool:</b> Temperature-controlled indoor & infinity-edge pool</li>
              <li><b>Parking:</b> 3 Level Basement</li>
              <li>High-end gymnasium, squash & badminton courts, indoor games room</li>
              <li>Banquet halls, business lounge, co-working spaces, café, steam/sauna, massage therapy</li>
              <li>Jogging/cycling tracks, Zen garden, BBQ deck, yoga pavilion</li>
              <li>Kids’ playground, multi-sport courts, party lawns, pet park</li>
              <li>Biophilic design, green landscaping, energy-efficient building, IGBC Gold Pre-Certified</li>
              <li>24/7 CCTV, gated entry, smart elevators, video intercoms, emergency power backup, fire safety</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Nearby Places</h2>
            <table className="w-full text-xs border rounded-lg overflow-hidden mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2">Delhi Public School</td><td className="p-2">School</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Mount Carmel School</td><td className="p-2">School</td></tr>
                <tr><td className="p-2">The Shri Ram School</td><td className="p-2">School</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Euro International School</td><td className="p-2">School</td></tr>
                <tr><td className="p-2">Fortis Hospital</td><td className="p-2">Hospital</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Artemis Hospital</td><td className="p-2">Hospital</td></tr>
                <tr><td className="p-2">Medanta</td><td className="p-2">Hospital</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Ambience Mall</td><td className="p-2">Mall</td></tr>
                <tr><td className="p-2">Vegas Mall</td><td className="p-2">Mall</td></tr>
                <tr className="bg-gray-50"><td className="p-2">JW Marriott</td><td className="p-2">Hotel</td></tr>
                <tr><td className="p-2">Taj Vivanta</td><td className="p-2">Hotel</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location & Connectivity</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Located on <b>Dwarka Expressway, Sector 106</b></li>
              <li>Direct Delhi connectivity, NH-48, NE-4 Expressway</li>
              <li>30 min to IGI Airport</li>
              <li>Near Yashobhoomi Convention Centre, DDA Golf Course, Diplomatic Enclave 2</li>
            </ul>
            {/* Map Embed (if available) */}
            {sobhaAltus.mapEmbedUrl && (
              <div className="w-full h-56 rounded-lg overflow-hidden mb-6">
                <iframe
                  src={sobhaAltus.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sobha Altus Location"
                ></iframe>
              </div>
            )}

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment & Payment Plan</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Studio: Starting ₹1.76 Cr</li>
              <li>3 BHK: Starting ₹6.5 Cr</li>
              <li>4 BHK: ₹6.7–9.94 Cr</li>
              <li>5 BHK Penthouse: ₹10 Cr+</li>
              <li>Flexible payment options, RERA registered</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Why Choose Sobha Altus?</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Developed by a trusted brand with a legacy of excellence</li>
              <li>Ultra-premium amenities & finishes</li>
              <li>Prime location, high investment potential</li>
              <li>Future-ready with smart home features and sustainable design</li>
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
              <Link href="/blog/neighborhood-checklist-before-you-buy" className="block group">
                <Card className="hover:shadow-lg transition-all overflow-hidden">
                  <img src="/comfortable-family-house.png" alt="Neighborhood Checklist Before You Buy" className="w-full h-32 object-cover" />
                  <CardContent className="p-4">
                    <Badge className="bg-navy-900 text-white mb-2">Buying Guide</Badge>
                    <div className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-1">Neighborhood Checklist Before You Buy</div>
                    <div className="text-xs text-gray-500">Essential factors to evaluate when choosing a neighborhood.</div>
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
