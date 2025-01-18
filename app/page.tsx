'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0">
        <img 
          src="/Lambeau68-1024x690.jpg"
          alt="Lambeau Field Background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Semi-transparent overlay to help text readability */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Black overlay with 50% opacity
          zIndex: 1
        }}
      />

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
          color: 'white',  // Changed to white for better contrast
          margin: '1.5rem 0',
          textAlign: 'center'
        }}>
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>

        <h2 style={{ 
          fontSize: '1.875rem',
          color: '#1E90FF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',  // Enhanced shadow for better readability
          textAlign: 'center'
        }}>
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
