import type { Metadata } from "next"
import { generateSEOMetadata, defaultSEOKeywords } from "@/lib/seo-utils"

export const metadata: Metadata = generateSEOMetadata({
  title: "Real Estate Blog - Property Tips, Market Insights & Investment Guide | Dhawan Properties",
  description: "Read expert real estate insights, property investment tips, market trends, legal guides, and buying/selling advice from Dhawan Properties. Stay updated with latest property news and tips.",
  keywords: [
    ...defaultSEOKeywords,
    "real estate blog",
    "property blog",
    "real estate tips",
    "property investment tips",
    "real estate market insights",
    "property buying guide",
    "property selling guide",
    "real estate news",
    "property market trends",
    "real estate advice",
    "property investment guide",
    "real estate legal guide",
    "property documents verification",
    "neighborhood guide",
    "home buying tips",
    "property investment strategies",
    "real estate market analysis"
  ],
  canonicalUrl: "/blog",
  ogImage: "/modern-apartment-building.png",
})
