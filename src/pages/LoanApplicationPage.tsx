
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/sonner';

// Define form validation schema
const formSchema = z.object({
  loanType: z.string({
    required_error: "Please select a loan type",
  }),
  loanAmount: z.string().min(1, {
    message: "Loan amount is required.",
  }).refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  purpose: z.string().min(5, {
    message: "Purpose must be at least 5 characters.",
  }),
  businessType: z.string().min(2, {
    message: "Business type must be at least 2 characters.",
  }),
  businessPeriod: z.string({
    required_error: "Please select a business operation period",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LoanApplicationPage = () => {
  const navigate = useNavigate();
  
  // Check if user completed step 1
  React.useEffect(() => {
    const step1Data = sessionStorage.getItem("signupStep1");
    if (!step1Data) {
      toast.error("Please complete the personal information form first");
      navigate('/signup');
    }
  }, [navigate]);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loanType: "",
      loanAmount: "",
      purpose: "",
      businessType: "",
      businessPeriod: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Store form data in session storage
    sessionStorage.setItem("signupStep2", JSON.stringify(data));
    
    toast.success("Loan application details saved");
    
    // Navigate based on loan type for conditional steps
    if (data.loanType === "Logbook loan") {
      navigate("/documents-upload/mpesa");
    } else {
      navigate("/documents-upload/mpesa");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main form section */}
      <main className="flex-grow relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-fantom-navy rounded-r-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-fantom-green rounded-tl-full -z-10"></div>
        
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto border border-fantom-green shadow-lg">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-center mb-8">2. LOAN APPLICATION</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="loanType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Loan Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Logbook loan">Logbook loan</SelectItem>
                            <SelectItem value="Asset financing">Asset financing</SelectItem>
                            <SelectItem value="School fee loan">School fee loan</SelectItem>
                            <SelectItem value="Landlord loans">Landlord loans</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount Requested (KES)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter amount in KES" type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Purpose of the Loan</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Business expansion, Personal use" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Retail, Service" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Period of business Operation</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Less than 6 Months">Less than 6 Months</SelectItem>
                            <SelectItem value="6 months - 1 year">6 months - 1 year</SelectItem>
                            <SelectItem value="1 year - 3 years">1 year - 3 years</SelectItem>
                            <SelectItem value="over 3 years">over 3 years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-gray-200 hover:bg-gray-300 border-gray-300"
                      onClick={() => navigate('/signup')}
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-fantom-green hover:bg-fantom-green/90"
                    >
                      Next
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoanApplicationPage;
