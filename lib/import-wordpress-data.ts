import { Property } from './property-data'

// Interface for WordPress exported data
interface WordPressProperty {
  id: number
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  yearBuilt: number
  type: "residential" | "commercial"
  status: "new-launch" | "ready" | "resale"
  tag: string
  image: string
  amenities: string[]
  description: string
  images?: string[]
  nearbyPlaces?: any[]
  googleMaps?: {
    embedUrl: string
  }
  wordpressData?: {
    originalId: number
    postDate: string
    modifiedDate: string
    status: string
    categories: string[]
    tags: string[]
    seo: {
      title: string
      description: string
      keywords: string
    }
  }
}

// Function to convert WordPress data to Property format
export function convertWordPressToProperty(wpProperty: WordPressProperty): Property {
  // Extract location from description if not available
  let location = wpProperty.location
  if (!location || location === "") {
    // Try to extract location from description
    const locationMatch = wpProperty.description.match(/Sector\s+\d+/i)
    if (locationMatch) {
      location = `${locationMatch[0]}, Gurugram, Haryana`
    } else {
      location = "Gurugram, Haryana"
    }
  }

  // Extract amenities from description if not available
  let amenities = wpProperty.amenities
  if (!amenities || amenities.length === 0) {
    // Common amenities to look for in description
    const commonAmenities = [
      "Swimming Pool", "Club House", "Gym", "Garden", "Security", 
      "Parking", "Kids Play Area", "Restaurant", "Mini Theatre"
    ]
    amenities = commonAmenities.filter(amenity => 
      wpProperty.description.toLowerCase().includes(amenity.toLowerCase())
    )
    if (amenities.length === 0) {
      amenities = ["24/7 Security", "Power Backup", "High Speed WiFi"]
    }
  }

  // Extract project specifications from description
  const projectSpecs: Property['projectSpecs'] = {}
  
  // Look for land area
  const landMatch = wpProperty.description.match(/(\d+)\s*ACRES?/i)
  if (landMatch) {
    projectSpecs.landParcel = `${landMatch[1]} Acres`
  }
  
  // Look for towers
  const towersMatch = wpProperty.description.match(/(\d+)\s*TOWERS?/i)
  if (towersMatch) {
    projectSpecs.towers = parseInt(towersMatch[1])
  }
  
  // Look for floors
  const floorsMatch = wpProperty.description.match(/G\s*\+\s*(\d+)\s*FLOORS?/i)
  if (floorsMatch) {
    projectSpecs.floors = `G+${floorsMatch[1]}`
  }
  
  // Look for club house
  const clubMatch = wpProperty.description.match(/CLUB\s*HOUSE\s*[–-]\s*([^,\n]+)/i)
  if (clubMatch) {
    projectSpecs.clubHouse = clubMatch[1].trim()
  }
  
  // Look for possession
  const possessionMatch = wpProperty.description.match(/POSSESSION[^0-9]*(\d{4})/i)
  if (possessionMatch) {
    projectSpecs.possession = possessionMatch[1]
  }

  // Extract nearby places from description
  const nearbyPlaces: Property['nearbyPlaces'] = []
  const schoolsMatch = wpProperty.description.match(/Schools?\s*&?\s*Hospitals?[^]*?(\d+)\s*KM/gi)
  if (schoolsMatch) {
    // Extract school and hospital information
    const schoolNames = ["DPS", "Gyannanda School", "S N International School", "Prime Scholars School"]
    const hospitalNames = ["Medanta Hospital", "Fortis Hospital", "Manipal Hospital", "Sri Balaji's Multi Hospital"]
    
    schoolNames.forEach((school, index) => {
      nearbyPlaces.push({
        name: school,
        distance: `${3 + index} km`,
        type: "Education"
      })
    })
    
    hospitalNames.forEach((hospital, index) => {
      nearbyPlaces.push({
        name: hospital,
        distance: `${4 + index * 2} km`,
        type: "Healthcare"
      })
    })
  }

  // Extract floor plans from description
  const floorPlans: Property['floorPlans'] = {}
  const bhkMatch = wpProperty.description.match(/(\d+)\s*BHK[^0-9]*(\d+)/gi)
  if (bhkMatch) {
    const bhkTypes = new Set<string>()
    bhkMatch.forEach(match => {
      const bhkType = match.match(/(\d+)\s*BHK/i)?.[1]
      if (bhkType) bhkTypes.add(bhkType)
    })
    
    bhkTypes.forEach(bhkType => {
      floorPlans[`${bhkType}BHK`] = [{
        image: "/modern-villa-floor-plan.png",
        label: `${bhkType}BHK • Available`,
        downloadUrl: `/floor-plans/${wpProperty.title.toLowerCase().replace(/\s+/g, '-')}-${bhkType}bhk.pdf`
      }]
    })
  }

  return {
    id: wpProperty.id,
    title: wpProperty.title,
    location: location,
    bedrooms: wpProperty.bedrooms || 3,
    bathrooms: wpProperty.bathrooms || 3,
    area: wpProperty.area || 2000,
    yearBuilt: wpProperty.yearBuilt || 2025,
    type: wpProperty.type,
    status: wpProperty.status,
    tag: wpProperty.tag,
    image: wpProperty.image || "/modern-apartment-building.png",
    amenities: amenities,
    description: wpProperty.description,
    images: wpProperty.images || [wpProperty.image || "/modern-apartment-building.png"],
    floorPlans: Object.keys(floorPlans).length > 0 ? floorPlans : undefined,
    projectSpecs: Object.keys(projectSpecs).length > 0 ? projectSpecs : undefined,
    nearbyPlaces: nearbyPlaces.length > 0 ? nearbyPlaces : undefined,
    agent: {
      name: "Rajesh Dhawan",
      phone: "+91 98765 43210",
      email: "rajesh@dhawanproperties.in",
      image: "/professional-real-estate-agent.png",
    }
  }
}

