"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Save, Edit, Trash2 } from "lucide-react"

interface PropertyFormData {
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  yearBuilt: number
  type: "residential" | "commercial"
  status: "new-launch" | "ready" | "resale"
  tag: string
  image: string
  amenities: string
  description: string
}

export default function PropertyAdmin() {
  const [formData, setFormData] = useState<PropertyFormData>({
    title: "",
    location: "",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    yearBuilt: 2024,
    type: "residential",
    status: "new-launch",
    tag: "",
    image: "",
    amenities: "",
    description: ""
  })

  const [properties, setProperties] = useState<any[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleInputChange = (field: keyof PropertyFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newProperty = {
      id: editingId || Date.now(),
      ...formData,
      amenities: formData.amenities.split(',').map(a => a.trim()).filter(a => a),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      yearBuilt: Number(formData.yearBuilt)
    }

    if (editingId) {
      setProperties(prev => prev.map(p => p.id === editingId ? newProperty : p))
      setEditingId(null)
    } else {
      setProperties(prev => [...prev, newProperty])
    }

    // Reset form
    setFormData({
      title: "",
      location: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      yearBuilt: 2024,
      type: "residential",
      status: "new-launch",
      tag: "",
      image: "",
      amenities: "",
      description: ""
    })
  }

  const handleEdit = (property: any) => {
    setEditingId(property.id)
    setFormData({
      title: property.title,
      location: property.location,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      yearBuilt: property.yearBuilt,
      type: property.type,
      status: property.status,
      tag: property.tag,
      image: property.image,
      amenities: property.amenities.join(', '),
      description: property.description
    })
  }

  const handleDelete = (id: number) => {
    setProperties(prev => prev.filter(p => p.id !== id))
  }

  const exportData = () => {
    const dataStr = JSON.stringify(properties, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'properties-data.json'
    link.click()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            {editingId ? 'Edit Property' : 'Add New Property'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Property Title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
              <Input
                placeholder="Location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Bedrooms"
                value={formData.bedrooms}
                onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Bathrooms"
                value={formData.bathrooms}
                onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Area (sq.ft)"
                value={formData.area}
                onChange={(e) => handleInputChange('area', e.target.value)}
                required
              />
              <Input
                type="number"
                placeholder="Year Built"
                value={formData.yearBuilt}
                onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-launch">New Launch</SelectItem>
                  <SelectItem value="ready">Ready to Move</SelectItem>
                  <SelectItem value="resale">Resale</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Tag (e.g., New Launch)"
                value={formData.tag}
                onChange={(e) => handleInputChange('tag', e.target.value)}
                required
              />
            </div>

            <Input
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
              required
            />

            <Input
              placeholder="Amenities (comma-separated)"
              value={formData.amenities}
              onChange={(e) => handleInputChange('amenities', e.target.value)}
              placeholder="Swimming Pool, Gym, Parking, Security"
            />

            <Textarea
              placeholder="Property Description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              required
            />

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                <Save className="w-4 h-4 mr-2" />
                {editingId ? 'Update Property' : 'Add Property'}
              </Button>
              {editingId && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setEditingId(null)}
                >
                  Cancel Edit
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Properties List */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Properties ({properties.length})</CardTitle>
            <Button onClick={exportData} variant="outline">
              Export JSON
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {properties.map((property) => (
              <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm text-gray-600">
                    {property.bedrooms}BHK • {property.area} sq.ft • {property.status}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(property)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(property.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            {properties.length === 0 && (
              <p className="text-center text-gray-500 py-8">No properties added yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
