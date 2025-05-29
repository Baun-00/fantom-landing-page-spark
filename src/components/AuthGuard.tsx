
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

// Public routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/signup', '/', '/about', '/about/company', '/about/impact', '/about/media', '/contact', '/blog', '/resources', '/cars4sale'];

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  
  // Don't render anything while checking authentication status
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // Check if current path is public
  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    location.pathname === route || 
    location.pathname.startsWith('/blog/') || 
    location.pathname.startsWith('/services/')
  );
  
  // If not authenticated and trying to access a protected route, redirect to login
  if (!user && !isPublicRoute) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If authenticated and trying to access login or signup, redirect to dashboard
  if (user && (location.pathname === '/login' || location.pathname === '/signup')) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};
