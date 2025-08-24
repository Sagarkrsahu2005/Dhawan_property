// COPY THIS TEMPLATE AND PASTE IT INTO lib/property-data.ts

export const propertyTemplate = {
  id: 0, // Auto-increment this
  title: "Property Name",
  location: "Location, City, State",
  bedrooms: 0,
  bathrooms: 0,
  area: 0, // in sq.ft
  yearBuilt: 2024,
  type: "residential" as const, // or "commercial"
  status: "new-launch" as const, // or "ready" or "resale"
  tag: "Tag Text",
  image: "/image-name.png",
  amenities: [
    "Amenity 1",
    "Amenity 2",
    "Amenity 3",
    // Add more amenities...
  ],
  description: "Detailed description of the property...",
  
  // Optional detailed fields (remove if not needed):
  images: [
    "/main-image.png",
    "/image-2.png",
    "/image-3.png",
    "/image-4.png",
  ],
  floorPlans: {
    "2BHK": [
      {
        image: "/floor-plan.png",
        label: "2BHK • 1,200 sq.ft",
        downloadUrl: "/floor-plans/2bhk-a.pdf",
      },
    ],
    "3BHK": [
      {
        image: "/floor-plan.png",
        label: "3BHK • 1,800 sq.ft",
        downloadUrl: "/floor-plans/3bhk-a.pdf",
      },
    ],
  },
  projectSpecs: {
    landParcel: "10 Acres",
    towers: 4,
    floors: "G+20",
    openArea: "70%",
    clubHouse: "50,000 sq.ft",
    carParking: "3 Floors",
    possession: "2026",
    waitTime: "2 Years"
  },
  nearbyPlaces: [
    { name: "School Name", distance: "2 km", type: "Education" },
    { name: "Hospital Name", distance: "5 km", type: "Healthcare" },
    { name: "Mall Name", distance: "3 km", type: "Shopping" },
  ],
  agent: {
    name: "Agent Name",
    phone: "+91 98765 43210",
    email: "agent@dhawanproperties.in",
    image: "/agent-image.png",
  },
}

// QUICK ADD TEMPLATE (minimal fields):
export const quickPropertyTemplate = {
  id: 0,
  title: "Property Name",
  location: "Location, City, State",
  bedrooms: 0,
  bathrooms: 0,
  area: 0,
  yearBuilt: 2024,
  type: "residential" as const,
  status: "new-launch" as const,
  tag: "Tag Text",
  image: "/image-name.png",
  amenities: ["Amenity 1", "Amenity 2", "Amenity 3"],
  description: "Brief description...",
}
