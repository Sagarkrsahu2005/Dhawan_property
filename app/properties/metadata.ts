import type { Metadata } from "next"
import { generateSEOMetadata, defaultSEOKeywords } from "@/lib/seo-utils"

export const metadata: Metadata = generateSEOMetadata({
  title: "Properties for Sale & Rent | Dhawan Properties - Verified Real Estate Listings",
  description: "Browse 1000+ verified property listings. Find residential & commercial properties, apartments, villas, plots for sale & rent. Best deals with expert guidance from Dhawan Properties.",
  keywords: [
    ...defaultSEOKeywords,
    "properties for sale",
    "properties for rent",
    "verified property listings",
    "residential properties",
    "commercial properties",
    "apartments for sale",
    "villas for sale",
    "independent houses",
    "property search",
    "real estate listings",
    "property finder",
    "buy property online",
    "rent property online",
    "property catalogue",
    "premium properties",
    "luxury properties",
    "affordable properties"
  ],
  canonicalUrl: "/properties",
  ogImage: "/modern-apartment-building.png",
})
