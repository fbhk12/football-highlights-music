'use client';
import NavLinks from './components/nav-links';
import { Bungee_Shade } from 'next/font/google';

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin']
});

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
       <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto',
        gap: '4px',
        justifyContent: 'center',
        alignItems: 'baseline',  // Changed from 'end' to 'baseline' for bottom alignment
        marginBottom: '2rem',
        width: '100%',  // Ensure full width for proper centering
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <span style={{ 
          fontSize: '100px',
          lineHeight: '1',
          color: '#FFD700',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          display: 'inline-block'
        }}>F</span>
        <span style={{ 
          fontSize: '64px', 
          color: '#FFD700',
          lineHeight: '1'
        }}>OOTBALL</span>
        <span style={{ 
          fontSize: '100px',
          lineHeight: '1',
          color: '#FFD700',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          display: 'inline-block'
        }}>H</span>
        <span style={{ 
          fontSize: '64px', 
          color: '#FFD700',
          lineHeight: '1'
        }}>IGHLIGHTS</span>
        <span style={{ 
          fontSize: '100px',
          lineHeight: '1',
          color: '#FFD700',
          fontWeight: '700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          display: 'inline-block'
        }}>M</span>
        <span style={{ 
          fontSize: '64px', 
          color: '#FFD700',
          lineHeight: '1'
        }}>USIC.COM</span>
      </div>
      </h1>

      <h4 style={{ 
        fontSize: '1.5rem',
        color: 'white',
        marginBottom: '2rem',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'
      }}>
        The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
      </h4>


      <h2 className={bungeeShade.className} style={{ 
        fontSize: '2.5rem',
        color: '#87CEEB',  // Light blue
        textAlign: 'center',
        textShadow: `
          -2px -2px 0 #000,  
           2px -2px 0 #000,
          -2px  2px 0 #000,
           2px  2px 0 #000`  // Reduced to just four main shadow directions
      }}>
        &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
      </h2>

      <div style={{ width: '100%' }}>
        <NavLinks />
      </div>
    </main>
  );
}
