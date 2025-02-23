'use client';
import Image from 'next/image';

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
  const mainStyle = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '2rem'
  };

  return (
    <main style={mainStyle}>
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
            marginBottom: 0
          }} className="text-2xl font-bold">
            Albums With FHM Songs
          </h2>
          
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
            <div style={{ width: '120px' }}></div>
            <div style={{ width: '100px' }}>Album #</div>
            <div style={{ flex: 1 }}>Name</div>
            <div style={{ width: '80px', textAlign: 'right' }}>Released</div>
            <div style={{ width: '50px', textAlign: 'right' }}># Of FHM Songs</div>
          </div>

          {/* Album Rows */}
          <div>
            {kpmAlbums.map((album) => (
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
                  width: '120px',
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '0.25rem',
                  position: 'relative'
                }}>
                  <Image
                    src="/KPM-cover-green-front.jpg"
                    alt="KPM Album"
                    width={70}
                    height={70}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ width: '100px', color: '#FFD700' }}>{album.number}</div>
                <div style={{ flex: 1, color: 'white' }}>{album.title}</div>
                <div style={{ width: '80px', color: '#FFD700', textAlign: 'right' }}>{album.year}</div>
                <div style={{ width: '50px', color: 'white', textAlign: 'right' }}>{album.fhmSongs}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
