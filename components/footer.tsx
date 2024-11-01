import React from 'react';
import { Facebook, Instagram,  Twitter , Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EcoTourismFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
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
                <p className="max-w-sm text-gray-500 mb-16">Discover sustainable travel experiences that protect our planet while creating unforgettable memories.</p>
                <div className="sm:flex mb-2 items-center">
                  <input className="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none" type="email" placeholder="Enter your email" />
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Subscribe
                  </Button>
                </div>
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
                  <Twitter  size={24} className="text-green-600" />
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
                <span className="inline-block mb-2 lg:mb-0 lg:mr-4 text-sm text-gray-500">© {currentYear} All Rights Reserved .</span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  Designed with 💕 {' '}
                  <a href="https://olivebishop.vercel.app" target="_blank" rel="noopener noreferrer" className="ml-1 text-green-600 hover:text-green-700 ">
                    Olive Bishop
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoTourismFooter;