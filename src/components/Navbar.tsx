
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <img src="/placeholder.svg" alt="Fantom Capital Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="ml-2 text-xl font-display font-semibold text-fantom-navy transition-colors duration-300 group-hover:text-fantom-green">Fantom Capital</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">About us</Link>
          <Link to="/services" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Services</Link>
          <Link to="/blog" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Blog</Link>
          <Link to="/resources" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Resources</Link>
          <Link to="/contact" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-fantom-navy text-fantom-navy hover:bg-fantom-navy/5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">Login</Button>
          <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
