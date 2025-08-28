import type { Metadata } from "next"

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogType?: "website" | "article" | "book" | "profile"
  ogImage?: string
  twitterCard?: "summary_large_image" | "summary" | "player" | "app"
  structuredData?: any
}

export function generateSEOMetadata(data: SEOData, baseUrl: string = "https://dhavanproperties.com"): Metadata {
  const fullUrl = data.canonicalUrl ? `${baseUrl}${data.canonicalUrl}` : baseUrl
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords?.join(", "),
    
    // Open Graph
    openGraph: {
      title: data.title,
      description: data.description,
      url: fullUrl,
      type: (data.ogType as "website" | "article") || "website",
      images: data.ogImage ? [
        {
          url: data.ogImage,
          width: 1200,
          height: 630,
          alt: data.title,
        }
      ] : [],
      siteName: "Dhawan Properties",
      locale: "en_IN",
    },
    
    // Twitter
    twitter: {
      card: (data.twitterCard as "summary_large_image" | "summary") || "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.ogImage ? [data.ogImage] : [],
      creator: "@dhavanproperties",
      site: "@dhavanproperties",
    },
    
    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
    
    // Additional meta tags
    authors: [{ name: "Dhawan Properties" }],
    creator: "Dhawan Properties",
    publisher: "Dhawan Properties",
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    // Verification
    verification: {
      google: "AZhUgcfdRva2q2lQc6HqJUyTYfg9sbeRM4NaiRwhj7M"
    },
    
    // Icons
    icons: {
      icon: "/dhawan-properties-logo.png",
      apple: "/dhawan-properties-logo.png",
    },
  }
}

export function generatePropertySEO(property: any): SEOData {
  const title = `${property.title} - ${property.location} | Dhawan Properties`
  const description = `${property.description.substring(0, 150)}... ${property.bedrooms} BHK ${property.type} property in ${property.location}. Area: ${property.area} sq ft. Contact Dhawan Properties for viewing.`
  
  const keywords = [
    property.title.toLowerCase(),
    property.location.toLowerCase(),
    `${property.bedrooms} bhk`,
    property.type,
    property.status,
    "real estate",
    "property",
    "dhawan properties",
    property.location.split(",")[0]?.toLowerCase(),
    property.location.split(",")[1]?.trim().toLowerCase(),
    ...property.amenities.slice(0, 5).map((a: string) => a.toLowerCase()),
  ]
  
  return {
    title,
    description,
    keywords,
    canonicalUrl: `/properties/${property.id}`,
    ogType: "article",
    ogImage: property.image,
    structuredData: generatePropertyStructuredData(property),
  }
}

export function generatePropertyStructuredData(property: any) {
  const baseUrl = "https://dhavanproperties.com"
  
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dhawan Properties",
    "url": baseUrl,
    "logo": `${baseUrl}/dhawan-properties-logo.png`,
    "description": "Premium real estate services with verified listings, local expertise, and end-to-end support.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9999999999",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://facebook.com/dhavanproperties",
      "https://twitter.com/dhavanproperties",
      "https://instagram.com/dhavanproperties"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Accommodation",
        "name": property.title,
        "description": property.description,
        "image": property.image,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": property.location
        },
        "numberOfRooms": property.bedrooms,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": property.area,
          "unitCode": "SQM"
        },
        "amenityFeature": property.amenities.map((amenity: string) => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity
        }))
      }
    }
  }
}

export function generateBlogSEO(title: string, excerpt: string, slug: string): SEOData {
  return {
    title: `${title} | Dhawan Properties Blog`,
    description: excerpt,
    keywords: [
      "real estate blog",
      "property tips",
      "dhawan properties",
      "real estate advice",
      "property investment",
      ...title.toLowerCase().split(" ").slice(0, 5)
    ],
    canonicalUrl: `/blog/${slug}`,
    ogType: "article",
  }
}

export const defaultSEOKeywords = [
  "dhawan properties",
  "real estate",
  "property for sale",
  "property for rent",
  "buy property",
  "sell property",
  "residential property",
  "commercial property",
  "property investment",
  "real estate agent",
  "property dealer",
  "property consultant",
  "verified listings",
  "premium properties",
  "luxury homes",
  "apartments",
  "villas",
  "flats",
  "independent houses",
  "plots",
  "property in gurgaon",
  "property in delhi",
  "property in noida",
  "property in mumbai",
  "property in bangalore",
  "property in pune",
  "property in chennai",
  "property in hyderabad",
  "property in kolkata",
  "property in ahmedabad"
]
