
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Check, ChevronDown } from 'lucide-react';
import CarsFilterSidebar from '@/components/Cars4Sale/CarsFilterSidebar';
import CarCard from '@/components/Cars4Sale/CarCard';
import { carListingData, CarType } from '@/data/carListingData';

const Cars4SalePage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sale' | 'auction' | 'special'>('all');
  const [sortOrder, setSortOrder] = useState('latest');
  const [filteredCars, setFilteredCars] = useState<CarType[]>(carListingData);
  
  // Handle tab changes
  const handleTabChange = (tab: 'all' | 'sale' | 'auction' | 'special') => {
    setActiveTab(tab);
    
    if (tab === 'all') {
      setFilteredCars(carListingData);
    } else if (tab === 'special') {
      setFilteredCars(carListingData.filter(car => car.specialOffer));
    } else if (tab === 'auction') {
      setFilteredCars(carListingData.filter(car => car.auction));
    } else {
      setFilteredCars(carListingData.filter(car => car.forSale));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative bg-cover bg-center" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/c0a472e6-db68-4341-b87e-80938a59e22d.png")',
      }}>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Car</h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Browse our selection of quality pre-owned vehicles with flexible financing options
          </p>
        </div>
      </section>
      
      {/* Cars Listing Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar - Mobile Toggle */}
            <div className="lg:hidden mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-between"
                  onClick={() => document.getElementById('mobile-filters')?.classList.toggle('hidden')}
                >
                  <span>Filters</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                <div id="mobile-filters" className="hidden mt-4">
                  <CarsFilterSidebar />
                </div>
              </div>
            </div>
            
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5">
              <CarsFilterSidebar />
            </div>
            
            {/* Car Listings */}
            <div className="lg:w-3/4 xl:w-4/5">
              {/* Sorting and tabs */}
              <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
                  <Button 
                    variant={activeTab === 'all' ? "default" : "outline"}
                    className={`whitespace-nowrap ${activeTab === 'all' ? 'bg-fantom-navy text-white' : 'bg-white'}`}
                    onClick={() => handleTabChange('all')}
                  >
                    All Cars
                  </Button>
                  <Button 
                    variant={activeTab === 'sale' ? "default" : "outline"}
                    className={`whitespace-nowrap ${activeTab === 'sale' ? 'bg-fantom-navy text-white' : 'bg-white'}`}
                    onClick={() => handleTabChange('sale')}
                  >
                    Cars For Sale
                  </Button>
                  <Button 
                    variant={activeTab === 'auction' ? "default" : "outline"}
                    className={`whitespace-nowrap ${activeTab === 'auction' ? 'bg-fantom-navy text-white' : 'bg-white'}`}
                    onClick={() => handleTabChange('auction')}
                  >
                    Auction
                  </Button>
                  <Button 
                    variant={activeTab === 'special' ? "default" : "outline"}
                    className={`whitespace-nowrap ${activeTab === 'special' ? 'bg-fantom-navy text-white' : 'bg-white'}`}
                    onClick={() => handleTabChange('special')}
                  >
                    Special Offers
                  </Button>
                </div>
                
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sort by:</span>
                  <select 
                    className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="latest">Latest ad</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="year-new">Year: Newest</option>
                    <option value="mileage-low">Mileage: Lowest</option>
                  </select>
                </div>
              </div>
              
              {/* Car grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
              
              {filteredCars.length === 0 && (
                <div className="bg-white rounded-lg p-8 text-center">
                  <p className="text-lg text-gray-600">No cars match your current filters. Try adjusting your search criteria.</p>
                  <Button 
                    className="mt-4 bg-fantom-navy text-white hover:bg-fantom-navy/90"
                    onClick={() => {
                      setFilteredCars(carListingData);
                      setActiveTab('all');
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cars4SalePage;
