
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CarType } from '@/data/carListingData';

interface CarCardProps {
  car: CarType;
}

const CarCard = ({ car }: CarCardProps) => {
  const { 
    id, 
    make, 
    model, 
    year, 
    fuelType, 
    engineSize,
    transmission,
    mileage, 
    price,
    monthlyPayment,
    discountedPrice,
    discountedMonthly,
    specialOffer,
    image
  } = car;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      {/* Image container with aspect ratio */}
      <div className="relative aspect-[16/9]">
        <img 
          src={image} 
          alt={`${year} ${make} ${model}`} 
          className="w-full h-full object-cover"
        />
        {specialOffer && (
          <Badge className="absolute top-2 right-2 bg-[#FF6B35] text-white border-none">
            Special offer
          </Badge>
        )}
      </div>
      
      {/* Car details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-fantom-navy mb-1">
          {make} {model}
        </h3>
        
        <div className="flex flex-wrap gap-x-4 mb-2 text-sm text-gray-500">
          <span>{year}</span>
          <span>{fuelType}</span>
          <span>{engineSize}L</span>
          <span>{transmission}</span>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          {mileage.toLocaleString()} km
        </div>
        
        {/* Price information */}
        <div className="space-y-1 mb-4">
          <div className="text-sm text-gray-500">Monthly from</div>
          <div className="text-xl font-bold text-[#f03e3e]">
            {monthlyPayment.toLocaleString()} KES
            {discountedMonthly && (
              <span className="text-sm line-through ml-2 text-gray-400">
                {discountedMonthly.toLocaleString()} KES
              </span>
            )}
          </div>
          <div className="text-sm text-gray-500">
            Price {price.toLocaleString()} KES
            {discountedPrice && (
              <span className="line-through ml-2 text-gray-400">
                {discountedPrice.toLocaleString()} KES
              </span>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full bg-fantom-green text-white hover:bg-fantom-green/90 hover:scale-105 transition-all"
        >
          View this car
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
