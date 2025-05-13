
import React from 'react';

const PartnersSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 uppercase tracking-wide mb-10">Our Partners</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/placeholder.svg" alt={`Partner ${i}`} className="h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
