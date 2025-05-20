
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import CyclingText from '@/components/CyclingText';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // This would typically come from an API or database
  const blogData = {
    title: "Why Bundling Insurance with Your Loan Is a Smart Move",
    publishDate: "April 24, 2023",
    readTime: "4 Min",
    content: [
      {
        id: 'intro',
        content: "When you're taking out a loan—whether for a car, business, or personal need—the primary focus is usually on the interest rate, repayment terms, and approval speed. However, there's one powerful option many borrowers overlook: bundling your loan with insurance. At Fantom, we understand that financial security doesn't end at disbursement—it extends to ensuring you're protected throughout your loan journey. Here's why combining your loan with insurance could be one of the smartest financial decisions you make."
      },
      {
        id: 'financial-protection',
        title: "1. Built-In Financial Protection",
        content: "Life is unpredictable. Illness, accidents, job loss, or other unforeseen challenges can disrupt your income. When you bundle insurance with your loan, you safeguard yourself and your family from falling into debt in case you're temporarily or permanently unable to make payments. Loan protection insurance can cover your repayments during these tough times, reducing stress and preserving your financial stability."
      },
      {
        id: 'streamlined-process',
        title: "2. Streamlined Process",
        content: "Bundling means convenience. Instead of juggling multiple applications, payment schedules, and service providers, Fantom helps you consolidate everything into one package. One provider, one application, one monthly payment. It's fast, efficient, and saves you valuable time and effort."
      },
      {
        id: 'better-rates',
        title: "3. Better Rates, Lower Premiums",
        content: "Because Fantom partners with top insurance providers, bundling often unlocks discounted insurance premiums—rates that may not be available if you seek insurance separately. You also avoid hidden broker fees or third-party markups, making the overall cost more affordable."
      },
      {
        id: 'peace-of-mind',
        title: "4. Peace of Mind",
        content: "Knowing that your loan is protected gives you confidence. Whether it's your asset (like a car or equipment), your health, or your ability to repay the loan due to job-related issues, bundled insurance ensures you're not facing these risks alone. It turns a financial obligation into a safety net."
      },
      {
        id: 'custom-coverage',
        title: "5. Custom Coverage",
        content: "At Fantom, we don't believe in one-size-fits-all. When bundling insurance, you have options to tailor the cover to your loan type—whether it's logbook loans, asset financing, or payroll funding. You can opt for cover that includes credit life insurance, asset protection, or even business interruption coverage."
      },
      {
        id: 'faster-claims',
        title: "6. Faster Claim Processing",
        content: "Dealing with insurance claims can be a long, frustrating experience—but when your loan and insurance are under the same umbrella, resolution is typically quicker. Fantom's integrated process ensures claims are handled promptly, and disbursements are made faster, minimizing disruption to your life or business."
      },
      {
        id: 'approval-chances',
        title: "7. Boosts Loan Approval Chances",
        content: "Including insurance in your loan application can actually improve your chances of approval. Why? Because it reduces the lender's risk. A well-secured loan backed by insurance coverage demonstrates responsibility and can lead to quicker approvals or even better loan terms."
      },
      {
        id: 'conclusion',
        title: "Conclusion: Protect More Than Just Your Purchase",
        content: "At Fantom, we believe in smart borrowing. Bundling insurance with your loan isn't just an add-on—it's a proactive strategy for protecting your assets, your credit score, and your peace of mind. Next time you apply for a loan, ask about our bundled insurance options. It's not just about getting funding—it's about staying secure while you grow."
      }
    ],
    similarArticles: [
      {
        id: 1,
        title: "How to Read Your Loan Application",
        slug: "how-to-read-loan-application",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      },
      {
        id: 2,
        title: "5 Ways to Improve Your Loan Eligibility",
        slug: "improve-loan-eligibility",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      },
      {
        id: 3,
        title: "Understanding Loan Terms and Conditions",
        slug: "understanding-loan-terms",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      },
      {
        id: 4,
        title: "Secured vs Unsecured Loans: Which is Right for You?",
        slug: "secured-vs-unsecured-loans",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      },
      {
        id: 5,
        title: "How to Pay Off Your Loan Faster",
        slug: "pay-off-loan-faster",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      },
      {
        id: 6,
        title: "Business Loans vs Personal Loans: The Key Differences",
        slug: "business-vs-personal-loans",
        image: "/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section with cycling text */}
      <section className="relative bg-cover bg-center py-16" style={{ 
        backgroundImage: 'url("/lovable-uploads/8a097af9-f2fb-47d1-ab1d-f5ebfdfbce7c.png")',
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <CyclingText 
              textOptions={[
                "Financial Insights & Tips",
                "Expert Advice on Loans",
                "Smart Money Management",
                "Financial Freedom Guides",
                "Wealth Building Strategies"
              ]}
              interval={5000}
            />
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Stay updated with the latest financial insights, tips, and strategies to make informed decisions.
          </p>
        </div>
      </section>
      
      {/* Social share sidebar */}
      <div className="container mx-auto px-4 relative">
        <div className="hidden lg:flex flex-col fixed left-8 top-1/3 space-y-4 z-10">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
            <Facebook size={18} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
            <Twitter size={18} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
            <Linkedin size={18} />
          </Button>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Article header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{blogData.title}</h1>
            <div className="text-sm text-gray-600">{blogData.readTime} - {blogData.publishDate}</div>
          </header>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {blogData.content.map((section, index) => (
              <section key={section.id} className={index > 0 ? 'mt-10' : ''} id={section.id}>
                {section.title && <h2 className="text-2xl font-semibold text-fantom-navy mb-4">{section.title}</h2>}
                <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
              </section>
            ))}
          </div>
          
          {/* Mobile social share buttons */}
          <div className="flex justify-center lg:hidden mt-8 space-x-4">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
              <Facebook size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
              <Twitter size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-fantom-green hover:text-white">
              <Linkedin size={18} />
            </Button>
          </div>
          
          {/* Similar articles section */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-fantom-navy mb-6">Similar Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.similarArticles.map(article => (
                <Link 
                  to={`/blog/${article.slug}`} 
                  key={article.id}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 group-hover:text-fantom-green transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
