import { writeFileSync } from 'fs'
import { join } from 'path'

// Mock properties data for sitemap generation
const properties = [
  { id: 18, title: "Max Estate 360", image: "/modern-apartment-building.png" },
  { id: 1, title: "Modern Studio Apartment", image: "/luxury-modern-residence.png" },
  { id: 2, title: "Family Villa with Garden", image: "/comfortable-family-house.png" },
  { id: 3, title: "Commercial Office Space", image: "/modern-glass-office.png" },
  { id: 6176, title: "Property 6176", image: null },
  { id: 6177, title: "Property 6177", image: null },
  { id: 6178, title: "Property 6178", image: null },
]

// Generate comprehensive sitemap
function generateSitemap() {
  const baseUrl = 'https://dhavanproperties.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/properties', priority: '0.9', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  ]

  const blogPosts = [
    'how-to-verify-property-documents',
    'neighborhood-checklist-before-you-buy',
    '10-questions-to-ask-your-real-estate-agent',
    'real-estate-market-trends-2024',
    'first-time-home-buyer-guide',
    'home-loan-tips-and-tricks',
  ]

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  })

  // Add property pages
  properties.forEach(property => {
    sitemap += `  <url>
    <loc>${baseUrl}/properties/${property.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>`
    
    if (property.image) {
      sitemap += `
    <image:image>
      <image:loc>${baseUrl}${property.image}</image:loc>
      <image:title>${property.title}</image:title>
    </image:image>`
    }
    
    sitemap += `
  </url>
`
  })

  // Add blog posts
  blogPosts.forEach(slug => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`
  })

  sitemap += `</urlset>`

  // Write sitemap to public folder
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
  writeFileSync(sitemapPath, sitemap)
  
  console.log(`✅ Sitemap generated with ${staticPages.length + properties.length + blogPosts.length} URLs`)
  console.log(`📁 Saved to: ${sitemapPath}`)
}

// Run the script
generateSitemap()
