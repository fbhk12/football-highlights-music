'use client';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

type RecordLabelPageProps = {
  params: {
    id: string;
  };
};

// Define data for all labels
const labelData = {
  'kpm': {
    albums: [
      { number: "KPM 1001", title: "The Mood Modern", year: 1966, fhmSongs: 6 },
      { number: "KPM 1002", title: "The Sounds Of Syd Dale", year: 1966, fhmSongs: 6 },
      { number: "KPM 1003", title: "The Backgrounds", year: 1966, fhmSongs: 6 },
      { number: "KPM 1008", title: "A Distinctive Approach", year: 1966, fhmSongs: 6 },
      { number: "KPM 1015", title: "The Sound Of Pop", year: 1966, fhmSongs: 6 },
      { number: "KPM 1017", title: "Impact And Action", year: 1966, fhmSongs: 6 },
      { number: "KPM 1018", title: "Tension And Suspense", year: 1966, fhmSongs: 6 },
      { number: "KPM 1019", title: "Comedy", year: 1966, fhmSongs: 6 },
      { number: "KPM 1020", title: "Twentieth Century Portrait", year: 1967, fhmSongs: 6 },
      { number: "KPM 1026", title: "Orchestral Kaleidoscope", year: 1967, fhmSongs: 6 }
    ],
    coverImage: "/Images-AlbumCovers/KPM-cover-green-front.jpg"
  },
  'de-wolfe': {
    albums: [
      { number: "DW 2001", title: "Television Series", year: 1968, fhmSongs: 5 },
      { number: "DW 2015", title: "Dramatic Sequences", year: 1968, fhmSongs: 3 },
      { number: "DW 2031", title: "Sporting Scenes", year: 1969, fhmSongs: 8 },
      { number: "DW 2047", title: "Light Mood Music", year: 1970, fhmSongs: 4 },
      { number: "DW 2058", title: "Documentary Music", year: 1971, fhmSongs: 6 },
      { number: "DW 2063", title: "Athletics & Action", year: 1972, fhmSongs: 7 }
    ],
    coverImage: "/Images-AlbumCovers/DW-cover-rwb-front.jpg"
  },
  'sylvester': {
    albums: [
      { number: "SYL 901", title: "Contemporary Sounds", year: 1967, fhmSongs: 4 },
      { number: "SYL 912", title: "Modern Background Music", year: 1968, fhmSongs: 5 },
      { number: "SYL 923", title: "Dramatic Moods", year: 1969, fhmSongs: 3 },
      { number: "SYL 930", title: "Sports Themes", year: 1970, fhmSongs: 7 }
    ],
    coverImage: "/Images-AlbumCovers/Sylvester-cover-tophalf-front.jpg"
  },
  'chappell': {
    albums: [
      { number: "CH 25", title: "Athletic Background", year: 1965, fhmSongs: 6 },
      { number: "CH 32", title: "Modern Orchestral", year: 1966, fhmSongs: 4 },
      { number: "CH 46", title: "Electronic Textures", year: 1968, fhmSongs: 3 },
      { number: "CH 57", title: "Sports Activities", year: 1969, fhmSongs: 8 }
    ],
    coverImage: "/Images-AlbumCovers/Capitol-cover-aqua-front.jpg" // Update if you have a specific Chappell image
  },
  'standard-music-library': {
    albums: [
      { number: "SML 101", title: "Orchestral Themes", year: 1967, fhmSongs: 5 },
      { number: "SML 118", title: "Modern Sounds", year: 1968, fhmSongs: 6 },
      { number: "SML 125", title: "Sports & Action", year: 1969, fhmSongs: 7 }
    ],
    coverImage: "/Images-AlbumCovers/Standard-cover-orangefilm-front.jpg"
  },
  'sam-fox': {
    albums: [
      { number: "SF 5001", title: "Sound Effects Vol. 1", year: 1965, fhmSongs: 2 },
      { number: "SF 5012", title: "Orchestral Settings", year: 1966, fhmSongs: 4 },
      { number: "SF 5023", title: "Background Textures", year: 1968, fhmSongs: 3 }
    ],
    coverImage: "/Images-AlbumCovers/SamFox-cover-gray-front.jpg"
  },
  'impress': {
    albums: [
      { number: "IMP 712", title: "Electronic Moods", year: 1969, fhmSongs: 5 },
      { number: "IMP 725", title: "Modern Scoring", year: 1970, fhmSongs: 4 },
      { number: "IMP 741", title: "Suspense Themes", year: 1972, fhmSongs: 3 }
    ],
    coverImage: "/Images-AlbumCovers/Impress-cover-tan-front.jpg"
  },
  'berry-music': {
    albums: [
      { number: "BM 412", title: "Athletic Themes", year: 1968, fhmSongs: 6 },
      { number: "BM 425", title: "Contemporary Backgrounds", year: 1969, fhmSongs: 4 },
      { number: "BM 437", title: "Dramatic Settings", year: 1971, fhmSongs: 3 }
    ],
    coverImage: "/Images-AlbumCovers/BerryConroy-cover-orange-front.jpg"
  },
  'nfl-films': {
    albums: [
      { number: "NFL 1001", title: "NFL Films Music Vol. 1", year: 1973, fhmSongs: 12 },
      { number: "NFL 1002", title: "NFL Films Music Vol. 2", year: 1975, fhmSongs: 14 },
      { number: "NFL 1003", title: "NFL Films Music Vol. 3", year: 1977, fhmSongs: 10 }
    ],
    coverImage: "/Images-AlbumCovers/NFLF-cover-whiterect-front.jpg"
  }
};

export default function RecordLabelPage({ params }: RecordLabelPageProps) {
  const getLabelName = (id: string) => {
    switch(id) {
      case 'kpm': return 'KPM';
      case 'de-wolfe': return 'De Wolfe';
      case 'sylvester': return 'Sylvester';
      case 'chappell': return 'Chappell';
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
