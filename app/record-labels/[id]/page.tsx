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
  const halfwayPoint = Math.ceil(kpmAlbums.length / 2);
  const leftColumnAlbums = kpmAlbums.slice(0, halfwayPoint);
  const rightColumnAlbums = kpmAlbums.slice(halfwayPoint);

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
          className="mb-8 text-white hover:text-gray-300 px-4 py-2 rounded"
        >
          ← Back to Record Labels
        </button>
        
        <h1 className="text-4xl text-center mb-8 uppercase tracking-wider text-[#FFD700] font-bold">
          KPM
        </h1>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-2">
            {leftColumnAlbums.map((album) => (
              <div 
                key={album.number}
                className="flex items-center bg-black/30 hover:bg-black/50 p-3 rounded"
              >
                <span className="text-[#FFD700] w-28">{album.number}</span>
                <span className="text-[#FFD700] w-16">{album.year}</span>
                <span className="text-white w-24">{album.fhmSongs} songs</span>
                <span className="text-white flex-1">{album.title}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {rightColumnAlbums.map((album) => (
              <div 
                key={album.number}
                className="flex items-center bg-black/30 hover:bg-black/50 p-3 rounded"
              >
                <span className="text-[#FFD700] w-28">{album.number}</span>
                <span className="text-[#FFD700] w-16">{album.year}</span>
                <span className="text-white w-24">{album.fhmSongs} songs</span>
                <span className="text-white flex-1">{album.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
