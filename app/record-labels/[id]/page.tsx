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
      padding: '2rem',
    }}>
      <div className="min-h-screen px-8 py-4">
        <button 
          onClick={() => window.history.back()}
          className="inline-block mb-8 text-white hover:text-gray-300"
        >
          ← Back to Record Labels
        </button>
        
        <h1 className="text-4xl text-center mb-8 uppercase tracking-wider text-[#FFD700] font-bold">
          KPM
        </h1>
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            {leftColumnAlbums.map((album) => (
              <div 
                key={album.number}
                className="flex items-center gap-4 mb-2 text-white hover:bg-black/20 p-2"
              >
                <span className="text-[#FFD700] min-w-[100px]">{album.number}</span>
                <span className="text-[#FFD700] min-w-[50px]">{album.year}</span>
                <span className="min-w-[80px]">{album.fhmSongs} songs</span>
                <span>{album.title}</span>
              </div>
            ))}
          </div>
          <div>
            {rightColumnAlbums.map((album) => (
              <div 
                key={album.number}
                className="flex items-center gap-4 mb-2 text-white hover:bg-black/20 p-2"
              >
                <span className="text-[#FFD700] min-w-[100px]">{album.number}</span>
                <span className="text-[#FFD700] min-w-[50px]">{album.year}</span>
                <span className="min-w-[80px]">{album.fhmSongs} songs</span>
                <span>{album.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
