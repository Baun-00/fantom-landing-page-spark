
import React, { useState, useEffect } from 'react';
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
} from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { useLoanApplication } from '@/hooks/use-loan-application';

// Define form validation schema
const formSchema = z.object({
  loanType: z.string({
    required_error: "Please select a loan type",
  }),
  loanAmount: z.string({
    required_error: "Loan amount is required",
  }),
  purpose: z.string({
    required_error: "Purpose is required",
  }),
  businessType: z.string({
    required_error: "Business type is required",
  }),
  businessPeriod: z.string({
    required_error: "Business period is required",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LoanApplicationPage = () => {
  const navigate = useNavigate();
  const { updateLoanDetails, application } = useLoanApplication();
  
  // Initialize form with existing data if available
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
  
  // Check if user completed previous step
  useEffect(() => {
    if (!application.personalInfo) {
      toast.error("Please complete your personal information first");
      navigate('/signup');
    } else {
      // Pre-fill form if data exists
      if (application.loanDetails) {
        form.setValue('loanType', application.loanDetails.loanType);
        form.setValue('loanAmount', application.loanDetails.loanAmount);
        form.setValue('purpose', application.loanDetails.purpose);
        form.setValue('businessType', application.loanDetails.businessType);
        form.setValue('businessPeriod', application.loanDetails.businessPeriod);
      }
    }
  }, [application, navigate, form]);

  const onSubmit = (data: FormValues) => {
    // Fix TypeScript error by ensuring all required fields are present
    const loanDetails = {
      loanType: data.loanType,
      loanAmount: data.loanAmount,
      purpose: data.purpose,
      businessType: data.businessType,
      businessPeriod: data.businessPeriod,
    };

    // Update application state
    updateLoanDetails(loanDetails);
    
    toast.success("Loan details saved");
    navigate("/documents-upload/mpesa");
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
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select loan type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Working capital loan">Working Capital Loan</SelectItem>
                            <SelectItem value="Asset financing">Asset Financing</SelectItem>
                            <SelectItem value="Logbook loan">Logbook Loan</SelectItem>
                            <SelectItem value="Supply chain financing">Supply Chain Financing</SelectItem>
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
                        <FormLabel>Loan Amount (KES)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter loan amount" {...field} />
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
                        <FormLabel>Purpose</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter loan purpose" {...field} />
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
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Sole proprietorship">Sole Proprietorship</SelectItem>
                            <SelectItem value="Partnership">Partnership</SelectItem>
                            <SelectItem value="Limited company">Limited Company</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How long have you been in business?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time period" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                            <SelectItem value="1-2 years">1-2 years</SelectItem>
                            <SelectItem value="3-5 years">3-5 years</SelectItem>
                            <SelectItem value="5+ years">5+ years</SelectItem>
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
