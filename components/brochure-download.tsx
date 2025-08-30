"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Brochure {
  title: string
  type: string
  fileUrl: string
  thumbnail?: string
  description?: string
}

interface BrochureDownloadProps {
  propertyTitle: string
  brochures: Brochure[]
}

export default function BrochureDownload({ propertyTitle, brochures }: BrochureDownloadProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleBrochureSelect = (brochure: Brochure) => {
    setSelectedBrochure(brochure)
    setIsOpen(true)
    setSubmitSuccess(false)
    setSubmitError("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedBrochure) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/brochure-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property: propertyTitle,
          brochureType: selectedBrochure.type,
          downloadUrl: selectedBrochure.fileUrl
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        // Trigger download
        const link = document.createElement('a')
        link.href = selectedBrochure.fileUrl
        link.download = `${propertyTitle}-${selectedBrochure.type}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Reset form
        setFormData({ name: "", phone: "", email: "" })
        
        // Close dialog after a delay
        setTimeout(() => {
          setIsOpen(false)
          setSubmitSuccess(false)
        }, 2000)
      } else {
        setSubmitError(result.error || "Failed to process download request")
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!brochures || brochures.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Download Brochures</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {brochures.map((brochure, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-base font-medium text-gray-900 mb-1">
                    {brochure.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-blue-600 font-medium">
                    {brochure.type}
                  </CardDescription>
                </div>
                {brochure.thumbnail && (
                  <img 
                    src={brochure.thumbnail} 
                    alt={brochure.title}
                    className="w-12 h-12 object-cover rounded ml-3"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {brochure.description && (
                <p className="text-sm text-gray-600 mb-3">
                  {brochure.description}
                </p>
              )}
              <Button
                onClick={() => handleBrochureSelect(brochure)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download {brochure.type}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-blue-600" />
              Download Brochure
            </DialogTitle>
            <DialogDescription>
              Please fill in your details to download the {selectedBrochure?.type} for {propertyTitle}.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="space-y-4">
              <Alert className="border-green-200 bg-green-50">
                <AlertCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Thank you! Your download should start automatically. Our team will contact you soon with more details.
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email (optional)"
                    className="mt-1"
                  />
                </div>
              </div>

              {submitError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    {submitError}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? "Processing..." : "Download Now"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
