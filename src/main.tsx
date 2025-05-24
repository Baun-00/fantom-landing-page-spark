
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoanApplicationProvider } from './hooks/use-loan-application.tsx'
import { TooltipProvider } from "@radix-ui/react-tooltip"
import React from 'react'

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoanApplicationProvider>
      <App />
    </LoanApplicationProvider>
  </React.StrictMode>
);
