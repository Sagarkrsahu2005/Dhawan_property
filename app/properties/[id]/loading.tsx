export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="h-96 lg:h-[500px] bg-gray-300 rounded-2xl"></div>
          </div>
          <div className="h-96 bg-gray-300 rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}
