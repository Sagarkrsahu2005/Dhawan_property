"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Upload, 
  Download, 
  FileText, 
  Code, 
  CheckCircle, 
  AlertCircle, 
  Info,
  Database,
  Image,
  MapPin,
  Building,
  User,
  Settings
} from "lucide-react"
import { WordPressMigrator, MigrationResult } from "@/lib/wordpress-migrator"

export default function WordPressMigration() {
  const [migrationResult, setMigrationResult] = useState<MigrationResult | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [importMethod, setImportMethod] = useState<"file" | "database" | "manual">("file")
  const [wpData, setWpData] = useState("")
  const [convertedData, setConvertedData] = useState("")
  const [dataFormat, setDataFormat] = useState<"json" | "typescript">("json")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const migrator = new WordPressMigrator()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const text = await file.text()
      setWpData(text)
    } catch (error) {
      console.error("File read error:", error)
      alert("Error reading file: " + String(error))
    }
  }

  const handleImport = async () => {
    if (!wpData.trim()) {
      alert("Please provide WordPress data")
      return
    }

    setIsProcessing(true)
    try {
      let data
      
      // Check if it's XML data first
      if (wpData.includes('<?xml') || wpData.includes('<rss') || wpData.includes('<wp:')) {
        // It's XML data, pass it directly to the migrator
        data = wpData
      } else {
        // Try to parse as JSON
        try {
          data = JSON.parse(wpData)
        } catch (error) {
          alert("Invalid data format. Please check your WordPress export file. It should be either XML (from WordPress Export) or valid JSON.")
          setIsProcessing(false)
          return
        }
      }

      const result = await migrator.importFromWordPress(data)
      
      // Ensure errors and warnings are strings
      const safeResult = {
        ...result,
        errors: result.errors.map(error => String(error)),
        warnings: result.warnings.map(warning => String(warning))
      }
      
      setMigrationResult(safeResult)

      if (result.success) {
        setConvertedData(
          dataFormat === "json" 
            ? migrator.exportToPropertyFormat()
            : migrator.exportToTypeScript()
        )
      }
    } catch (error) {
      console.error("Migration error:", error)
      alert("Migration failed: " + String(error))
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (!convertedData) return

    const blob = new Blob([convertedData], { 
      type: dataFormat === "json" ? "application/json" : "text/plain" 
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `properties-${dataFormat === "json" ? "data.json" : "data.ts"}`
    link.click()
    URL.revokeObjectURL(url)
  }

  const handleCopyToClipboard = async () => {
    if (!convertedData) return
    
    try {
      await navigator.clipboard.writeText(convertedData)
      alert("Data copied to clipboard!")
    } catch (error) {
      alert("Failed to copy to clipboard: " + error)
    }
  }

  const getSampleWordPressData = () => {
    const sampleXML = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/">
  <channel>
    <title>Sample Property Website</title>
    <link>https://example.com</link>
    <description>Sample property export</description>
    <pubDate>Mon, 01 Jan 2024 12:00:00 +0000</pubDate>
    <language>en-US</language>
    <wp:wxr_version>1.2</wp:wxr_version>
    <wp:base_site_url>https://example.com</wp:base_site_url>
    <wp:base_blog_url>https://example.com</wp:base_blog_url>
    
    <item>
      <title>Sample Property - 3BHK Apartment</title>
      <link>https://example.com/property/sample-3bhk</link>
      <pubDate>Mon, 01 Jan 2024 12:00:00 +0000</pubDate>
      <dc:creator>admin</dc:creator>
      <guid isPermaLink="false">https://example.com/?post_type=property&amp;p=1</guid>
      <description></description>
      <content:encoded><![CDATA[This is a sample 3BHK apartment with modern amenities including swimming pool, gym, and parking. Located in a prime area with excellent connectivity.]]></content:encoded>
      <excerpt:encoded><![CDATA[Modern 3BHK apartment with amenities]]></excerpt:encoded>
      <wp:post_id>1</wp:post_id>
      <wp:post_date>2024-01-01 12:00:00</wp:post_date>
      <wp:post_date_gmt>2024-01-01 12:00:00</wp:post_date_gmt>
      <wp:comment_status>open</wp:comment_status>
      <wp:ping_status>open</wp:ping_status>
      <wp:post_name>sample-3bhk-apartment</wp:post_name>
      <wp:status>publish</wp:status>
      <wp:post_parent>0</wp:post_parent>
      <wp:menu_order>0</wp:menu_order>
      <wp:post_type>post</wp:post_type>
      <wp:post_password></wp:post_password>
      <wp:is_sticky>0</wp:is_sticky>
      <category domain="category" nicename="residential"><![CDATA[Residential]]></category>
      <category domain="category" nicename="apartment"><![CDATA[Apartment]]></category>
      <wp:postmeta>
        <wp:meta_key>bedrooms</wp:meta_key>
        <wp:meta_value>3</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>bathrooms</wp:meta_key>
        <wp:meta_value>2</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>area</wp:meta_key>
        <wp:meta_value>1500</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>price</wp:meta_key>
        <wp:meta_value>₹1.2 Cr</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>location</wp:meta_key>
        <wp:meta_value>Sector 45, Gurugram, Haryana</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>property_type</wp:meta_key>
        <wp:meta_value>residential</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>status</wp:meta_key>
        <wp:meta_value>new-launch</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>amenities</wp:meta_key>
        <wp:meta_value>Swimming Pool, Gym, Parking, Security</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>latitude</wp:meta_key>
        <wp:meta_value>28.4595</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>longitude</wp:meta_key>
        <wp:meta_value>77.0266</wp:meta_value>
      </wp:postmeta>
    </item>
    
    <item>
      <title>Premium Villa - 4BHK</title>
      <link>https://example.com/property/premium-villa</link>
      <pubDate>Mon, 01 Jan 2024 12:00:00 +0000</pubDate>
      <dc:creator>admin</dc:creator>
      <guid isPermaLink="false">https://example.com/?post_type=property&amp;p=2</guid>
      <description></description>
      <content:encoded><![CDATA[Luxury 4BHK villa with private garden, swimming pool, and premium finishes. Perfect for families seeking luxury living.]]></content:encoded>
      <excerpt:encoded><![CDATA[Luxury 4BHK villa with premium amenities]]></excerpt:encoded>
      <wp:post_id>2</wp:post_id>
      <wp:post_date>2024-01-01 12:00:00</wp:post_date>
      <wp:post_date_gmt>2024-01-01 12:00:00</wp:post_date_gmt>
      <wp:comment_status>open</wp:comment_status>
      <wp:ping_status>open</wp:ping_status>
      <wp:post_name>premium-villa-4bhk</wp:post_name>
      <wp:status>publish</wp:status>
      <wp:post_parent>0</wp:post_parent>
      <wp:menu_order>0</wp:menu_order>
      <wp:post_type>post</wp:post_type>
      <wp:post_password></wp:post_password>
      <wp:is_sticky>0</wp:is_sticky>
      <category domain="category" nicename="residential"><![CDATA[Residential]]></category>
      <category domain="category" nicename="villa"><![CDATA[Villa]]></category>
      <wp:postmeta>
        <wp:meta_key>bedrooms</wp:meta_key>
        <wp:meta_value>4</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>bathrooms</wp:meta_key>
        <wp:meta_value>4</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>area</wp:meta_key>
        <wp:meta_value>3200</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>price</wp:meta_key>
        <wp:meta_value>₹3.5 Cr</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>location</wp:meta_key>
        <wp:meta_value>Sector 47, Gurugram, Haryana</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>property_type</wp:meta_key>
        <wp:meta_value>residential</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>status</wp:meta_key>
        <wp:meta_value>ready</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>amenities</wp:meta_key>
        <wp:meta_value>Private Garden, Swimming Pool, Gym, Parking, Security, Smart Home</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>latitude</wp:meta_key>
        <wp:meta_value>28.4595</wp:meta_value>
      </wp:postmeta>
      <wp:postmeta>
        <wp:meta_key>longitude</wp:meta_key>
        <wp:meta_value>77.0266</wp:meta_value>
      </wp:postmeta>
    </item>
    
  </channel>
</rss>`

    setWpData(sampleXML)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-6 h-6" />
            WordPress to Next.js Property Migration Tool
          </CardTitle>
          <p className="text-gray-600">
            Import all your WordPress property data including images, floor plans, Google Maps, and custom fields
          </p>
        </CardHeader>
        <CardContent>
          <Tabs value={importMethod} onValueChange={(value) => setImportMethod(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="file">📁 File Upload</TabsTrigger>
              <TabsTrigger value="database">🗄️ Database</TabsTrigger>
              <TabsTrigger value="manual">✏️ Manual Input</TabsTrigger>
            </TabsList>

            <TabsContent value="file" className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload WordPress Export File</h3>
                <p className="text-gray-600 mb-4">
                  Upload your WordPress XML export file (Tools → Export → All content)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xml,.json,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                  aria-label="Upload WordPress export file"
                />
                <Button onClick={() => fileInputRef.current?.click()}>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Recommended:</strong> XML from WordPress Export (Tools → Export → All content)
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Also supports: JSON, TXT formats
                </p>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Database Connection</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      For direct database access, you'll need to provide database credentials.
                      This feature requires server-side implementation for security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Input placeholder="Database Host" />
                <Input placeholder="Database Name" />
                <Input placeholder="Username" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Table Prefix (e.g., wp_)" />
                <Button disabled>Connect to Database</Button>
              </div>
            </TabsContent>

            <TabsContent value="manual" className="space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Manual Data Input</h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      Paste your WordPress data in XML or JSON format. Use the sample data button below for reference.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={getSampleWordPressData}>
                  Load Sample Data
                </Button>
                <Button variant="outline" onClick={() => setWpData("")}>
                  Clear Data
                </Button>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>💡 Tip:</strong> If you have a WordPress XML export file, you can:
                  <br />1. Open the XML file in a text editor
                  <br />2. Copy all the content (Ctrl+A, Ctrl+C)
                  <br />3. Paste it here (Ctrl+V)
                </p>
              </div>
              <Textarea
                placeholder="Paste your WordPress XML or JSON data here..."
                value={wpData}
                onChange={(e) => setWpData(e.target.value)}
                rows={15}
                className="font-mono text-sm"
              />
            </TabsContent>
          </Tabs>

          <div className="flex gap-4 mt-6">
            <Button 
              onClick={handleImport} 
              disabled={isProcessing || !wpData.trim()}
              className="flex-1"
            >
              {isProcessing ? "Processing..." : "Import & Convert Data"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Migration Results */}
      {migrationResult && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {migrationResult.success ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600" />
              )}
              Migration Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge variant={migrationResult.success ? "default" : "destructive"}>
                  {migrationResult.success ? "Success" : "Failed"}
                </Badge>
                <span className="text-sm text-gray-600">
                  {migrationResult.message}
                </span>
              </div>

              {migrationResult.success && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {migrationResult.importedCount}
                    </div>
                    <div className="text-sm text-green-700">Properties Imported</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {migrationResult.errors.length}
                    </div>
                    <div className="text-sm text-blue-700">Errors</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">
                      {migrationResult.warnings.length}
                    </div>
                    <div className="text-sm text-yellow-700">Warnings</div>
                  </div>
                </div>
              )}

              {migrationResult.errors.length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-900 mb-2">Errors:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    {migrationResult.errors.map((error, index) => (
                      <li key={index}>• {String(error)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {migrationResult.warnings.length > 0 && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-900 mb-2">Warnings:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {migrationResult.warnings.map((warning, index) => (
                      <li key={index}>• {String(warning)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Converted Data */}
      {convertedData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-6 h-6" />
              Converted Property Data
            </CardTitle>
            <div className="flex items-center gap-4">
              <Select value={dataFormat} onValueChange={(value) => setDataFormat(value as any)}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="json">JSON Format</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleDownload} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button onClick={handleCopyToClipboard} variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre-wrap">
                {convertedData}
              </pre>
            </div>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-700">
                  <p className="font-medium mb-1">Next Steps:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Download the converted data</li>
                    <li>Copy the data to your <code>lib/property-data.ts</code> file</li>
                    <li>Update your components to use the new data structure</li>
                    <li>Test the migration on your site</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Migration Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-6 h-6" />
            Migration Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">What Gets Migrated:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Property titles and descriptions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Images and galleries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Floor plans and layouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Google Maps coordinates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Custom fields and meta data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Amenities and features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Agent information
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Project specifications
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Supported WordPress Formats:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  WordPress REST API exports
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  Custom post type exports
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  ACF (Advanced Custom Fields) data
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  Custom meta fields
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  SEO plugin data
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  Media library information
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
