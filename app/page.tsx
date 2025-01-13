'use client';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 opacity-20 -z-10"
        style={{
          backgroundImage: "url('/lambeau68.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative p-8">
        <h1 className="text-6xl font-bold text-center text-[#FFD700]">
          FootballHighlightsMusic.com
        </h1>
        <h4 className="text-xl text-black text-center mt-4">
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>
        <h2 className="text-3xl text-[#1E90FF] text-center mt-6">
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
