import type { Metadata } from "next"
import { generateSEOMetadata, defaultSEOKeywords } from "@/lib/seo-utils"

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Dhawan Properties | Get Expert Real Estate Consultation",
  description: "Contact Dhawan Properties for expert real estate consultation. Get in touch for property buying, selling, renting guidance. Call +91-9999999999 or visit our office for personalized property solutions.",
  keywords: [
    ...defaultSEOKeywords,
    "contact dhawan properties",
    "real estate consultation",
    "property consultation",
    "property inquiry",
    "real estate contact",
    "property advisor contact",
    "real estate office",
    "property help",
    "real estate support",
    "property guidance",
    "real estate assistance",
    "property expert contact",
    "real estate phone number",
    "property office address",
    "real estate email"
  ],
  canonicalUrl: "/contact",
  ogImage: "/dhawan-properties-logo.png",
})
