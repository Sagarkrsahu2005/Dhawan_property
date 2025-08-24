const fs = require('fs');
const path = require('path');

// Read the backup file
const backupPath = path.join(__dirname, '..', 'lib', 'property-data-backup.ts');
const backupContent = fs.readFileSync(backupPath, 'utf-8');

// Extract the properties array content
const lines = backupContent.split('\n');
let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const properties: Property[] = [')) {
    startLine = i;
  }
  if (lines[i].trim() === '];' && startLine !== -1) {
    endLine = i;
    break;
  }
}

if (startLine === -1 || endLine === -1) {
  console.error('Could not find properties array boundaries in backup file');
  process.exit(1);
}

const propertiesContent = lines.slice(startLine + 1, endLine + 1).join('\n');

// Create the new file content
const newContent = `export interface Property {
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

export const properties: Property[] = ${propertiesContent};

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

// Write the new file
const outputPath = path.join(__dirname, '..', 'lib', 'property-data.ts');
fs.writeFileSync(outputPath, newContent, 'utf-8');

console.log('✅ Successfully regenerated property-data.ts with correct structure!');
console.log('📊 Total properties:', (propertiesContent.match(/"id":/g) || []).length);
