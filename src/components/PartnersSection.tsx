
import React from 'react';

const PartnersSection = () => {
  // Array of partner logos with their descriptions
  const partners = [
    { src: "/lovable-uploads/f7a3d19f-842a-41b0-a4a8-3134cb88f0b9.png", alt: "Fantom Logo" },
    { src: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png", alt: "Book One Limited" },
    { src: "/lovable-uploads/68ad44f7-db28-47d3-9073-3d47411d671b.png", alt: "Cowland" },
    { src: "/lovable-uploads/806a89f8-ca56-4c99-95b4-d6ac49376475.png", alt: "Equity" },
    { src: "/lovable-uploads/c0a472e6-db68-4341-b87e-80938a59e22d.png", alt: "Fanaka" },
    { src: "/lovable-uploads/86bf36f4-2b7c-4662-af5a-fe1e64fff45b.png", alt: "AMCCO" },
    { src: "/lovable-uploads/d040e3cb-e8ca-412a-9d19-4aea56d4770a.png", alt: "UPMEGA" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 uppercase tracking-wide mb-10">Our Partners</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="h-12 md:h-16 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
