
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-fantom-navy to-[#1a2765] text-white py-20 relative overflow-hidden">
      {/* Currency floating elements (larger and more impactful) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[15%] animate-float" style={{ animationDuration: '8s' }}>
          <div className="bg-fantom-green/20 backdrop-blur-sm text-white p-3 rounded-md transform rotate-12 transition-transform duration-300 scale-125 shadow-lg">
            💵
          </div>
        </div>
        <div className="absolute top-1/3 right-[10%] animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
          <div className="bg-fantom-green/20 backdrop-blur-sm text-white p-4 rounded-md transform -rotate-6 transition-transform duration-300 scale-150 shadow-lg">
            <span className="text-xl">KSh</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[25%] animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}>
          <div className="bg-fantom-green/20 backdrop-blur-sm text-white p-3 rounded-md transform rotate-3 transition-transform duration-300 scale-125 shadow-lg">
            💰
          </div>
        </div>
        <div className="absolute top-2/3 right-[30%] animate-float" style={{ animationDuration: '10s', animationDelay: '3s' }}>
          <div className="bg-fantom-green/20 backdrop-blur-sm text-white p-3 rounded-md transform rotate-[-8deg] transition-transform duration-300 scale-125 shadow-lg">
            💵
          </div>
        </div>
        <div className="absolute top-1/2 left-[5%] animate-float" style={{ animationDuration: '11s', animationDelay: '0.5s' }}>
          <div className="bg-fantom-green/20 backdrop-blur-sm text-white p-3 rounded-md transform rotate-[15deg] transition-transform duration-300 scale-125 shadow-lg">
            <span className="text-lg">KSh</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-6">
          <div>
            <p className="text-fantom-lightGreen font-medium mb-2">Your Future, Funded Today.</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast, Flexible <br/>Loans.
            </h1>
            <p className="mt-4 text-lg text-gray-200">Flexible options. Fair terms. Fast approvals.</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-fantom-green/20 p-1 rounded-full transition-transform duration-300 hover:scale-110">
                <div className="bg-fantom-lightGreen rounded-full w-2 h-2"></div>
              </div>
              <p>Rates from as low as 7.5% p.a</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-fantom-green/20 p-1 rounded-full transition-transform duration-300 hover:scale-110">
                <div className="bg-fantom-lightGreen rounded-full w-2 h-2"></div>
              </div>
              <p>Borrow from $10,000 to $500,000</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <input 
              type="text" 
              placeholder="How much do you need?" 
              className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-fantom-green text-gray-800 transition-all duration-300 hover:shadow-md"
            />
            <Button className="bg-fantom-green hover:bg-fantom-green/90 py-6">Search for a loan</Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white transition-transform duration-300 hover:scale-110 hover:z-10"></div>
              ))}
            </div>
            <p><span className="font-semibold">100+</span> satisfied customers</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/b347dcbf-1702-4575-881d-0ead96b1289e.png" 
              alt="Car Financing" 
              className="max-w-full rounded-lg object-contain"
            />
          </div>
          
          {/* Enhanced money elements with parallax effect */}
          <div className="absolute top-10 -left-4 animate-float" style={{ animationDuration: '5s' }}>
            <div className="bg-fantom-green text-white p-3 rounded-md transform rotate-12 transition-transform duration-300 hover:scale-110 shadow-lg">
              💵
            </div>
          </div>
          <div className="absolute top-1/4 right-0 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
            <div className="bg-fantom-green text-white p-3 rounded-md transform -rotate-6 transition-transform duration-300 hover:scale-110 shadow-lg">
              <span className="text-lg">KSh</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}>
            <div className="bg-fantom-green text-white p-3 rounded-md transform rotate-3 transition-transform duration-300 hover:scale-110 shadow-lg">
              💰
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
