'use client';
import Link from 'next/link';
import { CSSProperties } from 'react';

export default function RecordLabels() {
  // Define the labels data
  const recordLabels = [
    { name: 'KPM', id: 'kpm' },
    { name: 'De Wolfe', id: 'de-wolfe' },
    { name: 'Sylvester', id: 'sylvester' },
    { name: 'Chappell', id: 'chappell' },
    { name: 'Standard Music Library', id: 'standard-music-library' },
    { name: 'Sam Fox', id: 'sam-fox' },
    { name: 'Impress', id: 'impress' },
    { name: 'Berry Music', id: 'berry-music' },
    { name: 'NFL Films', id: 'nfl-films' }
  ];

  // Define styles with proper type annotations
  const mainStyle: CSSProperties = {
    minHeight: '100vh',
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem'
  };

  const headingStyle: CSSProperties = {
    fontSize: '2.5rem',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
  };

  const paragraphStyle: CSSProperties = {
    color: 'white',
    marginBottom: '2rem',
    lineHeight: 1.6,
    fontSize: '1.1rem',
    textAlign: 'center'
  };

  const containerStyle: CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid #FFD700'
  };

  const linkStyle: CSSProperties = {
    display: 'block',
    color: 'white',
    padding: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    fontSize: '1.2rem',
    textAlign: 'center'
  };

  return (
    <div style={mainStyle}>
      <div className="max-w-4xl mx-auto">
        <h1 style={headingStyle}>
          Record Labels
        </h1>
        <p style={paragraphStyle}>
          The record labels that produced albums containing songs used in football highlight films from 1966-1979.
        </p>
        <div style={containerStyle}>
          {recordLabels.map((label) => (
            <Link 
              key={label.id}
              href={`/record-labels/${label.id}`}
              style={linkStyle}
              className="hover:bg-yellow-900/50 hover:pl-6"
            >
              {label.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
