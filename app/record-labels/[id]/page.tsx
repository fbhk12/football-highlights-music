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
          className="mb-8 text-white hover:text-gray-300"
        >
          ← Back to Record Labels
        </button>
        
        <div style={{ border: '2px solid #FFD700' }} className="rounded-lg overflow-hidden">
          <h2 style={{ 
            color: '#FFD700',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '1rem'
          }} className="text-2xl font-bold">
            Albums with FHM Songs
          </h2>
          
          <div>
            {kpmAlbums.map((album) => (
              <div 
                key={album.number}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <span style={{ color: '#FFD700', width: '7rem' }}>{album.number}</span>
                <span style={{ color: 'white', flex: '1' }}>{album.title}</span>
                <span style={{ color: '#FFD700', width: '4rem', textAlign: 'right' }}>{album.year}</span>
                <span style={{ color: 'white', width: '8rem', textAlign: 'right' }}>FHM Songs: {album.fhmSongs}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
