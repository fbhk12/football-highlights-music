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
        fontWeight: '700',
        color: '#FFD700',
        marginBottom: '32px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: '1px',
        lineHeight: '1',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          fontSize: '120px',  // Large size for F
          display: 'inline-block',
          lineHeight: '1'
        }}>F</span>
        <span style={{ 
          fontSize: '64px'  // Base size for regular letters
        }}>OOTBALL</span>
        <span style={{ 
          fontSize: '120px',  // Large size for H
          display: 'inline-block',
          lineHeight: '1'
        }}>H</span>
        <span style={{ 
          fontSize: '64px'  // Base size for regular letters
        }}>IGHLIGHTS</span>
        <span style={{ 
          fontSize: '120px',  // Large size for M
          display: 'inline-block',
          lineHeight: '1'
        }}>M</span>
        <span style={{ 
          fontSize: '64px'  // Base size for regular letters
        }}>USIC.COM</span>
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
