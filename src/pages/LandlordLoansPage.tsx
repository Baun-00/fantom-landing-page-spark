
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LandlordLoansPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-fantom-navy mb-8">Landlord Loans</h1>
          <p className="text-xl text-gray-700 mb-8">Landlord Loans Page Coming Soon</p>
          <p className="text-gray-600">
            We're working on bringing you comprehensive information about our landlord loan offerings.
            Check back soon for details on how Fantom Capital can help landlords grow their property portfolios.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandlordLoansPage;
