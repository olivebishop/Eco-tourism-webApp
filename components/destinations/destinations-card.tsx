import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Destination } from '@/types/destinations'

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <Image
          src={destination.imageData || "/placeholder.svg?height=300&width=400"}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold mb-2 capitalize text-gray-800">{destination.name}</h2>
        <div className="space-y-1">
          <p className="text-gray-600 capitalize flex items-center">
            <span className="mr-2">📍</span>
            {destination.country}, {destination.city}
          </p>
          <p className="text-gray-600 capitalize flex items-center">
            <span className="mr-2">⏱️</span>
            {destination.daysNights} {destination.tourType}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold text-lg">
            Kes. {destination.amount.toLocaleString()}
          </p>
          <Link href={`/destinations/${destination.country.toLowerCase()}/${destination.id}`}>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 group/btn text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
            >
              <span className="mr-1 sm:mr-2">View Details</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

