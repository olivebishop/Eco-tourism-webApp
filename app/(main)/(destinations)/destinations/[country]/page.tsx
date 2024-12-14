import { notFound } from 'next/navigation'
import { getDestinationsByCountry } from '@/lib/destinations'
import { DestinationCard } from '@/components/destinations/destinations-card'

export default async function CountryDestinationsPage({ params }: { params: { country: string } }) {
  const destinations = await getDestinationsByCountry(params.country)

  if (destinations.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.country} Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(destination => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  )
}

