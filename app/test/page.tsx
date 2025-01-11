export default function Home() {
  return (
    <div className="relative min-h-screen pb-32">
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/lambeau68.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.2'
        }}
      />

      <main className="relative z-10 min-h-screen bg-transparent">
        <div className="max-w-6xl mx-auto p-6">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-[#FFD700] font-display">
              FootballHighlightsMusic.com
            </h1>
            <h4 className="text-xl text-black font-display">
              The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
            </h4>
            <h2 className="text-3xl text-[#1E90FF] font-display mt-6" style={{
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
            }}>
              &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
