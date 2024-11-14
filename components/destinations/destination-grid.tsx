'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Package, Camera, ChevronLeft, ChevronRight } from 'lucide-react'

interface DestinationProps {
    id: string
    name: string
    packages: number
    images: string[]
    description: string
}

interface WildlifeImageProps {
    id: string
    imageUrl: string
    alt: string
}

const destinations: DestinationProps[] = [
    {
        id: '1',
        name: "Mombasa North Coast",
        packages: 3,
        images: ["/images/mombasa.jpg", "/images/bamburi.jpg", "/images/nyali.jpg"],
        description: "Pristine beaches and marine conservation"
    },
    { id: '2', name: "Diani/Ukunda", packages: 2, images: ["/images/diani.jpg"], description: "Coral reef protection and eco-lodges" },
    { id: '3', name: "Malindi/Watamu", packages: 2, images: ["/images/watamu.jpg"], description: "Sea turtle conservation and mangrove forests" },
    { id: '4', name: "Maasai Mara", packages: 2, images: ["/images/masaaiMara.jpg"], description: "Wildlife conservation and cultural experiences" },
    { id: '5', name: "Amboseli", packages: 1, images: ["/images/amboseli.jpg"], description: "Elephant protection and sustainable safaris" },
]

const wildlifeImages: WildlifeImageProps[] = [
    { id: '1', imageUrl: "/images/zebra.jpg", alt: "Zebra" },
    { id: '2', imageUrl: "/images/lion.jpeg", alt: "Lion" },
    { id: '3', imageUrl: "/images/elephant.jpg", alt: "Elephant" },
    { id: '4', imageUrl: "/images/giraffe.jpeg", alt: "Giraffe" },
]

const DestinationCard: React.FC<DestinationProps> = ({ name, packages, images, description }) => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [images.length])

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <Card className="overflow-hidden group h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent className="p-0 relative h-full">
                <div className="relative h-64">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${name} - Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className={`transition-opacity duration-300 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                    {images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white/80 transition-colors duration-200 z-10">
                                <ChevronLeft className="w-6 h-6 text-green-800" />
                            </button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-1 hover:bg-white/80 transition-colors duration-200 z-10">
                                <ChevronRight className="w-6 h-6 text-green-800" />
                            </button>
                        </>
                    )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-xl mb-2">{name}</h3>
                    <p className="text-green-200 text-sm mb-2">{description}</p>
                    <div className="flex items-center text-white">
                        <Package className="w-4 h-4 mr-2" />
                        <span>({packages}) Eco Packages</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function DestinationGrid() {
    return (
        <div className="bg-green-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center text-green-800">Eco-Friendly Destinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div key={dest.id} className={index === 0 ? "md:col-span-2" : ""}>
                            <Link href={`/packages`}>
                                <DestinationCard {...dest} />
                            </Link>
                        </div>
                    ))}
                </div>

                <h2 className="text-4xl font-bold my-16 text-center text-green-800">Encounter Kenya&apos;s Majestic Wildlife</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {wildlifeImages.map((image) => (
                        <Card key={image.id} className="overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            <CardContent className="p-0 relative aspect-square">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Camera className="w-12 h-12 text-white" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}