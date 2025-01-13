'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/lambeau68.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: -1
        }}
      />

      {/* Content */}
      <main className="p-8">
        <div className="text-center">
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold',
            color: '#FFD700',  // Gold color
            marginBottom: '1rem'
          }}>
            FootballHighlightsMusic.com
          </h1>

          <h4 style={{ 
            fontSize: '1.25rem',
            color: 'black',
            marginBottom: '1.5rem'
          }}>
            The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
          </h4>

          <h2 style={{ 
            fontSize: '1.875rem',
            color: '#1E90FF',  // Blue color
            textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
          }}>
            &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
          </h2>
        </div>
      </main>
    </div>
  );
}
