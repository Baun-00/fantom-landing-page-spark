
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload } from 'lucide-react';
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
import { toast } from '@/components/ui/sonner';
import { useLoanApplication } from '@/hooks/use-loan-application';

// Define form validation schema
const formSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  nationalId: z.string().min(5, {
    message: "National ID must be at least 5 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  kraPin: z.string().min(4, {
    message: "KRA PIN must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  // Change this to handle File instead of FileList to fix TypeScript error
  passportPhoto: z.any()
    .refine((file) => file instanceof File, {
      message: "Passport photo is required.",
    })
    .refine((file) => {
      if (!(file instanceof File)) return false;
      return file.size <= 5 * 1024 * 1024; // 5MB
    }, {
      message: "File must be less than 5MB",
    })
    .refine((file) => {
      if (!(file instanceof File)) return false;
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      return validTypes.includes(file.type);
    }, {
      message: "File must be JPEG, PNG, or PDF",
    }),
});

type FormValues = z.infer<typeof formSchema>;

const SignupPage = () => {
  const navigate = useNavigate();
  const { updatePersonalInfo, application } = useLoanApplication();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Initialize form with existing data if available
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      nationalId: "",
      phone: "",
      kraPin: "",
      email: "",
      passportPhoto: undefined,
    },
  });
  
  // Pre-fill form if data exists
  useEffect(() => {
    if (application.personalInfo) {
      form.setValue('fullName', application.personalInfo.fullName);
      form.setValue('nationalId', application.personalInfo.nationalId);
      form.setValue('phone', application.personalInfo.phone);
      form.setValue('kraPin', application.personalInfo.kraPin);
      form.setValue('email', application.personalInfo.email);
    }
  }, [application.personalInfo, form]);

  const onSubmit = (data: FormValues) => {
    // Update application state
    updatePersonalInfo({
      fullName: data.fullName,
      nationalId: data.nationalId,
      phone: data.phone,
      kraPin: data.kraPin,
      email: data.email,
      passportPhoto: selectedFile ? selectedFile.name : null,
    });
    
    toast.success("Personal information saved");
    navigate("/loan-application");
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
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid file type (JPEG, PNG, or PDF)");
      return;
    }
    
    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }
    
    setSelectedFile(file);
    // Update the form value with the File object directly, not a FileList
    form.setValue("passportPhoto", file, { shouldValidate: true });
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
              <h1 className="text-3xl font-bold text-center mb-8">1. SIGN UP (Account Creation)</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="nationalId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>National ID Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter ID number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="kraPin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>KRA PIN</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter KRA PIN" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EMAIL address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email address" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="passportPhoto"
                    render={({ field: { onChange, value, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel>Upload Passport photo</FormLabel>
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
                                accept="image/jpeg,image/png,image/jpg,application/pdf"
                                onChange={handleFileInputChange}
                                {...fieldProps}
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
                      onClick={() => navigate('/')}
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

export default SignupPage;
