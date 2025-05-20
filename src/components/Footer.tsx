
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fantom-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Fantom Capital Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-fantom-green transition-colors">About</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-fantom-green transition-colors">FAQs</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-fantom-green transition-colors">Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-fantom-green transition-colors">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-fantom-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy-ca" className="text-gray-300 hover:text-fantom-green transition-colors">Privacy Statement-CA</Link></li>
              <li><Link to="/loan-policy" className="text-gray-300 hover:text-fantom-green transition-colors">Loan Policy</Link></li>
              <li><Link to="/consent" className="text-gray-300 hover:text-fantom-green transition-colors">Consent</Link></li>
              <li><Link to="/disclosure" className="text-gray-300 hover:text-fantom-green transition-colors">Disclosure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-fantom-green" />
                <span className="text-gray-300">service@fantom.co.ke</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-fantom-green" />
                <span className="text-gray-300">+254 724 88 00 00</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow us</h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-white p-2 rounded-full hover:bg-fantom-green transition-colors" aria-label="Facebook">
                  <Facebook size={16} className="text-fantom-navy" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full hover:bg-fantom-green transition-colors" aria-label="Instagram">
                  <Instagram size={16} className="text-fantom-navy" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full hover:bg-fantom-green transition-colors" aria-label="Twitter">
                  <Twitter size={16} className="text-fantom-navy" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-sm text-gray-400">
            Fantom is a Kenyan licensed lender under the Kenya Department of Financial Institutions and also provides loan referral services. We will attempt to qualify you for personal loan offers with rates of less than 35.99% with terms from 6 months to 84 months. All loan or credit approval, or rates and terms you may be offered, are solely at the discretion of any lender with which you may apply, and you should read all disclosures carefully. Rates and terms are based on lender discretion and may change at any time. Your exact rate depends on your loan amount, loan term, state of residence, and credit-worthiness, and will be agreed upon between you and the lender. For additional loan options, please call: +254700 000 000
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
