'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';
import { destinations } from '@/utils/destinationData';

export default function Component() {
  const router = useRouter();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDestinations = destinations.slice(startIndex, endIndex);

  const handleBookNow = (destinationId: number) => {
    router.push(`/destinations/africa/${destinationId}`);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Top Destinations
            <span className="block text-2xl font-normal text-green-600 mt-2">
              Discover Africa&apos;s Finest Adventures
            </span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentDestinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-none"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-600 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.location}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{destination.name}</h3>
                  
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-2xl font-bold text-green-600">
                        {destination.price}
                      </p>
                    </div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
                      onClick={() => handleBookNow(destination.id)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-2" /> Previous
          </Button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}