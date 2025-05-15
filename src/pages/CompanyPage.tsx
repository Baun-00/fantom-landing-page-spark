
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const CompanyPage = () => {
  const valueCards = [
    {
      title: "What is our focus?",
      content: "Reaching out to unbanked and providing financial services to entrepreneurs belonging to the economically and socially deprived section of the society."
    },
    {
      title: "What is our responsibility?",
      content: "Our responsibilities are not restricted merely to financial support but also to empower the clients to manage their finances by disseminating financial literacy to them."
    },
    {
      title: "What do we believe in?",
      content: "Fantom believes in robust business ethics, transparent policies expressed in our Customer Centric efforts towards our clientele."
    },
    {
      title: "What is our aspiration?",
      content: "Fantom aspires to create value and be proud grown for all its stakeholders while keeping clients at the centre."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "/placeholder.svg",
      quote: "The loan process with Fantom Capital was surprisingly fast and straightforward. I was able to expand my business within weeks of applying!"
    },
    {
      name: "Michael Chen",
      role: "Homeowner",
      image: "/placeholder.svg",
      quote: "I'm impressed with the personal service and competitive rates. The team guided me through each step and made refinancing my mortgage stress-free."
    },
    {
      name: "Priya Patel",
      role: "Startup Founder",
      image: "/placeholder.svg",
      quote: "As a first-time entrepreneur, I was nervous about securing funding. Fantom Capital believed in my vision when others didn't and provided flexible terms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-fantom-navy to-[#1a2765] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            
            <div className="max-w-3xl">
              <div className="flex mb-6">
                <div className="text-4xl text-fantom-lightGreen mr-3">"</div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-lg leading-relaxed">
                    As a leader in the community and economic development space, Fantom Capital Limited is investment-focused decision-makers helping fuel thriving financial innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Overview */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-fantom-navy mb-6">Company Overview</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Fantom Capital Limited is a credit only Micro-Finance licensed in Kenya under the Company Act. The company was founded in 2021 with a vision to provide technology-first financial services to everyday Kenyans.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Leveraging on technology and a world-class customer experience, we continue to transform lives by delivering <span className="font-semibold text-fantom-navy">LOANS WITHIN 24 HOURS</span>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We have continued to grow to becoming a significant player within Kenya. Our wide range of products are tailor made to meet your various financial needs and foster lasting relationship.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Business Purpose */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-fantom-navy mb-6">Business Purpose</h2>
              
              <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] rounded-lg shadow-md p-6 md:p-8">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  To be the most admired financial institution delivering highly accessible services that drive financial inclusion for the unbanked and underbanked.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Since beginning in 2021, our organization's name and designation may have changed, but one thing has remained constant: our purpose. We fuel financial inclusion for the unbanked and underserved in Kenya by stepping up for entrepreneurs by advocating for and providing access to affordable and responsible capital.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Join us to shape a more inclusive financial landscape.
                </p>

                <div className="mt-8 flex justify-center">
                  <div className="relative w-full max-w-md h-48 bg-gradient-to-br from-[#0a1242]/80 to-[#27ae60]/30 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="absolute w-full h-full">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute w-6 h-6 bg-white/20 rounded-full"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                            animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                    <div className="text-white text-lg font-medium z-10">
                      Driving Financial Inclusion
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Value Cards */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-fantom-navy mb-10 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {valueCards.map((card, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-fantom-navy mb-3">{card.title}</h3>
                    <p className="text-gray-600">{card.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 md:py-16 bg-fantom-navy text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Customer Testimonials</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#151f4a] rounded-lg p-6 relative">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-200">
                    <span className="text-4xl text-fantom-green absolute top-4 right-6">"</span>
                    {testimonial.quote}
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyPage;
