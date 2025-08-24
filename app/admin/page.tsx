import PropertyAdmin from "@/components/property-admin"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
          <p className="text-gray-600 mt-2">Add, edit, and manage your property listings</p>
        </div>
        <PropertyAdmin />
      </div>
    </div>
  )
}
