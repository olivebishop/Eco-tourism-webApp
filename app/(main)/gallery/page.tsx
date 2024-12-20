'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/elephant.jpg',
    alt: 'Next.js Conference Logo with Golden Gate Bridge',
    featured: true
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference attendee in Next.js t-shirt'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference auditorium view'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference speakers on stage'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference attendees having fun'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Group photo of conference attendees'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Team members networking'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference attendees group photo'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference networking session'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Team members at conference booth'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Evening conference event'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference social gathering'
  },
  {
    src: '/images/forest.jpg',
    alt: 'Conference social gathering'
  }
];

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6efe5]">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-black text-white">
        <div className="h-40">
        <Image
        src="/images/hero_packages.jpg"
        alt="image"
        width={1920}
        height={160}
        className="z-1 absolute left-0 top-0 h-full w-full object-cover"
        priority
      />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              Explore   Gallery
            </h1>
          </div>
        </div>
        <div
          className="relative z-20 h-32 w-full -scale-y-[1] bg-contain bg-repeat-x"
          style={{
            backgroundImage: "url('/images/banner_style.png')",
            filter:
              "invert(92%) sepia(2%) saturate(1017%) hue-rotate(342deg) brightness(106%) contrast(93%)",
          }}
        />
      </div>

      {/* Framer Animation for Dotted Line */}
      <section className="block-divider_dotted scroll-my-28 w-full">
        <div className="container">
          <div className="flex justify-center relative">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 165 157" 
              className="h-28 md:h-36"
            >
              <motion.path 
                d="M0 0c14.69 46.684 41.909 70.026 81.657 70.026 59.623 0 72.343 45.146 72.343 68.914" 
                stroke="#283A2C"
                strokeWidth="2"
                opacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                fillRule="evenodd"
                strokeMiterlimit="10"
                initial={{ strokeDashoffset: 10 }}
                animate={{ 
                  strokeDashoffset: 0,
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{
                  strokeDasharray: "0, 10"
                }}
              />
              <ellipse 
                fill="#283A2C" 
                opacity="0.25" 
                cx="154" 
                cy="145.932" 
                rx="11" 
                ry="11.068"
              />
              <ellipse 
                fill="#283A2C" 
                cx="154" 
                cy="145.932" 
                rx="5" 
                ry="5.031"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl mt-4 md:text-4xl font-semibold text-gray-800 mb-12 text-center">
          Where Nature Meets<span className="text-green-600 relative">
        Adventure
          <svg
            className="absolute -bottom-1 left-0 w-full"
            viewBox="0 0 100 9"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 Q50,0 100,10"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              
            />
          </svg>
        </span>
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;