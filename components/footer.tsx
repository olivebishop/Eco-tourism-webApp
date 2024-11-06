'use client'
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollToTopButton from '@/components/ScrollToTopButton';

const EcoTourismFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to your newsletter service
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } else {
      setSubscribeStatus('error');
    }
  };

  return (
    <>
    <section className="py-20 bg-green-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 pb-28">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-md mx-auto lg:mx-0">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-green-600">Mazingira Tours & Travel</h2>
                  <p className="text-sm text-gray-500">Sustainable Travel Experiences</p>
                </div>
                <h3 className="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  <span>Ready for an </span>
                  <span className="font-serif italic">eco-adventure</span>
                  <span>?</span>
                </h3>
                <p className="max-w-sm text-gray-500 mb-8">
                  Subscribe to our newsletter for exclusive eco-friendly travel tips, 
                  special offers, and updates on sustainable destinations.
                </p>
                
                {/* Enhanced Newsletter Form */}
                <form onSubmit={handleSubscribe} className="relative mb-6">
                  <div className="relative">
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 bg-white rounded-lg border 
                        transition-all duration-200 ease-in-out
                        focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                        ${subscribeStatus === 'error' ? 'border-red-300' : 'border-gray-200'}
                        ${subscribeStatus === 'success' ? 'border-green-300' : ''}
                      `}
                      placeholder="Enter your email address"
                    />
                    <Button 
                      type="submit"
                      className={`absolute right-1 top-1 bg-green-600 hover:bg-green-700 text-white
                        transition-all duration-200 ease-in-out flex items-center gap-2
                        ${subscribeStatus === 'success' ? 'bg-green-500' : ''}
                      `}
                    >
                      <span className="hidden sm:inline">Subscribe</span>
                      <Send size={16} className="inline-block" />
                    </Button>
                  </div>
                  
                  {/* Status Messages */}
                  {subscribeStatus === 'success' && (
                    <p className="text-green-600 text-sm mt-2 absolute">
                      Thanks for subscribing! 🌿
                    </p>
                  )}
                  {subscribeStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-2 absolute">
                      Please enter a valid email address
                    </p>
                  )}
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md mx-auto lg:mr-0">
                <p className="text-2xl font-semibold text-gray-900 mb-8">Explore our eco-tourism FAQs</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is eco-tourism?</AccordionTrigger>
                    <AccordionContent>
                      Eco-tourism is responsible travel to natural areas that conserves the environment, sustains the well-being of the local people, and involves interpretation and education.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do we minimize our environmental impact?</AccordionTrigger>
                    <AccordionContent>
                      We minimize environmental impact through sustainable practices such as using renewable energy, reducing waste, supporting local conservation efforts, and educating travelers on responsible tourism.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What eco-friendly accommodations do you offer?</AccordionTrigger>
                    <AccordionContent>
                      We offer a range of eco-friendly accommodations including eco-lodges, treehouse stays, and sustainable resorts that use renewable energy, practice water conservation, and support local communities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-200">
            <div className="lg:flex flex-wrap items-center">
              <div className="flex mb-6 lg:mb-0 lg:mr-8 items-center">
                <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-1" href="#">
                  <Facebook size={24} className="text-green-600" />
                </a>
                <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-1" href="#">
                  <Instagram size={24} className="text-green-600" />
                </a>
                <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-1" href="#">
                  <Twitter size={24} className="text-green-600" />
                </a>
                <a className="inline-block hover:bg-green-100 rounded-md p-1" href="#">
                  <Linkedin size={24} className="text-green-600" />
                </a>
              </div>
              <div className="flex mb-6 lg:mb-0 items-center">
                <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Privacy Policy</a>
                <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Terms & Conditions</a>
                <a className="inline-block text-sm font-semibold text-gray-500 hover:text-gray-600" href="/contact">Support</a>
              </div>
              <div className="flex-grow mb-6 lg:mb-0"></div>
              <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                <span className="inline-block mb-2 lg:mb-0 lg:mr-4 text-sm text-gray-500">© {currentYear} All Rights Reserved.</span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  Designed with 💕 {' '}
                  <a href="https://olivebishop.vercel.app" target="_blank" rel="noopener noreferrer" className="ml-1 text-green-600 hover:text-green-700">
                    Olive Bishop
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <ScrollToTopButton />
     </>
  );
};

export default EcoTourismFooter;