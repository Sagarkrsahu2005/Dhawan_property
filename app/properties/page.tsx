"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import { MapPin, Bed, Bath, Square, Phone, Mail, Filter, Grid, List, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

// Mock property data
const properties = [
  {
    id: 1,
    title: "Luxury Villa in Sector 47",

    location: "Sector 47, Gurgaon, Haryana",
    bedrooms: 4,
    bathrooms: 5,
    area: 3200,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "/luxury-villa-garden-pool.png",
    amenities: ["Swimming Pool", "Private Garden", "Parking (2 Cars)", "Home Gym", "24/7 Security", "Smart Home", "High Speed WiFi", "Power Backup", "Club House", "Kids Play Area"],
    description: "Experience luxury living at its finest in this stunning 4-bedroom villa located in the prestigious Sector 47 of Gurgaon. This contemporary home features spacious interiors, premium finishes, and world-class amenities."
  },
  {
    id: 2,
    title: "Premium Apartment in Dwarka",
    location: "Dwarka Sector 12, Delhi",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    yearBuilt: 2023,
    type: "residential",
    status: "ready",
    tag: "Ready to Move",
    image: "/modern-apartment-building.png",
    amenities: ["Gym", "Parking (1 Car)", "Security", "Elevator", "Garden", "Children's Play Area", "Community Hall", "Power Backup", "Water Supply", "Maintenance Staff"],
    description: "Modern 3BHK apartment in the heart of Dwarka with excellent connectivity to metro, airport, and shopping centers. Perfect for families looking for a ready-to-move-in property."
  },
  {
    id: 3,
    title: "Commercial Space in Cyber City",
    location: "Cyber City, Gurgaon, Haryana",
    bedrooms: 0,
    bathrooms: 2,
    area: 2500,
    yearBuilt: 2022,
    type: "commercial",
    status: "ready",
    tag: "Investment",
    image: "/modern-glass-office.png",
    amenities: ["Parking (4 Cars)", "Security", "Central AC", "Reception Area", "Conference Room", "High Speed Internet", "Power Backup", "Cafeteria", "24/7 Access", "Elevator"],
    description: "Prime commercial space in Cyber City, perfect for corporate offices, startups, or retail businesses. Excellent footfall and premium location."
  },
  {
    id: 4,
    title: "Penthouse Suite on Golf Course Road",
    location: "Golf Course Road, Gurgaon, Haryana",
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "Exclusive",
    image: "/luxury-modern-residence.png",
    amenities: ["Swimming Pool", "Private Gym", "Garden Terrace", "Parking (3 Cars)", "24/7 Security", "Smart Home System", "High Speed WiFi", "Power Backup", "Club House", "Wine Cellar", "Home Theater", "Servant Quarters"],
    description: "Ultra-luxurious penthouse with panoramic views of the golf course. Features premium finishes, smart home technology, and exclusive amenities for the discerning buyer."
  },
  {
    id: 5,
    title: "Family Home in Faridabad",
    location: "Sector 16A, Faridabad, Haryana",
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    yearBuilt: 2020,
    type: "residential",
    status: "resale",
    tag: "Best Value",
    image: "/comfortable-family-house.png",
    amenities: ["Garden", "Parking (1 Car)", "Security", "Power Backup", "Water Supply", "Children's Play Area", "Community Hall", "Maintenance Staff"],
    description: "Well-maintained family home in a peaceful neighborhood. Perfect for families looking for a comfortable living space with all basic amenities."
  },
  {
    id: 6,
    title: "Studio Apartment in Noida Extension",
    location: "Noida Extension, Greater Noida, UP",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    yearBuilt: 2023,
    type: "residential",
    status: "ready",
    tag: "Affordable",
    image: "/modern-studio-apartment.png",
    amenities: ["Gym", "Parking (1 Car)", "Security", "Elevator", "Garden", "Community Hall", "Power Backup", "Water Supply", "Maintenance Staff"],
    description: "Compact and modern studio apartment perfect for young professionals or as an investment property. Excellent connectivity to Delhi NCR."
  },
  {
    id: 7,
    title: "Corporate Office in Connaught Place",
    location: "Connaught Place, New Delhi",
    bedrooms: 0,
    bathrooms: 4,
    area: 3000,
    yearBuilt: 2021,
    type: "commercial",
    status: "ready",
    tag: "Prime Location",
    image: "/modern-glass-office.png",
    amenities: ["Parking (6 Cars)", "Security", "Central AC", "Reception Area", "Conference Room", "High Speed Internet", "Power Backup", "Cafeteria", "24/7 Access", "Elevator", "Meeting Rooms", "Executive Lounge"],
    description: "Premium corporate office space in the heart of Delhi's business district. Perfect for established companies looking for a prestigious address."
  },
  {
    id: 8,
    title: "Duplex Villa in Sector 56",
    location: "Sector 56, Gurgaon, Haryana",
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "Premium",
    image: "/luxury-villa-garden-pool.png",
    amenities: ["Swimming Pool", "Private Garden", "Parking (2 Cars)", "24/7 Security", "Home Gym", "Smart Home System", "High Speed WiFi", "Power Backup", "Club House", "Kids Play Area", "Servant Quarters"],
    description: "Spacious duplex villa with modern architecture and premium amenities. Perfect for large families who value luxury and comfort."
  },
  {
    id: 9,
    title: "Luxury Apartment in Vasant Vihar",
    location: "Vasant Vihar, New Delhi",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    yearBuilt: 2023,
    type: "residential",
    status: "ready",
    tag: "Luxury",
    image: "/luxury-modern-residence.png",
    amenities: ["Swimming Pool", "Gym", "Garden", "Parking (2 Cars)", "Security", "Smart Home", "High Speed WiFi", "Power Backup", "Club House", "Spa", "Restaurant", "Concierge Service"],
    description: "Ultra-luxurious apartment in one of Delhi's most prestigious neighborhoods. Features world-class amenities and services."
  },
  {
    id: 10,
    title: "Retail Space in Ambience Mall",
    location: "Ambience Mall, Gurgaon, Haryana",
    bedrooms: 0,
    bathrooms: 1,
    area: 1200,
    yearBuilt: 2022,
    type: "commercial",
    status: "ready",
    tag: "High Footfall",
    image: "/modern-glass-office.png",
    amenities: ["High Footfall", "Parking", "Security", "AC", "24/7 Access", "Elevator", "Loading Area", "Storage Space", "Customer Parking"],
    description: "Prime retail space in one of Gurgaon's most popular malls. Excellent for fashion, electronics, or food businesses."
  },
  {
    id: 11,
    title: "Townhouse in Sector 65",
    location: "Sector 65, Gurgaon, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    yearBuilt: 2023,
    type: "residential",
    status: "new-launch",
    tag: "Modern Living",
    image: "/comfortable-family-house.png",
    amenities: ["Garden", "Parking (2 Cars)", "Security", "Power Backup", "Water Supply", "Children's Play Area", "Community Hall", "Maintenance Staff", "Gym", "Swimming Pool"],
    description: "Modern townhouse with contemporary design and family-friendly amenities. Perfect for families who want space and privacy."
  },
  {
    id: 12,
    title: "Investment Property in Noida",
    location: "Sector 150, Noida, UP",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "Investment",
    image: "/modern-apartment-building.png",
    amenities: ["Gym", "Parking (1 Car)", "Security", "Elevator", "Garden", "Community Hall", "Power Backup", "Water Supply", "Maintenance Staff"],
    description: "Excellent investment opportunity in rapidly developing Noida. High rental yield potential and capital appreciation."
  },
  {
    id: 13,
    title: "Heritage Property in Old Delhi",
    location: "Chandni Chowk, Old Delhi",
    bedrooms: 6,
    bathrooms: 4,
    area: 5200,
    yearBuilt: 1950,
    type: "residential",
    status: "resale",
    tag: "Heritage",
    image: "/comfortable-family-house.png",
    amenities: ["Heritage Architecture", "Large Courtyard", "Parking (3 Cars)", "Security", "Garden", "Servant Quarters", "Storage Rooms", "Traditional Design"],
    description: "Rare heritage property in the heart of Old Delhi. Perfect for those who appreciate history and traditional architecture."
  },
  {
    id: 14,
    title: "Waterfront Villa in Greater Noida",
    location: "Greater Noida West, UP",
    bedrooms: 4,
    bathrooms: 5,
    area: 3600,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "Waterfront",
    image: "/luxury-villa-garden-pool.png",
    amenities: ["Waterfront View", "Swimming Pool", "Private Garden", "Parking (2 Cars)", "Security", "Smart Home", "High Speed WiFi", "Power Backup", "Club House", "Boat Jetty"],
    description: "Exclusive waterfront villa with stunning views and premium amenities. Perfect for those who love nature and luxury."
  },
  {
    id: 15,
    title: "Tech Hub Office Space",
    location: "DLF Cyber City, Gurgaon, Haryana",
    bedrooms: 0,
    bathrooms: 3,
    area: 2800,
    yearBuilt: 2023,
    type: "commercial",
    status: "ready",
    tag: "Tech Ready",
    image: "/modern-glass-office.png",
    amenities: ["High Speed Internet", "Parking (5 Cars)", "Security", "Central AC", "Conference Rooms", "Collaboration Spaces", "Cafeteria", "24/7 Access", "Elevator", "Tech Support"],
    description: "Modern office space designed for tech companies with high-speed internet, collaboration areas, and modern amenities."
  }
]

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")
  const [status, setStatus] = useState("all")

  const [bedrooms, setBedrooms] = useState("all")
  const [yearBuilt, setYearBuilt] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Apply filters
  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = propertyType === "all" || property.type === propertyType
      const matchesLocation = location === "all" || property.location.toLowerCase().includes(location.toLowerCase())
      const matchesStatus = status === "all" || property.status === status

      const matchesBedrooms =
        bedrooms === "all" ||
        (bedrooms === "studio" && property.bedrooms <= 1) ||
        (bedrooms === "1" && property.bedrooms === 1) ||
        (bedrooms === "2" && property.bedrooms === 2) ||
        (bedrooms === "3" && property.bedrooms === 3) ||
        (bedrooms === "4+" && property.bedrooms >= 4)

      const matchesYearBuilt =
        yearBuilt === "all" ||
        (yearBuilt === "2020-2024" && property.yearBuilt >= 2020) ||
        (yearBuilt === "2015-2019" && property.yearBuilt >= 2015 && property.yearBuilt <= 2019) ||
        (yearBuilt === "2010-2014" && property.yearBuilt >= 2010 && property.yearBuilt <= 2014) ||
        (yearBuilt === "pre-2010" && property.yearBuilt < 2010)

      return matchesSearch && matchesType && matchesLocation && matchesStatus && matchesBedrooms && matchesYearBuilt
    })

    // Apply sorting
    switch (sortBy) {

      case "area-large":
        filtered.sort((a, b) => b.area - a.area)
        break
      case "area-small":
        filtered.sort((a, b) => a.area - b.area)
        break
      case "year-newest":
        filtered.sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
      case "year-oldest":
        filtered.sort((a, b) => a.yearBuilt - b.yearBuilt)
        break
      default:
        // newest - keep original order
        break
    }

    setFilteredProperties(filtered)
  }



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
              <Link href="/properties" className="text-navy-900 font-semibold">
                Properties
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-navy-900 transition-colors">
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
            <span className="text-navy-900 font-medium">Properties</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-navy-900 mb-2">Properties</h1>
            <p className="text-gray-600">Discover your perfect property from our verified listings</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Filters</h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search properties..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="gurgaon">Gurgaon</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="noida">Noida</SelectItem>
                      <SelectItem value="faridabad">Faridabad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="new-launch">New Launch</SelectItem>
                      <SelectItem value="ready">Ready to Move</SelectItem>
                      <SelectItem value="resale">Resale</SelectItem>
                    </SelectContent>
                  </Select>
                </div>



                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <Select value={bedrooms} onValueChange={setBedrooms}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1 BHK</SelectItem>
                      <SelectItem value="2">2 BHK</SelectItem>
                      <SelectItem value="3">3 BHK</SelectItem>
                      <SelectItem value="4+">4+ BHK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Built */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year Built</label>
                  <Select value={yearBuilt} onValueChange={setYearBuilt}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Year</SelectItem>
                      <SelectItem value="2020-2024">2020-2024</SelectItem>
                      <SelectItem value="2015-2019">2015-2019</SelectItem>
                      <SelectItem value="2010-2014">2010-2014</SelectItem>
                      <SelectItem value="pre-2010">Pre-2010</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={applyFilters} className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Properties Grid/List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing {filteredProperties.length} of {properties.length} properties
              </p>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="area-large">Area: Large to Small</SelectItem>
                    <SelectItem value="area-small">Area: Small to Large</SelectItem>
                    <SelectItem value="year-newest">Year: Newest First</SelectItem>
                    <SelectItem value="year-oldest">Year: Oldest First</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={applyFilters} variant="outline" size="sm">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Properties Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">{property.tag}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-navy-900">{property.title}</h3>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center">
                            <Bed className="w-4 h-4 mr-1" />
                            <span>{property.bedrooms} BHK</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms > 0 ? property.bathrooms : "Office"}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="w-4 h-4 mr-1" />
                          <span>{property.area} sq.ft</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-4">
                        Built in {property.yearBuilt}
                      </div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {property.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {property.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{property.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <Link href={`/properties/${property.id}`}>
                        <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">View Details</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Properties List */
              <div className="space-y-6">
                {filteredProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-80 relative">
                          <img
                            src={property.image || "/placeholder.svg"}
                            alt={property.title}
                            className="w-full h-48 lg:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-2 left-2 bg-gold-500 text-navy-900 text-xs">
                            {property.tag}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="mb-2">
                            <h3 className="text-2xl font-semibold text-navy-900 mb-2 lg:mb-0">{property.title}</h3>
                          </div>
                          <div className="flex items-center text-gray-600 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{property.location}</span>
                          </div>
                          <div className="flex items-center space-x-6 text-gray-600 mb-4">
                            {property.bedrooms > 0 && (
                              <div className="flex items-center">
                                <Bed className="w-4 h-4 mr-1" />
                                <span>{property.bedrooms} BHK</span>
                              </div>
                            )}
                            <div className="flex items-center">
                              <Bath className="w-4 h-4 mr-1" />
                              <span>{property.bedrooms > 0 ? property.bathrooms : "Office"}</span>
                            </div>
                            <div className="flex items-center">
                              <Square className="w-4 h-4 mr-1" />
                              <span>{property.area} sq.ft</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm">Built: {property.yearBuilt}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {property.amenities.map((amenity, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-3">
                            <Link href={`/properties/${property.id}`}>
                              <Button className="bg-navy-900 hover:bg-navy-800 text-white">View Details</Button>
                            </Link>
                            <Button
                              variant="outline"
                              className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Call
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setPropertyType("all")
                    setLocation("all")
                    setStatus("all")
                    setBedrooms("all")
                    setYearBuilt("all")
                    applyFilters()
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredProperties.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button className="bg-navy-900 text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
