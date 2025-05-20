import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, User, UsersRound, CheckCircle2, Car, Building, Stethoscope, BarChart3 } from 'lucide-react';
import CyclingText from '@/components/CyclingText';

const InsuranceAgencyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')", height: "500px" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 md:px-6 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                <CyclingText 
                  textOptions={[
                    "Secure Today. Smile Tomorrow.",
                    "Protect What Matters Most.",
                    "Insurance That Works For You.",
                    "Peace of Mind, Guaranteed."
                  ]}
                  interval={5000}
                />
              </h1>
              <h2 className="text-xl md:text-2xl text-white mb-4">
                More Than Loans — We've Got You Covered.
              </h2>
              <p className="text-white text-lg mb-8">
                At Fantom, we go beyond financing. Our insurance services ensure that your health, assets, and business are protected—so you can grow with confidence.
              </p>
              <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 text-lg px-8 py-6 h-auto">
                Start Now
              </Button>
            </div>
          </div>
        </section>

        {/* Why Insurance with Fantom Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title text-center">Why Insurance with Fantom?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#f0ebff] rounded-full">
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-3">Seamless Add-On to Your Loan</h3>
                <p className="text-gray-600">
                  Already with Fantom? Add protection to your loan with a few clicks. Simplified, streamlined, secure.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#f0ebff] rounded-full">
                    <UsersRound className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-3">Tailored Coverage</h3>
                <p className="text-gray-600">
                  We help you find a policy that fits your specific needs. Get the right cover at the right cost.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#f0ebff] rounded-full">
                    <User className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-fantom-navy mb-3">Trusted Partnerships</h3>
                <p className="text-gray-600">
                  We work with Kenya's top insurances to deliver the best coverage options at competitive rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title text-center mb-12">Our Insurance Offerings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-fantom-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">1. Loan Protection Cover</h3>
                <p className="mb-4">Protect yourself and your loved ones in case of unforeseen events during your loan repayment term.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Disability Cover</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Death Cover</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Temporary Income Protection</span>
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-fantom-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">2. Motor Vehicle Insurance</h3>
                <p className="mb-4">Cover your vehicle as part of your logbook loan package.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Comprehensive & Third Party</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>PSV & Commercial Vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Quick Claims and Support</span>
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-fantom-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">3. Health Insurance</h3>
                <p className="mb-4">Affordable and accessible health cover for individuals, families, and employees.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Inpatient & Outpatient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Chronic Illness & Maternity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Flexible monthly payments</span>
                  </li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="bg-fantom-navy rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">4. Business Asset Cover</h3>
                <p className="mb-4">Shield the tools of your trade. Ideal for SMEs and asset financing clients.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Stock & Equipment Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Fire & Burglary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0 text-fantom-green" />
                    <span>Public Liability Cover</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA Section */}
        <section className="py-12 bg-blue-500">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Add Insurance While Applying for a Loan</h2>
              <p className="text-white mb-6">Already applying for a loan? You can easily add relevant insurance during your application process. No separate forms or stress.</p>
              <Button className="bg-white text-blue-500 hover:bg-gray-100 font-medium px-8 py-3 h-auto">
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Support Section - Updated button styles */}
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')` }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Speak to Our Insurance Specialist</h2>
              <p className="text-white text-lg mb-8">
                Need help choosing the right cover? Our qualified insurance team will guide you based on your loan type and personal needs.
              </p>
              <div className="mb-8">
                <p className="text-white font-semibold text-lg">+254 722 888 00 00</p>
                <p className="text-white">support@fantomcapital.com</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-fantom-navy font-medium"
                >
                  Talk to an Advisor
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-fantom-navy font-medium"
                >
                  Request a Callback
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default InsuranceAgencyPage;
