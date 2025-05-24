
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AssetFinancePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-fantom-navy mb-8">Asset Finance</h1>
          <p className="text-xl text-gray-700 mb-8">Asset Finance Page Coming Soon</p>
          <p className="text-gray-600">
            We're working on bringing you comprehensive information about our asset financing options.
            Check back soon for details on how Fantom Capital can help you acquire the assets you need for your business.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AssetFinancePage;
