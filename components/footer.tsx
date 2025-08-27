import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    "Property Buying",
    "Property Selling",
    "Investment Consulting",
    "Legal Documentation",
    "Property Valuation",
    "Home Loans Assistance",
  ]

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/rera-info", label: "RERA Information" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dhawan Properties</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in real estate with verified listings, transparent dealings, and expert guidance for
              over 15 years.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919999628400" className="text-gray-400 hover:text-white transition-colors block">
                    +91 99996-28400
                  </a>
                  <a href="tel:+918882568981" className="text-gray-400 hover:text-white transition-colors block">
                    +91 8882-568981
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:Dhawanproperties2019@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    Dhawanproperties2019@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="mb-3">
                    <p className="text-gray-300 font-medium mb-1">Head Office</p>
                    <p className="text-gray-400 text-sm">
                      203, 2nd Floor, Express Building,<br />
                      H-BIk Mkt, Ashok Vihar Ph.-1,<br />
                      New Delhi-110052
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Branch Office</p>
                    <p className="text-gray-400 text-sm">
                      B-1602 Oyster Grande, Sector 102,<br />
                      Near DSP School, Near Dwarka Express
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Working Hours</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Tuesday - Sunday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Dhawan Properties. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RERA & Compliance Info */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-xs text-gray-500 text-center">
              <p className="mb-2">
                RERA Registration No: RERA/GGM/2023/001234 | Real Estate Regulatory Authority, Haryana
              </p>
              <p>
                Dhawan Properties is a RERA registered real estate consultant. All properties listed are verified and
                compliant with RERA regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
