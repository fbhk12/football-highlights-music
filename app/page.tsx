'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: "'Alfa Slab One', cursive"  // Added font-family
      }}>
        FootballHighlightsMusic.com
      </h1>

      {/* Rest of your code remains the same */}
    </main>
  );
}
