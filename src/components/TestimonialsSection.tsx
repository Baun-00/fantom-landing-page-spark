
import React from 'react';

const TestimonialsSection = () => {
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
    <section className="py-16 bg-fantom-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
        
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
  );
};

export default TestimonialsSection;
