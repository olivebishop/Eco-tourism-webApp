export interface Package {
    type: string
    id: string
    name: string
    location: string
    imageData: string | null
    duration: string
    groupSize: string
    price: number
    description: string
    included: string[]
    authorId: string
    authorName: string
    createdAt: Date
    updatedAt: Date
  }