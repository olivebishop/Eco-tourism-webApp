'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Globe, TreePine, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Amani Ochieng",
      role: "Founder & CEO",
      img: "1539701938214-0d9736e1c16b",
    },
    {
      name: "Zuri Kimani",
      role: "Head of Conservation",
      img: "1573497019940-1c28c88b4f3e",
    },
    {
      name: "Jabari Muthomi",
      role: "Community Liaison",
      img: "1560250097-0b93528c311a",
    },
  ];

  // Core values data
  const coreValues = [
    {
      icon: Users,
      title: "Community Empowerment",
      description:
        "Supporting local communities and ensuring tourism benefits are shared equitably.",
    },
    {
      icon: TreePine,
      title: "Environmental Stewardship",
      description:
        "Minimizing ecological impact and actively contributing to conservation efforts.",
    },
  ];

  // Animated SVG component
  const AnimatedSVG = () => (
    <div className="flex justify-center relative my-12">
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
  );

  return (
    <div className="bg-gradient-to-b from-[#f6efe5] to-white">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-black text-white">
        <div className="h-40">
          <img
            src="images/hero_packages.jpg"
            alt="image"
            className="z-1 absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              Explore Packages
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

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Mission & About Section - Spans 7 columns */}
          <div className="lg:col-span-7 bg-green-50 rounded-2xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-green-500" size={24} />
                  <span className="text-green-600 font-semibold">Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Pioneering Sustainable Tourism
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Forestline Tours is committed to transforming travel experiences
                  in Kenya. We blend adventure, conservation, and community
                  empowerment to create journeys that are not just memorable, but
                  meaningful.
                </p>
                <div className="grid grid-cols-2 gap-4">
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
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
                  alt="Eco-tourism landscape"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Impact & Core Values Section - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            {/* Core Values */}
            <div className="bg-green-50 rounded-2xl shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Core Values
                </h2>
                <p className="text-gray-600 text-sm">
                  Driven by passion for sustainable travel
                </p>
              </div>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-green-50 p-4 rounded-2xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <value.icon className="text-green-500" size={28} />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Animated SVG */}
            <AnimatedSVG />

            {/* Impact Metrics */}
            <div className="bg-green-50 rounded-2xl shadow-sm p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Impact
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Local Partners</p>
                  <h3 className="text-4xl font-semibold text-green-600">
                    10
                  </h3>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Eco-Destinations</p>
                  <h3 className="text-4xl font-semibold text-green-600">
                    12
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Add Animated SVG */}
          <div className="lg:col-span-12">
            <AnimatedSVG />
          </div>

          {/* Team Section - Full Width */}
          <div className="lg:col-span-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h3 className="text-xl font-bold font-heading mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}