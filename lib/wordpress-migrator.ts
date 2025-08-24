export interface WordPressProperty {
  // Basic WordPress data
  id: number
  post_title: string
  post_content: string
  post_excerpt: string
  post_date: string
  post_modified: string
  post_status: string
  post_type: string
  
  // Custom fields (ACF, Custom Meta, etc.)
  meta: {
    [key: string]: any
  }
  
  // Featured image and gallery
  featured_image: string
  gallery_images: string[]
  
  // Categories and tags
  categories: string[]
  tags: string[]
  
  // SEO data
  seo_title: string
  seo_description: string
  seo_keywords: string
  
  // Property-specific custom fields
  property_details: {
    price?: string
    price_per_sqft?: string
    bedrooms?: number
    bathrooms?: number
    area?: number
    area_unit?: string
    year_built?: number
    property_type?: string
    status?: string
    location?: string
    address?: string
    city?: string
    state?: string
    pincode?: string
    country?: string
    
    // Google Maps data
    latitude?: number
    longitude?: number
    google_maps_embed?: string
    google_maps_link?: string
    
    // Floor plans
    floor_plans?: {
      [key: string]: {
        image: string
        label: string
        size: string
        price: string
        download_url?: string
      }[]
    }
    
    // Amenities
    amenities?: string[]
    
    // Project specifications
    project_specs?: {
      land_parcel?: string
      towers?: number
      floors?: string
      open_area?: string
      club_house?: string
      car_parking?: string
      possession?: string
      wait_time?: string
      rera_number?: string
      developer?: string
    }
    
    // Nearby places
    nearby_places?: {
      name: string
      distance: string
      type: string
      coordinates?: { lat: number; lng: number }
    }[]
    
    // Agent details
    agent?: {
      name: string
      phone: string
      email: string
      image: string
      whatsapp?: string
      designation?: string
    }
    
    // Additional details
    furnishing?: string
    facing?: string
    parking?: string
    power_backup?: string
    water_supply?: string
    security?: string
    maintenance?: string
    pet_friendly?: boolean
    available_from?: string
    booking_amount?: string
    emi_available?: boolean
    bank_approval?: string[]
  }
}

// WordPress XML/WXR specific interfaces
export interface WordPressXMLItem {
  title: string
  link: string
  pubDate: string
  creator: string
  guid: string
  description: string
  content: string
  excerpt: string
  post_id: string
  post_date: string
  post_date_gmt: string
  comment_status: string
  ping_status: string
  post_name: string
  status: string
  post_parent: string
  menu_order: string
  post_type: string
  post_password: string
  is_sticky: string
  category: string[]
  tag: string[]
  postmeta: WordPressXMLMeta[]
  attachment_url?: string
}

export interface WordPressXMLMeta {
  meta_key: string
  meta_value: string
}

export interface WordPressXMLData {
  rss: {
    channel: {
      title: string
      link: string
      description: string
      pubDate: string
      language: string
      wxr_version: string
      base_site_url: string
      base_blog_url: string
      item: WordPressXMLItem[]
    }
  }
}

export interface MigrationResult {
  success: boolean
  message: string
  importedCount: number
  errors: string[]
  warnings: string[]
  data: any[]
}

export class WordPressMigrator {
  private wpData: WordPressProperty[] = []
  private errors: string[] = []
  private warnings: string[] = []

  /**
   * Import WordPress data from JSON export or direct database
   */
  async importFromWordPress(data: any): Promise<MigrationResult> {
    try {
      this.wpData = this.parseWordPressData(data)
      const convertedProperties = this.convertToPropertyFormat()
      
      return {
        success: true,
        message: `Successfully imported ${convertedProperties.length} properties`,
        importedCount: convertedProperties.length,
        errors: this.errors,
        warnings: this.warnings,
        data: convertedProperties
      }
    } catch (error) {
      return {
        success: false,
        message: `Migration failed: ${error}`,
        importedCount: 0,
        errors: [...this.errors, error as string],
        warnings: this.warnings,
        data: []
      }
    }
  }

