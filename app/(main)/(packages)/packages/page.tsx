'use client'
import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Palmtree, Mountain, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PackageCard } from "@/components/packages/package-card"
import { Package } from "@/types/packages"

// Cache configuration
const CACHE_KEY = 'packages_data'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9 // Increased from 6 to 9 for better grid layout

  // Dynamic package types based on content
  const packageTypes = useMemo(() => {
    const types = new Set<string>()
    packages.forEach(pkg => {
      const location = pkg.location.toLowerCase()
      if (location.includes('beach') || location.includes('coast')) {
        types.add('beach')
      } else if (location.includes('park') || location.includes('reserve') || location.includes('safari')) {
        types.add('bush')
      } else {
        types.add('weekend')
      }
    })
    return Array.from(types)
  }, [packages])

  const typeIcons = {
    beach: Palmtree,
    bush: Mountain,
    weekend: Calendar
  }

  const typeNames = {
    beach: 'Beach Getaways',
    bush: 'Safari Adventures',
    weekend: 'Weekend Escapes'
  }

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        
        // Check cache first
        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)
          if (Date.now() - timestamp < CACHE_DURATION) {
            setPackages(data)
            setLoading(false)
            return
          }
        }

        const response = await fetch('/api/packages')
        if (!response.ok) {
          throw new Error('Failed to fetch packages')
        }
        const data = await response.json()
        
        // Update cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data,
          timestamp: Date.now()
        }))
        
        setPackages(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  // Filter packages based on selected type
  const filteredPackages = useMemo(() => {
    if (selectedType === 'all') return packages
    
    return packages.filter(pkg => {
      const location = pkg.location.toLowerCase()
      if (selectedType === 'beach') {
        return location.includes('beach') || location.includes('coast')
      }
      if (selectedType === 'bush') {
        return location.includes('park') || location.includes('reserve') || location.includes('safari')
      }
      return !location.includes('beach') && !location.includes('coast') && 
             !location.includes('park') && !location.includes('reserve') && 
             !location.includes('safari')
    })
  }, [packages, selectedType])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedPackages = filteredPackages.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedType])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 ">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-red-600">Error Loading Packages</h2>
          <p className="text-gray-600 text-lg">{error}</p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-8 container mx-auto px-4">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="/images/diani.jpg"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Discover Kenya&apos;s Beauty
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Experience unforgettable adventures through our carefully curated travel packages
          </p>
        </div>
      </div>

      {/* Package Types Filter */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          <Button
            key="all"
            variant={selectedType === 'all' ? 'default' : 'outline'}
            className={`h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium transition-all ${
              selectedType === 'all' 
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-md' 
                : 'hover:bg-green-50 hover:text-green-600 hover:border-green-600'
            }`}
            onClick={() => setSelectedType('all')}
          >
            All Packages
          </Button>
          {packageTypes.map((type) => {
            const Icon = typeIcons[type as keyof typeof typeIcons]
            return (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                className={`h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium transition-all ${
                  selectedType === type 
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-md' 
                    : 'hover:bg-green-50 hover:text-green-600 hover:border-green-600'
                }`}
                onClick={() => setSelectedType(type)}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                <span className="hidden sm:inline">{typeNames[type as keyof typeof typeNames]}</span>
                <span className="sm:hidden">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Package Cards */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div 
                key={index}
                className="h-[500px] bg-gray-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  package={pkg}
                />
              ))}
            </div>

            {displayedPackages.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-500">
                  Try selecting a different category or check back later
                </p>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 md:w-12 md:h-12 hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                className={`w-10 h-10 md:w-12 md:h-12 text-base md:text-lg font-medium ${
                  currentPage === page 
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-md' 
                    : 'hover:bg-green-50 hover:text-green-600 hover:border-green-600'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 md:w-12 md:h-12 hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}