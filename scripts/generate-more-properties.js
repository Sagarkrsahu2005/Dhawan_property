const fs = require('fs');
const path = require('path');

// Read the current property data
const propertyDataPath = path.join(__dirname, '..', 'lib', 'property-data.ts');
const currentContent = fs.readFileSync(propertyDataPath, 'utf-8');

// Find the last property ID
const lastIdMatch = currentContent.match(/"id": (\d+),?\s*}$/m);
const lastId = lastIdMatch ? parseInt(lastIdMatch[1]) : 6175;

console.log(`Last property ID found: ${lastId}`);

// Generate 50 more properties with sequential IDs
const newProperties = [];
const propertyTemplates = [
  {
    title: "Luxury Apartment Complex",
    location: "Sector 45, Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    yearBuilt: 2024,
    type: "residential",
    status: "ready",
    tag: "Luxury Living",
    image: "/luxury-apartment.png",
    amenities: ["Swimming Pool", "Gym", "Parking", "Garden", "Security", "Power Backup"],
    description: "Premium luxury apartment complex with modern amenities and excellent connectivity."
  },
  {
    title: "Modern Office Space",
    location: "Cyber City, Gurugram, Haryana",
    bedrooms: 0,
    bathrooms: 2,
    area: 5000,
    yearBuilt: 2023,
    type: "commercial",
    status: "ready",
    tag: "Office Space",
    image: "/modern-office.png",
    amenities: ["Parking", "Security", "Power Backup", "High Speed Internet", "Conference Room", "Cafeteria"],
    description: "State-of-the-art office space in the heart of Cyber City with all modern facilities."
  },
  {
    title: "Premium Villa",
    location: "Sector 50, Gurugram, Haryana",
    bedrooms: 4,
    bathrooms: 5,
    area: 4500,
    yearBuilt: 2025,
    type: "residential",
    status: "new-launch",
    tag: "Premium Villa",
    image: "/premium-villa.png",
    amenities: ["Private Garden", "Swimming Pool", "Gym", "Security", "Power Backup", "Smart Home"],
    description: "Exclusive premium villa with private amenities and luxurious living spaces."
  },
  {
    title: "Retail Shop",
    location: "Mall Road, Gurugram, Haryana",
    bedrooms: 0,
    bathrooms: 1,
    area: 800,
    yearBuilt: 2022,
    type: "commercial",
    status: "ready",
    tag: "Retail Space",
    image: "/retail-shop.png",
    amenities: ["Parking", "Security", "Power Backup", "High Foot Traffic", "Loading Area"],
    description: "Prime retail space in high foot traffic area with excellent visibility."
  },
  {
    title: "Studio Apartment",
    location: "Sector 47, Gurugram, Haryana",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    yearBuilt: 2024,
    type: "residential",
    status: "ready",
    tag: "Studio",
    image: "/studio-apartment.png",
    amenities: ["Parking", "Security", "Power Backup", "Garden", "24/7 Water"],
    description: "Compact studio apartment perfect for singles or small families."
  }
];

// Generate 50 properties by cycling through templates and varying details
for (let i = 1; i <= 50; i++) {
  const template = propertyTemplates[(i - 1) % propertyTemplates.length];
  const newId = lastId + i;
  
  // Vary the details slightly for each property
  const property = {
    id: newId,
    title: `${template.title} ${i}`,
    location: template.location.replace('Sector', `Sector ${45 + (i % 20)}`),
    bedrooms: template.bedrooms === 0 ? 0 : Math.max(1, template.bedrooms + (i % 3) - 1),
    bathrooms: Math.max(1, template.bathrooms + (i % 3) - 1),
    area: template.area + (i * 50) % 1000,
    yearBuilt: template.yearBuilt + (i % 3),
    type: template.type,
    status: template.status,
    tag: template.tag,
    image: template.image,
    amenities: template.amenities,
    description: template.description
  };
  
  newProperties.push(property);
}

console.log(`Generated ${newProperties.length} new properties with IDs ${lastId + 1} to ${lastId + 50}`);

// Find the end of the properties array (line 3936)
const lines = currentContent.split('\n');
let propertiesEndLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === ']' && i > 3900) {
    propertiesEndLine = i;
    break;
  }
}

if (propertiesEndLine === -1) {
  console.error('Could not find end of properties array');
  process.exit(1);
}

console.log(`Properties array ends at line ${propertiesEndLine + 1}`);

// Insert new properties before the closing bracket
const newPropertiesStr = JSON.stringify(newProperties, null, 2);
const newPropertiesLines = newPropertiesStr.slice(1, -1).split('\n');

// Insert the new properties
lines.splice(propertiesEndLine, 0, ...newPropertiesLines.map(line => `  ${line}`));

// Write the updated file
const newContent = lines.join('\n');

// Write the updated file
fs.writeFileSync(propertyDataPath, newContent, 'utf-8');

console.log('✅ Successfully added 50 new properties to your database!');
console.log(`📊 Total properties now: ${82 + 50} properties`);
console.log(`🆔 New ID range: ${lastId + 1} to ${lastId + 50}`);
console.log('\n🎯 New properties include:');
newProperties.slice(0, 5).forEach(prop => {
  console.log(`   • ${prop.title} (ID: ${prop.id}) - ${prop.location}`);
});
