
export interface ProjectSpecs {
  landParcel?: string;
  towers?: number;
  floors?: string;
  openArea?: string;
  openSpace?: string;
  roadWidth?: string;
  kidsArea?: string;
  clubHouse?: string;
  carParking?: string;
  possession?: string;
  waitTime?: string;
  paymentPlan?: string;
  totalUnits?: string;
  unitsPerFloor?: string;
  apartmentsPerFloor?: string;
  threeSideOpen?: boolean;
  bookingAmount?: string;
  rera?: string;
}

export interface Property {
  sizes?: { type: string; size: string }[];
  id: number;
  slug?: string; // URL-friendly version of the property name
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  type: "residential" | "commercial";
  status: "new-launch" | "ready" | "resale";
  tag: string;
  image: string;
  amenities: string[];
  description: string;
  images?: string[];
  floorPlans?: { [key: string]: { image: string; label: string; downloadUrl: string; size?: string; }[] };
  projectSpecs?: ProjectSpecs;
  nearbyPlaces?: { name: string; distance: string; type: string; }[];
  agent?: { name: string; phone: string; email: string; image: string; };
  mapEmbedUrl?: string;
  brochures?: { 
    title: string; 
    type: string; 
    fileUrl: string; 
    thumbnail?: string; 
    description?: string; 
  }[];
  locationImage?: string;
  locationLink?: string;
}

