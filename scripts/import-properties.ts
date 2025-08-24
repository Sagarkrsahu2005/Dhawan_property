import { importWordPressData } from '../lib/import-wordpress-data'
import fs from 'fs'
import path from 'path'

// Read the WordPress JSON file
const wordpressDataPath = path.join(process.cwd(), '..', 'Downloads', 'properties-data.json')
const outputPath = path.join(process.cwd(), 'lib', 'property-data.ts')

try {
  console.log('Reading WordPress data...')
  const wordpressJson = fs.readFileSync(wordpressDataPath, 'utf-8')
  
  console.log('Converting WordPress data...')
  const properties = importWordPressData(wordpressJson)
  
  console.log(`Found ${properties.length} properties`)
  
  // Generate the new property-data.ts content
  const propertyDataContent = `export interface Property {
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
  // Additional detailed fields for property detail page
  images?: string[]
  floorPlans?: {
    [key: string]: {
      image: string
      label: string
      downloadUrl: string
    }[]
  }
  projectSpecs?: {
    landParcel?: string
    towers?: number
    floors?: string
    openArea?: string
    clubHouse?: string
    carParking?: string
    possession?: string
    waitTime?: string
  }
  nearbyPlaces?: {
    name: string
    distance: string
    type: string
  }[]
  agent?: {
    name: string
    phone: string
    email: string
    image: string
  }
}

export const properties: Property[] = ${JSON.stringify(properties, null, 2)}

// Helper function to get property by ID
export const getPropertyById = (id: string | number): Property | undefined => {
  return properties.find(property => property.id === Number(id))
}

// Helper function to get properties by type
export const getPropertiesByType = (type: string): Property[] => {
  if (type === "all") return properties
  return properties.filter(property => property.type === type)
}

// Helper function to get properties by location
export const getPropertiesByLocation = (location: string): Property[] => {
  if (location === "all") return properties
  return properties.filter(property => 
    property.location.toLowerCase().includes(location.toLowerCase())
  )
}
`
  
  // Write the new content to property-data.ts
  fs.writeFileSync(outputPath, propertyDataContent, 'utf-8')
  
  console.log(`✅ Successfully imported ${properties.length} properties to ${outputPath}`)
  console.log('Properties imported:')
  properties.forEach(prop => {
    console.log(`  - ${prop.id}: ${prop.title}`)
  })
  
} catch (error) {
  console.error('Error importing properties:', error)
  process.exit(1)
}
