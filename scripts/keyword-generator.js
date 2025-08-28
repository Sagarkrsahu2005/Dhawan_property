/**
 * Keyword Generator for Real Estate SEO
 * Run this script to generate hundreds of targeted keywords automatically
 */

// Base data for keyword generation
const locations = {
  primary: ['gurgaon', 'delhi', 'noida', 'mumbai', 'bangalore', 'pune', 'chennai', 'hyderabad', 'kolkata', 'ahmedabad'],
  gurgaonSectors: ['sector 1', 'sector 2', 'sector 3', 'sector 4', 'sector 5', 'dlf city', 'cyber city', 'mg road', 'golf course road', 'sohna road'],
  delhiAreas: ['connaught place', 'karol bagh', 'rohini', 'dwarka', 'janakpuri', 'lajpat nagar', 'south delhi', 'north delhi', 'east delhi', 'west delhi'],
  noidaAreas: ['sector 18', 'sector 62', 'sector 16', 'sector 15', 'greater noida', 'noida extension', 'yamuna expressway']
}

const propertyTypes = [
  'apartments', 'flats', 'villas', 'independent houses', 'builder floors', 
  'penthouses', 'studio apartments', 'duplex', 'triplex', 'farmhouses',
  'commercial property', 'office spaces', 'retail spaces', 'warehouses',
  'plots', 'residential plots', 'commercial plots', 'industrial plots'
]

const bhkTypes = ['1 bhk', '2 bhk', '3 bhk', '4 bhk', '5 bhk', '6 bhk', 'studio']

const intentions = [
  'for sale', 'for rent', 'for lease', 'for investment', 'for resale',
  'to buy', 'to rent', 'to invest', 'booking open', 'new launch'
]

const qualifiers = [
  'luxury', 'premium', 'affordable', 'budget', 'cheap', 'expensive',
  'ready to move', 'under construction', 'new', 'resale', 'furnished',
  'semi furnished', 'unfurnished', 'spacious', 'compact', 'modern'
]

const amenities = [
  'swimming pool', 'gym', 'clubhouse', 'garden', 'parking', 'lift',
  'security', 'power backup', 'water supply', 'metro connectivity',
  'mall nearby', 'school nearby', 'hospital nearby', 'park view',
  'road facing', 'corner property', 'vastu compliant'
]

const serviceKeywords = [
  'property consultation', 'real estate advice', 'property valuation',
  'home loan assistance', 'property legal help', 'documentation services',
  'property management', 'rental services', 'property maintenance',
  'interior design', 'property investment advice', 'nri services'
]

// Generate keyword combinations
function generateKeywords() {
  const keywords = new Set() // Use Set to avoid duplicates
  
  // Location + Property Type + BHK + Intention
  locations.primary.forEach(location => {
    propertyTypes.forEach(type => {
      bhkTypes.forEach(bhk => {
        intentions.forEach(intention => {
          keywords.add(`${bhk} ${type} ${intention} ${location}`)
          keywords.add(`${type} ${intention} ${location}`)
          keywords.add(`${bhk} ${intention} ${location}`)
          
          // Add qualifiers
          qualifiers.forEach(qualifier => {
            keywords.add(`${qualifier} ${bhk} ${type} ${location}`)
            keywords.add(`${qualifier} ${type} ${intention} ${location}`)
          })
        })
      })
    })
  })
  
  // Location-specific detailed keywords
  Object.entries(locations).forEach(([city, areas]) => {
    if (Array.isArray(areas)) {
      areas.forEach(area => {
        propertyTypes.slice(0, 5).forEach(type => { // Limit to avoid too many combinations
          keywords.add(`${type} in ${area}`)
          keywords.add(`property in ${area}`)
          keywords.add(`real estate ${area}`)
          keywords.add(`homes for sale ${area}`)
        })
      })
    }
  })
  
  // Service + Location combinations
  locations.primary.forEach(location => {
    serviceKeywords.forEach(service => {
      keywords.add(`${service} ${location}`)
      keywords.add(`best ${service} ${location}`)
      keywords.add(`top ${service} ${location}`)
    })
  })
  
  // Amenity + Location combinations
  locations.primary.forEach(location => {
    amenities.slice(0, 10).forEach(amenity => { // Limit to top amenities
      keywords.add(`properties with ${amenity} ${location}`)
      keywords.add(`apartments with ${amenity} ${location}`)
      keywords.add(`homes with ${amenity} ${location}`)
    })
  })
  
  // Question-based keywords (voice search optimization)
  const questionStarters = ['how to', 'where to', 'best', 'top', 'which', 'when to']
  questionStarters.forEach(starter => {
    locations.primary.slice(0, 3).forEach(location => { // Limit to top 3 cities
      keywords.add(`${starter} buy property ${location}`)
      keywords.add(`${starter} invest in real estate ${location}`)
      keywords.add(`${starter} find apartments ${location}`)
    })
  })
  
  return Array.from(keywords)
}

