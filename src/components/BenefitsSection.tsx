
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      number: "01",
      title: "Easy loan solutions for small agency, business and companies",
    },
    {
      number: "02",
      title: "Minimal required documents and criteria for loan approval",
    },
    {
      number: "03",
      title: "Take out loans now and pay later with easy-to-maintain schedules",
    },
    {
      number: "04",
      title: "Get small loans for immediate needs in 2 hours with less documents",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Most of the People Trust on Us For Fast Services
        </h2>
        
        <div className="space-y-12 md:space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start md:items-center gap-6">
              <div className="bg-fantom-green text-white rounded-full h-14 w-14 flex items-center justify-center shrink-0">
                <span className="font-bold">{benefit.number}</span>
              </div>
              <p className="text-lg md:text-xl font-medium">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
