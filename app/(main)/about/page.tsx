import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf,
  Globe,
  TreePine,
  Users
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'About Us | Forestline Tours',
  description: 'Learn more about Forestline Tours and our commitment to eco-friendly travel in Kenya.',
};

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: 'Amani Ochieng',
      role: 'Founder & CEO',
      img: '1539701938214-0d9736e1c16b'
    },
    {
      name: 'Zuri Kimani',
      role: 'Head of Conservation',
      img: '1573497019940-1c28c88b4f3e'
    },
    {
      name: 'Jabari Muthomi',
      role: 'Community Liaison',
      img: '1560250097-0b93528c311a'
    }
  ];

  // Destinations data
  const destinations = [
    {
      id: 1,
      image: '1535941339077-2dd1c7963098'
    },
    {
      id: 2,
      image: '1516815231560-8f41ec531527'
    },
    {
      id: 3,
      image: '1523805009345-7448845a9e53'
    }
  ];

  // Core values data
  const coreValues = [
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Supporting local communities and ensuring tourism benefits are shared equitably."
    },
    {
      icon: TreePine,
      title: "Environmental Stewardship",
      description: "Minimizing ecological impact and actively contributing to conservation efforts."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#f6efe5] to-green-50">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-black text-white">
        <div className="h-[40vh] md:h-[50vh] lg:h-[60vh] relative bg-black ">
          <Image
            src="https://cms.travelworld.nl/assets/hero/hero-5.jpg"
            alt="Hero image"
            fill
            priority
            className="object-cover z-1 opacity-60"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              About Us
            </h1>
          </div>
        </div>
        <div
          className="relative z-20 h-16 sm:h-20 md:h-24 lg:h-28 w-full -scale-y-100 bg-contain bg-repeat-x"
          style={{
            backgroundImage: "url('/images/banner_style.png')",
            filter: "invert(92%) sepia(2%) saturate(1017%) hue-rotate(342deg) brightness(106%) contrast(93%)"
          }}
        >
        </div>
      </div>
      <div className="container px-4 mx-auto">
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center my-16 lg:my-24">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-green-500" size={24} />
              <span className="text-green-600 font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Pioneering Sustainable Tourism
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Forestline Tours is committed to transforming travel experiences in Kenya. We blend adventure, conservation, and community empowerment to create journeys that are not just memorable, but meaningful.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Globe className="text-green-500" size={24} />
                <span className="text-gray-700">Eco-Friendly Practices</span>
              </div>
              <div className="flex items-center gap-3">
                <TreePine className="text-green-500" size={24} />
                <span className="text-gray-700">Conservation Focus</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
              alt="Eco-tourism landscape"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white py-16 rounded-2xl shadow-sm mb-16">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                We are driven by a passion for sustainable travel and a deep respect for Kenya&apos;s natural and cultural heritage.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-6 rounded-2xl hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <value.icon className="text-green-500" size={32} />
                    <h3 className="text-2xl font-semibold text-gray-800">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Impact</h2>
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Local Partners</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-green-600">10</h3>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">Eco-Destinations</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-green-600">12</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-32">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="aspect-[4/3] relative overflow-hidden rounded-3xl"
            >
              <Image
                className="object-cover hover:scale-105 transition-transform duration-300"
                src={`https://images.unsplash.com/photo-${destination.image}?w=400&h=300&fit=crop`}
                alt={`Eco-destination ${destination.id}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            Passionate Kenyans dedicated to sustainable tourism and conservation
          </p>
          <Link href="/careers">
            <Button
              variant="default"
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Join Our Team
            </Button>
          </Link>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 lg:pb-32">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group"
            >
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