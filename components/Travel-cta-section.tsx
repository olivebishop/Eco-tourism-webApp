import React from 'react';


const TravelCTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 ">
      <div className="w-full bg-gradient-to-l from-green-200 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
         
        </div>
        <div className="absolute bottom-0 left-0">
        </div>
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 60C10 60 40 20 110 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M90 10L110 20L100 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M110 20L105 15M110 20L115 25M110 20L105 25M110 20L115 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <div className="relative py-16 md:py-24 xs:px-8 z-50">
            <div className="flex flex-col items-center text-center">
              <div className="py-1 px-3 bg-green-500 rounded-xl uppercase text-xs text-black font-bold tracking-widest mb-6">Limited Time Offer!</div>
              <h2 className="text-black font-heading text-4xl md:text-5xl font-semibold mb-4">Ready for Your Next Adventure?</h2>
              <p className="text-black mb-8 max-w-2xl">Book now and get 15% off on all safari packages. Unforgettable experiences await you in the heart of nature.</p>
              <a className="px-8 py-4 bg-green-500 rounded-full text-lg font-bold text-white hover:bg-green-600 transition duration-200" href="#">Book Your Safari Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCTASection;