"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Globe, TreePine, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
  return (
    <div className="bg-gradient-to-b from-[#f6efe5] to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-black text-white">
        <div className="h-40">
          <Image
            src="/images/packages.jpeg"
            alt="image"
            width={1920}
            height={160}
            className="z-1 absolute left-0 top-0 h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4 capitalize">
              About Us
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

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Introduction */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <span className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide text-green-800 bg-green-100 px-2 sm:px-3 py-1 rounded-full">
              Get to know us better
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Discover <span className="text-green-600">Forestline</span> Tours
          </h2>
        </div>

        {/* Mission & Vales Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Mission Section */}
          <div className="lg:col-span-7">
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <Leaf className="text-green-500" size={24} />
                    <span className="text-green-600 font-semibold">
                      Our Mission
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Pioneering Sustainable Tourism
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Forestline Tours is committed to transforming travel
                    experiences in Kenya. We blend adventure, conservation, and
                    community empowerment to create journeys that are not just
                    memorable, but meaningful.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Globe className="text-green-500" size={20} />
                      <span className="text-gray-700 text-sm md:text-base">
                        Eco-Friendly
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TreePine className="text-green-500" size={20} />
                      <span className="text-gray-700 text-sm md:text-base">
                        Conservation
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square md:aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
                    alt="Eco-tourism landscape"
                    fill
                    className="rounded-2xl object-cover shadow-lg transition-transform hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values & Impact Section */}
          <div className="lg:col-span-5 space-y-8">
            {/* Core Values */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Our Core Values
                </h3>
                <p className="text-gray-600">
                  Driven by passion for sustainable travel
                </p>
              </div>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/50 p-5 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <value.icon
                        className="text-green-500 shrink-0"
                        size={24}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-green-50 rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Local Partners</p>
                  <h4 className="text-3xl md:text-4xl font-bold text-green-600">
                    10
                  </h4>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Eco-Destinations</p>
                  <h4 className="text-3xl md:text-4xl font-bold text-green-600">
                    12
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Kenyans dedicated to sustainable tourism and conservation
          </p>
          <Link href="/careers">
            <Button
              variant="default"
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white transform transition hover:scale-105"
            >
              Join Our Team
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
            >
              <Image
                src={`https://images.unsplash.com/photo-${member.img}?w=400&h=600&fit=crop`}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-100/95 p-6 backdrop-blur-sm transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
