'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DestinationDetail } from '@/components/destinationDetail'
import { destinations } from '@/utils/destinationData'

export default function DestinationPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const destination = destinations.find(d => d.id === Number(id))

  if (!destination) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Destination Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn&apos;t find the destination you&apos;re looking for.</p>
          <button 
            onClick={() => router.push('/destinations/africa')}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Destinations
          </button>
        </div>
      </div>
    )
  }

  return (
    <DestinationDetail
      destination={destination}
      onClose={() => router.push('/destinations/africa')}
    />
  )
}