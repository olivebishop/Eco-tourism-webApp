'use client'

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Reduced for better visual balance

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
          throw new Error('No packages found , retry refreshing the page')
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

  // Calculate pagination
  const totalPages = Math.ceil(packages.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedPackages = packages.slice(startIndex, startIndex + itemsPerPage)

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-8 container mx-auto px-4">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="/images/diani.jpg"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Discover Kenya&apos;s Beauty
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Experience unforgettable adventures through our carefully curated travel packages
          </p>
        </div>
      </div>

      {/* Package Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Featured 
        <span className="text-green-600 "> Packages</span>
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index}
                className="h-[400px] bg-gray-100 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  package={pkg}
                />
              ))}
            </div>

            {packages.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                  No packages available
                </h3>
                <p className="text-gray-500">
                  Check back later for exciting new travel packages
                </p>
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <span className="text-lg font-medium text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}