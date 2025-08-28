import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dhawan Properties - Your Trusted Real Estate Partner",
  description:
    "Premium real estate services with verified listings, local expertise, and end-to-end support. Find your dream property with Dhawan Properties.",
  generator: "v0.app",
    verification: {
    google: "AZhUgcfdRva2q2lQc6HqJUyTYfg9sbeRM4NaiRwhj7M"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
