// app/components/ResponsiveLayout.tsx
'use client';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useWindowSize, useLoading } from '../utils/responsive-utils';

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
  const { isMobile } = useWindowSize();
  const { isLoading } = useLoading(true, 300);
  
  return (
    <main className="bg-football">
      <div className={`container ${isMobile ? 'mobile' : ''}`}>
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
