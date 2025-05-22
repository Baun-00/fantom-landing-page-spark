
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CyclingText from '@/components/CyclingText';

const BlogPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Featured blog posts (these would typically come from an API)
  const featuredPosts = [
    {
      id: 1,
      title: "Why Bundling Insurance with Your Loan Is a Smart Move",
      excerpt: "Discover how combining insurance with your loan can provide financial protection and peace of mind.",
      image: "/images/blog/insurance-bundling.jpg",
      slug: "bundling-insurance-with-loan",
      category: "Insurance",
      date: "April 24, 2023"
    },
    {
      id: 2,
      title: "5 Ways to Improve Your Loan Eligibility",
      excerpt: "Learn practical steps to increase your chances of loan approval and secure better terms.",
      image: "/images/blog/loan-eligibility.jpg",
      slug: "improve-loan-eligibility",
      category: "Loans",
      date: "May 15, 2023"
    },
    {
      id: 3,
      title: "Understanding Logbook Loans: A Complete Guide",
      excerpt: "Everything you need to know about logbook loans and how they can help in financial emergencies.",
      image: "/images/blog/logbook-loans.jpg",
      slug: "logbook-loans-guide",
      category: "Logbook Loans",
      date: "June 8, 2023"
    }
  ];
  
  // Regular blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Build Credit with a Small Loan",
      excerpt: "Strategic borrowing can help establish or rebuild your credit score. Learn how small loans can make a big impact.",
      image: "/images/blog/build-credit.jpg",
      slug: "build-credit-with-small-loan",
      category: "Credit Score",
      date: "July 12, 2023"
    },
    {
      id: 2,
      title: "Car Insurance: What's Mandatory vs. What's Recommended",
      excerpt: "Understand the difference between required and optional car insurance coverages to make informed decisions.",
      image: "/images/blog/car-insurance.jpg",
      slug: "car-insurance-guide",
      category: "Insurance",
      date: "August 3, 2023"
    },
    {
      id: 3,
      title: "Business Loans vs Personal Loans: The Key Differences",
      excerpt: "Choosing the right type of loan can save you money and headaches. Learn the pros and cons of each option.",
      image: "/images/blog/business-vs-personal-loans.jpg",
      slug: "business-vs-personal-loans",
      category: "Loans",
      date: "August 24, 2023"
    },
    {
      id: 4,
      title: "Emergency Funds: How Much Is Enough?",
      excerpt: "Building an emergency fund is essential, but how do you know when you've saved enough? Get expert advice.",
      image: "/images/blog/emergency-fund.jpg",
      slug: "emergency-funds-guide",
      category: "Savings",
      date: "September 11, 2023"
    },
    {
      id: 5,
      title: "Common Insurance Myths Debunked",
      excerpt: "Separate fact from fiction with our comprehensive look at insurance misconceptions that could be costing you.",
      image: "/images/blog/insurance-myths.jpg",
      slug: "insurance-myths-debunked",
      category: "Insurance",
      date: "October 5, 2023"
    },
    {
      id: 6,
      title: "How to Read Your Loan Agreement Like a Pro",
      excerpt: "Don't get caught by surprise terms. Learn to understand the fine print in your loan agreement with this guide.",
      image: "/images/blog/loan-agreement.jpg",
      slug: "read-loan-agreement",
      category: "Loans",
      date: "November 17, 2023"
    }
  ];
  
  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Auto-rotate featured posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [featuredPosts.length]);
  
  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section with rotating featured posts */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {featuredPosts.map((post, index) => (
          <div
            key={post.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-4 py-24 md:py-36 relative z-10 h-full flex items-center">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 bg-fantom-green text-white text-sm font-medium rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {post.title}
                </h1>
                <p className="text-white/80 text-lg mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-white/70 text-sm mb-6">
                  <span>{post.date}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button 
                    className="bg-fantom-green hover:bg-fantom-green/90 text-white"
                  >
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-fantom-green' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Blog content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Blog header with search */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-fantom-navy mb-2">
                <CyclingText 
                  textOptions={[
                    "Fantom Blog",
                    "Financial Insights",
                    "Money Matters",
                    "Loan & Insurance Tips",
                    "Financial Education"
                  ]}
                  interval={5000}
                />
              </h2>
              <p className="text-gray-600">Stay informed with the latest financial news and advice</p>
            </div>
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-fantom-green">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-fantom-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
          
          {/* Pagination or load more */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-fantom-navy text-fantom-navy hover:bg-fantom-navy hover:text-white">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
