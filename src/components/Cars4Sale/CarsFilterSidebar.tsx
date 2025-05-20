
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const CarsFilterSidebar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-fantom-navy mb-6">Filters</h2>
      
      {/* Make filter */}
      <div className="mb-6">
        <Label htmlFor="make" className="text-sm font-medium text-gray-700 mb-1 block">Make</Label>
        <Input 
          id="make" 
          type="text" 
          placeholder="Make" 
          className="w-full border-gray-200"
        />
      </div>
      
      {/* Model filter */}
      <div className="mb-6">
        <Label htmlFor="model" className="text-sm font-medium text-gray-700 mb-1 block">Model</Label>
        <Input 
          id="model" 
          type="text" 
          placeholder="Model" 
          className="w-full border-gray-200"
        />
      </div>
      
      {/* Year filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Year</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="year-from" className="text-xs text-gray-500 mb-1 block">From</Label>
            <select 
              id="year-from"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="year-to" className="text-xs text-gray-500 mb-1 block">To</Label>
            <select 
              id="year-to"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Price filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Price</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="price-from" className="text-xs text-gray-500 mb-1 block">From</Label>
            <select 
              id="price-from"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {[100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000].map(price => (
                <option key={price} value={price}>{price.toLocaleString()} KES</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="price-to" className="text-xs text-gray-500 mb-1 block">To</Label>
            <select 
              id="price-to"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {[200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1500000, 2000000].map(price => (
                <option key={price} value={price}>{price.toLocaleString()} KES</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Monthly payment filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Monthly payment</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="monthly-from" className="text-xs text-gray-500 mb-1 block">From</Label>
            <select 
              id="monthly-from"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {[5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000].map(payment => (
                <option key={payment} value={payment}>{payment.toLocaleString()} KES</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="monthly-to" className="text-xs text-gray-500 mb-1 block">To</Label>
            <select 
              id="monthly-to"
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              defaultValue=""
            >
              <option value="">Any</option>
              {[10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000].map(payment => (
                <option key={payment} value={payment}>{payment.toLocaleString()} KES</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Eco car checkbox */}
      <div className="flex items-start space-x-3 mb-6">
        <Checkbox id="eco-car" />
        <div>
          <Label 
            htmlFor="eco-car"
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            Eco car
          </Label>
          <p className="text-xs text-gray-500 mt-1">
            A vehicle that has low CO₂ emissions (≤ 95 g/km), is electric or hybrid
          </p>
        </div>
      </div>
      
      {/* Cash only checkbox */}
      <div className="flex items-start space-x-3 mb-6">
        <Checkbox id="cash-car" />
        <div>
          <Label 
            htmlFor="cash-car"
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            Cars in cash
          </Label>
          <p className="text-xs text-gray-500 mt-1">
            Discover cars not available for financing, but for cash purchase only
          </p>
        </div>
      </div>
      
      {/* Body type filter */}
      <div className="mb-6">
        <Label htmlFor="body-type" className="text-sm font-medium text-gray-700 mb-1 block">Body type</Label>
        <select 
          id="body-type"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
          defaultValue=""
        >
          <option value="">Any</option>
          <option value="suv">SUV</option>
          <option value="sedan">Sedan</option>
          <option value="hatchback">Hatchback</option>
          <option value="pickup">Pickup</option>
          <option value="wagon">Wagon</option>
          <option value="van">Van</option>
        </select>
      </div>
      
      {/* Color filter */}
      <div className="mb-6">
        <Label htmlFor="color" className="text-sm font-medium text-gray-700 mb-1 block">Color</Label>
        <select 
          id="color"
          className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
          defaultValue=""
        >
          <option value="">Any</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="silver">Silver</option>
          <option value="gray">Gray</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      
      <Button className="w-full bg-fantom-navy text-white hover:bg-fantom-navy/90">
        Apply Filters
      </Button>
    </div>
  );
};

export default CarsFilterSidebar;
