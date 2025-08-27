"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          lookingFor: formData.purpose || undefined,
          budget: formData.budget || undefined,
          message: formData.message || undefined,
          page: "contact",
        }),
      })
      if (!res.ok) throw new Error("Failed to submit")
      setIsSubmitted(true)
      setFormData({ name: "", phone: "", email: "", purpose: "", budget: "", message: "" })
    } catch (err) {
      alert("Something went wrong. Please try again later.")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img 
                  src="/dhawan-properties-logo.png"
                  alt="Dhawan Properties"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-navy-900 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-navy-900 transition-colors">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-navy-900 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-navy-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-navy-900 font-semibold">
                Contact
              </Link>
            </div>
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+919999628400" className="text-white">Call Now</a>
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
            <span className="text-navy-900 font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to find your dream property? Get in touch with our expert team today. We're here to help you every
              step of the way.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-navy-900 hover:bg-navy-800 text-white">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Purpose *</label>
                        <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">Buy Property</SelectItem>
                            <SelectItem value="sell">Sell Property</SelectItem>
                            <SelectItem value="rent">Rent Property</SelectItem>
                            <SelectItem value="invest">Investment Consultation</SelectItem>
                            <SelectItem value="valuation">Property Valuation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                            <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                            <SelectItem value="200-500">₹2Cr - ₹5Cr</SelectItem>
                            <SelectItem value="500+">₹5Cr+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us about your requirements, preferred location, timeline, or any specific questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                        <div className="text-sm text-blue-700">
                          <p className="font-medium mb-1">Our Response Time Commitment:</p>
                          <p>
                            We'll respond to your inquiry within 2 hours during business hours (9 AM - 7 PM, Mon-Sat).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <MessageCircle className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                        <div className="text-sm text-gray-600">
                          <p className="font-medium mb-1">Privacy Assurance:</p>
                          <p>
                            Your information is secure with us. We never share your details with third parties and use
                            them solely for providing you with our real estate services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-navy-900 mt-1" />
                    <div>
                      <p className="font-semibold text-navy-900">Phone</p>
                      <a href="tel:+919999628400" className="text-gray-600 hover:text-navy-900 transition-colors block">
                        +91 99996-28400
                      </a>
                      <a href="tel:+918882568981" className="text-gray-600 hover:text-navy-900 transition-colors block">
                        +91 8882-568981
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-navy-900 mt-1" />
                    <div>
                      <p className="font-semibold text-navy-900">Email</p>
                      <a href="mailto:Dhawanproperties2019@gmail.com" className="text-gray-600 hover:text-navy-900 transition-colors">
                        Dhawanproperties2019@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-navy-900 mt-1" />
                    <div>
                      <div className="mb-3">
                        <p className="font-semibold text-navy-900">Head Office</p>
                        <p className="text-gray-600">
                          203, 2nd Floor, Express Building,<br />
                          H-BIk Mkt, Ashok Vihar Ph.-1,<br />
                          New Delhi-110052
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900">Branch Office</p>
                        <p className="text-gray-600">
                          B-1602 Oyster Grande, Sector 102,<br />
                          Near DSP School, Near Dwarka Express
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-navy-900 mt-1" />
                    <div>
                      <p className="font-semibold text-navy-900">Working Hours</p>
                      <p className="text-gray-600">Tuesday - Sunday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <a href="https://wa.me/919999628400" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+919999628400" className="flex-1">
                      <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Find Us</h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">New Delhi & Sector 102</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                  >
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg bg-navy-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/properties">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                    >
                      Browse Properties
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                  >
                    Schedule Site Visit
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                  >
                    Property Valuation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                  >
                    Investment Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

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
                  <a href="tel:+919999628400" className="hover:text-white transition-colors">+91 99996-28400</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:Dhawanproperties2019@gmail.com" className="hover:text-white transition-colors">Dhawanproperties2019@gmail.com</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-9 h-9 mr-2 mt-1" />
                  <span>203, 2nd Floor, Express Building,
                        H-BIk Mkt, Ashok Vihar Ph.-1,
                        New Delhi-110052</span>
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
