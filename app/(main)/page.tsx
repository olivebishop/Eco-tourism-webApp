'use client'

import React, { useState, useEffect } from 'react'
import { FeaturesSection } from "@/components/home/features-section"
import { BlogsSection } from "@/components/home/offers-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { WorldMap } from "@/components/home/world-map"
import { DestinationCard } from "@/components/home/destination-card"
import { DestinationSkeleton } from "@/components/home/destination-sketelon"

interface Destination {
  id: string;
  imageData: string;
  name: string;
  amount: number;
  city: string;
}

export default function HomePage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch destinations
  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await fetch('/api/destinations')
        if (!response.ok) {
          throw new Error('Failed to fetch destinations')
        }
        const data = await response.json()
        setDestinations(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching destinations:', error)
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Recommendations for you</h2>
          </div>
          
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[...Array(5)].map((_, index) => (
                <DestinationSkeleton key={index} />
              ))}
            </div>
          ) : destinations.length === 0 ? (
            <div className="text-center">No destinations found</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {destinations.slice(0, 5).map((destination) => (
                <DestinationCard
                  key={destination.id}
                  image={destination.imageData || "/images/lamu.jpg"}
                  title={destination.name}
                  price={destination.amount}
                  location={destination.city}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <FeaturesSection />
      <CategoriesSection />
      <BlogsSection />
      <WorldMap />
    </main>
  )
}