# 🚀 WordPress to Next.js Migration Guide

## 📋 **Complete Data Migration Solution**

This guide will help you export **EVERYTHING** from your WordPress site and migrate it to your new Next.js property website.

## 🎯 **What Gets Migrated (Complete List):**

### **🏠 Property Details**
- ✅ Property titles and descriptions
- ✅ Bedrooms, bathrooms, area
- ✅ Property type and status
- ✅ Possession and location
- ✅ Price and pricing details
- ✅ Custom fields and meta data

### **🖼️ Images & Media**
- ✅ Featured images
- ✅ Image galleries
- ✅ Floor plan images
- ✅ Agent photos
- ✅ Project renderings
- ✅ Virtual tour images

### **🗺️ Google Maps & Location**
- ✅ Latitude and longitude coordinates
- ✅ Google Maps embed codes
- ✅ Address components (street, city, state, pincode)
- ✅ Nearby places and distances
- ✅ Location-based amenities

### **📐 Floor Plans & Layouts**
- ✅ Floor plan images
- ✅ Room dimensions and sizes
- ✅ Layout variations (2BHK, 3BHK, etc.)
- ✅ Downloadable PDFs
- ✅ Pricing by layout type

### **🏗️ Project Specifications**
- ✅ Land parcel size
- ✅ Number of towers
- ✅ Floor count (G+20, etc.)
- ✅ Open area percentage
- ✅ Club house size
- ✅ Car parking details
- ✅ Possession timeline
- ✅ RERA numbers
- ✅ Developer information

### **🎁 Amenities & Features**
- ✅ Swimming pools and gyms
- ✅ Security and parking
- ✅ Smart home features
- ✅ Power backup and water supply
- ✅ Pet policies and maintenance

### **👨‍💼 Agent Information**
- ✅ Agent names and photos
- ✅ Contact details (phone, email)
- ✅ WhatsApp numbers
- ✅ Designations and ratings
- ✅ Agent-specific information

### **🏫 Nearby Places**
- ✅ Schools and hospitals
- ✅ Shopping centers and malls
- ✅ Metro stations and transport
- ✅ Business districts
- ✅ Recreational facilities

### **🔍 SEO & Meta Data**
- ✅ SEO titles and descriptions
- ✅ Keywords and meta tags
- ✅ Social media data
- ✅ Schema markup information

## 📁 **How to Export from WordPress:**

### **Method 1: WordPress Standard Export (Recommended)**

1. **Go to Tools → Export** in WordPress admin
2. **Select "All content"** (this includes posts, pages, custom fields, and media)
3. **Click "Download Export File"**
4. **Save the XML file** to your computer
5. **Upload to our migration tool** at `/migration`

**What this exports:**
- ✅ All your property posts and pages
- ✅ Custom fields (bedrooms, bathrooms, area, price, etc.)
- ✅ Categories and tags
- ✅ Featured images and media
- ✅ SEO data (if using Yoast or similar plugins)
- ✅ Custom post types and meta data

### **Method 2: Custom Export Plugin**

1. **Install "WP All Export" plugin**
2. **Create new export**
3. **Select your property post type**
4. **Choose all fields to export**
5. **Export as JSON format**

### **Method 3: Database Export**

1. **Use phpMyAdmin or similar tool**
2. **Export your WordPress database**
3. **Filter only property-related tables**
4. **Export as SQL or JSON**

### **Method 4: Manual Export**

1. **Go to each property post**
2. **Copy all content and meta data**
3. **Organize in structured format**
4. **Save as JSON file**

## 🛠️ **Using the Migration Tool:**

### **Step 1: Access Migration Tool**
- Go to `/migration` on your new site
- You'll see the WordPress Migration interface

### **Step 2: Choose Import Method**
- **📁 File Upload**: Upload your WordPress export file
- **🗄️ Database**: Direct database connection (advanced)
- **✏️ Manual Input**: Paste JSON data manually

### **Step 3: Import Data**
- Click "Import & Convert Data"
- Tool will process your WordPress data
- Converts to Next.js property format

### **Step 4: Export Results**
- Choose format: JSON or TypeScript
- Download converted data
- Copy to clipboard if needed

### **Step 5: Update Your Site**
- Replace data in `lib/property-data.ts`
- Test the migration
- Verify all properties display correctly

## 📊 **WordPress XML Export Format (WXR):**

### **What WordPress Exports:**
WordPress exports in **XML format** (WXR - WordPress eXtended RSS) which includes:
- **RSS feed structure** with all your content
- **Custom fields** as `<wp:postmeta>` elements
- **Categories and tags** for organization
- **Media attachments** and featured images
- **SEO data** from plugins like Yoast
- **Custom post types** and their meta data

### **XML Structure Example:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:wp="http://wordpress.org/export/1.2/">
  <channel>
    <title>Your Property Website</title>
    <item>
      <title>Property Title</title>
      <content:encoded><![CDATA[Property description...]]></content:encoded>
      <wp:post_id>1</wp:post_id>
      <wp:post_type>post</wp:post_type>
      <wp:postmeta>
        <wp:meta_key>bedrooms</wp:meta_key>
        <wp:meta_value>3</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>price</wp:meta_key>
        <wp:meta_value>₹2.5 Cr</wp:meta_value>
      </wp:postmeta>
    </item>
  </channel>
