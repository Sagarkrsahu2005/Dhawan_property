export interface Property {
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
  floorPlans?: { [key: string]: { image: string; label: string; downloadUrl: string; }[] }
  projectSpecs?: { landParcel?: string; towers?: number; floors?: string; openArea?: string; clubHouse?: string; carParking?: string; possession?: string; waitTime?: string; }
  nearbyPlaces?: { name: string; distance: string; type: string; }[]
  agent?: { name: string; phone: string; email: string; image: string; }
}

export const properties: Property[] = [
  {
    "id": 1,
    "title": "Godrej Vrikshya",
    "location": "Sector 103, Gurugram, Haryana",
    "bedrooms": 4,
    "bathrooms": 4,
    "area": 3700,
    "yearBuilt": 2029,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/godrej-vrikshya.png",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Power Backup",
      "Club House"
    ],
    "description": "Godrej Vrikshya, located in Sector 103 of Gurugram, is an upcoming residential project that seamlessly blends modern luxury with sustainable living."
  },
  {
    "id": 2,
    "title": "Puri Diplomatic Residences",
    "location": "Sector 111, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2400,
    "yearBuilt": 2024,
    "type": "residential",
    "status": "ready",
    "tag": "Ready to Move",
    "image": "/puri-diplomatic.png",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Parking",
      "Security",
      "Power Backup",
      "Garden"
    ],
    "description": "Luxurious diplomatic residences with premium amenities and excellent connectivity."
  },
  {
    "id": 6176,
    "title": "Luxury Apartment Complex 1",
    "location": "Sector 46, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2550,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "ready",
    "tag": "Luxury Living",
    "image": "/luxury-apartment.png",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Parking",
      "Garden",
      "Security",
      "Power Backup"
    ],
    "description": "Premium luxury apartment complex with modern amenities and excellent connectivity."
  },
  {
    "id": 6177,
    "title": "Modern Office Space 2",
    "location": "Cyber City, Gurugram, Haryana",
    "bedrooms": 0,
    "bathrooms": 3,
    "area": 5100,
    "yearBuilt": 2025,
    "type": "commercial",
    "status": "ready",
    "tag": "Office Space",
    "image": "/modern-office.png",
    "amenities": [
      "Parking",
      "Security",
      "Power Backup",
      "High Speed Internet",
      "Conference Room",
      "Cafeteria"
    ],
    "description": "State-of-the-art office space in the heart of Cyber City with all modern facilities."
  },
  {
    "id": 6178,
    "title": "Premium Villa 3",
    "location": "Sector 48, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 4,
    "area": 4650,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "Premium Villa",
    "image": "/premium-villa.png",
    "amenities": [
      "Private Garden",
      "Swimming Pool",
      "Gym",
      "Security",
      "Power Backup",
      "Smart Home"
    ],
    "description": "Exclusive premium villa with private amenities and luxurious living spaces."
  }
];

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
