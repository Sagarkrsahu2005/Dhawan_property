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
    "image": "/luxury-villa-garden-pool.png",
    "amenities": [
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
    "description": "Godrej Vrikshya, located in Sector 103 of Gurugram, is an upcoming residential project that seamlessly blends modern luxury with sustainable living. Developed by Godrej Properties, the project is designed to offer residents a tranquil and eco-friendly lifestyle amidst lush greenery. The project features 6 towers with G+27 floors, 75% open area, and a massive 90,000 sq.ft club house.",
    "images": [
      "/luxury-villa-garden-pool.png",
      "/luxury-modern-residence.png",
      "/modern-apartment-building.png",
      "/comfortable-family-house.png"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • 1,950 sq.ft",
          "downloadUrl": "/floor-plans/godrej-3bhk-a.pdf"
        },
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK+Utility • 2,200 sq.ft",
          "downloadUrl": "/floor-plans/godrej-3bhk-utility-a.pdf"
        },
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK+Utility • 2,400 sq.ft",
          "downloadUrl": "/floor-plans/godrej-3bhk-utility-b.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK+Utility • 2,659 sq.ft",
          "downloadUrl": "/floor-plans/godrej-4bhk-utility-a.pdf"
        },
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK+Utility • 3,236 sq.ft",
          "downloadUrl": "/floor-plans/godrej-4bhk-utility-b.pdf"
        },
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK+Utility • 3,700 sq.ft",
          "downloadUrl": "/floor-plans/godrej-4bhk-utility-c.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "15 Acres",
      "towers": 6,
      "floors": "G+27",
      "openArea": "75%",
      "clubHouse": "90,000 sq.ft",
      "carParking": "5 Floors",
      "possession": "2029",
      "waitTime": "4 Years"
    },
    "nearbyPlaces": [
      {
        "name": "DPS School",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "2 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 950,
    "title": "Godrej Vrikshya Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/godrej-vrikshya-sector-103-top-20/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/7-1-1170x785-1-r36r24moycqqir9jtfiaorksyuroykboo09c8tka34.webp\" title=\"7-1-1170&#215;785\" alt=\"godrej vrikshya club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-meredian-1-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya SWIMMING POOL\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/maxresdefault-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"godrej vrikshya\" alt=\"kids area Godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2352,
    "title": "Puri Diplomatic Residences",
    "location": "Sector 104, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Parking",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in\">Puri Diplomatic Residences</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Gurgaon-r3iu9xbt8yttnztxwxifnsxsnk0k6x5h1tzyc8ylck.webp\" title=\"Puri-Gurgaon\" alt=\"Puri-Gurgaon\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/proj_img-47043_4-r3iu5770vycxakp2idyymhvd4tb4hpe22fx2h5yums.jpg\" title=\"proj_img-47043_4\" alt=\"Puri Diplomatic Residences club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/projGal-2-r3iu5696p4bmyyqfnvkc203wjffra0abqb9kzw08t0.jpg\" title=\"projGal-2\" alt=\"Puri Diplomatic Residences\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/fe8382abd8f83f4d6a3f9a5f106e7e-r3iuuu8jb9ghzngasgyln0y0h6xkgh6gxcjvqvy8wk.jpg\" title=\"fe8382abd8f83f4d6a3f9a5f106e7e\" alt=\"Puri Diplomatic Residences club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/https-dhawanproperties-in-puri-diplomatic-residences/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/puri-diplomatic-residence-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/puri-diplomatic-residence-layout-2/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/puri-diplomatic-residences-sector-111-luxurious-apartments/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Puri Diplomatic Residences</h2>\t\t\t\t\n\t\t<p>AREA – 7 <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">ACRES</a><br />CLUB HOUSE – 65000 SQ FT, 35000 SQ FT <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">CLUB</a> <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">HOUSE</a> FOR KIDS ( 1 L SQ. FT.<br />TOTAL AREA)<br />TOTAL TOWERS – 6, 5 <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">TOWER</a> LUXURY, 1 TOWER SUPER LUXURY<br />APARTMENT – 2<br />LIFT – 3<br />BASEMENT PARKING – 3 LEVEL<br />2 SWIMMING POOLS ROOF TOP &amp;amp; ALL WEATHER INDOOR ONE<br />BHK SIZE<br />3 BHK + STUDY ROOM 2282 SQ. FT.<br />3 BHK + STUDY ROOM 2380 SQ. FT.<br />3 BHK + SERVANT 2440 SQ. FT.<br />4 BHK 3475 SQ. FT.<br />TOTAL FLOORS – 32<br />TOTAL FLATS – 692 – 64 FLATS 4 BHK<br />628 – FLATS 3 BHK<br />FULL PAYMENT - UNDER 4 YEARS<br />POSSETION YEAR – 2027 – 2028<br />VRV, MARBLE FLOORING, ARCOP ARCHITECT,<br />ROOM SIZE – 11” 14<br />DRAWING – 12” 24<br />KITCHEN – 14” 18<br />MASTER – 12” 18</p><p>DISTANCE –<br />0 KM – DELHI<br />20 MIN - CYBERHUB<br />5 MIN – YASHOBHUMI<br />7 MIN – DWARKA<br />15 MIN – IGI AIRPORT</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"512\" height=\"333\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1.jpg 512w, https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1-300x195.jpg 300w\" sizes=\"(max-width: 512px) 100vw, 512px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"278\" height=\"182\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images.jpeg\" alt=\"puri diplomatic residences\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"630\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-1024x630.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-1024x630.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-300x185.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-768x473.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1.jpg 1170w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"275\" height=\"183\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2.jpeg\" alt=\"puri diplomatic residences\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"739\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-1024x739.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-1024x739.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-300x217.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-768x554.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra.jpg 1247w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"666\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-1024x666.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-1024x666.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-300x195.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-768x500.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-sizes/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3BHK+UTILITY</p><p>(2282)</p><p>3BHK+UTILITY</p><p>(2440)</p><p>3BHK+UTILITY</p><p>(2380)</p><p>4BHK+UTILITY</p><p>(3475)</p>\t\t\n\t\t\t\t\t<h2>Schools &amp; Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/clubhouse-r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/banner2-r3fiuilkwh7ioo1pez8uthqu8rfjgf1c0axksvjh8w.webp\" title=\"banner2\" alt=\"Krisumi Waterfall Residence swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/12-r3iw1pnh323fa69fezsuygeihtslksmek49dc26qds.jpg\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Indoor Games</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/6-r3m5kdglmljuv0znbpyliv2ff1eidk1yvy4hupccuo.webp\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/photo-68450-r38wmb5gid10ipgsfv6wxo2umygp2o38w0qw63kgsw.jpg\" title=\"photo-68450\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw-r3iwe7w60p7rre3fdwf5mssb1e5ezt9ty0qy7ln5lc.webp\" title=\"Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw\" alt=\"puri diplomatic residences\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant & Bar</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1009\" height=\"627\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png 1009w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836-300x186.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836-768x477.png 768w\" sizes=\"(max-width: 1009px) 100vw, 1009px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1004\" height=\"633\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png 1004w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822-300x189.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822-768x484.png 768w\" sizes=\"(max-width: 1004px) 100vw, 1004px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"749\" height=\"458\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png 749w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807-300x183.png 300w\" sizes=\"(max-width: 749px) 100vw, 749px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1006\" height=\"635\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png 1006w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724-300x189.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724-768x485.png 768w\" sizes=\"(max-width: 1006px) 100vw, 1006px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1004\" height=\"628\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png 1004w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-768x480.png 768w\" sizes=\"(max-width: 1004px) 100vw, 1004px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1011\" height=\"634\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png 1011w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-768x482.png 768w\" sizes=\"(max-width: 1011px) 100vw, 1011px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 25:75\n\t\t\t\t\t</a>\n\t\t\t<iframe loading=\"lazy\"\n\t\t\t\t\tsrc=\"https://maps.google.com/maps?q=Puri%20Diplomatic%20Greens%2C%20Bajghera%20Rd%2C%20Sai%20Kunj%2C%20Block%20A%2C%20Sector%20111%2C%20Sector%20110%2C%20Gurugram%2C%20Haryana%20122017&#038;t=m&#038;z=15&#038;output=embed&#038;iwloc=near\"\n\t\t\t\t\ttitle=\"Puri Diplomatic Greens, Bajghera Rd, Sai Kunj, Block A, Sector 111, Sector 110, Gurugram, Haryana 122017\"\n\t\t\t\t\taria-label=\"Puri Diplomatic Greens, Bajghera Rd, Sai Kunj, Block A, Sector 111, Sector 110, Gurugram, Haryana 122017\"\n\t\t\t></iframe>\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/godrej-vrikshya/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living-r38x8alkcv4g2dj62das94cyte3r3td8ku1q92yz9s.jpeg\" title=\"godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living\" alt=\"godrej vrikshya luxurious apartment\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/godrej-vrikshya/\">Godrej Vrikshya</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/bptp-verti-greens/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck94514omtlbsgv66jay97sagjsvscqt8rhg0.jpg\" title=\"BPTP VERTI GREEN\" alt=\"bptp verti green\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/bptp-verti-greens/\">BPTP Verti Greens</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Sector-104-2-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Sector-104\" alt=\"hero-homes-palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-r3manz9olkw6oyaj7334kj3sokflx4yg4pmwkh3xg0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"navraj-The Kingtown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Navraj KingsTown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/common-img1-highres-r3mapnfcqz6jbzv5ft3903xap873lrl9ozdza6mqds.jpg\" title=\"krisumi water\" alt=\"krisumi water\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\">Krisumi Waterfall Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global DXP 37D</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2590\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2590\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2591\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2591\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2592\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2592\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2593\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2593\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residences-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residences-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "towers": 1,
      "clubHouse": "65000 SQ FT"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2358,
    "title": "M3M Crown",
    "location": "Sector 111, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">M3M Crown Sector 111</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown--r3r96t3p5yqkiyyr148ouqqr7bev370rqk6v53zi1c.jpg\" alt=\"M3M Crown\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" alt=\"xr:d:DAF08qrRI8M:3,j:4023250430552166697,t:23112303\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" alt=\"m3m mention\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-crown-4/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-crown-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/mm-crown-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-crown-2/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>M3M Crown</h2>\t\t\t\t\n\t\t<p data-start=\"63\" data-end=\"79\"><strong data-start=\"63\" data-end=\"79\">Introductio<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">n</a></strong></p><p data-start=\"81\" data-end=\"200\">M3M Crown, situated in Sector 111 along the Dwarka Expres<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">s</a>w<a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">a</a>y in Gurugram, is an epitome <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">of</a> luxury and sophistication. Developed by M3M India, this residential project offers meticulously designed 3 and 4 BHK apartments, combining modern architecture with opulent interiors to provide residents with an unparalleled living experience.</p><p data-start=\"81\" data-end=\"200\"><strong data-start=\"202\" data-end=\"222\"><a style=\"color: #ffffff;\" href=\"http://M3M India+1m3mrealty.com+1\" data-wplink-url-error=\"true\">P</a>roject Overview</strong></p><ul data-start=\"224\" data-end=\"1159\"><li data-start=\"224\" data-end=\"322\"><p data-start=\"226\" data-end=\"322\"><strong data-start=\"226\" data-end=\"240\">Developer:</strong> M3M India</p></li><li data-start=\"323\" data-end=\"420\"><p data-start=\"325\" data-end=\"420\"><strong data-start=\"325\" data-end=\"338\">Location:</strong> Sector 111, Dwarka Expressway, Gurugram</p></li><li data-start=\"421\" data-end=\"519\"><p data-start=\"423\" data-end=\"519\"><strong data-start=\"423\" data-end=\"437\">Land Area:</strong> Approximately 16 acres</p></li><li data-start=\"520\" data-end=\"624\"><p data-start=\"522\" data-end=\"624\"><strong data-start=\"522\" data-end=\"540\">Configuration:</strong> 3 and 4 BHK apartments</p></li><li data-start=\"625\" data-end=\"729\"><p data-start=\"627\" data-end=\"729\"><strong data-start=\"627\" data-end=\"643\">Total Units:</strong> 726 exclusive </p></li><li data-start=\"625\" data-end=\"729\"><p data-start=\"627\" data-end=\"729\"><strong data-start=\"732\" data-end=\"750\">Tower Details:</strong> 11 high-rise towers, each with G+31 floors</p></li><li data-start=\"837\" data-end=\"944\"><p data-start=\"839\" data-end=\"944\"><strong style=\"font-style: inherit;\" data-start=\"947\" data-end=\"962\">Possession:</strong> Expected by December 2026</p></li><li data-start=\"1049\" data-end=\"1159\"><p data-start=\"1051\" data-end=\"1159\"><strong data-start=\"1051\" data-end=\"1073\">RERA Registration:</strong> GGM/687/419/2023/31</p></li></ul><p data-start=\"1161\" data-end=\"1204\"><strong data-start=\"1161\" data-end=\"1204\">Architectural Design and Sustainability</strong></p><p data-start=\"1206\" data-end=\"1371\">M3M Crown showcases contemporary architecture with expansive layouts and abundant natural light. The residences are designed to offer panoramic views of the central greens and water bodies, creating a serene living environment. The project emphasizes sustainable living with energy-efficient designs and ample green spaces.</p><p data-start=\"1373\" data-end=\"1396\"><strong data-start=\"1373\" data-end=\"1396\">Location Advantages</strong></p><ul data-start=\"1398\" data-end=\"2282\"><li data-start=\"1398\" data-end=\"1515\"><p data-start=\"1400\" data-end=\"1515\"><strong data-start=\"1400\" data-end=\"1429\">Dwarka Expressway Access:</strong> Direct connectivity facilitates seamless travel to Delhi and other parts of Gurugram.</p></li><li data-start=\"1516\" data-end=\"2282\"><p data-start=\"1518\" data-end=\"1549\"><strong data-start=\"1518\" data-end=\"1549\">Proximity to Key Landmarks:</strong></p><ul data-start=\"1552\" data-end=\"2282\"><li data-start=\"1552\" data-end=\"1680\"><p data-start=\"1554\" data-end=\"1680\"><strong data-start=\"1554\" data-end=\"1594\">Indira Gandhi International Airport:</strong> Approximately 7 minutes by car.</p></li><li data-start=\"1683\" data-end=\"1797\"><p data-start=\"1685\" data-end=\"1797\"><strong data-start=\"1685\" data-end=\"1711\">Diplomatic Enclave II:</strong> 10 minutes away.</p></li><li data-start=\"1800\" data-end=\"1930\"><p data-start=\"1802\" data-end=\"1930\"><strong data-start=\"1802\" data-end=\"1844\">India International Convention Centre:</strong> 10 minutes drive.</p></li><li data-start=\"1933\" data-end=\"2045\"><p data-start=\"1935\" data-end=\"2045\"><strong data-start=\"1935\" data-end=\"1959\">Bharat Vandana Park:</strong> 15 minutes by car.</p></li><li data-start=\"2048\" data-end=\"2158\"><p data-start=\"2050\" data-end=\"2158\"><strong data-start=\"2050\" data-end=\"2072\">Delhi Golf Course:</strong> 15 minutes drive.</p></li><li data-start=\"2161\" data-end=\"2282\"><p data-start=\"2163\" data-end=\"2282\"><strong data-start=\"2163\" data-end=\"2196\">International Sports Complex:</strong> 15 minutes away.</p></li></ul></li></ul><p data-start=\"2284\" data-end=\"2297\"><strong data-start=\"2284\" data-end=\"2297\">Amenities</strong></p><p data-start=\"2299\" data-end=\"2394\">M3M Crown offers a plethora of world-class amenities designed to enhance residents' lifestyles:</p><ul data-start=\"2396\" data-end=\"3157\"><li data-start=\"2396\" data-end=\"2498\"><p data-start=\"2398\" data-end=\"2498\"><strong data-start=\"2398\" data-end=\"2412\">Clubhouse:</strong> A 75,000 sq. ft. facility featuring a fitness center, spa, and multi-purpose lounge.</p></li><li data-start=\"2499\" data-end=\"2605\"><p data-start=\"2501\" data-end=\"2605\"><strong data-start=\"2501\" data-end=\"2519\">Swimming Pool:</strong> A rooftop pool offering relaxation with panoramic views.</p></li><li data-start=\"2606\" data-end=\"2716\"><p data-start=\"2608\" data-end=\"2716\"><strong data-start=\"2608\" data-end=\"2630\">Sports Facilities:</strong> Golf putting, bowling alley, squash court, and tennis court for sports enthusiasts.</p></li><li data-start=\"2717\" data-end=\"2824\"><p data-start=\"2719\" data-end=\"2824\"><strong data-start=\"2719\" data-end=\"2738\">Themed Gardens:</strong> Zen Garden, French Garden, and Butterfly Valley, among others, promoting a tranquil environment.</p></li><li data-start=\"2825\" data-end=\"2939\"><p data-start=\"2827\" data-end=\"2939\"><strong data-start=\"2827\" data-end=\"2853\">Entertainment Options:</strong> Mini theater, multi-cuisine restaurants, and a library for leisure activities.</p></li><li data-start=\"2940\" data-end=\"3055\"><p data-start=\"2942\" data-end=\"3055\"><strong data-start=\"2942\" data-end=\"2969\">Fitness and Well-being:</strong> Yoga and meditation center, jogging track, and a fully equipped gymnasium.</p></li><li data-start=\"3056\" data-end=\"3157\"><p data-start=\"3058\" data-end=\"3157\"><strong data-start=\"3058\" data-end=\"3071\">Security:</strong> A comprehensive three-tier security system, including CCTV surveillance and smart card access.</p></li></ul><p data-start=\"3159\" data-end=\"3179\"><strong data-start=\"3159\" data-end=\"3179\">Special Features</strong></p><ul data-start=\"3181\" data-end=\"3624\"><li data-start=\"3181\" data-end=\"3291\"><p data-start=\"3183\" data-end=\"3291\"><strong data-start=\"3183\" data-end=\"3205\">Central Landscape:</strong> A 5.5-acre central green space with community and social activity areas, enhancing the sense of communit<a href=\"http://m3mrealty.com\">y</a>.</p></li><li data-start=\"3292\" data-end=\"3400\"><p data-start=\"3294\" data-end=\"3400\"><strong data-start=\"3294\" data-end=\"3314\">Waterfront Club:</strong> A sophisticated club with a terraced garden and café, offering a resort-like experience.</p></li><li data-start=\"3401\" data-end=\"3514\"><p data-start=\"3403\" data-end=\"3514\"><strong data-start=\"3403\" data-end=\"3428\">High-Speed Elevators:</strong> Multiple elevators per tower, ensuring minimal waiting times and efficient vertical transportation.</p></li><li data-start=\"3515\" data-end=\"3624\"><p data-start=\"3517\" data-end=\"3624\"><strong data-start=\"3517\" data-end=\"3538\">Premium Finishes:</strong> Residences feature laminated wooden flooring in bedrooms, imported marble in living/dining areas, modular kitchens with premium fittings, and branded sanitary ware in bathrooms.</p></li></ul><p data-start=\"3626\" data-end=\"3647\"><strong data-start=\"3626\" data-end=\"3647\">Developer Profile</strong></p><p data-start=\"3649\" data-end=\"3814\">M3M India, established in 1998, has emerged as a prominent real estate developer in India, particularly in North India. The company is renowned for identifying emerging real estate markets, delivering projects with speed, class, and innovation. M3M's commitment to quality construction, timely delivery, and contemporary designs has earned it a reputation for excellence in the industry.</p><p data-start=\"3816\" data-end=\"3830\"><strong data-start=\"3816\" data-end=\"3830\">Conclusion</strong></p><p data-start=\"3832\" data-end=\"3957\">M3M Crown in Sector 111, Gurugram, offers a luxurious and sustainable living experience. With its strategic location, world-class amenities, and commitment to quality, it presents an exceptional opportunity for discerning homebuyers and investors seeking a blend of elegance, comfort, and connectivity</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"640\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-08-at-3.41.52-PM-3.jpeg-1024x640.webp\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-08-at-3.41.52-PM-3.jpeg-1024x640.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-08-at-3.41.52-PM-3.jpeg-300x188.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-08-at-3.41.52-PM-3.jpeg-768x480.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/WhatsApp-Image-2024-06-08-at-3.41.52-PM-3.jpeg.webp 1280w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic-1024x576.jpg\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic-1024x576.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic-1536x864.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/M3M-Crown-pic.jpg 1600w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"471\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-1024x471.jpg\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-1024x471.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-300x138.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-768x353.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433.jpg 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"705\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/img2.jpg\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/img2.jpg 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/img2-300x212.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/img2-768x541.jpg 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"320\" height=\"157\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-4.jpeg\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-4.jpeg 320w, https://dhawanproperties.in/wp-content/uploads/2025/04/images-4-300x147.jpeg 300w\" sizes=\"(max-width: 320px) 100vw, 320px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"290\" height=\"174\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-2.jpeg\" alt=\"M3M Crown\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>1,555 </p><p>3 BHK</p><p>1,665</p><p>4 BHK</p><p>2,270</p><p>4 BHK</p><p>2,525</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/re-r3r96vx7qgufhsunkngkk814zh0yqabyqy5bkxvbio.jpg\" title=\"xr:d:DAF82brRWN4:4,j:3975971319361802199,t:24021509\" alt=\"Restaurant\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-p-r3r96u1jcsruukxdvmnbf8i7spa8aw4i2oucmdy3v4.jpg\" title=\"M3M Crown p\" alt=\"Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/unnamed-file-r3r9nb5p59bscizuo90wmku2mu2u7wj4o8hqfziosw.jpg\" title=\".jpg\" alt=\"MRG Crown Mini Theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-gym-r3r96t3p5yqkiyyr148ouqqr7bev370rqk6v53zi1c.jpg\" title=\"M3M Crown gym\" alt=\"gym\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"463\" height=\"298\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png 463w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826-300x193.png 300w\" sizes=\"(max-width: 463px) 100vw, 463px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"464\" height=\"297\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png 464w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819-300x192.png 300w\" sizes=\"(max-width: 464px) 100vw, 464px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"460\" height=\"292\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png 460w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813-300x190.png 300w\" sizes=\"(max-width: 460px) 100vw, 460px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"470\" height=\"304\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png 470w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801-300x194.png 300w\" sizes=\"(max-width: 470px) 100vw, 470px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"499\" height=\"310\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png 499w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751-300x186.png 300w\" sizes=\"(max-width: 499px) 100vw, 499px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"713\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/map-1024x713.jpg\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/map-1024x713.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/map-300x209.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/map-768x535.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/map.jpg 1035w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-m-r3rbtnzcv2la6b6g4mcazb0dc5vcvklls29vndc840.jpg\" title=\"Emaar Urban Ascent m\" alt=\"Emaar urban Ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2010\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2010\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2011\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2011\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2012\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2012\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2013\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2013\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/m3m-crown-4bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/m3m-crown-3bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "floors": "G+31",
      "possession": "2026"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2360,
    "title": "M3M Mansion",
    "location": "Sector 113, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Security",
      "Parking",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">M3M Mansion</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" alt=\"m3m mansion\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/hall-r3r9na7uyfai0x17tqma232m1g7h07fec3u8ypk2z4.webp\" alt=\"Navraj KingsTown\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" alt=\"m3m mention\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-mansion-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-mansion-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-mansion-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/m3m-mansion/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>M3M Mansion</h2>\t\t\t\t\n\t\t<p data-start=\"68\" data-end=\"84\"><strong data-start=\"68\" data-end=\"84\">Introductio<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">n</a></strong></p><p data-start=\"86\" data-end=\"243\">M3M Mansion, nestled in Sector 113 along the Dwarka Expressway in Gurugra<a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">m</a>, <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">is</a> a <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">lux</a>urious residential development by M3M India Pvt. Ltd. This project offers an unparalleled living experience, combining modern architecture with expansive green spaces and world-class amenities. Strategically located at the border of Delhi and Gurgaon, M3M Mansion provides residents with seamless connectivity and a <a style=\"color: #ffffff;\" href=\"http://m3mrealty.com\">s</a>erene environment.</p><p data-start=\"245\" data-end=\"265\"><strong data-start=\"245\" data-end=\"265\">Project Overview</strong></p><ul data-start=\"267\" data-end=\"1204\"><li data-start=\"267\" data-end=\"365\"><p data-start=\"269\" data-end=\"365\"><strong data-start=\"269\" data-end=\"283\">Developer:</strong> M3M India Pvt. Ltd.​</p></li><li data-start=\"366\" data-end=\"463\"><p data-start=\"368\" data-end=\"463\"><strong data-start=\"368\" data-end=\"381\">Location:</strong> Sector 113, Dwarka Expressway, Gurugram​</p></li><li data-start=\"464\" data-end=\"562\"><p data-start=\"466\" data-end=\"562\"><strong data-start=\"466\" data-end=\"480\">Land Area:</strong> Approximately 11 acres​</p></li><li data-start=\"563\" data-end=\"669\"><p data-start=\"565\" data-end=\"669\"><strong data-start=\"565\" data-end=\"583\">Configuration:</strong> 3.5, 4.5, and 5 BHK apartments and penthouse<a href=\"https://m3mbuilders.com/projects/m3m-mansion/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\"> </a></p></li><li data-start=\"670\" data-end=\"774\"><p data-start=\"672\" data-end=\"774\"><strong data-start=\"672\" data-end=\"688\">Total Units:</strong> Over 950 residences​</p></li><li data-start=\"775\" data-end=\"881\"><p data-start=\"777\" data-end=\"881\"><strong data-start=\"777\" data-end=\"795\">Tower Details:</strong> 8 high-rise towers​</p></li><li data-start=\"882\" data-end=\"989\"><p data-start=\"884\" data-end=\"989\"><strong data-start=\"884\" data-end=\"903\">Starting Price:</strong> Available upon request​</p></li><li data-start=\"990\" data-end=\"1093\"><p data-start=\"992\" data-end=\"1093\"><strong data-start=\"992\" data-end=\"1007\">Possession:</strong> Expected by February 2032​<strong data-start=\"1096\" data-end=\"1118\">RERA Registration:</strong> RC/REP/HARERA/GGM/802/534/2024/29​<strong data-start=\"1206\" data-end=\"1249\">Architectural Design and Sustainability</strong></p></li></ul><p data-start=\"1251\" data-end=\"1376\">M3M Mansion is thoughtfully designed to offer spacious interiors with abundant natural light, ensuring a comfortable and luxurious lifestyle. The residences feature:​</p><ul data-start=\"1378\" data-end=\"1790\"><li data-start=\"1378\" data-end=\"1479\"><p data-start=\"1380\" data-end=\"1479\"><strong data-start=\"1380\" data-end=\"1393\">Flooring:</strong> Laminated wooden flooring in bedrooms​</p></li><li data-start=\"1480\" data-end=\"1581\"><p data-start=\"1482\" data-end=\"1581\"><strong data-start=\"1482\" data-end=\"1495\">Kitchens:</strong> Modular kitchens equipped with chimney and hob​</p></li><li data-start=\"1582\" data-end=\"1687\"><p data-start=\"1584\" data-end=\"1687\"><strong data-start=\"1584\" data-end=\"1601\">Living Areas:</strong> Air-conditioning in living and dining areas​<strong data-start=\"1690\" data-end=\"1704\">Bathrooms:</strong> Branded sanitary ware and fittings​</p></li></ul><p data-start=\"1792\" data-end=\"1815\"><strong data-start=\"1792\" data-end=\"1815\">Location Advantages</strong></p><p data-start=\"1817\" data-end=\"1902\">M3M Mansion boasts a strategic location with excellent connectivity to key areas:​</p><ul data-start=\"1904\" data-end=\"2480\"><li data-start=\"1904\" data-end=\"2014\"><p data-start=\"1906\" data-end=\"2014\"><strong data-start=\"1906\" data-end=\"1928\">Dwarka Expressway:</strong> Direct access ensures smooth travel to Delhi and other parts of Gurugram​</p></li><li data-start=\"2015\" data-end=\"2143\"><p data-start=\"2017\" data-end=\"2143\"><strong data-start=\"2017\" data-end=\"2057\">Indira Gandhi International Airport:</strong> Approximately a 7-minute drive​</p></li><li data-start=\"2144\" data-end=\"2255\"><p data-start=\"2146\" data-end=\"2255\"><strong data-start=\"2146\" data-end=\"2169\">Diplomatic Enclave:</strong> Around 15 minutes away​</p></li><li data-start=\"2256\" data-end=\"2367\"><p data-start=\"2258\" data-end=\"2367\"><strong data-start=\"2258\" data-end=\"2281\">Dwarka Golf Course:</strong> Approximately 10 minutes by car​</p></li><li data-start=\"2368\" data-end=\"2480\"><p data-start=\"2370\" data-end=\"2480\"><strong data-start=\"2370\" data-end=\"2394\">Bharat Vandana Park:</strong> About 10 minutes drive​</p></li></ul><p data-start=\"2482\" data-end=\"2495\"><strong data-start=\"2482\" data-end=\"2495\">Amenities</strong></p><p data-start=\"2497\" data-end=\"2582\">M3M Mansion offers a plethora of amenities designed to enhance residents' lifestyles:​</p><ul data-start=\"2584\" data-end=\"3450\"><li data-start=\"2584\" data-end=\"2686\"><p data-start=\"2586\" data-end=\"2686\"><strong data-start=\"2586\" data-end=\"2600\">Clubhouse:</strong> A state-of-the-art facility with various recreational options​</p></li><li data-start=\"2687\" data-end=\"2793\"><p data-start=\"2689\" data-end=\"2793\"><strong data-start=\"2689\" data-end=\"2707\">Swimming Pool:</strong> An Olympic-sized pool for relaxation and fitness​</p></li><li data-start=\"2794\" data-end=\"2904\"><p data-start=\"2796\" data-end=\"2904\"><strong data-start=\"2796\" data-end=\"2818\">Sports Facilities:</strong> Golf chip &amp; putt space, cricket box, squash court, basketball court, and tennis court​</p></li><li data-start=\"2905\" data-end=\"3012\"><p data-start=\"2907\" data-end=\"3012\"><strong data-start=\"2907\" data-end=\"2926\">Fitness Center:</strong> A well-equipped gymnasium and yoga zone</p></li><li data-start=\"3013\" data-end=\"3119\"><p data-start=\"3015\" data-end=\"3119\"><strong data-start=\"3015\" data-end=\"3033\">Entertainment:</strong> Mini theatre and gaming zone​</p></li><li data-start=\"3120\" data-end=\"3221\"><p data-start=\"3122\" data-end=\"3221\"><strong data-start=\"3122\" data-end=\"3135\">Wellness:</strong> Spa, sauna, and pleasure spa​</p></li><li data-start=\"3222\" data-end=\"3336\"><p data-start=\"3224\" data-end=\"3336\"><strong data-start=\"3224\" data-end=\"3250\">Children's Facilities:</strong> Kids' play area, pet-friendly parks, and dedicated green spaces​</p></li><li data-start=\"3337\" data-end=\"3450\"><p data-start=\"3339\" data-end=\"3450\"><strong data-start=\"3339\" data-end=\"3364\">Additional Amenities:</strong> Business center, amphitheatre, banquet hall, and cycling track​</p></li></ul><p data-start=\"3452\" data-end=\"3472\"><strong data-start=\"3452\" data-end=\"3472\">Special Features</strong></p><ul data-start=\"3474\" data-end=\"3986\"><li data-start=\"3474\" data-end=\"3581\"><p data-start=\"3476\" data-end=\"3581\"><strong data-start=\"3476\" data-end=\"3495\">Central Greens:</strong> Unobstructed views of Delhi Reserve Greens and central landscaped areas​<strong data-start=\"3584\" data-end=\"3597\">Security:</strong> Comprehensive perimeter security, CCTV surveillance, and smart card access​<strong data-start=\"3686\" data-end=\"3698\">Parking:</strong> Ample surface parking for visitors and residents​<a href=\"https://m3mbuilders.com/projects/m3m-mansion/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\">m3mbuilders.com+1m3mrealty.com+1</a></p></li><li data-start=\"3785\" data-end=\"3883\"><p data-start=\"3787\" data-end=\"3883\"><strong data-start=\"3787\" data-end=\"3797\">Lobby:</strong> Double-height lobbies with luxurious seating areas​</p></li><li data-start=\"3884\" data-end=\"3986\"><p data-start=\"3886\" data-end=\"3986\"><strong data-start=\"3886\" data-end=\"3900\">Balconies:</strong> Generously sized wrap-around balconies enhancing outdoor living spaces​</p></li></ul><p data-start=\"3988\" data-end=\"4009\"><strong data-start=\"3988\" data-end=\"4009\">Developer Profile</strong></p><p data-start=\"4011\" data-end=\"4136\">M3M India Pvt. Ltd. is a renowned real estate developer known for its commitment to quality, innovation, and timely delivery. With a focus on creating luxurious and sustainable living spaces, M3M has established itself as a leader in the real estate sector, particularly in North India.​</p><p data-start=\"4138\" data-end=\"4152\"><strong data-start=\"4138\" data-end=\"4152\">Conclusion</strong></p><p data-start=\"4154\" data-end=\"4319\">M3M Mansion in Sector 113, Gurugram, offers a unique blend of luxury, comfort, and connectivity. With its strategic location, world-class amenities, and thoughtfully designed residences, it presents an exceptional opportunity for those seeking an elevated living experience. Prospective homeowners and investors are encouraged to explore this remarkable development to fully appreciate its offerings.</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"512\" height=\"333\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1.jpg 512w, https://dhawanproperties.in/wp-content/uploads/2025/04/unnamed-1-300x195.jpg 300w\" sizes=\"(max-width: 512px) 100vw, 512px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"278\" height=\"182\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images.jpeg\" alt=\"puri diplomatic residences\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"630\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-1024x630.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-1024x630.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-300x185.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1-768x473.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Puri-Diplomatic-Residencies-1170x720-1.jpg 1170w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"275\" height=\"183\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2.jpeg\" alt=\"puri diplomatic residences\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"739\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-1024x739.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-1024x739.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-300x217.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra-768x554.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/5xtra.jpg 1247w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"666\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-1024x666.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-1024x666.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-300x195.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910-768x500.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/17086069619910.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3.5 BHK</p><p>2,077 ​</p><p>3.5 BHK</p><p> 3,415</p><p>4.5 BHK</p><p> 2,705</p><p>4.5 BHK</p><p>3,125</p><p>5 BHK</p><p> 2,100  ​</p><p>5 BHK</p><p>7,000 </p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>7 KM</p><p>4 KM</p><p>7 KM</p><p>5 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>12 KM</p><p>12 KM</p><p>10 KM</p><p>6 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Founton-r3rakt4mpp6o48c428b8zmigs6yrjkiqy1hp5zul1s.jpg\" title=\"Founton\" alt=\"Founton\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Water Fountain</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-meredian-1-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya SWIMMING POOL\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/hall-1-r3rak2t5ec6n35ecbwxp1t5k5ekhk1m9if83q8xlw0.webp\" title=\"hall\" alt=\"Hall\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Hall</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"589\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-1024x589.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-1024x589.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-300x173.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-768x442.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522.png 1178w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"591\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-1024x591.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-1024x591.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-300x173.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-768x443.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509.png 1178w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"588\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-1024x588.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-1024x588.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-300x172.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-768x441.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459.png 1201w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"596\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-1024x596.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-1024x596.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-300x175.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-768x447.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441.png 1191w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"582\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-1024x582.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-1024x582.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-300x170.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-768x436.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430.png 1208w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"573\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-1024x573.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-1024x573.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-300x168.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-768x429.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416.png 1207w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"577\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-1024x577.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-1024x577.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-300x169.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-768x433.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400.png 1199w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"580\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-1024x580.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-1024x580.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-300x170.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-768x435.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347.png 1207w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"712\" height=\"756\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/man-1.jpg\" alt=\"location\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/man-1.jpg 712w, https://dhawanproperties.in/wp-content/uploads/2025/04/man-1-283x300.jpg 283w\" sizes=\"(max-width: 712px) 100vw, 712px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-m-r3rbtnzcv2la6b6g4mcazb0dc5vcvklls29vndc840.jpg\" title=\"Emaar Urban Ascent m\" alt=\"Emaar urban Ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-7070\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-7070\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-7071\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-7071\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-7072\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-7072\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-7073\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-7073\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/m3m-mansion-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "possession": "2032"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2362,
    "title": "Emaar Urban Ascent Sector 112 luxurious apartments",
    "location": "Sector 112, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Parking",
      "Restaurant"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Emaar Urban Ascent Sector 112</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.jpg\" alt=\"Emaar Urban Ascent\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" alt=\"emaar-urban-ascent\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-01-at-6.37.17 PM-r564y3u5li53zkn8hgyqy6ix1hafehce3kznyh77yo.png\" alt=\"Screenshot 2025-05-01 at 6.37.17 PM\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-01-at-6.37.44 PM-r564z0qi8pe59xbg5d6ovg81tys9vvyzw3tnr5ufww.png\" alt=\"emaar urban ascent\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/emaar-urban-ascent-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/emaar-urban-ascent-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/emaar-urban-ascent-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Emaar Urban Ascent Sector 112</h2>\t\t\t\t\n\t\t<p><a style=\"color: #ffffff;\" href=\"https://www.google.com/\">Br</a>ief information Emaar  Urban Ascent sector 11<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">2</a></p><p>LAND PARCEL - 10 ACRES<br />FLOORS - 34 FLOORS<br />UNITS PER FLOOR – <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">4</a> APARTMENTS<br />TOWER - <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">6</a><br />TOTAL UNITS – 816<br />CENTRAL PARK AREA – 3 + ACRES<br />1 BASEMENT + STILT ( FOR PARKING )<br />4 APARTMENT EVERY FLOOR<br />CLUB HOUSE - 36000 SQ. FT.<br />POSSESSION - 2028<br />THIS SPECIAL PRICE FOR FIRST 300 UNITS<br />AFTER WHICH PRICE WILL INCREASE – 16500 PER SQ. FT.<br />BHK SIZE PRICE START<br />3 BHK + UTILITY 2165 PER SQ. FT.<br />3 BED ROOM, 4 BR , 1 SR<br />4 BHK + UTILITY 2816 SQ. FT. <br />4 BED ROOM, 5 BR, 1SR<br />4 BHK + UTILITY LARGE 3150 SQ. FT. ON REQUEST<br />4 BED ROOM, 5 BR,1SR LARGE</p><p>50% GREEN AREA</p><p>EMAAR URBAN ASCENT-PAYMENT PLAN DETAILS – 20:10:20:50<br />25 LAKH BOOKING AMT<br />20% WITHIN 30 DAYS<br />10 % WITHIN 45 DAYS<br />20 % UPON COMPLETION OF THE 17 th FLOOR<br />50 % UPON ISSUANCE OF THE OCCUPANCY CERTIFICATE<br />5% UPON OFFER OF POSSESSION<br />FLOOR PLAN – THOUGHT FUL DESIGN, BUILT TO PROVIDE COMFORT, PRIVACY,<br />FUNCTIONALLY, LARGE ROOMS, WIDE BALCONIES, MODERN FITTING, SERVANT<br />QUARTERS MORE CONVENIENT.</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"313\" height=\"161\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-3.jpeg\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-3.jpeg 313w, https://dhawanproperties.in/wp-content/uploads/2025/04/images-3-300x154.jpeg 300w\" sizes=\"(max-width: 313px) 100vw, 313px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"311\" height=\"162\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-1.jpeg\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-1.jpeg 311w, https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-1-300x156.jpeg 300w\" sizes=\"(max-width: 311px) 100vw, 311px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"706\" height=\"385\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Featured-Image-1.jpg\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Featured-Image-1.jpg 706w, https://dhawanproperties.in/wp-content/uploads/2025/04/Featured-Image-1-300x164.jpg 300w\" sizes=\"(max-width: 706px) 100vw, 706px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"740\" height=\"360\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-apartments.webp\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-apartments.webp 740w, https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-apartments-300x146.webp 300w\" sizes=\"(max-width: 740px) 100vw, 740px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"592\" height=\"444\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-5-592x444-1.jpg\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-5-592x444-1.jpg 592w, https://dhawanproperties.in/wp-content/uploads/2025/04/emaar-urban-ascent-5-592x444-1-300x225.jpg 300w\" sizes=\"(max-width: 592px) 100vw, 592px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"505\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1-1024x505.jpeg\" alt=\"Emaar Urban Ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1-1024x505.jpeg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/1-300x148.jpeg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/1-768x379.jpeg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/1-1536x758.jpeg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/1.jpeg 1674w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>2 BHK</p><p>1295</p><p>3 BHK</p><p>1525 </p><p data-start=\"374\" data-end=\"477\">3 BHK</p><p data-start=\"374\" data-end=\"477\">1735</p><p data-start=\"374\" data-end=\"477\">4 BHK</p><p data-start=\"374\" data-end=\"477\"> 2003</p><p>4 BHK</p><p> 2255</p><p>4 BHK</p><p> 2,207</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-01-at-6.38.29 PM-r564zhnlnq1b2wmvekhz4byciwgvqfu5yfkee55csw.png\" title=\"Screenshot 2025-05-01 at 6.38.29 PM\" alt=\"club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-01-at-6.38.48 PM-r564zp6b6eblnsby6nqzoa219zftg0o0ngsa8cu7f4.png\" title=\"Screenshot 2025-05-01 at 6.38.48 PM\" alt=\"pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-01-at-6.39.00 PM-r564zwp0p2lw8o10yr00885q12er5lhvci062kj21c.png\" title=\"Screenshot 2025-05-01 at 6.39.00 PM\" alt=\"playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-f-r3rbtn1io8jzup7ta3xoet8wqrzznvhvfxme63dma8.jpg\" title=\"Emaar Urban Ascent f\" alt=\"Elan Presidential forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Green Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t<h2>About US</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"714\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM-1024x714.png\" alt=\"emaar urban ascent\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM-1024x714.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM-300x209.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM-768x535.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM-1536x1071.png 1536w, https://dhawanproperties.in/wp-content/uploads/2025/05/Screenshot-2025-05-01-at-6.39.17 PM.png 1790w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"488\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-1024x488.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-1024x488.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-300x143.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-768x366.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png 1076w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"602\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Emaar-Urban-Ascent-Location-Map-1024x602.jpg.webp\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Emaar-Urban-Ascent-Location-Map-1024x602.jpg.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Emaar-Urban-Ascent-Location-Map-1024x602.jpg-300x176.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Emaar-Urban-Ascent-Location-Map-1024x602.jpg-768x452.webp 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1520\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-1520\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1521\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1521\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1522\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1522\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1523\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1523\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sector-112-luxurious-apartments-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sector-112-luxurious-apartments-4bhk.pdf"
        }
      ],
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sector-112-luxurious-apartments-2bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "10 Acres",
      "clubHouse": "36000 SQ. FT.<br />POSSESSION - 2028<br />THIS SPECIAL PRICE FOR FIRST 300 UNITS<br />AFTER WHICH PRICE WILL INCREASE – 16500 PER SQ. FT.<br />BHK SIZE PRICE START<br />3 BHK + UTILITY 2165 PER SQ. FT.<br />3 BED ROOM",
      "possession": "2028"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2364,
    "title": "Elan The Presidential Sector 106",
    "location": "Sector 106, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Elan The Presidential Sector 106</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" alt=\"elan\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" alt=\"elan the presidential\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/elan-presidential-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/elan-presidential-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/elan-presidential-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tprice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/elan-presidential/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Elan The Presidential</h2>\t\t\t\t\n\t\t<p data-start=\"42\" data-end=\"119\"><strong data-start=\"42\" data-end=\"119\">Elan The Presidential: A Pinnacle of Luxury Living in Sector 106, Gurgaon</strong></p><p data-start=\"121\" data-end=\"240\">E<a href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">lan</a> The Presidential is a premie<a href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">r</a> residential project situated in Sector 106, Gurgaon, along the rapidly developing Dwark<a href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">a</a> Expressway. Developed by Elan Limited, renowned for its commitment to quality and luxury, this project offers an unparalleled living experience for discerning homeowners.</p><p data-start=\"242\" data-end=\"263\"><a style=\"color: #ffffff;\" href=\"http://Elan+2elan-presidential.in+2DLC Group+2\" data-wplink-url-error=\"true\"><strong data-start=\"242\" data-end=\"263\">Project Overview:</strong></a></p><ul data-start=\"265\" data-end=\"1312\"><li data-start=\"265\" data-end=\"363\"><p data-start=\"267\" data-end=\"363\"><strong data-start=\"267\" data-end=\"281\">Developer:</strong> Elan Limite<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">d</a></p></li><li data-start=\"364\" data-end=\"461\"><p data-start=\"366\" data-end=\"461\"><strong data-start=\"366\" data-end=\"379\">Location:</strong> Sector 106, Dwarka Expressway, Gurgaon.</p></li><li data-start=\"462\" data-end=\"564\"><p data-start=\"464\" data-end=\"564\"><strong data-start=\"464\" data-end=\"482\">Property Type:</strong> Luxury Apartments and Penthouses</p></li><li data-start=\"565\" data-end=\"668\"><p data-start=\"567\" data-end=\"668\"><strong data-start=\"567\" data-end=\"582\">Total Area:</strong> Approximately 30 acres</p></li><li data-start=\"669\" data-end=\"775\"><p data-start=\"671\" data-end=\"775\"><strong data-start=\"671\" data-end=\"689\">Configuration:</strong> 3, 4, and 5 BHK units</p></li><li data-start=\"776\" data-end=\"1096\"><p data-start=\"778\" data-end=\"793\"><strong data-start=\"778\" data-end=\"793\">Unit Sizes:</strong></p><ul data-start=\"796\" data-end=\"1096\"><li data-start=\"897\" data-end=\"995\"><p>3 BHK: Approximately 2,500 sq. ft.</p><p>4 BHK: Approximately 3,200 sq. ft.</p><p>5 BHK: Approximately 4,500 sq. ft.</p></li></ul></li><li data-start=\"1097\" data-end=\"1201\"><p data-start=\"1099\" data-end=\"1201\"><strong style=\"font-style: inherit;\" data-start=\"1204\" data-end=\"1226\">RERA Registration:</strong> 101 of 2022</p></li></ul><p data-start=\"4244\" data-end=\"4369\"> </p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"750\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Elan-The-Presidential-Gallery-Image-4.webp\" alt=\"Elan Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Elan-The-Presidential-Gallery-Image-4.webp 750w, https://dhawanproperties.in/wp-content/uploads/2025/04/Elan-The-Presidential-Gallery-Image-4-300x180.webp 300w\" sizes=\"(max-width: 750px) 100vw, 750px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"471\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner-1024x471.jpg\" alt=\"Elan Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner-1024x471.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner-300x138.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner-768x353.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-the-presidential-banner.jpg 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"823\" height=\"426\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-106-2_1670215743.jpg\" alt=\"Elan Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-106-2_1670215743.jpg 823w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-106-2_1670215743-300x155.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-106-2_1670215743-768x398.jpg 768w\" sizes=\"(max-width: 823px) 100vw, 823px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"492\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1024x492.jpg\" alt=\"Elan The Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1024x492.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-300x144.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-768x369.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1536x737.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner.jpg 1600w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"800\" height=\"600\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/6.webp\" alt=\"Elan The Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/6.webp 800w, https://dhawanproperties.in/wp-content/uploads/2025/04/6-300x225.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/6-768x576.webp 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"578\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1-1.jpg\" alt=\"Elan The Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1-1.jpg 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/1-1-300x173.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/1-1-768x444.jpg 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>2,450</p><p>4 BHK</p><p> 1,702 </p><p>4 BHK</p><p>1,780 </p><p>5 BHK</p><p>4,075 </p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-c-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e c\" alt=\"Elan Presidential club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-scaled-r3rc9n8l1ogrjnyutizzd9ugvz3zqc1bz5j1cpnac0.webp\" title=\"Emaar Urban Ascent Kids\" alt=\"Elan Presidential KIDS area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-f-r3rbtn1io8jzup7ta3xoet8wqrzznvhvfxme63dma8.jpg\" title=\"Emaar Urban Ascent f\" alt=\"Elan Presidential forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-kids-r3rdgew80b0fsxuf30ivthbhx4b7yjtnuu4dfy8f80.jpg\" title=\"elan kids\" alt=\"Elan Presidential garden\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"386\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-1024x386.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-1024x386.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-300x113.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-768x290.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939.png 1060w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"921\" height=\"650\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg 921w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map-300x212.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map-768x542.jpg 768w\" sizes=\"(max-width: 921px) 100vw, 921px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" title=\"Emaar Urban Ascent\" alt=\"emaar-urban-ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar Urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.07 PM-r3pogoul7n8d1597kefps2baf4r483ycb0isjnus5s.png\" title=\"Screenshot 2025-04-01 at 3.21.07 PM\" alt=\"PAREENA COBAN KIDS AREA\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1840\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-1840\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1841\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1841\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1842\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1842\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1843\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1843\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-5bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2366,
    "title": "Sobha Altus",
    "location": "Sector 106, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden",
      "Parking"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in/\">Sobha Altus Sector 106</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-05-04-at-11.41.29 PM-r5bq23tqm55lt853z018b6xk8g93lzn2u95osqdpn4.png\" alt=\"sobha altus\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.jpg\" alt=\"Sobha Altus\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-r3rqyamusa5b8i2ovjfb7dc8cfgnu1qnnq7123t8uo.webp\" alt=\"Sobha Altus\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/sobha-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/sobha-altus-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/sobha-altus-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/sobha-altus-sector-106-2-top-20/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/sobha-altus/\">Sobha Altus Sector 106 in Dwarka Express</a></h2>\t\t\t\t\n\t\t<article dir=\"auto\" data-testid=\"conversation-turn-42\" data-scroll-anchor=\"true\"><p>BRIEF DETAILS ABOUT SOBHA ALTUS PROJECT</p><p><a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">LAND</a> PARCEL - 5.51 <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">ACRES</a><br />CLUB HOUSE - <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">46,080.5</a> SQ. FT.<br />TOTAL TOWER – 03<br />TOWER – 2 ( 3B + G <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">+</a> 28 FLOORS )<br />TOWER – 1 ( 1B + Stilt + 11 FLOORS )<br />TOTAL UNITS – 293<br />UNITS PER FLOOR – 4 APARTMENTS<br />CENTRAL PARK AREA -<br />3 LEVEL OF BASEMENT PARKING<br />OPEN AREA -<br />MULTIPURPOSE ROOM PRIVATE TERRACE<br />30 + AMENITIES<br />POSSESSION - 2031</p><p>SOBHA ALTUS'S <br />LUXURY RESIDENCES ARE INFUSE WITH FLUIDIC DESIGN RESONATING WITH<br />INTERNATIONAL AESTHETICS CONTEMPORARY PARAMATRIC DESIGN AND<br />QUALITY CONSTRUCTION ON 60 METER ROAD AND NEAR TO DELHI.</p></article>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony.webp\" alt=\"sobha altus\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Swimming-Pool.webp\" alt=\"sobha altus\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Swimming-Pool.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Swimming-Pool-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Swimming-Pool-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Zen-Garden.webp\" alt=\"sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Zen-Garden.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Zen-Garden-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Zen-Garden-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-L-shaped-living-and-dining-room.webp\" alt=\"sobha altus\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-L-shaped-living-and-dining-room.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-L-shaped-living-and-dining-room-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-L-shaped-living-and-dining-room-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Jogging-Track.webp\" alt=\"sobha altus\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Jogging-Track.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Jogging-Track-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Jogging-Track-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"275\" height=\"183\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-3-1.jpeg\" alt=\"sobha altus\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Videos</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/05/4.mp4https://dhawanproperties.in/wp-content/uploads/2025/05/3.mp4https://dhawanproperties.in/wp-content/uploads/2025/05/2.mp4https://dhawanproperties.in/wp-content/uploads/2025/05/1.mp4\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>1 BHK  </p><p><strong data-start=\"310\" data-end=\"327\">677-755 sq ft </strong></p><p>3 BHK </p><p><strong data-start=\"359\" data-end=\"376\">2,870-2958 sq ft. </strong></p><p>4 BHK  </p><p><b>3045-3109 sq ft</b></p><p>4 BHK with Private Terrace</p><p><strong data-start=\"359\" data-end=\"376\">3216-3340 sq. ft</strong></p><p>5 BHK  </p><p><b>3690-3779 sq ft</b></p><p>5 BHK with Private Terrace</p><p><strong data-start=\"359\" data-end=\"376\">3853 sq. ft</strong></p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>5 KM</p><p>7 KM</p><p>6 KM</p><p>4 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>8 KM</p><p>8 KM</p><p>6 KM</p><p>2 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-club-house-r3rqy7tc7s1g9o6sc07fhw1uk9uk6yfgnc8km9xfdc.webp\" title=\"sobha Altus club house\" alt=\"Sobha Altus club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-pool-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus swimming Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-play-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-frest-r3rqy8r6em2qla5f6im22dtb5npxenj6zgw23jw174.webp\" title=\"sobha\" alt=\"Sobha Altus Forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-fountain-r3rqy7tc7s1g9o6sc07fhw1uk9uk6yfgnc8km9xfdc.webp\" title=\"Sobha Altus water fountain \" alt=\"Sobha Altus water fountain \" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Water Fountain </h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"439\" height=\"383\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png\" alt=\"sobha Altus layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png 439w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200-300x262.png 300w\" sizes=\"(max-width: 439px) 100vw, 439px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"908\" height=\"589\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155213.png\" alt=\"sobha altus roadmap\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155213.png 908w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155213-300x195.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155213-768x498.png 768w\" sizes=\"(max-width: 908px) 100vw, 908px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" title=\"Emaar Urban Ascent\" alt=\"emaar-urban-ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar Urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.07 PM-r3pogoul7n8d1597kefps2baf4r483ycb0isjnus5s.png\" title=\"Screenshot 2025-04-01 at 3.21.07 PM\" alt=\"PAREENA COBAN KIDS AREA\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2430\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2430\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2431\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2431\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2432\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2432\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2433\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2433\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "1BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "1BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-1bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-4bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">46",
      "possession": "2031"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2370,
    "title": "MRG Crown",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Parking",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">MRG Crown</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"768\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/mrg-1024x768.jpg\" alt=\"MRG Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/mrg-1024x768.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/mrg-300x225.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/mrg-768x576.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/mrg.jpg 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/mrg-crown-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/mrg-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/mrg-crown-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>MRG Crown</h2>\t\t\t\t\n\t\t<p>DEEN <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">DAYAL</a> JAN YOJNA<br />GATED COMMUNITY – 8.16 ACRES<br />LAND PARCEL - <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">4.5</a> ACRES<br /><a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">CLUB</a> HOUSE - 22000 SQ. FT.<br />TOTAL TOWER – 3<br />TOTAL UNITS – 46<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">0</a><br />NO. OF FLOOR – 4 FLOORS PER TOWER<br />POSSESION – NOVEMBER 2027<br />BHK SIZE PARKING BATHROOM PRICE<br />3 BHK 1359 2 CR<br />3 1503 CR<br />3 BHK 1593 CR</p><p>3 BHK INDEPENDENT FLOORS<br />CONNECTIVITY – AIRPORT, HOSPITAL, SCHOOL,MALL<br />15 MINUTE IGI AIRPORT<br />10 MINUTE DWARKA</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"575\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/MRG-Crown-Play-Area-1024x575.jpg\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/MRG-Crown-Play-Area-1024x575.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/MRG-Crown-Play-Area-300x168.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/MRG-Crown-Play-Area-768x431.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/MRG-Crown-Play-Area.jpg 1110w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"318\" height=\"159\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-6.jpeg\" alt=\"mrg crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-6.jpeg 318w, https://dhawanproperties.in/wp-content/uploads/2025/04/images-6-300x150.jpeg 300w\" sizes=\"(max-width: 318px) 100vw, 318px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"290\" height=\"174\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-3-2.jpeg\" alt=\"mrg crown\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"290\" height=\"174\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-4.jpeg\" alt=\"mrg crown\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"850\" height=\"567\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/blogimage12459063541-bhk-interior-design-cost-in-kolkata.jpg\" alt=\"mrg crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/blogimage12459063541-bhk-interior-design-cost-in-kolkata.jpg 850w, https://dhawanproperties.in/wp-content/uploads/2025/04/blogimage12459063541-bhk-interior-design-cost-in-kolkata-300x200.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/blogimage12459063541-bhk-interior-design-cost-in-kolkata-768x512.jpg 768w\" sizes=\"(max-width: 850px) 100vw, 850px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"940\" height=\"564\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner1.jpg\" alt=\"mrg crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner1.jpg 940w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner1-300x180.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner1-768x461.jpg 768w\" sizes=\"(max-width: 940px) 100vw, 940px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK  </p><p>1500</p><p>3 BHK </p><p><strong data-start=\"359\" data-end=\"376\">2000</strong></p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>5 KM</p><p>7 KM</p><p>6 KM</p><p>4 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>8 KM</p><p>8 KM</p><p>6 KM</p><p>2 KM</p>\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/sobha-altus/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrf-club-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.webp\" title=\"mrf club\" alt=\"MRG Crown CLUB HOUSE\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-pool-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus swimming Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-play-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrg-f-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.webp\" title=\"mrg f\" alt=\"MRG Crown forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/unnamed-file-r3r9nb5p59bscizuo90wmku2mu2u7wj4o8hqfziosw.jpg\" title=\".jpg\" alt=\"MRG Crown Mini Theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"906\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png 906w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635-300x176.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635-768x452.png 768w\" sizes=\"(max-width: 906px) 100vw, 906px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"883\" height=\"541\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png 883w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647-300x184.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647-768x471.png 768w\" sizes=\"(max-width: 883px) 100vw, 883px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"869\" height=\"549\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png 869w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655-300x190.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655-768x485.png 768w\" sizes=\"(max-width: 869px) 100vw, 869px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"609\" height=\"465\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png 609w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501-300x229.png 300w\" sizes=\"(max-width: 609px) 100vw, 609px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"626\" height=\"526\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/S-M.webp\" alt=\"LOCATION\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/S-M.webp 626w, https://dhawanproperties.in/wp-content/uploads/2025/04/S-M-300x252.webp 300w\" sizes=\"(max-width: 626px) 100vw, 626px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" title=\"Emaar Urban Ascent\" alt=\"emaar-urban-ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar Urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.07 PM-r3pogoul7n8d1597kefps2baf4r483ycb0isjnus5s.png\" title=\"Screenshot 2025-04-01 at 3.21.07 PM\" alt=\"PAREENA COBAN KIDS AREA\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina Coban</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4140\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-4140\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4141\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4141\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4142\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4142\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4143\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4143\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/mrg-crown-3bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "16 Acres"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2374,
    "title": "Signature Global DXP Sec 37D",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Signature Global DXP Sec 37D</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-31-at-8.45.41 PM-r3obxfkv5dd9jp8tbn0ldh8a3argywgnqw52k0j4eo.png\" alt=\"Screenshot 2025-03-31 at 8.45.41 PM\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-31-at-8.45.59 PM-r3obxhgjj1fu6x630ntuigr7a2i7eao4f5g1ikgc28.png\" alt=\"Screenshot 2025-03-31 at 8.45.59 PM\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-31-at-8.46.07 PM-r3obxiedpvh4ij4pv68h2yinvgdklzrura3izuexw0.png\" alt=\"Screenshot 2025-03-31 at 8.46.07 PM\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-dxp-sec-37d-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-dxp-sec-37d-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-dxp-sec-37d-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/https-dhawanproperties-in-signature-global-dxp-sec-37d/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Signature Global DXP Sec 37D</h2>\t\t\t\t\n\t\t<p data-start=\"0\" data-end=\"126\">PROJECT IS PART OF THE <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">AFFORDABLE</a> HOUSING SCHEME<br />VARIOUS <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">SCHEMES</a> – <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">NO</a> MAINTANANCE FOR FIVE YEARS AND LOW <a href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">INTEREST</a><br />RATE ON HOME LOANS<br />TOTAL LAND – 17.50 ACRES<br />TOTAL TOWER – 10<br />UNIT STARTS AT – 2.85 CR<br />CLUB HOUSE – 80000 SQ FT<br />TOTAL UNITS - 900<br />POSSESION - 2031<br />BHK SIZE<br />3 BHK + UTILITY 2623 SQ. FT.<br />3.5 BHK + UTILITY 2800 SQ. FT.<br />4.5 BHK + UTILITY 3253 SQ. FT.<br />PAYMENT PLAN – 30:40:30</p>\t\t\n\t\t\t\t\t<h2>layout</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-31-at-8.46.07 PM-1.png\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK+UTILITY</p><p>2470</p><p>3.5 BHK+UTILITY</p><p>2623</p><p>4.5 BHK+UTILITY</p><p> 3253 </p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>4 KM</p><p>6 KM</p><p>5 KM</p><p>3 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>9 KM</p><p>9 KM</p><p>7 KM</p><p>3 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/coffe-shop1889-r3nvxs93ozclcrelpb8sv8otda24006hlp730k1t00.jpg\" title=\"NAVRAJ KINGSTOWN\" alt=\"NAVRAJ KINGSTOWN\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-Living-Room-r3nvn6mmm8u6f2sxlqa9qwzo6ub36w3gt8by67rn68.webp\" title=\"Navraj KingdTown mini theatre\" alt=\"Navraj KingdTown mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Living Room</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pool-2-r3o01q2nc9v8nciju9cyawqj6gvth1hmlxk86cp5ow.jpg\" title=\"pool\" alt=\"pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/play-r3o045hmzv6wn2zknt598soefawycw4nxy8dt33jm8.webp\" title=\"play\" alt=\"playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"523\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-1024x523.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-1024x523.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-300x153.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-768x392.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410.png 1201w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"515\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-1024x515.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-1024x515.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-300x151.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-768x387.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 25:25:50\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"669\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/map.webp\" alt=\"location\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/map.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/map-300x196.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/map-768x502.webp 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/godrej-vrikshya/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living-r38x8alkcv4g2dj62das94cyte3r3td8ku1q92yz9s.jpeg\" title=\"godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living\" alt=\"godrej vrikshya luxurious apartment\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/godrej-vrikshya/\">Godrej Vrikshya</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/bptp-verti-greens/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck94514omtlbsgv66jay97sagjsvscqt8rhg0.jpg\" title=\"BPTP VERTI GREEN\" alt=\"bptp verti green\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/bptp-verti-greens/\">BPTP Verti Greens</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Gurgaon-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Gurgaon\" alt=\"Hero The Palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Pool_Area-r3me8c49v4ls3zuhokh3251syrs116iwg0pvsqsjrk.png\" title=\"Pool_Area\" alt=\"Krisumi Waterfall Residence\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\">Krisumi Waterfall Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/40ff805b941d1539f125bc808ae7f8-r3m7k3j94hqirut1i82ra9hn8hvsq3smey7b5szw28.jpg\" title=\"PURI DIPLOMATIC\" alt=\"puri diplomatic\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Puri Diplomatic Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Navraj KingsTown </a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2460\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2460\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2461\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2461\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2462\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2462\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2463\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2463\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-dxp-sec-37d-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-dxp-sec-37d-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "80000 SQ FT<br />TOTAL UNITS - 900<br />POSSESION - 2031<br />BHK SIZE<br />3 BHK + UTILITY 2623 SQ. FT.<br />3.5 BHK + UTILITY 2800 SQ. FT.<br />4.5 BHK + UTILITY 3253 SQ. FT.<br />PAYMENT PLAN – 30:40:30</p>"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2691,
    "title": "Godrej Vrikshya Sector 103 luxurious Apartments",
    "location": "Sector 103, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden",
      "Parking"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/\">Godrej Vrikshya</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-1.webp\" alt=\"Godrej vrikshya\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Untitled-design-5-3.png\" alt=\"Untitled design (5)\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Untitled-design-30-4.jpg\" alt=\"Untitled-design-30\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/about/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/godrej-vrikshya-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/godrej-vrikshya-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/hightlight-godrej-vrikshya-evergreen/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/hightlight-godrej-vrikshya-evergreen/\">Godrej Vrikshya</a></h2>\t\t\t\t\n\t\t<p data-start=\"76\" data-end=\"233\"><strong><a style=\"color: #ffffff;\" href=\"http://Godrej Properties+6godrejvrikshya.com+6godrejgroup.org+6\" data-wplink-url-error=\"true\">Godrej Vrikshya</a>, located i<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">n</a> Sector 103 of Gurugram, is an upcoming residential project that seamlessly blends modern luxury with sustainable living. Developed by Godrej Properties, the project is designed to offer residents a tranquil and eco-friendly lifestyle amidst lus<a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">h</a> greenery.</strong></p><p data-start=\"76\" data-end=\"233\"><strong>LAND PARCEL - 15 ACRES</strong><br /><strong>TOWERS - 6</strong><br /><strong>FLOORS - G + 27 FLOORS</strong><br /><strong>OPEN AREA - 75 %</strong><br /><strong>CLUB HOUSE - 90000 SQ. FT.</strong><br /><strong>CAR PARKING - 5 FLOO<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">R</a></strong><br /><strong>POSSESSION - AFTER <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">4</a> YEARS 2029</strong></p>\t\t\n\t\t\t\t\t<h2>Sample Flat</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/03/WhatsApp-Video-2025-03-12-at-07.38.16-2.mp4\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>ЗВHK</p><p>1950</p><p>3BHK+UTILITY</p><p>2200</p><p>3BHK+UTILITY</p><p>2400</p><p>4BHK+UTILITY</p><p>2659</p><p>4BHK+UTILITY</p><p>3236</p><p>4BHK+UTILITY</p><p>3700</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/7-1-1170x785-1-r36r24moycqqir9jtfiaorksyuroykboo09c8tka34.webp\" title=\"7-1-1170&#215;785\" alt=\"godrej vrikshya club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-meredian-1-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya SWIMMING POOL\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/maxresdefault-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"godrej vrikshya\" alt=\"kids area Godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-08-131734-r41prk1qdgwkin1553hmhqt0gjxb0udfm8hr96buxc.png\" title=\"Screenshot 2025-04-08 131734\" alt=\"Screenshot 2025-04-08 131734\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-08-131722-r41prj3w6mva712ial2zx91jv61xt59pa3u9rwd93k.png\" title=\"Screenshot 2025-04-08 131722\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t<iframe loading=\"lazy\"\n\t\t\t\t\tsrc=\"https://maps.google.com/maps?q=godrej%20vrikshya%20sector%20103&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near\"\n\t\t\t\t\ttitle=\"godrej vrikshya sector 103\"\n\t\t\t\t\taria-label=\"godrej vrikshya sector 103\"\n\t\t\t></iframe>\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/40ff805b941d1539f125bc808ae7f8-r3m7k3j94hqirut1i82ra9hn8hvsq3smey7b5szw28.jpg\" title=\"PURI DIPLOMATIC\" alt=\"puri diplomatic\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Puri Diplomatic Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/bptp-verti-greens/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck94514omtlbsgv66jay97sagjsvscqt8rhg0.jpg\" title=\"BPTP VERTI GREEN\" alt=\"bptp verti green\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/bptp-verti-greens/\">BPTP Verti Greens</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Sector-104-2-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Sector-104\" alt=\"hero-homes-palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-r3manz9olkw6oyaj7334kj3sokflx4yg4pmwkh3xg0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"navraj-The Kingtown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Navraj KingsTown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/common-img1-highres-r3mapnfcqz6jbzv5ft3903xap873lrl9ozdza6mqds.jpg\" title=\"krisumi water\" alt=\"krisumi water\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\">Krisumi Waterfall Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global DXP 37D</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2490\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2490\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2491\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2491\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2492\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2492\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2493\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2493\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "15 Acres",
      "floors": "G+27",
      "clubHouse": "90000 SQ. FT.</strong><br /><strong>CAR PARKING - 5 FLOO<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">R</a></strong><br /><strong>POSSESSION - AFTER <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">4</a> YEARS 2029</strong></p>"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2803,
    "title": "Godrej Vrikshya Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/godrej-vrikshya-sector-103-top-20/\">Godrej Vrikshya-Sizes</a></h2>\t\t\t\t\n\t\t<p>ЗВHK</p><p>1950</p><p>3BHK+UTILITY</p><p>2200</p><p>3BHK+UTILIT</p><p>2400</p><p>3BHK+UTILITY</p><p>2400</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2839,
    "title": "Godrej Vrikshya Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/godrej-vrikshya-sector-103-top-20/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-08-131734-r41prk1qdgwkin1553hmhqt0gjxb0udfm8hr96buxc.png\" title=\"Screenshot 2025-04-08 131734\" alt=\"Screenshot 2025-04-08 131734\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-08-131722-r41prj3w6mva712ial2zx91jv61xt59pa3u9rwd93k.png\" title=\"Screenshot 2025-04-08 131722\" alt=\"godrej vrikshya\" loading=\"lazy\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2917,
    "title": "BPTP Verti Greens Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/bptp-amstoria-verti-greens-sec-102-gurgaon/\">AMENITIES</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150709-r3ip499fbwly3oly25z88ekn2jbsskavlfgeag21ow.png\" title=\"Screenshot 2025-03-28 150709\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150734-r3ip4gs4ukw8okb0u988scobtmaqi54qagoa4nqwb4.png\" title=\"BPTP VERTI GREENS AMENITIES\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150753-r3ip4oaud96j9g03mch9cas0kp9o7pykzhw5yvfqxc.png\" title=\"Screenshot 2025-03-28 150753\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150805-r3ip4s274lbojvun0e3rm9tuy8r52idic0i3vza68g.png\" title=\"BPTP VERTI GREENS AMENITIES\" alt=\"BPTP VERTI GREENS AMENITIES\" loading=\"lazy\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2926,
    "title": "BPTP Verti Greens Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/bptp-amstoria-verti-greens-sec-102-gurgaon/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2BHK+UTILITY</p><p>(1656)</p><p>3BHK+UTILITY</p><p>(2463)</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/bptp-verti-greens-sizes-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/bptp-verti-greens-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2934,
    "title": "BPTP Verti Green Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/bptp-amstoria-verti-greens-sec-102-gurgaon/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"852\" height=\"591\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png 852w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407-300x208.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407-768x533.png 768w\" sizes=\"(max-width: 852px) 100vw, 852px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"385\" height=\"216\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png 385w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554-300x168.png 300w\" sizes=\"(max-width: 385px) 100vw, 385px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"441\" height=\"233\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png 441w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547-300x159.png 300w\" sizes=\"(max-width: 441px) 100vw, 441px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"395\" height=\"229\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png 395w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539-300x174.png 300w\" sizes=\"(max-width: 395px) 100vw, 395px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"443\" height=\"193\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png 443w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606-300x131.png 300w\" sizes=\"(max-width: 443px) 100vw, 443px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2964,
    "title": "Krisumi Waterfall Residences Sector 36A",
    "location": "Sector 36, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Krisumi Waterfall Residences Sector 36A</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Pool_Area-r3me8c4a3wcu8yjitx6c2ihh0p8o96dkkzfs7ua05k.png\" alt=\"Krisumi Waterfall Residence\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/common-img1-highres-1-r3me8c4a3wcu8yjitx6c2ihh0p8o96dkkzfs7ua05k.jpg\" alt=\"Krisumi Waterfall Residence\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/krisumi-waterfall-residence-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/krisumi-waterfall-residence-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/krisumi-waterfall-residence-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/krisumi-waterfall-residence-2/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Krisumi Waterfall Residence</h2>\t\t\t\t\n\t\t<p><a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">S</a>ECTOR – 36 A<br />JA<a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">P</a>ANESE PROJECT<br />LAND – 35 ACRES<br />CLUB HOUSE – 160000 SQ.FT.<br />TOTAL TOWER – <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">6</a><br />TOTAL UNITS – 612<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">,</a><br />STARTING PRICE – 2.25 CR<br />ADVANCE BOOKING – 5 L<br />4 PENT HOUSE IN EACH TOWER<br />DUPLEX PENT HOUSE - 3600 – 4400 SQ. FT.<br />PENT HOUSE WITH POOL - 6500 SQ. FT.</p><p>LDK AREA <br />2 LDK 1800 SQ. FT<br />3 LDK 3200SQ. FT. <br />3 LDK + S <br />ROOM SIZE - 11”12, 12”15</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"577\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1024x577.jpg\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1024x577.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1536x865.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"297\" height=\"170\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-1.jpeg\" alt=\"Signature Global Twin Tower DXP\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1024x512.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/services/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3BHK</p><p>1740</p><p>3BHK</p><p>7046</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>6 KM</p><p>8 KM</p><p>7 KM</p><p>5 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>11 KM</p><p>11 KM</p><p>9 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/clubhouse-r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/banner2-r3fiuilkwh7ioo1pez8uthqu8rfjgf1c0axksvjh8w.webp\" title=\"banner2\" alt=\"Krisumi Waterfall Residence swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/12-r3iw1pnh323fa69fezsuygeihtslksmek49dc26qds.jpg\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Indoor Games</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/6-r3m5kdglmljuv0znbpyliv2ff1eidk1yvy4hupccuo.webp\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/photo-68450-r38wmb5gid10ipgsfv6wxo2umygp2o38w0qw63kgsw.jpg\" title=\"photo-68450\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw-r3iwe7w60p7rre3fdwf5mssb1e5ezt9ty0qy7ln5lc.webp\" title=\"Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw\" alt=\"puri diplomatic residences\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant & Bar</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"358\" height=\"332\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png 358w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631-300x278.png 300w\" sizes=\"(max-width: 358px) 100vw, 358px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"409\" height=\"324\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png 409w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722-300x238.png 300w\" sizes=\"(max-width: 409px) 100vw, 409px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"406\" height=\"251\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731.png 406w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731-300x185.png 300w\" sizes=\"(max-width: 406px) 100vw, 406px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"369\" height=\"264\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png 369w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647-300x215.png 300w\" sizes=\"(max-width: 369px) 100vw, 369px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 25:75\n\t\t\t\t\t</a>\n\t\t\t<iframe loading=\"lazy\"\n\t\t\t\t\tsrc=\"https://maps.google.com/maps?q=krisumi%20waterfall%20residence&#038;t=m&#038;z=15&#038;output=embed&#038;iwloc=near\"\n\t\t\t\t\ttitle=\"krisumi waterfall residence\"\n\t\t\t\t\taria-label=\"krisumi waterfall residence\"\n\t\t\t></iframe>\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/godrej-vrikshya/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living-r38x8alkcv4g2dj62das94cyte3r3td8ku1q92yz9s.jpeg\" title=\"godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living\" alt=\"godrej vrikshya luxurious apartment\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/godrej-vrikshya/\">Godrej Vrikshya</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/bptp-verti-greens/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck94514omtlbsgv66jay97sagjsvscqt8rhg0.jpg\" title=\"BPTP VERTI GREEN\" alt=\"bptp verti green\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/bptp-verti-greens/\">BPTP Verti Greens</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Gurgaon-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Gurgaon\" alt=\"Hero The Palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-r3manz9olkw6oyaj7334kj3sokflx4yg4pmwkh3xg0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"navraj-The Kingtown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Navraj KingsTown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/40ff805b941d1539f125bc808ae7f8-r3m7k3j94hqirut1i82ra9hn8hvsq3smey7b5szw28.jpg\" title=\"PURI DIPLOMATIC\" alt=\"puri diplomatic\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Puri Diplomatic Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global DXP 37D</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2460\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2460\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2461\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2461\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2462\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2462\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2463\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2463\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/krisumi-waterfall-residences-sector-36a-3bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "160000 SQ.FT.<br />TOTAL TOWER – <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">6</a><br />TOTAL UNITS – 612<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2993,
    "title": "Krisumi Waterfall Residence Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/krisumi-waterfall-residences-sector-36a-top-20/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3BHK</p><p>1740</p><p>3BHK</p><p>7046</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/krisumi-waterfall-residence-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3005,
    "title": "Krisumi Waterfall Residence Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/krisumi-waterfall-residences-sector-36a-top-20/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"358\" height=\"332\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631.png 358w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133631-300x278.png 300w\" sizes=\"(max-width: 358px) 100vw, 358px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"409\" height=\"324\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722.png 409w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133722-300x238.png 300w\" sizes=\"(max-width: 409px) 100vw, 409px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"406\" height=\"251\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731.png 406w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133731-300x185.png 300w\" sizes=\"(max-width: 406px) 100vw, 406px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"369\" height=\"264\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647.png 369w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-133647-300x215.png 300w\" sizes=\"(max-width: 369px) 100vw, 369px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3065,
    "title": "Navraj The KingSTown Heights Sector 37D luxurious",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Parking",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Navraj The KingsTown Heights</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-1-r3nvg5s1jt81nz07m6zmm6soe6xcob7o6guc2s6jo0.jpg\" alt=\"forest theme\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-banner-39784-r3nverylhlbukn0kp3geg1d8wrqwccpwbm9ln48ets.jpg\" alt=\"navraj\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-The-Kingstown-Heights-r3nverylhlbukn0kp3geg1d8wrqwccpwbm9ln48ets.jpg\" alt=\"Navraj-The-Kingstown-Heights\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/navraj-kingstown-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/navraj-kingstown-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/navraj-kingstown-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/https-dhawanproperties-in-navraj-the-kingstown/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Navraj The KingsTown heights</h2>\t\t\t\t\n\t\t<p><a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">TOTAL</a> LAND – 25 ACRES<br />HIGH RISE <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">BUILDING</a> – 9.2<a style=\"color: #ffffff;\" href=\"https://www.google.com/\">5</a> ACRES<br />TOWERS – <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">5</a><br />EOI – 3 BHK – 15 L<br />4 BHK – 18 L<br />TOTAL APARTMENTS – 612</p><p>GROUND + 37 FLOORS</p><p>CLUB HOUSE – 1 LAC SQ. FT. ( BIGGEST SIZE OF CLUB HOUSE )<br />POSSESION – MARCH 2031<br />BHK SIZE<br />3 BHK 13800 PER SQ. FT.<br />3 BHK + SR+ 3 WR 2400 SQ. FT.<br />4 BHK 3300 SQ. FT.<br />CEILING HEIGHTS – 12.5 SQ. FT.<br />WIDE CORREDOR – 135 METER<br />TRIPPLE HEIGHT LOBBY<br />LUXURY APARTMENT<br />WITH 30 + LUXURY ALL AMENITIES<br />5 ROYAL CLUB<br />5 SWIMMING POOL<br />RESTAURANT, COMMERCIAL INDOOR / OUTDOOR<br />VOLET PARKINGS</p>\t\t\n\t\t\t\t\t<h2>Video</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/04/navraj.mp4\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"495\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623-1024x495.jpg\" alt=\"Navraj KingsTown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623-1024x495.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623-300x145.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623-768x371.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/The-Kingstown-Heights-Sector-37D-bannefr-50623.jpg 1300w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-The-Kingstown-Heights-Sector-37D-r4dx2spercrykoig8tkuobnla2m8pas50ephz7ufio.jpg\" title=\"Navraj-The-Kingstown-Heights-Sector-37D\" alt=\"Navraj KingsTown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"487\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-image-3.jpg-1024x487.webp\" alt=\"Navraj KingsTown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-image-3.jpg-1024x487.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-image-3.jpg-300x143.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-image-3.jpg-768x365.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-image-3.jpg.webp 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"521\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/hall-1024x521.webp\" alt=\"Navraj KingsTown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/hall-1024x521.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/hall-300x153.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/hall-768x390.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/hall.webp 1129w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"471\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260-1024x471.jpg\" alt=\"Navraj KingsTown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260-1024x471.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260-300x138.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260-768x353.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kings-banner-34260.jpg 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"919\" height=\"520\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj_3.jpg\" alt=\"Navraj KingsTown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj_3.jpg 919w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj_3-300x170.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj_3-768x435.jpg 768w\" sizes=\"(max-width: 919px) 100vw, 919px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t3 BHK <p>2590</p>3 BHK<mark> </mark><p>2675</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/coffe-shop1889-r3nvxs93ozclcrelpb8sv8otda24006hlp730k1t00.jpg\" title=\"NAVRAJ KINGSTOWN\" alt=\"NAVRAJ KINGSTOWN\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-Living-Room-r3nvn6mmm8u6f2sxlqa9qwzo6ub36w3gt8by67rn68.webp\" title=\"Navraj KingdTown mini theatre\" alt=\"Navraj KingdTown mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-1kid-r3nvn5osfesw3guar7vn6f87lgfpz6zqh3ogoxt1cg.webp\" title=\"NAVRAJ KINGSTOWn kids area\" alt=\"NAVRAJ KINGSTOWn kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-1-r3nvg5s1jt81nz07m6zmm6soe6xcob7o6guc2s6jo0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/default-swimming-pools-10877-r3nvyikl0ccmducdfmmct21q02gdzj2z1bgogays5s.jpg\" title=\"NAVRAJ KINGSTOWn swimming pool\" alt=\"NAVRAJ KINGSTOWn swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Playground-r3nvrvtksf9sgvz65rf47qan4755oer5ghrck0ss28.jpg\" title=\"NAVRAJ KINGSTOWN Playground\" alt=\"NAVRAJ KINGSTOWN Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t<h2><h1 data-elementor-setting-key=\"title\" data-pen-placeholder=\"Type Here...\" style=\"font-style: normal;\">Navraj The KingsTown Heights-Layout</h1>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"768\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan-300x225.jpg 300w\" sizes=\"(max-width: 768px) 100vw, 768px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:40\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"945\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/location.webp\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/location.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/location-300x277.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/location-768x709.webp 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/godrej-vrikshya/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living-r38x8alkcv4g2dj62das94cyte3r3td8ku1q92yz9s.jpeg\" title=\"godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living\" alt=\"godrej vrikshya luxurious apartment\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/godrej-vrikshya/\">Godrej Vrikshya</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/bptp-verti-greens/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck94514omtlbsgv66jay97sagjsvscqt8rhg0.jpg\" title=\"BPTP VERTI GREEN\" alt=\"bptp verti green\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/bptp-verti-greens/\">BPTP Verti Greens</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Gurgaon-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Gurgaon\" alt=\"Hero The Palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Pool_Area-r3me8c49v4ls3zuhokh3251syrs116iwg0pvsqsjrk.png\" title=\"Pool_Area\" alt=\"Krisumi Waterfall Residence\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/krisumi-waterfall-residence/\">Krisumi Waterfall Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/40ff805b941d1539f125bc808ae7f8-r3m7k3j94hqirut1i82ra9hn8hvsq3smey7b5szw28.jpg\" title=\"PURI DIPLOMATIC\" alt=\"puri diplomatic\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Puri Diplomatic Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global DXP 37D</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2490\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2490\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2491\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2491\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2492\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2492\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2493\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2493\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/navraj-the-kingstown-heights-sector-37d-luxurious-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/navraj-the-kingstown-heights-sector-37d-luxurious-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "1 LAC SQ. FT. ( BIGGEST SIZE OF CLUB HOUSE )<br />POSSESION – MARCH 2031<br />BHK SIZE<br />3 BHK 13800 PER SQ. FT.<br />3 BHK + SR+ 3 WR 2400 SQ. FT.<br />4 BHK 3300 SQ. FT.<br />CEILING HEIGHTS – 12.5 SQ. FT.<br />WIDE CORREDOR – 135 METER<br />TRIPPLE HEIGHT LOBBY<br />LUXURY APARTMENT<br />WITH 30 + LUXURY ALL AMENITIES<br />5 ROYAL CLUB<br />5 SWIMMING POOL<br />RESTAURANT"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3077,
    "title": "Navraj Kingstown Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/navraj-the-kingstown/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/coffe-shop1889-r3nvxs93ozclcrelpb8sv8otda24006hlp730k1t00.jpg\" title=\"NAVRAJ KINGSTOWN\" alt=\"NAVRAJ KINGSTOWN\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-Living-Room-r3nvn6mmm8u6f2sxlqa9qwzo6ub36w3gt8by67rn68.webp\" title=\"Navraj KingdTown mini theatre\" alt=\"Navraj KingdTown mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-1kid-r3nvn5osfesw3guar7vn6f87lgfpz6zqh3ogoxt1cg.webp\" title=\"NAVRAJ KINGSTOWn kids area\" alt=\"NAVRAJ KINGSTOWn kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-1-r3nvg5s1jt81nz07m6zmm6soe6xcob7o6guc2s6jo0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/default-swimming-pools-10877-r3nvyikl0ccmducdfmmct21q02gdzj2z1bgogays5s.jpg\" title=\"NAVRAJ KINGSTOWn swimming pool\" alt=\"NAVRAJ KINGSTOWn swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Playground-r3nvrvtksf9sgvz65rf47qan4755oer5ghrck0ss28.jpg\" title=\"NAVRAJ KINGSTOWN Playground\" alt=\"NAVRAJ KINGSTOWN Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3113,
    "title": "Navraj Kingstown Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/navraj-the-kingstown/\">Sizes</a></h2>\t\t\t\t\n\t\t3 BHK <p>2590</p>3 BHK<mark> </mark><p>2675</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/navraj-kingstown-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3131,
    "title": "Navraj KingsTown Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/navraj-the-kingstown/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"768\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Floor-Plan-300x225.jpg 300w\" sizes=\"(max-width: 768px) 100vw, 768px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455817-574496164-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/navraj-kingstown-heights_1741763455684-729056597-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1024x735.jpg\" alt=\"navraj the kingstown heights\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-768x551.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-1536x1103.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/image_0.webp_1741764935482-776705185-2048x1470.jpg 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3205,
    "title": "Signature Global DXP Sec 37D Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/coffe-shop1889-r3nvxs93ozclcrelpb8sv8otda24006hlp730k1t00.jpg\" title=\"NAVRAJ KINGSTOWN\" alt=\"NAVRAJ KINGSTOWN\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Navraj-sector-37D-Living-Room-r3nvn6mmm8u6f2sxlqa9qwzo6ub36w3gt8by67rn68.webp\" title=\"Navraj KingdTown mini theatre\" alt=\"Navraj KingdTown mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Living Room</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pool-2-r3o01q2nc9v8nciju9cyawqj6gvth1hmlxk86cp5ow.jpg\" title=\"pool\" alt=\"pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/play-r3o045hmzv6wn2zknt598soefawycw4nxy8dt33jm8.webp\" title=\"play\" alt=\"playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3211,
    "title": "Signature Global DXP Sec 37D Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK+UTILITY</p><p>2470</p><p>3.5 BHK+UTILITY</p><p>2623</p><p>4.5 BHK+UTILITY</p><p> 3253 </p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-dxp-sec-37d-sizes-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-dxp-sec-37d-sizes-5bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3221,
    "title": "Signature Global DXP Sec 37D Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"523\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-1024x523.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-1024x523.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-300x153.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410-768x392.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143410.png 1201w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"515\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-1024x515.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-1024x515.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-300x151.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349-768x387.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-143349.png 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3271,
    "title": "Signature Global Twin Tower DXP ",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Parking",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\"> Signature Global Twin Tower DXP</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/image-2-r3o3a5czuj8soleh032en12vzl1hveoqy6ib362p00.png\" alt=\"image-2\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Signature-Global-Twin-Tower-DXP-Sector-84-1024x595-1-r3o3adtjk1kdl326moq1rgy1c1vssombzcdoenq5g0.webp\" alt=\"Signature-Global-Twin-Tower-DXP-Sector-84-1024x595\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp-2/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2> Signature Global Twin Tower DXP</h2>\t\t\t\t\n\t\t<p data-start=\"84\" data-end=\"100\">HIGHRISE RESIDENCIAL COMPLEX COMPRISING TWO TOWERS 45 STOREYS<br />SINGAPORE BASED <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">ARCHITECTURAL</a> FIRM <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">BENOY</a><br />24 METER ROAD<br />TWIN TOWER – 5 <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">ACRE</a><br />TOTAL UNITS – 300<br />TOTAL HEIGHT – G + 45<br />CLUB HOUSE – 40000 SQ. FT.<br />FOR <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">INVESTMENT</a><br />WELL CONNECTED<br />DOUBLE LEVEL BASEMENT PARKING<br />LUXURIOUS APARTMENT<br />CARPET AREA – 22000 PER SQ. FT.<br />BHK SIZE PRICE PARKING<br />3 BHK 2650 SQ. FT.2 CAR PARKING<br />3.5 BHK 2980 SQ. FT.2 CAR PARKING<br />4.5 BHK 3785 SQ. FT. 3 CAR PARKING<br />STARTING PRICE – <br />PAYMENT PLAN – 30:40:40<br />AMENITIES EXCELLENCE 40 + LIFESTYLE AMENITIES<br />ENVIRONMENT OF LUSH GREENERY<br />GIFT FOR BOOKING RADO WRIST WATCH</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"577\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1024x577.jpg\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1024x577.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff-1536x865.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/TowerCdropOff.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pool_Area.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"297\" height=\"170\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-1.jpeg\" alt=\"Signature Global Twin Tower DXP\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1024x512.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhouse_lobby.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-1024x512.png\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Alfresco_dining_with_pool.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>2650</p><p>3.5 BHK</p><p>2980</p><p>4.5 BHK</p><p>3785</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>6 KM</p><p>8 KM</p><p>7 KM</p><p>5 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>11 KM</p><p>11 KM</p><p>9 KM</p><p>5 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"Smartworld One DXP-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/lobby-r3o3a6au1da307d3ulh17iuckywv33shab5skg1ats.webp\" title=\"lobby\" alt=\"lobby\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Lobby</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Green Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pool-3-r3o3aerdqvlnwp0th74obyphxfr60dq2bh15vxor9s.jpg\" title=\"pool\" alt=\"pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mini-scaled-r3o3ab00zjgim96a35i61znnjw9p5lb4yyf7ytubyo.webp\" title=\"\" alt=\"Smartworld One DXP-mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"520\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png 520w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711-293x300.png 293w\" sizes=\"(max-width: 520px) 100vw, 520px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"520\" height=\"528\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png 520w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652-295x300.png 295w\" sizes=\"(max-width: 520px) 100vw, 520px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"743\" height=\"616\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png 743w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639-300x249.png 300w\" sizes=\"(max-width: 743px) 100vw, 743px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"712\" height=\"634\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png 712w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618-300x267.png 300w\" sizes=\"(max-width: 712px) 100vw, 712px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"598\" height=\"405\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png 598w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522-300x203.png 300w\" sizes=\"(max-width: 598px) 100vw, 598px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:40\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"797\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/m-1024x797.webp\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/m-1024x797.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/m-300x234.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/m-768x598.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/m-1536x1196.webp 1536w, https://dhawanproperties.in/wp-content/uploads/2025/03/m-2048x1595.webp 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-r3rfb6djfoemfuv88dfxf4t4vd8rolvbda8xkh8r9s.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world dip\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-m-r3rbtnzcv2la6b6g4mcazb0dc5vcvklls29vndc840.jpg\" title=\"Emaar Urban Ascent m\" alt=\"Emaar urban Ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1340\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-1340\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1341\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1341\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1342\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1342\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1343\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1343\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp--3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp--5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "40000 SQ. FT.<br />FOR <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">INVESTMENT</a><br />WELL CONNECTED<br />DOUBLE LEVEL BASEMENT PARKING<br />LUXURIOUS APARTMENT<br />CARPET AREA – 22000 PER SQ. FT.<br />BHK SIZE PRICE PARKING<br />3 BHK 2650 SQ. FT.2 CAR PARKING<br />3.5 BHK 2980 SQ. FT.2 CAR PARKING<br />4.5 BHK 3785 SQ. FT. 3 CAR PARKING<br />STARTING PRICE – <br />PAYMENT PLAN – 30:40:40<br />AMENITIES EXCELLENCE 40 + LIFESTYLE AMENITIES<br />ENVIRONMENT OF LUSH GREENERY<br />GIFT FOR BOOKING RADO WRIST WATCH</p>"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3291,
    "title": "Signature Global Twin Tower DXP Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"Smartworld One DXP-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/lobby-r3o3a6au1da307d3ulh17iuckywv33shab5skg1ats.webp\" title=\"lobby\" alt=\"lobby\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Lobby</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pool-3-r3o3aerdqvlnwp0th74obyphxfr60dq2bh15vxor9s.jpg\" title=\"pool\" alt=\"pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mini-scaled-r3o3ab00zjgim96a35i61znnjw9p5lb4yyf7ytubyo.webp\" title=\"\" alt=\"Smartworld One DXP-mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3297,
    "title": "Signature Global Twin Tower DXP Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>2650</p><p>3.5 BHK</p><p>2980</p><p>4.5 BHK</p><p>3785</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp-sizes-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp-sizes-5bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3302,
    "title": "Signature Global Twin Tower DXP Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"520\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711.png 520w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150711-293x300.png 293w\" sizes=\"(max-width: 520px) 100vw, 520px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"520\" height=\"528\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652.png 520w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150652-295x300.png 295w\" sizes=\"(max-width: 520px) 100vw, 520px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"743\" height=\"616\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639.png 743w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150639-300x249.png 300w\" sizes=\"(max-width: 743px) 100vw, 743px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"712\" height=\"634\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png\" alt=\"Signature Global Twin Tower\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618.png 712w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150618-300x267.png 300w\" sizes=\"(max-width: 712px) 100vw, 712px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"598\" height=\"405\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522.png 598w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-150522-300x203.png 300w\" sizes=\"(max-width: 598px) 100vw, 598px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3330,
    "title": "Smartworld One DXP",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">Smartworld One DXP</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Smart-World-DXP-r3o85opy5pjiv0f8zgn7s8etp1u6cik630foifsx00.avif\" alt=\"Smart World DXP\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Smart-World-DXP-r3o85pnscjkt6mdvtz1ucq6aafpjk7nwf535zprits.webp\" alt=\"Smart World DXP\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/smart-world-dxp-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/smart-world-dxp-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/smart-world-dxp-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/smart-world-dxp/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Smartworld One DXP</h2>\t\t\t\t\n\t\t<p>ULTRA <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">LUXURIOUS</a> RESIDENCIAL PROJECT<br /><a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">SPREAD</a> OVER – 16 ACRES<br />UNITS – <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">1600</a><br />CLUB HOUSE – 110,000 SQ. FT.<br />TOWERS - 45 STOREY<br /><a style=\"color: #ffffff;\" href=\"https://www.google.com/\">POSSESION</a> – 2027<br />PAYMENT PLAN – 20:20:20:20:20<br />FLOOR TO FLOOR HEIGHT 12 FEET<br />EXPANSIVE 70 * 6 FEET BALCONIES<br />PRIVATE ELIVATORS<br />SINGAPORE BASED ARCHITECTURE BENOY<br />LUSH GREENERY ENVIRONMENTAL HARMONEY<br />GREENSWALLS SHADED SEATING AREA<br />SENSORY GARDENS<br />SIZE –<br />BHK SIZE PRICE<br />2.5 BHK 1370 SQ. FT.<br />3.5 BHK + UTILITY 2050 SQ. FT.<br />4.5 BHK + UTILITY 3006 SQ. FT. ONWARDS<br />24 * 7 COWORKING SPACE<br />24 * 7 GYM OVERLOOKING CENTRAL GREEN<br />FULLY MODULAR KITCHEN WITH ALL WHITE WOODS</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"682\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Smartworld-One-DXP-gallery6-1024x682.jpg\" alt=\"Smartworld One DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Smartworld-One-DXP-gallery6-1024x682.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Smartworld-One-DXP-gallery6-300x200.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Smartworld-One-DXP-gallery6-768x511.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Smartworld-One-DXP-gallery6.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"750\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Smart-World-one-dxp-sec-113.webp\" alt=\"Smartworld One DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Smart-World-one-dxp-sec-113.webp 750w, https://dhawanproperties.in/wp-content/uploads/2025/04/Smart-World-one-dxp-sec-113-300x180.webp 300w\" sizes=\"(max-width: 750px) 100vw, 750px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"471\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358-1024x471.jpg\" alt=\"Smart World DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358-1024x471.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358-300x138.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358-768x353.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/smart-world-one-dxp-banner-82358.jpg 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"290\" height=\"174\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-5.jpeg\" alt=\"Smartworld One DXP\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"299\" height=\"168\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-3.jpeg\" alt=\"Smartworld One DXP\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"556\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423-1024x556.webp\" alt=\"Smartworld One DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423-1024x556.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423-300x163.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423-768x417.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/1938835423.webp 1360w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>2.5 BHK</p><p>1370</p><p><strong>3.5 BHK + Utility</strong></p><p>2050</p><p><strong>4.5 BHK + Utility</strong></p><p>3006</p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>6 KM</p><p>8 KM</p><p>7 KM</p><p>5 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>11 KM</p><p>11 KM</p><p>9 KM</p><p>5 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"Smartworld One DXP-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/res-r3o8g6l2h3wsi96dozz8ml24hy3qau89iyovfo8nio.webp\" title=\"res\" alt=\"Smartworld One DXP-restaurant\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pol-r3o8g00759ns8zfxrf4un4pwc905syi5624h2qieq8.jpg\" title=\"pol\" alt=\"Smartworld One DXP-pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mini-scaled-r3o3ab00zjgim96a35i61znnjw9p5lb4yyf7ytubyo.webp\" title=\"\" alt=\"Smartworld One DXP-mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"686\" height=\"447\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png 686w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937-300x195.png 300w\" sizes=\"(max-width: 686px) 100vw, 686px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"687\" height=\"449\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png 687w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925-300x196.png 300w\" sizes=\"(max-width: 687px) 100vw, 687px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"691\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png 691w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914-300x195.png 300w\" sizes=\"(max-width: 691px) 100vw, 691px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"691\" height=\"442\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png 691w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901-300x192.png 300w\" sizes=\"(max-width: 691px) 100vw, 691px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"686\" height=\"452\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png 686w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845-300x198.png 300w\" sizes=\"(max-width: 686px) 100vw, 686px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:40\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"578\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map-1024x578.webp\" alt=\"Smartworld One DXP PROJECT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map-1024x578.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map-300x169.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map-768x433.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map-1536x867.webp 1536w, https://dhawanproperties.in/wp-content/uploads/2025/03/Smart-World-DXP-map.webp 1600w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-m-r3rbtnzcv2la6b6g4mcazb0dc5vcvklls29vndc840.jpg\" title=\"Emaar Urban Ascent m\" alt=\"Emaar urban Ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Parina</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4590\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-4590\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4591\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4591\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4592\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4592\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-4593\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-4593\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/smartworld-one-dxp-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "clubHouse": "110"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3346,
    "title": "Smart World DXP Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-smartworld-one-dxp-2/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"Smartworld One DXP-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/res-r3o8g6l2h3wsi96dozz8ml24hy3qau89iyovfo8nio.webp\" title=\"res\" alt=\"Smartworld One DXP-restaurant\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"kids\" alt=\"Smartworld One DXP-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/forest-r3o01p4t5ftybqjwzqybqez2l30g9cdw9swqp2qjv4.webp\" title=\"forest\" alt=\"Smartworld One DXP-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/pol-r3o8g00759ns8zfxrf4un4pwc905syi5624h2qieq8.jpg\" title=\"pol\" alt=\"Smartworld One DXP-pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mini-scaled-r3o3ab00zjgim96a35i61znnjw9p5lb4yyf7ytubyo.webp\" title=\"\" alt=\"Smartworld One DXP-mini theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3360,
    "title": "Smart World DXP Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-smartworld-one-dxp-2/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2.5 BHK</p><p>1370</p><p><strong>3.5 BHK + Utility</strong></p><p>2050</p><p><strong>4.5 BHK + Utility</strong></p><p>3006</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/smart-world-dxp-sizes-5bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3365,
    "title": "Smart World DXP Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-smartworld-one-dxp-2/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"686\" height=\"447\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937.png 686w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151937-300x195.png 300w\" sizes=\"(max-width: 686px) 100vw, 686px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"687\" height=\"449\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925.png 687w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151925-300x196.png 300w\" sizes=\"(max-width: 687px) 100vw, 687px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"691\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914.png 691w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151914-300x195.png 300w\" sizes=\"(max-width: 691px) 100vw, 691px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"691\" height=\"442\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901.png 691w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151901-300x192.png 300w\" sizes=\"(max-width: 691px) 100vw, 691px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"686\" height=\"452\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png\" alt=\"Smartworld One DXP-LAYOUT\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845.png 686w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-151845-300x198.png 300w\" sizes=\"(max-width: 686px) 100vw, 686px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3495,
    "title": "PAREENA COBAN SIZES",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/pareena-coban-sector-99a/\">Sizes</a></h2>\t\t\t\t\n\t\t<p><b>2 BHK + ST</b></p><p><b>1550</b></p><p><b>3 BHK + SQ</b></p><p><b>1997</b></p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/pareena-coban-sizes-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/pareena-coban-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3500,
    "title": "PAREENA COBAN AMENITIES",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/pareena-coban-sector-99a/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.28 PM-r3pogwdaqbinm0yachoqc0ez67q1xos701qodvjms0.png\" title=\"Screenshot 2025-04-01 at 3.21.28 PM\" alt=\"PAREENA COBAN club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.18 PM-r3pogslxyzdibl3qyg2821d4so8l2wd9nj4qgrp7gw.png\" title=\"Screenshot 2025-04-01 at 3.21.18 PM\" alt=\"PAREENA COBAN swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.07 PM-r3pogoul7n8d1597kefps2baf4r483ycb0isjnus5s.png\" title=\"Screenshot 2025-04-01 at 3.21.07 PM\" alt=\"PAREENA COBAN KIDS AREA\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.20.42 PM-r3pogj7k2n0n3hhehbzyd3qiutiwxxbya8lvo03574.png\" title=\"Screenshot 2025-04-01 at 3.20.42 PM\" alt=\"PAREENA COBAN forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3505,
    "title": "PAREENA COBAN LAYOUT",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/pareena-coban-sector-99a/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"737\" height=\"697\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700.png 737w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700-300x284.png 300w\" sizes=\"(max-width: 737px) 100vw, 737px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"720\" height=\"704\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649.png 720w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649-300x293.png 300w\" sizes=\"(max-width: 720px) 100vw, 720px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3555,
    "title": "M3M Crown Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-crown-sec-111-top-20/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>1,555 </p><p>3 BHK</p><p>1,665</p><p>4 BHK</p><p>2,270</p><p>4 BHK</p><p>2,525</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/m3m-crown-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/m3m-crown-sizes-4bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3567,
    "title": "M3M Crown Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-crown-sec-111-top-20/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/re-r3r96vx7qgufhsunkngkk814zh0yqabyqy5bkxvbio.jpg\" title=\"xr:d:DAF82brRWN4:4,j:3975971319361802199,t:24021509\" alt=\"Restaurant\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-p-r3r96u1jcsruukxdvmnbf8i7spa8aw4i2oucmdy3v4.jpg\" title=\"M3M Crown p\" alt=\"Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/unnamed-file-r3r9nb5p59bscizuo90wmku2mu2u7wj4o8hqfziosw.jpg\" title=\".jpg\" alt=\"MRG Crown Mini Theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-gym-r3r96t3p5yqkiyyr148ouqqr7bev370rqk6v53zi1c.jpg\" title=\"M3M Crown gym\" alt=\"gym\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3576,
    "title": "M3M Crown Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-crown-sec-111-top-20/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"463\" height=\"298\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826.png 463w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152826-300x193.png 300w\" sizes=\"(max-width: 463px) 100vw, 463px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"464\" height=\"297\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819.png 464w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152819-300x192.png 300w\" sizes=\"(max-width: 464px) 100vw, 464px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"460\" height=\"292\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813.png 460w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152813-300x190.png 300w\" sizes=\"(max-width: 460px) 100vw, 460px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"470\" height=\"304\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801.png 470w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152801-300x194.png 300w\" sizes=\"(max-width: 470px) 100vw, 470px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"499\" height=\"310\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751.png 499w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-152751-300x186.png 300w\" sizes=\"(max-width: 499px) 100vw, 499px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3606,
    "title": "M3M Mansion Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3.5 BHK</p><p>2,077 ​</p><p>3.5 BHK</p><p> 3,415</p><p>4.5 BHK</p><p> 2,705</p><p>4.5 BHK</p><p>3,125</p><p>5 BHK</p><p> 2,100  ​</p><p>5 BHK</p><p>7,000 </p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/m3m-mansion-sizes-5bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3615,
    "title": "M3M Mansion Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Restaurant"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Founton-r3rakt4mpp6o48c428b8zmigs6yrjkiqy1hp5zul1s.jpg\" title=\"Founton\" alt=\"Founton\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Water Fountain</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-meredian-1-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya SWIMMING POOL\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/hall-1-r3rak2t5ec6n35ecbwxp1t5k5ekhk1m9if83q8xlw0.webp\" title=\"hall\" alt=\"Hall\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Hall</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3620,
    "title": "M3M Mansion Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"589\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-1024x589.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-1024x589.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-300x173.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522-768x442.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153522.png 1178w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"591\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-1024x591.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-1024x591.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-300x173.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509-768x443.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153509.png 1178w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"588\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-1024x588.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-1024x588.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-300x172.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459-768x441.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153459.png 1201w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"596\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-1024x596.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-1024x596.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-300x175.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441-768x447.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153441.png 1191w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"582\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-1024x582.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-1024x582.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-300x170.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430-768x436.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153430.png 1208w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"573\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-1024x573.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-1024x573.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-300x168.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416-768x429.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153416.png 1207w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"577\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-1024x577.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-1024x577.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-300x169.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400-768x433.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153400.png 1199w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"580\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-1024x580.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-1024x580.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-300x170.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347-768x435.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-153347.png 1207w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3658,
    "title": "Emaar Urban Ascent Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Restaurant"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/emaar-urban-ascent-sector-112-top-20-luxurious/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-c-r3rbtn1io8jzup7ta3xoet8wqrzznvhvfxme63dma8.webp\" title=\"Emaar Urban Ascent club houseEmaar Urban Ascent c\" alt=\"Emaar Urban Ascent club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-meredian-1-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya SWIMMING POOL\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-scaled-r3rc9n8l1ogrjnyutizzd9ugvz3zqc1bz5j1cpnac0.webp\" title=\"Emaar Urban Ascent Kids\" alt=\"Elan Presidential KIDS area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-f-r3rbtn1io8jzup7ta3xoet8wqrzznvhvfxme63dma8.jpg\" title=\"Emaar Urban Ascent f\" alt=\"Elan Presidential forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3666,
    "title": "Emaar Urban Ascent Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/emaar-urban-ascent-sector-112-top-20-luxurious/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2 BHK</p><p>1,001</p><p>2 BHK</p><p> 1,249</p><p data-start=\"374\" data-end=\"477\">3 BHK</p><p data-start=\"374\" data-end=\"477\">1,229</p><p data-start=\"374\" data-end=\"477\">3 BHK</p><p data-start=\"374\" data-end=\"477\"> 1,690</p><p>4 BHK</p><p> 1,652</p><p>4 BHK</p><p> 2,207</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sizes-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/emaar-urban-ascent-sizes-4bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3674,
    "title": "Emaar Urban Ascent Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/emaar-urban-ascent-sector-112-top-20-luxurious/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"488\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-1024x488.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-1024x488.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-300x143.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105-768x366.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154105.png 1076w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3712,
    "title": "Elan Presidential Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/elan-the-presidential-the-top-20-luxurious/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-c-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e c\" alt=\"Elan Presidential club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/kids-scaled-r3rc9n8l1ogrjnyutizzd9ugvz3zqc1bz5j1cpnac0.webp\" title=\"Emaar Urban Ascent Kids\" alt=\"Elan Presidential KIDS area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-f-r3rbtn1io8jzup7ta3xoet8wqrzznvhvfxme63dma8.jpg\" title=\"Emaar Urban Ascent f\" alt=\"Elan Presidential forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-kids-r3rdgew80b0fsxuf30ivthbhx4b7yjtnuu4dfy8f80.jpg\" title=\"elan kids\" alt=\"Elan Presidential garden\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"921\" height=\"650\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map.jpg 921w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map-300x212.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/elan-map-768x542.jpg 768w\" sizes=\"(max-width: 921px) 100vw, 921px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3718,
    "title": "Elan Presidential Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/elan-the-presidential-the-top-20-luxurious/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK</p><p>2,450</p><p>4 BHK</p><p> 1,702 </p><p>4 BHK</p><p>1,780 </p><p>5 BHK</p><p>4,075 </p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/elan-presidential-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/elan-presidential-sizes-4bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/elan-presidential-sizes-5bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3723,
    "title": "Elan Presidential Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/elan-the-presidential-the-top-20-luxurious/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"386\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-1024x386.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-1024x386.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-300x113.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939-768x290.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-154939.png 1060w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3775,
    "title": "Sobha Altus Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/sobha-altus-sector-106/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-club-house-r3rqy7tc7s1g9o6sc07fhw1uk9uk6yfgnc8km9xfdc.webp\" title=\"sobha Altus club house\" alt=\"Sobha Altus club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-pool-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus swimming Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-play-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-frest-r3rqy8r6em2qla5f6im22dtb5npxenj6zgw23jw174.webp\" title=\"sobha\" alt=\"Sobha Altus Forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-fountain-r3rqy7tc7s1g9o6sc07fhw1uk9uk6yfgnc8km9xfdc.webp\" title=\"Sobha Altus water fountain \" alt=\"Sobha Altus water fountain \" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Water Fountain </h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3794,
    "title": "Sobha Altus Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/sobha-altus-sector-106/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK  </p><p><strong data-start=\"310\" data-end=\"327\">2,870 </strong></p><p>4 BHK </p><p><strong data-start=\"359\" data-end=\"376\">3,853 </strong></p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sizes-4bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3800,
    "title": "Sobha Altus Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/sobha-altus-sector-106/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"439\" height=\"383\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png\" alt=\"sobha Altus layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200.png 439w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155200-300x262.png 300w\" sizes=\"(max-width: 439px) 100vw, 439px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3849,
    "title": "MRG Crown Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/mrg-crown/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK  </p><p>1500</p><p>3 BHK </p><p><strong data-start=\"359\" data-end=\"376\">2000</strong></p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/mrg-crown-sizes-3bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3862,
    "title": "MRG Crown Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/mrg-crown/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"906\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635.png 906w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635-300x176.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155635-768x452.png 768w\" sizes=\"(max-width: 906px) 100vw, 906px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"883\" height=\"541\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647.png 883w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647-300x184.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155647-768x471.png 768w\" sizes=\"(max-width: 883px) 100vw, 883px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"869\" height=\"549\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655.png 869w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655-300x190.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155655-768x485.png 768w\" sizes=\"(max-width: 869px) 100vw, 869px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"609\" height=\"465\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501.png 609w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-155501-300x229.png 300w\" sizes=\"(max-width: 609px) 100vw, 609px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3929,
    "title": "Whiteland Urban Resort",
    "location": "Sector 76, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden",
      "Security",
      "Restaurant"
    ],
    "description": "<h1><a href=\"https://dhawanproperties.in\">Whiteland Urban Resort</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/w.jpg\" alt=\"Whiteland Urban Resort\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/wp.webp\" alt=\"Whiteland Urban Resort\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/whiteland-urban-resort-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/whiteland-urban-resort-2/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/whiteland-urban-resort-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Whiteland Urban Resort</h2>\t\t\t\t\n\t\t<p data-start=\"82\" data-end=\"98\"><strong data-start=\"82\" data-end=\"98\">Introduction</strong></p><p data-start=\"100\" data-end=\"612\">Whiteland Urban <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">Resort</a> is an exclusive residential <a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">development</a> by <strong data-start=\"166\" data-end=\"191\">Whiteland Corporation</strong>, strategically located in <strong data-start=\"218\" data-end=\"240\">Sector 76, Gurgaon</strong>. <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">Designed</a> to provide a perfect balance of modern luxury and nature-inspired living, this project promises to offer an exceptional living experience that merges contemporary architecture with lush green surroundings. Situated in one of the most prime areas of Gurgaon, Whiteland Urban Resort stands as a symbol of <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">sophistication</a>, innovation, and elevated living standards.</p><p data-start=\"614\" data-end=\"1105\">The project includes a mix of luxurious <strong data-start=\"654\" data-end=\"668\">2BHK, 3BHK</strong>, and <strong data-start=\"674\" data-end=\"693\">4BHK apartments</strong>, with a wide range of amenities that cater to both physical and mental well-being. Whiteland Urban Resort is designed with an emphasis on large open spaces, scenic views, and a community that promotes a healthy lifestyle and high-quality living. The development promises to be a retreat within the city, offering a serene and peaceful environment for its residents, away from the hustle and bustle of city life.</p><hr data-start=\"1107\" data-end=\"1110\" /><h3 data-start=\"1112\" data-end=\"1136\"><strong data-start=\"1116\" data-end=\"1136\">Project Overview</strong></h3><ul data-start=\"1138\" data-end=\"1698\"><li data-start=\"1138\" data-end=\"1176\"><p data-start=\"1140\" data-end=\"1176\"><strong data-start=\"1140\" data-end=\"1154\">Developer:</strong> Whiteland Corporation</p></li><li data-start=\"1177\" data-end=\"1219\"><p data-start=\"1179\" data-end=\"1219\"><strong data-start=\"1179\" data-end=\"1196\">Project Name:</strong> Whiteland Urban Resort</p></li><li data-start=\"1220\" data-end=\"1263\"><p data-start=\"1222\" data-end=\"1263\"><strong data-start=\"1222\" data-end=\"1235\">Location:</strong> Sector 76, Gurgaon, Haryana</p></li><li data-start=\"1264\" data-end=\"1303\"><p data-start=\"1266\" data-end=\"1303\"><strong data-start=\"1266\" data-end=\"1281\">Total Area:</strong> Approximately 8 Acres</p></li><li data-start=\"1304\" data-end=\"1343\"><p data-start=\"1306\" data-end=\"1343\"><strong data-start=\"1306\" data-end=\"1317\">Towers:</strong> Multiple high-rise towers</p></li><li data-start=\"1344\" data-end=\"1385\"><p data-start=\"1346\" data-end=\"1385\"><strong data-start=\"1346\" data-end=\"1362\">Total Units:</strong> 500+ luxury apartments</p></li><li data-start=\"1386\" data-end=\"1541\"><p data-start=\"1388\" data-end=\"1403\"><strong data-start=\"1388\" data-end=\"1403\">Unit Types:</strong></p><ul data-start=\"1406\" data-end=\"1541\"><li data-start=\"1406\" data-end=\"1449\"><p data-start=\"1408\" data-end=\"1449\"><strong data-start=\"1408\" data-end=\"1418\">2 BHK:</strong> 1,400 sq. ft. to 1,600 sq. ft.</p></li><li data-start=\"1452\" data-end=\"1495\"><p data-start=\"1454\" data-end=\"1495\"><strong data-start=\"1454\" data-end=\"1464\">3 BHK:</strong> 1,800 sq. ft. to 2,300 sq. ft.</p></li><li data-start=\"1498\" data-end=\"1541\"><p data-start=\"1500\" data-end=\"1541\"><strong data-start=\"1500\" data-end=\"1510\">4 BHK:</strong> 2,500 sq. ft. to 3,000 sq. ft.</p></li></ul><ul data-start=\"1567\" data-end=\"1652\"><li data-start=\"1627\" data-end=\"1652\"><strong data-start=\"1655\" data-end=\"1677\">RERA Registration:</strong> RERA/GGM/224/2021/22</li></ul></li></ul><hr data-start=\"1700\" data-end=\"1703\" /><h3 data-start=\"1705\" data-end=\"1746\"><strong data-start=\"1709\" data-end=\"1746\">Architectural Design and Features</strong></h3><p data-start=\"1748\" data-end=\"2007\">Whiteland Urban Resort’s architecture is designed to stand out as a benchmark of modern luxury. Every aspect of the design reflects meticulous planning to ensure the comfort and convenience of its residents, while creating a harmonious connection with nature.</p><h4 data-start=\"2009\" data-end=\"2038\"><strong data-start=\"2014\" data-end=\"2038\">Key Design Features:</strong></h4><ol data-start=\"2040\" data-end=\"3336\"><li data-start=\"2040\" data-end=\"2576\"><p data-start=\"2043\" data-end=\"2080\"><strong data-start=\"2043\" data-end=\"2080\">Modern Yet Timeless Architecture:</strong></p><ul data-start=\"2084\" data-end=\"2576\"><li data-start=\"2084\" data-end=\"2351\"><p data-start=\"2086\" data-end=\"2351\">The project blends a modern and timeless architectural design, incorporating clean lines, contemporary facades, and expansive glass windows. The exterior design reflects a luxurious and sophisticated aesthetic, with ample green spaces integrated into the landscape.</p></li><li data-start=\"2355\" data-end=\"2576\"><p data-start=\"2357\" data-end=\"2576\"><strong data-start=\"2357\" data-end=\"2392\">High Ceilings and Open Layouts:</strong> The interiors are designed with high ceilings, spacious rooms, and open layouts that allow natural light and ventilation to flow freely, making each apartment feel expansive and airy.</p></li></ul></li><li data-start=\"2578\" data-end=\"3049\"><p data-start=\"2581\" data-end=\"2617\"><strong data-start=\"2581\" data-end=\"2617\">Sustainability and Green Living:</strong></p><ul data-start=\"2621\" data-end=\"3049\"><li data-start=\"2621\" data-end=\"2898\"><p data-start=\"2623\" data-end=\"2898\">The entire development emphasizes <strong data-start=\"2657\" data-end=\"2691\">eco-friendly design principles</strong> with features like rainwater harvesting systems, energy-efficient lighting, and waste management solutions. Large green areas with landscaping, water bodies, and themed gardens enhance the overall ambiance.</p></li><li data-start=\"2902\" data-end=\"3049\"><p data-start=\"2904\" data-end=\"3049\">The apartments are designed to offer panoramic views of the <strong data-start=\"2964\" data-end=\"3000\">landscape and surrounding greens</strong>, making every home feel like a personal retreat.</p></li></ul></li><li data-start=\"3051\" data-end=\"3336\"><p data-start=\"3054\" data-end=\"3074\"><strong data-start=\"3054\" data-end=\"3074\">Luxury Finishes:</strong></p><ul data-start=\"3078\" data-end=\"3336\"><li data-start=\"3078\" data-end=\"3336\"><p data-start=\"3080\" data-end=\"3336\">The interiors of Whiteland Urban Resort are finished with premium materials, including imported marble flooring, high-end wooden flooring for bedrooms, and stylish wall finishes. The design of every apartment reflects a commitment to quality craftsmanship.</p></li></ul></li></ol><hr data-start=\"3338\" data-end=\"3341\" /><h3 data-start=\"3343\" data-end=\"3385\"><strong data-start=\"3347\" data-end=\"3385\">Unit Layouts and Interior Features</strong></h3><p data-start=\"3387\" data-end=\"3612\">Whiteland Urban Resort offers spacious and thoughtfully designed apartments that cater to modern living requirements. Each unit is equipped with luxurious features and smart living solutions to ensure comfort and convenience.</p><h4 data-start=\"3614\" data-end=\"3647\"><strong data-start=\"3619\" data-end=\"3647\">Living and Dining Areas:</strong></h4><ul data-start=\"3648\" data-end=\"4043\"><li data-start=\"3648\" data-end=\"3881\"><p data-start=\"3650\" data-end=\"3881\"><strong data-start=\"3650\" data-end=\"3671\">Spacious Layouts:</strong> The living and dining areas are designed to be spacious and connected, allowing for smooth interaction and entertaining. Large glass windows ensure ample natural light and stunning views of the outdoor spaces.</p></li><li data-start=\"3882\" data-end=\"4043\"><p data-start=\"3884\" data-end=\"4043\"><strong data-start=\"3884\" data-end=\"3906\">High-End Flooring:</strong> Italian marble or premium ceramic tiles are used for the flooring in the living and dining areas, adding an elegant touch to the spaces.</p></li></ul><h4 data-start=\"4045\" data-end=\"4062\"><strong data-start=\"4050\" data-end=\"4062\">Kitchen:</strong></h4><ul data-start=\"4063\" data-end=\"4389\"><li data-start=\"4063\" data-end=\"4214\"><p data-start=\"4065\" data-end=\"4214\"><strong data-start=\"4065\" data-end=\"4086\">Modular Kitchens:</strong> The kitchens at Whiteland Urban Resort are designed with high-end modular fittings, premium countertops, and modern appliances.</p></li><li data-start=\"4215\" data-end=\"4389\"><p data-start=\"4217\" data-end=\"4389\"><strong data-start=\"4217\" data-end=\"4239\">Efficient Layouts:</strong> The kitchens offer an efficient layout, with ample storage space, sleek cabinets, and high-quality fittings, making it ideal for daily cooking needs.</p></li></ul><h4 data-start=\"4391\" data-end=\"4409\"><strong data-start=\"4396\" data-end=\"4409\">Bedrooms:</strong></h4><ul data-start=\"4410\" data-end=\"4920\"><li data-start=\"4410\" data-end=\"4630\"><p data-start=\"4412\" data-end=\"4630\"><strong data-start=\"4412\" data-end=\"4432\">Master Bedrooms:</strong> The master bedrooms are spacious, with large windows allowing for abundant natural light and breathtaking views. The design includes walk-in closets and en-suite bathrooms for ultimate convenience.</p></li><li data-start=\"4631\" data-end=\"4762\"><p data-start=\"4633\" data-end=\"4762\"><strong data-start=\"4633\" data-end=\"4673\">Children’s Rooms and Guest Bedrooms:</strong> Each bedroom is spacious and thoughtfully designed with ample storage space and comfort.</p></li><li data-start=\"4763\" data-end=\"4920\"><p data-start=\"4765\" data-end=\"4920\"><strong data-start=\"4765\" data-end=\"4779\">Balconies:</strong> The apartments include large balconies where residents can relax, enjoy their morning coffee, or spend quality time with family and friends.</p></li></ul><h4 data-start=\"4922\" data-end=\"4941\"><strong data-start=\"4927\" data-end=\"4941\">Bathrooms:</strong></h4><ul data-start=\"4942\" data-end=\"5224\"><li data-start=\"4942\" data-end=\"5067\"><p data-start=\"4944\" data-end=\"5067\"><strong data-start=\"4944\" data-end=\"4977\">Modern Fixtures and Fittings:</strong> Bathrooms come with high-quality sanitary ware, rain shower systems, and premium faucets.</p></li><li data-start=\"5068\" data-end=\"5224\"><p data-start=\"5070\" data-end=\"5224\"><strong data-start=\"5070\" data-end=\"5090\">Luxury Finishes:</strong> Imported tiles, marble counters, and designer fittings elevate the bathroom experience, offering a luxurious and spa-like atmosphere.</p></li></ul><h4 data-start=\"5226\" data-end=\"5255\"><strong data-start=\"5231\" data-end=\"5255\">Smart Home Features:</strong></h4><ul data-start=\"5256\" data-end=\"5462\"><li data-start=\"5256\" data-end=\"5462\"><p data-start=\"5258\" data-end=\"5462\"><strong data-start=\"5258\" data-end=\"5278\">Home Automation:</strong> Each apartment comes equipped with home automation systems that allow residents to control lighting, air conditioning, curtains, and other features remotely through their smartphones.</p></li></ul><hr data-start=\"5464\" data-end=\"5467\" /><h3 data-start=\"5469\" data-end=\"5501\"><strong data-start=\"5473\" data-end=\"5501\">Amenities and Facilities</strong></h3><p data-start=\"5503\" data-end=\"5840\">Whiteland Urban Resort is designed to offer a wide range of luxury amenities to its residents. These include sports facilities, wellness options, and various recreational spaces for both adults and children. The aim is to create a self-sustained ecosystem within the complex, providing everything residents need to live a fulfilled life.</p><h4 data-start=\"5842\" data-end=\"5872\"><strong data-start=\"5847\" data-end=\"5872\">Fitness and Wellness:</strong></h4><ul data-start=\"5873\" data-end=\"6457\"><li data-start=\"5873\" data-end=\"6032\"><p data-start=\"5875\" data-end=\"6032\"><strong data-start=\"5875\" data-end=\"5906\">State-of-the-Art Gymnasium:</strong> A fully equipped fitness center with the latest workout equipment to help residents maintain an active and healthy lifestyle.</p></li><li data-start=\"6033\" data-end=\"6184\"><p data-start=\"6035\" data-end=\"6184\"><strong data-start=\"6035\" data-end=\"6053\">Swimming Pool:</strong> A large outdoor swimming pool with separate sections for both adults and children, providing a perfect space to relax or exercise.</p></li><li data-start=\"6185\" data-end=\"6308\"><p data-start=\"6187\" data-end=\"6308\"><strong data-start=\"6187\" data-end=\"6205\">Spa and Sauna:</strong> The wellness center includes a spa and sauna, allowing residents to unwind and relax after a busy day.</p></li><li data-start=\"6309\" data-end=\"6457\"><p data-start=\"6311\" data-end=\"6457\"><strong data-start=\"6311\" data-end=\"6342\">Yoga and Meditation Center:</strong> Dedicated areas for yoga, meditation, and other relaxation activities that promote mental and physical well-being.</p></li></ul><h4 data-start=\"6459\" data-end=\"6490\"><strong data-start=\"6464\" data-end=\"6490\">Sports and Recreation:</strong></h4><ul data-start=\"6491\" data-end=\"6966\"><li data-start=\"6491\" data-end=\"6624\"><p data-start=\"6493\" data-end=\"6624\"><strong data-start=\"6493\" data-end=\"6526\">Tennis and Basketball Courts:</strong> Outdoor courts for tennis and basketball, allowing residents to indulge in their favorite sports.</p></li><li data-start=\"6625\" data-end=\"6712\"><p data-start=\"6627\" data-end=\"6712\"><strong data-start=\"6627\" data-end=\"6647\">Badminton Court:</strong> An indoor badminton court for recreational and competitive play.</p></li><li data-start=\"6713\" data-end=\"6832\"><p data-start=\"6715\" data-end=\"6832\"><strong data-start=\"6715\" data-end=\"6737\">Indoor Games Room:</strong> A dedicated indoor space with facilities for games such as table tennis, billiards, and carom.</p></li><li data-start=\"6833\" data-end=\"6966\"><p data-start=\"6835\" data-end=\"6966\"><strong data-start=\"6835\" data-end=\"6853\">Jogging Track:</strong> A walking and jogging track winding through the green spaces, perfect for fitness enthusiasts and nature lovers.</p></li></ul><h4 data-start=\"6968\" data-end=\"6999\"><strong data-start=\"6973\" data-end=\"6999\">Children’s Facilities:</strong></h4><ul data-start=\"7000\" data-end=\"7254\"><li data-start=\"7000\" data-end=\"7102\"><p data-start=\"7002\" data-end=\"7102\"><strong data-start=\"7002\" data-end=\"7016\">Play Area:</strong> Multiple play areas with modern and safe equipment designed for children of all ages.</p></li><li data-start=\"7103\" data-end=\"7254\"><p data-start=\"7105\" data-end=\"7254\"><strong data-start=\"7105\" data-end=\"7135\">Crèche and Daycare Center:</strong> An in-house daycare center offering a safe and nurturing environment for young children, giving parents peace of mind.</p></li></ul><h4 data-start=\"7256\" data-end=\"7291\"><strong data-start=\"7261\" data-end=\"7291\">Leisure and Social Spaces:</strong></h4><ul data-start=\"7292\" data-end=\"7696\"><li data-start=\"7292\" data-end=\"7470\"><p data-start=\"7294\" data-end=\"7470\"><strong data-start=\"7294\" data-end=\"7308\">Clubhouse:</strong> A large clubhouse with various zones for socializing, dining, and hosting events. The clubhouse also features a <strong data-start=\"7421\" data-end=\"7443\">multi-purpose hall</strong> for parties and functions.</p></li><li data-start=\"7471\" data-end=\"7581\"><p data-start=\"7473\" data-end=\"7581\"><strong data-start=\"7473\" data-end=\"7497\">Restaurant and Café:</strong> On-site dining options offering gourmet meals, snacks, and beverages for residents.</p></li><li data-start=\"7582\" data-end=\"7696\"><p data-start=\"7584\" data-end=\"7696\"><strong data-start=\"7584\" data-end=\"7606\">Multipurpose Lawn:</strong> A spacious lawn that can be used for hosting events, celebrations, or outdoor gatherings.</p></li></ul><h4 data-start=\"7698\" data-end=\"7728\"><strong data-start=\"7703\" data-end=\"7728\">Convenience Features:</strong></h4><ul data-start=\"7729\" data-end=\"8205\"><li data-start=\"7729\" data-end=\"7871\"><p data-start=\"7731\" data-end=\"7871\"><strong data-start=\"7731\" data-end=\"7749\">24/7 Security:</strong> A dedicated security team along with surveillance cameras ensures a safe and secure living environment for all residents.</p></li><li data-start=\"7872\" data-end=\"7980\"><p data-start=\"7874\" data-end=\"7980\"><strong data-start=\"7874\" data-end=\"7891\">Power Backup:</strong> 24/7 power backup ensures that residents face no interruptions in case of power outages.</p></li><li data-start=\"7981\" data-end=\"8078\"><p data-start=\"7983\" data-end=\"8078\"><strong data-start=\"7983\" data-end=\"8005\">Convenience Store:</strong> A retail space within the complex offering essential goods and services.</p></li><li data-start=\"8079\" data-end=\"8205\"><p data-start=\"8081\" data-end=\"8205\"><strong data-start=\"8081\" data-end=\"8119\">ATMs and Other Essential Services:</strong> On-site ATM facilities and other essential services for the convenience of residents.</p></li></ul><hr data-start=\"8207\" data-end=\"8210\" /><h3 data-start=\"8212\" data-end=\"8239\"><strong data-start=\"8216\" data-end=\"8239\">Location Advantages</strong></h3><p data-start=\"8241\" data-end=\"8411\">Whiteland Urban Resort benefits from its prime location in <strong data-start=\"8300\" data-end=\"8313\">Sector 76</strong>, Gurgaon. This area is well-connected to major parts of the city and the national capital, Delhi.</p><ol data-start=\"8413\" data-end=\"9492\"><li data-start=\"8413\" data-end=\"8672\"><p data-start=\"8416\" data-end=\"8460\"><strong data-start=\"8416\" data-end=\"8460\">Proximity to NH-8 and Dwarka Expressway:</strong></p><ul data-start=\"8464\" data-end=\"8672\"><li data-start=\"8464\" data-end=\"8672\"><p data-start=\"8466\" data-end=\"8672\">The project enjoys excellent connectivity to major roads like the <strong data-start=\"8532\" data-end=\"8553\">Dwarka Expressway</strong> and <strong data-start=\"8558\" data-end=\"8566\">NH-8</strong>, making it easy for residents to access key business hubs, shopping centers, and entertainment districts.</p></li></ul></li><li data-start=\"8673\" data-end=\"8830\"><p data-start=\"8676\" data-end=\"8700\"><strong data-start=\"8676\" data-end=\"8700\">Near to IGI Airport:</strong></p><ul data-start=\"8704\" data-end=\"8830\"><li data-start=\"8704\" data-end=\"8830\"><p data-start=\"8706\" data-end=\"8830\">The <strong data-start=\"8710\" data-end=\"8749\">Indira Gandhi International Airport</strong> is just a 20-minute drive away, making the project ideal for frequent travelers.</p></li></ul></li><li data-start=\"8831\" data-end=\"9058\"><p data-start=\"8834\" data-end=\"8877\"><strong data-start=\"8834\" data-end=\"8877\">Business Hubs and Commercial Districts:</strong></p><ul data-start=\"8881\" data-end=\"9058\"><li data-start=\"8881\" data-end=\"9058\"><p data-start=\"8883\" data-end=\"9058\">The project is situated near key commercial hubs like <strong data-start=\"8937\" data-end=\"8951\">Cyber City</strong>, <strong data-start=\"8953\" data-end=\"8966\">Cyber Hub</strong>, and <strong data-start=\"8972\" data-end=\"8990\">Uptown Gurgaon</strong>, ensuring easy access to offices, tech parks, and business centers.</p></li></ul></li><li data-start=\"9059\" data-end=\"9303\"><p data-start=\"9062\" data-end=\"9106\"><strong data-start=\"9062\" data-end=\"9106\">Educational Institutions and Healthcare:</strong></p><ul data-start=\"9110\" data-end=\"9303\"><li data-start=\"9110\" data-end=\"9303\"><p data-start=\"9112\" data-end=\"9303\">Reputed schools like <strong data-start=\"9133\" data-end=\"9154\">Shiv Nadar School</strong> and <strong data-start=\"9159\" data-end=\"9182\">The Shri Ram School</strong>, as well as top healthcare facilities like <strong data-start=\"9226\" data-end=\"9237\">Medanta</strong> and <strong data-start=\"9242\" data-end=\"9252\">Fortis</strong>, are just a short drive away from the development.</p></li></ul></li><li data-start=\"9304\" data-end=\"9492\"><p data-start=\"9307\" data-end=\"9338\"><strong data-start=\"9307\" data-end=\"9338\">Shopping and Entertainment:</strong></p><ul data-start=\"9342\" data-end=\"9492\"><li data-start=\"9342\" data-end=\"9492\"><p data-start=\"9344\" data-end=\"9492\">The project is close to major shopping malls like <strong data-start=\"9394\" data-end=\"9411\">Ambience Mall</strong> and <strong data-start=\"9416\" data-end=\"9431\">Sahara Mall</strong>, offering ample shopping, dining, and entertainment options.</p></li></ul></li></ol><hr data-start=\"9494\" data-end=\"9497\" /><h3 data-start=\"9499\" data-end=\"9527\"><strong data-start=\"9503\" data-end=\"9527\">Investment Potential</strong></h3><p data-start=\"9529\" data-end=\"9916\">Whiteland Urban Resort offers a high potential for investment due to its prime location, luxury offerings, and the growing demand for high-end residential properties in Gurgaon. The development’s proximity to key commercial hubs, its modern design, and top-notch amenities make it an attractive choice for buyers looking for both a luxurious home and an excellent investment opportunity.</p><ul data-start=\"9918\" data-end=\"10311\"><li data-start=\"9918\" data-end=\"10113\"><p data-start=\"9920\" data-end=\"10113\"><strong data-start=\"9920\" data-end=\"9952\">High Rental Yield Potential:</strong> With its location close to business districts, major transport routes, and recreational facilities, the project is likely to generate significant rental income.</p></li><li data-start=\"10114\" data-end=\"10311\"><p data-start=\"10116\" data-end=\"10311\"><strong data-start=\"10116\" data-end=\"10143\">Appreciation Potential:</strong> As Gurgaon continues to grow as a hub for business, education, and entertainment, properties like Whiteland Urban Resort are expected to appreciate in value over time.</p></li></ul><hr data-start=\"10313\" data-end=\"10316\" /><h3 data-start=\"10318\" data-end=\"10336\"><strong data-start=\"10322\" data-end=\"10336\">Conclusion</strong></h3><p data-start=\"10338\" data-end=\"10819\">Whiteland Urban Resort is a luxurious, thoughtfully designed residential development that offers a perfect blend of modern architecture, state-of-the-art amenities, and a peaceful living environment. Whether you’re looking for a home that offers the best in comfort and luxury or an investment that promises high returns, Whiteland Urban Resort is a premier choice. It provides everything needed to live a serene yet sophisticated life, making it a standout development in Gurgaon.</p>\t\t\n\t\t\t\t\t<h2>Sample Flat</h2>\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p>3 BHK</p><p> <strong data-start=\"27\" data-end=\"44\">2200</strong></p><p><strong data-start=\"49\" data-end=\"66\" data-is-last-node=\"\">3 BHK</strong></p><p><b>2500</b></p><p><strong data-start=\"11\" data-end=\"28\">4 BHK</strong></p><p><strong data-start=\"11\" data-end=\"28\">3200</strong></p><p><strong data-start=\"33\" data-end=\"50\">4 BHK</strong></p><p><strong data-start=\"33\" data-end=\"50\">4000</strong></p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-club-r3rt9tkk3ahkx2qy556u9sjso1rutsbzh55ba9ytxs.jpg\" title=\"ATS Home Kraft sanctuary club house\" alt=\"ATS home kraft sanctuary club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-pool-r3rt9uiea4iv8opkznlguab99fn81hfpt9ssrjxfrk.jpg\" title=\"TS HomeKraft Sanctuary-swimming pool\" alt=\"ATS HomeKraft Sanctuary-swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-k-r3rt9uiea4iv8opkznlguab99fn81hfpt9ssrjxfrk.jpg\" title=\"ATS HomeKraft Sanctuary-kids area\" alt=\"ATS HomeKraft Sanctuary-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"Smartworld One DXP-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"683\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m.webp\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/m-300x200.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/m-768x512.webp 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/sobha-altus/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-150x150.jpeg\" title=\"sobha\" alt=\"sobha\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/sobha-altus/\">Sobha Altus</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/ats-homekraft-sanctuary/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-r3rt9vg8gyk5kao7u603es2putil96jg5ega8tw1lc.jpg\" title=\"ats\" alt=\"ats\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/ats-homekraft-sanctuary/\">ATS HomeKraft Sanctuary</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" title=\"Emaar Urban Ascent\" alt=\"emaar-urban-ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar Urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/mrg-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrg-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.jpg\" title=\"mrg\" alt=\"MRG Crown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/mrg-crown/\">MRF Crown</a></h3>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/whiteland-urban-resort-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/whiteland-urban-resort-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/whiteland-urban-resort-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 2134,
    "title": "Godrej Vrikshya Sector 103 Luxurious Apartments",
    "location": "Sector 103, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Parking"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/godrej-vrikshya-sector-103-top-20/\"><strong>Godrej Vrikshya Sector 103 near Dwarka Express in Gurgaon</strong></a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"637\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-2-1024x637.webp\" alt=\"Godrej vrikshya\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-2-1024x637.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-2-300x187.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-2-768x477.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-sector-103-gurgaon-building-2.webp 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p><b><a href=\"https://dhawanproperties.in\">Godrej</a> Vrikshya – A Premium Residential Oasis in Sector 103, Gurgaon</b><b></b></p><p>In the midst of the rapidly urbanizing landscape of Gurgaon, Godrej Vrikshya emerges as a luxurious residential retreat that promises a harmonious blend of nature and modern living. Located in Sector 103, along the rapidly developing Dwarka Expressway, this project by Godrej Properties stands out as a flagship offering, thoughtfully designed for those who value serenity, sustainability, and convenience. The project is a reflection of Godrej’s legacy of excellence in delivering eco-conscious, high-quality real estate that resonates with modern lifestyles. The name \"Vrikshya\" (derived from the Sanskrit word for tree) perfectly embodies the essence of this development—an oasis of green spaces designed to nurture both the body and the soul.</p><p><b>Project Highlights</b></p><ul><li><b>Developer</b>: Godrej Properties, renowned for its sustainable, innovative, and high-quality residential developments across India. The developer has earned a stellar reputation by adhering to international standards and prioritizing the needs of the modern family.</li><li><b>Location</b>: Sector 103, Dwarka Expressway, Gurgaon, Haryana – This location is quickly becoming one of the most desirable addresses in the National Capital Region (NCR), thanks to its strategic positioning that provides excellent connectivity to Delhi and other key areas of Gurgaon.</li><li><b>Project Area</b>: Spanning across approximately <b>14.86 acres</b>, Godrej Vrikshya offers an expansive living environment designed with plenty of open green spaces, ensuring residents can experience tranquility without sacrificing modern amenities.</li><li><b>Structure</b>: The development will comprise 6 to 7 residential towers, each rising up to <b>G+30 floors</b>, with premium apartments designed to offer panoramic views of lush greenery.</li><li><b>Possession Timeline</b>: The project is expected to be completed and handed over by <b>June 2031</b>, though some sources indicate that possession could begin as early as <b>2029</b>, depending on the pace of construction.</li></ul><p><b>Residential Units and Configuration</b></p><p>Godrej Vrikshya has been meticulously planned to offer low-density living, ensuring privacy and exclusivity for its residents. The thoughtfully designed layout maximizes space and ensures that each home benefits from ample natural light, cross ventilation, and stunning views of the surrounding green landscapes.</p><ul><li><b>Total Units</b>: The development will feature approximately <b>621 to 735 apartments</b>, making it a more exclusive community compared to other high-rise residential projects in the area.</li><li><b>Apartment Types</b>:<ul><li><b>3 BHK</b> (Starting from ₹3.31 Cr to ₹4.09 Cr)</li><li><b>3.5 BHK</b> (Various price ranges)</li><li><b>4 BHK</b> (From ₹4.52 Cr up to ₹6.42 Cr)</li><li>Select configurations also include <b>2 BHK</b> and <b>4.5 BHK</b> options to cater to various buyer preferences.</li></ul></li><li><b>Sizes</b>: The sizes of the apartments range from <b>1375 sq. ft.</b> for the 2 BHK units to <b>3775 sq. ft.</b> for the larger 4.5 BHK units, allowing families to choose a layout that best suits their lifestyle.</li><li><b>Price Range</b>: Depending on the apartment type, size, and floor plan, the price of apartments in Godrej Vrikshya ranges from approximately <b>₹3.31 Cr to ₹6.42 Cr</b>, making it a premium investment in one of Gurgaon’s most promising locations.</li></ul><p><b>Sustainability and Green Living</b></p><p>At the heart of Godrej Vrikshya is a deep commitment to sustainability, aligning with the overarching theme of nature-inspired living. The project integrates green features that ensure minimal environmental impact while maximizing the quality of life for its residents. True to its name, Vrikshya, the development is home to over <b>800 trees</b>, creating a green, forest-like atmosphere that sets it apart from other urban developments.</p><p>Key green initiatives include:</p><ul><li><b>Tree-lined Pathways</b>: Residents can enjoy long walks amid the lush surroundings, with pathways flanked by trees and landscaped gardens that encourage outdoor living.</li><li><b>Rainwater Harvesting</b>: To conserve precious water resources, rainwater harvesting systems will be implemented throughout the community.</li><li><b>Water Conservation Systems</b>: The project includes efficient water management systems designed to reduce water usage, ensuring a more sustainable living environment.</li><li><b>Landscaping and Tree Plantation</b>: Dedicated green spaces and the strategic placement of trees across the site create an environment where residents can reconnect with nature.</li><li><b>Lakeside Views</b>: Select units offer serene lakeside views, enhancing the tranquil living experience.</li></ul><p>These initiatives reflect Godrej Properties’ commitment to delivering environmentally responsible developments that blend seamlessly with nature.</p>\t\t\n\t\t\t\t\t<h2>Video</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/03/WhatsApp-Video-2025-05-04-at-18.26.10.mp4\t\t\n\t\t\t\t\t<h2>Exclusive Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"614\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-2-1024x614.webp\" alt=\"Godrej\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-2-1024x614.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-2-300x180.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-2-768x461.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-2.webp 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>Godrej Vrikshya offers a resort-style lifestyle within a gated community, featuring a comprehensive range of amenities designed for relaxation, fitness, and leisure. Whether you’re looking to unwind after a long day or engage in an active lifestyle, the amenities at Godrej Vrikshya cater to all your needs.</p><p><b>Clubhouse – \"The Trove\"</b></p><p>The clubhouse at Godrej Vrikshya is a stunning <b>55,000+ sq. ft.</b> space, serving as the heart of the community. It is designed to be a social hub where residents can connect, work, and relax.</p><ul><li><b>Multipurpose Lounges</b>: Ideal for informal gatherings or relaxation, the lounges provide a peaceful atmosphere amidst the bustling community.</li><li><b>Event Halls</b>: The event spaces can host everything from intimate gatherings to grand celebrations, complete with modern facilities.</li><li><b>Co-working Areas</b>: For those working from home, the co-working zones provide an efficient and quiet workspace with all the necessary amenities.</li><li><b>Reading Spaces</b>: Residents can enjoy a peaceful reading experience in the well-designed library areas within the clubhouse.</li></ul><p><b>Swimming Pools</b></p><p>The development includes multiple swimming pool options, ensuring that residents can enjoy aquatic activities in a luxury setting.</p><ul><li><b>Olympic-length Infinity-edge Pool</b>: Overlooking the central green, this pool offers breathtaking views and is perfect for those who love to swim laps.</li><li><b>Indoor Temperature-controlled Pool</b>: For year-round comfort, the indoor pool provides an ideal space for relaxation, no matter the season.</li></ul><p><b>Fitness &amp; Sports Facilities</b></p><p>For fitness enthusiasts, Godrej Vrikshya provides a range of sports and fitness facilities designed to keep you healthy and active.</p><ul><li><b>Fully Equipped Gymnasium</b>: Featuring the latest fitness equipment, the gym is designed to help residents stay in shape and achieve their fitness goals.</li><li><b>Squash and Badminton Courts</b>: These courts provide the perfect space for sports enthusiasts to engage in friendly matches or competitive play.</li><li><b>Skating Rink and Outdoor Play Areas</b>: Offering a variety of activities for children and adults alike, the skating rink and outdoor play areas ensure that there's never a dull moment.</li><li><b>Potential for Basketball and Cricket Nets</b>: The development also plans to offer courts for basketball and cricket, catering to residents who enjoy team sports.</li></ul><p><b>Recreation &amp; Entertainment</b></p><p>Godrej Vrikshya ensures that residents can enjoy unique and engaging recreational experiences:</p><ul><li><b>Silent Cinema</b>: For a unique movie-viewing experience, the silent cinema offers an immersive way to enjoy films without disturbing the surrounding community.</li><li><b>Amphitheater</b>: Hosting performances, community events, and open-air concerts, the amphitheater is a space for cultural engagement.</li><li><b>Theme Park Zones and Kids’ Play Areas</b>: For families with children, the development features dedicated play zones and a themed park area to ensure hours of entertainment.</li></ul><p><b>Wellness &amp; Relaxation</b></p><p>Residents can unwind and rejuvenate at the various wellness and relaxation facilities within Godrej Vrikshya:</p><ul><li><b>Yoga and Meditation Decks</b>: Surrounded by nature, these tranquil decks provide the perfect environment for practicing yoga or meditation.</li><li><b>Spa and Salon Facilities</b>: For ultimate relaxation, residents can indulge in rejuvenating spa treatments and salon services.</li><li><b>Pet Grooming Areas</b>: Pet lovers can make use of the dedicated pet grooming facilities available in the development.</li></ul><p> </p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"614\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-3-1024x614.webp\" alt=\"godrej\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-3-1024x614.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-3-300x180.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-3-768x461.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-3.webp 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p><b>Smart Conveniences</b></p><p>In line with the modern lifestyle, Godrej Vrikshya incorporates smart conveniences to ensure comfort and ease of living:</p><ul><li><b>24x7 Power Backup</b>: The project ensures uninterrupted power supply with reliable backup systems in place.</li><li><b>EV Charging Stations</b>: With the rise of electric vehicles, designated parking areas will feature EV charging stations for added convenience.</li><li><b>Medical Store, ATM, and Retail Points</b>: Essential services such as a medical store, ATM, and retail shops will be available within the premises.</li><li><b>Library, Business Center, and Community Hall</b>: These spaces provide a platform for residents to study, work, or socialize.</li></ul><p><b>Security</b></p><p>Safety is a top priority at Godrej Vrikshya, with advanced security features in place to ensure peace of mind:</p><ul><li><b>24-hour CCTV Surveillance</b>: Continuous surveillance ensures that the premises are always under the watchful eye of security personnel.</li><li><b>Secured Entry/Exit Points</b>: Access-controlled entry and exit points ensure that only authorized individuals enter the premises.</li><li><b>Access-Controlled Lobbies and Elevators</b>: Lobbies and elevators will be secured, offering added privacy and protection for residents.</li></ul><p><b>Location Benefits – Sector 103, Dwarka Expressway</b></p><p>One of the standout features of Godrej Vrikshya is its location in <b>Sector 103</b>, a rapidly growing and well-connected area along the Dwarka Expressway. The sector benefits from its proximity to major transportation corridors and essential urban infrastructure, making it an ideal choice for those seeking convenience and connectivity.</p><p><b>Key Distances:</b></p><ul><li><b>IGI Airport</b>: Approximately <b>15 minutes</b> by car.</li><li><b>Delhi Border</b>: About <b>5 minutes</b> away.</li><li><b>Dwarka Metro Station</b>: Located around <b>6 km</b> from the project.</li><li><b>Diplomatic Enclave</b>: A <b>10-20 minute</b> drive.</li><li><b>Yashobhoomi Convention Center</b>: Around <b>10-20 minutes</b> away.</li><li><b>Gurgaon Railway Station</b>: Approximately <b>10 minutes</b> by car.</li></ul><p><b>Social Infrastructure Nearby:</b></p><ul><li><b>Educational Institutions</b>: Delhi Public School, GD Goenka Public School, Alpine Convent School, and many more top-tier institutions.</li><li><b>Healthcare Facilities</b>: Signature Advanced Super Speciality Hospital, Park Hospital, and Rion’s Hospital, ensuring that world-class medical care is just around the corner.</li><li><b>Retail &amp; Entertainment</b>: Esplanade Mall, Dwarka Sports Complex, Dwarka Golf Course, and Bharat Vandana Park, providing ample opportunities for shopping and leisure.</li></ul><p><b>Why Choose Godrej Vrikshya?</b></p><p>Godrej Vrikshya is not just a place to live—it's a lifestyle choice. The development is ideal for families, professionals, and investors who are seeking:</p><ul><li><b>A long-term investment with substantial value appreciation</b> due to the rapid development of the Dwarka Expressway.</li><li><b>A high-end lifestyle</b> with a blend of luxury, comfort, and nature.</li><li><b>Strategic connectivity</b> to key NCR areas and proximity to major business hubs.</li><li><b>A trusted developer</b> with a track record of delivering sustainable, high-quality real estate projects.</li></ul><p><b>Conclusion</b></p><p>Godrej Vrikshya stands as a symbol of luxurious, eco-conscious living. Its focus on sustainable design, premium amenities, and unparalleled location makes it one of the most attractive residential projects in Gurgaon. Whether you are looking for a family home or a sound investment opportunity, Godrej Vrikshya offers the perfect combination of serenity, luxury, and connectivity in one of the most promising regions of NCR.</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"614\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-4-1024x614.webp\" alt=\"Godrej\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-4-1024x614.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-4-300x180.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-4-768x461.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/godrej-evergreen-square-b-c1-sc1-b18-4.webp 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-5bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-4bhk.pdf"
        }
      ],
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/godrej-vrikshya-sector-103-luxurious-apartments-2bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "86 Acres",
      "floors": "G+30",
      "clubHouse": "\"The Trove\"</b></p><p>The clubhouse at Godrej Vrikshya is a stunning <b>55",
      "possession": "2031"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3939,
    "title": "Whiteland Urban Resort Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/whiteland-urban-resort/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3 BHK</p><p> <strong data-start=\"27\" data-end=\"44\">2200</strong></p><p><strong data-start=\"49\" data-end=\"66\" data-is-last-node=\"\">3 BHK</strong></p><p><b>2500</b></p><p><strong data-start=\"11\" data-end=\"28\">4 BHK</strong></p><p><strong data-start=\"11\" data-end=\"28\">3200</strong></p><p><strong data-start=\"33\" data-end=\"50\">4 BHK</strong></p><p><strong data-start=\"33\" data-end=\"50\">4000</strong></p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/whiteland-urban-resort-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/whiteland-urban-resort-sizes-4bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3952,
    "title": "Whiteland Urban Resort Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/whiteland-urban-resort/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-club-r3rt9tkk3ahkx2qy556u9sjso1rutsbzh55ba9ytxs.jpg\" title=\"ATS HomeKraft-club house\" alt=\"ATS club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-pool-r3rt9uiea4iv8opkznlguab99fn81hfpt9ssrjxfrk.jpg\" title=\"TS HomeKraft Sanctuary-swimming pool\" alt=\"ATS HomeKraft Sanctuary-swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-k-r3rt9uiea4iv8opkznlguab99fn81hfpt9ssrjxfrk.jpg\" title=\"ATS HomeKraft Sanctuary-kids area\" alt=\"ATS HomeKraft Sanctuary-kids area\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/GodrejMAdisonAvenue-NatureCure-1024x480-1-1-r36rfzqzrdpzrp4jux96yrmkegflhud5kmo62r08b4.webp\" title=\"ATS HomeKraft Sanctuary-FOREST THEME\" alt=\"ATS HomeKraft Sanctuary-FOREST THEME\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym-r3o39xuabuyi3ppe7zte32z78i2k5tuw95af8yduds.jpg\" title=\"ATS HomeKraft Sanctuary-GYM\" alt=\"ATS HomeKraft Sanctuary-GYM\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"ATS HomeKraft Sanctuary-GREEN AREA\" alt=\"PAREENA COBAN GARDEN\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 3957,
    "title": "Whiteland Urban Resort Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/whiteland-urban-resort/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/plugins/elementor/assets/images/placeholder.png\" title=\"\" alt=\"\" loading=\"lazy\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4120,
    "title": "PAREENA COBAN Sector 99A Luxurious Apartments",
    "location": "SECTOR 99, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Garden"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">PAREENA COBAN SECTOR 99A</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"894\" height=\"690\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.17.55 PM.png\" alt=\"PAREENA COBAN\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.17.55 PM.png 894w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.17.55 PM-300x232.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.17.55 PM-768x593.png 768w\" sizes=\"(max-width: 894px) 100vw, 894px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/parina-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/parina-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/parina-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>PAREENA COBAN</h2>\t\t\t\t\n\t\t<p><a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">LAND</a> PARCEL - 10.5 ACRES<br />CLUB <a style=\"color: #ffffff;\" href=\"https://www.google.com/\">HOUSE</a> - <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">15000</a> SQ. FT.<br />TOTAL TOWER – 7<br />TOTAL UNITS – 544<br />NO. OF FLOOR – <a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">20</a><br />BHK SUPER CARPET FACING BATHROOM</p><p>AREA AREA</p><p>3BHK+SQ 1997 SQFT 1220 SQFT 24 MT ROAD <br />TOWER 4 185.52 SQM 113.34 SQM CLUB FACING <br />2BHK+ST 1550 SQFT 916 SQFT PARK FACING <br />TOWER 7 144.0 SQM 85.09 SQM WEST FACING </p><p>BOOKING AMT – 5 L<br />POSSESSION – 2026<br />PAYMENT PLAN – 10 : 30 : 40 : 20<br />10 : 20 : 20 : 30 : 20</p><p>20 MINUTE IGI AIRPORT<br />5 MINUTE M R GARDEN<br />20 MINUTE DPS</p>\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"483\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pareena-Laxmi-Apartments-Banner_140923102035-1024x483.jpg\" alt=\"parent coban\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Pareena-Laxmi-Apartments-Banner_140923102035-1024x483.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pareena-Laxmi-Apartments-Banner_140923102035-300x142.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pareena-Laxmi-Apartments-Banner_140923102035-768x363.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Pareena-Laxmi-Apartments-Banner_140923102035.jpg 1400w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"300\" height=\"168\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-7.jpeg\" alt=\"parent coban\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"275\" height=\"183\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-4-1.jpeg\" alt=\"parent coban\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"275\" height=\"183\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-3-3.jpeg\" alt=\"parent coban\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"290\" height=\"174\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/images-2-5.jpeg\" alt=\"parent coban\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"800\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/b-19.jpg\" alt=\"parent coban\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/b-19.jpg 800w, https://dhawanproperties.in/wp-content/uploads/2025/04/b-19-300x200.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/b-19-768x512.jpg 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Sizes</h2>\t\t\t\t\n\t\t<p><b>2 BHK + ST</b></p><p><b>1550</b></p><p><b>3 BHK + SQ</b></p><p><b>1997</b></p>\t\t\n\t\t\t\t\t<h2>Schools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>3 KM</p><p>5 KM</p><p>4 KM</p><p>2 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>10 KM</p><p>10 KM</p><p>8 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.28 PM-r3pogwdaqbinm0yachoqc0ez67q1xos701qodvjms0.png\" title=\"Screenshot 2025-04-01 at 3.21.28 PM\" alt=\"PAREENA COBAN club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.18 PM-r3pogslxyzdibl3qyg2821d4so8l2wd9nj4qgrp7gw.png\" title=\"Screenshot 2025-04-01 at 3.21.18 PM\" alt=\"PAREENA COBAN swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.21.07 PM-r3pogoul7n8d1597kefps2baf4r483ycb0isjnus5s.png\" title=\"Screenshot 2025-04-01 at 3.21.07 PM\" alt=\"PAREENA COBAN KIDS AREA\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Kids Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.20.42 PM-r3pogj7k2n0n3hhehbzyd3qiutiwxxbya8lvo03574.png\" title=\"Screenshot 2025-04-01 at 3.20.42 PM\" alt=\"PAREENA COBAN forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/556062370pic-1-r36ranzx16fhz8v2ymdau40j7uopvl7wu9l46awjkg.jpg\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Garden</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"737\" height=\"697\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700.png 737w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161700-300x284.png 300w\" sizes=\"(max-width: 737px) 100vw, 737px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"720\" height=\"704\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649.png 720w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-161649-300x293.png 300w\" sizes=\"(max-width: 720px) 100vw, 720px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"513\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM-1024x513.png\" alt=\"PAREENA COBAN location\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM-1024x513.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM-768x385.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM-1536x770.png 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-01-at-3.18.08 PM.png 2016w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/sobha-altus/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-150x150.jpeg\" title=\"sobha\" alt=\"sobha\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/sobha-altus/\">Sobha Altus</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/ats-homekraft-sanctuary/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/ats-r3rt9vg8gyk5kao7u603es2putil96jg5ega8tw1lc.jpg\" title=\"ats\" alt=\"ats\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/ats-homekraft-sanctuary/\">ATS HomeKraft Sanctuary</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Emaar-Urban-Ascent-r3rbtox71wmkhx52z4qxjsrtxjqq39pc46xd4natxs.png\" title=\"Emaar Urban Ascent\" alt=\"emaar-urban-ascent\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/emaar-urban-ascent/\">Emaar Urban Ascent</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/mrg-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrg-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.jpg\" title=\"mrg\" alt=\"MRG Crown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/mrg-crown/\">MRF Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1520\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-1520\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1521\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1521\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1522\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1522\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-1523\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-1523\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/pareena-coban-sector-99a-luxurious-apartments-3bhk.pdf"
        }
      ],
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/pareena-coban-sector-99a-luxurious-apartments-2bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "99 Acres",
      "possession": "2026"
    },
    "nearbyPlaces": [
      {
        "name": "DPS",
        "distance": "3 km",
        "type": "Education"
      },
      {
        "name": "Gyannanda School",
        "distance": "4 km",
        "type": "Education"
      },
      {
        "name": "S N International School",
        "distance": "5 km",
        "type": "Education"
      },
      {
        "name": "Prime Scholars School",
        "distance": "6 km",
        "type": "Education"
      },
      {
        "name": "Medanta Hospital",
        "distance": "4 km",
        "type": "Healthcare"
      },
      {
        "name": "Fortis Hospital",
        "distance": "6 km",
        "type": "Healthcare"
      },
      {
        "name": "Manipal Hospital",
        "distance": "8 km",
        "type": "Healthcare"
      },
      {
        "name": "Sri Balaji's Multi Hospital",
        "distance": "10 km",
        "type": "Healthcare"
      }
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4405,
    "title": "Max Estate Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-max-estate-360/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2 BR + Store</p><p>2149</p><p>3 BR + Servant</p><p>2611</p><p>4 BR + Servant</p><p>3531</p>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4406,
    "title": "Max Estate Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-max-estate-360/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"420\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1024x420.png\" alt=\"max estate location\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1024x420.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-300x123.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-768x315.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1536x630.png 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png 1664w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4407,
    "title": "Max Estate Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Restaurant"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-max-estate-360/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/IX7dgE9eFB6MnT8nweQXRfVXvLNhkE763AP6xOKU-r420tsc5um1vb8kvr8fgv93cpd3k4fbidajetossuo.jpg\" title=\"IX7dgE9eFB6MnT8nweQXRfVXvLNhkE763AP6xOKU\" alt=\"max estate club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/max-pool-r420bxejzxlqpyis1iinhrc2dt4hvgf3wwbakfa32o.jpg\" title=\"max pool\" alt=\"max estate pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mx-playground-r420byce6rn11khew0xa293iz6zv35iu90ys1p8owg.jpg\" title=\"mx playground\" alt=\"max estate playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/max-sector-128-noida-brochure-pdf-16-scaled-1-r420tta01g35mujilqu3fqutaqyxc4f8pf6wayreog.webp\" title=\"max-sector-128-noida-brochure-pdf-16-scaled\" alt=\"max estate green\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Green Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4443,
    "title": "Max Estate 360",
    "location": "SECTOR 55, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Parking",
      "Restaurant"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in/\">Max Estate 360</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/spotlight-poster-r420bza8mdfdi552vw15n4anmibviuh8q4c5y2or48.jpg\" alt=\"max estate\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/max-estate-128-noida-photos-9-r420bycefje36j6g1dmj2mj714gib5didzoogsq5ag.jpeg\" alt=\"max estate\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/max-estate-amenities/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/max-estate-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/max-estate-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/max-estate-360-luxurious-apartments-top-20/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Max Estate 360</h2>\t\t\t\t\n\t\t<p>TOTAL LAND – 11.8 ACRE<a style=\"color: #ffffff;\" href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">S</a><br />FIRST PHASE LAND – 9.43 ACRE<a style=\"color: #ffffff;\" href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">S</a><br />TOTAL HEIGHT –<br />CLUB HOUSE FIRS<a style=\"color: #ffffff;\" href=\"https://www.google.com/\"><del>T</del></a> PHASE –<br />TOTAL TOWERS – <a style=\"color: #ffffff;\" href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">6</a><br />UNITS PER FLOOR – 4<br />PRICE STARTS – 20000 PER SQ. FT.<br />3 LEVEL BASEMENT PARKING<br />TOTAL FLOOR – 17<br />CURRENT PRICE –<br />PAYMENT PLAN – 25:25:25:25 – 30:40:30<br />DIRECT BOOKING –<br />1. 3 BED ROOM – 3 BATH ROOM – STAFF &amp;amp; STORAGE ROOM<br />TOTAL AREA – 2611 FT.<br />CARPET AREA – 1404 FT<br />EXCLUSIVE AREA – 1945 FT.<br />2. 3 BED ROOM – 3 BATH ROOM – STAFF &amp;amp; STORAGE ROOM<br />TOTAL AREA – 2802 FT<br />CARPET AREA – 1507 FT<br />EXCLUSIVE AREA – 2158 FT.<br />3. 4 BED ROOM – 6 BATHROOM – STAFF &amp;amp; STORAGE<br />TOTAL AREA – 3531 FT.</p><p>CARPET AREA – 1899 FT<br />EXCLUSIVE AREA – 2653 FT.</p><p>35 MINUTE IGI AIRPORT<br />25 MINUTE SECTOR 55 – 56 METRO STATION</p>\t\t\n\t\t\t\t\t<h2>Sample Flat</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/04/max-v2.mp4https://dhawanproperties.in/wp-content/uploads/2025/04/max-v1.mp4\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/services/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2 BR + Store</p><p>2149</p><p>3 BR + Servant</p><p>2611</p><p>4 BR + Servant</p><p>3531</p>\t\t\n\t\t\t\t\t<h2>Scools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>5 KM</p><p>7 KM</p><p>6 KM</p><p>4 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>8 KM</p><p>8 KM</p><p>6 KM</p><p>4 KM</p>\t\t\n\t\t\t\t\t<h2>Amenities</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/IX7dgE9eFB6MnT8nweQXRfVXvLNhkE763AP6xOKU-r420tsc5um1vb8kvr8fgv93cpd3k4fbidajetossuo.jpg\" title=\"IX7dgE9eFB6MnT8nweQXRfVXvLNhkE763AP6xOKU\" alt=\"max estate club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2><a href=\"\">Club House</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/max-pool-r420bxejzxlqpyis1iinhrc2dt4hvgf3wwbakfa32o.jpg\" title=\"max pool\" alt=\"max estate pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mx-playground-r420byce6rn11khew0xa293iz6zv35iu90ys1p8owg.jpg\" title=\"mx playground\" alt=\"max estate playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/max-sector-128-noida-brochure-pdf-16-scaled-1-r420tta01g35mujilqu3fqutaqyxc4f8pf6wayreog.webp\" title=\"max-sector-128-noida-brochure-pdf-16-scaled\" alt=\"max estate green\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Green Area</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-res-r3r96uzdjmt566w0q51xzq9oe35lil88ethu3nwpow.jpg\" title=\"xr:d:DAFfCc1Bi2g:10,j:2047103886,t:23040310\" alt=\"M3M crown\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant</h2>\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"420\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1024x420.png\" alt=\"max estate location\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1024x420.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-300x123.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-768x315.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109-1536x630.png 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-173109.png 1664w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 30:40:30 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>Location</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"735\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/map-lg-1024x735.jpg\" alt=\"max estate\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/map-lg-1024x735.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/map-lg-300x215.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/map-lg-768x552.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/map-lg.jpg 1189w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/images-5-150x150.jpg\" title=\"signature global\" alt=\"signature global Twin Tower\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower </a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/smart-world-one-dxp-banner-1-r3rft9rozv6bxml1kp0dx2fkje24uupauucf58exhs.jpg\" title=\"smart-world-one-dxp-banner\" alt=\"smart world\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/smart-world-dxp-2/\">Smart World DXP</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-crown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/M3M-Crown-1-1-r3rahr5ii304duruwerwdw9ja40tize5ix5w0mdn9s.jpg\" title=\"M3M Crown\" alt=\"m3m mansion\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-crown/\">M3M Crown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/e-p-r3rdpjvqgbisogkjpyqb26attz9osm3ps2gbesomq8.jpg\" title=\"e p\" alt=\"Elan Presidential swimming pool\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-04-01-at-3.18.32 PM-r3po8kis6646qf1tze2qqm2xoaryq8ptitmsalw7ww.png\" title=\"\" alt=\"Navraj The KingsTown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/parina-coban-sector-99a/\">Pareena</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/elan-the-presidential/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/elan-1-r3rdgfu2751q4jt1xixidz2yii6l68xe6yrux8711s.jpg\" title=\"elan\" alt=\"elan the presidential\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/elan-the-presidential/\">Elan Presidential</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-6550\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-6550\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-6551\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-6551\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-6552\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-6552\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-6553\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-6553\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "projectSpecs": {
      "landParcel": "8 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4509,
    "title": "Krisumi Waterfall Residence Amenities",
    "location": "Sector 104, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/krisumi-waterfall-residences-sector-36a-top-20/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/clubhouse-r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/banner2-r3fiuilkwh7ioo1pez8uthqu8rfjgf1c0axksvjh8w.webp\" title=\"banner2\" alt=\"Krisumi Waterfall Residence swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/12-r3iw1pnh323fa69fezsuygeihtslksmek49dc26qds.jpg\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Indoor Games</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/6-r3m5kdglmljuv0znbpyliv2ff1eidk1yvy4hupccuo.webp\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/photo-68450-r38wmb5gid10ipgsfv6wxo2umygp2o38w0qw63kgsw.jpg\" title=\"photo-68450\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw-r3iwe7w60p7rre3fdwf5mssb1e5ezt9ty0qy7ln5lc.webp\" title=\"Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant & Bar</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "projectSpecs": {
      "clubHouse": "r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4558,
    "title": "MRG Crown Amenities",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/mrg-crown/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrf-club-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.webp\" title=\"mrf club\" alt=\"MRG Crown CLUB HOUSE\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-pool-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus swimming Pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/sobha-play-r3rqy9p0lg40ww42110omvkrr1lamcmxbljjktun0w.webp\" title=\"\" alt=\"Sobha Altus Playground\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Playground</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/mrg-f-r3rsd3ss7vpato9q6i3azjr8c90xx1gbb7pwykh4i8.webp\" title=\"mrg f\" alt=\"MRG Crown forest theme\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Forest Theme</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/gym_-1-r36raoxr80gsautpt4rxelrzt8k33abn6e8lnkv5e8.webp\" title=\"\" alt=\"godrej vrikshya\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/unnamed-file-r3r9nb5p59bscizuo90wmku2mu2u7wj4o8hqfziosw.jpg\" title=\".jpg\" alt=\"MRG Crown Mini Theatre\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4584,
    "title": "Puri Diplomatic Residence Amenities",
    "location": "Sector 104, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Club House",
      "Gym",
      "Restaurant",
      "Mini Theatre"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Amenities</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/clubhouse-r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Club House</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/banner2-r3fiuilkwh7ioo1pez8uthqu8rfjgf1c0axksvjh8w.webp\" title=\"banner2\" alt=\"Krisumi Waterfall Residence swimming pool\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Swimming Pool</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/12-r3iw1pnh323fa69fezsuygeihtslksmek49dc26qds.jpg\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Indoor Games</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/6-r3m5kdglmljuv0znbpyliv2ff1eidk1yvy4hupccuo.webp\" title=\"\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Mini Theatre</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/photo-68450-r38wmb5gid10ipgsfv6wxo2umygp2o38w0qw63kgsw.jpg\" title=\"photo-68450\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Gym</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw-r3iwe7w60p7rre3fdwf5mssb1e5ezt9ty0qy7ln5lc.webp\" title=\"Puri-Diplomatic-Residences-Gurgaon-image-13-qtwyc8p9yl1l4i8aowlqq0rqoys2gvy8m76qza5wyw\" alt=\"Hero Homes The palatial Sector 104\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Restaurant & Bar</h2>",
    "images": [
      "/placeholder.svg"
    ],
    "projectSpecs": {
      "clubHouse": "r3ivyom729y5vent3oo4x7x1l4q0rwljh4l1nyoefk.jpg\" title=\"clubhouse\" alt=\"Krisumi Waterfall Residence club house\" loading=\"lazy\" />"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4585,
    "title": "Puri Diplomatic Residence Sizes",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>3BHK+UTILITY</p><p>(2282)</p><p>3BHK+UTILITY</p><p>(2440)</p><p>3BHK+UTILITY</p><p>(2380)</p><p>4BHK+UTILITY</p><p>(3475)</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1004\" height=\"628\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png 1004w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-768x480.png 768w\" sizes=\"(max-width: 1004px) 100vw, 1004px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1011\" height=\"634\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png 1011w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-768x482.png 768w\" sizes=\"(max-width: 1011px) 100vw, 1011px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residence-sizes-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residence-sizes-4bhk.pdf"
        }
      ]
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4596,
    "title": "Puri Diplomatic Residence Layout",
    "location": "Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "24/7 Security",
      "Power Backup",
      "High Speed WiFi"
    ],
    "description": "<h2><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Layout</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1009\" height=\"627\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836.png 1009w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836-300x186.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132836-768x477.png 768w\" sizes=\"(max-width: 1009px) 100vw, 1009px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1004\" height=\"633\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822.png 1004w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822-300x189.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132822-768x484.png 768w\" sizes=\"(max-width: 1004px) 100vw, 1004px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"749\" height=\"458\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807.png 749w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132807-300x183.png 300w\" sizes=\"(max-width: 749px) 100vw, 749px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1006\" height=\"635\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724.png 1006w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724-300x189.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132724-768x485.png 768w\" sizes=\"(max-width: 1006px) 100vw, 1006px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1004\" height=\"628\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704.png 1004w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132704-768x480.png 768w\" sizes=\"(max-width: 1004px) 100vw, 1004px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1011\" height=\"634\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634.png 1011w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-300x188.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-132634-768x482.png 768w\" sizes=\"(max-width: 1011px) 100vw, 1011px\" />",
    "images": [
      "/placeholder.svg"
    ],
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 4967,
    "title": "BPTP Amstoria Verti Greens",
    "location": "Sector 102, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Club House",
      "Garden"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in\">BPTP Amstoria Verti Greens Sector 102</a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t<figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/1690286221-9902-r3m7sck9cws6tlimh5646jyz06ofigeh0r2n8c8xu0.jpg\" alt=\"bptp verti green\" /></figure><figure><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/bptp-the_realty_today_sGfGnEl_6QRBKfW_2lxfcg6_5pE8ZKj-r3ock1l3so2myz3gfrkrd594kwrzcs2vnrtgkqhn48.png\" alt=\"bptp\" /></figure>\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 1000 1000\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z\"></path></svg>\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/bptp-verti-greens-2/\">\n\t\t\t\t\t\t\t\t\tAmenities\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/bptp-verti-greens-sizes/\">\n\t\t\t\t\t\t\t\t\tSizes\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/bptp-verti-green-layout/\">\n\t\t\t\t\t\t\t\t\tLayout\n\t\t\t\t\t</a>\n\t\t\t\t\t<a role=\"button\">\n\t\t\t\t\t\t\t\t\tPrice\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://dhawanproperties.in/bptp-verti-greens/\">\n\t\t\t\t\t\t\t\t\tDetails\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>BPTP Amstoria Verti Greens</h2>\t\t\t\t\n\t\t<p><strong><a href=\"https://www.magicbricks.com/property-for-sale-rent-in-New-Delhi/residential-real-estate-New-Delhi?mbtracker=google_paid_brand_1_desk_delhi&amp;ccode=brand_1_sem&amp;gad_source=1&amp;gad_campaignid=300475617&amp;gbraid=0AAAAADtFk5Ufmbo_n9fhukImXgzfPQxGL&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02Nl5G5d222GMtxfm4LDdqMLnFScwneGgZEXRfO8qB24M7cXLm_uAxrRoC1VsQAvD_BwE\">T</a>OTAL LAND</strong> – 12 ACRES</p><p><strong>FIRST PHASE LAND</strong> – 9.43 ACRES</p><p><strong>TOTAL HEIGHT – </strong>G + 4<a href=\"https://www.99acres.com/postproperty/?nn_source=Performance&amp;nn_account=Google_99acres-sell&amp;nn_campaign=22195930941_179770740892_731928030361&amp;nn_medium=22195930941_179770740892_731928030361&amp;nn_adtype=g_&amp;nn_keyword=sell%20property%20online&amp;nn_placement=&amp;gad_source=1&amp;gad_campaignid=22195930941&amp;gbraid=0AAAAADjk425z9sdVo0zgv7jN63YOj57It&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NmQX_Img-aBj22PSW7UjANXWMPgTjZriQzmL6dT1MAJERzwyOMkK1BoCNdgQAvD_BwE\">5</a> FLOORS</p><p><strong>CLUB HOUSE</strong> <strong>FIRST PHASE</strong> – 1.55 SQ.FT<a href=\"https://housing.com/in/buy/searches/P2ad65c3zn8jym8yx?paid=true&amp;gad_source=1&amp;gad_campaignid=21603784681&amp;gbraid=0AAAAADqjP_RFnWRjzcBOzoX5maxYagVXb&amp;gclid=CjwKCAjw_pDBBhBMEiwAmY02NoZ_EefR6gVli7UwevSLmLmxzRhKF_c2xQalJ_PP8Jjh4Ov5MjEWnBoChxsQAvD_BwE\">.</a></p><p><strong>15 SKY GARDENS ACROSS 5 TOWERS</strong></p><p><strong>TOTAL TOWERS – </strong><a style=\"color: #ffffff;\" href=\"https://www.google.com/\">7</a></p><p><strong>UNITS PER FLOOR – </strong><a style=\"color: #ffffff;\" href=\"https://www.google.com/\">4</a></p><p><strong>3 SIDE OPEN </strong></p><p><strong>76% GREEN AREA</strong></p>\t\t\n\t\t\t\t\t<h2>Video</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/04/bptp-1.mp4https://dhawanproperties.in/wp-content/uploads/2025/04/bptp.mp4https://dhawanproperties.in/wp-content/uploads/2025/04/bptp3.mp4\t\t\n\t\t\t\t\t<h2>Gallery</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"600\" height=\"400\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps.jpg 600w, https://dhawanproperties.in/wp-content/uploads/2025/04/podium-r0aoprkwtje4sgii3yzoejxivaljnht2byx4cx7kps-300x200.jpg 300w\" sizes=\"(max-width: 600px) 100vw, 600px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"680\" height=\"500\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-up-coming.webp\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-up-coming.webp 680w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-up-coming-300x221.webp 300w\" sizes=\"(max-width: 680px) 100vw, 680px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"427\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-an-exclusive-look-at-its-unmatched-luxury-features-1024x427.jpg\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-an-exclusive-look-at-its-unmatched-luxury-features-1024x427.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-an-exclusive-look-at-its-unmatched-luxury-features-300x125.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-an-exclusive-look-at-its-unmatched-luxury-features-768x320.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-an-exclusive-look-at-its-unmatched-luxury-features.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"750\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/924373bd95217c7c1de176f1e64c7b.jpg\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/924373bd95217c7c1de176f1e64c7b.jpg 750w, https://dhawanproperties.in/wp-content/uploads/2025/04/924373bd95217c7c1de176f1e64c7b-300x180.jpg 300w\" sizes=\"(max-width: 750px) 100vw, 750px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/4-1024x533.webp\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/4-1024x533.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/4-300x156.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/4-768x400.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/4.webp 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/2-1024x533.webp\" alt=\"bptp Amstoria verti greens\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/2-1024x533.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/2-300x156.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/2-768x400.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/2.webp 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/services/\">Sizes</a></h2>\t\t\t\t\n\t\t<p>2BHK+UTILITY</p><p>(1656)</p><p>3BHK+UTILITY</p><p>(2463)</p>\t\t\n\t\t\t\t\t<h2>Scools & Hospitals</h2>\t\t\t\t\n\t\t<p>DPS</p><p>Gyannanda School</p><p>S N International School</p><p>Prime Scholars  School</p><p>4 KM</p><p>6 KM</p><p>5 KM</p><p>3 KM</p><p>Medanta Hospital</p><p>Forties Hospital</p><p>Manipal Hospital</p><p>Sri Balaji's Multi Hospital</p><p>9 KM</p><p>9 KM</p><p>7 KM</p><p>3 KM</p>\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/about/\">AMENITIES</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150709-r3ip499fbwly3oly25z88ekn2jbsskavlfgeag21ow.png\" title=\"Screenshot 2025-03-28 150709\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150734-r3ip4gs4ukw8okb0u988scobtmaqi54qagoa4nqwb4.png\" title=\"BPTP VERTI GREENS AMENITIES\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150753-r3ip4oaud96j9g03mch9cas0kp9o7pykzhw5yvfqxc.png\" title=\"Screenshot 2025-03-28 150753\" alt=\"BPTP VERTI GREENS\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Screenshot-2025-03-28-150805-r3ip4s274lbojvun0e3rm9tuy8r52idic0i3vza68g.png\" title=\"BPTP VERTI GREENS AMENITIES\" alt=\"BPTP VERTI GREENS AMENITIES\" loading=\"lazy\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>LOCATION</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"573\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-28-151242-1024x573.png\" alt=\"BPTP VERTI GREENS LOCATION\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-28-151242-1024x573.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-28-151242-300x168.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-28-151242-768x430.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/03/Screenshot-2025-03-28-151242.png 1062w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2>Layout</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"852\" height=\"591\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407.png 852w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407-300x208.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142407-768x533.png 768w\" sizes=\"(max-width: 852px) 100vw, 852px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"385\" height=\"216\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554.png 385w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142554-300x168.png 300w\" sizes=\"(max-width: 385px) 100vw, 385px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"441\" height=\"233\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png\" alt=\"bptp Amstoria verti greens-layout\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547.png 441w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142547-300x159.png 300w\" sizes=\"(max-width: 441px) 100vw, 441px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"395\" height=\"229\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539.png 395w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142539-300x174.png 300w\" sizes=\"(max-width: 395px) 100vw, 395px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"443\" height=\"193\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606.png 443w, https://dhawanproperties.in/wp-content/uploads/2025/04/Screenshot-2025-04-08-142606-300x131.png 300w\" sizes=\"(max-width: 443px) 100vw, 443px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tPayment Plan 20:20:20:20:20 Plz Contact Us For Flexi Finance Schemes\n\t\t\t\t\t</a>\n\t\t\t<iframe loading=\"lazy\"\n\t\t\t\t\tsrc=\"https://maps.google.com/maps?q=bptp%20verti%20greena&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near\"\n\t\t\t\t\ttitle=\"bptp verti greena\"\n\t\t\t\t\taria-label=\"bptp verti greena\"\n\t\t\t></iframe>\n\t\t\t\t\t<a href=\"https://docs.google.com/forms/d/e/1FAIpQLSewUw5gdiBf0zLxPmNH446as1Wqg7Wqn916gLDy4M7Slz7_Sg/viewform?usp=dialog\">\n\t\t\t\t\t\t\t\t\tAvail Best Scheme For Limited Period*\n\t\t\t\t\t</a>\n\t\t\t\t\t<h2>You May Also Consider </h2>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/40ff805b941d1539f125bc808ae7f8-r3m7k3j94hqirut1i82ra9hn8hvsq3smey7b5szw28.jpg\" title=\"PURI DIPLOMATIC\" alt=\"puri diplomatic\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\">Puri Diplomatic Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/godrej-vrikshya/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living-r38x8alkcv4g2dj62das94cyte3r3td8ku1q92yz9s.jpeg\" title=\"godrej-vriksha-sector-103-dwarka-expressway-gurugram-a-paradigm-of-luxury-living\" alt=\"godrej vrikshya luxurious apartment\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/godrej-vrikshya/\">Godrej Vrikshya</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/Hero-Homes-Palatial-Sector-104-2-r3movbgyh0vmkbjlc44szhuyak3x9ixqflrz3exwk0.jpg\" title=\"Hero-Homes-Palatial-Sector-104\" alt=\"hero-homes-palatial\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/hero-the-palatial-2/\">Hero The Palatial</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/navraj-the-kingstown-heights-sector-37d-banner-60362-r3manz9olkw6oyaj7334kj3sokflx4yg4pmwkh3xg0.jpg\" title=\"navraj-the-kingstown-heights-sector-37d-banner-60362\" alt=\"navraj-The Kingtown\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Navraj KingsTown</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/navraj-kingstown/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/common-img1-highres-r3mapnfcqz6jbzv5ft3903xap873lrl9ozdza6mqds.jpg\" title=\"krisumi water\" alt=\"krisumi water\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/navraj-kingstown/\">Krisumi Waterfall Residence</a></h3>\t\t\t\t\n\t\t\t\t\t<figure><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\" tabindex=\"-1\"><img src=\"https://dhawanproperties.in/wp-content/uploads/elementor/thumbs/65d6f97a45bd25cc632416e2_Signature-Global-Deluxe-37D-Gurgaon-r3mau61flbd54jay29dphgw1gvxlleitzc8zb1xmhc.jpg\" title=\"Signature Global-37\" alt=\"signature global\" loading=\"lazy\" /></a></figure><h3><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global DXP 37D</a></h3>\t\t\t\t\n\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2>FAQ</h2>\t\t\t\t\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2370\" open>\n\t\t\t\t<summary data-accordion-index=\"1\" tabindex=\"0\" aria-expanded=\"true\" aria-controls=\"e-n-accordion-item-2370\" >\n\t\t\t\t\t How can I schedule a property visit through Dhawan Properties? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2371\" >\n\t\t\t\t<summary data-accordion-index=\"2\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2371\" >\n\t\t\t\t\t Are there any hidden charges involved in buying a property? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2372\" >\n\t\t\t\t<summary data-accordion-index=\"3\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2372\" >\n\t\t\t\t\t Do you assist with home loans and legal paperwork? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t\t\t\t\t<details id=\"e-n-accordion-item-2373\" >\n\t\t\t\t<summary data-accordion-index=\"4\" tabindex=\"-1\" aria-expanded=\"false\" aria-controls=\"e-n-accordion-item-2373\" >\n\t\t\t\t\t Which areas do you serve? \n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t<svg aria-hidden=\"true\" viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z\"></path></svg>\n\t\t\t\t\t\t</summary>\n\t\t\t\t\t\t\t\t\t<p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t</details>\n\t\t<p>You can schedule a property visit by filling out our contact form or calling us directly at the number listed on our Contact page.</p><p>No, we maintain transparency and all charges, including will be disclosed up front while providing informations, If any.</p><p>Yes, we provide assistance with home loans through our banking partners and also offer support with legal documentation.</p><p>We specialize in real estate services in Ashok vihar-Delhi, Dwarka express (Sec 82-115), Greater Noida and Navi Mumbai.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/bptp-amstoria-verti-greens-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/bptp-amstoria-verti-greens-3bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "12 Acres",
      "towers": 5
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5047,
    "title": "Navraj The KingsTown Hights Sector 37D",
    "location": "SECTOR 37, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/navraj-the-kingstown/\">Navraj The KingsTown Heights</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"750\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Sector-37D-1.jpg\" alt=\"Navraj The KingsTown HIGHTS SECTOR 37D\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Sector-37D-1.jpg 750w, https://dhawanproperties.in/wp-content/uploads/2025/04/Navraj-The-Kingstown-Heights-Sector-37D-1-300x180.jpg 300w\" sizes=\"(max-width: 750px) 100vw, 750px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<article dir=\"auto\" data-testid=\"conversation-turn-22\" data-scroll-anchor=\"false\"><h2 data-start=\"205\" data-end=\"265\">Navraj The Kingstown Heights – Ultra-Luxury Residences</h2><p data-start=\"267\" data-end=\"363\"><strong data-start=\"267\" data-end=\"280\">Developer</strong>: Navraj Buildtech Pvt. Ltd.​</p><p data-start=\"365\" data-end=\"460\"><strong data-start=\"365\" data-end=\"377\">Location</strong>: Sector 37D, Dwarka Expressway, Gurugram, Haryana​</p><p data-start=\"462\" data-end=\"561\"><strong data-start=\"462\" data-end=\"478\">Project Type</strong>: High-rise residential development</p><p data-start=\"563\" data-end=\"667\"><strong data-start=\"563\" data-end=\"580\">Configuration</strong>: 3 BHK and 4 BHK apartments with servant rooms​</p><p data-start=\"669\" data-end=\"775\"><strong data-start=\"669\" data-end=\"688\">Total Land Area</strong>: 5.5 acres</p><p data-start=\"777\" data-end=\"843\"><strong data-start=\"777\" data-end=\"793\">Total Floors</strong>: 26​</p><p data-start=\"845\" data-end=\"946\"><strong data-start=\"845\" data-end=\"859\">Unit Sizes</strong>: Approximately 2000 to 2815 sq. ft.​</p><p data-start=\"948\" data-end=\"1050\"><strong data-start=\"948\" data-end=\"963\">Price Range</strong>: Starting from ₹3.57 Crore​</p><p data-start=\"1052\" data-end=\"1160\"><strong data-start=\"1052\" data-end=\"1073\">RERA Registration</strong>: Received</p><hr data-start=\"1162\" data-end=\"1165\" /><h2 data-start=\"1167\" data-end=\"1192\">Navraj The KingsTown Heights-Project Highlights</h2><ul data-start=\"1194\" data-end=\"1652\"><li data-start=\"1194\" data-end=\"1307\"><p data-start=\"1196\" data-end=\"1307\"><strong data-start=\"1196\" data-end=\"1220\">Architectural Design</strong>: Contemporary high-rise towers designed to offer spacious and well-ventilated living spaces.​</p></li><li data-start=\"1309\" data-end=\"1419\"><p data-start=\"1311\" data-end=\"1419\"><strong data-start=\"1311\" data-end=\"1332\">Premium Interiors</strong>: Units feature high-quality finishes, including modular kitchens, VRV air conditioning, and smart home automation.​<a href=\"https://navraj.buildersprojects.com/residential/gurgaon/navraj-the-kingstown-heights-sector-37d/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\">Navraj</a></p></li><li data-start=\"1421\" data-end=\"1531\"><p data-start=\"1423\" data-end=\"1531\"><strong data-start=\"1423\" data-end=\"1444\">Security Features</strong>: 24/7 surveillance, gated entry, intercom facilities, and professional security personnel ensure a safe living environment.​</p></li><li data-start=\"1533\" data-end=\"1652\"><p data-start=\"1535\" data-end=\"1652\"><strong data-start=\"1535\" data-end=\"1565\">Sustainability Initiatives</strong>: Rainwater harvesting systems, energy-efficient lighting, and waste management programs promote eco-friendly living.​</p></li></ul><hr data-start=\"1654\" data-end=\"1657\" /><h2 data-start=\"1659\" data-end=\"1710\">🏢 Developer Profile: Navraj Buildtech Pvt. Ltd.</h2><p data-start=\"1712\" data-end=\"1837\">Navraj Buildtech Pvt. Ltd. is a reputable real estate developer known for delivering quality residential projects in the Delhi NCR region. With a focus on sustainable development and customer satisfaction, Navraj Buildtech aims to provide modern living solutions that cater to the evolving needs of urban dwellers.​</p><hr data-start=\"1839\" data-end=\"1842\" /><p data-start=\"1844\" data-end=\"1997\">If you have any further questions or need more detailed information about Navraj The Kingstown Heights or other projects in Sector 37D, feel free to asking.</p><p data-start=\"1844\" data-end=\"1997\"> Navraj The KingsTown</p><h2 data-start=\"1167\" data-end=\"1192\">Heights-</h2><p data-start=\"1844\" data-end=\"1997\">Project Overview</p></article><article dir=\"auto\" data-testid=\"conversation-turn-24\" data-scroll-anchor=\"true\"><p data-start=\"251\" data-end=\"912\"><strong data-start=\"251\" data-end=\"267\">Project Name</strong>: Navraj The Kingstown Heights<br data-start=\"306\" data-end=\"309\" /><strong data-start=\"309\" data-end=\"322\">Developer</strong>: Navraj Infratech<br data-start=\"361\" data-end=\"364\" /><strong data-start=\"364\" data-end=\"376\">Location</strong>: Sector 37D, Dwarka Expressway, Gurugram, Haryana<br data-start=\"415\" data-end=\"418\" /><strong data-start=\"418\" data-end=\"431\">Land Area</strong>: 25 acres (Phase 1: 9 acres)<br data-start=\"470\" data-end=\"473\" /><strong data-start=\"473\" data-end=\"490\">Configuration</strong>: 3 BHK + Servant Room and 4 BHK + Servant Room apartments<br data-start=\"529\" data-end=\"532\" /><strong data-start=\"532\" data-end=\"548\">Total Towers</strong>: 5 towers (G+37 floors)<br data-start=\"587\" data-end=\"590\" /><strong data-start=\"590\" data-end=\"605\">Total Units</strong>: Approximately 600 units<br data-start=\"644\" data-end=\"647\" /><strong data-start=\"647\" data-end=\"665\">Ceiling Height</strong>: 12.5 feet<br data-start=\"704\" data-end=\"707\" /><strong data-start=\"707\" data-end=\"728\">RERA Registration</strong>: 18 of 2025</p><hr data-start=\"914\" data-end=\"917\" /><h2 data-start=\"919\" data-end=\"950\">Navraj The KingsTown</h2><h2 data-start=\"1167\" data-end=\"1192\">Heights</h2><h2 data-start=\"919\" data-end=\"950\">- Apartment Specifications</h2><ul data-start=\"952\" data-end=\"1291\"><li data-start=\"952\" data-end=\"1134\"><p data-start=\"954\" data-end=\"979\"><strong data-start=\"954\" data-end=\"978\">3 BHK + Servant Room</strong>:</p><ul data-start=\"982\" data-end=\"1134\"><li data-start=\"982\" data-end=\"1033\"><p data-start=\"984\" data-end=\"1033\"><strong data-start=\"984\" data-end=\"992\">Size</strong>: Approximately 2400 sq. ft.</p></li><li data-start=\"1036\" data-end=\"1134\"> </li></ul></li><li data-start=\"1136\" data-end=\"1291\"><p data-start=\"1138\" data-end=\"1163\"><strong data-start=\"1138\" data-end=\"1162\">4 BHK + Servant Room</strong>:</p><ul data-start=\"1166\" data-end=\"1291\"><li data-start=\"1166\" data-end=\"1204\"><p data-start=\"1168\" data-end=\"1204\"><strong data-start=\"1168\" data-end=\"1176\">Size</strong>: Approximately 3300 sq. ft.</p></li></ul></li></ul><p data-start=\"1293\" data-end=\"1306\"><strong data-start=\"1293\" data-end=\"1305\">Features</strong>:</p><ul data-start=\"1307\" data-end=\"1541\"><li data-start=\"1307\" data-end=\"1348\"><p data-start=\"1309\" data-end=\"1348\">Private lift lobbies for each apartment</p></li><li data-start=\"1349\" data-end=\"1378\"><p data-start=\"1351\" data-end=\"1378\">VRV air conditioning system</p></li><li data-start=\"1379\" data-end=\"1433\"><p data-start=\"1381\" data-end=\"1433\">Fresh air provision in all apartments and club areas</p></li><li data-start=\"1434\" data-end=\"1463\"><p data-start=\"1436\" data-end=\"1463\">Ultra-luxury specifications</p></li><li data-start=\"1464\" data-end=\"1541\"><p data-start=\"1466\" data-end=\"1541\">A+ grade construction partner​</p></li></ul><h2 data-start=\"1548\" data-end=\"1564\">Navraj The KingsTown</h2><h2 data-start=\"1167\" data-end=\"1192\">Heights</h2><h2 data-start=\"1548\" data-end=\"1564\">-Amenities</h2><p data-start=\"1566\" data-end=\"1638\">Navraj The Kingstown Heights offers a plethora of world-class amenities:</p><ul data-start=\"1640\" data-end=\"2412\"><li data-start=\"1640\" data-end=\"2412\"><p data-start=\"1642\" data-end=\"1662\"><strong data-start=\"1642\" data-end=\"1661\">Club Facilities</strong>:</p><ul data-start=\"1665\" data-end=\"2412\"><li data-start=\"1665\" data-end=\"1706\"><p data-start=\"1667\" data-end=\"1706\">1 lakh sq. ft. of club space</p></li><li data-start=\"1709\" data-end=\"1750\"><p data-start=\"1711\" data-end=\"1750\">5 different clubs</p></li><li data-start=\"1753\" data-end=\"1794\"><p data-start=\"1755\" data-end=\"1794\">3 swimming pools, including an all-weather pool</p></li><li data-start=\"1797\" data-end=\"1838\"><p data-start=\"1799\" data-end=\"1838\">Triple-height lobby</p></li><li data-start=\"1841\" data-end=\"1882\"><p data-start=\"1843\" data-end=\"1882\">Multi-purpose halls</p></li><li data-start=\"1885\" data-end=\"1926\"><p data-start=\"1887\" data-end=\"1926\">Mini theater</p></li><li data-start=\"1929\" data-end=\"1970\"><p data-start=\"1931\" data-end=\"1970\">Fitness center</p></li><li data-start=\"1973\" data-end=\"2014\"><p data-start=\"1975\" data-end=\"2014\">Tennis court, basketball court, and badminton court</p></li><li data-start=\"2017\" data-end=\"2058\"><p data-start=\"2019\" data-end=\"2058\">Jogging tracks</p></li><li data-start=\"2061\" data-end=\"2102\"><p data-start=\"2063\" data-end=\"2102\">Oxygen parks</p></li><li data-start=\"2105\" data-end=\"2146\"><p data-start=\"2107\" data-end=\"2146\">Community and theme gardens</p></li><li data-start=\"2149\" data-end=\"2190\"><p data-start=\"2151\" data-end=\"2190\">Convenience store and pharmacy</p></li><li data-start=\"2193\" data-end=\"2234\"><p data-start=\"2195\" data-end=\"2234\">Electric vehicle charging stations</p></li><li data-start=\"2237\" data-end=\"2278\"><p data-start=\"2239\" data-end=\"2278\">Outdoor gym</p></li><li data-start=\"2281\" data-end=\"2322\"><p data-start=\"2283\" data-end=\"2322\">Visitor monitoring system</p></li><li data-start=\"2325\" data-end=\"2412\"><p data-start=\"2327\" data-end=\"2412\">Amphitheater and gazebo seating​</p></li></ul></li></ul><hr data-start=\"2414\" data-end=\"2417\" /><h2 data-start=\"2419\" data-end=\"2444\">Navraj The KingsTown</h2><h2 data-start=\"1167\" data-end=\"1192\">Heights</h2><h2 data-start=\"2419\" data-end=\"2444\">- Location Advantages</h2><ul data-start=\"2446\" data-end=\"3196\"><li data-start=\"2446\" data-end=\"2859\"><p data-start=\"2448\" data-end=\"2465\"><strong data-start=\"2448\" data-end=\"2464\">Connectivity</strong>:</p><ul data-start=\"2468\" data-end=\"2859\"><li data-start=\"2468\" data-end=\"2509\"><p data-start=\"2470\" data-end=\"2509\">0.5 km from Dwarka Expressway</p></li><li data-start=\"2512\" data-end=\"2553\"><p data-start=\"2514\" data-end=\"2553\">4.5 km from NH 48</p></li><li data-start=\"2556\" data-end=\"2597\"><p data-start=\"2558\" data-end=\"2597\">6 km from Hero Honda Chowk</p></li><li data-start=\"2600\" data-end=\"2641\"><p data-start=\"2602\" data-end=\"2641\">9 km from Rajiv Chowk</p></li><li data-start=\"2644\" data-end=\"2685\"><p data-start=\"2646\" data-end=\"2685\">15 km from Dwarka and IFFCO Chowk</p></li><li data-start=\"2688\" data-end=\"2729\"><p data-start=\"2690\" data-end=\"2729\">17 km from Cyber City</p></li><li data-start=\"2732\" data-end=\"2859\"><p data-start=\"2734\" data-end=\"2859\">21 km from Indira Gandhi International Airport</p></li></ul></li><li data-start=\"2861\" data-end=\"3196\"><p data-start=\"2863\" data-end=\"2890\"><strong data-start=\"2863\" data-end=\"2889\">Proximity to Key Areas</strong>:</p><ul data-start=\"2893\" data-end=\"3196\"><li data-start=\"2893\" data-end=\"2934\"><p data-start=\"2895\" data-end=\"2934\">Near upcoming Global City</p></li><li data-start=\"2937\" data-end=\"2978\"><p data-start=\"2939\" data-end=\"2978\">Close to major industrial employment centers like Manesar</p></li><li data-start=\"2981\" data-end=\"3022\"><p data-start=\"2983\" data-end=\"3022\">10 minutes away from Dwarka and Ansal Plaza</p></li><li data-start=\"3025\" data-end=\"3066\"><p data-start=\"3027\" data-end=\"3066\">Well-connected to Delhi through Dwarka Expressway</p></li><li data-start=\"3069\" data-end=\"3196\"><p data-start=\"3071\" data-end=\"3196\">10 minutes drive to Hero Honda Chowk ​</p></li></ul></li></ul><hr data-start=\"3198\" data-end=\"3201\" /><h2 data-start=\"3203\" data-end=\"3245\">🏗️ Developer Profile: Navraj Infratech</h2><p data-start=\"3247\" data-end=\"3548\">Navraj Infratech is a prominent real estate developer known for delivering high-quality residential projects in the Delhi NCR region. With a focus on luxury living and customer satisfaction, Navraj Infratech aims to provide modern and spacious homes that cater to the evolving needs of urban dwellers.</p></article>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/navraj-the-kingstown-hights-sector-37d-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/navraj-the-kingstown-hights-sector-37d-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "5 Acres",
      "towers": 5,
      "floors": "G+37"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5077,
    "title": "Signature Global Deluxe DXP",
    "location": "sector 37, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Security",
      "Parking",
      "Kids Play Area",
      "Restaurant"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h1><a href=\"https://dhawanproperties.in/signature-global-double-dxp-sec-37d/\">Signature Global Deluxe DXP </a></h1>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"507\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/e5-1024x507.jpg\" alt=\"Signature Global Deluxe DXP sector 37D\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/e5-1024x507.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/e5-300x149.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/e5-768x381.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/e5.jpg 1110w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<h2 data-start=\"203\" data-end=\"225\"> Project Name: Signature Global Deluxe DXP</h2>Over view of Signature Global DXP <article dir=\"auto\" data-testid=\"conversation-turn-2\" data-scroll-anchor=\"true\"><p data-start=\"0\" data-end=\"126\">Signature Global Deluxe DXP, Gurgaon, is an ultra-luxury residential project developed by Signature Global Developers Pvt. Ltd. Strategically located along the Dwarka Expressway, this high-rise development offers a blend of modern architecture, premium amenities, and excellent connectivity, making it a prime choice for discerning homebuyers and investors</p><hr data-start=\"128\" data-end=\"131\" /><h2 data-start=\"133\" data-end=\"152\">Project Overview</h2><ul data-start=\"154\" data-end=\"778\"><li data-start=\"154\" data-end=\"211\"><p data-start=\"156\" data-end=\"211\"><strong data-start=\"156\" data-end=\"172\">Project Name</strong>: Signature Global Deluxe DXP</p></li><li data-start=\"212\" data-end=\"265\"><p data-start=\"214\" data-end=\"265\"><strong data-start=\"214\" data-end=\"226\">Location</strong>: Sector 37D, Gurgaon</p></li><li data-start=\"266\" data-end=\"320\"><p data-start=\"268\" data-end=\"320\"><strong data-start=\"268\" data-end=\"281\">Developer</strong>: Signature Global Developers Pvt. Ltd.</p></li><li data-start=\"321\" data-end=\"383\"><p data-start=\"323\" data-end=\"383\"><strong data-start=\"323\" data-end=\"344\">RERA Registration of</strong></p><h2 data-start=\"203\" data-end=\"225\">Signature Global Deluxe DXP </h2> <p data-start=\"323\" data-end=\"383\"> RC/REP/HARERA/GGM/783/515/2024/10</p></li><li data-start=\"384\" data-end=\"439\"><p data-start=\"386\" data-end=\"439\"><strong data-start=\"386\" data-end=\"400\">Total Area</strong>: Approximately 16.65 acres</p></li><li data-start=\"440\" data-end=\"501\"><p data-start=\"442\" data-end=\"501\"><strong data-start=\"442\" data-end=\"462\">Number of Towers</strong>: 10 high-rise towers</p></li><li data-start=\"502\" data-end=\"558\"><p data-start=\"504\" data-end=\"558\"><strong data-start=\"504\" data-end=\"519\">Total Units</strong>: Approximately 900 apartments</p></li><li data-start=\"559\" data-end=\"630\"><p data-start=\"561\" data-end=\"630\"><strong data-start=\"561\" data-end=\"589\"> Configurations of</strong></p><h2 data-start=\"203\" data-end=\"225\">Signature Global DXP </h2> <p data-start=\"561\" data-end=\"630\"> 2 BHK, 3 BHK + Utility, 4.5 BHK, and Penthouses</p></li><li data-start=\"631\" data-end=\"778\"><p data-start=\"633\" data-end=\"778\"><strong data-start=\"633\" data-end=\"651\">Starting </strong></p></li></ul><hr data-start=\"780\" data-end=\"783\" /><h2 data-start=\"785\" data-end=\"812\">Apartment Specifications</h2><ul data-start=\"814\" data-end=\"1088\"><li data-start=\"814\" data-end=\"866\"><p data-start=\"816\" data-end=\"866\"><strong data-start=\"816\" data-end=\"825\">2 BHK</strong>: Approximately 2,164 sq. ft.</p></li><li data-start=\"867\" data-end=\"929\"><p data-start=\"869\" data-end=\"929\"><strong data-start=\"869\" data-end=\"888\">3 BHK + Utility</strong>: Approximately 2,469 sq. ft.</p></li><li data-start=\"930\" data-end=\"984\"><p data-start=\"932\" data-end=\"984\"><strong data-start=\"932\" data-end=\"943\">4.5 BHK</strong>: Approximately 3,253 sq. ft.</p></li><li data-start=\"985\" data-end=\"1088\"><p data-start=\"987\" data-end=\"1088\"><strong data-start=\"987\" data-end=\"1001\">Penthouses</strong>: Sizes and </p></li><li data-start=\"985\" data-end=\"1088\"><p data-start=\"987\" data-end=\"1088\">prices available on request</p></li></ul><p data-start=\"1090\" data-end=\"1256\">Each apartment is designed with spacious layouts, en-suite bathrooms, and expansive balconies to ensure ample natural light and ventilation. The interiors feature premium marble flooring, fully loaded modular kitchens, and temperature-controlled VRF air-conditioning systems</p><h2 data-start=\"1263\" data-end=\"1292\">Signatur<a href=\"https://dwello.in/view/signature-global-deluxe-dxp-by-signature-global-pvt-ltd-at-sector-37d_3fe6fccf-9bd9-455d-9d46-5ff20637405f?auth=true&amp;source=google&amp;medium=cpc&amp;position=&amp;device=c&amp;device_model=&amp;bid=&amp;keyword=signature%20global%20deluxe%20dxp&amp;match_type=p&amp;placement=&amp;campaign=19350699808&amp;source_meta=175171710364&amp;targetid=kwd-2268919136340&amp;location=9061681&amp;location_interest=1007765&amp;creative=729238986162&amp;placement_category=&amp;campaign_type=&amp;network=g&amp;gad_source=1&amp;gbraid=0AAAAADK-kP-Aktpe9Egf7S_5Vp3p8ixJK\">e</a> Global Deluxe DXP-Key Signature Global Deluxe DXP-Features and Amenities</h2><ul data-start=\"1294\" data-end=\"2046\"><li data-start=\"1294\" data-end=\"1391\"><p data-start=\"1296\" data-end=\"1391\"><strong data-start=\"1296\" data-end=\"1309\">Clubhouse</strong>: An expansive 80,000 sq. ft. clubhouse equipped with a spa, gym, salon, playrooms, and more .</p></li><li data-start=\"1392\" data-end=\"1494\"><p data-start=\"1394\" data-end=\"1494\"><strong data-start=\"1394\" data-end=\"1412\">Swimming Pools</strong>: Seven swimming pools, including two heated pools .</p></li><li data-start=\"1495\" data-end=\"1591\"><p data-start=\"1497\" data-end=\"1591\"><strong data-start=\"1497\" data-end=\"1509\">Security</strong>: 5-tier security system with 24/7 surveillance and access control measures .</p></li><li data-start=\"1592\" data-end=\"1687\"><p data-start=\"1594\" data-end=\"1687\"><strong data-start=\"1594\" data-end=\"1605\">Parking</strong>: Podium and underground parking with dedicated car washing facilities .</p></li><li data-start=\"1688\" data-end=\"1788\"><p data-start=\"1690\" data-end=\"1788\"><strong data-start=\"1690\" data-end=\"1706\">Green Spaces</strong>: 60% of the project area is dedicated to green spaces, including a Miyawaki forest and multiple waterbodies .</p></li><li data-start=\"1789\" data-end=\"1891\"><p data-start=\"1791\" data-end=\"1891\"><strong data-start=\"1791\" data-end=\"1809\">Smart Features</strong>: Smart controlled access systems, smart door locks, and electric car charging points .</p></li><li data-start=\"1892\" data-end=\"2046\"><p data-start=\"1894\" data-end=\"2046\"><strong data-start=\"1894\" data-end=\"1918\">Additional Amenities</strong>: Barbeque area, basketball court, electronic games room, jogging track, reflexology area, restaurant, yoga and meditation area, café, indoor games, mini theater, squash court, kids play area, co-working space, e-library, skate park, and pet zone .</p></li></ul><h2 data-start=\"2053\" data-end=\"2075\">Signature Global Deluxe DXP-Location Advantages</h2><p data-start=\"2077\" data-end=\"2202\">Sector 37D in Gurgaon is a rapidly developing area with excellent connectivity and infrastructure. The project's strategic location offers several advantages:</p><ul data-start=\"2204\" data-end=\"2914\"><li data-start=\"2204\" data-end=\"2316\"><p data-start=\"2206\" data-end=\"2316\"><strong data-start=\"2206\" data-end=\"2234\">Proximity to Major Roads</strong>: Adjacent to the Dwarka Expressway, with easy access to NH-8, Southern Peripheral Road, and Pataudi Road .</p></li><li data-start=\"2317\" data-end=\"2427\"><p data-start=\"2319\" data-end=\"2427\"><strong data-start=\"2319\" data-end=\"2345\">Nearby Employment Hubs</strong>: Close to Cyber City, Golf Course, Sohna, Manesar, and Kadipur Industrial Area .</p></li><li data-start=\"2428\" data-end=\"2540\"><p data-start=\"2430\" data-end=\"2540\"><strong data-start=\"2430\" data-end=\"2458\">Educational Institutions</strong>: Within a short drive to Euro International School, Suncity School, Green Field School, Narayana E Techno, Alpine Convent School, and Little E Step – Pre-School .</p></li><li data-start=\"2541\" data-end=\"2650\"><p data-start=\"2543\" data-end=\"2650\"><strong data-start=\"2543\" data-end=\"2568\">Healthcare Facilities</strong>: Near Signature Advanced Super Speciality Hospital, Medanta Hospital, SGT Hospital, and Park Hospital .</p></li><li data-start=\"2651\" data-end=\"2765\"><p data-start=\"2653\" data-end=\"2765\"><strong data-start=\"2653\" data-end=\"2683\">Shopping and Entertainment</strong>: Close to South Point Mall, Central Plaza Mall, Ardee Mall, and other retail centers .</p></li><li data-start=\"2766\" data-end=\"2914\"><p data-start=\"2768\" data-end=\"2914\"><strong data-start=\"2768\" data-end=\"2786\">Transportation</strong>: Approximately 20 minutes from HUDA City Centre metro station and 10 minutes from Indira Gandhi International Airport .</p></li></ul><h2 data-start=\"2921\" data-end=\"2944\">Investment Potential</h2><p data-start=\"2946\" data-end=\"3031\">Signature Global Deluxe DXP presents a lucrative investment opportunity due to several factors: <strong data-start=\"3035\" data-end=\"3057\">High ROI Potential</strong>: The project's ultra-luxury amenities, premium specifications, and strategic location contribute to its potential for high returns on investment .</p><ul data-start=\"3033\" data-end=\"3507\"><li data-start=\"3140\" data-end=\"3242\"><p data-start=\"3142\" data-end=\"3242\"><strong data-start=\"3142\" data-end=\"3160\">Growing Demand</strong>: There is a steady increase in demand for luxury residential properties in Gurgaon, driven by the city's growing population, corporate presence, and rising standards of living .</p></li><li data-start=\"3243\" data-end=\"3351\"><p data-start=\"3245\" data-end=\"3351\"><strong data-start=\"3245\" data-end=\"3269\">Developer Reputation</strong>: Signature Global is renowned for its quality construction, timely delivery, and customer satisfaction, enhancing investor confidence .</p></li><li data-start=\"3352\" data-end=\"3507\"><p data-start=\"3354\" data-end=\"3507\"><strong data-start=\"3354\" data-end=\"3379\">Upcoming Developments</strong>: The area surrounding Sector 37D is witnessing rapid infrastructural developments, including upcoming metro lines, commercial hubs, and educational institutes, contributing to property value appreciation</p></li></ul><hr data-start=\"3509\" data-end=\"3512\" /><h2 data-start=\"3514\" data-end=\"3560\">Sustainability and Eco-Friendly Initiatives</h2><p data-start=\"3562\" data-end=\"3728\">The project incorporates eco-friendly features and green initiatives, such as rainwater harvesting systems, energy-efficient lighting, and waste management practices. This commitment not only aligns with global environmental concerns but also contributes to creating a healthier and more sustainable living environment for residents</p><h2 data-start=\"3735\" data-end=\"3748\">Conclusion</h2><p data-start=\"3750\" data-end=\"3777\">Signature Global Deluxe DXP Sec 37D is a luxury project and it gives Value for Money<a href=\"https://www.gurgaon-projects.com/properties/signature-global-deluxe-dxp.php?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=22331801406&amp;utm_term=signature%20global%20deluxe%20dxp&amp;gad_source=1&amp;gbraid=0AAAAACQKYd3RDDsGwKNMEl0zmo9xs9PF5\">.</a></p>   </article>  ",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-deluxe-dxp-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-deluxe-dxp-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-deluxe-dxp-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "65 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5115,
    "title": "BPTP Verti Greens Sector 102-Luxurious Apartments",
    "location": "Sector 102, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Garden",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/bptp-amstoria-verti-greens-sec-102-gurgaon/\">BPTP Amstoria Verti Greens Sector 102-Luxurious Apartments Bang on Dwarka Express</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"427\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-a-perfect-blend-of-luxury-and-convenience-1024x427.jpg\" alt=\"BPTP amstoria Verti Greens sector 102\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-a-perfect-blend-of-luxury-and-convenience-1024x427.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-a-perfect-blend-of-luxury-and-convenience-300x125.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-a-perfect-blend-of-luxury-and-convenience-768x320.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/bptp-amstoria-verti-greens-sector-102-gurugram-a-perfect-blend-of-luxury-and-convenience.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"40\" data-end=\"197\">BPTP Verti Greens, also known as BPTP Amstoria Verti Greens Sector 102, is a luxurious residential project located in Sector 102, Gurugram, along the Dwarka Expressway. The development spans approximately 12 acres and comprises five high-rise towers, each rising up to 45 floors. The project is designed to offer a blend of modern living with sustainable features, including vertical gardens inspired by global architectural landmarks<a href=\"http://vertigreens.in+12The Economic Times+12bptp.com+12vertigreens.in+1vertigreens.co.in+1vertigreens.in\" data-wplink-url-error=\"true\">.</a></p><hr data-start=\"199\" data-end=\"202\" /><h3 data-start=\"204\" data-end=\"227\">BPTP Verti Greens Sector 102- Project Overview</h3><ul data-start=\"229\" data-end=\"654\"><li data-start=\"229\" data-end=\"283\"><p data-start=\"231\" data-end=\"283\"><strong data-start=\"231\" data-end=\"244\">Developer</strong>: BPTP Limited</p></li><li data-start=\"284\" data-end=\"337\"><p data-start=\"286\" data-end=\"337\"><strong data-start=\"286\" data-end=\"298\">Location</strong>: Sector 102, Dwarka Expressway, Gurugram</p></li><li data-start=\"338\" data-end=\"393\"><p data-start=\"340\" data-end=\"393\"><strong data-start=\"340\" data-end=\"354\">Total Area</strong>: 12.05 acres</p></li><li data-start=\"394\" data-end=\"419\"><p data-start=\"396\" data-end=\"419\"><strong data-start=\"396\" data-end=\"416\">Number of Towers</strong>: 5</p></li><li data-start=\"420\" data-end=\"448\"><p data-start=\"422\" data-end=\"448\"><strong data-start=\"422\" data-end=\"442\">Floors per Tower</strong>: G+45</p></li><li data-start=\"449\" data-end=\"505\"><p data-start=\"451\" data-end=\"505\"><strong data-start=\"451\" data-end=\"466\">Total Units</strong>: 885 luxury apartments</p></li><li data-start=\"506\" data-end=\"654\"><hr data-start=\"199\" data-end=\"202\" /><h3 data-start=\"204\" data-end=\"227\">BPTP Amstoria Verti Greens Sector 102-</h3><p data-start=\"508\" data-end=\"654\"><strong data-start=\"508\" data-end=\"529\">RERA Registration</strong>: GGM/910/642/2025/<a href=\"http://The Economic Timesvertigreens.co.in+2bptp.com+2bptp-projects.com+2\" data-wplink-url-error=\"true\">1</a></p></li></ul><hr data-start=\"656\" data-end=\"659\" /><hr data-start=\"199\" data-end=\"202\" /><h3 data-start=\"204\" data-end=\"227\">BPTP Amstoria Verti Greens Sector 102-</h3><h3 data-start=\"661\" data-end=\"703\">Apartment Configurations</h3><ul data-start=\"705\" data-end=\"929\"><li data-start=\"705\" data-end=\"767\"><p data-start=\"707\" data-end=\"767\"><strong data-start=\"707\" data-end=\"726\">2 BHK + Utility</strong>: 1,600 sq. ft.</p></li><li data-start=\"768\" data-end=\"830\"><p data-start=\"770\" data-end=\"830\"><strong data-start=\"770\" data-end=\"789\">3 BHK + Utility</strong>: 2,400 sq. ft.</p></li><li data-start=\"831\" data-end=\"929\"><p data-start=\"833\" data-end=\"929\"><strong data-start=\"833\" data-end=\"842\">4 BHK</strong>: 3,200 sq. ft. (upcoming<a href=\"http://bptpproject.com+6vertigreens.co.in+6bptpvertigreens.com+6\">)</a></p></li></ul><h3 data-start=\"1436\" data-end=\"1466\">🌿 Design &amp; Sustainability</h3><p data-start=\"1468\" data-end=\"1553\">The project emphasizes sustainable living through:</p><ul data-start=\"1555\" data-end=\"1817\"><li data-start=\"1555\" data-end=\"1618\"><p data-start=\"1557\" data-end=\"1618\"><strong data-start=\"1557\" data-end=\"1577\">Vertical Gardens</strong>: Inspired by global structures like Milan’s Bosco Verticale, the towers feature green spaces at various levels.</p></li><li data-start=\"1619\" data-end=\"1694\"><p data-start=\"1621\" data-end=\"1694\"><strong data-start=\"1621\" data-end=\"1653\">Green Building Certification</strong>: Designed to meet green building standards, promoting energy efficiency and environmental responsibility.</p></li><li data-start=\"1695\" data-end=\"1817\"><p data-start=\"1697\" data-end=\"1817\"><strong data-start=\"1697\" data-end=\"1730\">Mivan Construction Technology</strong>: Ensures high-quality, durable structures<a href=\"http://vertigreens.in\">.</a></p></li></ul><hr data-start=\"1819\" data-end=\"1822\" /><hr data-start=\"199\" data-end=\"202\" /><h3 data-start=\"204\" data-end=\"227\">BPTP Amstoria Verti Greens Sector 102-</h3><h3 data-start=\"1824\" data-end=\"1841\">Amenities</h3><p data-start=\"1843\" data-end=\"1928\">BPTP Verti Greens offers a range of world-class amenities:</p><ul data-start=\"1930\" data-end=\"2634\"><li data-start=\"1930\" data-end=\"1986\"><p data-start=\"1932\" data-end=\"1986\"><strong data-start=\"1932\" data-end=\"1945\">Clubhouse</strong>: 155,000 sq. ft. spread across three clubhouses.</p></li><li data-start=\"1987\" data-end=\"2047\"><p data-start=\"1989\" data-end=\"2047\"><strong data-start=\"1989\" data-end=\"2006\">Swimming Pool</strong>: All-weather pool for year-round enjoyment.</p></li><li data-start=\"2048\" data-end=\"2112\"><p data-start=\"2050\" data-end=\"2112\"><strong data-start=\"2050\" data-end=\"2071\">Sports Facilities</strong>: Tennis courts, indoor badminton court, table tennis, and a gaming room.</p></li><li data-start=\"2113\" data-end=\"2178\"><p data-start=\"2115\" data-end=\"2178\"><strong data-start=\"2115\" data-end=\"2137\">Wellness &amp; Leisure</strong>: Spa, mini theatre, elegant dining, and a fitness center.</p></li><li data-start=\"2179\" data-end=\"2246\"><p data-start=\"2181\" data-end=\"2246\"><strong data-start=\"2181\" data-end=\"2205\">Children’s Play Area</strong>: Vibrant spaces for kids.</p></li><li data-start=\"2247\" data-end=\"2312\"><p data-start=\"2249\" data-end=\"2312\"><strong data-start=\"2249\" data-end=\"2271\">Concierge Services</strong>: Assistance with daily needs.</p></li><li data-start=\"2313\" data-end=\"2372\"><p data-start=\"2315\" data-end=\"2372\"><strong data-start=\"2315\" data-end=\"2331\">Power Backup</strong>: 100% backup for uninterrupted living.</p></li><li data-start=\"2373\" data-end=\"2440\"><p data-start=\"2375\" data-end=\"2440\"><strong data-start=\"2375\" data-end=\"2399\">Rainwater Harvesting</strong>: Sustainable water management.</p></li><li data-start=\"2441\" data-end=\"2509\"><p data-start=\"2443\" data-end=\"2509\"><strong data-start=\"2443\" data-end=\"2468\">Green-rated Buildings</strong>: Environmentally friendly construction.</p></li><li data-start=\"2510\" data-end=\"2634\"><p data-start=\"2512\" data-end=\"2634\"><strong data-start=\"2512\" data-end=\"2547\">High-Quality Mivan Construction</strong>: Ensures durability and quality.</p></li></ul><hr data-start=\"2677\" data-end=\"2680\" /><h3 data-start=\"2682\" data-end=\"2712\">BPTP Verti Greens Sector 102-Location &amp; Connectivity</h3><p data-start=\"2714\" data-end=\"2799\">Strategically located on the Dwarka Expressway, BPTP Verti Greens offers:</p><ul data-start=\"2801\" data-end=\"3213\"><li data-start=\"2801\" data-end=\"2861\"><p data-start=\"2803\" data-end=\"2861\"><strong data-start=\"2803\" data-end=\"2820\">Direct Access</strong>: To Dwarka Expressway, NH-8, and nearby sectors.</p></li><li data-start=\"2862\" data-end=\"3098\"><p data-start=\"2864\" data-end=\"2878\"><strong data-start=\"2864\" data-end=\"2877\">Proximity</strong>:</p><ul data-start=\"2881\" data-end=\"3098\"><li data-start=\"2881\" data-end=\"2922\"><p data-start=\"2883\" data-end=\"2922\">IGI Airport: 10 minutes</p></li><li data-start=\"2925\" data-end=\"2966\"><p data-start=\"2927\" data-end=\"2966\">Cyber Hub: 10-15 minutes</p></li><li data-start=\"2969\" data-end=\"3010\"><p data-start=\"2971\" data-end=\"3010\">Ambience Mall: 10-15 minutes</p></li><li data-start=\"3013\" data-end=\"3054\"><p data-start=\"3015\" data-end=\"3054\">Reputed schools and hospitals: 5-10 minutes</p></li><li data-start=\"3057\" data-end=\"3098\"><p data-start=\"3059\" data-end=\"3098\">Rapid Metro and Railway Station: 8 minutes</p></li></ul></li><li data-start=\"3099\" data-end=\"3213\"><p data-start=\"3101\" data-end=\"3213\"><strong data-start=\"3101\" data-end=\"3126\">Seamless Connectivity</strong>: Easy access to Delhi, Noida, Faridabad, and Sohna.</p></li></ul>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/bptp-verti-greens-sector-102-luxurious-apartments-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/bptp-verti-greens-sector-102-luxurious-apartments-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/bptp-verti-greens-sector-102-luxurious-apartments-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "12 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5153,
    "title": "Krisumi Waterfall Residences Sector 36A Luxurious",
    "location": "Sector 36, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Restaurant"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/krisumi-waterfall-residences-sector-36a-top-20/\">Krisumi Waterfall Residences Sector 36A</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"512\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1-1024x512.png\" alt=\"Krisumi Waterfall Residences SECTOR 36A\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1-1024x512.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1-300x150.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1-768x384.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/Clubhousedropoff-1.png 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>Krisumi Waterfall Residences: An Indo-Japanese Luxury Living Experience in Gurgaon</p><p>Krisumi Waterfall Residences is an exclusive luxury residential development situated in Sector 36A, Gurgaon. This unique project is a collaboration between two renowned entities: Sumitomo Corporation, a prestigious Japanese multinational, and Krishna Group, a well-established Indian real estate developer. Krisumi Waterfall Residences is set to offer a one-of-a-kind living experience that seamlessly blends Japanese architectural aesthetics with modern luxury. It promises a lifestyle focused on simplicity, nature, and tranquility, making it a prime choice for those seeking peace, luxury, and an elevated standard of living.</p><p>The project is part of a larger 65-acre township, Krisumi City, which will eventually house approximately 5,000 apartments across multiple phases. Krisumi Waterfall Residences, the first phase of this ambitious development, spans 5.4 to 6 acres and will consist of multiple high-rise towers. The residences are designed with an emphasis on spacious living areas, high-end amenities, and a prime location, ensuring that residents enjoy comfort, convenience, and luxury in one of the most sought-after parts of Gurgaon.</p>\t\t\n\t\t\t\t\t<h2>Project Overview</h2>\t\t\t\t\n\t\t<p>Krisumi Waterfall Residences offers a unique Indo-Japanese fusion that reflects not only the aesthetics but also the cultural values of both nations. The first phase of the development is designed to provide an exclusive and tranquil living experience for discerning buyers. The residences feature multiple towers with a variety of apartment configurations, and the architecture takes direct inspiration from Japanese principles of design—such as simplicity, nature, and harmony—while integrating modern features suited to the lifestyle of today’s urban dwellers.</p><p><b>Towers and Units</b></p><p>The first phase of Krisumi Waterfall Residences will feature three towers with varying heights: G+21, G+27, and G+34 floors. These towers are designed to maximize natural light and offer breathtaking views of the surrounding landscapes. Each tower aims to create a peaceful and serene living environment for the residents, fostering a sense of well-being. In total, the first phase of the project will offer between 433 to 450 exclusive apartments.</p><p>Krisumi Waterfall Residences offers a range of apartment configurations to cater to different needs and family sizes. Available configurations include:</p><ul><li><b>2 BHK</b>: Ideal for smaller families or individuals, these units provide ample space and luxury.</li><li><b>3 BHK</b>: For larger families, the 3 BHK apartments offer comfortable living with an emphasis on spaciousness.</li><li><b>3 BHK with Servant Room (3+S)</b>: These units are perfect for those who require additional space for household help or an extra room.</li></ul><p>••<b>Penthouses</b>: These luxurious penthouses range from 3,800 sq. ft. to 6,569 sq. ft. and offer the ultimate in exclusivity, with some featuring private pools for ultimate relaxation.</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"500\" height=\"350\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/8329222283ldk.jpg\" alt=\"krisumi\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/8329222283ldk.jpg 500w, https://dhawanproperties.in/wp-content/uploads/2025/04/8329222283ldk-300x210.jpg 300w\" sizes=\"(max-width: 500px) 100vw, 500px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"500\" height=\"350\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residences-floorplan-1.jpg\" alt=\"krisumi\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residences-floorplan-1.jpg 500w, https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residences-floorplan-1-300x210.jpg 300w\" sizes=\"(max-width: 500px) 100vw, 500px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p><b>Sizes and Prices</b></p><p>The apartments at Krisumi Waterfall Residences are designed to offer generous living spaces. The sizes range as follows:</p><ul><li><b>2 BHK</b> units range from <b>1,448 sq. ft.</b>.</li><li><b>3 BHK</b> units range from <b>1,800 sq. ft. to 2,538 sq. ft.</b>, providing more room for growing families.</li><li>The <b>penthouses</b> are especially expansive, with sizes starting from <b>3,800 sq. ft.</b> and going up to <b>6,569 sq. ft.</b>, offering the highest level of luxury and exclusivity.</li></ul><p>In terms of pricing, the project caters to the luxury segment of the market:</p><ul><li><b>2 BHK units</b> are priced around ₹2.00 Crores.</li><li><b>3 BHK units</b> range from ₹4.5 Crores to ₹6.5 Crores, depending on the size and configuration.</li><li>The <b>penthouses</b> are priced higher, with starting prices around ₹7.49 Crores, and the most exclusive units costing up to ₹9.85 Crores.</li></ul><p>These prices reflect the high-end nature of the development and its location in Gurgaon, one of the most prominent and fast-growing real estate markets in India.</p><p><b>Possession Date</b></p><p>The first phase of Krisumi Waterfall Residences is expected to be ready for possession between <b>December 2024 and early 2025</b>. The development team is committed to ensuring that the project meets the highest standards of quality, sustainability, and luxury. Buyers are encouraged to stay in contact with the sales team for the latest updates on possession dates and other project-related information.</p><p><b>RERA Registration</b></p><p>To ensure transparency and adhere to industry regulations, Krisumi Waterfall Residences is RERA-registered under the <b>Haryana Real Estate Regulatory Authority</b>. The registration number for the project is <b>GGM/271/2018/03</b>, dated May 8, 2018. Prospective buyers can verify the project details and status through the official <b>Haryana RERA</b> website.</p><p><b>Key Features and Amenities</b></p><p>Krisumi Waterfall Residences has been designed to offer a holistic living experience, combining modern luxury with elements of nature and serenity. The project offers a range of world-class amenities, ensuring that residents can enjoy comfort, leisure, and well-being without leaving the premises. Some of the key features and amenities include:</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/common-img6-highres-1024x576.png\" alt=\"krisumi\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/common-img6-highres-1024x576.png 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/common-img6-highres-300x169.png 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/common-img6-highres-768x432.png 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/common-img6-highres.png 1440w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p><b>Clubhouse and Indoor Amenities</b></p><p>The centerpiece of the development is the expansive <b>36,000 sq. ft. clubhouse</b>, known as <b>“Sudare”</b>. This clubhouse is a focal point for residents to socialize, relax, and engage in recreational activities. Key indoor amenities within the clubhouse include:</p><ul><li>A <b>fully equipped gymnasium</b> with state-of-the-art fitness equipment.</li><li>A <b>restaurant and bar lounge</b> offering a variety of dining and entertainment options.</li><li>A <b>spa and salon</b> for residents seeking rejuvenation and relaxation.</li><li>A <b>mini cinema theatre</b> for private screenings and family movie nights.</li><li><b>Indoor sports facilities</b>, including badminton and squash courts.</li><li>A <b>banquet hall</b> for hosting events, parties, and social gatherings.</li><li><b>Lounge areas</b> for informal meetings and relaxation.</li></ul><p><b>Outdoor Amenities</b></p><p>The outdoor amenities at Krisumi Waterfall Residences are equally impressive, with a design rooted in Japanese principles of landscaping, which emphasizes simplicity, nature, and tranquility. Some of the key outdoor amenities include:</p><ul><li>An <b>aesthetically designed swimming pool</b>, adding to the project's serene atmosphere.</li><li><b>Japanese-inspired landscaping</b>, including water features, <b>koi ponds</b>, and <b>serene stroll gardens</b> (Kaiyussei), which evoke peace and reflection.</li><li><b>Children’s play areas</b> designed to be safe and secure, encouraging outdoor play and socializing.</li><li><b>Sports facilities</b> such as a <b>tennis court</b> and a <b>skating rink</b>.</li><li><b>Amphitheaters</b> and <b>party lawns</b> for social events and gatherings.</li><li><b>Designated spaces</b> for relaxation and social interaction amidst the greenery.</li></ul><p><b>Security and Convenience</b></p><p>Krisumi Waterfall Residences places a strong emphasis on the safety and convenience of its residents. The development features a multi-level security system, including <b>CCTV surveillance</b>, <b>access control systems</b>, and <b>security personnel</b> to ensure peace of mind. Additionally, the project offers:</p><ul><li><b>100% power backup</b> to ensure uninterrupted service.</li><li><b>Well-appointed service elevators</b> for easy movement throughout the complex.</li><li><b>Piped gas systems</b>, a <b>grocery shop</b> within the premises, and other convenience features to make daily living more comfortable.</li></ul><p><b>Sustainability</b></p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"800\" height=\"534\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Whiteland-1.webp\" alt=\"krisumi\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Whiteland-1.webp 800w, https://dhawanproperties.in/wp-content/uploads/2025/04/Whiteland-1-300x200.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Whiteland-1-768x513.webp 768w\" sizes=\"(max-width: 800px) 100vw, 800px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>In line with its commitment to eco-friendly living, Krisumi Waterfall Residences has been awarded a <b>4-star GRIHA rating</b>, reflecting its focus on sustainable design and construction. The project integrates energy-efficient features such as:</p><ul><li><b>Solar panels</b> to reduce dependence on external power sources.</li><li><b>Rainwater harvesting systems</b> to conserve water and promote sustainability.</li><li><b>Water-saving technologies</b> to minimize waste and ensure eco-friendly living.</li></ul><p>These features ensure a minimal environmental footprint while maintaining a high standard of living. The commitment to sustainability aligns with the core values of Japanese design philosophy, where harmony with nature is central to shaping the environment.</p><p><b>Japanese Design Philosophy</b></p><p>Krisumi Waterfall Residences draws heavily from Japanese design principles, incorporating various elements to create a serene, peaceful, and harmonious living environment. Key principles include:</p><ol><li><b>Taki (Waterfall)</b>: Water is central to the design, symbolizing purity and tranquility. It features prominently in both the exterior design and landscaping.</li><li><b>Kekkai (Transition)</b>: The design ensures a seamless flow between indoor and outdoor spaces, creating a harmonious transition between the two.</li><li><b>Hikari, Kage (Light and Shadow)</b>: The interplay of light and shadow enhances the ambiance, making the living spaces feel dynamic and connected to nature.</li><li><b>Engawa (Connection)</b>: Large windows and open spaces emphasize the connection between the interior and the natural landscape outside.</li><li><b>Tsuboniwa (Small Garden)</b>: Minimalist garden designs invite peaceful reflection and relaxation.</li><li><b>Kaiyussei (Stroll Garden)</b>: A special feature of the development, this garden invites residents to take tranquil walks and meditate in nature.</li></ol><p><b>Location Advantages</b></p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"684\" height=\"450\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residency-location-map.jpg\" alt=\"\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residency-location-map.jpg 684w, https://dhawanproperties.in/wp-content/uploads/2025/04/krisumi-waterfall-residency-location-map-300x197.jpg 300w\" sizes=\"(max-width: 684px) 100vw, 684px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>Krisumi Waterfall Residences enjoys a prime location in Sector 36A, Gurgaon, offering unmatched connectivity and access to essential services. Some of the location advantages include:</p><ul><li><b>Connectivity</b>: The project is well-connected to <b>Delhi</b>, <b>Gurgaon</b>, and the <b>Indira Gandhi International Airport (IGI)</b>, just a 10-minute drive away. It is also close to <b>NH-8</b> and other major highways.</li><li><b>Proximity to Key Areas</b>: The development is near <b>Cyber Hub 2</b>, a major commercial hub, and the upcoming <b>Inter-State Bus Terminal (ISBT)</b>.</li><li><b>Educational Institutions</b>: Reputed schools such as <b>Delhi Public School</b> and <b>Rishi Public School</b> are nearby, making it ideal for families.</li><li><b>Healthcare Facilities</b>: Medical care is easily accessible with hospitals such as <b>Shree Shyam Hospital</b> and <b>Prime Hospital</b> in close proximity.</li></ul><p><b>Living Experience</b></p><p>Krisumi Waterfall Residences promises an exceptional living experience that blends modern luxury with serene elegance. The tranquil surroundings, combined with the project's focus on nature and spaciousness, make it the ideal place for those seeking peace and luxury. The development’s extensive amenities and commitment to sustainability offer a lifestyle that blends the best of both worlds—Indian and Japanese cultures.</p><p>In conclusion, Krisumi Waterfall Residences represents a groundbreaking residential development that redefines luxury living. With its seamless integration of Japanese architectural elements, premium amenities, and strategic location, this project offers a sophisticated and harmonious living experience. It stands as a beacon of luxury and serenity, catering to those who value comfort, beauty, and sustainability.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "2BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "2BHK • Available",
          "downloadUrl": "/floor-plans/krisumi-waterfall-residences-sector-36a-luxurious-2bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/krisumi-waterfall-residences-sector-36a-luxurious-3bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "6 Acres",
      "floors": "G+34",
      "possession": "2024"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5198,
    "title": "Signature Global Twin Tower DXP sector 84",
    "location": "Sector 84, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/signature-global-twin-tower-dxp/\">Signature Global Twin Tower DXP</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"600\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg\" alt=\"Signature Global Twin Tower DXP\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/Signature-Global-Twin-Tower-DXP-luxury-home1.jpg 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/Signature-Global-Twin-Tower-DXP-luxury-home1-300x180.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/Signature-Global-Twin-Tower-DXP-luxury-home1-768x461.jpg 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"102\" data-end=\"770\">Signature Global Twin Tower DXP, located in Sector 84, Gurugram, is an iconic luxury residential project that aims to redefine premium living in the National Capital Region (NCR). Situated along the rapidly developing Dwarka Expressway, this project offers a blend of sophistication, modern design, and world-class amenities. Signature Global, known for its innovative approach to real estate, has designed this project to cater to the most discerning tastes, offering a range of 3 BHK, 3.5 BHK, and 4.5 BHK apartments, along with luxurious penthouses. This residential complex is not only an architectural masterpiece but also a lifestyle statement for its residents<a href=\"https://www.signatureglobal.in/twin-tower-dxp.php\">.</a></p><hr data-start=\"772\" data-end=\"775\" /><p data-start=\"777\" data-end=\"801\"><strong data-start=\"781\" data-end=\"801\">Project Overview</strong></p><ul data-start=\"803\" data-end=\"1348\"><li data-start=\"803\" data-end=\"836\"><p data-start=\"805\" data-end=\"836\"><strong data-start=\"805\" data-end=\"819\">Developer:</strong> Signature Global</p></li><li data-start=\"837\" data-end=\"891\"><p data-start=\"839\" data-end=\"891\"><strong data-start=\"839\" data-end=\"852\">Location:</strong> Sector 84, Dwarka Expressway, Gurugram</p></li><li data-start=\"892\" data-end=\"917\"><p data-start=\"894\" data-end=\"917\"><strong data-start=\"894\" data-end=\"909\">Total Area:</strong> 5 Acres</p></li><li data-start=\"918\" data-end=\"967\"><p data-start=\"920\" data-end=\"967\"><strong data-start=\"920\" data-end=\"931\">Towers:</strong> 2 high-rise towers (45 floors each)</p></li><li data-start=\"968\" data-end=\"1024\"><p data-start=\"970\" data-end=\"1024\"><strong data-start=\"970\" data-end=\"986\">Total Units:</strong> 600+ luxury apartments and penthouses</p></li><li data-start=\"1025\" data-end=\"1194\"><p data-start=\"1027\" data-end=\"1052\"><strong data-start=\"1027\" data-end=\"1052\">Unit Types and Sizes:</strong></p><ul data-start=\"1055\" data-end=\"1194\"><li data-start=\"1055\" data-end=\"1082\"><p data-start=\"1057\" data-end=\"1082\"><strong data-start=\"1057\" data-end=\"1067\">3 BHK:</strong> ~2,650 sq. ft.</p></li><li data-start=\"1085\" data-end=\"1114\"><p data-start=\"1087\" data-end=\"1114\"><strong data-start=\"1087\" data-end=\"1099\">3.5 BHK:</strong> ~2,980 sq. ft.</p></li><li data-start=\"1117\" data-end=\"1146\"><p data-start=\"1119\" data-end=\"1146\"><strong data-start=\"1119\" data-end=\"1131\">4.5 BHK:</strong> ~3,785 sq. ft.</p></li><li data-start=\"1149\" data-end=\"1194\"><p data-start=\"1151\" data-end=\"1194\"><strong data-start=\"1151\" data-end=\"1166\">Penthouses:</strong> Custom sizes (Upon request)</p></li></ul><ul data-start=\"1219\" data-end=\"1289\"><li data-start=\"1267\" data-end=\"1289\"><p data-start=\"1269\" data-end=\"1289\"> </p></li></ul></li><li data-start=\"1290\" data-end=\"1348\"><p data-start=\"1292\" data-end=\"1348\"><strong data-start=\"1292\" data-end=\"1314\">RERA Registration:</strong> RC/REP/HARERA/GGM/866/598/2024/93</p></li></ul><hr data-start=\"1350\" data-end=\"1353\" /><p data-start=\"1355\" data-end=\"1396\"><strong data-start=\"1359\" data-end=\"1396\">Architectural Design and Features</strong></p><p data-start=\"1398\" data-end=\"1688\">Signature Global Twin Tower DXP stands as a remarkable example of contemporary architectural brilliance. The design principles prioritize spaciousness, natural light, and modern aesthetics. The project’s layout incorporates biophilic design elements, ensuring a healthy, serene environment.</p><ul data-start=\"1690\" data-end=\"2590\"><li data-start=\"1690\" data-end=\"1907\"><p data-start=\"1692\" data-end=\"1907\"><strong data-start=\"1692\" data-end=\"1719\">Grand Entrance Lobbies:</strong> The entrance to the towers features triple-height lobbies, designed to provide a sense of grandeur. These lobbies set the tone for the luxury experience that awaits inside the residences.</p></li><li data-start=\"1908\" data-end=\"2048\"><p data-start=\"1910\" data-end=\"2048\"><strong data-start=\"1910\" data-end=\"1932\">Private Elevators:</strong> Each tower offers private elevators for select apartments, providing residents with an exclusive living experience.</p></li><li data-start=\"2049\" data-end=\"2208\"><p data-start=\"2051\" data-end=\"2208\"><strong data-start=\"2051\" data-end=\"2078\">Floor-to-Floor Heights:</strong> The towers have a generous floor-to-floor height of approximately 12 feet, adding to the sense of spaciousness in each apartment.</p></li><li data-start=\"2209\" data-end=\"2399\"><p data-start=\"2211\" data-end=\"2399\"><strong data-start=\"2211\" data-end=\"2235\">Expansive Balconies:</strong> Every apartment comes with large balconies offering panoramic views of the cityscape and the surrounding green landscapes, enhancing the overall living experience.</p></li><li data-start=\"2400\" data-end=\"2590\"><p data-start=\"2402\" data-end=\"2590\"><strong data-start=\"2402\" data-end=\"2427\">Sustainability Focus:</strong> The project incorporates eco-friendly materials and technologies, including rainwater harvesting systems, energy-efficient lighting, and waste management systems.</p></li></ul><hr data-start=\"2592\" data-end=\"2595\" /><p data-start=\"2597\" data-end=\"2639\"><strong data-start=\"2601\" data-end=\"2639\">Unit Layouts and Interior Features</strong></p><p data-start=\"2641\" data-end=\"2899\">Each unit at Signature Global Twin Tower DXP is meticulously planned to offer luxury, comfort, and functionality. The apartments offer expansive living spaces with large rooms, wide windows, and open layouts that allow abundant natural light and ventilation.</p><ul data-start=\"2901\" data-end=\"3843\"><li data-start=\"2901\" data-end=\"3103\"><p data-start=\"2903\" data-end=\"3103\"><strong data-start=\"2903\" data-end=\"2931\">Living and Dining Areas:</strong> The open-plan living and dining spaces are designed to promote socializing and family time. Large windows ensure the spaces are bathed in natural light throughout the day.</p></li><li data-start=\"3104\" data-end=\"3275\"><p data-start=\"3106\" data-end=\"3275\"><strong data-start=\"3106\" data-end=\"3118\">Kitchen:</strong> The modular kitchen comes equipped with the latest appliances, premium countertops, and ample storage, making it both functional and aesthetically pleasing.</p></li><li data-start=\"3276\" data-end=\"3464\"><p data-start=\"3278\" data-end=\"3464\"><strong data-start=\"3278\" data-end=\"3291\">Bedrooms:</strong> The bedrooms are spacious with high ceilings, designed to be serene retreats. The master bedroom comes with an en-suite bathroom, and there are options for walk-in closets.</p></li><li data-start=\"3465\" data-end=\"3657\"><p data-start=\"3467\" data-end=\"3657\"><strong data-start=\"3467\" data-end=\"3481\">Bathrooms:</strong> The bathrooms feature high-end fittings, imported sanitary ware, and are designed to provide a spa-like experience with luxurious features like rain showers and premium tiles.</p></li><li data-start=\"3658\" data-end=\"3843\"><p data-start=\"3660\" data-end=\"3843\"><strong data-start=\"3660\" data-end=\"3684\">Smart Home Features:</strong> Every apartment is equipped with smart home automation, allowing residents to control lighting, HVAC systems, and appliances via their smartphones or tablets.</p></li></ul><hr data-start=\"3845\" data-end=\"3848\" /><p data-start=\"3850\" data-end=\"3882\"><strong data-start=\"3854\" data-end=\"3882\">Amenities and Facilities</strong></p><p data-start=\"3884\" data-end=\"4178\">Signature Global Twin Tower DXP boasts a wide range of world-class amenities that make it more than just a place to live—it’s a lifestyle experience. The project includes everything from fitness and wellness facilities to recreational spaces and social zones. Some of the key amenities include:</p><ul data-start=\"4180\" data-end=\"5506\"><li data-start=\"4180\" data-end=\"4377\"><p data-start=\"4182\" data-end=\"4377\"><strong data-start=\"4182\" data-end=\"4216\">Clubhouse (The Gem Clubhouse):</strong> A vast 20,000+ sq. ft. clubhouse featuring a fully equipped gym, a yoga and meditation center, a spa, and a multi-purpose hall for social events and gatherings.</p></li><li data-start=\"4378\" data-end=\"4552\"><p data-start=\"4380\" data-end=\"4552\"><strong data-start=\"4380\" data-end=\"4399\">Swimming Pools:</strong> The project includes multiple swimming pools, including a heated lap pool and a leisure pool, ensuring that residents can enjoy swimming all year round.</p></li><li data-start=\"4553\" data-end=\"4746\"><p data-start=\"4555\" data-end=\"4577\"><strong data-start=\"4555\" data-end=\"4577\">Sports Facilities:</strong></p><ul data-start=\"4580\" data-end=\"4746\"><li data-start=\"4580\" data-end=\"4664\"><p data-start=\"4582\" data-end=\"4664\">Badminton courts, squash courts, and a multi-purpose sports hall for indoor games.</p></li><li data-start=\"4667\" data-end=\"4746\"><p data-start=\"4669\" data-end=\"4746\">A tennis court and a jogging track are also available for sports enthusiasts.</p></li></ul></li><li data-start=\"4747\" data-end=\"4878\"><p data-start=\"4749\" data-end=\"4878\"><strong data-start=\"4749\" data-end=\"4774\">Children’s Play Area:</strong> A well-designed, safe play area for children, ensuring they have plenty of space to play and socialize.</p></li><li data-start=\"4879\" data-end=\"5065\"><p data-start=\"4881\" data-end=\"5065\"><strong data-start=\"4881\" data-end=\"4921\">Landscaped Gardens and Green Spaces:</strong> The development features lush green parks, manicured gardens, and walkways, allowing residents to enjoy the outdoors in a peaceful environment.</p></li><li data-start=\"5066\" data-end=\"5192\"><p data-start=\"5068\" data-end=\"5192\"><strong data-start=\"5068\" data-end=\"5093\">High-Speed Elevators:</strong> Multiple high-speed elevators ensure quick and easy access to all floors, minimizing waiting time.</p></li><li data-start=\"5193\" data-end=\"5405\"><p data-start=\"5195\" data-end=\"5405\"><strong data-start=\"5195\" data-end=\"5222\">5-Tier Security System:</strong> The project is equipped with a robust security system that includes surveillance cameras, 24x7 security guards, and advanced access control systems to ensure the safety of residents.</p></li><li data-start=\"5406\" data-end=\"5506\"><p data-start=\"5408\" data-end=\"5506\"><strong data-start=\"5408\" data-end=\"5425\">Power Backup:</strong> The towers are equipped with 100% power backup to ensure uninterrupted services.</p></li></ul><hr data-start=\"5508\" data-end=\"5511\" /><p data-start=\"5513\" data-end=\"5546\"><strong data-start=\"5517\" data-end=\"5546\">Location and Connectivity</strong></p><p data-start=\"5548\" data-end=\"5764\">Sector 84, where Signature Global Twin Tower DXP is located, is one of the most prime areas in Gurugram. The strategic location offers excellent connectivity to major parts of Gurugram, Delhi, and other NCR regions.</p><ul data-start=\"5766\" data-end=\"6958\"><li data-start=\"5766\" data-end=\"6049\"><p data-start=\"5768\" data-end=\"6049\"><strong data-start=\"5768\" data-end=\"5790\">Dwarka Expressway:</strong> The project is located along the Dwarka Expressway, providing seamless access to both Gurugram and Delhi. This expressway is one of the most prominent corridors connecting Delhi to Gurugram, offering excellent connectivity to the IGI Airport and South Delhi.</p></li><li data-start=\"6050\" data-end=\"6262\"><p data-start=\"6052\" data-end=\"6262\"><strong data-start=\"6052\" data-end=\"6074\">Proximity to NH-8:</strong> The project is just a few minutes away from NH-8, which connects Delhi to Jaipur and other parts of Rajasthan. This enhances accessibility to important business hubs and commercial areas.</p></li><li data-start=\"6263\" data-end=\"6425\"><p data-start=\"6265\" data-end=\"6425\"><strong data-start=\"6265\" data-end=\"6292\">Proposed Metro Station:</strong> A metro station near the project will further improve connectivity, providing residents with easy access to the Delhi Metro network.</p></li><li data-start=\"6426\" data-end=\"6597\"><p data-start=\"6428\" data-end=\"6597\"><strong data-start=\"6428\" data-end=\"6440\">Schools:</strong> The area has several prestigious educational institutions like DPS, Euro International School, and Suncity School, making it an ideal location for families.</p></li><li data-start=\"6598\" data-end=\"6769\"><p data-start=\"6600\" data-end=\"6769\"><strong data-start=\"6600\" data-end=\"6626\">Healthcare Facilities:</strong> The project is located close to well-known hospitals such as Medanta, Artemis, and Fortis, ensuring access to world-class healthcare services.</p></li><li data-start=\"6770\" data-end=\"6958\"><p data-start=\"6772\" data-end=\"6958\"><strong data-start=\"6772\" data-end=\"6803\">Shopping and Entertainment:</strong> Malls like South Point Mall, Omaxe Mall, and Ardee Mall are located within a short drive, offering a range of shopping, dining, and entertainment options.</p></li></ul><hr data-start=\"6960\" data-end=\"6963\" /><p data-start=\"6965\" data-end=\"6993\"><strong data-start=\"6969\" data-end=\"6993\">Investment Potential</strong></p><p data-start=\"6995\" data-end=\"7189\">Signature Global Twin Tower DXP represents a solid investment opportunity. The location, design, amenities, and overall luxury make this project a prime choice for both homebuyers and investors.</p><ul data-start=\"7191\" data-end=\"7832\"><li data-start=\"7191\" data-end=\"7433\"><p data-start=\"7193\" data-end=\"7433\"><strong data-start=\"7193\" data-end=\"7231\">Growing Demand for Luxury Housing:</strong> The demand for luxury apartments in Gurugram has been steadily increasing due to the city’s rapid development and the influx of professionals. The project is positioned to cater to this growing demand.</p></li><li data-start=\"7434\" data-end=\"7643\"><p data-start=\"7436\" data-end=\"7643\"><strong data-start=\"7436\" data-end=\"7468\">High Rental Yield Potential:</strong> With its premium features and prime location, this project is expected to yield high rental returns, particularly given the demand for high-end rental properties in the area.</p></li><li data-start=\"7644\" data-end=\"7832\"><p data-start=\"7646\" data-end=\"7832\"><strong data-start=\"7646\" data-end=\"7681\">Reputation of Signature Global:</strong> Signature Global has built a strong reputation for delivering quality projects on time. This track record adds to the project’s credibility and value.</p></li></ul><hr data-start=\"7834\" data-end=\"7837\" /><p data-start=\"7839\" data-end=\"7857\"><strong data-start=\"7843\" data-end=\"7857\">Conclusion</strong></p><p data-start=\"7859\" data-end=\"8351\">Signature Global Twin Tower DXP offers a rare combination of luxury, design, and connectivity in one of Gurugram’s most sought-after locations. From spacious, beautifully designed apartments to world-class amenities and a strong investment potential, the project promises to provide an exceptional living experience. Whether you’re looking for a luxurious home or a prime investment opportunity, Signature Global Twin Tower DXP is a perfect choice for those seeking the best in modern living.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp-sector-84-3bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/signature-global-twin-tower-dxp-sector-84-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "5 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5224,
    "title": "Smartworld One DXP sector 113",
    "location": "Sector 113, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-smartworld-one-dxp-2/\">Smartworld One DXP Sector 113</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool-1024x576.jpg\" alt=\"Smartworld One DXP sector 113\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool-1024x576.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool-1536x864.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/SW-113_Balcony-to-Pool.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>Smartworld One DXP, located in Sector 113, Gurgaon, is a landmark residential project that blends luxury with modern living. The project is developed by <b>Smartworld Developers</b>, renowned for delivering innovative and high-quality residential complexes. Positioned along the Dwarka Expressway, Smartworld One DXP promises a lifestyle that offers not only modern amenities but also strategic location advantages. With expansive living spaces and world-class features, this development redefines urban luxury living<a href=\"https://smartworld-developers.com/smart-world-one-dxp/?gad_source=1&amp;gbraid=0AAAAADEoYtQ2m2FHZc4c2MjnE8tHzYXek\">.</a></p><p>The project offers a mix of <b>3.5 BHK, 4.5 BHK</b>, and <b>5 BHK</b> apartments, making it an ideal option for families, professionals, and investors. Featuring top-tier facilities, advanced architectural design, and the strategic location on the Dwarka Expressway, this project is set to be one of the most sought-after residential complexes in Gurgaon.</p><p><b>Smartworld One DXP-Project Overview</b><b></b></p><ul><li><b>Developer:</b> Smartworld Developers</li><li><b>Project Name:</b> Smartworld One DXP</li><li><b>Location:</b> Sector 113, Dwarka Expressway, Gurgaon, Haryana</li><li><b>Total Area:</b> Approximately 5 acres</li><li><b>Towers:</b> Multiple high-rise towers</li><li><b>Total Units:</b> Over 500 units</li><li><b>Unit Types:</b><b></b><ul><li><b>3.5 BHK:</b> 1,927 sq. ft. to 2,450 sq. ft.</li><li><b>4.5 BHK:</b> 2,733 sq. ft. to 3,006 sq. ft.</li><li><b>5 BHK:</b> Custom sizes</li><li><b>RERA Registration:</b> DLRERA2020A0011</li></ul></li></ul><p><b>Architectural Design and Features</b><b></b></p><p>Smartworld One DXP stands as a prime example of contemporary design, with every aspect of the project meticulously planned to offer comfort, luxury, and a sense of openness. The project is designed by <b>UHA London</b>, an internationally recognized architectural firm, with landscaping designed by <b>Element Design Studio</b> from Singapore.</p><p><b>Smartworld One DXP-</b></p><p><b>Key Design Features</b><b></b></p><ol><li><b>Facade Design:</b><b></b><ul><li>The building exteriors are designed to stand out with a sleek, modern aesthetic, incorporating glass and steel elements that blend perfectly with the surroundings.</li><li>The towers are designed to maximize natural light and ventilation, creating an environment that promotes wellness and comfort.</li></ul></li><li><b>Spacious Residences:</b><b></b><ul><li>The apartments are designed with high ceilings, open layouts, and large windows that offer panoramic views of the surrounding area. The spacious design ensures that each unit feels airy and expansive, even for larger families.</li></ul></li><li><b>Landscaping:</b><b></b><ul><li>The project features lush green spaces with themed gardens, walking tracks, water bodies, and beautiful landscaping designed to offer a serene and peaceful atmosphere.</li></ul></li><li><b>Sustainability Focus:</b><b></b><ul><li>Smartworld One DXP incorporates sustainable architecture, with rainwater harvesting systems, energy-efficient lighting, and waste management facilities that promote an eco-friendly living environment.</li></ul></li></ol><p><b>Unit Layouts and Interior Features</b><b></b></p><p>Smartworld One DXP offers a variety of layouts to suit different preferences. Each apartment is crafted to provide luxurious living spaces with top-quality materials, fixtures, and fittings.</p><p><b>Living and Dining Areas</b><b></b></p><ul><li><b>Open Layouts:</b> The living and dining areas are designed to be open and expansive, allowing for a seamless flow between spaces.</li><li><b>Natural Light:</b> Large windows ensure that the living spaces are flooded with natural light, creating a bright and airy environment.</li><li><b>Flooring:</b> High-quality flooring materials such as marble and premium tiles are used to give the interiors an elegant look.</li></ul><p><b>Kitchen</b><b></b></p><ul><li><b>Modular Design:</b> The kitchens are equipped with modern modular units, premium countertops, and high-end appliances.</li><li><b>Efficient Layout:</b> Designed for practicality, the kitchens offer plenty of storage and counter space, making them ideal for cooking and entertaining.</li></ul><p><b>Bedrooms</b><b></b></p><ul><li><b>Master Bedroom:</b> The master bedroom features expansive spaces, an en-suite bathroom, and walk-in closets.</li><li><b>Children's Rooms and Guest Bedrooms:</b> These rooms are similarly designed with space optimization in mind, ensuring comfort and privacy for all family members.</li><li><b>Balconies:</b> Each unit comes with large balconies offering panoramic views of the surroundings, ideal for relaxation and enjoying the outdoors.</li></ul><p><b>Bathrooms</b><b></b></p><ul><li><b>High-end Fixtures:</b> Bathrooms are designed with modern fittings, featuring premium sanitary ware and rain showers, ensuring a spa-like experience.</li><li><b>Luxury Finishes:</b> Marble or premium ceramic tiles are used, along with high-end faucets and other fittings.</li></ul><p><b>Smart Home Features</b><b></b></p><ul><li><b>Home Automation:</b> The project includes state-of-the-art home automation systems, enabling residents to control lights, air conditioning, curtains, and security features with ease.</li></ul><p><b>Smartworld One DXP-</b></p><p><b>Amenities</b><b></b></p><p>Smartworld One DXP offers a wide array of amenities to provide a premium living experience for its residents. Designed to meet the needs of modern families, the amenities focus on fitness, leisure, entertainment, and convenience.</p><ol><li><b>Clubhouse:</b><b></b><ul><li>The development features a 100,000 sq. ft. clubhouse with dedicated zones for social gatherings, sports, and recreational activities. It includes a <b>multi-purpose hall</b>, party rooms, and an exclusive lounge.</li></ul></li><li><b>Co-working Space:</b><b></b><ul><li>For residents who work from home, the project includes a <b>24x7 co-working space</b> with high-speed internet, meeting rooms, and collaborative zones.</li></ul></li><li><b>Fitness and Wellness Facilities:</b><b></b><ul><li><b>Gymnasium:</b> Equipped with state-of-the-art fitness equipment.</li><li><b>Yoga &amp; Meditation Room:</b> Dedicated spaces for yoga and mindfulness practices.</li><li><b>Spa and Sauna:</b> A spa, sauna, and wellness center to unwind and relax.</li></ul></li><li><b>Sports Facilities:</b><b></b><ul><li><b>Outdoor Sports Courts:</b> The development includes basketball, tennis, and badminton courts.</li><li><b>Indoor Sports Complex:</b> Includes facilities for indoor games like table tennis and squash.</li></ul></li><li><b>Leisure and Entertainment:</b><b></b><ul><li><b>Mini Theater:</b> A small, intimate cinema for residents to enjoy movies and events.</li><li><b>Amphitheater:</b> For hosting cultural and community events.</li><li><b>Sunken Pool Bar:</b> A bar located next to the swimming pool, offering a perfect space for relaxation.</li></ul></li><li><b>Children’s Facilities:</b><b></b><ul><li><b>Play Areas:</b> The project has multiple children's play areas with safe and age-appropriate equipment.</li><li><b>Water Play Zones:</b> A dedicated water play area designed for young children.</li><li><b>Library and Study Area:</b> A quiet space for reading and learning.</li></ul></li><li><b>Additional Facilities:</b><b></b><ul><li><b>ATM and Convenience Stores:</b> On-site ATMs and stores for daily necessities.</li><li><b>Barbecue Zone:</b> A designated area for outdoor grilling and social gatherings.</li></ul></li></ol><p><b>Smartworld One DXP-</b></p><p><b>Location Advantages</b><b></b></p><p>Smartworld One DXP is strategically located in Sector 113, which offers excellent connectivity to major parts of Delhi, Gurugram, and the surrounding areas. The <b>Dwarka Expressway</b> plays a crucial role in making this location highly accessible.</p><ol><li><b>Connectivity to Delhi:</b><b></b><ul><li>The project is just a few minutes away from Delhi, ensuring easy access to the capital and its business hubs.</li></ul></li><li><b>Proximity to IGI Airport:</b><b></b><ul><li>The <b>Indira Gandhi International Airport</b> is just a 7-minute drive away, making travel convenient for frequent flyers.</li></ul></li><li><b>Near to Diplomatic Enclave:</b><b></b><ul><li>Located just 5 minutes from the Diplomatic Enclave, residents can easily access embassies and consulates.</li></ul></li><li><b>Education and Healthcare:</b><b></b><ul><li>Prominent schools like <b>DPS</b> and <b>The Shri Ram School</b>, along with world-class hospitals like <b>Medanta</b> and <b>Fortis</b>, are located nearby.</li></ul></li><li><b>Entertainment and Shopping:</b><b></b><ul><li>The development is close to malls such as <b>Ambience Mall</b> and <b>DLF Cyber Hub</b>, offering a wide range of shopping, dining, and entertainment options.</li></ul></li></ol><p><b>Investment Potential</b><b></b></p><p>Smartworld One DXP is not only an ideal residential choice but also a prime investment opportunity:</p><ol><li><b>High Return on Investment (ROI):</b><b></b><ul><li>Given its strategic location, luxury amenities, and the increasing demand for high-end properties in Gurugram, the project offers excellent rental returns and long-term appreciation.</li></ul></li><li><b>Rapid Infrastructure Development:</b><b></b><ul><li>The Dwarka Expressway and its surrounding infrastructure are undergoing rapid development, enhancing the area's value.</li></ul></li><li><b>Reputation of Smartworld Developers:</b><b></b><ul><li>With a track record of delivering high-quality projects, Smartworld Developers has built a strong reputation for timely delivery and customer satisfaction.</li></ul></li></ol><p><b>Conclusion</b><b></b></p><p>Smartworld One DXP in Sector 113, Gurgaon, is an embodiment of luxury and modern living, offering spacious apartments, world-class amenities, and strategic connectivity. With a focus on sustainable development, Smartworld One DXP is an ideal place for those seeking a premium lifestyle. It is not only a great residential choice but also an excellent investment opportunity in one of Gurgaon’s most desirable locations.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/smartworld-one-dxp-sector-113-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "5 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5266,
    "title": "M3M Crown Sector 111 luxurious Apartments",
    "location": "Sector 111, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Restaurant"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/m3m-crown-sec-111-top-20/\">M3M Crown Sector 111 Dwarka Express</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"471\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-3-1024x471.jpg\" alt=\"M3M Crown\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-3-1024x471.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-3-300x138.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-3-768x353.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/m3m-crown-banner-33433-3.jpg 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"63\" data-end=\"79\"><strong data-start=\"63\" data-end=\"79\">Introduction</strong></p><p data-start=\"81\" data-end=\"200\">M3M Crown, situated in Sector 111 along the Dwarka Expressway in Gurugram, is an epitome of luxury and sophistication. Developed by M3M India, this residential project offers meticulously designed 3 and 4 BHK apartments, combining modern architecture with opulent interiors to provide residents with an unparalleled living experience.</p><p data-start=\"81\" data-end=\"200\"><strong data-start=\"202\" data-end=\"222\">M3M Crown Sector 111-Project Overview</strong></p><ul data-start=\"224\" data-end=\"1159\"><li data-start=\"224\" data-end=\"322\"><p data-start=\"226\" data-end=\"322\"><strong data-start=\"226\" data-end=\"240\">Developer:</strong> M3M India</p></li><li data-start=\"323\" data-end=\"420\"><p data-start=\"325\" data-end=\"420\"><strong data-start=\"325\" data-end=\"338\">Location:</strong> Sector 111, Dwarka Expressway, Gurugram</p></li><li data-start=\"421\" data-end=\"519\"><p data-start=\"423\" data-end=\"519\"><strong data-start=\"423\" data-end=\"437\">Land Area:</strong> Approximately 16 acres</p></li><li data-start=\"520\" data-end=\"624\"><p data-start=\"522\" data-end=\"624\"><strong data-start=\"522\" data-end=\"540\">Configuration:</strong> 3 and 4 BHK apartments</p></li><li data-start=\"625\" data-end=\"729\"><p data-start=\"627\" data-end=\"729\"><strong data-start=\"627\" data-end=\"643\">Total Units:</strong> 726 exclusive </p></li><li data-start=\"625\" data-end=\"729\"><p data-start=\"627\" data-end=\"729\"><strong data-start=\"732\" data-end=\"750\">Tower Details:</strong> 11 high-rise towers, each with G+31 floors</p></li><li data-start=\"837\" data-end=\"944\"><p data-start=\"839\" data-end=\"944\"><strong style=\"font-style: inherit;\" data-start=\"947\" data-end=\"962\">Possession:</strong> Expected by December 2026</p></li><li data-start=\"1049\" data-end=\"1159\"><p data-start=\"1051\" data-end=\"1159\"><strong data-start=\"1051\" data-end=\"1073\">RERA Registration:</strong> GGM/687/419/2023/31</p></li></ul><p data-start=\"1161\" data-end=\"1204\"><strong data-start=\"1161\" data-end=\"1204\">Architectural Design and Sustainability</strong></p><p data-start=\"1206\" data-end=\"1371\">M3M Crown Sector 111 showcases contemporary architecture with expansive layouts and abundant natural light. The residences are designed to offer panoramic views of the central greens and water bodies, creating a serene living environment. The project emphasizes sustainable living with energy-efficient designs and ample green spaces.</p><p data-start=\"1373\" data-end=\"1396\"><strong data-start=\"1373\" data-end=\"1396\">M3M Crown Sector 111-Location Advantages</strong></p><ul data-start=\"1398\" data-end=\"2282\"><li data-start=\"1398\" data-end=\"1515\"><p data-start=\"1400\" data-end=\"1515\"><strong data-start=\"1400\" data-end=\"1429\">Dwarka Expressway Access:</strong> Direct connectivity facilitates seamless travel to Delhi and other parts of Gurugram.</p></li><li data-start=\"1516\" data-end=\"2282\"><p data-start=\"1518\" data-end=\"1549\"><strong data-start=\"1518\" data-end=\"1549\">Proximity to Key Landmarks:</strong></p><ul data-start=\"1552\" data-end=\"2282\"><li data-start=\"1552\" data-end=\"1680\"><p data-start=\"1554\" data-end=\"1680\"><strong data-start=\"1554\" data-end=\"1594\">Indira Gandhi International Airport:</strong> Approximately 7 minutes by car.</p></li><li data-start=\"1683\" data-end=\"1797\"><p data-start=\"1685\" data-end=\"1797\"><strong data-start=\"1685\" data-end=\"1711\">Diplomatic Enclave II:</strong> 10 minutes away.</p></li><li data-start=\"1800\" data-end=\"1930\"><p data-start=\"1802\" data-end=\"1930\"><strong data-start=\"1802\" data-end=\"1844\">India International Convention Centre:</strong> 10 minutes drive.</p></li><li data-start=\"1933\" data-end=\"2045\"><p data-start=\"1935\" data-end=\"2045\"><strong data-start=\"1935\" data-end=\"1959\">Bharat Vandana Park:</strong> 15 minutes by car.</p></li><li data-start=\"2048\" data-end=\"2158\"><p data-start=\"2050\" data-end=\"2158\"><strong data-start=\"2050\" data-end=\"2072\">Delhi Golf Course:</strong> 15 minutes drive.</p></li><li data-start=\"2161\" data-end=\"2282\"><p data-start=\"2163\" data-end=\"2282\"><strong data-start=\"2163\" data-end=\"2196\">International Sports Complex:</strong> 15 minutes away.</p></li></ul></li></ul><p data-start=\"2284\" data-end=\"2297\"><strong data-start=\"2284\" data-end=\"2297\">M3M Crown Sector 111-Amenities</strong></p><p data-start=\"2299\" data-end=\"2394\">M3M Crown offers a plethora of world-class amenities designed to enhance residents' lifestyles:</p><ul data-start=\"2396\" data-end=\"3157\"><li data-start=\"2396\" data-end=\"2498\"><p data-start=\"2398\" data-end=\"2498\"><strong data-start=\"2398\" data-end=\"2412\">Clubhouse:</strong> A 75,000 sq. ft. facility featuring a fitness center, spa, and multi-purpose lounge.</p></li><li data-start=\"2499\" data-end=\"2605\"><p data-start=\"2501\" data-end=\"2605\"><strong data-start=\"2501\" data-end=\"2519\">Swimming Pool:</strong> A rooftop pool offering relaxation with panoramic views.</p></li><li data-start=\"2606\" data-end=\"2716\"><p data-start=\"2608\" data-end=\"2716\"><strong data-start=\"2608\" data-end=\"2630\">Sports Facilities:</strong> Golf putting, bowling alley, squash court, and tennis court for sports enthusiasts.</p></li><li data-start=\"2717\" data-end=\"2824\"><p data-start=\"2719\" data-end=\"2824\"><strong data-start=\"2719\" data-end=\"2738\">Themed Gardens:</strong> Zen Garden, French Garden, and Butterfly Valley, among others, promoting a tranquil environment.</p></li><li data-start=\"2825\" data-end=\"2939\"><p data-start=\"2827\" data-end=\"2939\"><strong data-start=\"2827\" data-end=\"2853\">Entertainment Options:</strong> Mini theater, multi-cuisine restaurants, and a library for leisure activities.</p></li><li data-start=\"2940\" data-end=\"3055\"><p data-start=\"2942\" data-end=\"3055\"><strong data-start=\"2942\" data-end=\"2969\">Fitness and Well-being:</strong> Yoga and meditation center, jogging track, and a fully equipped gymnasium.</p></li><li data-start=\"3056\" data-end=\"3157\"><p data-start=\"3058\" data-end=\"3157\"><strong data-start=\"3058\" data-end=\"3071\">Security:</strong> A comprehensive three-tier security system, including CCTV surveillance and smart card access.</p></li></ul><p data-start=\"3159\" data-end=\"3179\"><strong data-start=\"3159\" data-end=\"3179\">Special Features</strong></p><ul data-start=\"3181\" data-end=\"3624\"><li data-start=\"3181\" data-end=\"3291\"><p data-start=\"3183\" data-end=\"3291\"><strong data-start=\"3183\" data-end=\"3205\">Central Landscape:</strong> A 5.5-acre central green space with community and social activity areas, enhancing the sense of communit<a href=\"http://m3mrealty.com\">y</a>.</p></li><li data-start=\"3292\" data-end=\"3400\"><p data-start=\"3294\" data-end=\"3400\"><strong data-start=\"3294\" data-end=\"3314\">Waterfront Club:</strong> A sophisticated club with a terraced garden and café, offering a resort-like experience.</p></li><li data-start=\"3401\" data-end=\"3514\"><p data-start=\"3403\" data-end=\"3514\"><strong data-start=\"3403\" data-end=\"3428\">High-Speed Elevators:</strong> Multiple elevators per tower, ensuring minimal waiting times and efficient vertical transportation.</p></li><li data-start=\"3515\" data-end=\"3624\"><p data-start=\"3517\" data-end=\"3624\"><strong data-start=\"3517\" data-end=\"3538\">Premium Finishes:</strong> Residences feature laminated wooden flooring in bedrooms, imported marble in living/dining areas, modular kitchens with premium fittings, and branded sanitary ware in bathrooms.</p></li></ul><p data-start=\"3626\" data-end=\"3647\"><strong data-start=\"3626\" data-end=\"3647\">Developer Profile</strong></p><p data-start=\"3649\" data-end=\"3814\">M3M India, established in 1998, has emerged as a prominent real estate developer in India, particularly in North India. The company is renowned for identifying emerging real estate markets, delivering projects with speed, class, and innovation. M3M's commitment to quality construction, timely delivery, and contemporary designs has earned it a reputation for excellence in the industry.</p><p data-start=\"3816\" data-end=\"3830\"><strong data-start=\"3816\" data-end=\"3830\">Conclusion</strong></p><p data-start=\"3832\" data-end=\"3957\">M3M Crown in Sector 111, Gurugram, offers a luxurious and sustainable living experience. With its strategic location, world-class amenities, and commitment to quality, it presents an exceptional opportunity for discerning homebuyers and investors seeking a blend of elegance, comfort, and connectivity</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/m3m-crown-sector-111-luxurious-apartments-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "16 Acres",
      "floors": "G+31",
      "possession": "2026"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5279,
    "title": "M3M Mansion Sector 113 luxurious",
    "location": "Sector 113, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Security",
      "Parking",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/m3m-mansion-sector-113-gurgaon/\">M3M Mansion Sector 113</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"401\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse-1024x401.webp\" alt=\"M3M Mansion\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse-1024x401.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse-300x118.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse-768x301.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse.webp 1080w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"86\" data-end=\"243\">M3M Mansion, nestled in Sector 113 along the Dwarka Expressway in Gurugram, is a luxurious residential development by M3M India Pvt. Ltd. This project offers an unparalleled living experience, combining modern architecture with expansive green spaces and world-class amenities. Strategically located at the border of Delhi and Gurgaon, M3M Mansion provides residents with seamless connectivity and a <a style=\"color: #ffffff;\" href=\"http://m3mrealty.com\">s</a>erene environment.</p><p data-start=\"245\" data-end=\"265\"><strong data-start=\"245\" data-end=\"265\">Project Overview</strong></p><ul data-start=\"267\" data-end=\"1204\"><li data-start=\"267\" data-end=\"365\"><p data-start=\"269\" data-end=\"365\"><strong data-start=\"269\" data-end=\"283\">Developer:</strong> M3M India Pvt. Ltd.​</p></li><li data-start=\"366\" data-end=\"463\"><p data-start=\"368\" data-end=\"463\"><strong data-start=\"368\" data-end=\"381\">Location:</strong> Sector 113, Dwarka Expressway, Gurugram​</p></li><li data-start=\"464\" data-end=\"562\"><p data-start=\"466\" data-end=\"562\"><strong data-start=\"466\" data-end=\"480\">Land Area:</strong> Approximately 11 acres​</p></li><li data-start=\"563\" data-end=\"669\"><p data-start=\"565\" data-end=\"669\"><strong data-start=\"565\" data-end=\"583\">Configuration:</strong> 3.5, 4.5, and 5 BHK apartments and penthouse<a href=\"https://m3mbuilders.com/projects/m3m-mansion/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\"> </a></p></li><li data-start=\"670\" data-end=\"774\"><p data-start=\"672\" data-end=\"774\"><strong data-start=\"672\" data-end=\"688\">Total Units:</strong> Over 950 residences​</p></li><li data-start=\"775\" data-end=\"881\"><p data-start=\"777\" data-end=\"881\"><strong data-start=\"777\" data-end=\"795\">Tower Details:</strong> 8 high-rise towers​</p></li><li data-start=\"882\" data-end=\"989\"><p data-start=\"884\" data-end=\"989\"><strong data-start=\"884\" data-end=\"903\">Starting Price:</strong> Available upon request​</p></li><li data-start=\"990\" data-end=\"1093\"><p data-start=\"992\" data-end=\"1093\"><strong data-start=\"992\" data-end=\"1007\">Possession:</strong> Expected by February 2032​<strong data-start=\"1096\" data-end=\"1118\">RERA Registration:</strong> RC/REP/HARERA/GGM/802/534/2024/29​<strong data-start=\"1206\" data-end=\"1249\">Architectural Design and Sustainability</strong></p></li></ul><p data-start=\"1251\" data-end=\"1376\">M3M Mansion is thoughtfully designed to offer spacious interiors with abundant natural light, ensuring a comfortable and luxurious lifestyle. The residences feature:​</p><ul data-start=\"1378\" data-end=\"1790\"><li data-start=\"1378\" data-end=\"1479\"><p data-start=\"1380\" data-end=\"1479\"><strong data-start=\"1380\" data-end=\"1393\">Flooring:</strong> Laminated wooden flooring in bedrooms​</p></li><li data-start=\"1480\" data-end=\"1581\"><p data-start=\"1482\" data-end=\"1581\"><strong data-start=\"1482\" data-end=\"1495\">Kitchens:</strong> Modular kitchens equipped with chimney and hob​</p></li><li data-start=\"1582\" data-end=\"1687\"><p data-start=\"1584\" data-end=\"1687\"><strong data-start=\"1584\" data-end=\"1601\">Living Areas:</strong> Air-conditioning in living and dining areas​<strong data-start=\"1690\" data-end=\"1704\">Bathrooms:</strong> Branded sanitary ware and fittings​</p></li></ul><p data-start=\"1792\" data-end=\"1815\"><strong data-start=\"1792\" data-end=\"1815\">Location Advantages</strong></p><p data-start=\"1817\" data-end=\"1902\">M3M Mansion boasts a strategic location with excellent connectivity to key areas:​</p><ul data-start=\"1904\" data-end=\"2480\"><li data-start=\"1904\" data-end=\"2014\"><p data-start=\"1906\" data-end=\"2014\"><strong data-start=\"1906\" data-end=\"1928\">Dwarka Expressway:</strong> Direct access ensures smooth travel to Delhi and other parts of Gurugram​</p></li><li data-start=\"2015\" data-end=\"2143\"><p data-start=\"2017\" data-end=\"2143\"><strong data-start=\"2017\" data-end=\"2057\">Indira Gandhi International Airport:</strong> Approximately a 7-minute drive​</p></li><li data-start=\"2144\" data-end=\"2255\"><p data-start=\"2146\" data-end=\"2255\"><strong data-start=\"2146\" data-end=\"2169\">Diplomatic Enclave:</strong> Around 15 minutes away​</p></li><li data-start=\"2256\" data-end=\"2367\"><p data-start=\"2258\" data-end=\"2367\"><strong data-start=\"2258\" data-end=\"2281\">Dwarka Golf Course:</strong> Approximately 10 minutes by car​</p></li><li data-start=\"2368\" data-end=\"2480\"><p data-start=\"2370\" data-end=\"2480\"><strong data-start=\"2370\" data-end=\"2394\">Bharat Vandana Park:</strong> About 10 minutes drive​</p></li></ul><p data-start=\"2482\" data-end=\"2495\"><strong data-start=\"2482\" data-end=\"2495\">Amenities</strong></p><p data-start=\"2497\" data-end=\"2582\">M3M Mansion offers a plethora of amenities designed to enhance residents' lifestyles:​</p><ul data-start=\"2584\" data-end=\"3450\"><li data-start=\"2584\" data-end=\"2686\"><p data-start=\"2586\" data-end=\"2686\"><strong data-start=\"2586\" data-end=\"2600\">Clubhouse:</strong> A state-of-the-art facility with various recreational options​</p></li><li data-start=\"2687\" data-end=\"2793\"><p data-start=\"2689\" data-end=\"2793\"><strong data-start=\"2689\" data-end=\"2707\">Swimming Pool:</strong> An Olympic-sized pool for relaxation and fitness​</p></li><li data-start=\"2794\" data-end=\"2904\"><p data-start=\"2796\" data-end=\"2904\"><strong data-start=\"2796\" data-end=\"2818\">Sports Facilities:</strong> Golf chip &amp; putt space, cricket box, squash court, basketball court, and tennis court​</p></li><li data-start=\"2905\" data-end=\"3012\"><p data-start=\"2907\" data-end=\"3012\"><strong data-start=\"2907\" data-end=\"2926\">Fitness Center:</strong> A well-equipped gymnasium and yoga zone</p></li><li data-start=\"3013\" data-end=\"3119\"><p data-start=\"3015\" data-end=\"3119\"><strong data-start=\"3015\" data-end=\"3033\">Entertainment:</strong> Mini theatre and gaming zone​</p></li><li data-start=\"3120\" data-end=\"3221\"><p data-start=\"3122\" data-end=\"3221\"><strong data-start=\"3122\" data-end=\"3135\">Wellness:</strong> Spa, sauna, and pleasure spa​</p></li><li data-start=\"3222\" data-end=\"3336\"><p data-start=\"3224\" data-end=\"3336\"><strong data-start=\"3224\" data-end=\"3250\">Children's Facilities:</strong> Kids' play area, pet-friendly parks, and dedicated green spaces​</p></li><li data-start=\"3337\" data-end=\"3450\"><p data-start=\"3339\" data-end=\"3450\"><strong data-start=\"3339\" data-end=\"3364\">Additional Amenities:</strong> Business center, amphitheatre, banquet hall, and cycling track​</p></li></ul><p data-start=\"3452\" data-end=\"3472\"><strong data-start=\"3452\" data-end=\"3472\">Special Features</strong></p><ul data-start=\"3474\" data-end=\"3986\"><li data-start=\"3474\" data-end=\"3581\"><p data-start=\"3476\" data-end=\"3581\"><strong data-start=\"3476\" data-end=\"3495\">Central Greens:</strong> Unobstructed views of Delhi Reserve Greens and central landscaped areas​<strong data-start=\"3584\" data-end=\"3597\">Security:</strong> Comprehensive perimeter security, CCTV surveillance, and smart card access​<strong data-start=\"3686\" data-end=\"3698\">Parking:</strong> Ample surface parking for visitors and residents​<a href=\"https://m3mbuilders.com/projects/m3m-mansion/?utm_source=chatgpt.com\" target=\"_blank\" rel=\"noopener\">m3mbuilders.com+1m3mrealty.com+1</a></p></li><li data-start=\"3785\" data-end=\"3883\"><p data-start=\"3787\" data-end=\"3883\"><strong data-start=\"3787\" data-end=\"3797\">Lobby:</strong> Double-height lobbies with luxurious seating areas​</p></li><li data-start=\"3884\" data-end=\"3986\"><p data-start=\"3886\" data-end=\"3986\"><strong data-start=\"3886\" data-end=\"3900\">Balconies:</strong> Generously sized wrap-around balconies enhancing outdoor living spaces​</p></li></ul><p data-start=\"3988\" data-end=\"4009\"><strong data-start=\"3988\" data-end=\"4009\">Developer Profile</strong></p><p data-start=\"4011\" data-end=\"4136\">M3M India Pvt. Ltd. is a renowned real estate developer known for its commitment to quality, innovation, and timely delivery. With a focus on creating luxurious and sustainable living spaces, M3M has established itself as a leader in the real estate sector, particularly in North India.​</p><p data-start=\"4138\" data-end=\"4152\"><strong data-start=\"4138\" data-end=\"4152\">Conclusion</strong></p><p data-start=\"4154\" data-end=\"4319\">M3M Mansion in Sector 113, Gurugram, offers a unique blend of luxury, comfort, and connectivity. With its strategic location, world-class amenities, and thoughtfully designed residences, it presents an exceptional opportunity for those seeking an elevated living experience. Prospective homeowners and investors are encouraged to explore this remarkable development to fully appreciate its offerings.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/m3m-mansion-sector-113-luxurious-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "11 Acres",
      "clubHouse": "1024x401.webp\" alt=\"M3M Mansion\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sector-113-gurugram-clubhouse-1024x401.webp 1024w",
      "possession": "2032"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5307,
    "title": "Elan The Presidential Sector 106-Top 20 Luxurious Apartments",
    "location": "Sector 106, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Security",
      "Parking"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/elan-the-presidential-the-top-20-luxurious/\">Elan The Presidential </a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1-1024x576.jpg\" alt=\"Elan The Presidential\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1-1024x576.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1-1536x864.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/banner-1.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"42\" data-end=\"119\"><strong data-start=\"42\" data-end=\"119\">Elan The Presidential: A Pinnacle of Luxury Living in Sector 106, Gurgaon</strong></p><p data-start=\"121\" data-end=\"240\">Elan The Presidential is a premier residential project situated in Sector 106, Gurgaon, along the rapidly developing Dwarka Expressway. Developed by Elan Limited, renowned for its commitment to quality and luxury, this project offers an unparalleled living experience for discerning homeowners.</p><p data-start=\"242\" data-end=\"263\"><a style=\"color: #ffffff;\" href=\"http://Elan+2elan-presidential.in+2DLC Group+2\" data-wplink-url-error=\"true\"><strong data-start=\"242\" data-end=\"263\">Project Overview:</strong></a></p><ul data-start=\"265\" data-end=\"1312\"><li data-start=\"265\" data-end=\"363\"><p data-start=\"267\" data-end=\"363\"><strong data-start=\"267\" data-end=\"281\">Developer:</strong> Elan Limited</p></li><li data-start=\"364\" data-end=\"461\"><p data-start=\"366\" data-end=\"461\"><strong data-start=\"366\" data-end=\"379\">Location:</strong> Sector 106, Dwarka Expressway, Gurgaon.</p></li><li data-start=\"462\" data-end=\"564\"><p data-start=\"464\" data-end=\"564\"><strong data-start=\"464\" data-end=\"482\">Property Type:</strong> Luxury Apartments and Penthouses</p></li><li data-start=\"565\" data-end=\"668\"><p data-start=\"567\" data-end=\"668\"><strong data-start=\"567\" data-end=\"582\">Total Area:</strong> Approximately 30 acres</p></li><li data-start=\"669\" data-end=\"775\"><p data-start=\"671\" data-end=\"775\"><strong data-start=\"671\" data-end=\"689\">Configuration:</strong> 3, 4, and 5 BHK units</p></li><li data-start=\"776\" data-end=\"1096\"><p data-start=\"778\" data-end=\"793\"><strong data-start=\"778\" data-end=\"793\">Unit Sizes:</strong></p><ul data-start=\"796\" data-end=\"1096\"><li data-start=\"796\" data-end=\"894\"><p data-start=\"798\" data-end=\"894\"><strong data-start=\"798\" data-end=\"808\">3 BHK:</strong> Approximately 2,500 sq. ft.</p></li><li data-start=\"897\" data-end=\"995\"><p data-start=\"899\" data-end=\"995\"><strong data-start=\"899\" data-end=\"909\">4 BHK:</strong> Approximately 3,200 sq. ft.</p></li><li data-start=\"998\" data-end=\"1096\"><p data-start=\"1000\" data-end=\"1096\"><strong data-start=\"1000\" data-end=\"1010\">5 BHK:</strong> Approximately 4,499 sq. ft.</p></li></ul></li><li data-start=\"1097\" data-end=\"1201\"><p data-start=\"1099\" data-end=\"1201\"><strong style=\"font-style: inherit;\" data-start=\"1204\" data-end=\"1226\">RERA Registration:</strong> 101 of 2022</p></li></ul><p data-start=\"1314\" data-end=\"1343\"><strong data-start=\"1314\" data-end=\"1343\">Architectural Excellence:</strong></p><p data-start=\"1345\" data-end=\"1510\">Designed by the esteemed architectural firm UHA London, Elan The Presidential showcases contemporary aesthetics combined with functional design. The development emphasizes expansive balconies, high ceilings, and open spaces, ensuring ample natural light and ventilation. The use of premium materials and finishes further enhances the luxurious appeal of the residences.</p><p data-start=\"1512\" data-end=\"1536\"><strong data-start=\"1512\" data-end=\"1536\">Location Advantages:</strong></p><ul data-start=\"1538\" data-end=\"2275\"><li data-start=\"1538\" data-end=\"1643\"><p data-start=\"1540\" data-end=\"1643\"><strong data-start=\"1540\" data-end=\"1557\">Connectivity:</strong> Situated along the Dwarka Expressway, the project offers seamless connectivity to Delhi and other parts of Gurgaon.</p></li><li data-start=\"1644\" data-end=\"2275\"><p data-start=\"1646\" data-end=\"1677\"><strong data-start=\"1646\" data-end=\"1677\">Proximity to Key Landmarks:</strong></p><ul data-start=\"1680\" data-end=\"2275\"><li data-start=\"1680\" data-end=\"1808\"><p data-start=\"1682\" data-end=\"1808\"><strong data-start=\"1682\" data-end=\"1722\">Indira Gandhi International Airport:</strong> Approximately a 20-minute drive</p></li><li data-start=\"1811\" data-end=\"1929\"><p data-start=\"1813\" data-end=\"1929\"><strong data-start=\"1813\" data-end=\"1843\">Cyber Hub and Udyog Vihar:</strong> Around 15 minutes by car</p></li><li data-start=\"1932\" data-end=\"2038\"><p data-start=\"1934\" data-end=\"2038\"><strong data-start=\"1934\" data-end=\"1952\">Ambience Mall:</strong> Just a short drive away for all shopping and entertainment needs</p></li><li data-start=\"2041\" data-end=\"2158\"><p data-start=\"2043\" data-end=\"2158\"><strong data-start=\"2043\" data-end=\"2072\">Educational Institutions:</strong> Reputed schools and colleges are in close vicinity</p></li><li data-start=\"2161\" data-end=\"2275\"><p data-start=\"2163\" data-end=\"2275\"><strong data-start=\"2163\" data-end=\"2189\">Healthcare Facilities:</strong> Top-tier hospitals are easily accessible</p></li></ul></li></ul><p data-start=\"2277\" data-end=\"2303\"><strong data-start=\"2277\" data-end=\"2303\">World-Class Amenities:</strong></p><ul data-start=\"2305\" data-end=\"3297\"><li data-start=\"2305\" data-end=\"2407\"><p data-start=\"2307\" data-end=\"2407\"><strong data-start=\"2307\" data-end=\"2321\">Clubhouse:</strong> A state-of-the-art facility offering various recreational options</p></li><li data-start=\"2408\" data-end=\"2515\"><p data-start=\"2410\" data-end=\"2515\"><strong data-start=\"2410\" data-end=\"2429\">Swimming Pools:</strong> Including an Olympic-sized pool and an indoor heated pool</p></li><li data-start=\"2516\" data-end=\"2623\"><p data-start=\"2518\" data-end=\"2623\"><strong data-start=\"2518\" data-end=\"2537\">Fitness Center:</strong> A fully equipped gymnasium for health enthusiasts</p></li><li data-start=\"2624\" data-end=\"2734\"><p data-start=\"2626\" data-end=\"2734\"><strong data-start=\"2626\" data-end=\"2648\">Sports Facilities:</strong> Tennis and badminton courts, among others</p></li><li data-start=\"2735\" data-end=\"2848\"><p data-start=\"2737\" data-end=\"2848\"><strong data-start=\"2737\" data-end=\"2762\">Children's Play Area:</strong> Dedicated spaces for young residents</p></li><li data-start=\"2849\" data-end=\"2959\"><p data-start=\"2851\" data-end=\"2959\"><strong data-start=\"2851\" data-end=\"2873\">Landscaped Greens:</strong> Extensive central greens and jogging tracks for a serene environment.</p></li><li data-start=\"2960\" data-end=\"3076\"><p data-start=\"2962\" data-end=\"3076\"><strong data-start=\"2962\" data-end=\"2990\">Spa and Wellness Center:</strong> Facilities designed for relaxation and rejuvenation</p></li><li data-start=\"3077\" data-end=\"3190\"><p data-start=\"3079\" data-end=\"3190\"><strong data-start=\"3079\" data-end=\"3104\">High-Speed Elevators:</strong> Ensuring quick and efficient movement within the towers</p></li><li data-start=\"3191\" data-end=\"3297\"><p data-start=\"3193\" data-end=\"3297\"><strong data-start=\"3193\" data-end=\"3211\">24/7 Security:</strong> Advanced security systems including CCTV surveillance and biometric access</p></li></ul><p data-start=\"3299\" data-end=\"3320\"><strong data-start=\"3299\" data-end=\"3320\">Special Features:</strong></p><ul data-start=\"3322\" data-end=\"3875\"><li data-start=\"3322\" data-end=\"3431\"><p data-start=\"3324\" data-end=\"3431\"><strong data-start=\"3324\" data-end=\"3345\">Private Terraces:</strong> Select units offer private terraces with panoramic views</p></li><li data-start=\"3432\" data-end=\"3546\"><p data-start=\"3434\" data-end=\"3546\"><strong data-start=\"3434\" data-end=\"3460\">Smart Home Automation:</strong> Residences equipped with modern automation systems for enhanced convenience</p></li><li data-start=\"3547\" data-end=\"3657\"><p data-start=\"3549\" data-end=\"3657\"><strong data-start=\"3549\" data-end=\"3571\">Dedicated Parking:</strong> Ample parking space with 3-level basement parking</p></li><li data-start=\"3658\" data-end=\"3769\"><p data-start=\"3660\" data-end=\"3769\"><strong data-start=\"3660\" data-end=\"3683\">Concierge Services:</strong> Personalized services to cater to residents' daily needs</p></li><li data-start=\"3770\" data-end=\"3875\"><p data-start=\"3772\" data-end=\"3875\"><strong data-start=\"3772\" data-end=\"3789\">Pet-Friendly:</strong> Designated pet zones ensuring a comfortable environment for animal lovers</p></li></ul><p data-start=\"3877\" data-end=\"3902\"><strong data-start=\"3877\" data-end=\"3902\">Investment Potential:</strong></p><p data-start=\"3904\" data-end=\"4069\">Gurgaon has consistently been a hotspot for real estate investments, with properties in Sector 106 witnessing steady appreciation. The strategic location, coupled with the luxurious offerings of Elan The Presidential, makes it a lucrative investment opportunity. The ongoing development of the Dwarka Expressway is expected to further enhance connectivity and infrastructure, positively impacting property values in the vicinity.</p><p data-start=\"4071\" data-end=\"4098\"><strong data-start=\"4071\" data-end=\"4098\">Developer's Commitment:</strong></p><p data-start=\"4100\" data-end=\"4225\">Elan Limited stands committed to delivering projects that exemplify luxury, quality, and timely possession. With a track record of successful developments, the company ensures that every project meets the highest standards of construction and design.</p><p data-start=\"4227\" data-end=\"4242\"><strong data-start=\"4227\" data-end=\"4242\">Conclusion:</strong></p><p data-start=\"4244\" data-end=\"4369\">Elan The Presidential in Sector 106, Gurgaon, offers a blend of luxury, comfort, and strategic location. Whether you're seeking a new residence or a valuable investment, this project promises to meet and exceed expectations.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-top-20-luxurious-apartments-5bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-top-20-luxurious-apartments-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/elan-the-presidential-sector-106-top-20-luxurious-apartments-4bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "30 Acres",
      "possession": "4227"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5392,
    "title": "Max Estate 360-Top 20 Luxurious Apartments",
    "location": "Sector 36, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Kids Play Area"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/https-dhawanproperties-in-max-estate-360/\">Max Estate 360</a></h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/spotlight-poster-1-1024x576.jpg\" alt=\"Max Estate 360\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/spotlight-poster-1-1024x576.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/spotlight-poster-1-300x169.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/spotlight-poster-1-768x432.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/spotlight-poster-1.jpg 1280w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p data-start=\"0\" data-end=\"359\">Max Estates, the real estate development arm of the Max Group, has been actively shaping the residential landscape in Delhi NCR since its establishment in 2016. The company focuses on creating sustainable, Grade A developments that prioritize the well-being of their residents.​</p><p data-start=\"361\" data-end=\"401\">Here are some of their notable projects:</p><p data-start=\"403\" data-end=\"1179\"><strong data-start=\"403\" data-end=\"447\">1. Max Estate 360, Sector 36A, Gurugram:</strong> This upcoming luxury residential development is strategically located at the confluence of Dwarka Expressway and Central Peripheral Road (CPR), offering excellent connectivity to key business districts like Cyber City and Golf Course Road. The project features 3 and 4-bedroom apartments, each equipped with wraparound balconies to enhance the living experience. Residents can enjoy over 60 well-being focused amenities, including a community clubhouse, dedicated sports block, primary healthcare facilities, and a car-free ground living environment. The development is also IGBC Platinum Pre-certified, emphasizing its commitment to sustainability.</p><p data-start=\"1181\" data-end=\"1418\"><strong data-start=\"1181\" data-end=\"1222\">2. Max Estate 128, Sector 128, Noida:</strong> Situated along the Noida Expressway, this luxury residential project offers 4 and 5-bedroom apartments with sizes ranging from 4,400 to 6,000 sq. ft. The development boasts proximity to the upcoming Jewar Airport and an 11 km metro link connecting Delhi and Noida, enhancing its accessibility. Amenities include a clubhouse, indoor games, kids play area, swimming pool, gymnasium, party hall, 24x7 security, and jogging track, all set within a lush green environment. ​Max Realty+3Max Estates+3Max Estates+3Max Estates+1Max Estates+1</p><p data-start=\"1420\" data-end=\"1621\"><strong data-start=\"1420\" data-end=\"1457\">3. Max Towers, Sector 16B, Noida:</strong> Located in Sector 16B, Noida, Max Towers offers ready-to-move-in office spaces ranging from 5,258 to 25,500 sq. ft. Designed to cater to modern business needs, the building provides state-of-the-art facilities and is strategically positioned to offer excellent connectivity to Delhi and other parts of NCR.</p><p data-start=\"1623\" data-end=\"1817\"><strong data-start=\"1623\" data-end=\"1651\">4. <a href=\"http://Max Realty+1Max Estate+1\" data-wplink-url-error=\"true\">222 Rajpur, Dehradun:</a></strong> Nestled against the Malsi Forest with views of the Mussoorie Hills, this exclusive residential enclave spans 5 acres, offering townhouse villas, courtyard villas, and forest villas. Each home is designed with a private garden, promoting a sense of tranquility and connection with nature. ​Max Estates continues to expand its portfolio, focusing on developments that harmonize luxury, sustainability, and community well-being.​</p>",
    "images": [
      "/placeholder.svg"
    ],
    "projectSpecs": {
      "landParcel": "5 Acres"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 5406,
    "title": "Sobha Altus Sector 106 luxurious Apartments in Dwarka express",
    "location": "Sector 106, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Gym",
      "Garden",
      "Security"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"556\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-2-1024x556.jpg\" alt=\"Sobha Altus – Ultra-Luxury Residences on Dwarka Expressway, Gurgaon\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-2-1024x556.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-2-300x163.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-2-768x417.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-2.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<h2><a href=\"https://dhawanproperties.in/sobha-altus-sector-106/\">Sobha Altus Sector 106</a></h2>\t\t\t\t\n\t\t<p><b>Sobha Altus – Ultra-Luxury Residences on Dwarka Expressway, Gurgaon</b><b></b></p><p>Sobha Altus, developed by Sobha Limited, is an ultra-luxurious residential project situated in Sector 106, Gurgaon, along the prestigious Dwarka Expressway. Known for its impeccable construction quality and commitment to modern, sustainable living, Sobha Limited brings its years of expertise to this extraordinary development. Designed with a distinctive architectural identity and guided by biophilic principles, Sobha Altus blends high-end urban living with natural integration and unparalleled privacy. With its bold fluidic design, a plethora of world-class amenities, and its prime location, the project is set to redefine modern upscale living in the National Capital Region (NCR).</p>\t\t\n\t\t\t\t\t<h2>Video</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/04/gRAds3EPJauuQ7H.mov\t\t\n\t\t\t\t\t<h2>Project Overview</h2>\t\t\t\t\n\t\t<p><a href=\"https://dhawanproperties.in\"><b>Developer</b></a>: Sobha Limited, one of India’s leading real estate brands with a reputation for superior construction quality, exceptional design, and timely delivery.</p><ul><li><b>Location</b>: Sector 106, Dwarka Expressway, Gurgaon, Haryana – a high-growth corridor that lies close to Delhi, making it an attractive residential area for both investors and end-users.</li></ul>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"576\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-1024x576.webp\" alt=\"sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-1024x576.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-300x169.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-768x432.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-1536x864.webp 1536w, https://dhawanproperties.in/wp-content/uploads/2025/04/location-map-min-2048x1152.webp 2048w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Total Area</b>: Spread across 5.51 acres of prime real estate, Sobha Altus ensures a spacious and luxurious living environment, with expansive green spaces and water features interwoven into its design.</li><li><b>Number of Towers</b>: The development consists of three towers:<ul><li>Two towers feature 3 Basements + Ground + 28 floors.</li><li>One tower has 1 Basement + Stilt + 11 floors.</li></ul></li><li><b>Total Units</b>: The project will house 293 exclusive residences, ensuring a limited and premium living experience for its residents.</li><li><b>Project Theme</b>: Contemporary “Wave Style” architecture, designed to create a harmonious living environment that balances luxury with nature. The development features minimal shared walls, wraparound balconies, and a grand drop-off experience at the entrance.</li></ul><p><b>Residences and Configurations</b></p><p>Sobha Altus offers a thoughtfully curated selection of residences that range from compact luxury apartments to expansive family homes, catering to diverse buyer preferences and lifestyles.</p><p><b>Apartment Types &amp; Sizes:</b></p><ul><li><b>Studio Apartments (1 BHK)</b>:<ul><li><b>Size</b>: 677 sq. ft.</li><li><b>Ideal For</b>: Professionals, bachelors, or as rental investments. These apartments are compact yet stylish, offering efficient use of space and luxury amenities.</li><li><b>Starting Price</b>: ₹1.76 Cr</li></ul></li><li><b>3 BHK Residences</b>:<ul><li><b>Sizes</b>: Around 2,870 sq. ft.</li><li><b>Features</b>: These mid-sized luxury apartments offer generous interiors, wraparound balconies, and ample natural light. Perfect for those who seek space and privacy while enjoying panoramic views.</li></ul></li><li><b>4 BHK Residences</b>:<ul><li><b>Sizes</b>: Range between 3,361 and 4,077 sq. ft.</li><li><b>Target Audience</b>: Designed for families who require expansive, well-ventilated living spaces. These homes provide an ideal setting for high-end living with luxury features.</li></ul></li><li><b>5 BHK (Limited Inventory)</b>:<ul><li><b>Size</b>: Exclusive penthouse units, offering expansive layouts with private terraces and unparalleled views. Ideal for large families or those who want to invest in the utmost luxury.</li></ul></li></ul>https://dhawanproperties.in/wp-content/uploads/2025/04/5.mp4<p><b>Pricing:</b></p><ul><li><b>Studio Units</b>: Base prices start at ₹1.76 Cr, making these compact units suitable for those entering the luxury market or looking for a high-end rental property.</li><li><b>3 BHK Units</b>: Starting at ₹6.5 Cr, these residences offer luxury living with expansive spaces and high-end finishes.</li><li><b>4 BHK Units</b>: Prices for these larger homes start at approximately ₹6.7 Cr and go up to ₹9.94 Cr, depending on the unit size, floor, and location.</li><li><b>5 BHK Units (Exclusive)</b>: For those seeking the epitome of luxury, these exclusive units can exceed ₹10 Cr.</li></ul><p><b>Possession Timeline &amp; RERA Compliance</b></p><ul><li><b>Expected Possession</b>: The project is slated for possession between December 2028 and December 2031, with multiple sources indicating June 2029 as a likely delivery window.</li><li><b>RERA Registration</b>: RC/HARERA/GGM/828/560/2024/55 (Dated: May 27, 2024). The project is registered under the Haryana Real Estate Regulatory Authority (RERA), ensuring legal transparency, buyer protection, and adherence to regulatory norms.</li></ul><p><b>Architecture and Design Excellence</b></p><p>Sobha Altus stands apart with its architectural style that embraces fluidic geometry and parametric design, setting it apart from other luxury projects. The design philosophy focuses on creating homes that are both aesthetically stunning and functionally efficient, ensuring maximum comfort and tranquility for residents.</p><ul><li><b>Maximized Natural Light and Ventilation</b>: The project ensures that all residences are well-ventilated with ample daylight entering the living spaces, enhancing the quality of life.</li></ul><p>••<b>Minimal Shared Walls</b>: By minimizing shared walls between apartments, Sobha Altus guarantees privacy and reduces noise, making it an ideal place for those who value peaceful living.</p><p>••<b>Wraparound Balconies</b>: These expansive balconies provide sweeping panoramic views of the city and landscape, creating an atmosphere of openness and freedom.</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1000\" height=\"550\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-1.webp\" alt=\"sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-1.webp 1000w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-1-300x165.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/SOBHA-Altus-Wraparound-Balcony-1-768x422.webp 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Private Terraces</b>: For select units, Sobha Altus offers private terraces, ideal for personal outdoor spaces that enhance the living experience.</li><li><b>Grand Arrival Experience</b>: The project features an impressive drop-off point with water features, a spacious entrance porch, and thoughtfully designed landscaping, making for an unforgettable first impression.</li></ul><p><b>Key Amenities</b></p><p>Sobha Altus offers over 30 world-class amenities spread across indoor and outdoor spaces, providing residents with a comprehensive luxury lifestyle experience. These amenities are designed to cater to the diverse needs of its high-end residents and form a vibrant community hub within the project.</p><p><b>The Waverly Club – 46,080.5 sq. ft.</b></p><p>This massive luxury clubhouse offers a variety of premium features:</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"427\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-elevating-luxury-living-in-sector-106-gurugram-1024x427.jpg\" alt=\"Sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-elevating-luxury-living-in-sector-106-gurugram-1024x427.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-elevating-luxury-living-in-sector-106-gurugram-300x125.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-elevating-luxury-living-in-sector-106-gurugram-768x320.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-elevating-luxury-living-in-sector-106-gurugram.jpg 1200w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Temperature-controlled Indoor Pool</b>: For year-round enjoyment, the indoor pool provides a serene environment to relax and unwind.</li><li>••<b style=\"font-style: inherit;\">High-end Gymnasium</b>: Equipped with modern fitness equipment, the gym caters to the health and wellness needs of residents.</li><li><p>••<b>Squash and Badminton Courts</b>: These indoor courts provide space for residents to indulge in sports and physical activities.</p></li></ul>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"642\" height=\"570\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-indoor-amenity.webp\" alt=\"sobha pool\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-indoor-amenity.webp 642w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-altus-indoor-amenity-300x266.webp 300w\" sizes=\"(max-width: 642px) 100vw, 642px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Indoor Games Room</b>: With table tennis and billiards, the games room is a perfect spot for socializing and recreational fun.</li><li><b>Banquet Halls</b>: These spaces are perfect for private events, parties, and social gatherings, allowing residents to host in style.</li><li><b>Business Lounge and Co-working Spaces</b>: Catering to the modern professional, these spaces provide quiet areas for meetings and work.</li><li><b>Café, Steam/Sauna Rooms, and Massage Therapy Areas</b>: For relaxation and rejuvenation, residents can enjoy these luxury wellness facilities.</li><li><b>Guest Suites</b>: Ideal for short-term stays, the guest suites offer comfort and privacy for visiting family and friends.</li></ul><p><b>Outdoor Amenities</b></p><ul><li><b>Infinity-edge Pool</b>: The pool, complete with a sun deck, offers breathtaking views of the surrounding landscape, allowing residents to relax in style.</li><li><b>Jogging and Cycling Tracks</b>: These tracks promote a healthy lifestyle and provide ample space for fitness enthusiasts.</li><li><b>Zen Garden and Reflexology Pathways</b>: Designed for mental and physical well-being, these areas provide spaces for meditation and relaxation.</li><li><b>BBQ Deck and Alfresco Seating</b>: Ideal for outdoor social gatherings, these spaces provide a relaxed environment for hosting friends and family.</li></ul><p>••<b>Yoga Pavilion and Meditation Zones</b>: Offering residents a chance to practice yoga or meditation in peace, these areas are designed to promote a balanced lifestyle.</p><p>••<b>Kids’ Playground</b>: A secure and well-designed play area for children to engage in fun outdoor activities.</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"452\" height=\"339\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-play-area.webp\" alt=\"sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-play-area.webp 452w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-play-area-300x225.webp 300w\" sizes=\"(max-width: 452px) 100vw, 452px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Multi-sport Courts</b>: Courts for tennis, basketball, and other outdoor sports encourage an active and engaging lifestyle for residents.</li><li><b>Party Lawns and Hobby Zones</b>: These spaces are designed for social gatherings and creative pursuits.</li><li><b>Pet Park</b>: A dedicated space for pet owners, the park ensures that furry companions can also enjoy the luxurious living environment.</li></ul><p><b>Sustainability and Eco-Conscious Features</b></p><p>Sobha Altus has been designed with sustainability at its core, reflecting Sobha Limited’s commitment to environmentally responsible development. The project has been IGBC Gold Pre-Certified, a testament to its eco-friendly features.</p><p><b>Green Living Features:</b></p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"635\" height=\"445\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-2.webp\" alt=\"sobha\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-2.webp 635w, https://dhawanproperties.in/wp-content/uploads/2025/04/sobha-2-300x210.webp 300w\" sizes=\"(max-width: 635px) 100vw, 635px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>Biophilic Design</b>: The integration of natural elements into the architectural design creates a harmonious relationship between the built environment and nature, enhancing residents' well-being.</li><li><b>Green Periphery Landscaping</b>: The project incorporates native vegetation to promote biodiversity and create a natural, peaceful setting.</li><li><b>Energy-efficient Building Design</b>: The use of high-performance glass ensures thermal insulation and noise reduction, while the layout optimizes natural lighting and cross-ventilation.</li></ul><p>These green features not only minimize the environmental impact but also enhance the overall quality of living for residents by promoting a sustainable, energy-efficient lifestyle.</p><p><b>Security and Smart Living</b></p><p>Sobha Altus offers a comprehensive suite of security features to ensure the safety of its residents. The development features state-of-the-art technology combined with physical security infrastructure.</p><p><b>Safety Features:</b></p><ul><li><b>24/7 CCTV Surveillance</b>: The entire premises are monitored by high-definition cameras, providing constant security for residents.</li><li><b>Gated Entry with Access Control</b>: The project ensures that only authorized individuals have access to the premises, providing a high level of safety.</li><li><b>Smart Elevators and Video Intercoms</b>: Technology is integrated into the building to ensure seamless communication and easy movement throughout the complex.</li><li><b>Emergency Power Backup</b>: Ensuring uninterrupted service, the development is equipped with backup power to handle power outages.</li><li><b>Fire Safety Systems</b>: The project complies with the latest fire safety norms to ensure residents' safety in case of an emergency.</li></ul><p>Sobha Altus is designed with privacy-focused planning, ensuring that homes do not face one another, and the layout minimizes shared walls to enhance both privacy and noise reduction.</p><p><b>Strategic Location – Sector 106, Dwarka Expressway</b></p><p>Sector 106, located along the Dwarka Expressway, is one of Gurgaon’s most sought-after micro-markets. The area benefits from rapid development and is becoming one of the premium residential destinations in the region.</p><p><b>Connectivity Highlights:</b></p><ul><li><b>Dwarka Expressway</b>: Offers direct connectivity to Delhi, making it an ideal location for those who commute to the capital.</li><li><b>NH-48 (Delhi-Mumbai Expressway)</b>: Provides convenient access to various parts of Gurgaon and Delhi.</li><li><b>NE-4 Expressway</b>: Offers easy access to southern Gurgaon and the Delhi border.</li><li><b>IGI Airport</b>: Only a 30-minute drive from Sobha Altus, making it convenient for frequent travelers.</li><li><b>Delhi-Mumbai Industrial Corridor (DMIC)</b>: The upcoming industrial corridor is expected to significantly boost the regional economy, making Sector 106 an attractive investment destination.</li></ul><p><b>Nearby Landmarks:</b></p><ul><li>Yashobhoomi Convention Centre</li><li>18-hole DDA Golf Course</li><li>Upcoming Diplomatic Enclave 2</li></ul><p><b>Social Infrastructure in Vicinity</b></p><p>Sector 106 is surrounded by some of Gurgaon’s finest educational, healthcare, retail, and leisure destinations.</p><p><b>Educational Institutions:</b></p><ul><li>Delhi Public School</li><li>Mount Carmel School</li><li>The Shri Ram School</li><li>Euro International School</li><li>National Law University</li><li>SGT University</li></ul><p><b>Healthcare Facilities:</b></p><ul><li>Fortis Memorial Research Institute</li><li>Artemis Hospital</li><li>Medanta – The Medicity</li><li>Aakash Healthcare</li><li>Signature Hospital</li></ul><p><b>Retail &amp; Commercial Hubs:</b></p><ul><li>Ambience Mall</li><li>Vegas Mall</li><li>Neo Centra Mall</li><li>Satya The Hive</li><li>Conscient One</li><li>Ocus Medley</li></ul><p><b>Hospitality &amp; Hotels:</b></p><ul><li>JW Marriott</li><li>Taj Vivanta</li><li>Leela Hotel</li><li>Welcomhotel by ITC</li><li>The Oberoi, Gurgaon</li></ul><p><b>Living Experience and Value Proposition</b></p><p>Sobha Altus is more than just a luxury residential tower—it’s a complete luxury ecosystem. Every element, from layout design to privacy features, clubhouse amenities, and green spaces, has been curated with the affluent, lifestyle-focused buyer in mind. The combination of ultra-premium homes, state-of-the-art amenities, and a well-connected address makes Sobha Altus an ideal place for:</p><ul><li><b>HNIs (High-Net-Worth Individuals)</b><b></b></li><li><b>NRIs</b> looking to invest in Gurgaon</li><li><b>Business professionals</b> and CXOs working in Delhi NCR</li><li><b>Families</b> seeking a high-end, long-term residence</li></ul><p><b>Conclusion</b></p><p>Sobha Altus is a landmark in Gurgaon’s luxury real estate landscape. With its focus on architectural excellence, privacy, and high-end living, it offers the perfect blend of comfort, design, and connectivity. Backed by Sobha’s brand legacy and located in one of NCR’s most promising growth corridors, it stands as a prime investment and residential opportunity.</p><p>If you seek refined living with the vibrancy of a modern gated community, Sobha Altus provides an experience that’s future-ready, nature-integrated, and undeniably elite.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "1BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "1BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sector-106-luxurious-apartments-in-dwarka-express-1bhk.pdf"
        }
      ],
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sector-106-luxurious-apartments-in-dwarka-express-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sector-106-luxurious-apartments-in-dwarka-express-4bhk.pdf"
        }
      ],
      "5BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "5BHK • Available",
          "downloadUrl": "/floor-plans/sobha-altus-sector-106-luxurious-apartments-in-dwarka-express-5bhk.pdf"
        }
      ]
    },
    "projectSpecs": {
      "landParcel": "51 Acres",
      "possession": "2028"
    },
    "agent": {
      "name": "kapil dhawan",
      "phone": "+91 99996 28400",
      "email": "Dhawanproperties2019@gmail.com",
      "image": "/professional-real-estate-agent.png"
    }
  },
  {
    "id": 6175,
    "title": "Puri Diplomatic Residences Sector 111 Luxurious Apartments",
    "location": "Sector 111, Gurugram, Haryana",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": 2000,
    "yearBuilt": 2025,
    "type": "residential",
    "status": "new-launch",
    "tag": "New Launch",
    "image": "/placeholder.svg",
    "amenities": [
      "Swimming Pool",
      "Gym",
      "Garden",
      "Security",
      "Parking",
      "Mini Theatre"
    ],
    "description": "<a href=\"https://www.facebook.com/profile.php?id=61574547525991\" target=\"_blank\">\n\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://x.com/properties2019\" target=\"_blank\">\n\t\t\t\t\t\tTwitter\n\t\t\t\t\t\t<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.youtube.com/@kapildhawan1576\" target=\"_blank\">\n\t\t\t\t\t\tYoutube\n\t\t\t\t\t\t<svg viewBox=\"0 0 576 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z\"></path></svg>\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"https://www.instagram.com/dhawanproperties2019/\" target=\"_blank\">\n\t\t\t\t\t\tInstagram\n\t\t\t\t\t\t<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg>\t\t\t\t\t</a>\n\t\t<p><a href=\"https://dhawanproperties.in/puri-diplomatic-residences/\"><b>Puri Diplomatic Residences: Redefining Luxury Living on Dwarka Expressway,Gurgaon</b></a><b></b></p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"499\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900-1024x499.jpg\" alt=\"puri diplomatic residences\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900-1024x499.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900-300x146.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900-768x374.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900-1536x748.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/05/dbfb2b2f057b40a68f0a843dd44e20db_sm_1848X900.jpg 1848w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>Nestled in the flourishing corridor of Sector 111, Gurgaon, <b>Puri Diplomatic Residences</b> is more than just a residential project — it’s a curated lifestyle experience. With the rapidly transforming urban landscape along the Dwarka Expressway, this new offering by the well-established <b>Puri Constructions Pvt. Ltd.</b> sets the benchmark for ultra-luxury living in NCR. Whether you're a discerning homebuyer seeking opulence or an investor looking for long-term growth, Puri Diplomatic Residences stands out as a compelling choice.</p><p><b>About the Developer: A Legacy of Excellence</b></p><p>Established over five decades ago, <b>Puri Constructions</b> is synonymous with premium real estate developments across North India. The group has delivered several landmark residential and commercial projects, including <i>The Palm Springs</i>, <i>Aanandvilas</i>, and <i>Diplomatic Greens</i>. Known for its commitment to quality construction, customer satisfaction, and sustainable development, Puri Constructions has built a reputation for innovation in both design and construction techniques.</p><p>With a strong focus on design innovation, sustainability, and construction excellence, Puri Diplomatic Residences is their latest flagship venture — a project that reflects the evolving aspirations of modern India. The brand is committed to delivering luxury living spaces that transcend conventional residential complexes, blending world-class design, state-of-the-art technology, and a thriving community.</p>\t\t\n\t\t\t\t\t<h2>Project Overview: An Icon of Urban Elegance</h2>\t\t\t\t\n\t\t\t\t\t<h2>Video</h2>\t\t\t\t\n\t\thttps://dhawanproperties.in/wp-content/uploads/2025/05/245971-Puri-Diplomatic-Residences-Puri-Diplomatic-Residences-video-Sector-111-Gurgaon.mp4<p>Spread across a sprawling <b>9.07-acre</b> parcel of land (with some sources suggesting phased development across 5.4 to 20+ acres), the project features:</p><ul><li><b>6 magnificent high-rise towers</b>.</li><li><b>G+32 floors</b>, offering expansive views of the city skyline.</li><li><b>Approx. 324 to 692 apartments</b>, depending on the final development phase.</li><li>Configurations of <b>3 BHK</b> and <b>4 BHK</b> units, each designed with a servant quarter and luxurious finishes.</li></ul><p>This ultra-premium residential enclave combines refined interiors, cutting-edge architecture, and strategic connectivity — making it one of the most sought-after addresses in the NCR. Designed to offer the perfect balance of privacy, luxury, and modern convenience, <b>Puri Diplomatic Residences</b> has been thoughtfully planned to cater to the evolving needs of high-net-worth individuals and global citizens.</p><p><b>Apartment Highlights: Luxury in Every Detail</b></p><p>Each apartment at Puri Diplomatic Residences has been designed to reflect exclusivity and indulgence. From the moment you step in, you’ll notice the attention to detail and superior craftsmanship.</p><p><b>Key Apartment Features</b>:</p><ul><li>Fully <b>air-conditioned interiors</b>.</li><li><b>Imported stone flooring</b> and <b>premium wall finishes</b>.</li><li><b>Modular kitchens</b> with contemporary fittings.</li><li><b>Master bedrooms</b> with <b>laminated wooden flooring</b>.</li><li>Continuous <b>balconies</b> with expansive decks, ideal for private outdoor lounging.</li><li><b>Smart home automation</b> for lighting, climate, and security.</li><li>Select units include <b>pooja rooms</b>, <b>powder rooms</b>, and <b>separate servant quarters</b>.</li></ul><p>The design prioritizes natural light, cross-ventilation, and intelligent use of space, ensuring both aesthetic appeal and everyday functionality. The units are designed with meticulous attention to detail, with materials sourced from leading global brands, ensuring both quality and longevity.</p><p><b>Tower Features That Set It Apart</b></p><p>Each of the six towers comes equipped with top-notch infrastructure and facilities:</p><ul><li><b>Five towers</b> feature <b>4 apartments per floor</b> with four high-speed elevators.</li><li><b>One ultra-premium tower</b> offers just <b>2 apartments per floor</b> and three private elevators.</li><li><b>Double-height air-conditioned lobbies</b> (up to 18 ft).</li><li><b>Sculptured staircases</b> for safe and aesthetic access.</li><li>Secure <b>access control</b> at every entry point.</li></ul><p>These features ensure privacy, exclusivity, and convenience at every level. The ultra-premium tower offers unparalleled privacy, with just two units per floor, making it one of the most exclusive offerings in the area.</p><p><b>Amenity-Rich Living: Beyond Expectations</b></p><p>At <b>Puri Diplomatic Residences</b>, the lifestyle experience doesn’t end at your apartment door. The project boasts an extensive array of world-class amenities, catering to every need — whether you're relaxing, working from home, or staying active.</p>\t\t\n\t\t\t\t\t<h2>Clubhouse & Wellness Zone:</h2>\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"533\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2-1024x533.jpg\" alt=\"puri\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2-1024x533.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2-300x156.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2-768x400.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2-1536x800.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/05/Puri-The-Diplomatic-Residence-2.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li><b>65,000+ sq. ft. luxury clubhouse</b>.</li><li><b>Fully-equipped gymnasium</b>, spa, and yoga/meditation lounge.</li><li><b>Indoor badminton</b> and two <b>squash courts</b>.</li><li><b>Pro-level boxing ring</b> for fitness enthusiasts.</li><li><b>Business center</b>, private meeting rooms, and co-working areas.</li><li><b>Mini theatre</b> and indoor games room for leisure and entertainment.</li><li><p><b>Indoor and rooftop swimming pools</b>.</p></li></ul>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"496\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/banner2.jpg-1024x496.webp\" alt=\"puri\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/banner2.jpg-1024x496.webp 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/banner2.jpg-300x145.webp 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/banner2.jpg-768x372.webp 768w, https://dhawanproperties.in/wp-content/uploads/2025/05/banner2.jpg.webp 1366w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p><b>Outdoor Amenities:</b></p><ul><li>Landscaped podiums inspired by <b>Singapore-style gardens</b>.</li><li><b>Jogging trails</b>, seating decks, and sculpted lawns.</li><li><b>Children’s play areas</b>, outdoor gym, and poolside deck.</li></ul><p>••<b>Terrace party lawns</b> and banquet areas for private events.</p>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"597\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/20240422153030_slider_image_3_puridiplomaticresidencesflat.jpg\" alt=\"puri\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/20240422153030_slider_image_3_puridiplomaticresidencesflat.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/20240422153030_slider_image_3_puridiplomaticresidencesflat-300x175.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/20240422153030_slider_image_3_puridiplomaticresidencesflat-768x448.jpg 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<ul><li>Ample open <b>green spaces</b> to connect with nature.</li></ul><p><b>Additional Facilities:</b></p><ul><li><b>Wi-Fi zones</b> and smart access controls.</li><li><b>5-tier security system</b> with 24x7 surveillance.</li><li>Concierge desk, <b>EV charging stations</b>, and ample parking.</li><li><b>Power backup</b> for uninterrupted comfort.</li><li><b>Fire sprinklers</b> and advanced safety systems.</li></ul><p>This blend of wellness, entertainment, and utility makes the project self-sufficient, ensuring that residents rarely need to step out for their daily needs or recreational desires. Whether you're looking to unwind after a busy day or host an event, the amenities at Puri Diplomatic Residences provide the perfect setting for every occasion.</p><p><b>Location Advantages: Where Connectivity Meets Convenience</b></p><p>Located right on the Dwarka Expressway, <b>Sector 111</b> is fast emerging as a premium destination for homeowners. With seamless access to major hubs in Delhi and Gurgaon, this location combines urban convenience with a peaceful, well-planned environment.</p><p><b>Proximity Highlights:</b></p><ul><li><b>3.5 km</b> from <b>Dwarka Sector 21 Metro Station</b>.</li><li><b>5–10 minutes</b> from <b>Indira Gandhi International Airport</b>.</li><li>Direct approach to <b>NH-48</b>, Western Peripheral Expressway, and proposed <b>Metro corridor</b>.</li><li>Just minutes away from the upcoming <b>Diplomatic Enclave II</b> and <b>18-hole golf course</b>.</li></ul><p><b>Nearby Business &amp; Retail Hubs:</b></p><ul><li>Close to <b>DLF Cyber City</b>, <b>Cyber Park</b>, <b>Udyog Vihar</b>, and <b>Aerocity</b>.</li><li>Within reach of major malls like <b>Ambience Mall</b>, <b>Vegas Mall</b>, and <b>Gurgaon Dreamz</b>.</li><li>Near prominent event venues such as <b>Yashobhoomi Convention Centre</b> and <b>Bharat Vandana Park</b>.</li></ul><p><b>Education &amp; Healthcare Access:</b></p><ul><li>Leading schools nearby: <b>Delhi Public School</b>, <b>Presidium</b>, <b>Venkatesh School</b>, <b>Royal Oak International</b>.</li><li>Top healthcare institutions: <b>Manipal Hospital</b>, <b>Metro Hospital</b>, and <b>Park Hospital</b>.</li></ul><p>This location strikes the perfect balance between urban vibrancy and suburban peace — ideal for both families and professionals. Its proximity to business hubs makes it particularly attractive to professionals working in the corporate corridors of Gurgaon and Delhi, while its tranquil surroundings provide a sanctuary from the hustle and bustle of the city.</p><p><b>Pricing and Investment Insight</b></p><p><b>Puri Diplomatic Residences</b> caters to an elite segment of buyers, with pricing that reflects the exclusivity of its offerings. The pricing of these luxury homes ensures that only those seeking the best of the best in residential living will find themselves at home in this prestigious development.</p><table cellspacing=\"0\" cellpadding=\"0\"><tbody><tr><td valign=\"top\"><p><b>Unit Type</b><b></b></p></td><td valign=\"top\"><p><b>Size (Sq. Ft.)</b><b></b></p></td><td valign=\"top\"><p><b>Starting Price</b><b></b></p></td></tr><tr><td valign=\"top\"><p>3 BHK</p></td><td valign=\"top\"><p>2282</p></td><td valign=\"top\"><p>₹3.95 Cr</p></td></tr><tr><td valign=\"top\"><p>3 BHK</p></td><td valign=\"top\"><p>2380</p></td><td valign=\"top\"><p>₹4.50 Cr</p></td></tr><tr><td valign=\"top\"><p>3 BHK</p></td><td valign=\"top\"><p>2440</p></td><td valign=\"top\"><p>₹4.69 Cr</p></td></tr><tr><td valign=\"top\"><p>4 BHK</p></td><td valign=\"top\"><p>Up to 3475</p></td><td valign=\"top\"><p>On Request</p></td></tr></tbody></table>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"1024\" height=\"640\" src=\"https://dhawanproperties.in/wp-content/uploads/2025/05/12-1024x640.jpg\" alt=\"puri\" srcset=\"https://dhawanproperties.in/wp-content/uploads/2025/05/12-1024x640.jpg 1024w, https://dhawanproperties.in/wp-content/uploads/2025/05/12-300x188.jpg 300w, https://dhawanproperties.in/wp-content/uploads/2025/05/12-768x480.jpg 768w, https://dhawanproperties.in/wp-content/uploads/2025/05/12-1536x960.jpg 1536w, https://dhawanproperties.in/wp-content/uploads/2025/05/12.jpg 1542w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" />\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t<p>The developer offers flexible payment options, including construction-linked payment plans, making ownership more accessible. A booking amount of ₹20 Lacs secures your home in one of Gurgaon's most promising projects. Whether you're purchasing for personal use or as an investment, the potential for long-term capital appreciation is strong due to the area's rapid infrastructure development and the growing demand for high-end living spaces.</p><p><b>Why Choose Puri Diplomatic Residences?</b></p><p>This project isn’t just about buying a home — it’s about investing in a lifestyle. Here are a few reasons why Puri Diplomatic Residences stands out:</p><ul><li><b>Developed by a trusted name</b> with a 50+ year legacy.</li><li><b>World-class amenities</b> across indoor and outdoor zones.</li><li><b>Prime location</b> with unmatched connectivity to key areas in Delhi and Gurgaon.</li><li><b>Future-ready</b> with smart home features and sustainable design.</li><li><b>High resale and rental potential</b> due to proximity to business hubs and major infrastructure developments.</li></ul><p>Whether you're buying for personal use or long-term capital appreciation, Puri Diplomatic Residences offers the kind of value few projects in NCR can match. The developer's commitment to quality and customer satisfaction ensures that your investment will continue to appreciate as the neighborhood develops further.</p><p><b>Final Thoughts: Live the Life You Deserve</b></p><p><b>Puri Diplomatic Residences</b> is crafted for those who appreciate the finer things in life — be it design, connectivity, or lifestyle. With everything from world-class architecture to community-centric amenities, it promises a new chapter of luxurious living in Gurgaon. The project exemplifies the future of high-end living in a city that is rapidly evolving into one of the most dynamic business and residential hubs in India.</p><p>If you're ready to upgrade to a residence that reflects your success, now is the time to explore this opportunity. Experience the lifestyle you deserve with Puri Diplomatic Residences — where luxury meets convenience, and your dream home becomes a reality.</p>",
    "images": [
      "/placeholder.svg"
    ],
    "floorPlans": {
      "3BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "3BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residences-sector-111-luxurious-apartments-3bhk.pdf"
        }
      ],
      "4BHK": [
        {
          "image": "/modern-villa-floor-plan.png",
          "label": "4BHK • Available",
          "downloadUrl": "/floor-plans/puri-diplomatic-residences-sector-111-luxurious-apartments-4bhk.pdf"
        },
  
    {
      "id": 6176,
      "title": "Luxury Apartment Complex 1",
      "location": "Sector 46 45, Gurugram, Haryana",
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
      "location": "Sector 48 50, Gurugram, Haryana",
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
    },
    {
      "id": 6179,
      "title": "Retail Shop 4",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1000,
      "yearBuilt": 2023,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6180,
      "title": "Studio Apartment 5",
      "location": "Sector 50 47, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 1050,
      "yearBuilt": 2026,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6181,
      "title": "Luxury Apartment Complex 6",
      "location": "Sector 51 45, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 2800,
      "yearBuilt": 2024,
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
      "id": 6182,
      "title": "Modern Office Space 7",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 5350,
      "yearBuilt": 2024,
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
      "id": 6183,
      "title": "Premium Villa 8",
      "location": "Sector 53 50, Gurugram, Haryana",
      "bedrooms": 5,
      "bathrooms": 6,
      "area": 4900,
      "yearBuilt": 2027,
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
    },
    {
      "id": 6184,
      "title": "Retail Shop 9",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1250,
      "yearBuilt": 2022,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6185,
      "title": "Studio Apartment 10",
      "location": "Sector 55 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 1300,
      "yearBuilt": 2025,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6186,
      "title": "Luxury Apartment Complex 11",
      "location": "Sector 56 45, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 4,
      "area": 3050,
      "yearBuilt": 2026,
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
      "id": 6187,
      "title": "Modern Office Space 12",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 5600,
      "yearBuilt": 2023,
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
      "id": 6188,
      "title": "Premium Villa 13",
      "location": "Sector 58 50, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 5,
      "area": 5150,
      "yearBuilt": 2026,
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
    },
    {
      "id": 6189,
      "title": "Retail Shop 14",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 1500,
      "yearBuilt": 2024,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6190,
      "title": "Studio Apartment 15",
      "location": "Sector 60 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 1550,
      "yearBuilt": 2024,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6191,
      "title": "Luxury Apartment Complex 16",
      "location": "Sector 61 45, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": 3300,
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
      "id": 6192,
      "title": "Modern Office Space 17",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 3,
      "area": 5850,
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
      "id": 6193,
      "title": "Premium Villa 18",
      "location": "Sector 63 50, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 4,
      "area": 5400,
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
    },
    {
      "id": 6194,
      "title": "Retail Shop 19",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1750,
      "yearBuilt": 2023,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6195,
      "title": "Studio Apartment 20",
      "location": "Sector 45 47, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 800,
      "yearBuilt": 2026,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6196,
      "title": "Luxury Apartment Complex 21",
      "location": "Sector 46 45, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 2550,
      "yearBuilt": 2024,
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
      "id": 6197,
      "title": "Modern Office Space 22",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 5100,
      "yearBuilt": 2024,
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
      "id": 6198,
      "title": "Premium Villa 23",
      "location": "Sector 48 50, Gurugram, Haryana",
      "bedrooms": 5,
      "bathrooms": 6,
      "area": 4650,
      "yearBuilt": 2027,
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
    },
    {
      "id": 6199,
      "title": "Retail Shop 24",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1000,
      "yearBuilt": 2022,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6200,
      "title": "Studio Apartment 25",
      "location": "Sector 50 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 1050,
      "yearBuilt": 2025,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6201,
      "title": "Luxury Apartment Complex 26",
      "location": "Sector 51 45, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 4,
      "area": 2800,
      "yearBuilt": 2026,
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
      "id": 6202,
      "title": "Modern Office Space 27",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 5350,
      "yearBuilt": 2023,
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
      "id": 6203,
      "title": "Premium Villa 28",
      "location": "Sector 53 50, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 5,
      "area": 4900,
      "yearBuilt": 2026,
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
    },
    {
      "id": 6204,
      "title": "Retail Shop 29",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 1250,
      "yearBuilt": 2024,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6205,
      "title": "Studio Apartment 30",
      "location": "Sector 55 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 1300,
      "yearBuilt": 2024,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6206,
      "title": "Luxury Apartment Complex 31",
      "location": "Sector 56 45, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": 3050,
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
      "id": 6207,
      "title": "Modern Office Space 32",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 3,
      "area": 5600,
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
      "id": 6208,
      "title": "Premium Villa 33",
      "location": "Sector 58 50, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 4,
      "area": 5150,
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
    },
    {
      "id": 6209,
      "title": "Retail Shop 34",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1500,
      "yearBuilt": 2023,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6210,
      "title": "Studio Apartment 35",
      "location": "Sector 60 47, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 1550,
      "yearBuilt": 2026,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6211,
      "title": "Luxury Apartment Complex 36",
      "location": "Sector 61 45, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 3300,
      "yearBuilt": 2024,
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
      "id": 6212,
      "title": "Modern Office Space 37",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 5850,
      "yearBuilt": 2024,
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
      "id": 6213,
      "title": "Premium Villa 38",
      "location": "Sector 63 50, Gurugram, Haryana",
      "bedrooms": 5,
      "bathrooms": 6,
      "area": 5400,
      "yearBuilt": 2027,
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
    },
    {
      "id": 6214,
      "title": "Retail Shop 39",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1750,
      "yearBuilt": 2022,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6215,
      "title": "Studio Apartment 40",
      "location": "Sector 45 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 800,
      "yearBuilt": 2025,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6216,
      "title": "Luxury Apartment Complex 41",
      "location": "Sector 46 45, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 4,
      "area": 2550,
      "yearBuilt": 2026,
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
      "id": 6217,
      "title": "Modern Office Space 42",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 5100,
      "yearBuilt": 2023,
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
      "id": 6218,
      "title": "Premium Villa 43",
      "location": "Sector 48 50, Gurugram, Haryana",
      "bedrooms": 4,
      "bathrooms": 5,
      "area": 4650,
      "yearBuilt": 2026,
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
    },
    {
      "id": 6219,
      "title": "Retail Shop 44",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 2,
      "area": 1000,
      "yearBuilt": 2024,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6220,
      "title": "Studio Apartment 45",
      "location": "Sector 50 47, Gurugram, Haryana",
      "bedrooms": 1,
      "bathrooms": 1,
      "area": 1050,
      "yearBuilt": 2024,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
    },
    {
      "id": 6221,
      "title": "Luxury Apartment Complex 46",
      "location": "Sector 51 45, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 3,
      "area": 2800,
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
      "id": 6222,
      "title": "Modern Office Space 47",
      "location": "Cyber City, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 3,
      "area": 5350,
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
      "id": 6223,
      "title": "Premium Villa 48",
      "location": "Sector 53 50, Gurugram, Haryana",
      "bedrooms": 3,
      "bathrooms": 4,
      "area": 4900,
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
    },
    {
      "id": 6224,
      "title": "Retail Shop 49",
      "location": "Mall Road, Gurugram, Haryana",
      "bedrooms": 0,
      "bathrooms": 1,
      "area": 1250,
      "yearBuilt": 2023,
      "type": "commercial",
      "status": "ready",
      "tag": "Retail Space",
      "image": "/retail-shop.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "High Foot Traffic",
        "Loading Area"
      ],
      "description": "Prime retail space in high foot traffic area with excellent visibility."
    },
    {
      "id": 6225,
      "title": "Studio Apartment 50",
      "location": "Sector 55 47, Gurugram, Haryana",
      "bedrooms": 2,
      "bathrooms": 2,
      "area": 1300,
      "yearBuilt": 2026,
      "type": "residential",
      "status": "ready",
      "tag": "Studio",
      "image": "/studio-apartment.png",
      "amenities": [
        "Parking",
        "Security",
        "Power Backup",
        "Garden",
        "24/7 Water"
      ],
      "description": "Compact studio apartment perfect for singles or small families."
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
