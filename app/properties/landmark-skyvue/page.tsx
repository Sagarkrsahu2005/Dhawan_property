import { getPropertyBySlug } from "@/lib/property-data"
import { notFound } from "next/navigation"
import dynamic from "next/dynamic"

// Dynamic import to avoid hydration issues
const PropertyPageContent = dynamic(() => import("@/app/properties/[id]/page"), {
  ssr: false
})

export default async function LandmarkSkyvuePage() {
  const property = getPropertyBySlug("landmark-skyvue")
  
  if (!property) {
    notFound()
  }

  // Use the existing property page component but with slug-based property data
  return <PropertyPageContent propertyData={property} />
}

export async function generateMetadata() {
  const property = getPropertyBySlug("landmark-skyvue")
  
  if (!property) {
    return {
      title: "Property Not Found"
    }
  }

  return {
    title: `${property.title} - ${property.location} | Dhawan Properties`,
    description: property.description,
    keywords: `${property.title}, ${property.location}, ${property.type}, ${property.bedrooms} BHK, ${property.status}`,
    openGraph: {
      title: `${property.title} - ${property.location}`,
      description: property.description,
      images: [property.image],
      url: `https://dhawanproperties.com/properties/landmark-skyvue`
    }
  }
}
