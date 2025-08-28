import type { Metadata } from "next"
import { generateSEOMetadata, defaultSEOKeywords } from "@/lib/seo-utils"

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Dhawan Properties | 15+ Years of Real Estate Excellence",
  description: "Learn about Dhawan Properties - Your trusted real estate partner for 15+ years. Expert team, verified listings, and end-to-end property services across India. Meet our professional real estate consultants.",
  keywords: [
    ...defaultSEOKeywords,
    "about dhawan properties",
    "real estate company profile",
    "property consultants",
    "real estate experts",
    "property advisors",
    "real estate team",
    "property company history",
    "real estate experience",
    "trusted property dealer",
    "professional real estate services",
    "property management company",
    "real estate agency",
    "property consultation experts",
    "experienced property advisors"
  ],
  canonicalUrl: "/about",
  ogImage: "/professional-real-estate-agent.png",
})
