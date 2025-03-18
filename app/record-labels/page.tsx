'use client';
import Link from 'next/link';
import { CSSProperties } from 'react';

// Import the label data to calculate statistics
import { labelData } from './labelData'; // Import from same directory

export default function RecordLabels() {
  // Calculate statistics for each label
  const recordLabels = [
    { 
      name: 'KPM', 
      id: 'kpm',
      songCount: calculateSongCount('kpm'),
      albumCount: calculateAlbumCount('kpm')
    },
    { 
      name: 'De Wolfe', 
      id: 'de-wolfe',
      songCount: calculateSongCount('de-wolfe'),
      albumCount: calculateAlbumCount('de-wolfe')
    },
    { 
      name: 'Sylvester', 
      id: 'sylvester',
      songCount: calculateSongCount('sylvester'),
      albumCount: calculateAlbumCount('sylvester')
    },
    { 
      name: 'Chappell', 
      id: 'chappell',
      songCount: calculateSongCount('chappell'),
      albumCount: calculateAlbumCount('chappell')
    },
    { 
      name: 'Capitol Production Music', 
      id: 'capitol-production-music',
      songCount: calculateSongCount('capitol-production-music'),
      albumCount: calculateAlbumCount('capitol-production-music')
    },
    { 
      name: 'Standard Music Library', 
      id: 'standard-music-library',
      songCount: calculateSongCount('standard-music-library'),
      albumCount: calculateAlbumCount('standard-music-library')
    },
    { 
      name: 'Sam Fox', 
      id: 'sam-fox',
      songCount: calculateSongCount('sam-fox'),
      albumCount: calculateAlbumCount('sam-fox')
    },
    { 
      name: 'Impress', 
      id: 'impress',
      songCount: calculateSongCount('impress'),
      albumCount: calculateAlbumCount('impress')
    },
    { 
      name: 'Berry Music', 
      id: 'berry-music',
      songCount: calculateSongCount('berry-music'),
      albumCount: calculateAlbumCount('berry-music')
    },
    { 
      name: 'NFL Films', 
      id: 'nfl-films',
      songCount: calculateSongCount('nfl-films'),
      albumCount: calculateAlbumCount('nfl-films')
    }
  ];

  // Helper functions to calculate statistics
  function calculateSongCount(labelId: string) {
    const label = labelData[labelId as keyof typeof labelData];
    if (!label) return 0;
    
    // Sum up the fhmSongs property from all albums
    return label.albums.reduce((total, album) => total + album.fhmSongs, 0);
  }
  
  function calculateAlbumCount(labelId: string) {
    const label = labelData[labelId as keyof typeof labelData];
    if (!label) return 0;
    
    // Count the number of albums
    return label.albums.length;
  }

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

const headerRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Equal width columns
  gap: '20px', // Reduced from 40px to 20px
  padding: '0.5rem 1rem',
  borderBottom: '1px solid #FFD700',
  color: '#FFD700',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textAlign: 'center',
  maxWidth: '800px', // Add this to constrain width
  margin: '0 auto' // Add this to center the grid
};

const linkRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Equal width columns
  gap: '20px', // Reduced from 40px to 20px
  padding: '1rem',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  alignItems: 'center',
  maxWidth: '800px', // Add this to constrain width
  margin: '0 auto' // Add this to center the grid
};

const linkStyle: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  textAlign: 'center' // Center the label name
};

const statStyle: CSSProperties = {
  color: '#FFD700',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: '1.3rem'  // Increase from default size
};

  return (
    <div style={mainStyle}>
      <div className="max-w-4xl mx-auto">
        <Link 
    href="/"
    style={{
      display: 'inline-block',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#FFD700',
      padding: '0.5rem 1rem',
      marginBottom: '1rem',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      textDecoration: 'none',
      border: 'none'
    }}
  >
    ← Back to Home
  </Link>
        <h1 style={headingStyle}>
          Record Labels
        </h1>
        <p style={paragraphStyle}>
          The record labels that produced albums containing songs used in football highlight films from 1966-1979.
        </p>
        <div style={containerStyle}>
          {/* Header row with column titles */}
          <div style={headerRowStyle}>
            <div>Label Name</div>
            <div style={{ textAlign: 'center' }}># Of FHM Songs</div>
            <div style={{ textAlign: 'center' }}># Of FHM Albums</div>
          </div>

          {/* Record labels with statistics */}
          {recordLabels.map((label) => (
            <div key={label.id} style={linkRowStyle} className="hover:bg-yellow-900/50">
              <Link 
                href={`/record-labels/${label.id}`}
                style={linkStyle}
              >
                {label.name}
              </Link>
              <div style={statStyle}>{label.songCount}</div>
              <div style={statStyle}>{label.albumCount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
