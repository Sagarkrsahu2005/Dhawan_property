"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PropertySearch from "@/components/property-search"

// Custom SVG Icons for Social Media
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Text */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src="/dhawan-properties-logo.png"
                  alt="Dhawan Properties"
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="/" className="ml-2 text-left hover:opacity-80 transition-opacity">
                <div className="font-bold text-l text-navy-900 leading-tight">DHAWAN PROPERTIES</div>
                <div className="text-sm text-gray-700 leading-tight">Famous For Fair Deals</div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href) ? "text-navy-900 font-semibold" : "text-gray-700 hover:text-navy-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center">
            <PropertySearch />
          </div>

          {/* Social Media Icons - Desktop Only */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://www.facebook.com/dhawanpropertis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 group"
              title="Follow us on Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/dhawanproperties2019?igsh=MWs5emJ5aWdoNWxjZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-pink-600 hover:text-pink-700 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-200 group"
              title="Follow us on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Call Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <div className="lg:hidden">
              <PropertySearch isMobile />
            </div>

            <a href="tel:+919999628400">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-navy-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-navy-900 bg-gray-50 font-semibold"
                      : "text-gray-700 hover:text-navy-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Social Media Links - Mobile */}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-gray-500 mb-3">Follow Us</p>
                  <div className="flex space-x-6">
                    <a
                      href="https://www.facebook.com/dhawanpropertis"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors py-2"
                    >
                      <FacebookIcon className="w-6 h-6" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/dhawanproperties2019?igsh=MWs5emJ5aWdoNWxjZg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 text-pink-600 hover:text-pink-700 transition-colors py-2"
                    >
                      <InstagramIcon className="w-6 h-6" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
