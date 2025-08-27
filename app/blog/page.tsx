import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Clock, User, Search, Calendar, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "how-to-verify-property-documents",
    title: "How to Verify Property Documents",
    excerpt:
      "A comprehensive guide to checking all essential documents before purchasing a property. Learn about title deeds, NOCs, approvals, and more to ensure a safe transaction.",
    image: "/modern-apartment-building.png",
    author: "Rajesh Dhawan",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Legal Guide",
    featured: true,
  },
  {
    id: 2,
    slug: "neighborhood-checklist-before-you-buy",
    title: "Neighborhood Checklist Before You Buy",
    excerpt:
      "Essential factors to evaluate when choosing a neighborhood - from connectivity and amenities to future development plans and safety considerations.",
    image: "/comfortable-family-house.png",
    author: "Priya Sharma",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    category: "Buying Guide",
    featured: true,
  },
  {
    id: 3,
    slug: "home-loan-basics-for-first-time-buyers",
    title: "Home Loan Basics for First-Time Buyers",
    excerpt:
      "Everything you need to know about home loans - eligibility criteria, documentation, interest rates, and tips to get the best deal from banks.",
    image: "/luxury-modern-residence.png",
    author: "Amit Kumar",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "Finance",
    featured: false,
  },
  {
    id: 4,
    slug: "new-launch-vs-resale-pros-and-cons",
    title: "New Launch vs. Resale: Pros & Cons",
    excerpt:
      "Detailed comparison between new launch and resale properties covering pricing, possession timeline, customization options, and investment potential.",
    image: "/luxury-villa-garden-pool.png",
    author: "Neha Gupta",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "Investment",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              <Link href="/blog" className="text-navy-900 font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-navy-900 transition-colors">
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
            <span className="text-navy-900 font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Real Estate Insights</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Expert advice, market insights, and practical guides to help you make informed real estate decisions.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">Featured</Badge>
                  <Badge className="absolute top-4 right-4 bg-navy-900 text-white">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.publishDate).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="bg-navy-900 hover:bg-navy-800 text-white group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900">All Articles</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Latest</option>
                <option>Most Popular</option>
                <option>Category</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-navy-900">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{new Date(post.publishDate).toLocaleDateString()}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="bg-navy-900 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Real Estate Insights</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest market trends, investment tips, and property guides
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                />
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 whitespace-nowrap">Subscribe Now</Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
            </CardContent>
          </Card>
        </section>
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
