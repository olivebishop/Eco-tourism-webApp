// File: pages/packages/page.tsx
'use client'

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PackageCard } from "@/components/package-card"
import { packageTypes, simpleDestinations } from "@/utils/package"

export default function PackagesPage() {
  const [selectedType, setSelectedType] = React.useState('all')
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 6 // Reduced from 9 to better fit the smaller dataset

  // Filter destinations based on selected type
  const filteredDestinations = simpleDestinations.filter(
    dest => selectedType === 'all' || dest.type === selectedType
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // Reset to first page when filter changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedType])

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Travel Packages
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
            Discover the beauty of Kenya through our carefully curated travel experiences
          </p>
        </div>
      </div>

      {/* Package Types Filter - Made more responsive */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <Button
            key="all"
            variant={selectedType === 'all' ? 'default' : 'outline'}
            className={`h-10 md:h-12 px-4 md:px-6 text-sm md:text-base transition-all ${
              selectedType === 'all' 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'hover:bg-green-50 hover:text-green-600 hover:border-green-600'
            }`}
            onClick={() => setSelectedType('all')}
          >
            All Packages
          </Button>
          {packageTypes.map((type) => {
            const Icon = type.icon
            return (
              <Button
                key={type.id}
                variant={selectedType === type.id ? 'default' : 'outline'}
                className={`h-10 md:h-12 px-4 md:px-6 text-sm md:text-base transition-all ${
                  selectedType === type.id 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'hover:bg-green-50 hover:text-green-600 hover:border-green-600'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="hidden sm:inline">{type.name}</span>
                <span className="sm:hidden">{type.name.split(' ')[0]}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Package Cards - Responsive grid */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedDestinations.map((destination) => (
            <PackageCard
              key={destination.id}
              name={destination.name}
              image={destination.image}
            />
          ))}
        </div>

        {/* Pagination - Made more responsive */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 md:gap-2 mt-8 md:mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 md:w-10 md:h-10 hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                className={`w-8 h-8 md:w-10 md:h-10 text-sm md:text-base ${
                  currentPage === page 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
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
              className="w-8 h-8 md:w-10 md:h-10 hover:bg-green-50 hover:text-green-600 hover:border-green-600"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}