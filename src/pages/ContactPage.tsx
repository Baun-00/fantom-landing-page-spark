
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import CyclingText from '@/components/CyclingText';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();
      
      // Show success message using toast
      toast.success("Message sent! We'll respond in fighting speed!", {
        description: "Thank you for reaching out to Fantom Capital."
      });
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative bg-cover bg-center" style={{ 
        backgroundImage: 'url("/lovable-uploads/86bf36f4-2b7c-4662-af5a-fe1e64fff45b.png")',
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <CyclingText 
                textOptions={[
                  "Fantom Help",
                  "Get In Touch",
                  "Contact Support",
                  "We're Here For You",
                  "Let's Connect"
                ]}
                interval={5000}
              />
            </h1>
            <p className="text-white/80 text-xl">Hi, How can we help?</p>
            
            {/* Search form */}
            <div className="mt-8 max-w-lg">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search Fantom Help" 
                  className="pl-12 py-6 text-base rounded-full"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg 
                    className="h-5 w-5 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-fantom-navy mb-6">Get in Touch with Fantom</h2>
              <p className="text-gray-600 mb-8">Please fill out the quick form and we will be in touch in lighting speed!</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Please enter your name" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="py-6" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Please enter your email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email format"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com" {...field} className="py-6" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Please enter your message" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            {...field} 
                            className="min-h-[150px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* reCAPTCHA placeholder - would require integration */}
                  <div className="border border-gray-300 rounded p-4 flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-sm text-gray-600">I'm not a robot</span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-fantom-navy hover:bg-fantom-navy/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
              {/* Contact info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-fantom-lightBlue p-3 rounded-full">
                    <Phone className="h-6 w-6 text-fantom-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fantom-navy">Call Us:</h3>
                    <p className="text-gray-700">+254 724 88 00 00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fantom-lightBlue p-3 rounded-full">
                    <Mail className="h-6 w-6 text-fantom-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fantom-navy">Email:</h3>
                    <p className="text-gray-700">support@fantom.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-fantom-lightBlue p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-fantom-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fantom-navy">Address:</h3>
                    <p className="text-gray-700">
                      TotalEnergies Ruaraka Service Station,<br />
                      Thika Rd, Nairobi. 1st Floor Office 11
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder - would be a Google Maps embed */}
              <div className="mt-8 h-[200px] bg-gray-200 rounded overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">
                    Google Maps would be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
