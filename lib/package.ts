import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getPackageById(id: string) {
  try {
    const pkg = await prisma.package.findUnique({
      where: { id },
    })
    
    if (pkg) {
      return {
        ...pkg,
        price: Number(pkg.price),
      }
    }
    
    return null
  } catch (error) {
    console.error('Failed to fetch package:', error)
    return null
  }
}