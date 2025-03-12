'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Song, songsData } from '../../songsData';

type SongPageProps = {
  params: {
    title: string;
  };
};

export default function SongPage({ params }: SongPageProps) {
  const [song, setSong] = useState<Song | null>(null);
  
  useEffect(() => {
    // Decode the URL parameter
    const decodedTitle = decodeURIComponent(params.title);
    
    // Find the song in the data
    const foundSong = songsData.find(s => 
      s.title.toLowerCase() === decodedTitle.toLowerCase()
    );
    
    if (foundSong) {
      setSong(foundSong);
    }
  }, [params.title]);

  if (!song) {
    return (
      <main style={{
        minHeight: '100vh',
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem'
      }}>
        <div className="max-w-3xl mx-auto text-center">
          <div style={{ 
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h2 style={{ color: '#FFD700', fontSize: '1.5rem', marginBottom: '1rem' }}>Song Not Found</h2>
            <p>The song you're looking for could not be found.</p>
            <Link href="/songs" style={{ 
              display: 'inline-block',
              margin: '1rem 0',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#FFD700',
              borderRadius: '4px',
              textDecoration: 'none'
            }}>
              ← Back to Songs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#FFD700',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          ← Back
        </button>
        
        <div style={{ border: '2px solid #FFD700', borderRadius: '8px', overflow: 'hidden' }}>
          <h2 style={{ 
            color: '#FFD700',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '0.5rem 1rem',
            marginBottom: 0,
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            {song.title}
          </h2>

          <div style={{ padding: '1.5rem', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            {/* Song Details */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                <div style={{ width: '120px', color: '#FFD700', fontWeight: 'bold' }}>Artist:</div>
                <Link href={`/artists/${encodeURIComponent(song.artist.toLowerCase())}`} style={{ color: 'white', textDecoration: 'none' }}>
                  {song.artist}
                </Link>
              </div>
              
              <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                <div style={{ width: '120px', color: '#FFD700', fontWeight: 'bold' }}>Album:</div>
                <Link href={`/albums/${encodeURIComponent(song.albumNumber.toLowerCase())}`} style={{ color: 'white', textDecoration: 'none' }}>
                  {song.album}
                </Link>
              </div>
              
              <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                <div style={{ width: '120px', color: '#FFD700', fontWeight: 'bold' }}>Record Label:</div>
                <Link href={`/record-labels/${encodeURIComponent(song.label.toLowerCase())}`} style={{ color: 'white', textDecoration: 'none' }}>
                  {song.label}
                </Link>
              </div>
              
              <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                <div style={{ width: '120px', color: '#FFD700', fontWeight: 'bold' }}>Year Released:</div>
                <Link href={`/years/${song.year}`} style={{ color: 'white', textDecoration: 'none' }}>
                  {song.year}
                </Link>
              </div>

              {song.notes && (
                <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                  <div style={{ width: '120px', color: '#FFD700', fontWeight: 'bold' }}>Notes:</div>
                  <div style={{ color: 'white' }}>{song.notes}</div>
                </div>
              )}
            </div>

            {/* FHM Uses Section */}
            {song.fhmUses && song.fhmUses.length > 0 && (
              <div>
                <h3 style={{ 
                  color: '#FFD700', 
                  borderBottom: '1px solid #FFD700',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  FHM Uses
                </h3>
                
                <div style={{
                  display: 'flex',
                  padding: '0.5rem 0',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
                }}>
                  <div style={{ flex: '1' }}>Film</div>
                  <div style={{ width: '100px', textAlign: 'center' }}>Time</div>
                </div>
                
                {song.fhmUses.map((use, index) => (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                      alignItems: 'center'
                    }}
                  >
                    <Link 
                      href={`/films/${encodeURIComponent(use.film.toLowerCase())}`}
                      style={{ 
                        flex: '1',
                        color: 'white',
                        textDecoration: 'none'
                      }}
                    >
                      {use.film}
                    </Link>
                    <div style={{ width: '100px', color: 'white', textAlign: 'center' }}>
                      {use.time}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
