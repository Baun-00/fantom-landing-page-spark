
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

// Define our image categories and items
const mediaImages = [
  {
    category: "branding",
    title: "Brand Assets",
    items: [
      {
        id: "logo-main",
        title: "Fantom Capital Main Logo",
        description: "Official logo for use on light backgrounds",
        src: "/media/fantom-logo-main.png",
        alt: "Fantom Capital Logo",
        downloadUrl: "/media/fantom-logo-main.png"
      },
      {
        id: "logo-alt",
        title: "Fantom Capital Alternative Logo",
        description: "Alternative logo for use on dark backgrounds",
        src: "/media/fantom-logo-alt.png",
        alt: "Fantom Capital Alternative Logo",
        downloadUrl: "/media/fantom-logo-alt.png"
      },
      {
        id: "brand-guide",
        title: "Brand Guidelines",
        description: "Official brand guidelines document",
        src: "/media/brand-guidelines-cover.png",
        alt: "Fantom Capital Brand Guidelines Cover",
        downloadUrl: "/media/fantom-brand-guidelines.pdf"
      }
    ]
  },
  {
    category: "products",
    title: "Product Images",
    items: [
      {
        id: "car-loan",
        title: "Car Loan Service",
        description: "Promotional image for car loan services",
        src: "/media/car-loan-promo.jpg",
        alt: "Car Loan Service Promotional Image",
        downloadUrl: "/media/car-loan-promo.jpg"
      },
      {
        id: "insurance",
        title: "Insurance Services",
        description: "Promotional image for insurance services",
        src: "/media/insurance-promo.jpg",
        alt: "Insurance Services Promotional Image",
        downloadUrl: "/media/insurance-promo.jpg"
      },
      {
        id: "logbook-loan",
        title: "Logbook Loans",
        description: "Promotional image for logbook loan services",
        src: "/media/logbook-loan-promo.jpg",
        alt: "Logbook Loans Promotional Image",
        downloadUrl: "/media/logbook-loan-promo.jpg"
      }
    ]
  },
  {
    category: "team",
    title: "Team Photos",
    items: [
      {
        id: "team-photo-1",
        title: "Leadership Team",
        description: "Fantom Capital leadership team",
        src: "/media/team-leadership.jpg",
        alt: "Fantom Capital Leadership Team",
        downloadUrl: "/media/team-leadership.jpg"
      },
      {
        id: "team-photo-2",
        title: "Customer Service Team",
        description: "Fantom Capital customer service representatives",
        src: "/media/team-customer-service.jpg",
        alt: "Fantom Capital Customer Service Team",
        downloadUrl: "/media/team-customer-service.jpg"
      },
      {
        id: "office-photo",
        title: "Office Location",
        description: "Exterior view of Fantom Capital headquarters",
        src: "/media/office-exterior.jpg",
        alt: "Fantom Capital Office Building",
        downloadUrl: "/media/office-exterior.jpg"
      }
    ]
  },
  {
    category: "cars",
    title: "Car Images",
    items: [
      {
        id: "car-1",
        title: "Featured Car - Subaru Forester",
        description: "High-quality image of a Subaru Forester",
        src: "/media/car-subaru-forester.jpg",
        alt: "Subaru Forester",
        downloadUrl: "/media/car-subaru-forester.jpg"
      },
      {
        id: "car-2",
        title: "Featured Car - Toyota Land Cruiser",
        description: "High-quality image of a Toyota Land Cruiser",
        src: "/media/car-toyota-landcruiser.jpg",
        alt: "Toyota Land Cruiser",
        downloadUrl: "/media/car-toyota-landcruiser.jpg"
      },
      {
        id: "car-3",
        title: "Featured Car - Honda CRV",
        description: "High-quality image of a Honda CRV",
        src: "/media/car-honda-crv.jpg",
        alt: "Honda CRV",
        downloadUrl: "/media/car-honda-crv.jpg"
      }
    ]
  }
];

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState("branding");

  const handleDownload = (url: string, filename: string) => {
    // In a real implementation, this would trigger a download
    // For now, we'll just open the image in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative bg-cover bg-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/70d494f9-9b20-4c29-b3d7-6e1accc8d54b.png")',
      }}>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media & Press Resources</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Download high-quality images, logos, and brand assets for Fantom Capital
          </p>
        </div>
      </section>
      
      {/* Media Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-fantom-navy mb-4">Browse Our Media Library</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to our media library. Feel free to download and use these assets in accordance with our usage guidelines.
            </p>
          </div>
          
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger value="branding" className="data-[state=active]:bg-fantom-navy data-[state=active]:text-white">
                  Brand Assets
                </TabsTrigger>
                <TabsTrigger value="products" className="data-[state=active]:bg-fantom-navy data-[state=active]:text-white">
                  Products
                </TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-fantom-navy data-[state=active]:text-white">
                  Team
                </TabsTrigger>
                <TabsTrigger value="cars" className="data-[state=active]:bg-fantom-navy data-[state=active]:text-white">
                  Cars
                </TabsTrigger>
              </TabsList>
            </div>
            
            {mediaImages.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-6">
                <h3 className="text-2xl font-semibold text-fantom-navy mb-6">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="h-48 overflow-hidden bg-gray-100">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        <Button 
                          onClick={() => handleDownload(item.downloadUrl, item.title)}
                          className="w-full bg-fantom-navy hover:bg-fantom-navy/90"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Usage Guidelines Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-fantom-navy mb-6">Usage Guidelines</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                When using Fantom Capital's media assets, please adhere to the following guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Do not alter our logos, colors, or other brand elements.</li>
                <li>Do not use our assets in a way that implies partnership or endorsement without prior approval.</li>
                <li>Maintain adequate spacing around our logos as specified in our brand guidelines.</li>
                <li>When using photos of our team members, please provide appropriate attribution.</li>
                <li>For commercial use beyond editorial or informational purposes, please contact our media relations team.</li>
              </ul>
              <Separator className="my-6" />
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">For additional media inquiries or high-resolution assets, please contact:</p>
                <Button className="bg-fantom-green hover:bg-fantom-green/90">
                  Contact Media Relations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MediaPage;