// Generate urgency-based keywords
function generateUrgencyKeywords() {
  const urgencyTerms = [
    'urgent sale', 'quick sale', 'immediate possession', 'ready to move',
    'distress sale', 'bank approved', 'loan available', 'zero brokerage',
    'direct owner', 'no broker', 'verified property', 'legal clear'
  ]
  
  const keywords = []
  
  locations.primary.forEach(location => {
    urgencyTerms.forEach(term => {
      keywords.push(`${term} property ${location}`)
      keywords.push(`${term} apartments ${location}`)
      keywords.push(`${term} ${location}`)
    })
  })
  
  return keywords
}

// Generate investment-focused keywords
function generateInvestmentKeywords() {
  const investmentTerms = [
    'investment opportunity', 'high roi', 'rental yield', 'capital appreciation',
    'property investment', 'real estate investment', 'investment property',
    'profitable investment', 'secure investment', 'guaranteed returns'
  ]
  
  const keywords = []
  
  locations.primary.forEach(location => {
    investmentTerms.forEach(term => {
      keywords.push(`${term} ${location}`)
      keywords.push(`best ${term} ${location}`)
      keywords.push(`${location} ${term}`)
    })
  })
  
  return keywords
}

// Main execution
function main() {
  console.log('🎯 Generating SEO Keywords for Dhawan Properties...\n')
  
  const baseKeywords = generateKeywords()
  const urgencyKeywords = generateUrgencyKeywords()
  const investmentKeywords = generateInvestmentKeywords()
  
  const allKeywords = [
    ...baseKeywords,
    ...urgencyKeywords,
    ...investmentKeywords
  ]
  
  // Remove duplicates and sort
  const uniqueKeywords = [...new Set(allKeywords)].sort()
  
  console.log(`✅ Generated ${uniqueKeywords.length} unique keywords!`)
  console.log('\n📊 Keyword Categories:')
  console.log(`   • Base Keywords: ${baseKeywords.length}`)
  console.log(`   • Urgency Keywords: ${urgencyKeywords.length}`)
  console.log(`   • Investment Keywords: ${investmentKeywords.length}`)
  
  // Show sample keywords
  console.log('\n🎯 Sample Generated Keywords:')
  uniqueKeywords.slice(0, 20).forEach((keyword, index) => {
    console.log(`   ${index + 1}. ${keyword}`)
  })
  
  console.log(`\n   ... and ${uniqueKeywords.length - 20} more keywords!`)
  
  // Generate the keywords file
  const keywordsContent = `// Auto-generated keywords for Dhawan Properties SEO
// Generated on: ${new Date().toISOString()}
// Total keywords: ${uniqueKeywords.length}

export const expandedKeywords = ${JSON.stringify(uniqueKeywords, null, 2)}

// Category-wise keywords for targeted optimization
export const categoryKeywords = {
  baseKeywords: ${JSON.stringify(baseKeywords.slice(0, 100), null, 2)},
  urgencyKeywords: ${JSON.stringify(urgencyKeywords, null, 2)},
  investmentKeywords: ${JSON.stringify(investmentKeywords, null, 2)},
}

// High-priority keywords for immediate implementation
export const priorityKeywords = [
  "dhawan properties",
  "real estate gurgaon",
  "property for sale gurgaon",
  "apartments in gurgaon",
  "luxury properties gurgaon",
  "commercial property gurgaon",
  "property investment gurgaon",
  "real estate delhi",
  "property for sale delhi",
  "apartments in delhi",
  "real estate noida",
  "property for sale noida",
  "apartments in noida",
  "property consultation",
  "real estate advice",
  "property valuation services",
  "home loan assistance",
  "nri property services",
  ...${JSON.stringify(uniqueKeywords.slice(0, 50), null, 2)}.slice(19)
]
`

  // Write to file
  require('fs').writeFileSync(
    require('path').join(__dirname, '../lib/expanded-keywords.ts'),
    keywordsContent
  )
  
  console.log('\n📁 Keywords saved to: lib/expanded-keywords.ts')
  console.log('\n🚀 Next Steps:')
  console.log('   1. Import these keywords in your seo-utils.ts')
  console.log('   2. Add them to your defaultSEOKeywords array')
  console.log('   3. Update your property pages with location-specific keywords')
  console.log('   4. Create blog content targeting these keywords')
  console.log('   5. Monitor rankings in Google Search Console')
  
  return uniqueKeywords
}

// Run the generator
if (require.main === module) {
  main()
}

module.exports = { generateKeywords, generateUrgencyKeywords, generateInvestmentKeywords, main }
