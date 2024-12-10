'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/company/forestlinetours', '_blank');
    };

    return (
        <div className="w-full min-h-screen bg-green-50">
            {/* Hero Section */}
            <section className="relative">
        <div className="relative h-[60vh] md:h-[50vh] min-h-[400px] flex items-center justify-center mb-16 md:mb-20">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/diani.jpg"
              alt="Contact us beach sunset"
              layout="fill"
              objectFit="cover"
              priority
              className="transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-900/70 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg leading-tight">
            Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Be part of our mission to create unforgettable travel experiences
            </p>
          </div>
        </div>
      </section>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Values Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                                <p className="text-gray-600">We believe in the power of working together to create exceptional experiences.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                                <p className="text-gray-600">We constantly push boundaries to deliver unique travel solutions.</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                                <p className="text-gray-600">We&apos;re driven by our love for travel and creating memorable experiences.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Currently No Opportunities Section */}
                <div className="max-w-3xl mx-auto text-center py-16">
                    <h2 className="text-2xl font-bold mb-4">Currently No Job Opportunities</h2>
                    <p className="text-gray-600 mb-8">
                        While we don&apos;t have any open positions at the moment, we&apos;d love to stay connected. 
                        Follow us on LinkedIn to be the first to know about future opportunities.
                    </p>
                    <Button 
                        variant="outline"
                        className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg"
                        onClick={handleLinkedIn}
                    >
                        <LinkedinIcon className="h-5 w-5 mr-2" />
                        Follow on LinkedIn
                    </Button>
                </div>

                {/* Why Join Us Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Growth Opportunities",
                                description: "Continuous learning and development opportunities for all team members."
                            },
                            {
                                title: "Work-Life Balance",
                                description: "Flexible scheduling and generous time off to help you recharge."
                            },
                            {
                                title: "Travel Benefits",
                                description: "Experience our destinations firsthand with travel perks and discounts."
                            },
                            {
                                title: "Inclusive Culture",
                                description: "A diverse and welcoming environment where everyone belongs."
                            }
                        ].map((benefit, index) => (
                            <Card key={index} className="bg-white">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}