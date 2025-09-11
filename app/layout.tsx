import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import "./globals.css"
import { generateSEOMetadata, defaultSEOKeywords } from "@/lib/seo-utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dhawan Properties",
  "url": "https://www.dhawanproperties.com",
  "logo": "https://www.dhawanproperties.com/dhawan-properties-logo.png",
  "description": "Premium real estate services with verified listings, local expertise, and end-to-end support. Find your dream property with Dhawan Properties.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9999999999",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.facebook.com/dhawanpropertis",
    "https://www.instagram.com/dhawanproperties2019?igsh=MWs5emJ5aWdoNWxjZg=="
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "India"
  },
  "areaServed": [
    "Delhi", "Gurgaon", "Noida", "Mumbai", "Bangalore", "Pune", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad"
  ]
}

export const metadata: Metadata = generateSEOMetadata({
  title: "Dhawan Properties - Premium Real Estate Services | Buy, Sell & Rent Properties",
  description: "Discover premium real estate services with Dhawan Properties. Find verified residential & commercial properties, luxury homes, apartments, villas across major cities. Expert consultation & end-to-end support.",
  keywords: [
    ...defaultSEOKeywords,
    "trusted real estate partner",
    "property consultation",
    "luxury real estate",
    "verified property listings",
    "end-to-end property services"
  ],
  canonicalUrl: "/",
  ogImage: "/dhawan-properties-logo.png",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17548043838"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17548043838');
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d69e2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Dhawan Properties" />
        <link rel="apple-touch-icon" href="/dhawan-properties-logo.png" />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
