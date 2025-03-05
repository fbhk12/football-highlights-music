'use client';
import Link from 'next/link';
import { CSSProperties, useState } from 'react';
import { songData } from './songData.ts';

export default function Songs() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter songs based on search term
  const filteredSongs = songData.filter(song => 
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(song.year).includes(searchTerm)
  );

  // Define styles with proper type annotations
  const mainStyle: CSSProperties = {
    minHeight: '100vh',
    background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem'
  };

  const headingStyle: CSSProperties = {
    fontSize: '2.5rem',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
  };

  const paragraphStyle: CSSProperties = {
    color: 'white',
    marginBottom: '2rem',
    lineHeight: 1.6,
    fontSize: '1.1rem',
    textAlign: 'center'
  };

  const containerStyle: CSSProperties = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid #FFD700'
  };

  const searchContainerStyle: CSSProperties = {
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const searchInputStyle: CSSProperties = {
    padding: '0.75rem 1rem',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    border: '1px solid #FFD700',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: '1rem'
  };

  const headerRowStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr 2fr 2fr 1fr',
    gap: '15px',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #FFD700',
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textAlign: 'left',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const songRowStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr 2fr 2fr 1fr',
    gap: '15px',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const linkStyle: CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem'
  };

  const titleLinkStyle: CSSProperties = {
    ...linkStyle,
    fontWeight: 'bold'
  };

  const highlightLinkStyle: CSSProperties = {
    color: '#FFD700',
    textDecoration: 'none',
    fontSize: '1rem'
  };

  const notesStyle: CSSProperties = {
    fontStyle: 'italic',
    color: '#aaa',
    fontSize: '0.9rem',
    marginLeft: '0.5rem'
  };

  return (
    <div style={mainStyle}>
      <div className="max-w-7xl mx-auto">
        <h1 style={headingStyle}>Songs</h1>
        
        <p style={paragraphStyle}>
          The songs that were used in football highlight films from 1966-1979.
        </p>
        
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search by title, artist, album, label or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
        </div>
        
        <div style={containerStyle}>
          {/* Header row with column titles */}
          <div style={headerRowStyle}>
            <div>Title</div>
            <div>Artist</div>
            <div>Album</div>
            <div>Record Label</div>
            <div>Year</div>
          </div>

          {/* Song rows */}
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div key={song.id} style={songRowStyle} className="hover:bg-black/50">
                <div>
                  <Link 
                    href={`/songs/${song.id}`}
                    style={titleLinkStyle}
                  >
                    {song.title}
                  </Link>
                  {song.notes && <span style={notesStyle}>{song.notes}</span>}
                </div>
                <div>
                  <Link 
                    href={`/artists/${song.artistId}`}
                    style={linkStyle}
                  >
                    {song.artist}
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/albums/${song.albumId}`}
                    style={linkStyle}
                  >
                    {song.album}
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/record-labels/${song.labelId}`}
                    style={highlightLinkStyle}
                  >
                    {song.label}
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/years/${song.year}`}
                    style={highlightLinkStyle}
                  >
                    {song.year}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
              No songs found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
