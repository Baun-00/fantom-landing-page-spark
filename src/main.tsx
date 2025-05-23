
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoanApplicationProvider } from './hooks/use-loan-application.tsx'

createRoot(document.getElementById("root")!).render(
  <LoanApplicationProvider>
    <App />
  </LoanApplicationProvider>
);
