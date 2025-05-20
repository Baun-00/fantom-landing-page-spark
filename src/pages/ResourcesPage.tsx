
import React from 'react';
import { Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import CyclingText from '@/components/CyclingText';

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      name: "Business Registration Form",
      description: "Register your business entity for loan eligibility",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    },
    {
      id: 2,
      name: "Business Loan Application Form",
      description: "Official application for all business loan products",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    },
    {
      id: 3,
      name: "Corporate Staff Registration Form",
      description: "Onboard staff members to your corporate account",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    },
    {
      id: 4,
      name: "Corporate Loan Application Form",
      description: "Apply for corporate funding options",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    },
    {
      id: 5,
      name: "Salary Advance Request Form",
      description: "Request a salary advance against your account",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    },
    {
      id: 6,
      name: "Regular Client Registration Form",
      description: "Create a standard client profile for repeat services",
      format: "PDF",
      lastUpdated: "Jan 15, 2025"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative bg-cover bg-center" style={{ 
        backgroundImage: 'url("/lovable-uploads/1de66978-7178-4344-b2bf-0042190df24a.png")',
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <CyclingText 
              textOptions={[
                "Resource Center",
                "Helpful Documents",
                "Loan Resources",
                "Form Library",
                "Application Toolkit"
              ]}
              interval={5000}
            />
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto">
            Download essential loan & insurance forms to streamline your application process
          </p>
        </div>
      </section>
      
      {/* Resources table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-fantom-navy">Document Name</TableHead>
                  <TableHead className="font-semibold text-fantom-navy">Description</TableHead>
                  <TableHead className="font-semibold text-fantom-navy">Format</TableHead>
                  <TableHead className="font-semibold text-fantom-navy">Last Updated</TableHead>
                  <TableHead className="font-semibold text-fantom-navy">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resources.map((resource) => (
                  <TableRow 
                    key={resource.id}
                    className="transition-colors hover:bg-gray-50 cursor-pointer"
                  >
                    <TableCell className="font-medium">{resource.name}</TableCell>
                    <TableCell>{resource.description}</TableCell>
                    <TableCell>{resource.format}</TableCell>
                    <TableCell>{resource.lastUpdated}</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="bg-fantom-green text-white hover:bg-fantom-green/90 hover:scale-105 transition-all"
                      >
                        <Download className="mr-1 h-4 w-4" /> Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-cover bg-center text-white" style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/lovable-uploads/d040e3cb-e8ca-412a-9d19-4aea56d4770a.png")' 
      }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">simple | Transparent | Secure</h2>
          <p className="text-2xl md:text-3xl font-semibold mb-8">Get a business loan quickly</p>
          <Button 
            size="lg" 
            className="bg-fantom-navy hover:bg-fantom-navy/90 text-white transition-all hover:scale-105"
          >
            Apply for a loan
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
