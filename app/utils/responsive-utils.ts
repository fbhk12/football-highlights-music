'use client';
import { useState, useEffect } from 'react';

// Hook for window size
export function useWindowSize() {
  // Initialize to desktop dimensions
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  });
  
  // Initialize to not mobile by default
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
      // Set mobile flag (any device under 768px width)
      setIsMobile(window.innerWidth < 768);
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount
  
  return { windowSize, isMobile };
}

// Hook for loading state with optional delay
export function useLoading(initialState = true, delay = 300) {
  const [isLoading, setIsLoading] = useState(initialState);
  
  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [initialState, delay]);
  
  // Function to manually set loading state with delay
  const startLoading = (loadingDelay = delay) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDelay);
    
    return () => clearTimeout(timer);
  };
  
  return { isLoading, setIsLoading, startLoading };
}

// Mobile detection component
interface MobileDetectProps {
  mobileContent: React.ReactNode;
  desktopContent: React.ReactNode;
}

export function ResponsiveRenderer({ mobileContent, desktopContent }: MobileDetectProps) {
  const { isMobile } = useWindowSize();
  
  return <>{isMobile ? mobileContent : desktopContent}</>;
}

// Loading spinner component
export function LoadingSpinner() {
  return (
    <div className="loading">
      Loading...
    </div>
  );
}
