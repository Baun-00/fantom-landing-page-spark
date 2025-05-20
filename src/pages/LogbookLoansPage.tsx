
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { CheckCircle2, ShieldCheck, FileCheck, CheckCheck, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CyclingText from '@/components/CyclingText';

const LogbookLoansPage = () => {
  const [carValue, setCarValue] = useState<number[]>([15000]);
  const [repaymentTerm, setRepaymentTerm] = useState<number[]>([12]);
  
  const calculateLoanAmount = () => {
    // Simple calculation - typically 70% of the car value
    return Math.round(carValue[0] * 0.7);
  };
  
  const calculateMonthlyPayment = () => {
    const loan = calculateLoanAmount();
    const months = repaymentTerm[0];
    // Simple calculation with 15% annual interest
    const monthlyInterest = 0.15 / 12;
    return Math.round((loan * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
           (Math.pow(1 + monthlyInterest, months) - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-16 md:py-24" style={{backgroundImage: "url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')"}}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  <CyclingText 
                    textOptions={[
                      "Turn Your Car Into Quick Cash—Without Letting Go",
                      "Unlock Your Car's Value—Keep Driving",
                      "Get Cash From Your Car—Own It While You Pay",
                      "Quick Liquidity From Your Vehicle—No Surrender"
                    ]}
                    interval={5000}
                  />
                </h1>
                <p className="text-white text-lg md:text-xl mb-8">
                  Flexible logbook loans with fast approval, transparent terms, and full access to your vehicle.
                </p>
                <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 text-lg px-8 py-6 h-auto">
                  Get Your Loan in 24Hrs
                </Button>
              </div>
              
              <div className="w-full md:w-1/2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                  alt="Car financing concept" 
                  className="rounded-lg mx-auto max-w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-900 rounded-tr-full opacity-50"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-green-500 rounded-bl-full opacity-30"></div>
        </section>
        
        {/* Trust Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-fantom-navy mb-12">
              Why Thousands Trust Us With Their Logbook Loans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trust Item 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#f8f5ff] p-4 rounded-full mb-4">
                  <ShieldCheck className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-2">Certified by Local Financial Institutions</h3>
                <p className="text-gray-600">Licensed and regulated by the Central Bank of Kenya</p>
              </div>
              
              {/* Trust Item 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#f8f5ff] p-4 rounded-full mb-4">
                  <FileCheck className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-2">Secured Processes</h3>
                <p className="text-gray-600">Your documents are safe with us. Bank-level security measures.</p>
              </div>
              
              {/* Trust Item 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#f8f5ff] p-4 rounded-full mb-4">
                  <CheckCheck className="h-10 w-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-2">4.9-Star Ratings</h3>
                <p className="text-gray-600">Over 1,000+ satisfied customers with excellent service reviews</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Loan Estimator Widget */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-fantom-navy mb-8">
                Estimate Your Loan Instantly
              </h2>
              
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                {/* Car Value Slider */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Car Value (KES)</label>
                    <span className="text-sm font-bold text-fantom-navy">KES {carValue[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={carValue}
                    min={100000}
                    max={5000000}
                    step={50000}
                    onValueChange={setCarValue}
                    className="mb-2"
                  />
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">KES 100,000</span>
                    <span className="text-xs text-gray-500">KES 5,000,000</span>
                  </div>
                </div>
                
                {/* Repayment Term Slider */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Repayment Term (months)</label>
                    <span className="text-sm font-bold text-fantom-navy">{repaymentTerm[0]} months</span>
                  </div>
                  <Slider
                    value={repaymentTerm}
                    min={3}
                    max={36}
                    step={3}
                    onValueChange={setRepaymentTerm}
                    className="mb-2"
                  />
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">3 months</span>
                    <span className="text-xs text-gray-500">36 months</span>
                  </div>
                </div>
                
                {/* Results */}
                <div className="bg-[#f0f9ff] p-4 rounded-md mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Estimated Loan Amount:</span>
                    <span className="font-bold text-fantom-navy">KES {calculateLoanAmount().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly Payment:</span>
                    <span className="font-bold text-fantom-navy">KES {calculateMonthlyPayment().toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 px-8 py-3 h-auto">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-fantom-navy mb-12">
              Key Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit Card 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Car className="h-5 w-5 mr-2 text-fantom-green" />
                    <h3 className="text-lg font-bold text-fantom-navy">Drive While You Repay</h3>
                  </div>
                  <p className="text-gray-600">Keep using your car as normal while you repay your loan. No disruption to your daily routine.</p>
                </CardContent>
              </Card>
              
              {/* Benefit Card 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-fantom-green" />
                    <h3 className="text-lg font-bold text-fantom-navy">Fast Approval</h3>
                  </div>
                  <p className="text-gray-600">Get approved within 24-48 hours. We understand that when you need funds, time matters.</p>
                </CardContent>
              </Card>
              
              {/* Benefit Card 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-fantom-green" />
                    <h3 className="text-lg font-bold text-fantom-navy">Flexible Terms</h3>
                  </div>
                  <p className="text-gray-600">Choose repayment terms that work for you. We offer 3-36 month plans to suit your budget.</p>
                </CardContent>
              </Card>
              
              {/* Benefit Card 4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-fantom-green" />
                    <h3 className="text-lg font-bold text-fantom-navy">100% Transparency</h3>
                  </div>
                  <p className="text-gray-600">No hidden fees or charges. We're upfront about our terms so you can borrow with confidence.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-fantom-navy mb-12">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Step 1 */}
              <div className="bg-[#5252e0] text-white rounded-md p-6 text-center">
                <div className="text-2xl font-bold mb-3">01.</div>
                <h3 className="font-semibold mb-2">Apply Online</h3>
                <p className="text-sm">Fill out our simple application form</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-[#6f6fea] text-white rounded-md p-6 text-center">
                <div className="text-2xl font-bold mb-3">02.</div>
                <h3 className="font-semibold mb-2">Submit Logbook</h3>
                <p className="text-sm">Provide your vehicle documentation</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-[#8282f6] text-white rounded-md p-6 text-center">
                <div className="text-2xl font-bold mb-3">03.</div>
                <h3 className="font-semibold mb-2">Car Valuation</h3>
                <p className="text-sm">We evaluate your vehicle's worth</p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-[#a5a5ff] text-white rounded-md p-6 text-center">
                <div className="text-2xl font-bold mb-3">04.</div>
                <h3 className="font-semibold mb-2">Get Offer & Approve</h3>
                <p className="text-sm">Review and accept your loan offer</p>
              </div>
              
              {/* Step 5 */}
              <div className="bg-fantom-green text-white rounded-md p-6 text-center">
                <div className="text-2xl font-bold mb-3">05.</div>
                <h3 className="font-semibold mb-2">Receive Cash</h3>
                <p className="text-sm">Get funds disbursed to your account</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Requirements Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-fantom-navy mb-12">
                What You Need to Apply
              </h2>
              
              <div className="space-y-4">
                {/* Requirement Items */}
                {[
                  "Original Logbook (must be in your name)",
                  "National ID / Passport",
                  "KRA PIN",
                  "Recent Passport Photo",
                  "Vehicle Photos (interior and exterior)",
                  "Active M-Pesa or Bank Account"
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-md">
                    <CheckCircle2 className="h-6 w-6 mr-4 text-fantom-green flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Banner */}
        <section className="py-12 bg-fantom-green">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Apply Today. Drive Tomorrow.
            </h2>
            <p className="text-white text-lg mb-8">Loan approval and disbursement within 24–48 hours.</p>
            <Button className="bg-white text-fantom-green hover:bg-gray-100 font-medium px-8 py-3 h-auto">
              Apply Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LogbookLoansPage;
