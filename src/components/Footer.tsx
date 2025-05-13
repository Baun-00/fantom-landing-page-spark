
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fantom-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/placeholder.svg" alt="Fantom Capital Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-display font-semibold">Fantom Capital</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Empowering your financial journey with fast, flexible, and fair loan solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-fantom-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-fantom-green transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-fantom-green transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-fantom-green transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fantom-green transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-fantom-green" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-fantom-green" />
                <span className="text-gray-300">info@fantomcapital.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-fantom-green mt-1" />
                <span className="text-gray-300">123 Finance Street, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#151f4a] p-2 rounded-full hover:bg-fantom-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#151f4a] p-2 rounded-full hover:bg-fantom-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#151f4a] p-2 rounded-full hover:bg-fantom-green transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Fantom Capital. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