  /**
   * Parse WordPress data from various formats including XML
   */
  private parseWordPressData(data: any): WordPressProperty[] {
    // Handle XML data (WordPress WXR export)
    if (typeof data === 'string' && data.includes('<?xml')) {
      return this.parseWordPressXML(data)
    }
    
    // Handle parsed XML object
    if (data.rss && data.rss.channel && data.rss.channel.item) {
      return this.parseWordPressXMLObject(data)
    }
    
    // Handle JSON data
    if (Array.isArray(data)) {
      return data
    }
    
    if (data.posts && Array.isArray(data.posts)) {
      return data.posts
    }
    
    if (data.data && Array.isArray(data.data)) {
      return data.data
    }
    
    throw new Error('Invalid WordPress data format. Please use WordPress Export (All content) or provide valid JSON/XML data.')
  }

  /**
   * Parse WordPress XML string (WXR format)
   */
  private parseWordPressXML(xmlString: string): WordPressProperty[] {
    try {
      // Create a DOMParser to parse XML
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
      
      // Check for parsing errors
      const parseError = xmlDoc.getElementsByTagName('parsererror')
      if (parseError.length > 0) {
        throw new Error('XML parsing failed. Please check your WordPress export file.')
      }
      
      // Extract items from the XML
      const items = xmlDoc.getElementsByTagName('item')
      const properties: WordPressProperty[] = []
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const property = this.parseXMLItem(item)
        if (property) {
          properties.push(property)
        }
      }
      
      return properties
    } catch (error) {
      throw new Error(`XML parsing failed: ${error}`)
    }
  }

  /**
   * Parse WordPress XML object (already parsed)
   */
  private parseWordPressXMLObject(xmlData: any): WordPressProperty[] {
    const items = xmlData.rss.channel.item
    const properties: WordPressProperty[] = []
    
    for (const item of items) {
      const property = this.parseXMLItemObject(item)
      if (property) {
          properties.push(property)
        }
    }
    
    return properties
  }

  /**
   * Parse individual XML item element
   */
  private parseXMLItem(xmlItem: Element): WordPressProperty | null {
    try {
      const getTextContent = (tagName: string): string => {
        const element = xmlItem.getElementsByTagName(tagName)[0]
        return element ? element.textContent || '' : ''
      }
      
      const getMetaValue = (key: string): string => {
        const metaElements = xmlItem.getElementsByTagName('wp:postmeta')
        for (let i = 0; i < metaElements.length; i++) {
          const metaKey = metaElements[i].getElementsByTagName('wp:meta_key')[0]
          const metaValue = metaElements[i].getElementsByTagName('wp:meta_value')[0]
          if (metaKey && metaValue && metaKey.textContent === key) {
            return metaValue.textContent || ''
          }
        }
        return ''
      }
      
      const getCategories = (): string[] => {
        const categoryElements = xmlItem.getElementsByTagName('category')
        const categories: string[] = []
        for (let i = 0; i < categoryElements.length; i++) {
          const category = categoryElements[i].textContent
          if (category && !category.includes('uncategorized')) {
            categories.push(category)
          }
        }
        return categories
      }
      
      const postType = getTextContent('wp:post_type')
      
      // Only process properties (posts, pages, or custom post types)
      if (!['post', 'page'].includes(postType) && !postType.includes('property')) {
        return null
      }
      
      return {
        id: parseInt(getTextContent('wp:post_id') || '0'),
        post_title: getTextContent('title'),
        post_content: getTextContent('content:encoded'),
        post_excerpt: getTextContent('excerpt:encoded'),
        post_date: getTextContent('pubDate'),
        post_modified: getTextContent('wp:post_date_gmt'),
        post_status: getTextContent('wp:status'),
        post_type: postType,
        meta: {
          // Extract common custom fields
          price: getMetaValue('price'),
          bedrooms: getMetaValue('bedrooms'),
          bathrooms: getMetaValue('bathrooms'),
          area: getMetaValue('area'),
          location: getMetaValue('location'),
          property_type: getMetaValue('property_type'),
          status: getMetaValue('status'),
          amenities: getMetaValue('amenities'),
          latitude: getMetaValue('latitude'),
          longitude: getMetaValue('longitude'),
          google_maps_embed: getMetaValue('google_maps_embed'),
          floor_plans: getMetaValue('floor_plans'),
          project_specs: getMetaValue('project_specs'),
          nearby_places: getMetaValue('nearby_places'),
          agent: getMetaValue('agent')
        },
        featured_image: getTextContent('wp:attachment_url') || '',
        gallery_images: [],
        categories: getCategories(),
        tags: [],
        seo_title: getMetaValue('_yoast_wpseo_title') || getMetaValue('_seopress_titles_title') || '',
        seo_description: getMetaValue('_yoast_wpseo_metadesc') || getMetaValue('_seopress_titles_desc') || '',
        seo_keywords: getMetaValue('_yoast_wpseo_focuskw') || getMetaValue('_seopress_titles_keywords') || '',
        property_details: this.buildPropertyDetailsFromMeta(getMetaValue)
      }
    } catch (error) {
      console.warn('Failed to parse XML item:', error)
      return null
    }
  }

  /**
   * Parse individual XML item object
   */
  private parseXMLItemObject(item: any): WordPressProperty | null {
    try {
      const postType = item.post_type || 'post'
      
      // Only process properties (posts, pages, or custom post types)
      if (!['post', 'page'].includes(postType) && !postType.includes('property')) {
        return null
      }
      
      return {
        id: parseInt(item.post_id || '0'),
        post_title: item.title || '',
        post_content: item.content || '',
        post_excerpt: item.excerpt || '',
        post_date: item.pubDate || '',
        post_modified: item.post_date_gmt || '',
        post_status: item.status || '',
        post_type: postType,
        meta: this.extractMetaFromXMLItem(item),
        featured_image: item.attachment_url || '',
        gallery_images: [],
        categories: Array.isArray(item.category) ? item.category : [item.category].filter(Boolean),
        tags: Array.isArray(item.tag) ? item.tag : [item.tag].filter(Boolean),
        seo_title: '',
        seo_description: '',
        seo_keywords: '',
        property_details: this.buildPropertyDetailsFromXMLItem(item)
      }
    } catch (error) {
      console.warn('Failed to parse XML item object:', error)
      return null
    }
  }

  /**
   * Extract meta data from XML item
   */
  private extractMetaFromXMLItem(item: any): { [key: string]: any } {
    const meta: { [key: string]: any } = {}
    
    if (item.postmeta && Array.isArray(item.postmeta)) {
      for (const metaItem of item.postmeta) {
        if (metaItem.meta_key && metaItem.meta_value) {
          meta[metaItem.meta_key] = metaItem.meta_value
        }
      }
    }
    
    return meta
  }

  /**
   * Build property details from meta data
   */
  private buildPropertyDetailsFromMeta(getMetaValue: (key: string) => string): any {
    const amenities = getMetaValue('amenities')
    const latitude = getMetaValue('latitude')
    const longitude = getMetaValue('longitude')
    
    return {
      price: getMetaValue('price') || undefined,
      bedrooms: parseInt(getMetaValue('bedrooms')) || 0,
      bathrooms: parseInt(getMetaValue('bathrooms')) || 0,
      area: parseInt(getMetaValue('area')) || 0,
      location: getMetaValue('location') || undefined,
      property_type: getMetaValue('property_type') || undefined,
      status: getMetaValue('status') || undefined,
      amenities: amenities ? amenities.split(',').map((a: string) => a.trim()) : [],
      latitude: latitude ? parseFloat(latitude) : undefined,
      longitude: longitude ? parseFloat(longitude) : undefined,
      google_maps_embed: getMetaValue('google_maps_embed') || undefined,
      floor_plans: getMetaValue('floor_plans') ? this.parseFloorPlansFromMeta(getMetaValue('floor_plans')) : undefined,
      project_specs: getMetaValue('project_specs') ? this.parseProjectSpecsFromMeta(getMetaValue('project_specs')) : undefined,
      nearby_places: getMetaValue('nearby_places') ? this.parseNearbyPlacesFromMeta(getMetaValue('nearby_places')) : undefined,
      agent: getMetaValue('agent') ? this.parseAgentFromMeta(getMetaValue('agent')) : undefined
    }
  }

  /**
   * Build property details from XML item
   */
  private buildPropertyDetailsFromXMLItem(item: any): any {
    const meta = this.extractMetaFromXMLItem(item)
    const amenities = meta.amenities
    const latitude = meta.latitude
    const longitude = meta.longitude
    
    return {
      price: meta.price || undefined,
      bedrooms: parseInt(meta.bedrooms) || 0,
      bathrooms: parseInt(meta.bathrooms) || 0,
      area: parseInt(meta.area) || 0,
      location: meta.location || undefined,
      property_type: meta.property_type || undefined,
      status: meta.status || undefined,
      amenities: amenities ? amenities.split(',').map((a: string) => a.trim()) : [],
      latitude: latitude ? parseFloat(latitude) : undefined,
      longitude: longitude ? parseFloat(longitude) : undefined,
      google_maps_embed: meta.google_maps_embed || undefined,
      floor_plans: meta.floor_plans ? this.parseFloorPlansFromMeta(meta.floor_plans) : undefined,
      project_specs: meta.project_specs ? this.parseProjectSpecsFromMeta(meta.project_specs) : undefined,
      nearby_places: meta.nearby_places ? this.parseNearbyPlacesFromMeta(meta.nearby_places) : undefined,
      agent: meta.agent ? this.parseAgentFromMeta(meta.agent) : undefined
    }
  }

  /**
   * Parse floor plans from meta string
   */
  private parseFloorPlansFromMeta(floorPlansMeta: string | undefined): any {
    if (!floorPlansMeta) return undefined
    
    try {
      return JSON.parse(floorPlansMeta)
    } catch {
      return undefined
    }
  }

  /**
   * Parse project specs from meta string
   */
  private parseProjectSpecsFromMeta(projectSpecsMeta: string | undefined): any {
    if (!projectSpecsMeta) return undefined
    
    try {
      return JSON.parse(projectSpecsMeta)
    } catch {
      return undefined
    }
  }

  /**
   * Parse nearby places from meta string
   */
  private parseNearbyPlacesFromMeta(nearbyPlacesMeta: string | undefined): any {
    if (!nearbyPlacesMeta) return undefined
    
    try {
      return JSON.parse(nearbyPlacesMeta)
    } catch {
      return undefined
    }
  }

  /**
   * Parse agent from meta string
   */
  private parseAgentFromMeta(agentMeta: string | undefined): any {
    if (!agentMeta) return undefined
    
    try {
      return JSON.parse(agentMeta)
    } catch {
      return undefined
    }
  }

  /**
   * Convert WordPress data to our property format
   */
  private convertToPropertyFormat() {
    return this.wpData.map(wpProperty => {
      const details = wpProperty.property_details || {}
      
      return {
        id: wpProperty.id,
        title: wpProperty.post_title || 'Untitled Property',
        location: this.buildLocation(details),
        bedrooms: details.bedrooms || 0,
        bathrooms: details.bathrooms || 0,
        area: details.area || 0,
        yearBuilt: details.year_built || new Date().getFullYear(),
        type: this.determinePropertyType(details.property_type, wpProperty.categories),
        status: this.determineStatus(details.status, wpProperty.tags),
        tag: this.generateTag(details.status, details.property_type),
        image: wpProperty.featured_image || '/placeholder.svg',
        amenities: details.amenities || [],
        description: wpProperty.post_content || wpProperty.post_excerpt || 'No description available',
        
        // Advanced fields
        images: this.buildImageArray(wpProperty),
        floorPlans: this.buildFloorPlans(details.floor_plans),
        projectSpecs: this.buildProjectSpecs(details.project_specs),
        nearbyPlaces: details.nearby_places || [],
        agent: details.agent,
        
        // Google Maps data
        googleMaps: {
          latitude: details.latitude,
          longitude: details.longitude,
          embedUrl: details.google_maps_embed,
          link: details.google_maps_link
        },
        
        // Additional WordPress data
        wordpressData: {
          originalId: wpProperty.id,
          postDate: wpProperty.post_date,
          modifiedDate: wpProperty.post_modified,
          status: wpProperty.post_status,
          categories: wpProperty.categories,
          tags: wpProperty.tags,
          seo: {
            title: wpProperty.seo_title,
            description: wpProperty.seo_description,
            keywords: wpProperty.seo_keywords
          }
        }
      }
    })
  }

  /**
   * Build location string from address components
   */
  private buildLocation(details: any): string {
    const parts = [
      details.address,
      details.city,
      details.state,
      details.pincode,
      details.country
    ].filter(Boolean)
    
    return parts.length > 0 ? parts.join(', ') : 'Location not specified'
  }

  /**
   * Determine property type from WordPress data
   */
  private determinePropertyType(propertyType: string | undefined, categories: string[] | undefined): "residential" | "commercial" {
    if (propertyType) {
      const type = propertyType.toLowerCase()
      if (type.includes('residential') || type.includes('apartment') || type.includes('villa') || type.includes('house')) {
        return 'residential'
      }
      if (type.includes('commercial') || type.includes('office') || type.includes('shop') || type.includes('retail')) {
        return 'commercial'
      }
    }
    
    // Fallback to categories
    if (categories && Array.isArray(categories) && categories.length > 0) {
      const categoryStr = categories.join(' ').toLowerCase()
      if (categoryStr.includes('residential') || categoryStr.includes('apartment') || categoryStr.includes('villa')) {
        return 'residential'
      }
      if (categoryStr.includes('commercial') || categoryStr.includes('office')) {
        return 'commercial'
      }
    }
    
    return 'residential' // Default
  }

  /**
   * Determine property status
   */
  private determineStatus(status: string | undefined, tags: string[] | undefined): "new-launch" | "ready" | "resale" {
    if (status) {
      const statusLower = status.toLowerCase()
      if (statusLower.includes('new') || statusLower.includes('launch')) return 'new-launch'
      if (statusLower.includes('ready') || statusLower.includes('move')) return 'ready'
      if (statusLower.includes('resale') || statusLower.includes('used')) return 'resale'
    }
    
    // Fallback to tags
    if (tags && Array.isArray(tags) && tags.length > 0) {
      const tagStr = tags.join(' ').toLowerCase()
      if (tagStr.includes('new') || tagStr.includes('launch')) return 'new-launch'
      if (tagStr.includes('ready') || tagStr.includes('move')) return 'ready'
      if (tagStr.includes('resale') || tagStr.includes('used')) return 'resale'
    }
    
    return 'new-launch' // Default
  }

  /**
   * Generate display tag
   */
  private generateTag(status: string | undefined, propertyType: string | undefined): string {
    if (status) {
      const statusLower = status.toLowerCase()
      if (statusLower.includes('new') || statusLower.includes('launch')) return 'New Launch'
      if (statusLower.includes('ready') || statusLower.includes('move')) return 'Ready to Move'
      if (statusLower.includes('resale') || statusLower.includes('used')) return 'Resale'
    }
    
    return 'New Launch' // Default
  }

  /**
   * Build image array from WordPress data
   */
  private buildImageArray(wpProperty: WordPressProperty): string[] {
    const images: string[] = []
    
    if (wpProperty.featured_image) {
      images.push(wpProperty.featured_image)
    }
    
    if (wpProperty.gallery_images && Array.isArray(wpProperty.gallery_images)) {
      images.push(...wpProperty.gallery_images)
    }
    
    return images.length > 0 ? images : ['/placeholder.svg']
  }

  /**
   * Build floor plans from WordPress data
   */
  private buildFloorPlans(floorPlans: any): any {
    if (!floorPlans) return undefined
    
    const converted: any = {}
    
    Object.keys(floorPlans).forEach(type => {
      if (Array.isArray(floorPlans[type])) {
        converted[type] = floorPlans[type].map((plan: any) => ({
          image: plan.image || '/placeholder.svg',
          label: plan.label || `${type} • ${plan.size || 'N/A'}`,
          downloadUrl: plan.download_url || '#'
        }))
      }
    })
    
    return converted
  }

  /**
   * Build project specifications
   */
  private buildProjectSpecs(specs: any): any {
    if (!specs) return undefined
    
    return {
      landParcel: specs.land_parcel || undefined,
      towers: specs.towers || undefined,
      floors: specs.floors || undefined,
      openArea: specs.open_area || undefined,
      clubHouse: specs.club_house || undefined,
      carParking: specs.car_parking || undefined,
      possession: specs.possession || undefined,
      waitTime: specs.wait_time || undefined,
      reraNumber: specs.rera_number || undefined,
      developer: specs.developer || undefined
    }
  }

  /**
   * Export converted data to our property format
   */
  exportToPropertyFormat(): string {
    const properties = this.convertToPropertyFormat()
    return JSON.stringify(properties, null, 2)
  }

  /**
   * Export to our property-data.ts format
   */
  exportToTypeScript(): string {
    const properties = this.convertToPropertyFormat()
    
    let tsCode = 'export const properties: Property[] = [\n'
    
    properties.forEach((property, index) => {
      tsCode += '  {\n'
      tsCode += `    id: ${property.id},\n`
      tsCode += `    title: "${property.title}",\n`
      tsCode += `    location: "${property.location}",\n`
      tsCode += `    bedrooms: ${property.bedrooms},\n`
      tsCode += `    bathrooms: ${property.bathrooms},\n`
      tsCode += `    area: ${property.area},\n`
      tsCode += `    yearBuilt: ${property.yearBuilt},\n`
      tsCode += `    type: "${property.type}",\n`
      tsCode += `    status: "${property.status}",\n`
      tsCode += `    tag: "${property.tag}",\n`
      tsCode += `    image: "${property.image}",\n`
      tsCode += `    amenities: [${property.amenities.map(a => `"${a}"`).join(', ')}],\n`
      tsCode += `    description: "${property.description.replace(/"/g, '\\"')}",\n`
      
      if (property.images && property.images.length > 1) {
        tsCode += `    images: [${property.images.map(img => `"${img}"`).join(', ')}],\n`
      }
      
      if (property.floorPlans) {
        tsCode += '    floorPlans: {\n'
        Object.keys(property.floorPlans).forEach(type => {
          tsCode += `      "${type}": [\n`
          property.floorPlans[type].forEach((plan: any) => {
            tsCode += `        {\n`
            tsCode += `          image: "${plan.image}",\n`
            tsCode += `          label: "${plan.label}",\n`
            tsCode += `          downloadUrl: "${plan.downloadUrl}"\n`
            tsCode += `        },\n`
          })
          tsCode += '      ],\n'
        })
        tsCode += '    },\n'
      }
      
      if (property.projectSpecs) {
        tsCode += '    projectSpecs: {\n'
        Object.entries(property.projectSpecs).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            if (typeof value === 'string') {
              tsCode += `      ${key}: "${value}",\n`
            } else {
              tsCode += `      ${key}: ${value},\n`
            }
          }
        })
        tsCode += '    },\n'
      }
      
      if (property.nearbyPlaces && property.nearbyPlaces.length > 0) {
        tsCode += '    nearbyPlaces: [\n'
        property.nearbyPlaces.forEach((place: any) => {
          tsCode += `      { name: "${place.name}", distance: "${place.distance}", type: "${place.type}" },\n`
        })
        tsCode += '    ],\n'
      }
      
      if (property.agent) {
        tsCode += '    agent: {\n'
        tsCode += `      name: "${property.agent.name}",\n`
        tsCode += `      phone: "${property.agent.phone}",\n`
        tsCode += `      email: "${property.agent.email}",\n`
        tsCode += `      image: "${property.agent.image}"\n`
        tsCode += '    },\n'
      }
      
      tsCode += '  }'
      if (index < properties.length - 1) tsCode += ','
      tsCode += '\n'
    })
    
    tsCode += ']\n'
    return tsCode
  }
}