</rss>
```

### **Custom Fields in XML:**
Our migration tool automatically extracts these common property fields:
- `bedrooms`, `bathrooms`, `area`, `price`
- `location`, `property_type`, `status`
- `amenities`, `latitude`, `longitude`
- `floor_plans`, `project_specs`, `nearby_places`
- `agent` information

## 📊 **WordPress Data Structure Examples:**
```json
{
  "posts": [
    {
      "id": 1,
      "post_title": "Luxury Villa in Sector 47",
      "post_content": "Property description...",
      "post_type": "property",
      "featured_image": "/wp-content/uploads/villa.jpg",
      "property_details": {
        "bedrooms": 4,
        "bathrooms": 5,
        "area": 3200,
        "price": "₹4.5 Cr",
        "location": "Sector 47, Gurgaon",
        "amenities": ["Pool", "Gym", "Garden"],
        "latitude": 28.4595,
        "longitude": 77.0266
      }
    }
  ]
}
```

### **Advanced Property with Custom Fields:**
```json
{
  "posts": [
    {
      "id": 2,
      "post_title": "Premium Apartment",
      "post_content": "Detailed description...",
      "featured_image": "/apartment-main.jpg",
      "gallery_images": ["/apt1.jpg", "/apt2.jpg", "/apt3.jpg"],
      "categories": ["Residential", "Apartment"],
      "tags": ["New Launch", "Premium"],
      "property_details": {
        "bedrooms": 3,
        "bathrooms": 3,
        "area": 1850,
        "year_built": 2024,
        "property_type": "residential",
        "status": "new-launch",
        "address": "123 Main Street",
        "city": "Gurugram",
        "state": "Haryana",
        "pincode": "122001",
        "price": "₹2.8 Cr",
        "price_per_sqft": "₹15,135",
        "amenities": [
          "Swimming Pool",
          "Gym & Fitness",
          "Covered Parking",
          "24/7 Security",
          "Power Backup",
          "High Speed WiFi"
        ],
        "latitude": 28.4595,
        "longitude": 77.0266,
        "google_maps_embed": "https://maps.google.com/embed?pb=...",
        "floor_plans": {
          "2BHK": [
            {
              "image": "/floorplan-2bhk.jpg",
              "label": "2BHK • 1,200 sq.ft",
              "size": "1,200 sq.ft",
              "price": "₹1.8 Cr"
            }
          ],
          "3BHK": [
            {
              "image": "/floorplan-3bhk.jpg",
              "label": "3BHK • 1,850 sq.ft",
              "size": "1,850 sq.ft",
              "price": "₹2.8 Cr"
            }
          ]
        },
        "project_specs": {
          "land_parcel": "15 Acres",
          "towers": 6,
          "floors": "G+27",
          "open_area": "75%",
          "club_house": "90,000 sq.ft",
          "car_parking": "5 Floors",
          "possession": "2029",
          "wait_time": "4 Years",
          "rera_number": "RERA123456",
          "developer": "Godrej Properties"
        },
        "nearby_places": [
          {
            "name": "DPS School",
            "distance": "3 km",
            "type": "Education"
          },
          {
            "name": "Medanta Hospital",
            "distance": "10 km",
            "type": "Healthcare"
          },
          {
            "name": "Ambience Mall",
            "distance": "4 km",
            "type": "Shopping"
          }
        ],
        "agent": {
          "name": "kapil dhawan",
          "phone": "+91 99996 28400",
          "email": "Dhawanproperties2019@gmail.com",
          "image": "/agent-rajesh.jpg",
          "whatsapp": "+91 99996 28400",
          "designation": "Senior Property Consultant"
        },
        "furnishing": "Semi-furnished",
        "facing": "North-East",
        "parking": "2 Covered Parking",
        "power_backup": "100% Power Backup",
        "water_supply": "24/7 Water Supply",
        "security": "24/7 Security",
        "maintenance": "₹5 per sq.ft",
        "pet_friendly": true,
        "available_from": "2029",
        "booking_amount": "₹10 Lakhs",
        "emi_available": true,
        "bank_approval": ["HDFC", "SBI", "ICICI"]
      }
    }
  ]
}
```

## 🔧 **Troubleshooting Common Issues:**

### **Problem: Images not showing**
**Solution**: 
- Check image paths in WordPress export
- Ensure images are accessible
- Update image URLs to match new structure

### **Problem: Custom fields missing**
**Solution**:
- Verify custom field plugin is active
- Check field names in export
- Use manual export if needed

### **Problem: Google Maps not working**
**Solution**:
- Verify coordinates are in correct format
- Check Google Maps API key
- Test embed URLs manually

### **Problem: Floor plans not displaying**
**Solution**:
- Ensure floor plan images exist
- Check image file formats
- Verify download URLs are accessible

## 📱 **Post-Migration Checklist:**

- [ ] All properties display correctly
- [ ] Images and galleries work
- [ ] Floor plans are visible
- [ ] Google Maps show correct locations
- [ ] Amenities are listed properly
- [ ] Agent information is complete
- [ ] Nearby places are accurate
- [ ] Project specifications are correct
- [ ] SEO data is preserved
- [ ] Mobile responsiveness works

## 🚀 **Advanced Features:**

### **Bulk Operations**
- Import hundreds of properties at once
- Batch image processing
- Automated data validation

### **Data Validation**
- Check for missing required fields
- Validate image URLs
- Verify coordinate formats

### **Incremental Updates**
- Update existing properties
- Add new properties only
- Sync changes from WordPress

## 💡 **Pro Tips:**

1. **Backup everything** before starting migration
2. **Test with a few properties** first
3. **Use consistent naming** for images and files
4. **Validate data** after each import
5. **Keep WordPress running** until migration is complete
6. **Test on mobile devices** after migration
7. **Check SEO performance** post-migration

## 🆘 **Need Help?**

If you encounter issues:
1. Check the browser console for errors
2. Verify your WordPress export format
3. Use the sample data feature for testing
4. Contact support with specific error messages

---

**Happy Migrating! 🎉 Your new Next.js site will be amazing!**
