import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import PackageCard from './PackageCard';
import { Package } from "@/types/packages";

interface PackageListingProps {
  packages: Package[];
  itemsPerPage?: number;
}

const PackageListing: React.FC<PackageListingProps> = ({ 
  packages, 
  itemsPerPage = 6 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(packages.length / itemsPerPage);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPackages = packages.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPackages.map((pkg) => (
          <PackageCard key={pkg.id} package={pkg} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-12 h-12 rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-600"
          >
            <ArrowRight className="h-6 w-6 rotate-180" />
          </Button>
          <span className="text-lg font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="w-12 h-12 rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-600"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PackageListing;
