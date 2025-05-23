
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the types for our loan application data
export interface PersonalInfo {
  fullName: string;
  nationalId: string;
  phone: string;
  kraPin: string;
  email: string;
  passportPhoto: string | null;
}

export interface LoanDetails {
  loanType: string;
  loanAmount: string;
  purpose: string;
  businessType: string;
  businessPeriod: string;
}

export interface DocumentInfo {
  mpesaStatement?: string | null;
  mpesaOtp?: string;
  businessPermit?: string | null;
  logbook?: string | null;
  proformaInvoice?: string | null;
}

export interface LoanApplication {
  personalInfo: PersonalInfo | null;
  loanDetails: LoanDetails | null;
  documents: DocumentInfo;
  currentStep: string;
}

interface LoanApplicationContextType {
  application: LoanApplication;
  updatePersonalInfo: (data: PersonalInfo) => void;
  updateLoanDetails: (data: LoanDetails) => void;
  updateDocuments: (data: Partial<DocumentInfo>) => void;
  setCurrentStep: (step: string) => void;
  resetApplication: () => void;
  isFormComplete: (step: string) => boolean;
}

// Create context
const LoanApplicationContext = createContext<LoanApplicationContextType | undefined>(undefined);

// Initial state
const initialState: LoanApplication = {
  personalInfo: null,
  loanDetails: null,
  documents: {},
  currentStep: 'personal-info'
};

// Provider component
export const LoanApplicationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [application, setApplication] = useState<LoanApplication>(() => {
    // Try to load from sessionStorage on initial mount
    try {
      const savedState = sessionStorage.getItem('loanApplication');
      return savedState ? JSON.parse(savedState) : initialState;
    } catch (error) {
      console.error('Failed to parse saved loan application state', error);
      return initialState;
    }
  });

  // Save to sessionStorage whenever application state changes
  useEffect(() => {
    sessionStorage.setItem('loanApplication', JSON.stringify(application));
  }, [application]);

  const updatePersonalInfo = (data: PersonalInfo) => {
    setApplication(prev => ({
      ...prev,
      personalInfo: data
    }));
  };

  const updateLoanDetails = (data: LoanDetails) => {
    setApplication(prev => ({
      ...prev,
      loanDetails: data
    }));
  };

  const updateDocuments = (data: Partial<DocumentInfo>) => {
    setApplication(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        ...data
      }
    }));
  };

  const setCurrentStep = (step: string) => {
    setApplication(prev => ({
      ...prev,
      currentStep: step
    }));
  };

  const resetApplication = () => {
    setApplication(initialState);
    sessionStorage.removeItem('loanApplication');
  };

  // Helper function to check if a step is complete
  const isFormComplete = (step: string): boolean => {
    switch (step) {
      case 'personal-info':
        return application.personalInfo !== null;
      case 'loan-details':
        return application.loanDetails !== null;
      case 'mpesa':
        return Boolean(application.documents.mpesaStatement && application.documents.mpesaOtp);
      case 'business-permit':
        return Boolean(application.documents.businessPermit);
      case 'logbook':
        return application.loanDetails?.loanType !== 'Logbook loan' || Boolean(application.documents.logbook);
      case 'proforma-invoice':
        return application.loanDetails?.loanType !== 'Asset financing' || Boolean(application.documents.proformaInvoice);
      default:
        return false;
    }
  };

  return (
    <LoanApplicationContext.Provider
      value={{
        application,
        updatePersonalInfo,
        updateLoanDetails,
        updateDocuments,
        setCurrentStep,
        resetApplication,
        isFormComplete
      }}
    >
      {children}
    </LoanApplicationContext.Provider>
  );
};

// Hook for using the loan application context
export const useLoanApplication = () => {
  const context = useContext(LoanApplicationContext);
  if (context === undefined) {
    throw new Error('useLoanApplication must be used within a LoanApplicationProvider');
  }
  return context;
};
