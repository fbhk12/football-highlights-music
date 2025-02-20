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
        
        <div className="border-2 border-[#FFD700] rounded-lg overflow-hidden">
          <h2 className="text-[#FFD700] text-2xl font-bold p-4 bg-black/50">
            Albums with FHM Songs
          </h2>
          
          <div className="space-y-1">
            {kpmAlbums.map((album) => (
              <div 
                key={album.number}
                className="flex items-center bg-black/50 hover:bg-black/70 px-4 py-2"
              >
                <span className="text-[#FFD700] w-28">{album.number}</span>
                <span className="text-white flex-1">{album.title}</span>
                <span className="text-[#FFD700] w-16 text-right">{album.year}</span>
                <span className="text-white w-32 text-right">FHM Songs: {album.fhmSongs}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
