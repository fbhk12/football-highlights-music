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
        position: 'relative',
        color: '#FFD700',
        marginBottom: '32px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        height: '120px'  // Make room for taller letters
      }}>
        <div style={{ position: 'relative', width: '60px' }}>
          <span style={{ 
            position: 'absolute',
            bottom: '0',
            fontSize: '120px',
            lineHeight: '1',
            fontWeight: '700'
          }}>F</span>
        </div>
        <span>OOTBALL</span>
        <div style={{ position: 'relative', width: '60px' }}>
          <span style={{ 
            position: 'absolute',
            bottom: '0',
            fontSize: '120px',
            lineHeight: '1',
            fontWeight: '700'
          }}>H</span>
        </div>
        <span>IGHLIGHTS</span>
        <div style={{ position: 'relative', width: '60px' }}>
          <span style={{ 
            position: 'absolute',
            bottom: '0',
            fontSize: '120px',
            lineHeight: '1',
            fontWeight: '700'
          }}>M</span>
        </div>
        <span>USIC.COM</span>
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
        fontSize: '2.5rem',
        color: '#87CEEB',  // Light blue
        fontFamily: "'Righteous', cursive",
        textAlign: 'center',
        textShadow: `
          -4px -4px 0 #000,  
           4px -4px 0 #000,
          -4px  4px 0 #000,
           4px  4px 0 #000,
          -4px  0   0 #000,
           4px  0   0 #000,
           0   -4px 0 #000,
           0    4px 0 #000,
          -3px -3px 0 #000,  
           3px -3px 0 #000,
          -3px  3px 0 #000,
           3px  3px 0 #000,
          -2px -2px 0 #000,  
           2px -2px 0 #000,
          -2px  2px 0 #000,
           2px  2px 0 #000`  // Multiple layers of shadows for thicker outline
      }}>
        &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
      </h2>
    </main>
  );
}
