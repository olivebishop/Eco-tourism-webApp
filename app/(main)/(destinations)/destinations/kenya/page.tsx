'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DestinationCard } from '@/components/destinations/destinations-card'
import { DestinationCardSkeleton } from '@/components/destinations/destinations-card-skeleton'
import { CountrySidebar } from '@/components/destinations/location-sidebar'
import { Destination } from '@/types/destinations'
import { useParams } from 'next/navigation'

const CACHE_KEY = 'destinations_data'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const params = useParams()
  const countrySlug = params?.country as string | undefined

  const itemsPerPage = 8

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true)

        const cachedData = localStorage.getItem(CACHE_KEY)
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData)
          if (Date.now() - timestamp < CACHE_DURATION) {
            setDestinations(data)
            setLoading(false)
            return
          }
        }

        const response = await fetch('/api/destinations')
        if (!response.ok) {
          throw new Error('No destinations found, retry refreshing the page')
        }
        const data = await response.json()

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data,
            timestamp: Date.now(),
          })
        )

        setDestinations(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  // Filter destinations by country slug if provided
  const filteredDestinations = countrySlug
    ? destinations.filter((dest) =>
        dest.country.toLowerCase() === decodeURIComponent(countrySlug).toLowerCase()
      )
    : destinations

  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-green-100">
        <div className="text-center space-y-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-red-600">
            Error Loading Destinations
          </h2>
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
    <div className="min-h-screen bg-gradient-to-b from-[#f6efe5]">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-black text-white">
        <div className="h-40">
          <img
            src="/images/hero_packages.jpg"
            alt="Destinations Hero"
            className="z-1 absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              {countrySlug 
                ? `${decodeURIComponent(countrySlug)} Destinations` 
                : 'Explore Destinations'
              }
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <h2 className="text-3xl mt-4  md:text-4xl font-semibold text-gray-800 mb-12 text-center">
          Our Featured <span className="text-green-600 relative">
          Packages
          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 100 15"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 Q50,0 100,10"
              //  stroke="#000000"
             stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </span>
          
        </h2>

        <div className="flex flex-col lg:flex-row">
          {/* Country Sidebar (hidden on small screens) */}
          <div className="hidden lg:block">
            <CountrySidebar />
          </div>

          {/* Destination Cards */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <DestinationCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <>
                {displayedDestinations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedDestinations.map((destination) => (
                      <DestinationCard key={destination.id} destination={destination} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                      No destinations found
                    </h3>
                    <p className="text-gray-500">
                      {countrySlug
                        ? `No destinations available for ${decodeURIComponent(countrySlug)}. Try exploring other countries.`
                        : "Check back later for exciting new travel destinations."}
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-600"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}