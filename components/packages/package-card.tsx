import Image from 'next/image';
import { Package } from '@/types/packages';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={pkg.imageData || "/placeholder.svg?height=300&width=400"}
          alt={pkg.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 capitalize">{pkg.name}</h2>
        <p className="text-gray-600 mb-2 capitalize">{pkg.location}</p>
        <p className="text-gray-600 mb-2 capitalize">{pkg.duration}</p>
        <p className="text-gray-700 font-semibold mb-2 capitalize">Price: kes. {pkg.price.toLocaleString()}</p>
        {pkg.type && <p className="text-gray-600 mb-2 capitalize">Type: {pkg.type}</p>}
      </div>
    </div>
  );
}

