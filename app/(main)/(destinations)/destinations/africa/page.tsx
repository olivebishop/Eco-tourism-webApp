import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/bookingBtn';
import Link from 'next/link';
import { destinations, featuredAdventures } from '@/utils/destinationData';
import DestinationsGrid from '@/components/destinations/destinationAfricaComponent';

export default function AfricaDestinations() {
    return (
        <div className="w-full min-h-screen bg-green-50">
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[40vh] min-h-[300px] flex items-center justify-center mb-12 md:mb-16 container mx-auto px-4">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="h-full rounded-3xl overflow-hidden">
                        <img
                            src="/images/diani.jpg"
                            alt="Beach sunset"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>
                </div>
                <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                        Destinations
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                        Discover the best of Africa with our eco-friendly tours and safaris
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 font-mono">
                    Discover Africa&apos;s Finest <br/>
                    <span className="font-serif italic text-green-600 text-2xl">Destinations</span>
                </h1>
           
                {/* Adventures Section */}
                <div className="py-8">
                    <h2 className="text-2xl font-bold mb-8">
                        Let&apos;s pack Adventure<span className="border-b-2 border-black">_</span>
                        <br />Activities
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                        {/* Left Column - Destination List */}
                        <div className="space-y-4">
                            {destinations.map((destination) => (
                                <Card key={destination.id} className="hover:shadow-lg bg-gray-100 transition-all duration-300">
                                    <CardContent className="p-4">
                                        <div className="flex gap-4">
                                            <img
                                                src={destination.imageUrl}
                                                alt={destination.name}
                                                className="w-24 h-24 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <MapPin className="h-4 w-4" />
                                                    {destination.location}
                                                </div>
                                                <h3 className="font-medium mt-1">{destination.name}</h3>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div>
                                                        <p className="text-xs text-gray-500">Price</p>
                                                        <p className="font-bold">KES {destination.price}</p>
                                                    </div>
                                                    <Link href={`/destinations/africa/${destination.id}`} passHref>
                                                        <Button variant="gooeyLeft" className="text-sm hover:text-green-600">
                                                            Book Now →
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Right Columns - Featured Adventures */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                            {featuredAdventures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className={`relative rounded-lg overflow-hidden ${
                                        index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
                                    }`}
                                >
                                    <img
                                        src={feature.imageUrl}
                                        alt={feature.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <span className="text-sm font-medium">{feature.tag}</span>
                                            <h3 className="text-2xl font-bold mt-2">{feature.title}</h3>
                                            <button className="mt-4 text-sm hover:underline">
                                                Take the Trip →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative my-16">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-green-50 px-4 text-sm text-gray-500">More Destinations</span>
                        </div>
                    </div>

                    {/* Destinations Grid Component */}
                    <DestinationsGrid />
                </div>
            </div>
        </div>
    );
}