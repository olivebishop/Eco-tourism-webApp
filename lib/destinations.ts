import { PrismaClient } from '@prisma/client'
import { Destination } from '@/types/destinations'
import { Destination as PrismaDestination } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllDestinations(): Promise<Destination[]> {
  try {
    const destinations = await prisma.destination.findMany()
    return destinations.map(mapDestination)
  } catch (error) {
    console.error('Error fetching all destinations:', error)
    return []
  }
}

export async function getDestinationById(id: string): Promise<Destination | null> {
  try {
    const destination = await prisma.destination.findUnique({
      where: { id },
    })
    return destination ? mapDestination(destination) : null
  } catch (error) {
    console.error('Error fetching destination by ID:', error)
    return null
  }
}

export async function getDestinationsByCountry(country: string): Promise<Destination[]> {
  try {
    const destinations = await prisma.destination.findMany({
      where: {
        country: {
          equals: country,
          mode: 'insensitive'
        }
      }
    })
    return destinations.map(mapDestination)
  } catch (error) {
    console.error('Error fetching destinations by country:', error)
    return []
  }
}

function mapDestination(destination: PrismaDestination): Destination {
  return {
    id: destination.id,
    name: destination.name,
    country: destination.country,
    city: destination.city,
    amount: destination.amount.toNumber(),
    tags: destination.tags,
    imageData: destination.imageData || '',
    description: destination.description,
    daysNights: destination.daysNights,
    tourType: destination.tourType,
  }
}

