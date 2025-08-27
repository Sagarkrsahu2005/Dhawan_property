
export interface ProjectSpecs {
  landParcel?: string;
  towers?: number;
  floors?: string;
  openArea?: string;
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
  locationImage?: string;
  locationLink?: string;
}

export const properties: Property[] = [

  {
    id: 18,
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
      "Proximity to IGI Airport, Diplomatic Enclave, Dwarka Golf Course, Bharat Vandana Park",
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
      "Proximity to IGI Airport, Diplomatic Enclave II, India International Convention Centre, Bharat Vandana Park, Delhi Golf Course, International Sports Complex",
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
      name: "Rajesh Dhawan",
      phone: "+91 9999628400",
      email: "rajesh@dhawanproperties.in",
      image: "/professional-real-estate-agent.png"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.0728199387304!2d76.96204607524632!3d28.447753975766148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f4df92b62f%3A0xdcd397ed9699b44c!2sNavraj%20-%20The%20Kingstown%20Heights!5e1!3m2!1sen!2sin!4v1756041913505!5m2!1sen!2sin"
  },

  {
    id: 8,
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
