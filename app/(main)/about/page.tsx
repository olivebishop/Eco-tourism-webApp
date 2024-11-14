import React from 'react';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="bg-green-50">
      {/* Hero Section - Increased height on larger screens */}
      <div className="relative h-[50vh] md:h-[40vh] min-h-[300px] flex items-center justify-center mb-12 md:mb-16 container mx-auto px-4">
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="/images/diani.jpg"
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the best of Kenya with our eco-friendly tours and safaris
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        {/* About Section with improved responsive layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center mb-20 lg:mb-32 gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 hidden md:block"> {/* Hide on small screens */}
            <Image
              className="rounded-3xl w-full hover:scale-[1.02] transition-transform duration-300"
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
              alt="Eco-tourism landscape"
              width={800}
              height={600}
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="py-1.5 px-4 rounded-lg border border-green-200 bg-green-50 inline-flex items-center gap-2">
              <Leaf size={16} className="text-green-500" />
              <span className="text-green-500 text-sm font-medium">who are we?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-heading">
              Pioneering Eco-Tourism in Kenya
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Frontline Tours, we&apos;re on a mission to showcase Kenya&apos;s natural beauty while promoting sustainable travel. Our aim is to create immersive eco-friendly experiences that protect our environment, support local communities, and inspire a new generation of responsible travelers.
            </p>
          </div>
        </div>

        {/* Values Section with improved spacing */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 md:mb-10">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-20 lg:mb-32">
          <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-8 left-0 bg-green-500 w-1 h-6"></div>
            <div className="pl-6 md:pl-8">
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-4">Environmental Stewardship</h3>
              <p className="text-gray-600 leading-relaxed">We are committed to preserving Kenya&apos;s diverse ecosystems. Every adventure we offer is designed to minimize environmental impact and contribute to conservation efforts.</p>
            </div>
          </div>
          <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-8 left-0 bg-green-500 w-1 h-6"></div>
            <div className="pl-6 md:pl-8">
              <h3 className="text-xl md:text-2xl font-bold font-heading mb-4">Community Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">We believe in the power of tourism to uplift local communities. By partnering with indigenous groups and local businesses, we ensure that the benefits of eco-tourism are shared equitably.</p>
            </div>
          </div>
        </div>

        {/* Impact Section with improved responsive stats */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Impact</h2>
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Local Partners</p>
                <h3 className="text-3xl md:text-4xl font-semibold">10</h3>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Eco-Destinations</p>
                <h3 className="text-3xl md:text-4xl font-semibold">12</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Gallery with improved grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-32">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[4/3] relative overflow-hidden rounded-3xl">
              <Image
                className="object-cover hover:scale-105 transition-transform duration-300"
                src={`https://images.unsplash.com/photo-${i === 1 ? '1535941339077-2dd1c7963098' : i === 2 ? '1516815231560-8f41ec531527' : '1523805009345-7448845a9e53'}?w=400&h=300&fit=crop`}
                alt={`Eco-destination ${i}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Team Section with improved card design */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">Passionate Kenyans dedicated to sustainable tourism and conservation</p>
          <Link href="/careers">
      <Button 
        variant="default" 
        size="lg" 
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        Careers
      </Button>
    </Link>
        </div>
        
        {/* Team Cards with improved responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 lg:pb-32">
          {[
            { name: 'Amani Ochieng', role: 'Founder & CEO', img: '1539701938214-0d9736e1c16b' },
            { name: 'Zuri Kimani', role: 'Head of Conservation', img: '1573497019940-1c28c88b4f3e' },
            { name: 'Jabari Muthomi', role: 'Community Liaison', img: '1560250097-0b93528c311a' }
          ].map((member) => (
            <div key={member.name} className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
              <Image
                src={`https://images.unsplash.com/photo-${member.img}?w=400&h=600&fit=crop`}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-100/95 px-6 py-4 backdrop-blur-sm">
                <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}