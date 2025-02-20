'use client';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { colors } from '@/app/colors';

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin']
});

type RecordLabelPageProps = {
  params: {
    id: string;
  };
};

const kpmAlbums = [
  { number: 'KPM 1001', title: 'The Mood Modern', year: 1966, songsUsed: 6 },
  { number: 'KPM 1002', title: 'The Sounds Of Syd Dale', year: 1966, songsUsed: 6 },
  { number: 'KPM 1003', title: 'The Backgrounds', year: 1966, songsUsed: 6 },
  { number: 'KPM 1008', title: 'A Distinctive Approach', year: 1966, songsUsed: 6 },
  { number: 'KPM 1015', title: 'The Sound Of Pop', year: 1966, songsUsed: 6 },
  { number: 'KPM 1017', title: 'Impact And Action', year: 1966, songsUsed: 6 },
  { number: 'KPM 1018', title: 'Tension And Suspense', year: 1966, songsUsed: 6 },
  { number: 'KPM 1019', title: 'Comedy', year: 1966, songsUsed: 6 },
  { number: 'KPM 1020', title: 'Twentieth Century Portrait', year: 1967, songsUsed: 6 },
  { number: 'KPM 1026', title: 'Orchestral Kaleidoscope', year: 1967, songsUsed: 6 },
];

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
        {/* Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            href="/record-labels"
            style={{
              color: colors.nflGold,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Back to Record Labels
          </Link>
        </div>

        {/* Label Title */}
        <h1 className={oswald.className} style={{
          fontSize: '2.5rem',
          color: colors.nflGold,
          textAlign: 'center',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}>
          KPM
        </h1>

        {/* Overview Section */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '8px',
          border: `1px solid ${colors.nflGold}`,
          marginBottom: '2rem'
        }}>
          <p style={{
            color: 'white',
            lineHeight: '1.6',
            fontSize: '1.1rem'
          }}>
            Founded in London in 1956, Keith Prowse Music (KPM) became one of the most important publishers of production music in the 1960s. Their distinctive green album covers and high-quality recordings made them a favorite source for NFL Films music between 1966-1979.
          </p>
        </div>

        {/* Albums Section */}
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
            gap: '1rem'
          }}>
            {kpmAlbums.map((album, index) => (
              <div 
                key={index}
                style={{
                  padding: '1rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-white/10"
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: 'white'
                }}>
                  <div>
                    <span style={{ color: colors.nflGold, fontWeight: 'bold' }}>{album.number}</span>
                    <h3 style={{ fontSize: '1.2rem', marginTop: '0.25rem' }}>{album.title}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: colors.nflGold }}>{album.year}</div>
                    <div style={{ marginTop: '0.25rem' }}>FHM Songs: {album.songsUsed}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
