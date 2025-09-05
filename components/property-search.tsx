"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { properties, getPropertiesSortedByNewest } from "@/lib/property-data"

interface Property {
  id: number
  title: string
  location: string
  bedrooms: number
  status: string
  image: string
  slug?: string
}

interface PropertySearchProps {
  className?: string
  isMobile?: boolean
}

export default function PropertySearch({ className = "", isMobile = false }: PropertySearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Property[]>([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  // Search functionality
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim().length > 2) {
      // Use sorted properties for search so newest appear first in results
      const sortedProperties = getPropertiesSortedByNewest()
      const filtered = sortedProperties.filter(property => {
        const searchTerm = query.toLowerCase()
        return (
          property.title.toLowerCase().includes(searchTerm) ||
          property.location.toLowerCase().includes(searchTerm) ||
          property.type.toLowerCase().includes(searchTerm) ||
          property.status.toLowerCase().includes(searchTerm) ||
          property.tag.toLowerCase().includes(searchTerm) ||
          property.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm)) ||
          `${property.bedrooms} bhk`.includes(searchTerm) ||
          property.area.toString().includes(searchTerm)
        )
      })
      setSearchResults(filtered.slice(0, 5)) // Limit to 5 results
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
      setSearchResults([])
    }
  }

  const handleSearchResultClick = (property: Property) => {
    setShowSearchResults(false)
    setSearchQuery("")
    setShowMobileSearch(false)
    window.location.href = `/properties/${property.slug || property.id}`
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSearchResults(false)
    setSearchResults([])
  }

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.search-container')) {
        setShowSearchResults(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSearchResults(false)
        setShowMobileSearch(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  if (isMobile) {
    return (
      <>
        {/* Mobile Search Button */}
        <button
          onClick={() => setShowMobileSearch(true)}
          className="p-2 text-gray-700 hover:text-navy-900 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Mobile Search Overlay */}
        {showMobileSearch && (
          <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 bg-white p-4">
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => setShowMobileSearch(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900">Search Properties</h3>
              </div>
              
              {/* Enhanced Mobile Search Input */}
              <div className="relative bg-white/80 backdrop-blur-sm p-1 flex justify-center items-center gap-1 rounded-[12px] transition-transform duration-300 hover:scale-[1.02]">
                
                {/* Search Icon */}
                <div className="flex items-center justify-center p-1">
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="18px" width="18px">
                    <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#374151" />
                  </svg>
                </div>
                
                {/* Mobile Search Input */}
                <input
                  type="text"
                  placeholder="Search property"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 rounded-[12px] outline-none border-none p-1 bg-transparent text-gray-800 placeholder-gray-500 text-sm"
                  autoFocus
                />
                
                {/* Clear Button for Mobile */}
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="cursor-pointer border-none bg-none transition-all duration-300 flex justify-center items-center rounded-xl p-1.5 hover:bg-white/40"
                    type="button"
                  >
                    <X className="h-4 w-4 text-gray-600 hover:text-gray-800" />
                  </button>
                )}
              </div>
              
              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2 max-h-96 overflow-y-auto">
                  {searchResults.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => handleSearchResultClick(property)}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{property.title}</h4>
                        <p className="text-sm text-gray-500 truncate">{property.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="text-xs bg-blue-100 text-blue-800">{property.status}</Badge>
                          <span className="text-xs text-gray-400">{property.bedrooms} BHK</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {searchQuery.length > 2 && searchResults.length === 0 && (
                <div className="mt-4 p-4 text-center text-gray-500">
                  No properties found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        )}
      </>
    )
  }

  // Desktop Search
  return (
    <div className={`relative ${className}`}>
      <div className="relative search-container">
        {/* 3D Search Input Container */}
        <div className="relative bg-white/70 backdrop-blur-sm p-1 flex justify-center items-center gap-1 rounded-[12px] max-w-[250px] transition-all duration-400 hover:scale-105 shadow-md"
             style={{
               transformStyle: 'preserve-3d',
               transform: 'rotateX(5deg) rotateY(-5deg)',
               perspective: '500px'
             }}>
          
          {/* Search Button */}
          <button 
            className="cursor-pointer border-none bg-none transition-all duration-400 flex justify-center items-center rounded-lg p-1 hover:bg-white/40"
            type="button"
          >
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="16px" width="16px">
              <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A" />
            </svg>
          </button>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search property"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full rounded-[12px] outline-none border-none p-1 bg-transparent text-gray-800 placeholder-gray-500 text-sm"
          />
          
          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="cursor-pointer border-none bg-none transition-all duration-400 flex justify-center items-center rounded-lg p-1 hover:bg-white/40"
              type="button"
            >
              <X className="h-3 w-3 text-gray-600 hover:text-gray-800" />
            </button>
          )}
        </div>
        
        {/* Search Results Dropdown */}
        {showSearchResults && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[60] max-h-96 overflow-y-auto">
            {searchResults.map((property) => (
              <div
                key={property.id}
                onClick={() => handleSearchResultClick(property)}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{property.title}</h4>
                  <p className="text-sm text-gray-500 truncate">{property.location}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="text-xs bg-blue-100 text-blue-800">{property.status}</Badge>
                    <span className="text-xs text-gray-400">{property.bedrooms} BHK</span>
                  </div>
                </div>
              </div>
            ))}
            {searchResults.length === 0 && searchQuery.length > 2 && (
              <div className="p-4 text-center text-gray-500">
                No properties found for "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