export const properties: Property[] = [
  {
    id: 23,
    slug: "premium-gated-plots-panipat",
    title: "No. 1 Developer Launched a New Gated Plots in Panipat",
    location: "Sector 40, Panipat, Haryana",
    bedrooms: 0, // Residential plots
    bathrooms: 0, // Residential plots
    area: 900, // Starting plot size in sq ft
    yearBuilt: 2025,
    type: "residential",
    status: "new-launch",
    tag: "Premium Gated Plots",
    image: "https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder - will need actual image
    amenities: [
      "Multi Purpose Hall",
      "Games Room",
      "Gymnasium",
      "Iconic Fountain",
      "Swimming Pool",
      "30+ Life Designed Amenities",
      "Gated Community with 3-Tier Security",
      "24x7 Surveillance",
      "Luxe Clubhouse with Pool, Spa, Gym",
      "Lush Green Spaces",
      "Wide Tree-lined Avenues",
      "Modern Infrastructure",
      "Eco-conscious Features",
      "Rainwater Reuse System",
      "Smart Lighting",
      "Landscaped Gardens",
      "Dedicated Sports Zones",
      "Grand Clubhouse",
      "Prime Highway Access"
    ],
    images: [
      "https://images.unsplash.com/photo-1587745890135-20db8c79b027?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
      "https://images.unsplash.com/photo-1751301348228-39ba87ad82ba?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder
      "https://images.unsplash.com/photo-1706164971299-cfa23ec76083?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder
    ],
    description: `Discover a place where your aspirations take root and flourish. Set amidst lush, open landscapes, these premium plots—ranging from 900 to 4500 sq. ft.—offer the freedom to design a home that reflects your individuality. With effortless access to highways, key city hubs, and daily conveniences, this address strikes the perfect balance between calm retreat and seamless connectivity in one of Haryana's fastest-growing destinations.

Crafted by the trusted legacy of Properties, this gated community is enriched with thoughtful luxuries: a grand clubhouse, refreshing pool, landscaped gardens, and dedicated sports zones for recreation. Wide tree-lined avenues, modern infrastructure, and eco-conscious features make every day smoother, greener, and more refined. Backed by round-the-clock security, this is more than land—it's a foundation for a lifestyle that grows richer with time.

A Grand Royal Luxurious Project - Premium 100 - 500 Sq.yd plots in a secure enclave. Promising returns in Panipat's booming growth corridor with eco-wise living featuring rainwater reuse & smart lighting. Experience luxe clubhouse with pool, spa, gym & lush green spaces at this prime address with swift access to highways & Delhi-NCR.`,
    projectSpecs: {
      landParcel: "47 Acres",
      totalUnits: "750 Total Plots",
      possession: "In 1 Year",
      paymentPlan: "1-1.5 Years Flexi Payment Plan",
      // bookingAmount: "EOI Amount: ₹5,00,000/-",
      rera: "Bank on NH-44 Delhi-Punjab Highway"
    },
    sizes: [
      { type: "100 Sq.Yd Plot", size: "100 Sq.Yd" },
      { type: "200 Sq.Yd Plot", size: "200 Sq.Yd" },
      { type: "300 Sq.Yd Plot", size: "300 Sq.Yd" },
      { type: "400 Sq.Yd Plot", size: "400 Sq.Yd" },
      { type: "500 Sq.Yd Plot", size: "500 Sq.Yd" }
    ],
    nearbyPlaces: [
      { name: "Panipat City Centre", distance: "7 Mins", type: "commercial" },
      { name: "Delhi Public School, Panipat", distance: "10 Mins", type: "school" },
      { name: "Park Hospital, Panipat", distance: "8 Mins", type: "hospital" },
      { name: "City Centre Shopping", distance: "7 Mins", type: "shopping" },
      { name: "Panipat Business Park", distance: "11 Mins", type: "commercial" },
      { name: "NH-44 Delhi-Punjab Highway", distance: "Direct Access", type: "connectivity" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.123!2d76.968!3d29.388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e65c8c6a7ae87%3A0x123456789!2sSector%2040%2C%20Panipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
  },
  {
    id: 22,
    slug: "godrej-msr-city",
    title: "Godrej MSR City",
    location: "North Bengaluru",
    bedrooms: 0, // Not specified, assuming plots or various configs
    bathrooms: 0,
    area: 1500, // Placeholder average size
    yearBuilt: 2030, // Placeholder
    type: "residential",
    status: "new-launch",
    tag: "Mediterranean Themed Township",
    image: "https://i.postimg.cc/bwp4C29h/godrej-msr-city-barca.png", // Placeholder
    amenities: [
      "Skateboarding Rink",
      "Lap Pool",
      "Outdoor Gym",
      "Community Cafe",
      "Children's Play Area",
      "1.5 Lakh sq. ft. Grand Clubhouse",
      "Co-working space",
      "Business center",
      "Kids' arena",
      "Large gym",
      "Mediterranean Theme",
      "Sun-lit spaces and breezy balconies"
    ],
    images: [
      "https://godrejsbangalore.com/godrej-shettigere/img/gallery/g1.webp",
      "https://godrejsbangalore.com/godrej-shettigere/img/gallery/g2.webp",
      "https://godrejsbangalore.com/godrej-shettigere/img/gallery/g3.webp",
      "https://godrejsbangalore.com/godrej-shettigere/img/gallery/g4.webp",
      "https://i.postimg.cc/bwp4C29h/godrej-msr-city-barca.png",
      "https://www.godrejshettiigere.com/assets/img/gallery/1.webp",
      "https://www.godrejshettiigere.com/assets/img/gallery/2.webp",
      "https://www.godrejshettiigere.com/assets/img/gallery/3.webp",
      "https://www.godrejshettiigere.com/assets/img/gallery/4.webp"
    ],
    description: `Experience the Mediterranean lifestyle in the heart of North Bengaluru. Godrej MSR City is a landmark project that combines the charm of European architecture with modern amenities, creating a unique living experience. The project is well-connected via Bellary Road (NH 44) and the upcoming Doddajala Metro Station. It is also close to the Kempegowda International Airport.`,
    projectSpecs: {
      clubHouse: "1.5 Lakh sq. ft.",
      rera: "PRM/KA/RERA/1250/303/PR/010425/007644",
      possession: "Mar, 2030"
    },
    nearbyPlaces: [
      { name: "Delhi Public School", distance: "nearby", type: "school" },
      { name: "Akash International School", distance: "nearby", type: "school" },
      { name: "Canadian International School", distance: "nearby", type: "school" },
      { name: "Aster CMI", distance: "nearby", type: "hospital" },
      { name: "Cytecare Cancer Hospital", distance: "nearby", type: "hospital" },
      { name: "Manipal Hospital", distance: "nearby", type: "hospital" },
      { name: "Manyata Tech Park", distance: "nearby", type: "commercial" },
      { name: "KIADB Aerospace Park", distance: "nearby", type: "commercial" },
      { name: "Ecopolis", distance: "nearby", type: "commercial" },
      { name: "Galleria Mall", distance: "nearby", type: "shopping" },
      { name: "Esteem Mall", distance: "nearby", type: "shopping" },
      { name: "RMZ Mall", distance: "nearby", type: "shopping" },
      { name: "NH 44 - Bellary Road", distance: "2 Kms", type: "connectivity" },
      { name: "Doddajala Metro Station", distance: "4 Kms (Upcoming)", type: "connectivity" },
      { name: "Kempegowda International Airport", distance: "9 Kms", type: "connectivity" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.4966704413546!2d77.65732017508033!3d13.194104387142039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d8829723495%3A0x42397d8ede95b3d1!2sBarca%20at%20Godrej%20MSR%20City%2C%20North%20Bengaluru!5e0!3m2!1sen!2sin!4v1757443076795!5m2!1sen!2sin",
    brochures: [
      {
        title: "Barca at Godrej MSR City Brochure",
        type: "Project Brochure",
        fileUrl: "/Barca/Barca at Godrej MSR City_Brochure.pdf",
        thumbnail: "https://i.postimg.cc/bwp4C29h/godrej-msr-city-barca.png",
        description: "Official project brochure with detailed information."
      },
      {
        title: "Barca at Godrej MSR City MLP",
        type: "Master Layout Plan",
        fileUrl: "/Barca/Barca at Godrej MSR City_MLP.pdf",
        thumbnail: "https://i.postimg.cc/bwp4C29h/godrej-msr-city-barca.png",
        description: "Detailed Master Layout Plan of the project."
      }
    ]
  },
  // Latest Project - Godrej Verdania Estate (Featured as Hero Project)
  {
    id: 21,
    slug: "godrej-verdania-estate",
    title: "Godrej Verdania Estate",
    location: "Manglia, Indore, Madhya Pradesh",
    bedrooms: 0, // Residential plots
    bathrooms: 0, // Residential plots
    area: 1800, // Average plot size
    yearBuilt: 2026,
    type: "residential",
    status: "new-launch",
    tag: "Premium Plotted Development",
    image: "/WhatsApp Image 2025-09-05 at 20.04.05.jpeg",
    amenities: [
      "24 Acres of Resort-Style Township Living",
      "The Verdania Enclave - 11,000 sq. ft. Premium Clubhouse",
      "40 ft Wide Boulevard Roads for Premium Access",
      "2.4 Acres Open Community Space",
      "5,000 sq. ft. Dedicated Kids Play Area",
      "Strategic Location - 800m from A.B. Road",
      "1.3 km from Bypass Road (Hotel Exotica)",
      "Quick Access to Indore-Ujjain Road",
      "Swimming Pool with Modern Facilities",
      "Fully-Equipped Gymnasium",
      "Jogging & Walking Tracks",
      "Multi-Layered Security System",
      "Gated Community with Controlled Access",
      "Rainwater Harvesting Systems",
      "Solar Lighting for Eco-Friendly Living",
      "Well-Laid Roads & Drainage Systems",
      "Ready Utility Connections",
      "Complete Construction Freedom",
      "Freehold Property Ownership",
      "Flexible Plot Sizes (1200-2500 sq. ft.)",
      "Freehold Property",
      "Custom Home Construction Freedom",
      "Well-Laid Roads & Drainage Systems",
      "Utility Connections Ready",
      "RERA Approved (P-SWR-25-5891)"
    ],
    images: [
      "https://www.godrejgroupsindia.com/project_pics/godrej-verdania-banner-81889.jpg",
      "/WhatsApp Image 2025-09-05 at 20.03.47.jpeg", // The Verdania Enclave - Clubhouse Exterior
      "/WhatsApp Image 2025-09-05 at 20.04.05.jpeg", // Swimming Pool - Resort Style Interior
      "/WhatsApp Image 2025-09-05 at 20.04.18.jpeg", // Aerial Master Plan - Sports & Recreation
      "/WhatsApp Image 2025-09-05 at 20.04.36.jpeg"  // Evening Aerial View - Clubhouse & Plots
    ],
  description: `Discover Verdania — where refined living meets open-air freedom. Godrej Verdania Estate is a landmark 24-acre plotted community that reimagines township living with resort-style amenities, curated green spaces, and meticulous infrastructure.

Perched strategically off Bypass Road in Manglia, Indore, Verdania blends unmatched connectivity with a serene, sustainable lifestyle — all backed by Godrej's legacy of trust and timely delivery. Experience premium plots, an exclusive clubhouse, and thoughtfully planned public spaces designed for modern families and discerning investors. With smart master-planning, landscaped boulevards and future-ready utilities, Verdania delivers both leisurely living and long-term capital growth. Move-in ready infrastructure, stringent quality controls and preferred financing tie-ups make Verdania a hassle-free and high-value investment.

🏆 WHY CHOOSE RESIDENTIAL PLOTS AT GODREJ VERDANIA?
• Complete Transparency in all dealings and documentation
• Enriched Lifestyle with world-class amenities and green spaces
• Trust of Godrej Properties - a legacy of excellence
• Proven Execution Expertise ensuring timely delivery

🌟 WHY INDORE - THE SMART CHOICE?
• 8 Consecutive Years as India's Cleanest City (Swachh Survekshan)
• Ranked #4 in National Quality of Living Index
• Thriving startup ecosystem with 116+ emerging companies
• Robust infrastructure with 146+ ongoing development projects

🏨 PREMIUM HOSPITALITY NEARBY:
• Sheraton Hotel - 10 minutes • Radisson Blu - 20 minutes • Indore Marriott Hotel - 24 minutes

🛍️ SHOPPING & ENTERTAINMENT:
• Phoenix Citadel Mall - 15 minutes • C21 Mall - 22 minutes • Treasure Island Mall - 30 minutes

🏥 HEALTHCARE EXCELLENCE:
• Bombay Hospital - 20 minutes • Medanta Hospital - 20 minutes • Apollo Hospital - 22 minutes

💼 IT PARKS & INDUSTRIAL CONNECTIVITY:
• Indore Industrial Area - 28 minutes • Crystal IT Park - 35 minutes • Infosys, TCS, Yash IT Park - 35 minutes

🚗 UNMATCHED ACCESSIBILITY:
• Just 800 meters from A.B. Road • 1.3 km from Bypass Road (Hotel Exotica) • Quick access to Indore-Ujjain Road via Kshipra Link

📍 KEY DESTINATIONS:
• Nipania - 15 min • Palasia - 25 min • Vijay Nagar - 30 min • Indore Junction - 30 min • Indore Airport - 35 min

🏞️ PROJECT HIGHLIGHTS:
• 2.4 Acres of Open Community Space for recreation
• 40 ft (12 meters) wide Boulevard Road for seamless connectivity
• 11,000 sq. ft. The Verdania Enclave - Premium Clubhouse
• 5,000 sq. ft. dedicated Kids Play Area
• Flexible plot sizes from 1500-2500 sq. ft. starting at ₹1.50 Cr*
• Complete construction freedom on freehold property
• RERA Approved (P-SWR-25-5891) ensuring legal compliance`,
    floorPlans: {
      "Plot Layouts": [
        {
          image: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369762142-TJBZN7RLKCMZR5NPNVFP/Godrej+Verdania+Estate+Mangalia+Indore+%282%29.jpg",
          label: "1500 sq. ft. Plot - ₹1.50 Cr*",
          downloadUrl: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369762142-TJBZN7RLKCMZR5NPNVFP/Godrej+Verdania+Estate+Mangalia+Indore+%282%29.jpg",
          size: "1500 Sq.Ft."
        },
        {
          image: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369680246-S7WBMHGX9JX3OUNLMBNK/Godrej+Verdania+Estate+Mangalia+Indore+%285%29.jpg",
          label: "1800 sq. ft. Plot - ₹1.80 Cr*",
          downloadUrl: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369680246-S7WBMHGX9JX3OUNLMBNK/Godrej+Verdania+Estate+Mangalia+Indore+%285%29.jpg",
          size: "1800 Sq.Ft."
        },
        {
          image: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369681031-YLWYJHGCVP4XZQG4YP8C/Godrej+Verdania+Estate+Mangalia+Indore+%286%29.jpg",
          label: "2000-2500 sq. ft. Plot - ₹2.00-2.50 Cr*",
          downloadUrl: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369681031-YLWYJHGCVP4XZQG4YP8C/Godrej+Verdania+Estate+Mangalia+Indore+%286%29.jpg",
          size: "2000-2500 Sq.Ft."
        }
      ]
    },
    sizes: [
      { type: "1500 sq. ft. Plot", size: "1500 Sq.Ft." },
      { type: "1800 sq. ft. Plot", size: "1800 Sq.Ft." },
      { type: "2000 sq. ft. Plot", size: "2000 Sq.Ft." },
      { type: "2500 sq. ft. Plot", size: "2500 Sq.Ft." }
    ],
    projectSpecs: {
      landParcel: "24 Acres of Greenery Based Township",
      totalUnits: "Multiple Plot Sizes (1500-2500 sq. ft.)",
      clubHouse: "The Verdania Enclave - 11,000 sq. ft.",
      openSpace: "2.4 Acres Open Community Space",
      roadWidth: "40 ft (12 meters) Boulevard Road",
      kidsArea: "5,000 sq. ft. Kids Play Area",
      carParking: "Individual Plot Parking",
      possession: "2026-2027",
      rera: "P-SWR-25-5891",
      paymentPlan: "Starting From ₹1.50 Cr",
      bookingAmount: "EOI Amount: ₹75,000/-"
    },
    nearbyPlaces: [
      // Hotels
      { name: "Sheraton Hotel", distance: "10 mins", type: "hotel" },
      { name: "Radisson Blu", distance: "20 mins", type: "hotel" },
      { name: "Indore Marriott Hotel", distance: "24 mins", type: "hotel" },
      
      // Malls & Shopping
      { name: "Phoenix Citadel Mall", distance: "15 mins", type: "shopping" },
      { name: "C21 Mall", distance: "22 mins", type: "shopping" },
      { name: "Treasure Island Mall", distance: "30 mins", type: "shopping" },
      
      // Hospitals
      { name: "Bombay Hospital", distance: "20 mins", type: "hospital" },
      { name: "Medanta Hospital", distance: "20 mins", type: "hospital" },
      { name: "Apollo Hospital", distance: "22 mins", type: "hospital" },
      
      // IT Parks & Industrial
      { name: "Indore Industrial Area", distance: "28 mins", type: "commercial" },
      { name: "Crystal IT Park", distance: "35 mins", type: "commercial" },
      { name: "Infosys, TCS, Yash IT Park", distance: "35 mins", type: "commercial" },
      
      // Key Areas
      { name: "Nipania", distance: "15 mins", type: "area" },
      { name: "Palasia", distance: "25 mins", type: "area" },
      { name: "Vijay Nagar", distance: "30 mins", type: "area" },
      { name: "Indore Junction", distance: "30 mins", type: "transport" },
      { name: "Indore Airport", distance: "35 mins", type: "transport" },
      
      // Connectivity
      { name: "A.B. Road", distance: "800 meters", type: "connectivity" },
      { name: "Bypass Road (Hotel Exotica)", distance: "1.3 km", type: "connectivity" },
      { name: "Indore-Ujjain Road via Kshipra Link", distance: "Quick Access", type: "connectivity" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0074596218606!2d75.92223757504753!3d22.802187479328886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631df5e6dfc8f3%3A0xfd8abbe13d8df486!2sVerdania%20Estate%20%7C%20Godrej%20Plots%20Indore!5e0!3m2!1sen!2sus!4v1757015017807!5m2!1sen!2sus",
    locationImage: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369762142-TJBZN7RLKCMZR5NPNVFP/Godrej+Verdania+Estate+Mangalia+Indore+%282%29.jpg",
    locationLink: "https://maps.app.goo.gl/tkhEDdES575xQa716",
    brochures: [
      {
        title: "Godrej Verdania Estate Details",
        type: "Info Docket",
        fileUrl: "/GODREJ VERDANIA ESTATE DETAILS .pdf",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369547593-PDBGFRZWTDAVFVNQBGZM/Godrej+Verdania+Estate+Mangalia+Indore+%281%29.jpg",
        description: "Complete project information including plot sizes, pricing, and amenities"
      },
      {
        title: "Verdania Estate Brochure",
        type: "Layout Plans",
        fileUrl: "/VERDANIA ESTATE-BROCHURE.pdf",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/626c0b5e8e35d4063c28c445/1681369762142-TJBZN7RLKCMZR5NPNVFP/Godrej+Verdania+Estate+Mangalia+Indore+%282%29.jpg",
        description: "Official project brochure with detailed plot layout plans and amenities"
      }
    ]
  },
  // Previous Latest Project - Landmark Skyvue
  {
    id: 19,
    slug: "landmark-skyvue",
    title: "Landmark Skyvue",
    location: "Sector 103, Dwarka Expressway, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2920,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "Ultra Luxury Twin Towers",
    image: "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-Image-1.jpeg",
    amenities: [
      "500 Feet Iconic Twin Towers",
      "Cantilevered Crown Design",
      "Ultra-Low Density - Only 60 Apartments Per Acre",
      "Triple Podium Living Concept (50 Ft High)",
      "Grand Clubhouse with Lush Green Rooftop",
      "Wraparound Balconies for 360° Views",
      "Infinity Pool & Temperature-Controlled Swimming Pool",
      "All Units 3-Side Open for Maximum Sunlight",
      "Private Lifts for 4.5 BHK Residences",
      "Sky Lounge & Observation Deck",
      "Triple-Height Entrance Lobby (35 Ft)",
      "Vehicular-Free Movement Zone",
      "Over 50 Amenities Across Clubhouse",
      "30m-Wide Sector Road Access",
      "A-Grade Construction Partner",
      "Extra-Large Living & Family Lounge",
      "Two Master Bedrooms Per Unit",
      "Barcode Screening in Balconies",
      "Eco-Friendly Rooftop Terrace",
      "Panoramic City Views"
    ],
    images: [
      "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-Image-1.jpeg",
      "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-image-2.jpeg",
      "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-image-4.jpg"
    ],
    description: `Landmark Skyvue is a revolutionary ultra-luxury residential project in Sector 103, Gurgaon, featuring iconic 500-feet twin towers with a unique cantilevered crown design. This project sets new benchmarks in luxury living with ultra-low density of only 60 apartments per acre across 4 acres, introducing India's first triple podium lifestyle concept rising 50 feet above ground. The development offers panoramic 360° views through wraparound balconies, premium clubhouse with eco-friendly rooftop terrace, and over 50 world-class amenities including infinity pool, sky lounge, and vehicular-free environment for ultimate luxury and safety.`,
    projectSpecs: {
      landParcel: "4 Acres",
      towers: 2,
      floors: "G+50 (500 Ft Height)",
      totalUnits: "240 (Ultra-Low Density: 60 Per Acre)",
      clubHouse: "Premium with Eco-Friendly Rooftop Terrace",
      carParking: "Multi-Level Parking",
      possession: "2028",
      rera: "Coming Soon",
      threeSideOpen: true,
      paymentPlan: "30:40:30 with 3-Year Payment Holiday"
    },
    floorPlans: {
      "3 BHK": [
        { image: "https://assets.nobroker.in/media/building/8a9f8585985429a20198547e544f1413/floorPlan/Q6NzOlGoTq1753766015731/Q6NzOlGoTq1753766015731_floorPlan_TlLf4Fv3ES1753766779214.jpg", label: "3 BHK", downloadUrl: "https://assets.nobroker.in/media/building/8a9f8585985429a20198547e544f1413/floorPlan/Q6NzOlGoTq1753766015731/Q6NzOlGoTq1753766015731_floorPlan_TlLf4Fv3ES1753766779214.jpg", size: "2,920 sq. ft." }
      ],
      "4.5 BHK": [
        { image: "https://assets.nobroker.in/media/building/8a9f8585985429a20198547e544f1413/floorPlan/mlIYG627zt1753766053976/mlIYG627zt1753766053976_floorPlan_1Sp8rdaQSg1753766792911.jpg", label: "4.5 BHK", downloadUrl: "https://assets.nobroker.in/media/building/8a9f8585985429a20198547e544f1413/floorPlan/mlIYG627zt1753766053976/mlIYG627zt1753766053976_floorPlan_1Sp8rdaQSg1753766792911.jpg", size: "3,930 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "Dwarka Expressway", type: "Expressway", distance: "400 meters" },
      { name: "IGI Airport", type: "Airport", distance: "25 min" },
      { name: "Cyber City", type: "Business Hub", distance: "20 min" },
      { name: "Delhi Border", type: "City Access", distance: "15 min" },
      { name: "Institutional Area", type: "Educational Hub", distance: "5 min" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    brochures: [
      {
        title: "Landmark Skyvue Price List",
        type: "Price List & Floor Plans",
        fileUrl: "/landmark-skyvue-brochure.pdf",
        thumbnail: "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-Image-1.jpeg",
        description: "Complete pricing details, floor plans, and specifications for Landmark Skyvue ultra-luxury twin towers."
      },
      {
        title: "Landmark Skyvue Master Brochure",
        type: "Project Brochure",
        fileUrl: "/landmark-skyvue-brochure.pdf",
        thumbnail: "https://projectsgurgaon.in/wp-content/uploads/2025/07/Landmark-Skyvue-image-2.jpeg",
        description: "Comprehensive project overview including amenities, location benefits, and investment highlights."
      }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7411967033036!2d76.9926244!3d28.4873397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17d3b17a1fa1%3A0x21f42ebd56d1a617!2sLandmark%20Skyvue%20Experience%20Center!5e0!3m2!1sen!2sin!4v1756542842092!5m2!1sen!2sin"
  },

  {
    id: 18,
    slug: "max-estate-360",
    title: "Max Estate 360",
    location: "Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2611,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-1.jpg",
    amenities: [
      "11.8 Acre Land Parcel (First Phase: 9.43 Acres)",
      "6 Towers, 17 Floors, 4 Units Per Floor",
      "3 Level Basement Parking",
      "Club House (First Phase)",
      "Direct Booking Available",
      "Flexible Payment Plans: 25:25:25:25 or 30:40:30",
      "Modern Security & Amenities",
      "Close to IGI Airport (35 min)",
      "Close to Sector 55-56 Metro (25 min)"
    ],
    description: `Max Estate 360 is a luxury highrise project in Gurgaon, spread over 11.8 acres (first phase: 9.43 acres) with 6 towers, 17 floors, and 4 units per floor. The project features a clubhouse, 3-level basement parking, flexible payment plans, and excellent connectivity to IGI Airport and Sector 55-56 Metro.`,
    projectSpecs: {
      landParcel: "11.8 Acres (First Phase: 9.43 Acres)",
      towers: 6,
      floors: "17",
      unitsPerFloor: "4",
      clubHouse: "First Phase Clubhouse",
      carParking: "3 Level Basement",
      paymentPlan: "25:25:25:25 or 30:40:30",
      possession: "2028"
    },
    sizes: [
      { type: "2 BR + Store", size: "2,149 sq. ft." },
      { type: "3 BR + Servant", size: "2,611 sq. ft." },
      { type: "4 BR + Servant", size: "3,531 sq. ft." }
    ],
    images: [
      "https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-1.jpg",
      "https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-2.jpg",
      "https://maxestates.in/wp-content/uploads/2024/07/estate-360-amenities-big-10.jpg",
      "https://maxestates.in/wp-content/uploads/2024/07/estate-360-spotlight-3.jpg"
    ],
    floorPlans: {
      "2 BR + Store": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", label: "2 BR + Store", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", size: "2,149 sq. ft." }
      ],
      "3 BR + Servant": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", label: "3 BR + Servant", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", size: "2,611 sq. ft." }
      ],
      "4 BR + Servant": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", label: "4 BR + Servant", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png", size: "3,531 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "5 KM" },
      { name: "Gyannanda School", type: "School", distance: "7 KM" },
      { name: "S N International School", type: "School", distance: "6 KM" },
      { name: "Prime Scholars School", type: "School", distance: "4 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "6 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.758748515758!2d76.9486518871582!3d28.421076700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d178a86b5ae6f%3A0x99f9b67e04618c25!2sEstate%20360%20by%20Max%20Estates!5e0!3m2!1sen!2sin!4v1756150190367!5m2!1sen!2sin"
  },

  {
    id: 17,
    slug: "ats-homekraft-sanctuary",
    title: "ATS HomeKraft Sanctuary",
    location: "Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "Ultra Luxury",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/pzh8n6cdx58t4t82buhy.jpeg",
    amenities: [
      "13.1 Acre Land Parcel",
      "4 Level Ultra Luxurious Club House (50,000 sq. ft.)",
      "11 Towers, G+34 Floors",
      "750 Total Units",
      "1000+ Trees",
      "Two Apartments Per Floor",
      "3.5 BHK & 4.5 BHK Units",
      "Modern Security & Amenities",
      "Flexible Payment Plan: 30:40:30"
    ],
    description: `ATS HomeKraft Sanctuary is an ultra-luxury residential project in Gurgaon, spread over 13.1 acres with 11 towers, G+34 floors, and 750 units. The project features a 4-level, 50,000 sq. ft. clubhouse, 1000+ trees, two apartments per floor, and flexible payment plans.`,
    projectSpecs: {
      landParcel: "13.1 Acres",
      towers: 11,
      floors: "G+34",
      totalUnits: "750",
      clubHouse: "50,000 sq. ft. (4 Level Ultra Luxurious)",
      openArea: "1000+ Trees, Two Apartments Each Floor",
      paymentPlan: "30:40:30",
      possession: "2028"
    },
    sizes: [
      { type: "3 BHK", size: "1,850 sq. ft." },
      { type: "3 BHK", size: "1,900 sq. ft." },
      { type: "4 BHK", size: "2,800 sq. ft." },
      { type: "4 BHK", size: "2,900 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/pzh8n6cdx58t4t82buhy.jpeg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/1.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/ats-homekraft-sanctuary-105-1.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/dac4bca3a39f9c8c29af94260e3174.jpg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", size: "1,850 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", size: "1,900 sq. ft." }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", size: "2,800 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-160452.png", size: "2,900 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.736225413609!2d77.00360107524781!3d28.487489375744246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d170030b9344b%3A0xeff919724c68cd57!2sATS%20HomeKraft%20Sanctuary%20105!5e0!3m2!1sen!2sin!4v1756149699277!5m2!1sen!2sin"
  },

  {
    id: 16,
    slug: "mrg-crown",
    title: "MRG Crown",
    location: "Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1359,
    yearBuilt: 2027,
    type: "residential",
    status: "new-launch",
    tag: "Deen Dayal Jan Yojna",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/images-6.jpeg",
    amenities: [
      "Gated Community (8.16 Acres)",
      "Land Parcel: 4.5 Acres",
      "Club House (22,000 sq. ft.)",
      "3 Towers, 4 Floors Each",
      "460 Total Units",
      "3 BHK Independent Floors",
      "Excellent Connectivity: Airport, Hospital, School, Mall",
      "15 Minutes to IGI Airport",
      "10 Minutes to Dwarka",
      "Modern Security & Amenities"
    ],
    description: `MRG Crown is a Deen Dayal Jan Yojna gated community project in Gurgaon, spread over 8.16 acres (4.5 acres land parcel) with 3 towers, 4 floors each, and 460 units. The project features a 22,000 sq. ft. clubhouse, 3 BHK independent floors, and excellent connectivity to IGI Airport, Dwarka, hospitals, schools, and malls. Possession is expected in November 2027.`,
    projectSpecs: {
      landParcel: "4.5 Acres",
      towers: 3,
      floors: "4",
      totalUnits: "460",
      clubHouse: "22,000 sq. ft.",
      possession: "Nov 2027",
      openArea: "Gated Community (8.16 Acres)",
    },
    sizes: [
      { type: "3 BHK", size: "1,500 sq. ft." },
      { type: "3 BHK", size: "2,000 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/images-6.jpeg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/blogimage12459063541-bhk-interior-design-cost-in-kolkata.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/banner1.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-4.jpeg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/images-3-2.jpeg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png", size: "1,500 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png", size: "2,000 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png", size: "2,000 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png", size: "2,000 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "5 KM" },
      { name: "Gyannanda School", type: "School", distance: "7 KM" },
      { name: "S N International School", type: "School", distance: "6 KM" },
      { name: "Prime Scholars School", type: "School", distance: "4 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "6 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "2 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.068977153362!2d76.97070988715821!3d28.5091289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17e95ebe8409%3A0xf0a24f3b1cc9c92!2sMRG%20Crown%20-%20Official!5e0!3m2!1sen!2sin!4v1756149534349!5m2!1sen!2sin"
  },

  {
    id: 15,
    slug: "elan-the-presidential",
    title: "Elan The Presidential",
    location: "Sector 106, Dwarka Expressway, Gurgaon, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2450,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/banner.jpg",
    amenities: [
      "30 Acre Luxury Development",
      "3, 4, 5 BHK Apartments & Penthouses",
      "Premium Clubhouse & Lifestyle Amenities",
      "Modern Security & Smart Home Features",
      "Landscaped Gardens & Green Spaces",
      "Swimming Pool, Gym, Spa, Sports Facilities",
      "Children’s Play Area, Jogging Track, Yoga Zone",
      "Multi-level Parking",
      "High-speed Elevators",
      "RERA Registered: 101 of 2022"
    ],
    description: `Elan The Presidential is a luxury residential project in Sector 106, Gurgaon, spread over 30 acres with 3, 4, and 5 BHK apartments and penthouses. Developed by Elan Limited, the project features premium amenities, landscaped gardens, and a prime location on Dwarka Expressway.`,
    projectSpecs: {
      landParcel: "30 Acres",
      towers: undefined,
      floors: undefined,
      totalUnits: undefined,
      clubHouse: "Premium Clubhouse",
      openArea: "Landscaped Gardens, Green Spaces",
      possession: "2028",
      rera: "101 of 2022"
    },
    sizes: [
      { type: "3 BHK", size: "2,450 sq. ft." },
      { type: "4 BHK", size: "1,702 sq. ft." },
      { type: "4 BHK", size: "1,780 sq. ft." },
      { type: "5 BHK", size: "4,075 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/banner.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/1-1.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-106-2_1670215743.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/6.webp"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", size: "2,450 sq. ft." }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", size: "1,702 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", size: "1,780 sq. ft." }
      ],
      "5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", label: "5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg", size: "4,075 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.249757761599!2d77.0014893752484!3d28.502132475736207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d175bb01fdfeb%3A0xcf8b0095afd63a3d!2sElan%20The%20Presidential!5e0!3m2!1sen!2sin!4v1756149269772!5m2!1sen!2sin"
  },

  {
    id: 14,
    slug: "emaar-urban-ascent-sector-112",
    title: "Emaar Urban Ascent Sector 112",
    location: "Sector 112, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2165,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1737626226172-g2.webp",
    amenities: [
      "10 Acre Land Parcel",
      "34 Floors, 6 Towers",
      "4 Apartments Per Floor",
      "816 Total Units",
      "3+ Acre Central Park Area",
      "1 Basement + Stilt Parking",
      "Club House (36,000 sq. ft.)",
      "50% Green Area",
      "Modern Fittings, Wide Balconies, Servant Quarters",
      "Thoughtful Floor Plan Design for Comfort & Privacy",
      "Special Price for First 300 Units",
      "Payment Plan: 20:10:20:50",
      "25 Lakh Booking Amount",
      "Functional, Large Rooms",
      "Modern Security & Amenities"
    ],
    description: `Emaar Urban Ascent in Sector 112, Gurgaon, is a luxury highrise project spread over 10 acres with 6 towers, 34 floors, and 816 units. The project features a 3+ acre central park, 36,000 sq. ft. clubhouse, 50% green area, and modern amenities. Possession is expected in 2028.`,
    projectSpecs: {
      landParcel: "10 Acres",
      towers: 6,
      floors: "34",
      totalUnits: "816",
      clubHouse: "36,000 sq. ft.",
      openArea: "3+ Acre Central Park, 50% Green Area",
      unitsPerFloor: "4",
      carParking: "1 Basement + Stilt",
      possession: "2028",
      paymentPlan: "20:10:20:50",
      bookingAmount: "25 Lakh",
    },
    sizes: [
      { type: "2 BHK", size: "1,295 sq. ft." },
      { type: "3 BHK", size: "1,525 sq. ft." },
      { type: "3 BHK", size: "1,735 sq. ft." },
      { type: "4 BHK", size: "2,003 sq. ft." },
      { type: "4 BHK", size: "2,255 sq. ft." },
      { type: "4 BHK", size: "2,207 sq. ft." }
    ],
    images: [
      "https://100acress-media-bucket.s3.ap-south-1.amazonaws.com/uploads/1737626226172-g2.webp",
      "https://www.doriwalestate.com/uploads/property/emaar-urban-ascent-sector-112-gurugram-ban-1-1735237030.jpg",
      "https://therealtyinfo.in/wp-content/uploads/2024/12/emaar_urban_ascent_feature_image.jpg"
    ],
    floorPlans: {
      "2 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "2 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "1,295 sq. ft." }
      ],
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "1,525 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "1,735 sq. ft." }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "2,003 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "2,255 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png", size: "2,207 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5928837799233!2d77.0189233752492!3d28.521894025725384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b53d050408f%3A0x3b39c1bb26630a21!2sEMAAR%20Urban%20Ascent!5e0!3m2!1sen!2sin!4v1756110255881!5m2!1sen!2sin"
  },

  {
    id: 13,
    slug: "m3m-mansion",
    title: "M3M Mansion",
    location: "Sector 113, Dwarka Expressway, Gurugram, Haryana",
    bedrooms: 4,
    bathrooms: 4,
    area: 2077,
    yearBuilt: 2032,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg",
    amenities: [
      "Modern Architecture with Expansive Green Spaces",
      "Direct Dwarka Expressway Access",
      "Proximity to IGI Airport, Diplomatic Clubhouse, Dwarka Golf Course, Bharat Vandana Park",
      "Clubhouse with Recreational Options",
      "Olympic-sized Swimming Pool",
      "Golf Chip & Putt, Cricket Box, Squash, Basketball, Tennis Court",
      "Well-equipped Gymnasium & Yoga Zone",
      "Mini Theatre & Gaming Zone",
      "Spa, Sauna, Pleasure Spa",
      "Kids’ Play Area, Pet-friendly Parks, Green Spaces",
      "Business Center, Amphitheatre, Banquet Hall, Cycling Track",
      "Central Greens with Reserve Views",
      "Comprehensive Security & Smart Card Access",
      "Ample Surface Parking",
      "Double-height Lobbies with Luxurious Seating",
      "Wrap-around Balconies"
    ],
    description: `M3M Mansion, in Sector 113 along the Dwarka Expressway, Gurugram, is a luxury residential project by M3M India Pvt. Ltd. Spread over 11 acres with 8 high-rise towers and over 950 residences, it offers 3.5, 4.5, and 5 BHK apartments and penthouses with world-class amenities, green spaces, and seamless connectivity. Possession is expected by February 2032.`,
    projectSpecs: {
      landParcel: "11 Acres",
      towers: 8,
      totalUnits: ">950",
      possession: "Feb 2032",
      openArea: "Central Greens, Reserve Greens, Landscaped Areas",
      rera: "RC/REP/HARERA/GGM/802/534/2024/29"
    },
    sizes: [
      { type: "3.5 BHK", size: "2,077 sq. ft." },
      { type: "3.5 BHK", size: "3,415 sq. ft." },
      { type: "4.5 BHK", size: "2,705 sq. ft." },
      { type: "4.5 BHK", size: "3,125 sq. ft." },
      { type: "5 BHK", size: "2,100 sq. ft." },
      { type: "5 BHK", size: "7,000 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra.jpg"
    ],
    floorPlans: {
      "3.5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522.png", label: "3.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522.png", size: "2,077 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509.png", label: "3.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509.png", size: "3,415 sq. ft." }
      ],
      "4.5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459.png", label: "4.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459.png", size: "2,705 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441.png", label: "4.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441.png", size: "3,125 sq. ft." }
      ],
      "5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430.png", label: "5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430.png", size: "2,100 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416.png", label: "5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416.png", size: "7,000 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400.png", label: "5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400.png", size: "7,000 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347.png", label: "5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347.png", size: "7,000 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "7 KM" },
      { name: "Gyannanda School", type: "School", distance: "4 KM" },
      { name: "S N International School", type: "School", distance: "7 KM" },
      { name: "Prime Scholars School", type: "School", distance: "5 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "12 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "12 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "6 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28044.822186425114!2d77.0257894!3d28.5215966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b89af3e9f25%3A0x933e8ef98fc61271!2sM3M%20MANSION!5e0!3m2!1sen!2sin!4v1756109169569!5m2!1sen!2sin"
  },

  {
    id: 12,
    slug: "m3m-crown",
    title: "M3M Crown",
    location: "Sector 111, Dwarka Expressway, Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1555,
    yearBuilt: 2026,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic.jpg",
    amenities: [
      "Contemporary Architecture with Expansive Layouts",
      "Panoramic Views of Central Greens & Water Bodies",
      "Energy-Efficient & Sustainable Design",
      "Direct Dwarka Expressway Access",
      "Proximity to IGI Airport, Diplomatic Clubhouse II, India International Convention Centre, Bharat Vandana Park, Delhi Golf Course, International Sports Complex",
      "Clubhouse (75,000 sq. ft.) with Fitness Center, Spa, Lounge",
      "Rooftop Swimming Pool",
      "Golf Putting, Bowling Alley, Squash & Tennis Court",
      "Themed Gardens: Zen, French, Butterfly Valley",
      "Mini Theater, Multi-cuisine Restaurants, Library",
      "Yoga & Meditation Center, Jogging Track, Gymnasium",
      "Three-tier Security with CCTV & Smart Card Access",
      "5.5-acre Central Green Space",
      "Waterfront Club with Terraced Garden & Café",
      "High-Speed Elevators",
      "Premium Finishes: Wooden Flooring, Imported Marble, Modular Kitchen, Branded Sanitary Ware"
    ],
    description: `M3M Crown, located in Sector 111 along the Dwarka Expressway, Gurugram, is a luxury residential project by M3M India. Spread over 16 acres with 11 high-rise towers (G+31 floors) and 726 exclusive units, it offers 3 and 4 BHK apartments with contemporary architecture, panoramic views, and world-class amenities. Possession is expected by December 2026.`,
    projectSpecs: {
      landParcel: "16 Acres",
      towers: 11,
      floors: "G+31",
      clubHouse: "75,000 sq. ft.",
      totalUnits: "726",
      possession: "Dec 2026",
      openArea: "5.5-acre Central Green, Themed Gardens, Water Bodies",
      rera: "GGM/687/419/2023/31"
    },
    sizes: [
      { type: "3 BHK", size: "1,555 sq. ft." },
      { type: "3 BHK", size: "1,665 sq. ft." },
      { type: "4 BHK", size: "2,270 sq. ft." },
      { type: "4 BHK", size: "2,525 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/img2.jpg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png", size: "1,555 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png", size: "1,665 sq. ft." }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png", size: "2,270 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png", size: "2,525 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png", size: "2,525 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5196543484094!2d77.0321625!3d28.5240963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b4e7adb98f7%3A0x380ad5a84f81b301!2sM3M%20Crown%20At%20Sector%20111!5e0!3m2!1sen!2sin!4v1756062063430!5m2!1sen!2sin"
  },

  {
  id: 11,
  slug: "smartworld-one-dxp",
  title: "Smartworld One DXP",
  location: "Sector 113, Gurgaon/Gurugram, Haryana",
  bedrooms: 2,
  bathrooms: 2,
  area: 1370,
  yearBuilt: 2027,
  type: "residential",
  status: "new-launch",
  tag: "Ultra Luxury",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-3.jpeg",
    amenities: [
      "Ultra Luxurious Residences",
      "Spread Over 16 Acres",
      "Private Elevators",
      "Singapore Based Architecture Benoy",
      "Lush Greenery & Environmental Harmony",
      "Greenswalls & Shaded Seating Area",
      "Sensory Gardens",
      "Expansive 70 x 6 Feet Balconies",
      "Floor to Floor Height 12 Feet",
      "24x7 Coworking Space",
      "24x7 Gym Overlooking Central Green",
      "Fully Modular Kitchen with All White Woods",
      "Club House (110,000 sq. ft.)"
    ],
    description: `Smartworld One DXP is an ultra-luxurious residential project in Sector 113, Gurgaon, spread over 16 acres with 1600 units and a 110,000 sq. ft. clubhouse. The project features 45-storey towers, private elevators, Singapore-based architecture by Benoy, lush greenery, sensory gardens, expansive balconies, and a host of world-class amenities. Possession is expected in 2027.`,
    projectSpecs: {
      landParcel: "16 Acres",
      towers: 45,
      clubHouse: "110,000 sq. ft.",
      possession: "2027",
      paymentPlan: "20:20:20:20:20",
      floors: "45 Storey",
      openArea: "Lush Greenery, Sensory Gardens, Greenswalls, Shaded Seating Area"
    },
    sizes: [
      { type: "2.5 BHK", size: "1370 sq. ft." },
      { type: "3.5 BHK + Utility", size: "2050 sq. ft." },
      { type: "4.5 BHK + Utility", size: "3006 sq. ft. onwards" }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-3.jpeg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/Smart-World-one-dxp-sec-113.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358.jpg"
    ],
    floorPlans: {
      "2.5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png", label: "2.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png", size: "1370 sq. ft." }
      ],
      "3.5 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png", label: "3.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png", size: "2050 sq. ft." }
      ],
      "4.5 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png", label: "4.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png", size: "3006 sq. ft. onwards" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png", label: "4.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png", size: "3006 sq. ft. onwards" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png", label: "4.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png", size: "3006 sq. ft. onwards" }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "6 KM" },
      { name: "Gyannanda School", type: "School", distance: "8 KM" },
      { name: "S N International School", type: "School", distance: "7 KM" },
      { name: "Prime Scholars School", type: "School", distance: "5 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "11 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "11 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "5 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.757452799676!2d77.02252134119595!3d28.52833407570108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b7ebaf30413%3A0x8ce03ac63bcaa3ad!2sSmartworld%20ONE%20DXP!5e0!3m2!1sen!2sin!4v1756061571390!5m2!1sen!2sin"
  },
  

  {
    id: 10,
    slug: "signature-global-twin-tower-dxp",
    title: "Signature Global Twin Tower DXP",
    location: "Sector 37D, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2650,
    yearBuilt: 2031,
    type: "residential",
    status: "new-launch",
    tag: "Luxury Highrise",
  image: "https://www.yhataw.com/wp-content/uploads/2024/12/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg",
    amenities: [
      "Highrise Residential Complex (2 Towers, 45 Storeys)",
      "Singapore Based Architectural Firm Benoy",
      "24 Meter Road",
      "Twin Tower on 5 Acres",
      "Double Level Basement Parking",
      "Luxurious Apartment",
      "Well Connected",
      "Club House (40,000 sq. ft.)",
      "40+ Lifestyle Amenities",
      "Lush Greenery",
      "Gift for Booking: Rado Wrist Watch"
    ],
    description: "Signature Global Twin Tower DXP is a luxury highrise residential complex in Sector 37D, Gurgaon, comprising two towers of 45 storeys each, designed by Singapore-based Benoy. Spread over 5 acres with 300 units, the project features a 40,000 sq. ft. clubhouse, double level basement parking, 40+ lifestyle amenities, and lush green surroundings. Possession is expected in 2031.",
    projectSpecs: {
      landParcel: "5 Acres",
      towers: 2,
      floors: "G + 45",
      clubHouse: "40,000 sq. ft.",
      totalUnits: "300",
      possession: "2031",
      paymentPlan: "30:40:40"
    },
    sizes: [
      { type: "3 BHK", size: "2650 sq. ft. (2 Car Parking)" },
      { type: "3.5 BHK", size: "2980 sq. ft. (2 Car Parking)" },
      { type: "4.5 BHK", size: "3785 sq. ft. (3 Car Parking)" }
    ],
    images: [
      "https://www.yhataw.com/wp-content/uploads/2024/12/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg",
      "https://www.signatureglobal.in/blog/wp-content/uploads/2024/10/image-2.png",
      "https://www.yhataw.com/wp-content/uploads/2024/12/Signature-Global-Twin-Tower-DXP-luxury-home5.jpg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png" }
      ],
      "3.5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png", label: "3.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png", label: "3.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png" }
      ],
      "4.5 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png", label: "4.5 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png" }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "6 KM" },
      { name: "Gyannanda School", type: "School", distance: "8 KM" },
      { name: "S N International School", type: "School", distance: "7 KM" },
      { name: "Prime Scholars School", type: "School", distance: "5 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "11 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "11 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "5 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.09769842417!2d76.95919067524498!3d28.414962475784254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d000efffd0f%3A0x7b2ba3b8a3563684!2sSignature%20Global%20Twin%20Tower%20DXP!5e1!3m2!1sen!2sin!4v1756060760831!5m2!1sen!2sin"
  },
  {
    id: 9,
    slug: "signature-global-dxp-sec-37d",
    title: "Signature Global DXP Sec 37D",
    location: "Sector 37D, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2623,
    yearBuilt: 2031,
    type: "residential",
    status: "new-launch",
    tag: "Affordable Housing",
  image: "https://risehomesholding.com/media/product/567588151_de-luxe%2037d.webp",
    amenities: [
      "Affordable Housing Scheme",
      "No Maintenance for 5 Years",
      "Low Interest Rate on Home Loans",
      "Club House (80,000 sq. ft.)",
      "10 Towers",
      "900 Units",
      "Flexible Payment Plan (30:40:30)"
    ],
    description: "Signature Global DXP Sec 37D is part of the affordable housing scheme in Gurgaon, spread over 17.5 acres with 10 towers and 900 units. The project offers no maintenance for five years, low interest rates on home loans, a grand clubhouse, and flexible payment plans. Possession is expected in 2031.",
    projectSpecs: {
      landParcel: "17.5 Acres",
      towers: 10,
      clubHouse: "80,000 sq. ft.",
      totalUnits: "900",
      possession: "2031",
      paymentPlan: "30:40:30"
    },
    sizes: [
      { type: "3 BHK + Utility", size: "2623 sq. ft." },
      { type: "3.5 BHK + Utility", size: "2800 sq. ft." },
      { type: "4.5 BHK + Utility", size: "3253 sq. ft." }
    ],
    images: [
      "https://risehomesholding.com/media/product/567588151_de-luxe%2037d.webp",
      "https://riseinfraventures.com/media/product/923552714_signature%20global%20deluxe%20dxp.webp",
      "https://www.yhataw.com/wp-content/uploads/2024/07/Signature-global-deluxe-dxp-living-room-5.png"
    ],
    floorPlans: {
      "3 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410.png", label: "3 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410.png" }
      ],
      "3.5 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png", label: "3.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png" }
      ],
      "4.5 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png", label: "4.5 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png" }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "4 KM" },
      { name: "Gyannanda School", type: "School", distance: "6 KM" },
      { name: "S N International School", type: "School", distance: "5 KM" },
      { name: "Prime Scholars School", type: "School", distance: "3 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "7 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "3 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13228.605591432603!2d76.95599455574106!3d28.445241062277113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17363a37d519%3A0xe5ccd799fd6aa485!2sSignature%20Global%20Deluxe%20DXP!5e1!3m2!1sen!2sin!4v1756060032544!5m2!1sen!2sin"
  },
  {
    id: 6,
    slug: "navraj-the-kingstown-heights",
    title: "Navraj The KingsTown Heights",
    location: "Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2590,
    yearBuilt: 2031,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "https://dhawanproperties.in/wp-content/uploads/2025/04/hall.webp",
    amenities: [
      "Luxury Apartment",
      "30+ Luxury Amenities",
      "5 Royal Clubs",
      "5 Swimming Pools",
      "Restaurant",
      "Commercial Indoor/Outdoor",
      "Valet Parking",
      "Triple Height Lobby",
      "Wide Corridor (135m)",
      "Ceiling Height 12.5 ft",
      "Biggest Clubhouse (1 Lac sq. ft.)"
    ],
    description: "Navraj The KingsTown Heights is a luxury high-rise residential project in Gurgaon, spread over 25 acres with 5 towers and 612 apartments. The project features a 1 lakh sq. ft. clubhouse, 5 royal clubs, 5 swimming pools, triple height lobby, wide corridors, and 30+ luxury amenities. Possession is expected in March 2031.",
    projectSpecs: {
      landParcel: "25 Acres",
      towers: 5,
      floors: "G + 37 Floors",
      clubHouse: "1 Lac sq. ft.",
      carParking: "Valet Parking",
      possession: "March 2031",
      openArea: "9.25 Acres High Rise Building"
    },
    sizes: [
      { type: "3 BHK", size: "2590 sq. ft." },
      { type: "3 BHK", size: "2675 sq. ft." },
      { type: "3 BHK + SR + 3 WR", size: "2400 sq. ft." },
      { type: "4 BHK", size: "3300 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/hall.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623.jpg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-2048x1470.jpg", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-2048x1470.jpg" }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-2048x1470.jpg", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-2048x1470.jpg" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-2048x1470.jpg", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-2048x1470.jpg" }
      ]
    },
    locationImage: "https://dhawanproperties.in/wp-content/uploads/2025/03/location.webp",
    locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0728199387304!2d76.96204607524632!3d28.447753975766148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f4df92b62f%3A0xdcd397ed9699b44c!2sNavraj%20-%20The%20Kingstown%20Heights!5e1!3m2!1sen!2sin!4v1756041913505!5m2!1sen!2sin",
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "kapil dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0728199387304!2d76.96204607524632!3d28.447753975766148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f4df92b62f%3A0xdcd397ed9699b44c!2sNavraj%20-%20The%20Kingstown%20Heights!5e1!3m2!1sen!2sin!4v1756041913505!5m2!1sen!2sin"
  },

  {
    id: 8,
    slug: "hero-home-the-palatial",
    title: "Hero Home The Palatial",
    location: "Sector 104, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2833,
    yearBuilt: 2029,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
  image: "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-The-Palatial-Sector-104-Gurgaon.jpg-r3movceswmnz0w79bz8okd22xvfxp7w4wp5czsdyrs.webp",
  amenities: [
      "7 Star Ultra Luxury Club (60,000 sq. ft.)",
      "3 Level Basement Parking",
      "G + 43 Floors",
      "G + 3 Floor Double Heighted Including Lobby",
      "4 Apartments Per Floor",
      "More than 70% Open & Green Area",
      "4 Side Opening Apartment",
      "5 Lifts Per Floor",
      "4 Core Every Unit Corner",
      "11 Feet Clear Floor to Ceiling Height",
      "Temperature Controlled Swimming Pool",
      "Italian Marble",
      "Smooth Lift System",
      "Modular Kitchen",
      "Smart Home Sensor Device",
      "Gym Maintained by CultFit",
      "Maintained by International Hospitality Brand"
    ],
    description: "Hero Home The Palatial is a luxury residential project in Sector 104, Gurgaon, spread over 10 acres with 5 towers and 688 units. The project features a 7-star ultra luxury club, 3-level basement parking, double heighted lobby, 4 apartments per floor, more than 70% open & green area, and premium amenities. Possession is expected in 2029.",
    projectSpecs: {
      landParcel: "10 Acres",
      towers: 5,
      floors: "G + 43",
      clubHouse: "60,000 sq. ft. (7 Star Ultra Luxury Club)",
      openArea: ">70% Open & Green Area",
      carParking: "3 Level Basement Parking",
      possession: "2029",
      totalUnits: "688",
      apartmentsPerFloor: "4",
      bookingAmount: "10 Lakhs",
      paymentPlan: "Flexible 30 : 30 : 40"
    },
    sizes: [
      { type: "3 BHK + SPR Unit", size: "2833 sq. ft." },
      { type: "4 BHK + SPR Unit", size: "3457 sq. ft." },
      { type: "Penthouse", size: "7000 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-The-Palatial-Sector-104-Gurgaon.jpg-r3movceswmnz0w79bz8okd22xvfxp7w4wp5czsdyrs.webp",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Sector-104-2-r3movbgypsmopa8mhgu1zvamchkkhisekkhviifcy0.jpg",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Gurgaon-r3movbgypsmopa8mhgu1zvamchkkhisekkhviifcy0.jpg"
    ],
    floorPlans: {
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-141506.png", label: "3 BHK + SPR Unit", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-141506.png" }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731-1.png", label: "4 BHK + SPR Unit", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731-1.png" }
      ],
      "Penthouse": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-141530.png", label: "Penthouse", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-141530.png" }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "4 KM" },
      { name: "Gyannanda School", type: "School", distance: "6 KM" },
      { name: "S N International School", type: "School", distance: "5 KM" },
      { name: "Prime Scholars School", type: "School", distance: "3 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "7 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "3 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.934232642906!2d76.99240377524771!3d28.484143075746033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17c0532d6449%3A0x43032991d94545d6!2sHero%20Homes!5e1!3m2!1sen!2sus!4v1756059312512!5m2!1sen!2sus"
  },
  {
    id: 7,
    slug: "bptp-amstoria-verti-greens",
    title: "BPTP Amstoria Verti Greens",
    location: "Gurgaon/Gurugram, Haryana",
    bedrooms: 2,
    bathrooms: 2,
    area: 1656,
    yearBuilt: 2029,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg",
    amenities: [
      "3 Side Open",
      "76% Green Area",
      "Sky Gardens (15 across 5 towers)",
      "Club House (1.55 lakh sq. ft. in Phase 1)",
      "G + 45 Floors",
      "7 Towers",
      "4 Units Per Floor",
      "Modern Security",
      "Power Backup"
    ],
    description: "BPTP Amstoria Verti Greens is a premium residential project in Gurgaon, spread over 12 acres with 7 towers and 15 sky gardens. The project features 3-side open apartments, 76% green area, a grand clubhouse, and modern amenities. First phase covers 9.43 acres. Possession expected in 2029.",
    projectSpecs: {
      landParcel: "12 Acres",
      towers: 7,
      floors: "G + 45 Floors",
      clubHouse: "1.55 lakh sq. ft. (Phase 1)",
      openArea: "76% Green Area",
      possession: "2029",
      unitsPerFloor: "4",
      threeSideOpen: true
    },
    sizes: [
      { type: "2 BHK + Utility", size: "1656 sq. ft." },
      { type: "3 BHK + Utility", size: "2463 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/2.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/4.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/04/924373bd95217c7c1de176f1e64c7b.jpg"
    ],
    floorPlans: {
      "Typical": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png", label: "Floor Plan 1", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png", label: "Floor Plan 2", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png", label: "Floor Plan 3", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png", label: "Floor Plan 4", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png" },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png", label: "Floor Plan 5", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png" }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "4 KM" },
      { name: "Gyannanda School", type: "School", distance: "6 KM" },
      { name: "S N International School", type: "School", distance: "5 KM" },
      { name: "Prime Scholars School", type: "School", distance: "3 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "9 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "7 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "3 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d423210.2008854588!2d76.973205!3d28.471509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d175834c9de41%3A0x3998a147fb38994f!2sBPTP%20Amstoria%20Verti%20Greens!5e1!3m2!1sen!2sus!4v1756054099634!5m2!1sen!2sus"
  },
  {
    id: 5,
    slug: "godrej-vrikshya",
    title: "Godrej Vrikshya",
    location: "Sector 103, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1950,
    yearBuilt: 2029,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-1.webp",
    amenities: [
      "Eco-friendly Living",
      "Lush Greenery",
      "Modern Clubhouse (90,000 sq. ft.)",
      "5-Floor Car Parking",
      "75% Open Area",
      "Sustainable Design",
      "Security",
      "Power Backup"
    ],
    description: "Godrej Vrikshya, located in Sector 103 of Gurugram, is an upcoming residential project that seamlessly blends modern luxury with sustainable living. Developed by Godrej Properties, the project is designed to offer residents a tranquil and eco-friendly lifestyle amidst lush greenery.",
    projectSpecs: {
      landParcel: "15 Acres",
      towers: 6,
      floors: "G + 27 Floors",
      openArea: "75%",
      clubHouse: "90,000 sq. ft.",
      carParking: "5 Floor",
      possession: "2029 (After 4 Years)"
    },
    sizes: [
      { type: "3 BHK", size: "1950 sq. ft." },
      { type: "3 BHK + Utility", size: "2200 sq. ft." },
      { type: "3 BHK + Utility", size: "2400 sq. ft." },
      { type: "4 BHK + Utility", size: "2659 sq. ft." },
      { type: "4 BHK + Utility", size: "3236 sq. ft." },
      { type: "4 BHK + Utility", size: "3700 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-1.webp",
      "https://dhawanproperties.in/wp-content/uploads/2025/03/Untitled-design-30-4.jpg",
      "https://dhawanproperties.in/wp-content/uploads/2025/03/Untitled-design-5-3.png"
    ],
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d423115.84199576377!2d76.974551!3d28.495056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17005bc7e1d3%3A0x39946b316896aa42!2sGodrej%20Vrikshya%2C%20Sector%20103%2C%20Gurgaon!5e1!3m2!1sen!2sus!4v1756040229603!5m2!1sen!2sus"
  },
  {
    id: 3,
    slug: "puri-diplomatic-residences",
    title: "Puri Diplomatic Residences",
    location: "Sector 111, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 2282,
    yearBuilt: 2027,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Gurgaon-r3iu9xbt8yttnztxwxifnsxsnk0k6x5h1tzyc8ylck.webp",
    amenities: [
      "Club House (65,000 sq. ft. + 35,000 sq. ft. Kids)",
      "3 Level Basement Parking",
      "2 Swimming Pools (Rooftop & Indoor)",
      "VRV Air Conditioning",
      "Marble Flooring",
      "Arcop Architect",
      "Multiple Lifts",
      "Security",
      "Power Backup"
    ],
    description: "Puri Diplomatic Residences is a luxury project in Sector 111, Gurgaon/Gurugram, spread over 7 acres. It features 6 towers (5 luxury, 1 super luxury), 3-level basement parking, 2 swimming pools (rooftop & all-weather indoor), and a total of 692 flats (64 are 4BHK, 628 are 3BHK). The project offers VRV air conditioning, marble flooring, and is designed by Arcop Architect. Possession is expected in 2027-2028.",
    projectSpecs: {
      landParcel: "7",
      towers: 6,
      clubHouse: "65,000 + 35,000",
      carParking: "3 Level Basement Parking",
      possession: "2027-2028"
    },
    sizes: [
      { type: "3 BHK + Study Room", size: "2282 sq. ft." },
      { type: "3 BHK + Study Room", size: "2380 sq. ft." },
      { type: "3 BHK + Servant", size: "2440 sq. ft." },
      { type: "4 BHK", size: "3475 sq. ft." }
    ],
    images: [
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Gurgaon-r3iu9xbt8yttnztxwxifnsxsnk0k6x5h1tzyc8ylck.webp",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/proj_img-47043_4-r3iu5770vycxakp2idyymhvd4tb4hpe22fx2h5yums.jpg",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/projGal-2-r3iu5696p4bmyyqfnvkc203wjffra0abqb9kzw08t0.jpg",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/fe8382abd8f83f4d6a3f9a5f106e7e-r3iuuu8jb9ghzngasgyln0y0h6xkgh6gxcjvqvy8wk.jpg"
    ],
    floorPlans: {
      "3 BHK + Study Room": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png", label: "3 BHK + Study Room", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png", size: "2282 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png", label: "3 BHK + Study Room", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png", size: "2380 sq. ft." }
      ],
      "3 BHK + Servant": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png", label: "3 BHK + Servant", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png", size: "2440 sq. ft." }
      ],
      "4 BHK + Utility": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png", label: "4 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png", size: "3475 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png", label: "4 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png", size: "3475 sq. ft." },
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png", label: "4 BHK + Utility", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png", size: "3475 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "3 KM" },
      { name: "Gyannanda School", type: "School", distance: "5 KM" },
      { name: "S N International School", type: "School", distance: "4 KM" },
      { name: "Prime Scholars School", type: "School", distance: "2 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "10 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "4 KM" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.33122913294!2d77.027306!3d28.519304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1963e8b8a9e7%3A0x3422ac343cba04fe!2sPuri%20Diplomatic%20Greens!5e1!3m2!1sen!2sus!4v1756038258325!5m2!1sen!2sus"
  },
  {
    id: 2,
    slug: "sobha-altus-sector-106",
    title: "Sobha Altus Sector 106",
    location: "Dwarka Expressway, Sector 106, Gurugram, Haryana",
    bedrooms: 1,
    bathrooms: 1,
    area: 677,
    yearBuilt: 2025,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
    image: "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.jpg",
    amenities: [
      "Club House (46,080.5 sq. ft.)",
      "Multipurpose Room",
      "Private Terrace",
      "Central Park Area",
      "3 Level Basement Parking",
      "30+ Amenities",
      "Security",
      "Power Backup"
    ],
    description: `SOBHA ALTUS’S 
LUXURY RESIDENCES ARE INFUSE WITH FLUIDIC DESIGN RESONATING WITH
INTERNATIONAL AESTHETICS CONTEMPORARY PARAMATRIC DESIGN AND
QUALITY CONSTRUCTION ON 60 METER ROAD AND NEAR TO DELHI.`,
    projectSpecs: {
      landParcel: "5.51",
      towers: 3,
      clubHouse: "46,080.5",
      carParking: "3 Level Basement Parking",
      openArea: "Central Park, Open Area, Multipurpose Room, Private Terrace",
      possession: "2031"
    },
    floorPlans: {
      "1 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png", label: "1 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png", size: "677-755 sq ft" }
      ]
    },
    images: [
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-04-at-11.41.29%E2%80%AFPM-r5bq23tqm55lt853z018b6xk8g93lzn2u95osqdpn4.png",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.webp",
      "https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.jpg"
    ],
    nearbyPlaces: [
      { name: "DPS", type: "School", distance: "5 KM" },
      { name: "Gyannanda School", type: "School", distance: "7 KM" },
      { name: "S N International School", type: "School", distance: "6 KM" },
      { name: "Prime Scholars School", type: "School", distance: "4 KM" },
      { name: "Medanta Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Forties Hospital", type: "Hospital", distance: "8 KM" },
      { name: "Manipal Hospital", type: "Hospital", distance: "6 KM" },
      { name: "Sri Balaji’s Multi Hospital", type: "Hospital", distance: "2 KM" }
    ],
    sizes: [
      { type: "1 BHK", size: "677-755 sq ft" },
      { type: "3 BHK", size: "2,870-2,958 sq ft" },
      { type: "4 BHK", size: "3,045-3,109 sq ft" },
      { type: "4 BHK with Private Terrace", size: "3,216-3,340 sq ft" },
      { type: "5 BHK", size: "3,690-3,779 sq ft" },
      { type: "5 BHK with Private Terrace", size: "3,853 sq ft" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    }
  },
  {
    id: 4,
    slug: "krisumi-waterfall-residence",
    title: "Krisumi Waterfall Residence",
    location: "Sector 36A, Gurgaon/Gurugram, Haryana",
    bedrooms: 3,
    bathrooms: 3,
    area: 1940,
    yearBuilt: 2028,
    type: "residential",
    status: "new-launch",
    tag: "New Launch",
  image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png",
    amenities: [
      "Japanese Style Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Landscaped Gardens",
      "Kids Play Area",
      "Multi-purpose Hall",
      "24x7 Security",
      "Power Backup"
    ],
    description: "Krisumi Waterfall Residence is a luxury Japanese-themed residential project in Sector 36A, Gurgaon, offering premium 2, 3, and 4 BHK apartments with world-class amenities, lush landscapes, and a grand clubhouse. Developed by Krisumi Corporation, a collaboration between Sumitomo Corporation (Japan) and Krishna Group (India).",
    projectSpecs: {
      landParcel: "5.4 Acres",
      towers: 3,
      floors: "G + 34 Floors",
      openArea: "80%",
      clubHouse: "36,000 sq. ft.",
      carParking: "3 Level Basement Parking",
      possession: "2028 (Phase 2)"
    },
    sizes: [
      { type: "2 BHK", size: "1,478 sq. ft." },
      { type: "3 BHK", size: "1,940 sq. ft." },
      { type: "3 BHK + S", size: "2,505 sq. ft." },
      { type: "4 BHK", size: "2,530 sq. ft." }
    ],
    images: [
  "https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png",
  "https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby.png",
  "https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool.png"
    ],
    floorPlans: {
      "2 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png", label: "2 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png", size: "1,478 sq. ft." }
      ],
      "3 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png", label: "3 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png", size: "1,940 sq. ft." }
      ],
      "3 BHK + S": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png", label: "3 BHK + S", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png", size: "2,505 sq. ft." }
      ],
      "4 BHK": [
        { image: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png", label: "4 BHK", downloadUrl: "https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png", size: "2,530 sq. ft." }
      ]
    },
    nearbyPlaces: [
      { name: "NH-8", type: "Highway", distance: "1 min" },
      { name: "Dwarka Expressway", type: "Expressway", distance: "2 min" },
      { name: "IGI Airport", type: "Airport", distance: "20 min" },
      { name: "Cyber City", type: "Business Hub", distance: "20 min" },
      { name: "Ambience Mall", type: "Mall", distance: "15 min" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13232.130445476601!2d76.973437!3d28.417046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3daba8918f95%3A0x5c81fa76593240e6!2sKrisumi%20Waterfall%20Residences%20Gurgaon!5e1!3m2!1sen!2sus!4v1756039659792!5m2!1sen!2sus"
  },

  // Westin Residences Gurugram - Sector 103
  {
    id: 20,
    slug: "whiteland-westin-residences",
    title: "Whiteland Westin Residences",
    location: "Sector 103, Dwarka Expressway, Gurgaon",
    bedrooms: 3,
    bathrooms: 3,
    area: 2773,
    yearBuilt: 2026,
    type: "residential",
    status: "new-launch",
    tag: "Managed by Marriott International",
    image: "https://images.squarespace-cdn.com/content/v1/682d1a4ec0632f5aa1897927/d88439de-21cb-497e-9115-420b7a0fca2c/Westin+Residences+Gurugram+Render_Club+Drop+Off.jpg",
    amenities: [
      "Managed by Marriott International - The Westin",
      "7-Star Clubhouse (1.75-2 Lakh Sq. Ft.)",
      "Finger-Touched Automated Homes",
      "Breathtaking Views of Aravalli & Clubhouse",
      "Vastu Compliant Architecture",
      "Wellness Amenities (Spa, Yoga Studio, Meditation Zones)",
      "On-site Private Guest Suites",
      "Multi-dome Luxe Clubhouse",
      "In-house Theatre",
      "Pickle-ball Courts",
      "Restaurants & Cafes",
      "Turkish Baths",
      "Heated Olympic Sized Swimming Pool",
      "Naturally Lit Green Basement Concept",
      "Welcoming Water Bodies",
      "24x7 Hotel Inspired Concierge Services",
      "Butler Services",
      "Spectacular City Views from 43rd Floor",
      "Scientifically Designed Layouts",
      "VR Golf Zone",
      "Celestial Waters",
      "Gastronomic Haven",
      "Gym & Yoga",
      "Healing Pavilion",
      "6 Dimensions of Well-being"
    ],
    images: [
      "https://images.squarespace-cdn.com/content/v1/682d1a4ec0632f5aa1897927/d88439de-21cb-497e-9115-420b7a0fca2c/Westin+Residences+Gurugram+Render_Club+Drop+Off.jpg",
      "https://www.larisarealtech.com/wp-content/uploads/2024/11/Whiteland-Westin-Residences-103.jpg",
      "https://www.larisarealtech.com/wp-content/uploads/2024/11/Westin-Residences-Dwarka-Expressway.jpg",
      "https://www.realtynmore.com/wp-content/uploads/2025/06/Whiteland-103-Landscape-Cam01-scaled.jpg"
    ],
    description: `Whiteland Westin Residences in Sector 103, Dwarka Expressway, Gurgaon, offers spacious and luxurious 3.5 and 4.5 BHK apartments. Managed by Marriott International - The Westin, this project promises a refined living experience with sophisticated design, modern conveniences, and a prime location. Live the Westin-way with premium residences, 7-star amenities, and unmatched comfort. Experience 5-star hospitality with hotel-inspired concierge services, butler services, and a magnificent multi-dome clubhouse featuring in-house theatre, cafes, restaurants & multi-podium amenities.`,
    floorPlans: {
      "3.5 BHK": [
        {
          image: "https://westinresidences103.com/wp-content/uploads/2025/07/New-Project-7.png",
          label: "3.5 BHK - 2773 & 2939 Sq.Ft.",
          downloadUrl: "https://westinresidences103.com/wp-content/uploads/2025/07/New-Project-7.png",
          size: "2773 - 2939 Sq.Ft."
        }
      ],
      "4.5 BHK": [
        {
          image: "https://westinresidences103.com/wp-content/uploads/2025/07/4bhk-floor-plan.webp",
          label: "4.5 BHK - 3750 & 4328 Sq.Ft.",
          downloadUrl: "https://westinresidences103.com/wp-content/uploads/2025/07/4bhk-floor-plan.webp",
          size: "3750 - 4328 Sq.Ft."
        }
      ]
    },
    sizes: [
      { type: "3.5 BHK", size: "2773 - 2939 Sq.Ft." },
      { type: "4.5 BHK", size: "3750 - 4328 Sq.Ft." }
    ],
    projectSpecs: {
      landParcel: "21 Acres",
      towers: 1,
      floors: "42 Floors per tower",
      totalUnits: "Around 1,302 units",
      clubHouse: "Exclusive 7-Star Clubhouse (1.75-2 Lakh Sq. Ft.)",
      carParking: "Dedicated parking spaces for each unit",
      possession: "2026",
      rera: "HARERA license 65, 66, 67 of 2024",
      paymentPlan: "Starting From ₹6.75 Cr"
    },
    nearbyPlaces: [
      { name: "IGI Airport", distance: "15 Minutes Drive", type: "transport" },
      { name: "DPS - Delhi Public School, Gurugram", distance: "Adjacent", type: "education" },
      { name: "Golf Course Extension Road", distance: "15 Minutes", type: "connectivity" },
      { name: "Diplomatic Clubhouse", distance: "20 Minutes", type: "commercial" },
      { name: "NH8", distance: "Direct Access", type: "connectivity" },
      { name: "Dwarka Expressway", distance: "Direct Access", type: "connectivity" }
    ],
    agent: {
      name: "Kapil Dhawan",
      phone: "+91 9999628400",
      email: "Dhawanproperties2019@gmail.com",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112221.42895447361!2d76.9869676!3d28.4819662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1757227a24a3%3A0x958454db86d3888c!2sWestin%20Residences%20Gurugram%20-%20Sector%20103%20Gurgaon!5e0!3m2!1sen!2sin!4v1756546742266!5m2!1sen!2sin",
    brochures: [
      {
        title: "Official Info Docket",
        type: "Info Docket",
        fileUrl: "/westin-residences-info-docket.pdf",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/682d1a4ec0632f5aa1897927/d88439de-21cb-497e-9115-420b7a0fca2c/Westin+Residences+Gurugram+Render_Club+Drop+Off.jpg",
        description: "Official WhatsApp Info Docket with comprehensive project details, pricing, and specifications"
      },
      {
        title: "Westin Residences Brochure",
        type: "Project Brochure",
        fileUrl: "/westin-residences-brochure.pdf",
        thumbnail: "https://images.squarespace-cdn.com/content/v1/682d1a4ec0632f5aa1897927/d88439de-21cb-497e-9115-420b7a0fca2c/Westin+Residences+Gurugram+Render_Club+Drop+Off.jpg",
        description: "Complete project details including floor plans, amenities, and pricing"
      },
      {
        title: "Floor Plans & Specifications",
        type: "Floor Plans",
        fileUrl: "/westin-residences-floor-plans.pdf",
        thumbnail: "https://westinresidences103.com/wp-content/uploads/2025/07/New-Project-7.png",
        description: "Detailed floor plans for 3.5 BHK and 4.5 BHK apartments"
      }
    ]
  }
];

// Helper function to get property by ID
export const getPropertyById = (id: string | number): Property | undefined => {
  return properties.find(property => property.id === Number(id))
}

// Helper function to get property by slug
export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug)
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

