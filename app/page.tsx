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
        fontSize: '4.5rem', 
        fontWeight: '700',
        color: '#FFD700',
        marginBottom: '2rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: '0.05em'
      }}>
        <span style={{ fontSize: '4.5rem' }}>F</span>
        <span style={{ fontSize: '4rem' }}>OOTBALL</span>
        <span style={{ fontSize: '4.5rem' }}>H</span>
        <span style={{ fontSize: '4rem' }}>IGHLIGHTS</span>
        <span style={{ fontSize: '4.5rem' }}>M</span>
        <span style={{ fontSize: '4rem' }}>USIC.COM</span>
      </h1>

      <h4 style={{ 
        fontSize: '1.25rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
      }}>
        The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
      </h4>

      <h2 style={{ 
        fontSize: '1.875rem',
        color: '#1E90FF',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
      }}>
        &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
      </h2>
    </main>
  );
}
