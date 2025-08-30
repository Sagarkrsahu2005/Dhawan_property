const fs = require('fs');
const path = require('path');

// Read the WordPress JSON file
const wordpressDataPath = path.join(__dirname, 'wordpress-properties.json');
const outputPath = path.join(__dirname, 'lib', 'property-data.ts');

try {
  console.log('Reading WordPress data...');
  const wordpressJson = fs.readFileSync(wordpressDataPath, 'utf-8');
  
  console.log('Parsing WordPress data...');
  const wpProperties = JSON.parse(wordpressJson);
  
  // Filter out non-property entries
  const validProperties = wpProperties.filter(wp => 
    wp.title && 
    !wp.title.includes("Blog") && 
    !wp.title.includes("Home") && 
    !wp.title.includes("Elementor") &&
    wp.description && 
    wp.description.length > 100
  );
  
  console.log(`Found ${validProperties.length} valid properties`);
  
  // Convert to Property format
  const properties = validProperties.map(wp => {
    // Extract location from description if not available
    let location = wp.location;
    if (!location || location === "") {
      const locationMatch = wp.description.match(/Sector\s+\d+/i);
      if (locationMatch) {
        location = `${locationMatch[0]}, Gurugram, Haryana`;
      } else {
        location = "Gurugram, Haryana";
      }
    }

    // Extract amenities from description
    let amenities = wp.amenities;
    if (!amenities || amenities.length === 0) {
      const commonAmenities = [
        "Swimming Pool", "Club House", "Gym", "Garden", "Security", 
        "Parking", "Kids Play Area", "Restaurant", "Mini Theatre"
      ];
      amenities = commonAmenities.filter(amenity => 
        wp.description.toLowerCase().includes(amenity.toLowerCase())
      );
      if (amenities.length === 0) {
        amenities = ["24/7 Security", "Power Backup", "High Speed WiFi"];
      }
    }

    // Extract project specifications
    const projectSpecs = {};
    
    const landMatch = wp.description.match(/(\d+)\s*ACRES?/i);
    if (landMatch) {
      projectSpecs.landParcel = `${landMatch[1]} Acres`;
    }
    
    const towersMatch = wp.description.match(/(\d+)\s*TOWERS?/i);
    if (towersMatch) {
      projectSpecs.towers = parseInt(towersMatch[1]);
    }
    
    const floorsMatch = wp.description.match(/G\s*\+\s*(\d+)\s*FLOORS?/i);
    if (floorsMatch) {
      projectSpecs.floors = `G+${floorsMatch[1]}`;
    }
    
    const clubMatch = wp.description.match(/CLUB\s*HOUSE\s*[–-]\s*([^,\n]+)/i);
    if (clubMatch) {
      projectSpecs.clubHouse = clubMatch[1].trim();
    }
    
    const possessionMatch = wp.description.match(/POSSESSION[^0-9]*(\d{4})/i);
    if (possessionMatch) {
      projectSpecs.possession = possessionMatch[1];
    }

    // Extract nearby places
    const nearbyPlaces = [];
    const schoolsMatch = wp.description.match(/Schools?\s*&?\s*Hospitals?/i);
    if (schoolsMatch) {
      const schoolNames = ["DPS", "Gyannanda School", "S N International School", "Prime Scholars School"];
      const hospitalNames = ["Medanta Hospital", "Fortis Hospital", "Manipal Hospital", "Sri Balaji's Multi Hospital"];
      
      schoolNames.forEach((school, index) => {
        nearbyPlaces.push({
          name: school,
          distance: `${3 + index} km`,
          type: "Education"
        });
      });
      
      hospitalNames.forEach((hospital, index) => {
        nearbyPlaces.push({
          name: hospital,
          distance: `${4 + index * 2} km`,
          type: "Healthcare"
        });
      });
    }

    // Extract floor plans
    const floorPlans = {};
    const bhkMatch = wp.description.match(/(\d+)\s*BHK/gi);
    if (bhkMatch) {
      const bhkTypes = new Set();
      bhkMatch.forEach(match => {
        const bhkType = match.match(/(\d+)\s*BHK/i)?.[1];
        if (bhkType) bhkTypes.add(bhkType);
      });
      
      bhkTypes.forEach(bhkType => {
        floorPlans[`${bhkType}BHK`] = [{
          image: "/modern-villa-floor-plan.png",
          label: `${bhkType}BHK • Available`,
          downloadUrl: `/floor-plans/${wp.title.toLowerCase().replace(/\s+/g, '-')}-${bhkType}bhk.pdf`
        }];
      });
    }

    return {
      id: wp.id,
      title: wp.title,
      location: location,
      bedrooms: wp.bedrooms || 3,
      bathrooms: wp.bathrooms || 3,
      area: wp.area || 2000,
      yearBuilt: wp.yearBuilt || 2025,
      type: wp.type,
      status: wp.status,
      tag: wp.tag,
      image: wp.image || "/modern-apartment-building.png",
      amenities: amenities,
      description: wp.description,
      images: wp.images || [wp.image || "/modern-apartment-building.png"],
      floorPlans: Object.keys(floorPlans).length > 0 ? floorPlans : undefined,
      projectSpecs: Object.keys(projectSpecs).length > 0 ? projectSpecs : undefined,
      nearbyPlaces: nearbyPlaces.length > 0 ? nearbyPlaces : undefined,
      agent: {
        name: "kapil dhawan",
        phone: "+91 99996 28400",
        email: "Dhawanproperties2019@gmail.com",
        image: "/professional-real-estate-agent.png",
      }
    };
  });
  
  // Add your existing Godrej Vrikshya property
  const existingProperties = [
    {
      id: 1,
      title: "Godrej Vrikshya",
      location: "Sector 103, Gurugram, Haryana",
      bedrooms: 4,
      bathrooms: 4,
      area: 3700,
      yearBuilt: 2029,
      type: "residential",
      status: "new-launch",
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
        name: "kapil dhawan",
        phone: "+91 99996 28400",
        email: "Dhawanproperties2019@gmail.com",
        image: "/professional-real-estate-agent.png",
      },
    }
  ];
  
  const allProperties = [...existingProperties, ...properties];
  
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

export const properties: Property[] = ${JSON.stringify(allProperties, null, 2)}

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
`;
  
  // Write the new content to property-data.ts
  fs.writeFileSync(outputPath, propertyDataContent, 'utf-8');
  
  console.log(`✅ Successfully imported ${allProperties.length} properties to ${outputPath}`);
  console.log('Properties imported:');
  allProperties.forEach(prop => {
    console.log(`  - ${prop.id}: ${prop.title}`);
  });
  
} catch (error) {
  console.error('Error importing properties:', error);
  process.exit(1);
}
