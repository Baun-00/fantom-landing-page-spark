
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
import { useLoanApplication } from '@/hooks/use-loan-application';

const ApplicationSubmittedPage = () => {
  const navigate = useNavigate();
  const { application, resetApplication } = useLoanApplication();
  
  // Check if user completed the process (simplified check)
  useEffect(() => {
    if (!application.personalInfo || !application.loanDetails) {
      toast.error("Please complete the application process first");
      navigate('/signup');
    }
  }, [application, navigate]);

  const handleBackToDashboard = () => {
    // Reset application state
    resetApplication();
    
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main section */}
      <main className="flex-grow relative overflow-hidden flex items-center justify-center">
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-fantom-navy rounded-r-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-fantom-green rounded-tl-full -z-10"></div>
        
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto border border-fantom-green shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-24 w-24 text-fantom-green" />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
              
              <p className="text-lg text-gray-700 mb-8">
                Your loan application has been successfully submitted. We will review your application and get back to you shortly.
              </p>
              
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-gray-600">
                  A confirmation email has been sent to your registered email address.
                </p>
                
                <p className="text-sm text-gray-600">
                  You can check the status of your application by logging into your dashboard.
                </p>
                
                <div className="mt-6">
                  <Button 
                    onClick={handleBackToDashboard}
                    className="bg-fantom-green hover:bg-fantom-green/90 py-6 px-8 text-lg"
                  >
                    Back to Dashboard
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 mt-6">
                  If you have any questions, please contact our support team at <a href="mailto:support@fantomcapital.com" className="text-fantom-navy underline">support@fantomcapital.com</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationSubmittedPage;
