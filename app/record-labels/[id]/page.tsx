'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { labelData } from '../labelData'; // Import from parent directory

type RecordLabelPageProps = {
  params: {
    id: string;
  };
};


export default function RecordLabelPage({ params }: RecordLabelPageProps) {
  const getLabelName = (id: string) => {
  switch(id) {
    case 'kpm': return 'KPM';
    case 'de-wolfe': return 'De Wolfe';
    case 'sylvester': return 'Sylvester';
    case 'chappell': return 'Chappell';
    case 'capitol-production-music': return 'Capitol Production Music';
    case 'standard-music-library': return 'Standard Music Library';
    case 'sam-fox': return 'Sam Fox';
    case 'impress': return 'Impress';
    case 'berry-music': return 'Berry Music';
    case 'nfl-films': return 'NFL Films';
    default: return '';
  }
};

  // Get the current label based on the URL parameter
  const labelId = params.id;
  const labelName = getLabelName(labelId);
  
  // Get the current label's data or use defaults if not found
  const currentLabel = labelData[labelId as keyof typeof labelData] || { 
    albums: [], 
    coverImage: "/Images-AlbumCovers/KPM-cover-green-front.jpg" // Default image as fallback
  };
  
  // Use the dynamic data
  const albums = currentLabel.albums;
  const coverImage = currentLabel.coverImage;

  // Console logs for debugging
  console.log('Current Label ID:', labelId);
  console.log('Label Name:', labelName);
  console.log('Albums Count:', albums.length);
  console.log('Cover Image:', coverImage);

  const mainStyle: CSSProperties = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem'
  };

  return (
    <div style={mainStyle}>
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#FFD700',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            border: 'none'
          }}
        >
          ← Back to Record Labels
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
            {labelName} Albums With FHM Songs
          </h2>

          {/* Two-Column Layout Container */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            padding: '1rem'
          }}>
            {/* Left Column */}
            <div style={{ flex: 1 }}>
              {/* Column Headers */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                color: '#FFD700',
                fontWeight: 'bold',
                borderBottom: '1px solid #FFD700',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                <div style={{ width: '70px', marginRight: '15px' }}></div>
                <div style={{ width: '100px', marginRight: '15px' }}>Album #</div>
                <div style={{ width: '200px', marginRight: '15px' }}>Name</div>
                <div style={{ width: '80px', marginRight: '15px' }}>Released</div>
                <div style={{ width: '80px' }}># Of FHM Songs</div>
              </div>

              {/* Left Column Albums */}
              <div>
                {albums.slice(0, Math.ceil(albums.length / 2)).map((album) => (
                  <div 
                    key={album.number}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '0.25rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                      minHeight: '70px'
                    }}
                  >
                    <div style={{ 
                      width: '70px',
                      marginRight: '15px',
                      display: 'flex', 
                      alignItems: 'center',
                      position: 'relative'
                    }}>
                      <Image
                        src={coverImage}
                        alt={`${labelName} Album`}
                        width={70}
                        height={70}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <Link href={`/albums/${album.number.toLowerCase()}`} style={{ 
                      width: '100px', 
                      marginRight: '15px', 
                      color: '#FFD700',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.number}
                    </Link>
                    <Link href={`/albums/${album.number.toLowerCase()}`} style={{ 
                      width: '200px', 
                      marginRight: '15px', 
                      color: 'white',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.title}
                    </Link>
                    <Link href={`/years/${album.year}`} style={{ 
                      width: '80px', 
                      marginRight: '15px', 
                      color: '#FFD700',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.year}
                    </Link>
                    <div style={{ width: '80px', color: 'white', textAlign: 'center' }}>
                      {album.fhmSongs}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div style={{ flex: 1 }}>
              {/* Column Headers */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                color: '#FFD700',
                fontWeight: 'bold',
                borderBottom: '1px solid #FFD700',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                <div style={{ width: '70px', marginRight: '15px' }}></div>
                <div style={{ width: '100px', marginRight: '15px' }}>Album #</div>
                <div style={{ width: '200px', marginRight: '15px' }}>Name</div>
                <div style={{ width: '80px', marginRight: '15px' }}>Released</div>
                <div style={{ width: '80px' }}># Of FHM Songs</div>
              </div>

              {/* Right Column Albums */}
              <div>
                {albums.slice(Math.ceil(albums.length / 2)).map((album) => (
                  <div 
                    key={album.number}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      padding: '0.25rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                      minHeight: '70px'
                    }}
                  >
                    <div style={{ 
                      width: '70px',
                      marginRight: '15px',
                      display: 'flex', 
                      alignItems: 'center',
                      position: 'relative'
                    }}>
                      <Image
                        src={coverImage}
                        alt={`${labelName} Album`}
                        width={70}
                        height={70}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <Link href={`/albums/${album.number.toLowerCase()}`} style={{ 
                      width: '100px', 
                      marginRight: '15px', 
                      color: '#FFD700',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.number}
                    </Link>
                    <Link href={`/albums/${album.number.toLowerCase()}`} style={{ 
                      width: '200px', 
                      marginRight: '15px', 
                      color: 'white',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.title}
                    </Link>
                    <Link href={`/years/${album.year}`} style={{ 
                      width: '80px', 
                      marginRight: '15px', 
                      color: '#FFD700',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}>
                      {album.year}
                    </Link>
                    <div style={{ width: '80px', color: 'white', textAlign: 'center' }}>
                      {album.fhmSongs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