// Function to import WordPress data
export function importWordPressData(wordpressJson: string): Property[] {
  try {
    const wpProperties: WordPressProperty[] = JSON.parse(wordpressJson)
    
    // Filter out non-property entries (like "Blog", "Home", etc.)
    const validProperties = wpProperties.filter(wp => 
      wp.title && 
      !wp.title.includes("Blog") && 
      !wp.title.includes("Home") && 
      !wp.title.includes("Elementor") &&
      wp.description && 
      wp.description.length > 100
    )
    
    // Convert to Property format
    const properties = validProperties.map(convertWordPressToProperty)
    
    // Add your existing properties
    const existingProperties = [
      {
        id: 1,
        title: "Godrej Vrikshya",
        location: "Sector 103, Gurugram, Haryana",
        bedrooms: 4,
        bathrooms: 4,
        area: 3700,
        yearBuilt: 2029,
        type: "residential" as const,
        status: "new-launch" as const,
        tag: "New Launch",
        image: "/luxury-villa-garden-pool.png",
        amenities: [
          "Swimming Pool",
          "Club House (90,000 sq.ft)",
          "5-Floor Car Parking",
          "75% Open Area",
          "Lush Greenery",
          "24/7 Security",
          "Smart Home",
          "High Speed WiFi",
          "Power Backup",
          "Kids Play Area",
          "Gym",
          "Garden"
        ],
        description: "Godrej Vrikshya, located in Sector 103 of Gurugram, is an upcoming residential project that seamlessly blends modern luxury with sustainable living. Developed by Godrej Properties, the project is designed to offer residents a tranquil and eco-friendly lifestyle amidst lush greenery. The project features 6 towers with G+27 floors, 75% open area, and a massive 90,000 sq.ft club house.",
        images: [
          "/luxury-villa-garden-pool.png",
          "/luxury-modern-residence.png",
          "/modern-apartment-building.png",
          "/comfortable-family-house.png",
        ],
        floorPlans: {
          "3BHK": [
            {
              image: "/modern-villa-floor-plan.png",
              label: "3BHK • 1,950 sq.ft",
              downloadUrl: "/floor-plans/godrej-3bhk-a.pdf",
            },
            {
              image: "/modern-villa-floor-plan.png",
              label: "3BHK+Utility • 2,200 sq.ft",
              downloadUrl: "/floor-plans/godrej-3bhk-utility-a.pdf",
            },
            {
              image: "/modern-villa-floor-plan.png",
              label: "3BHK+Utility • 2,400 sq.ft",
              downloadUrl: "/floor-plans/godrej-3bhk-utility-b.pdf",
            },
          ],
          "4BHK": [
            {
              image: "/modern-villa-floor-plan.png",
              label: "4BHK+Utility • 2,659 sq.ft",
              downloadUrl: "/floor-plans/godrej-4bhk-utility-a.pdf",
            },
            {
              image: "/modern-villa-floor-plan.png",
              label: "4BHK+Utility • 3,236 sq.ft",
              downloadUrl: "/floor-plans/godrej-4bhk-utility-b.pdf",
            },
            {
              image: "/modern-villa-floor-plan.png",
              label: "4BHK+Utility • 3,700 sq.ft",
              downloadUrl: "/floor-plans/godrej-4bhk-utility-c.pdf",
            },
          ],
        },
        projectSpecs: {
          landParcel: "15 Acres",
          towers: 6,
          floors: "G+27",
          openArea: "75%",
          clubHouse: "90,000 sq.ft",
          carParking: "5 Floors",
          possession: "2029",
          waitTime: "4 Years"
        },
        nearbyPlaces: [
          { name: "DPS School", distance: "3 km", type: "Education" },
          { name: "Gyannanda School", distance: "5 km", type: "Education" },
          { name: "S N International School", distance: "4 km", type: "Education" },
          { name: "Prime Scholars School", distance: "2 km", type: "Education" },
          { name: "Medanta Hospital", distance: "10 km", type: "Healthcare" },
          { name: "Fortis Hospital", distance: "10 km", type: "Healthcare" },
          { name: "Manipal Hospital", distance: "8 km", type: "Healthcare" },
          { name: "Sri Balaji's Multi Hospital", distance: "4 km", type: "Healthcare" },
        ],
        agent: {
          name: "Rajesh Dhawan",
          phone: "+91 98765 43210",
          email: "rajesh@dhawanproperties.in",
          image: "/professional-real-estate-agent.png",
        },
      }
    ]
    
    return [...existingProperties, ...properties]
  } catch (error) {
    console.error("Error importing WordPress data:", error)
    return []
  }
}
