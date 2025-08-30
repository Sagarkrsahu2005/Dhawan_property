"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PropertySearch from "@/components/property-search"

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
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src="/dhawan-properties-logo.png"
                alt="Dhawan Properties"
                className="h-12 w-auto"
              />
            </Link>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
