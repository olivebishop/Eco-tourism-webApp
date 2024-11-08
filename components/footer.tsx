'use client'
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Send, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { z } from 'zod';

// Define the schema for the email
const emailSchema = z.string().email({ message: "Invalid email address" });

// Tawk.to Integration
const TawkToWidget = () => {
  useEffect(() => {
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Load the script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/672deb174304e3196adf4649/1ic5lsm4o';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup
    return () => {
      // Check if script exists before removing
      const tawkScript = document.querySelector(`script[src="${script.src}"]`);
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
    };
  }, []);

  return null;
};

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 cursor-pointer transition-colors duration-200 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp size={24} />
    </div>
  );
};

const EcoTourismFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');

    try {
      // Validate email on client-side
      emailSchema.parse(email);

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setSubscribeStatus('error');
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <>
      <TawkToWidget />
      <section className="py-20 bg-green-50 lg:pl-40">
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
                  
                  {/* Enhanced Newsletter Form with Zod Validation */}
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
                        disabled={subscribeStatus === 'loading'}
                      />
                      <Button 
                        type="submit"
                        className={`absolute right-1 top-1 bg-green-600 hover:bg-green-700 text-white
                          transition-all duration-200 ease-in-out flex items-center gap-2
                          ${subscribeStatus === 'success' ? 'bg-green-500' : ''}
                        `}
                        disabled={subscribeStatus === 'loading'}
                      >
                        <span className="hidden sm:inline">
                          {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </span>
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
                        {errorMessage}
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
              <div className="lg:flex flex-wrap items-center justify-between">
                <div className="flex mb-6 lg:mb-0 lg:mr-8 items-center">
                  <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-2" href="#">
                    <Facebook size={20} className="text-green-600" />
                  </a>
                  <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-2" href="#">
                    <Instagram size={20} className="text-green-600" />
                  </a>
                  <a className="inline-block mr-5 hover:bg-green-100 rounded-md p-2" href="#">
                    <Twitter size={20} className="text-green-600" />
                  </a>
                  <a className="inline-block hover:bg-green-100 rounded-md p-2" href="#">
                    <Linkedin size={20} className="text-green-600" />
                  </a>
                </div>
                <div className="flex mb-6 lg:mb-0 items-center">
                  <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Privacy Policy</a>
                  <a className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600" href="#">Terms & Conditions</a>
                  <a className="inline-block text-sm font-semibold text-gray-500 hover:text-gray-600" href="/contact">Support</a>
                </div>
                <div className="flex-grow mb-6 lg:mb-0"></div>
                <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center justify-center lg:justify-end">
                  <span className="inline-block mb-2 lg:mb-0 lg:mr-4 text-sm text-gray-500">© {currentYear} All Rights Reserved</span>
                  <span className="inline-flex items-center text-sm text-gray-500">
                     .{' '}
                    <a href="https://olivebishop.vercel.app" target="_blank" rel="noopener noreferrer" className="ml-1 text-green-600 hover:text-green-700">
                      Mazingira Tours and Travel
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