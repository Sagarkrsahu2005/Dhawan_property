# 🏠 Property Management Guide - Dhawan Properties

## 🚀 Quick Start Options

### Option 1: Use the Admin Panel (Recommended)
1. Go to `/admin` in your browser
2. Fill out the form to add properties
3. Export the JSON data when done
4. Copy the exported data into `lib/property-data.ts`

### Option 2: Direct File Editing
1. Open `lib/property-data.ts`
2. Copy the template from `lib/property-template.ts`
3. Paste and modify the data
4. Save the file

### Option 3: Copy-Paste Template
Use the quick template for basic properties or the full template for detailed ones.

## 📝 Property Data Structure

### Basic Fields (Required)
```typescript
{
  id: 1,                    // Unique ID
  title: "Property Name",   // Property title
  location: "City, State",  // Full location
  bedrooms: 3,              // Number of bedrooms
  bathrooms: 2,             // Number of bathrooms
  area: 1500,               // Area in sq.ft
  yearBuilt: 2024,          // Construction year
  type: "residential",      // "residential" or "commercial"
  status: "new-launch",     // "new-launch", "ready", or "resale"
  tag: "New Launch",        // Display tag
  image: "/image.png",      // Main image path
  amenities: ["Pool", "Gym"], // Array of amenities
  description: "Description text" // Property description
}
```

### Advanced Fields (Optional)
```typescript
{
  // Multiple images for gallery
  images: ["/img1.png", "/img2.png"],
  
  // Floor plans by type
  floorPlans: {
    "2BHK": [
      {
        image: "/floorplan.png",
        label: "2BHK • 1,200 sq.ft",
        downloadUrl: "/pdfs/2bhk.pdf"
      }
    ]
  },
  
  // Project specifications
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
  
  // Nearby places
  nearbyPlaces: [
    { name: "School Name", distance: "2 km", type: "Education" }
  ],
  
  // Agent details
  agent: {
    name: "Agent Name",
    phone: "+91 99996 28400",
    email: "agent@email.com",
    image: "/agent.png"
  }
}
```

## 🎯 Quick Add Examples

### Example 1: Basic Apartment
```typescript
{
  id: 3,
  title: "Modern 2BHK in Sector 45",
  location: "Sector 45, Gurugram, Haryana",
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  yearBuilt: 2023,
  type: "residential",
  status: "ready",
  tag: "Ready to Move",
  image: "/modern-apartment.png",
  amenities: ["Gym", "Parking", "Security", "Garden"],
  description: "Beautiful 2BHK apartment with modern amenities..."
}
```

### Example 2: Commercial Property
```typescript
{
  id: 4,
  title: "Office Space in Cyber City",
  location: "Cyber City, Gurugram, Haryana",
  bedrooms: 0,
  bathrooms: 3,
  area: 2500,
  yearBuilt: 2022,
  type: "commercial",
  status: "ready",
  tag: "Investment",
  image: "/office-space.png",
  amenities: ["Parking", "Security", "High Speed Internet", "Conference Room"],
  description: "Prime commercial space perfect for corporate offices..."
}
```

## 🔧 Tips for Faster Data Entry

1. **Use the Admin Panel**: It's the fastest way to add properties
2. **Copy-Paste Templates**: Use the templates in `lib/property-template.ts`
3. **Batch Add**: Add multiple properties at once, then export
4. **Image Naming**: Use consistent naming like `/property-1.png`, `/property-2.png`
5. **Amenities**: Use comma-separated values in the admin panel
6. **Export/Import**: Use the JSON export feature to backup and restore data

## 📁 File Organization

```
lib/
├── property-data.ts      # Main property data
├── property-template.ts  # Templates for copying
└── utils.ts             # Helper functions

components/
└── property-admin.tsx   # Admin panel component

app/
├── admin/
│   └── page.tsx        # Admin route
└── properties/
    ├── page.tsx        # Properties listing
    └── [id]/
        └── page.tsx    # Property detail
```

## 🚨 Important Notes

- **IDs must be unique** - Use auto-increment or unique numbers
- **Image paths** - Make sure images exist in the `public/` folder
- **Data consistency** - Keep the same structure across all properties
- **Backup** - Export your data regularly using the admin panel
- **Validation** - The admin panel validates required fields

## 🆘 Troubleshooting

### Property not showing up?
- Check if the ID is unique
- Verify all required fields are filled
- Make sure the image path is correct

### Admin panel not working?
- Check browser console for errors
- Verify all UI components are imported
- Make sure the route `/admin` is accessible

### Data not saving?
- Check if the form validation passes
- Verify the component state is working
- Export data to see if it's actually being stored

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Make sure all dependencies are installed
4. Try refreshing the page

---

**Happy Property Managing! 🎉**
