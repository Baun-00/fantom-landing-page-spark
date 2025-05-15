
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/f7a3d19f-842a-41b0-a4a8-3134cb88f0b9.png" 
              alt="Fantom Capital Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="ml-2 text-xl font-display font-semibold text-fantom-navy transition-colors duration-300 group-hover:text-fantom-green">Fantom Capital</span>
          </Link>
        </div>
        
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
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/services/loans" title="Loans">
                      Explore our loan products and services
                    </ListItem>
                    <ListItem href="/services/insurance" title="Insurance Agency">
                      Comprehensive insurance solutions
                    </ListItem>
                  </ul>
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
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-fantom-navy text-fantom-navy hover:bg-[#D3E4FD] hover:text-fantom-green transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">Login</Button>
          <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
