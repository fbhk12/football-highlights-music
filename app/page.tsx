'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://raw.githubusercontent.com/fbhk12/nfl-films-music/main/public/lambeau68.jpg"
          alt="Lambeau Field 1968"
          fill
          priority
          className="opacity-20 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold',
          color: '#FFD700',
          textAlign: 'center'
        }}>
          FootballHighlightsMusic.com
        </h1>

        <h4 style={{ 
          fontSize: '1.25rem',
          color: 'black',
          margin: '1.5rem 0',
          textAlign: 'center'
        }}>
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>

        <h2 style={{ 
          fontSize: '1.875rem',
          color: '#1E90FF',
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
          textAlign: 'center'
        }}>
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
