
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
            <img src="/placeholder.svg" alt="Fantom Capital Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="ml-2 text-xl font-display font-semibold text-fantom-navy transition-colors duration-300 group-hover:text-fantom-green">Fantom Capital</span>
          </Link>
        </div>
        
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-fantom-green transition-colors duration-300">About us</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-gray-600 hover:text-fantom-green transition-colors duration-300">What we do</NavigationMenuTrigger>
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
                <Link to="/blog" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Blog</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/resources" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Resources</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="text-gray-600 hover:text-fantom-green transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fantom-green after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
