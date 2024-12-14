import { notFound } from 'next/navigation'
import DestinationDetail from '@/components/destinations/destination-detail'
import { getDestinationById, getDestinationBySlug } from '@/lib/destinations'
import { Destination } from '@/types/destinations'

export default async function DestinationPage({ params }: { params: { country: string, id: string } }) {
  let destination: Destination | null = null

  // Try fetching by ID first
  destination = await getDestinationById(params.id)

  // If not found by ID, try fetching by slug
  if (!destination) {
    destination = await getDestinationBySlug(params.id)
  }

  if (!destination || destination.country.toLowerCase() !== params.country.toLowerCase()) {
    notFound()
  }

  return <DestinationDetail destination={destination} />
}

