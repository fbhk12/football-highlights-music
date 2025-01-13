'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Attempt 1: Background div */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('lambeau68.jpg')",
          backgroundSize: 'cover',
          opacity: 0.2,
          zIndex: -1
        }}
      />

      {/* Attempt 2: Direct image */}
      <img
        src="/lambeau68.jpg"
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2,
          zIndex: -1
        }}
      />

      {/* Content */}
      <main className="relative z-10 p-8">
        <div className="text-center">
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold',
            color: '#FFD700'
          }}>
            FootballHighlightsMusic.com
          </h1>

          <h4 style={{ 
            fontSize: '1.25rem',
            color: 'black',
            margin: '1.5rem 0'
          }}>
            The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
          </h4>

          <h2 style={{ 
            fontSize: '1.875rem',
            color: '#1E90FF',
            textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
          }}>
            &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
          </h2>
        </div>
      </main>
    </div>
  );
}
