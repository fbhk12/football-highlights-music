'use client';

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
            marginBottom: '2rem',
            borderRadius: '0.25rem'
          }}
        >
          ← Back to Record Labels
        </button>
        
        <div style={{ border: '2px solid #FFD700' }} className="rounded-lg overflow-hidden">
          <h2 style={{ 
            color: '#FFD700',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1rem'
          }} className="text-2xl font-bold">
            Albums With FHM Songs
          </h2>

          <div style={{ padding: '1rem' }}>
          {/* Column Headers */}
<div style={{
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1rem',
  color: '#FFD700',
  fontWeight: 'bold',
  borderBottom: '1px solid #FFD700'
}}>
  <div style={{ width: '95px' }}></div> {/* Width + margin to match thumbnail space */}
  <div style={{ width: '100px' }}>Album #</div>
  <div style={{ flex: 1 }}>Name</div>
  <div style={{ width: '100px', textAlign: 'center' }}>Released</div>
  <div style={{ width: '120px', textAlign: 'center' }}># Of FHM Songs</div>
</div>

{/* Album Rows */}
{kpmAlbums.map((album) => (
  <div 
    key={album.number}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '0.75rem 1rem', // Increased padding for better vertical centering
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1px'
    }}
  >
    <img 
      src="/kpm-album-cover.jpg" 
      alt="KPM Album"
      style={{ 
        width: '65px',
        height: '65px',
        marginRight: '15px',
        objectFit: 'cover'
      }}
    />
    <span style={{ color: '#FFD700', width: '100px' }}>{album.number}</span>
    <span style={{ color: 'white', flex: 1 }}>{album.title}</span>
    <span style={{ color: '#FFD700', width: '100px' }}>{album.year}</span>
    <span style={{ color: 'white', width: '120px', textAlign: 'left' }}>{album.fhmSongs}</span>
  </div>
))}
          </div>
        </div>
      </div>
    </main>
  );
}
