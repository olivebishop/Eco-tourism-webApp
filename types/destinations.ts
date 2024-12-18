export interface Destination {
  [x: string]: string | StaticImport
  id: string
  name: string
  country: string
  city: string
  amount: number
  tags: string[]
  imageData: string
  description: string
  daysNights: number
  tourType: 'DAYS' | 'NIGHTS'
}

