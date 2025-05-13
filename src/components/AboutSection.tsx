
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-fantom-lightBlue">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="uppercase text-fantom-green font-medium tracking-wider mb-2">About us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-fantom-navy">
            LOAN, INSURANCE, ESTATE AGENCY
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-fantom-navy mt-2">
            Powering Financial Inclusion
          </h3>
        </div>
        
        <div className="max-w-4xl">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Since our inception in 2017, Fantom Capital's mission is to democratize loans. We have evolved from a simple financial platform to a comprehensive digital financial services hub. Through continuous innovation and customer-focused products, we provide fast, accessible and responsible financial solutions that address real-world needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to transparency and providing access to affordable and responsible credit. Join us as we shape the future of finance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
