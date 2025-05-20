
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog post type definition
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  readTime: number;
  date: string;
  slug: string;
}

// Featured blog post with hero display
const FeaturedBlogPost = ({ post }: { post: BlogPost }) => {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">{post.title}</h2>
          <p className="text-white mb-4">{post.excerpt}</p>
          <Button 
            className="bg-fantom-green text-white hover:bg-fantom-green/90"
            asChild
          >
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-2">
        <span>{post.readTime} Min</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
    </div>
  );
};

// Blog post card for the grid
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="border-t border-gray-200 pt-4 pb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>{post.readTime} Min</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-fantom-navy mb-2">
            <Link to={`/blog/${post.slug}`} className="hover:text-fantom-green transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-600 mb-3">{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Things to Know Before Applying for a Logbook Loan",
      excerpt: "Planning to apply for a logbook loan? Here's what most people overlook—and how to get the best terms.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      readTime: 4,
      date: "April 24, 2025",
      slug: "things-to-know-logbook-loan"
    },
    {
      id: 2,
      title: "Why Bundling Insurance with Your Loan Is a Smart Move",
      excerpt: "Insurance might sound optional—until it's not. Here's how it protects both your assets and your peace of mind.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      readTime: 4,
      date: "April 24, 2025",
      slug: "bundling-insurance-loan"
    },
    {
      id: 3,
      title: "How to Save Money on Your Auto Insurance",
      excerpt: "These practical tips can help you lower your monthly premiums without sacrificing coverage.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      readTime: 5,
      date: "April 22, 2025",
      slug: "save-money-auto-insurance"
    },
    {
      id: 4,
      title: "Understanding Different Types of Business Loans",
      excerpt: "From startup capital to expansion funding, learn which loan type fits your business needs.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      readTime: 6,
      date: "April 20, 2025",
      slug: "types-business-loans"
    },
    {
      id: 5,
      title: "Building Credit: Where to Start When You Have None",
      excerpt: "Everyone starts somewhere. Here's your roadmap to establishing good credit from scratch.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      readTime: 4,
      date: "April 18, 2025",
      slug: "building-credit-from-scratch"
    }
  ];

  // Blog post hero rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % 3); // Only rotate through first 3 posts
    }, 7000); // 7 seconds per slide
    
    return () => clearInterval(interval);
  }, []);

  // Get the current featured post
  const featuredPost = blogPosts[currentHeroIndex];
  
  // Filter blog posts by search term
  const filteredPosts = searchTerm
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Blog Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-display font-bold text-fantom-navy mb-4">
                Learn. Plan. Prosper.
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From loan tips to insurance insights, we share ideas to help you grow
                financially and stay ahead.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12 relative">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 py-6 w-full rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            {/* Featured Post Slider */}
            <FeaturedBlogPost post={featuredPost} />
            
            {/* Recent Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="space-y-0">
                {filteredPosts.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button className="bg-fantom-green text-white hover:bg-fantom-green/90 px-8">
                  Load More
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

export default BlogPage;
