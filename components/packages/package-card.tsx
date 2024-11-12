import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"
import { Package } from "@/types/packages"

interface PackageCardProps {
  package: Package
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Link href={`/packages/${pkg.id}`}>
      <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:border-green-200 overflow-hidden bg-white">
        {/* Image Container */}
        <div className="relative h-[280px] overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-green-700 font-semibold shadow-lg">
              KES {Number(pkg.price).toLocaleString()}
            </span>
          </div>
          <img
            src={pkg.imageData || '/images/placeholder.jpg'}
            alt={pkg.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-6 space-y-6">
          {/* Package Name */}
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 leading-tight">
            {pkg.name}
          </h3>
          
          {/* Location and Duration Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium truncate">
                {pkg.location}
              </span>
            </div>
            
            <div className="flex items-center text-gray-600 justify-end">
              <Clock className="w-5 h-5 mr-2 text-green-600 flex-shrink-0" />
              <span className="text-sm font-medium">
                {pkg.duration}
              </span>
            </div>
          </div>
          
          {/* Divider */}
          {/* <div className="h-px bg-gray-100" /> */}
          
          {/* Group Size and Price Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                <span className="text-sm font-medium">
                  {pkg.groupSize} max
                </span>
              </div>
            </div>
            
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 group/btn"
            >
              <span className="mr-2">View Details</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </div>
          
          {/* Features/Highlights */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['All inclusive', 'Guide', 'Transport'].map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}