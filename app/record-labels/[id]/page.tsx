'use client';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { colors } from '@/app/colors';

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin']
});

export default function RecordLabelPage({ params }) {
  const { id } = params;

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
          {id.toUpperCase()}
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
            Overview paragraph about the record label will go here.
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
            Albums with NFL Films Songs
          </h2>

          {/* Album List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Sample album entry - we'll make this dynamic later */}
            <div style={{
              padding: '1rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 215, 0, 0.2)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white'
              }}>
                <div>
                  <span style={{ color: colors.nflGold, fontWeight: 'bold' }}>Album Number</span>
                  <h3 style={{ fontSize: '1.2rem', marginTop: '0.25rem' }}>Album Title</h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: colors.nflGold }}>Year Released</div>
                  <div style={{ marginTop: '0.25rem' }}>NFL Films Songs: #</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
