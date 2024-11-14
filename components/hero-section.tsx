'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight  } from 'lucide-react'
import { useState } from 'react'


export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="container mx-auto px-4 ">
      <div className="rounded-3xl overflow-hidden">
        <Image
          src="/images/amboseli.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover lg:mt-8"
        />
      </div>
      <div className="mt-8 mb-12  ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="mb-6 md:mb-0 w-full md:w-auto ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 leading-tight">Explore the World</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl font-mono">
            Luxury Adventures And  Unforgettable Moments
            </p>
          </div>
          <Link 
            href="/destinations/africa" 
            className="bg-green-600 hover:bg-green-700 hover:text-gray-100 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition duration-300 inline-flex items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View Destinations
            <MoveUpRight  className={`ml-2 h-5 w-5  font-bold transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  )
}