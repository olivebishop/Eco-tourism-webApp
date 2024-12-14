import { PrismaClient } from '@prisma/client'
import { Destination } from '@/types/destinations'

const prisma = new PrismaClient()

export async function getAllDestinations(): Promise<Destination[]> {
  try {
    const destinations = await prisma.destination.findMany()
    return destinations.map(destination => ({
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
    }))
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

    if (!destination) {
      return null
    }

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
  } catch (error) {
    console.error('Error fetching destination by ID:', error)
    return null
  }
}

export async function getDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    // Decode the slug and handle potential variations
    const decodedSlug = decodeURIComponent(slug).toLowerCase()

    const destination = await prisma.destination.findFirst({
      where: {
        OR: [
          { 
            country: { 
              equals: decodedSlug,
              mode: 'insensitive'
            } 
          },
          { 
            name: { 
              equals: decodedSlug,
              mode: 'insensitive'
            } 
          },
          { 
            country: { 
              equals: decodedSlug.replace(/-/g, ' '),
              mode: 'insensitive'
            } 
          },
          { 
            name: { 
              equals: decodedSlug.replace(/-/g, ' '),
              mode: 'insensitive'
            } 
          }
        ]
      }
    })

    if (!destination) {
      return null
    }

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
  } catch (error) {
    console.error('Error fetching destination by slug:', error)
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
    return destinations.map(destination => ({
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
    }))
  } catch (error) {
    console.error('Error fetching destinations by country:', error)
    return []
  }
}

