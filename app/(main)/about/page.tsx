import React from 'react';
import Image from 'next/image';
import { Leaf, TreePine, Globe, Users } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Forestline Tours',
  description: 'Learn more about Forestline Tours and our commitment to eco-friendly travel in Kenya.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[50vh] min-h-[400px] flex items-center justify-center mb-16 md:mb-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/diani.jpg"
              alt="Eco-tourism landscape"
              fill
              priority
              className="object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-900/70 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Pioneering Sustainable Travel in Kenya&apos;s Most Beautiful Landscapes
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto">
        {/* Mission Statement Section */}
        <section className="mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-4 py-2">
                <Leaf className="text-green-600" size={20} />
                <span className="text-green-700 font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Transforming Travel, Protecting Nature
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Forestline Tours, we believe in travel that doesn&apos;t just explore the world, but actively preserves it. Our mission is to create immersive, sustainable experiences that connect travelers with Kenya&apos;s incredible ecosystems while supporting local communities.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
                alt="Sustainable tourism landscape"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TreePine,
                title: "Environmental Stewardship",
                description: "Committed to preserving Kenya's diverse ecosystems through responsible tourism practices."
              },
              {
                icon: Globe,
                title: "Cultural Respect",
                description: "Celebrating and supporting local communities, traditions, and indigenous knowledge."
              },
              {
                icon: Users,
                title: "Community Empowerment",
                description: "Creating economic opportunities and sustainable development through ethical tourism."
              },
              {
                icon: Leaf,
                title: "Sustainable Innovation",
                description: "Continuously improving our approach to minimize environmental impact and maximize positive change."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow space-y-4 text-center"
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="text-green-600" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="bg-green-50 rounded-2xl p-8 md:p-16 mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through sustainable tourism, we&apos;re making a tangible difference in conservation and community development.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Eco-Destinations" },
              { number: "10+", label: "Local Partnerships" },
              { number: "5000+", label: "Travelers Impacted" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-green-700 mb-3">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to sustainable tourism and environmental conservation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Amani Ochieng", 
                role: "Founder & CEO", 
                image: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b"
              },
              { 
                name: "Zuri Kimani", 
                role: "Head of Conservation", 
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              },
              { 
                name: "Jabari Muthomi", 
                role: "Community Liaison", 
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-100 rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Sustainably?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create meaningful, eco-friendly travel experiences that benefit both travelers and local communities.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/tours">
              <Button variant="default" className="bg-green-600 hover:bg-green-700">
                Explore Our Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}