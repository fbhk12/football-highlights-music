'use client';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/Lambeau68-1024x690.jpg')`, // Removed darkening
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
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Enhanced shadow for visibility
      }}>
        FootballHighlightsMusic.com
      </h1>

      <h4 style={{ 
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: '2rem',
        maxWidth: '800px',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' // Enhanced shadow for visibility
      }}>
        The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
      </h4>

      <h2 style={{ 
        fontSize: '1.875rem',
        color: '#1E90FF',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' // Enhanced shadow for visibility
      }}>
        &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
      </h2>
    </main>
  );
}
