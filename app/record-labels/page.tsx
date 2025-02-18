'use client';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { colors } from '@/app/styles/colors';

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin']
});

const recordLabels = [
  { name: 'KPM', id: 'kpm' },
  { name: 'De Wolfe', id: 'de-wolfe' },
  { name: 'Sylvester', id: 'sylvester' },
  { name: 'Chappell', id: 'chappell' },
  { name: 'Standard Music Library', id: 'standard-music-library' },
  { name: 'Sam Fox', id: 'sam-fox' },
  { name: 'Impress', id: 'impress' },
  { name: 'Berry Music', id: 'berry-music' },
  { name: 'NFL Films', id: 'nfl-films' },
  // Add the rest of your record labels here
];

export default function RecordLabels() {
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className={oswald.className} style={{
          fontSize: '2.5rem',
          color: '#FFD700',
          textAlign: 'center',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}>
          Record Labels
        </h1>

        {/* Introduction Paragraph */}
        <p style={{
          color: 'white',
          marginBottom: '2rem',
          lineHeight: '1.6',
          fontSize: '1.1rem'
        }}>
          The record labels that produced albums containing songs used in NFL Films productions from 1966-1979.
        </p>

        {/* Record Labels List */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '8px',
          border: `1px solid ${colors.nflGold}`
        }}>
          {recordLabels.map((label) => (
            <Link 
              key={label.id}
              href={`/record-labels/${label.id}`}
              style={{
                display: 'block',
                color: 'white',
                padding: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                fontSize: '1.2rem'
              }}
              className="hover:bg-yellow-900/50 hover:pl-6"
            >
              {label.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
