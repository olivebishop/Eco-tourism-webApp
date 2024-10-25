'use client'

import React from 'react';
import { motion } from 'framer-motion';

const KenyaParksScroll = () => {
  const parks = [
    "Amboseli",
    "Masaai Mara",
    "Tsavo",
    "Lake Nakuru",
    "Nairobi Park"
  ];

  return (
    <div className="w-full backdrop-blur-sm py-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* First set of items */}
            {parks.map((park, index) => (
              <span
                key={`first-${index}`}
                className="text-4xl font-serif text-gray-800 mx-8 inline-block"
              >
                {park}
              </span>
            ))}
            {/* Duplicated set for seamless loop */}
            {parks.map((park, index) => (
              <span
                key={`second-${index}`}
                className="text-4xl font-serif text-gray-800 mx-8 inline-block"
              >
                {park}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KenyaParksScroll;