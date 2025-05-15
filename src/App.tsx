
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";

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
          <Route path="/about/media" element={<NotFound />} />
          
          {/* What we do dropdown routes */}
          <Route path="/services/loans" element={<NotFound />} />
          <Route path="/services/insurance" element={<NotFound />} />
          
          {/* Regular routes */}
          <Route path="/cars4sale" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/resources" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/about" element={<CompanyPage />} />
          <Route path="/services" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
