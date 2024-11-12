import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PackageCardProps {
  name: string;
  image: string;
}

export function PackageCard({ name, image }: PackageCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:border-green-200">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-700 transition-colors duration-300">{name}</h3>
        <p className="text-gray-600 mb-6">
          Experience the beauty of {name} with our curated package
        </p>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
          Explore Package
        </Button>
      </CardContent>
    </Card>
  )
}