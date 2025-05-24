
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// New component for nested dropdown menu items
const NestedListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { 
    title: string;
    subItems: Array<{ title: string; href: string; description?: string }>;
  }
>(({ className, title, subItems, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex w-full items-center justify-between rounded-md p-2 text-sm hover:bg-accent">
          <span>{title}</span>
          <ChevronRight className="ml-2 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="start" alignOffset={-5} sideOffset={10}>
          {subItems.map((item) => (
            <DropdownMenuItem key={item.title} asChild>
              <Link to={item.href} className="w-full">
                {item.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
});
NestedListItem.displayName = "NestedListItem";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = () => {
    // Navigate to signup page for now
    navigate('/signup');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/f7a3d19f-842a-41b0-a4a8-3134cb88f0b9.png" 
              alt="Fantom Capital Logo" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm focus:bg-transparent data-[state=open]:bg-[#D3E4FD] data-[state=open]:translate-y-[-2px] text-gray-600 hover:text-fantom-green transition-all duration-300 rounded-md px-3 py-1.5">About us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/about/company" title="Our Company">
                      Learn about our mission, vision, and values
                    </ListItem>
                    <ListItem href="/about/impact" title="Our Impact">
                      Discover how we're making a difference
                    </ListItem>
                    <ListItem href="/about/media" title="Media">
                      Press releases and news about Fantom Capital
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm focus:bg-transparent data-[state=open]:bg-[#D3E4FD] data-[state=open]:translate-y-[-2px] text-gray-600 hover:text-fantom-green transition-all duration-300 rounded-md px-3 py-1.5">What we do</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4 md:w-[600px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <h3 className="font-medium text-base">Loans</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link 
                              to="/services/logbook-loans" 
                              className="block p-2 rounded-md hover:bg-accent text-sm"
                            >
                              Logbook Loans
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/landlord-loans" 
                              className="block p-2 rounded-md hover:bg-accent text-sm"
                            >
                              Landlord Loans
                            </Link>
                          </li>
                          <li>
                            <Link 
                              to="/services/asset-finance" 
                              className="block p-2 rounded-md hover:bg-accent text-sm"
                            >
                              Asset Finance
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ListItem href="/services/insurance" title="Insurance Agency">
                          Comprehensive insurance solutions for all your needs
                        </ListItem>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/cars4sale" className="inline-block text-gray-600 hover:text-fantom-green hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm transition-all duration-300 rounded-md px-3 py-1.5">Cars4sale</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog" className="inline-block text-gray-600 hover:text-fantom-green hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm transition-all duration-300 rounded-md px-3 py-1.5">Blog</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/resources" className="inline-block text-gray-600 hover:text-fantom-green hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm transition-all duration-300 rounded-md px-3 py-1.5">Resources</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="inline-block text-gray-600 hover:text-fantom-green hover:bg-[#D3E4FD] hover:translate-y-[-2px] hover:shadow-sm transition-all duration-300 rounded-md px-3 py-1.5">Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4">
              <Link to="/about/company" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Our Company</Link>
              <Link to="/about/impact" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Our Impact</Link>
              <Link to="/about/media" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Media</Link>
              <div className="py-2 px-4 font-medium">Loans:</div>
              <Link to="/services/logbook-loans" className="py-2 px-6 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>- Logbook Loans</Link>
              <Link to="/services/landlord-loans" className="py-2 px-6 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>- Landlord Loans</Link>
              <Link to="/services/asset-finance" className="py-2 px-6 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>- Asset Finance</Link>
              <Link to="/services/insurance" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Insurance Agency</Link>
              <Link to="/cars4sale" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Cars4sale</Link>
              <Link to="/blog" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Blog</Link>
              <Link to="/resources" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Resources</Link>
              <Link to="/contact" className="py-2 px-4 hover:bg-gray-100 rounded-md" onClick={toggleMobileMenu}>Contact</Link>
              <Button onClick={handleLoginClick} className="mt-3">Login</Button>
              <Button onClick={handleSignupClick} className="mt-2 bg-fantom-green">Sign up</Button>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="border-fantom-navy text-fantom-navy hover:bg-[#D3E4FD] hover:text-fantom-green transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button 
            className="bg-fantom-green text-white hover:bg-fantom-green/90 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" 
            onClick={handleSignupClick}
          >
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
