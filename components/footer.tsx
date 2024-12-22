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

const emailSchema = z.string().email({ message: "Invalid email address" });

const TawkToWidget = () => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/672deb174304e3196adf4649/1ic5lsm4o';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const style = document.createElement('style');
    style.textContent = `
      #tawk-to-widget {
        margin: 16px !important;
        height: 48px !important;
        width: 48px !important;
      }
      @media (max-width: 640px) {
        #tawk-to-widget {
          margin: 12px !important;
          height: 40px !important;
          width: 40px !important;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(script);

    return () => {
      const tawkScript = document.querySelector(`script[src="${script.src}"]`);
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Get scroll position and page height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      
      // Show button when user has scrolled 75% of the page
      const scrollThreshold = totalHeight - viewportHeight * 1.25;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 left-4 z-[60] bg-green-600 hover:bg-green-700 
        text-white rounded-full cursor-pointer transition-all duration-300 ease-in-out
        w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg
        hover:shadow-xl transform hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <ChevronUp className="w-6 h-6 sm:w-6 sm:h-6" />
    </button>
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
      emailSchema.parse(email);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      
      <div className="relative z-10 overflow-hidden text-white">
        <div
          className="relative z-20 h-16 sm:h-24 md:h-32 w-full -scale-y-[1] bg-contain bg-repeat-x"
          style={{ backgroundImage: "url('/images/footer.png')" }}
        />
      </div>

      <section className="py-12 md:py-20 bg-emerald-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 pb-12 md:pb-20">
              {/* Newsletter Section */}
              <div className="w-full lg:w-1/2 px-4 mb-12">
                <div className="max-w-md mx-auto lg:mx-0">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-green-600">
                      Forestline Tours & Travel
                    </h2>
                    <p className="text-sm text-gray-100">Sustainable Travel Experiences</p>
                  </div>
                  <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                    <span>Ready for an </span>
                    <span className="font-serif italic">eco-adventure</span>
                    <span>?</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 mb-6 md:mb-8">
                    Subscribe to our newsletter for exclusive eco-friendly travel tips, 
                    special offers, and updates on sustainable destinations.
                  </p>
                  
                  {/* Newsletter Form */}
                  <form onSubmit={handleSubscribe} className="relative mb-6">
                    <div className="relative">
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 bg-white rounded-lg border text-sm md:text-base
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
                          transition-all duration-200 ease-in-out flex items-center gap-2 text-sm md:text-base
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

              {/* FAQ Section */}
              <div className="w-full lg:w-1/2 px-4 text-gray-200">
                <div className="max-w-md mx-auto lg:mr-0">
                  <p className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">
                    Explore our eco-tourism FAQs
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-sm md:text-base">
                        What is eco-tourism?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base">
                        Eco-tourism is responsible travel to natural areas that conserves the environment, sustains the well-being of the local people, and involves interpretation and education.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-sm md:text-base">
                        How do we minimize our environmental impact?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base">
                        We minimize environmental impact through sustainable practices such as using renewable energy, reducing waste, supporting local conservation efforts, and educating travelers on responsible tourism.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-sm md:text-base">
                        What eco-friendly accommodations do you offer?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base">
                        We offer a range of eco-friendly accommodations including eco-lodges, treehouse stays, and sustainable resorts that use renewable energy, practice water conservation, and support local communities.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 md:pt-10 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-2 md:gap-4">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Linkedin, href: "#" }
                  ].map(({ Icon, href }, index) => (
                    <a 
                      key={index}
                      className="p-2 hover:bg-green-100 rounded-md transition-colors duration-200"
                      href={href}
                    >
                      <Icon size={20} className="text-green-600" />
                    </a>
                  ))}
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
                  <a className="text-gray-100 hover:text-gray-200 font-semibold" href="/careers">
                    Careers
                  </a>
                  <a className="text-gray-100 hover:text-gray-200 font-semibold" href="/terms-and-condition">
                    Terms & Conditions
                  </a>
                  <a className="text-gray-100 hover:text-gray-200 font-semibold" href="/contact">
                    Support
                  </a>
                </div>

                {/* Copyright */}
                <div className="text-center lg:text-right text-sm text-gray-100">
                  <div>© {currentYear} All Rights Reserved</div>
                  <div className="mt-1">
                    <a 
                      href="https://olivebishop.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-green-600 hover:underline"
                    >
                      Forestline Tours and Travel
                    </a>
                  </div>
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