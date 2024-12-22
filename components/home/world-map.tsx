import React from 'react';
import Image from 'next/image';

export function WorldMap() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Let&apos;s holiday and explore the world
        </h2>
        
        <p className="mt-3 md:mt-4 inline-block py-1 px-3 text-xs sm:text-sm font-semibold text-green-900 bg-green-100 rounded-full">
          Keep calm and enjoy your holiday
        </p>
        
        <div className="relative mt-8 md:mt-12">
          <div className="mx-auto max-w-5xl">
            {/* Responsive image container */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/world.svg"
                alt="World Map"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 90vw,
                       (max-width: 1024px) 80vw,
                       1200px"
              />
            </div>
            
            {/* Responsive markers */}
            <MapMarker left="15%" top="25%" title="North America" />
            <MapMarker left="30%" top="35%" title="Central America" />
            <MapMarker left="45%" top="20%" title="Europe" />
            <MapMarker left="55%" top="35%" title="Middle East" />
            <MapMarker left="60%" top="45%" title="India" />
            <MapMarker left="70%" top="30%" title="East Asia" />
            <MapMarker left="20%" top="50%" title="South America" />
            <MapMarker left="50%" top="55%" title="Africa" />
            <MapMarker left="80%" top="50%" title="Australia" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapMarker({
  left,
  top,
  title
}: {
  left: string;
  top: string;
  title: string;
}) {
  return (
    <div
      className="absolute group"
      style={{
        left,
        top
      }}
    >
      {/* Outer pulse ring */}
      <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-emerald-950 bg-opacity-50 rounded-full animate-ping" />
      
      {/* Main marker dot */}
      <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 bg-green-600 rounded-full shadow-lg animate-pulse" />
      
      {/* Marker label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white px-2 sm:px-3 py-1 rounded-md shadow-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}

export default WorldMap;