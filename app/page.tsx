'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/lambeau68.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2,
        zIndex: -1
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '2rem'
      }}>
        <h1 className="text-6xl font-bold text-center" style={{ color: '#FFD700' }}>
          FootballHighlightsMusic.com
        </h1>
        <h4 className="text-xl text-center text-black mt-4">
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>
        <h2 className="text-3xl text-center mt-6" style={{ 
          color: '#1E90FF',
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
        }}>
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