// Helper function to get properties sorted by newest first (highest ID first)
export const getPropertiesSortedByNewest = (): Property[] => {
  return [...properties].sort((a, b) => b.id - a.id)
}

// Helper function to get latest property (newest by ID)
export const getLatestProperty = (): Property => {
  return getPropertiesSortedByNewest()[0]
}

// Helper function to get similar properties based on current property
export const getSimilarProperties = (currentPropertyId: number, limit: number = 3): Property[] => {
  const currentProperty = getPropertyById(currentPropertyId.toString())
  if (!currentProperty) return []

  // Filter properties similar to current one
  const similarProperties = properties.filter(property => {
    // Exclude the current property
    if (property.id === currentPropertyId) return false
    
    // Priority matching criteria
    const sameLocation = property.location.toLowerCase().includes(currentProperty.location.toLowerCase().split(',')[0].toLowerCase())
    const sameBedrooms = property.bedrooms === currentProperty.bedrooms
    const sameType = property.type === currentProperty.type
    const similarStatus = property.status === currentProperty.status
    
    // Score-based matching (higher score = more similar)
    let similarity = 0
    if (sameLocation) similarity += 4 // Location is most important
    if (sameBedrooms) similarity += 3 // Bedroom count is important
    if (sameType) similarity += 2 // Property type matters
    if (similarStatus) similarity += 1 // Status is least important
    
    // Return properties with at least some similarity
    return similarity >= 2
  })

  // Sort by similarity score and take the limit
  const sortedSimilar = similarProperties
    .map(property => {
      let similarity = 0
      const sameLocation = property.location.toLowerCase().includes(currentProperty.location.toLowerCase().split(',')[0].toLowerCase())
      const sameBedrooms = property.bedrooms === currentProperty.bedrooms
      const sameType = property.type === currentProperty.type
      const similarStatus = property.status === currentProperty.status
      
      if (sameLocation) similarity += 4
      if (sameBedrooms) similarity += 3
      if (sameType) similarity += 2
      if (similarStatus) similarity += 1
      
      return { property, similarity }
    })
    .sort((a, b) => b.similarity - a.similarity)
    .map(item => item.property)
    .slice(0, limit)

  // If we don't have enough similar properties, fill with newest properties
  if (sortedSimilar.length < limit) {
    const newestProperties = getPropertiesSortedByNewest()
      .filter(property => property.id !== currentPropertyId)
      .filter(property => !sortedSimilar.some(similar => similar.id === property.id))
      .slice(0, limit - sortedSimilar.length)
    
    return [...sortedSimilar, ...newestProperties]
  }

  return sortedSimilar
}

// Debug helper to verify property ordering (can be removed in production)
export const debugPropertyOrder = () => {
  const sorted = getPropertiesSortedByNewest()
  console.log("Properties sorted by newest first (ID order):")
  sorted.slice(0, 5).forEach((prop, index) => {
    console.log(`${index + 1}. ID: ${prop.id} - ${prop.title}`)
  })
  console.log("Latest property:", getLatestProperty().title, `(ID: ${getLatestProperty().id})`)
}
