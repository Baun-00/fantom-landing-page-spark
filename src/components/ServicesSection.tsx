
import React from 'react';
import { Button } from "@/components/ui/button";
import { Building, House, Key } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="h-10 w-10 text-fantom-navy" />,
      title: "Business Loans",
      description: "Get funding for your business with flexible repayment terms and competitive rates."
    },
    {
      icon: <House className="h-10 w-10 text-fantom-navy" />,
      title: "Mortgage Loans",
      description: "Secure your dream home with our tailored mortgage solutions and expert advice."
    },
    {
      icon: <Key className="h-10 w-10 text-fantom-navy" />,
      title: "Vehicle Finance",
      description: "Drive away in your new car with our quick and easy vehicle financing options."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">All loan services</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-fantom-navy mb-3 transition-colors duration-300 hover:text-fantom-green">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6">{service.description}</p>
              <div className="flex justify-center">
                <Button variant="outline" className="border-fantom-navy text-fantom-navy hover:bg-fantom-navy/5">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-fantom-green rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Calculate Loan Amount</h3>
          <Button className="bg-white text-fantom-green hover:bg-gray-100">Apply for a loan</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
