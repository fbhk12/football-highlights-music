'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from './utils/responsive-utils';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const { isMobile } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-football">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          {/* Hero Section */}
          <div className="content-card" style={{ marginTop: isMobile ? '1rem' : '2rem' }}>
            <div style={{ 
              position: 'relative', 
              textAlign: 'center',
              padding: isMobile ? '1rem' : '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}>
              <h1 style={{ 
                color: '#FFD700', 
                fontSize: isMobile ? '1.75rem' : '3rem',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}>
                Football Highlights Music
              </h1>
              
              <h2 style={{ 
                color: 'white', 
                fontSize: isMobile ? '0.9rem' : '1.2rem',
                marginBottom: '1.5rem',
                fontWeight: 'normal',
                maxWidth: '800px',
                margin: '0 auto 1.5rem auto',
                lineHeight: '1.5'
              }}>
                The Songs and Artists that Contributed to The Golden Age 
                of Music (1965-1979) Used in Football Highlight Films
              </h2>
              
              <div style={{ 
                backgroundColor: 'rgba(0, 128, 0, 0.7)', 
                padding: isMobile ? '0.75rem' : '1.25rem',
                margin: '1.5rem auto',
                maxWidth: isMobile ? '100%' : '80%',
                borderRadius: '8px'
              }}>
                <p style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '1rem' : '1.5rem',
                  fontWeight: 'bold',
                  margin: 0,
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  &quot;THE GREATEST SOUNDTRACK NEVER ASSEMBLED!&quot;
                </p>
              </div>
            </div>

            {/* Navigation Tiles */}
            <div style={{ 
              padding: isMobile ? '1rem' : '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(5, 1fr)',
                gap: isMobile ? '0.75rem' : '1.5rem',
                marginTop: '1rem'
              }}>
                {/* Navigation Tile: Songs */}
                <Link href="/songs" style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '8px',
                  padding: isMobile ? '0.75rem' : '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, background-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    🎵
                  </div>
                  <span style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '0.9rem' : '1.1rem'
                  }}>
                    Songs
                  </span>
                </Link>

                {/* Navigation Tile: Artists */}
                <Link href="/artists" style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '8px',
                  padding: isMobile ? '0.75rem' : '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, background-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    🎸
                  </div>
                  <span style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '0.9rem' : '1.1rem'
                  }}>
                    Artists
                  </span>
                </Link>

                {/* Navigation Tile: Albums */}
                <Link href="/albums" style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '8px',
                  padding: isMobile ? '0.75rem' : '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, background-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    💿
                  </div>
                  <span style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '0.9rem' : '1.1rem'
                  }}>
                    Albums
                  </span>
                </Link>

                {/* Navigation Tile: Record Labels */}
                <Link href="/record-labels" style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '8px',
                  padding: isMobile ? '0.75rem' : '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, background-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    🏢
                  </div>
                  <span style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '0.9rem' : '1.1rem'
                  }}>
                    Record Labels
                  </span>
                </Link>

                {/* Navigation Tile: Films */}
                <Link href="/films" style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '8px',
                  padding: isMobile ? '0.75rem' : '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, background-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    🎬
                  </div>
                  <span style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: isMobile ? '0.9rem' : '1.1rem'
                  }}>
                    Films
                  </span>
                </Link>
              </div>

              {/* Second row of tiles for mobile view */}
              {isMobile && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginTop: '0.75rem'
                }}>
                  {/* Navigation Tile: Teams */}
                  <Link href="/teams" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '0.5rem'
                    }}>
                      🏈
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      Teams
                    </span>
                  </Link>

                  {/* Navigation Tile: Seasons */}
                  <Link href="/seasons" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '0.5rem'
                    }}>
                      📅
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      Seasons
                    </span>
                  </Link>

                  {/* Additional tiles can be added here for mobile view */}
                </div>
              )}

              {/* Desktop additional navigation */}
              {!isMobile && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '1.5rem',
                  marginTop: '1.5rem'
                }}>
                  {/* Navigation Tile: Teams */}
                  <Link href="/teams" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      🏈
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      Teams
                    </span>
                  </Link>

                  {/* Navigation Tile: Seasons */}
                  <Link href="/seasons" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      📅
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      Seasons
                    </span>
                  </Link>

                  {/* Navigation Tile: Specials */}
                  <Link href="/specials" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      🏆
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      Specials
                    </span>
                  </Link>

                  {/* Navigation Tile: Non-Football */}
                  <Link href="/non-football" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      ⚾
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      Non-Football
                    </span>
                  </Link>

                  {/* Navigation Tile: About */}
                  <Link href="/about" style={{
                    backgroundColor: '#FFD700',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, background-color 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '2.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      ℹ️
                    </div>
                    <span style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      About
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div style={{ position: 'relative', width: '300px', height: '200px' }}>
  <Image 
    src="/Lambeau68-1024x690.jpg"
    alt="Stadium"
    fill
    style={{ objectFit: 'cover' }}
  />
  <p>Test image</p>
</div>
          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            color: 'white',
            padding: '1rem',
            marginTop: '2rem',
            fontSize: isMobile ? '0.75rem' : '0.9rem'
          }}>
            <p>© {new Date().getFullYear()} Football Highlights Music. All rights reserved.</p>
          </footer>
        </div>
      )}
    </main>
  );
}
