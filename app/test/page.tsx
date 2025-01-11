'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url(/lambeau68.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '2rem'
      }}>
        <h1 className="text-6xl font-bold text-center text-[#FFD700]">
          FootballHighlightsMusic.com
        </h1>
        <h4 className="text-xl text-center text-black mt-4">
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>
        <h2 className="text-3xl text-center text-[#1E90FF] mt-6">
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
