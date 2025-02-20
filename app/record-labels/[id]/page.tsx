'use client';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { colors } from '@/app/colors';

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin']
});

// Rest of the imports and type definitions remain the same...

export default function RecordLabelPage({ params }: RecordLabelPageProps) {
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
    }}>
      <div className="max-w-4xl mx-auto">
        {/* Navigation and title sections remain the same... */}

        {/* Albums Section with checklist style */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '8px',
          border: `1px solid ${colors.nflGold}`
        }}>
          <h2 className={oswald.className} style={{
            fontSize: '1.5rem',
            color: colors.nflGold,
            marginBottom: '1.5rem'
          }}>
            Albums with FHM Songs
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {kpmAlbums.map((album, index) => (
              <div 
                key={index}
                style={{
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'white'
                }}
                className="hover:bg-white/10"
              >
                <div style={{ 
                  minWidth: '100px',
                  color: colors.nflGold 
                }}>
                  {album.number}
                </div>
                <div style={{ 
                  flex: 1,
                  fontSize: '1rem'
                }}>
                  {album.title}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  minWidth: '200px',
                  justifyContent: 'flex-end'
                }}>
                  <span style={{ color: colors.nflGold }}>{album.year}</span>
                  <span>FHM Songs: {album.songsUsed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
