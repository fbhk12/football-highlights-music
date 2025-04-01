'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  title: string;
  backLink?: string;
  backText?: string;
}

export default function ResponsiveLayout({
  children,
  title,
  backLink = '/',
  backText = 'Back to Home'
}: LayoutProps) {
  // State for tracking window width
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isLoading, setIsLoading] = useState(true);
  
  // Track window size for responsive layout
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial window width
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  
  // Determine if we're in mobile view
  const isMobileView = windowWidth < 768;
  
  return (
    <main className="bg-football">
      <div className={`container ${isMobileView ? 'mobile' : ''}`}>
        {/* Back button */}
        <Link 
          href={backLink}
          className="btn btn-back"
        >
          ← {backText}
        </Link>
        
        {/* Main content card */}
        <div className="content-card">
          <h2 className="card-header">
            {title}
          </h2>
          
          {/* Loading state */}
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="card-content">
              {children}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
