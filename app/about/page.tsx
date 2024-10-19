import React from 'react';
import Image from 'next/image';
import { Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container px-4 mx-auto">
        <div className="flex items-center flex-wrap mb-32 mt-14 -mx-8">
          <div className="w-full lg:w-1/2 p-8">
            <Image
              className="rounded-3xl w-full"
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
              alt="Eco-tourism landscape"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <div className="py-1 px-3 rounded-lg border border-green-200 bg-green-50 inline-flex items-center gap-2 mb-6 mt-12">
              <Leaf size={16} className="text-green-500" />
              <span className="text-green-500 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">
              Pioneering Eco-Tourism in Kenya
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              At EcoVentures, we&apos;re on a mission to showcase Kenya&apos;s natural beauty while promoting sustainable travel. Our aim is to create immersive eco-friendly experiences that protect our environment, support local communities, and inspire a new generation of responsible travelers.
            </p>
          </div>
        </div>

        <h2 className="text-4xl font-bold font-heading mb-10">Our Values</h2>
        <div className="flex flex-wrap mb-32">
          <div className="w-full lg:w-1/2 p-4">
            <div className="relative bg-white p-8 h-full rounded-3xl">
              <div className="absolute top-8 left-0 bg-green-500 w-0.5 h-6"></div>
              <div className="pl-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Environmental Stewardship</h2>
                <p className="text-gray-600">We are committed to preserving Kenya&apos;s diverse ecosystems. Every adventure we offer is designed to minimize environmental impact and contribute to conservation efforts.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="relative bg-white p-8 h-full rounded-3xl">
              <div className="absolute top-8 left-0 bg-green-500 w-0.5 h-6"></div>
              <div className="pl-8">
                <h2 className="text-2xl font-bold font-heading mb-4">Community Empowerment</h2>
                <p className="text-gray-600">We believe in the power of tourism to uplift local communities. By partnering with indigenous groups and local businesses, we ensure that the benefits of eco-tourism are shared equitably.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-6 -mx-4">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-4xl font-bold font-heading mb-10">Our Impact</h2>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex lg:justify-end flex-wrap">
              <div className="w-full sm:w-1/2 py-8">
                <div className="sm:border-r sm:border-green-200 px-8">
                  <p className="text-gray-600 text-sm text-center mb-2">Local Partners</p>
                  <h2 className="text-4xl font-semibold text-center">10</h2>
                </div>
              </div>
              <div className="w-full sm:w-1/2 py-8">
                <div className="px-8">
                  <p className="text-gray-600 text-sm text-center mb-2">Eco-Destinations</p>
                  <h2 className="text-4xl font-semibold text-center">12</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mb-32 -mx-4">
          <div className="w-full lg:w-1/3 p-4">
            <Image
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=400&h=300&fit=crop"
              alt="Eco-destination 1"
              width={400}
              height={300}
            />
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <Image
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=400&h=300&fit=crop"
              alt="Eco-destination 2"
              width={400}
              height={300}
            />
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <Image
              className="h-full w-full object-cover rounded-3xl"
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&h=300&fit=crop"
              alt="Eco-destination 3"
              width={400}
              height={300}
            />
          </div>
        </div>

        <h2 className="text-4xl font-bold font-heading text-center mb-4">Meet Our Team</h2>
        <p className="text-center text-gray-600 mb-4">Passionate Kenyans dedicated to sustainable tourism and conservation</p>
        <div className="mb-16 flex justify-center">
          <Button variant="default" size="lg" className="bg-green-500 hover:bg-green-600 text-white">
          Careers
          </Button>
        </div>
        <div className="flex flex-wrap pb-32 -mx-4">
          <div className="w-full lg:w-1/3 p-4">
            <div className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto" style={{height: '440px', backgroundImage: "url('https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=400&h=600&fit=crop')"}}>
              <div className="absolute bottom-0 left-0 bg-green-100 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                <h2 className="text-2xl font-bold font-heading mb-2">Amani Ochieng</h2>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto" style={{height: '440px', backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=600&fit=crop')"}}>
              <div className="absolute bottom-0 left-0 bg-green-100 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                <h2 className="text-2xl font-bold font-heading mb-2">Zuri Kimani</h2>
                <p className="text-sm text-gray-600">Head of Conservation</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <div className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto" style={{height: '440px', backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop')"}}>
              <div className="absolute bottom-0 left-0 bg-green-100 rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                <h2 className="text-2xl font-bold font-heading mb-2">Jabari Muthomi</h2>
                <p className="text-sm text-gray-600">Community Liaison</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}