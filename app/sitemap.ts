import { MetadataRoute } from 'next'
import { properties } from '@/lib/property-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dhavanproperties.com'
  
  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic property routes
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog routes (you can expand this based on your blog posts)
  const blogRoutes = [
    'how-to-verify-property-documents',
    'neighborhood-checklist-before-you-buy',
    '10-questions-to-ask-your-real-estate-agent',
    'real-estate-market-trends-2024',
    'first-time-home-buyer-guide',
    'home-loan-tips-and-tricks',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...propertyRoutes, ...blogRoutes]
}
