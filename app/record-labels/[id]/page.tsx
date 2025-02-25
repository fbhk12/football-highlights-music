'use client';
import Image from 'next/image';
import Link from 'next/link';

type RecordLabelPageProps = {
  params: {
    id: string;
  };
};

const kpmAlbums = [
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
];

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

  const labelName = getLabelName(params.id);

  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => window.history.back()}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#FFD700',
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
            borderRadius: '0.25rem'
          }}
        >
          ← Back to Record Labels
        </button>
        
        <div style={{ border: '2px solid #FFD700' }} className="rounded-lg overflow-hidden">
         <h2 style={{ 
  color: '#FFD700',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '0.5rem 1rem',
  marginBottom: 0,
  textAlign: 'center'  // Add this line
}} className="text-2xl font-bold">
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
                {kpmAlbums.slice(0, Math.ceil(kpmAlbums.length / 2)).map((album) => (
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
                        coverImage: "/Images-AlbumCovers/KPM-cover-green-front.jpg"
                        alt="KPM Album"
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
                {kpmAlbums.slice(Math.ceil(kpmAlbums.length / 2)).map((album) => (
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
                        coverImage: "/Images-AlbumCovers/KPM-cover-green-front.jpg"
                        alt="KPM Album"
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
    </main>
  );
}
