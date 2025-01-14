'use client';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Image Container */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        {/* Regular img tag for background */}
        <img 
          src="Lambeau68-1024x690.jpg"  {/* Make sure this matches exactly */}
          alt="Lambeau Field 1968"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
            position: 'absolute'
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
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
