import type { Metadata } from "next"
import { properties } from "@/lib/property-data"
import { generatePropertySEO, generateSEOMetadata } from "@/lib/seo-utils"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = properties.find(p => p.id.toString() === params.id)
  
  if (!property) {
    return generateSEOMetadata({
      title: "Property Not Found | Dhawan Properties",
      description: "The requested property listing was not found. Browse our extensive collection of verified properties for sale and rent.",
      canonicalUrl: `/properties/${params.id}`,
    })
  }

  const seoData = generatePropertySEO(property)
  return generateSEOMetadata(seoData)
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }))
}
