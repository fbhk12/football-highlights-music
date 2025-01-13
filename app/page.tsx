'use client';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          background-image: url('/lambeau68.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          min-height: 100vh;
        }
        
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          opacity: 0.8;
          z-index: 0;
        }
      `}</style>

      <div className="relative z-10 p-8">
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold',
          color: '#FFD700',
          textAlign: 'center'
        }}>
          FootballHighlightsMusic.com
        </h1>

        <h4 style={{ 
          fontSize: '1.25rem',
          color: 'black',
          margin: '1.5rem 0',
          textAlign: 'center'
        }}>
          The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>

        <h2 style={{ 
          fontSize: '1.875rem',
          color: '#1E90FF',
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
          textAlign: 'center'
        }}>
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </>
  );
} Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
        </h4>

        <h2 style={{ 
          fontSize: '1.875rem',
          color: '#1E90FF',
          textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
          textAlign: 'center'
        }}>
          &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
        </h2>
      </div>
    </div>
  );
}
