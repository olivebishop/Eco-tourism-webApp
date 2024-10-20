'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
];

export default function ToursHeroCarousel() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: currentImage === index ? 1 : 0 }}
                    >
                        <Image
                            src={src}
                            alt={`Tour destination ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                ))}
            </div>

            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Discover the World&apos;s Wonders
                        </h1>
                        <p className="text-xl sm:text-2xl text-white mb-8">
                            Embark on unforgettable journeys to breathtaking destinations
                        </p>
                        <a
                            href="#explore"
                            className="inline-block py-3 px-8 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-300 transform hover:scale-105"
                        >
                            Explore Tours
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 left-0 right-0">
                <div className="flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}