
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/sonner';
import { useLoanApplication } from '@/hooks/use-loan-application';

// Define form validation schema
const formSchema = z.object({
  businessPermit: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: "Business permit is required.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const DocumentUploadBusinessPermitPage = () => {
  const navigate = useNavigate();
  const { application, updateDocuments } = useLoanApplication();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Check if user completed previous steps
  useEffect(() => {
    if (!application.personalInfo || !application.loanDetails || !application.documents.mpesaStatement) {
      toast.error("Please complete the previous steps first");
      navigate('/signup');
    }
  }, [application, navigate]);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // Update application state with business permit
    updateDocuments({
      businessPermit: selectedFile ? selectedFile.name : null,
    });
    
    toast.success("Business permit uploaded successfully");
    
    // Navigate based on loan type
    if (application.loanDetails?.loanType === "Logbook loan") {
      navigate("/documents-upload/logbook");
    } else if (application.loanDetails?.loanType === "Asset financing") {
      navigate("/documents-upload/proforma-invoice");
    } else {
      // For other loan types, proceed to submission success page
      navigate("/application-submitted");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file: File) => {
    // Validate file type and size
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid file type (PDF, JPEG, or PNG)");
      return;
    }
    
    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }
    
    setSelectedFile(file);
    form.setValue("businessPermit", Object.assign(new DataTransfer().files, [file]));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
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
              <h1 className="text-3xl font-bold text-center mb-4">3. DOCUMENT UPLOAD</h1>
              <h2 className="text-xl font-semibold text-center mb-8">Required Supporting Documents</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">2. Business Permit</h3>
                    <p className="text-sm text-gray-700">
                      Upload a valid business permit for your registered or operating business.
                    </p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="businessPermit"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Business Permit</FormLabel>
                        <FormControl>
                          <div
                            className={`border-2 border-dashed rounded-md p-6 text-center ${
                              isDragging ? 'border-fantom-green bg-fantom-green/5' : 'border-gray-300'
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <div className="flex flex-col items-center justify-center gap-2">
                              <Upload className="h-10 w-10 text-gray-400" />
                              <p className="text-sm text-gray-600">Drag and Drop here</p>
                              <p className="text-xs text-gray-500">or</p>
                              <label 
                                htmlFor="file-upload" 
                                className="bg-fantom-navy text-white rounded px-4 py-2 cursor-pointer hover:bg-fantom-navy/90 transition-colors"
                              >
                                Select file
                              </label>
                              <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileInputChange}
                              />
                            </div>
                            
                            {selectedFile && (
                              <div className="mt-4 p-2 bg-gray-50 rounded flex items-center justify-between">
                                <span className="text-sm font-medium truncate">
                                  {selectedFile.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {(selectedFile.size / 1024).toFixed(1)} KB
                                </span>
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-gray-200 hover:bg-gray-300 border-gray-300"
                      onClick={() => navigate('/documents-upload/mpesa')}
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

export default DocumentUploadBusinessPermitPage;
