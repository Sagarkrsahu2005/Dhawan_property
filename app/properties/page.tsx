"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { properties, getPropertiesSortedByNewest, getLatestProperty } from "@/lib/property-data"
import { MapPin, Bed, Bath, Square, Phone, Mail, Filter, Grid, List, Search, SlidersHorizontal } from "lucide-react"
import Navigation from "@/components/navigation"

export default function PropertiesPage() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")
  const [status, setStatus] = useState("all")
  const [bedrooms, setBedrooms] = useState("all")
  const [yearBuilt, setYearBuilt] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [searchTerm, setSearchTerm] = useState("")

  // Get properties sorted by newest first as the base
  const sortedPropertiesBase = getPropertiesSortedByNewest()
  
  // Get the latest property for special badge
  const latestProperty = getLatestProperty()

  // Filtering logic (using sorted properties as base)
  let filteredProperties = sortedPropertiesBase.filter((property) => {
    let matchesType = propertyType === "all" || property.type === propertyType
    let matchesLocation = location === "all" || property.location.toLowerCase().includes(location.toLowerCase())
    let matchesStatus = status === "all" || property.status === status
    let matchesBedrooms = bedrooms === "all" || (bedrooms === "studio" ? property.bedrooms === 1 : bedrooms === "4+" ? property.bedrooms >= 4 : property.bedrooms === Number(bedrooms))
    let matchesYear = yearBuilt === "all" ||
      (yearBuilt === "2020-2024" && property.yearBuilt >= 2020 && property.yearBuilt <= 2024) ||
      (yearBuilt === "2015-2019" && property.yearBuilt >= 2015 && property.yearBuilt <= 2019) ||
      (yearBuilt === "2010-2014" && property.yearBuilt >= 2010 && property.yearBuilt <= 2014) ||
      (yearBuilt === "pre-2010" && property.yearBuilt < 2010)
    let matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesLocation && matchesStatus && matchesBedrooms && matchesYear && matchesSearch
  })

  // Sorting logic (simplified)
  if (sortBy === "area-large") filteredProperties = [...filteredProperties].sort((a, b) => b.area - a.area)
  if (sortBy === "area-small") filteredProperties = [...filteredProperties].sort((a, b) => a.area - b.area)
  if (sortBy === "year-newest") filteredProperties = [...filteredProperties].sort((a, b) => b.yearBuilt - a.yearBuilt)
  if (sortBy === "year-oldest") filteredProperties = [...filteredProperties].sort((a, b) => a.yearBuilt - b.yearBuilt)

  // Pagination logic (must be after filteredProperties is defined)
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const paginatedProperties = filteredProperties.slice((currentPage - 1) * propertiesPerPage, currentPage * propertiesPerPage);

  const applyFilters = () => {} // No-op, filters are reactive

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumbs */}
      <div className="bg-white/60 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-navy-900">Home</a>
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
              <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}> <Grid className="w-4 h-4" /> </Button>
              <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}> <List className="w-4 h-4" /> </Button>
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
                    <Input placeholder="Search properties..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
                  </div>
                </div>
                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
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
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="gurgaon">Gurugram</SelectItem>
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
                    <SelectTrigger><SelectValue /></SelectTrigger>
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
                    <SelectTrigger><SelectValue /></SelectTrigger>
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
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Year</SelectItem>
                      <SelectItem value="2020-2024">2020-2024</SelectItem>
                      <SelectItem value="2015-2019">2015-2019</SelectItem>
                      <SelectItem value="2010-2014">2010-2014</SelectItem>
                      <SelectItem value="pre-2010">Pre-2010</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={applyFilters} className="w-full bg-navy-900 hover:bg-navy-800 text-white">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>
          {/* Properties Grid/List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">Showing {filteredProperties.length} of {properties.length} properties</p>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="area-large">Area: Large to Small</SelectItem>
                    <SelectItem value="area-small">Area: Small to Large</SelectItem>
                    <SelectItem value="year-newest">Year: Newest First</SelectItem>
                    <SelectItem value="year-oldest">Year: Oldest First</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={applyFilters} variant="outline" size="sm"><Filter className="w-4 h-4" /></Button>
              </div>
            </div>
            {/* Properties Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                      {property.id === latestProperty.id ? (
                        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold shadow-lg">Latest Project</Badge>
                      ) : (
                        <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">{property.tag}</Badge>
                      )}
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
                      <div className="text-xs text-gray-500 mb-4">Built in {property.yearBuilt}</div>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {property.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">{amenity}</Badge>
                        ))}
                        {property.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">+{property.amenities.length - 3} more</Badge>
                        )}
                      </div>
                      <a href={`/properties/${property.slug || property.id}`}><Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">View Details</Button></a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {paginatedProperties.map((property) => (
                  <Card key={property.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-80 relative">
                          <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-48 lg:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
                          {property.id === latestProperty.id ? (
                            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold shadow-lg text-xs">Latest Project</Badge>
                          ) : (
                            <Badge className="absolute top-2 left-2 bg-gold-500 text-navy-900 text-xs">{property.tag}</Badge>
                          )}
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
                              <Badge key={index} variant="secondary" className="text-xs">{amenity}</Badge>
                            ))}
                          </div>
                          <div className="flex space-x-3">
                            <a href={`/properties/${property.slug || property.id}`}><Button className="bg-navy-900 hover:bg-navy-800 text-white">View Details</Button></a>
                            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"><Phone className="w-4 h-4 mr-2" />Call</Button>
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
                <div className="text-gray-400 mb-4"><Search className="w-16 h-16 mx-auto" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <Button onClick={() => { setSearchTerm(""); setPropertyType("all"); setLocation("all"); setStatus("all"); setBedrooms("all"); setYearBuilt("all"); applyFilters(); }} variant="outline">Clear All Filters</Button>
              </div>
            )}
            {/* Pagination (static) */}
            {filteredProperties.length > 0 && totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
                  {[...Array(totalPages)].map((_, idx) => (
                    <Button
                      key={idx + 1}
                      className={currentPage === idx + 1 ? "bg-navy-900 text-white" : ""}
                      variant={currentPage === idx + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </Button>
                  ))}
                  <Button variant="outline" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
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
              <p className="text-gray-400 mb-4">Your trusted partner in real estate with verified listings and transparent dealings.</p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white bg-transparent" asChild>
                  <a href="https://www.facebook.com/dhawanpropertis" target="_blank" rel="noopener noreferrer">Facebook</a>
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white bg-transparent" asChild>
                  <a href="https://www.instagram.com/dhawanproperties2019?igsh=MWs5emJ5aWdoNWxjZg==" target="_blank" rel="noopener noreferrer">Instagram</a>
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/properties" className="hover:text-white">Properties</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
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
// (remove this extra closing brace)
}
