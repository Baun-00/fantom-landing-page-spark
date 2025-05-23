import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompanyPage from "./pages/CompanyPage";
import InsuranceAgencyPage from "./pages/InsuranceAgencyPage";
import LogbookLoansPage from "./pages/LogbookLoansPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import Cars4SalePage from "./pages/Cars4SalePage";
import MediaPage from "./pages/MediaPage";
import NotFound from "./pages/NotFound";
import SignupPage from "./pages/SignupPage";
import LoanApplicationPage from "./pages/LoanApplicationPage";
import DocumentUploadMpesaPage from "./pages/DocumentUploadMpesaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About us dropdown routes */}
          <Route path="/about/company" element={<CompanyPage />} />
          <Route path="/about/impact" element={<NotFound />} />
          <Route path="/about/media" element={<MediaPage />} />
          
          {/* What we do dropdown routes */}
          <Route path="/services/loans" element={<NotFound />} />
          <Route path="/services/insurance" element={<InsuranceAgencyPage />} />
          <Route path="/services/logbook-loans" element={<LogbookLoansPage />} />
          
          {/* Regular routes */}
          <Route path="/cars4sale" element={<Cars4SalePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<CompanyPage />} />
          <Route path="/services" element={<NotFound />} />
          
          {/* Loan Application Form Routes */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/loan-application" element={<LoanApplicationPage />} />
          <Route path="/documents-upload/mpesa" element={<DocumentUploadMpesaPage />} />
          
          {/* Legacy route for direct Media access - keep it for compatibility */}
          <Route path="/media" element={<MediaPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
