import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white py-10">
  <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="mb-6">
          <Link href="/blog" className="text-sm text-navy-900 hover:underline flex items-center mb-2">← Back to Blog</Link>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="bg-navy-900 text-white">Luxury Project</Badge>
            <span className="text-xs text-gray-500">Possession: <b>2027-2028</b></span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2 leading-tight">Puri Diplomatic Residences, Sector 111, Gurgaon</h1>
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span>By <b>Kapil Dhawan</b></span>
            <span>•</span>
            <span>Updated Aug 29, 2025</span>
            <span>•</span>
            <span>Luxury Apartments</span>
          </div>
        </div>
        <Card className="shadow-lg border border-gray-100">
          <img
            src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Gurgaon-r3iu9xbt8yttnztxwxifnsxsnk0k6x5h1tzyc8ylck.webp"
            alt="Puri Diplomatic Residences Exterior"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-2">About the Developer</h2>
            <p className="mb-4 text-gray-700">Puri Constructions is a renowned name with a legacy of over 50 years, known for premium real estate developments across North India. Their commitment to quality, innovation, and customer satisfaction is reflected in every project.</p>

            <h2 className="text-xl font-bold text-navy-900 mb-2">Project Overview</h2>
            <p className="mb-4 text-gray-700"><b>Puri Diplomatic Residences</b> is a <b>7-acre</b> luxury project with <b>6 towers</b> (5 luxury, 1 super luxury), 3-level basement parking, and <b>2 swimming pools</b> (rooftop & indoor). Designed by <b>Arcop Architect</b>, it offers <b>692</b> apartments (3BHK: 628, 4BHK: 64) with world-class amenities and premium finishes. Possession expected in <b>2027-2028</b>.</p>
            <table className="w-full text-sm mb-6 border rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Land Parcel</td><td className="p-2">7 Acres</td></tr>
                <tr><td className="font-semibold p-2">Towers</td><td className="p-2">6 (5 Luxury, 1 Super Luxury)</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Total Units</td><td className="p-2">692 (3BHK: 628, 4BHK: 64)</td></tr>
                <tr><td className="font-semibold p-2">Club House</td><td className="p-2">65,000 + 35,000 sq. ft.</td></tr>
                <tr className="bg-gray-50"><td className="font-semibold p-2">Parking</td><td className="p-2">3 Level Basement</td></tr>
                <tr><td className="font-semibold p-2">Possession</td><td className="p-2">2027-2028</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Apartment Configurations & Floor Plans</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">3 BHK + Study: 2282/2380 sq.ft.</Badge>
              <Badge variant="outline">3 BHK + Servant: 2440 sq.ft.</Badge>
              <Badge variant="outline">4 BHK: 3475 sq.ft.</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png" alt="3 BHK + Study Room" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png" alt="3 BHK + Study Room" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png" alt="3 BHK + Servant" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png" alt="4 BHK + Utility" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png" alt="4 BHK + Utility" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png" alt="4 BHK + Utility" className="rounded-lg" />
            </div>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Key Amenities & Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li><b>Club House:</b> 65,000+35,000 sq.ft. (Kids + Adults)</li>
              <li><b>Swimming Pools:</b> Rooftop & Indoor</li>
              <li><b>Parking:</b> 3 Level Basement</li>
              <li><b>VRV Air Conditioning</b>, <b>Marble Flooring</b></li>
              <li>Multiple Lifts, Security, Power Backup</li>
              <li>Designed by <b>Arcop Architect</b></li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Gallery</h2>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Gurgaon-r3iu9xbt8yttnztxwxifnsxsnk0k6x5h1tzyc8ylck.webp" alt="Exterior" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/proj_img-47043_4-r3iu5770vycxakp2idyymhvd4tb4hpe22fx2h5yums.jpg" alt="Tower View" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/projGal-2-r3iu5696p4bmyyqfnvkc203wjffra0abqb9kzw08t0.jpg" alt="Amenities" className="rounded-lg" />
              <img src="https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/fe8382abd8f83f4d6a3f9a5f106e7e-r3iuuu8jb9ghzngasgyln0y0h6xkgh6gxcjvqvy8wk.jpg" alt="Clubhouse" className="rounded-lg" />
            </div>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Nearby Places</h2>
            <table className="w-full text-xs border rounded-lg overflow-hidden mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-2">DPS</td><td className="p-2">School</td><td className="p-2">3 KM</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Gyannanda School</td><td className="p-2">School</td><td className="p-2">5 KM</td></tr>
                <tr><td className="p-2">S N International School</td><td className="p-2">School</td><td className="p-2">4 KM</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Prime Scholars School</td><td className="p-2">School</td><td className="p-2">2 KM</td></tr>
                <tr><td className="p-2">Medanta Hospital</td><td className="p-2">Hospital</td><td className="p-2">10 KM</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Forties Hospital</td><td className="p-2">Hospital</td><td className="p-2">10 KM</td></tr>
                <tr><td className="p-2">Manipal Hospital</td><td className="p-2">Hospital</td><td className="p-2">8 KM</td></tr>
                <tr className="bg-gray-50"><td className="p-2">Sri Balaji’s Multi Hospital</td><td className="p-2">Hospital</td><td className="p-2">4 KM</td></tr>
              </tbody>
            </table>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Location & Connectivity</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Located on <b>Dwarka Expressway, Sector 111</b></li>
              <li>3.5 km from Dwarka Sector 21 Metro Station</li>
              <li>10 min to IGI Airport</li>
              <li>Close to Cyber City, top schools & hospitals</li>
              <li>Proximity to Diplomatic Enclave, Bharat Vandana Park, Golf Course</li>
            </ul>
            <div className="w-full h-56 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.33122913294!2d77.027306!3d28.519304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1963e8b8a9e7%3A0x3422ac343cba04fe!2sPuri%20Diplomatic%20Greens!5e1!3m2!1sen!2sus!4v1756038258325!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puri Diplomatic Residences Location"
              ></iframe>
            </div>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Investment & Payment Plan</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Flexible payment options, including construction-linked plans</li>
              <li>Booking amount: <b>₹20 Lacs</b></li>
              <li>3 BHK: <b>2282–2440 sq. ft.</b> | <b>₹3.95–4.69 Cr</b></li>
              <li>4 BHK: <b>Up to 3475 sq. ft.</b> | <b>On Request</b></li>
              <li>High resale and rental potential due to prime location</li>
            </ul>

            <h2 className="text-lg font-bold text-navy-900 mb-2 mt-6">Why Choose Puri Diplomatic Residences?</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
              <li>Developed by a trusted name with a <b>50+ year legacy</b></li>
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
