
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg" alt="Fantom Capital Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-display font-semibold text-fantom-navy">Fantom Capital</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-fantom-green transition-colors">About us</Link>
          <Link to="/services" className="text-gray-600 hover:text-fantom-green transition-colors">Services</Link>
          <Link to="/blog" className="text-gray-600 hover:text-fantom-green transition-colors">Blog</Link>
          <Link to="/resources" className="text-gray-600 hover:text-fantom-green transition-colors">Resources</Link>
          <Link to="/contact" className="text-gray-600 hover:text-fantom-green transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-fantom-navy text-fantom-navy hover:bg-fantom-navy/5">Login</Button>
          <Button className="bg-fantom-green text-white hover:bg-fantom-green/90">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
