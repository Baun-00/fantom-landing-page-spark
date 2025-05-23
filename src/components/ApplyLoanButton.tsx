
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonProps } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface ApplyLoanButtonProps extends ButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const ApplyLoanButton = ({ className, children = "Apply for a loan", ...props }: ApplyLoanButtonProps) => {
  const navigate = useNavigate();
  
  // This is a placeholder - in a real application, you would check
  // if the user is logged in using your auth system
  const isLoggedIn = false;
  
  const handleClick = () => {
    if (isLoggedIn) {
      // If logged in, navigate to loan application directly
      navigate('/loan-application');
      toast.success("You're already logged in. Continuing to application.");
    } else {
      // If not logged in, navigate to signup
      navigate('/signup');
    }
  };
  
  return (
    <Button 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ApplyLoanButton;
