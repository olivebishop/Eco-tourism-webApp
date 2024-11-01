'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight,  MapPin, Calendar, Users } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  price: number;
  duration: string;
  imageUrl: string;
  rating: number;
  group: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Masai Mara Safari",
    location: "Kenya",
    price: 3420,
    duration: "7 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800&auto=format&fit=crop",
    rating: 4.8,
    group: "Small Group"
  },
  {
    id: 2,
    name: "Serengeti Adventure",
    location: "Tanzania",
    price: 4200,
    duration: "10 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop",
    rating: 4.9,
    group: "Private Tour"
  },
  {
    id: 3,
    name: "Victoria Falls",
    location: "Zimbabwe",
    price: 2800,
    duration: "5 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop",
    rating: 4.7,
    group: "Guided Tour"
  },
  {
    id: 4,
    name: "Sahara Desert Trek",
    location: "Morocco",
    price: 2500,
    duration: "6 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&auto=format&fit=crop",
    rating: 4.6,
    group: "Adventure Group"
  },
  {
    id: 5,
    name: "Cape Town Explorer",
    location: "South Africa",
    price: 3100,
    duration: "8 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800&auto=format&fit=crop",
    rating: 4.8,
    group: "Family Tour"
  },
  {
    id: 6,
    name: "Zanzibar Beach",
    location: "Tanzania",
    price: 2900,
    duration: "7 Days Trip",
    imageUrl: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&auto=format&fit=crop",
    rating: 4.9,
    group: "Luxury Package"
  }
];

const DestinationsGrid = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDestinations = destinations.slice(startIndex, endIndex);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-50 py-16">
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

        {/* Grid */}
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
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.group}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-green-600 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.location}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{destination.name}</h3>
                  
                  <div className="mb-4">
                    {renderStars(destination.rating)}
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.group}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-2xl font-bold text-green-600">
                        ${destination.price.toLocaleString()}
                      </p>
                    </div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 ${
                  currentPage === page 
                    ? "bg-green-600 text-white hover:bg-green-700" 
                    : "text-green-600 border-green-600 hover:bg-green-50"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50"
          >
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsGrid;