import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Award, Building, Shield, CheckCircle, Star, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Rajesh Dhawan",
    role: "Founder & CEO",
    experience: "15+ Years",
    image: "/professional-real-estate-agent.png",
    specialization: "Luxury Properties & Investment",
  },
  {
    name: "Priya Sharma",
    role: "Senior Property Consultant",
    experience: "8+ Years",
    image: "/professional-real-estate-agent.png",
    specialization: "Residential Sales & Leasing",
  },
  {
    name: "Amit Kumar",
    role: "Commercial Property Expert",
    experience: "10+ Years",
    image: "/professional-real-estate-agent.png",
    specialization: "Commercial & Industrial",
  },
  {
    name: "Neha Gupta",
    role: "Legal & Documentation Head",
    experience: "12+ Years",
    image: "/professional-real-estate-agent.png",
    specialization: "Property Law & RERA Compliance",
  },
]

const certifications = [
  { name: "RERA Registered", id: "RERA/GGM/2023/001234" },
  { name: "Real Estate Institute Certified", id: "REI/2023/5678" },
  { name: "ISO 9001:2015 Certified", id: "ISO/9001/2023" },
  { name: "Member - CREDAI", id: "CREDAI/NCR/2023" },
]

const serviceLocations = ["Gurgaon", "Delhi", "Noida", "Faridabad", "Greater Noida", "Manesar"]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-navy-900">
                Dhawan Properties
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-navy-900 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-navy-900 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-navy-900 font-semibold">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-navy-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-navy-900 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-navy-900 font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Dhawan Properties</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building trust through transparency, delivering excellence through experience, and creating lasting
              relationships in the real estate industry since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">100%</div>
              <div className="text-gray-600">RERA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2009 by Rajesh Dhawan, Dhawan Properties began with a simple vision: to make real estate
                transactions transparent, trustworthy, and stress-free for every client. What started as a small family
                business has grown into one of the most respected real estate consultancies in the NCR region.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've built our reputation on three core principles: integrity in every deal, expertise
                in market knowledge, and commitment to client satisfaction. Our team of seasoned professionals brings
                decades of combined experience to help you make informed property decisions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to have facilitated over 500 successful property transactions, helped 1000+ families
                find their dream homes, and maintained a 100% RERA compliance record. Our journey continues with the
                same passion and dedication that started it all.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/luxury-modern-residence.png" alt="Modern office building" className="rounded-lg shadow-lg" />
              <img src="/comfortable-family-house.png" alt="Team meeting" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional real estate services through transparency, integrity, and expertise, making
                property transactions seamless and rewarding for every client.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-navy-900" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred real estate partner in the NCR region, known for our ethical
                practices and client-centric approach.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, transparency, client satisfaction, market expertise, and long-term relationships form the
                foundation of everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with expert guidance and personalized service
              throughout your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-2">{member.role}</p>
                <Badge variant="secondary" className="mb-3">
                  {member.experience}
                </Badge>
                <p className="text-sm text-gray-600">{member.specialization}</p>
                <div className="flex justify-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Trust & Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our certifications and affiliations demonstrate our commitment to professional excellence and regulatory
              compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.id}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-gold-500 mr-3" />
                <h3 className="text-xl font-semibold text-navy-900">Awards & Recognition</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Best Real Estate Consultant 2023</li>
                <li>• Customer Choice Award 2022</li>
                <li>• Excellence in Service Award 2021</li>
                <li>• Top Performer - CREDAI 2020</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-navy-900 mr-3" />
                <h3 className="text-xl font-semibold text-navy-900">Media Coverage</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Featured in Times of India</li>
                <li>• Economic Times Interview</li>
                <li>• Hindustan Times Article</li>
                <li>• Real Estate Today Magazine</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-navy-900">RERA Compliance</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 100% RERA Registered Properties</li>
                <li>• Verified Documentation</li>
                <li>• Transparent Pricing</li>
                <li>• Legal Compliance Assured</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Service Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive real estate services across the National Capital Region (NCR).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceLocations.map((location, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-navy-900 mx-auto mb-2" />
                <h3 className="font-semibold text-navy-900">{location}</h3>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-navy-900 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
              <p className="text-gray-200 mb-6">
                Experience the difference of working with a trusted real estate partner. Contact us today to discuss
                your property needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">Get In Touch</Button>
                </Link>
                <Link href="/properties">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                  >
                    View Properties
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dhawan Properties</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in real estate with verified listings and transparent dealings.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Investment Consulting</li>
                <li>Legal Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@dhawanproperties.in</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span>Sector 14, Gurgaon, Haryana 122001</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dhawan Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
