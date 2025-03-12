'use client';
import Link from 'next/link';
import { useState } from 'react';

// Define the Song type
type Song = {
  title: string;
  artist: string;
  album: string;
  albumNumber: string;
  label: string;
  year: number;
  fhmUses?: { film: string; time: string }[];
};

// Sample songs data (you'll replace this with your actual data)
const songsData: Song[] = [
  {
    title: "Action Man",
    artist: "Syd Dale",
    album: "IA 379",
    albumNumber: "IA 379",
    label: "Impress",
    year: 1966,
    fhmUses: [
      { film: "1967 Colts", time: "3:44" },
      { film: "1967 Packers", time: "6:19" },
      { film: "1968 Cowboys", time: "20:20" },
      { film: "1968 Steelers", time: "16:45" },
    ]
  },
  {
    title: "Action Pack",
    artist: "Simon Haseley",
    album: "DWLP 3268",
    albumNumber: "DWLP 3268",
    label: "De Wolfe",
    year: 1973,
  },
  {
    title: "Action Replay",
    artist: "Alan Hawkshaw",
    album: "KPM 1076",
    albumNumber: "KPM 1076",
    label: "KPM",
    year: 1970,
  },
  {
    title: "Action Report",
    artist: "Keith Mansfield",
    album: "KPM 1240",
    albumNumber: "KPM 1240",
    label: "KPM",
    year: 1979,
  },
  {
    title: "Action Ride",
    artist: "Martha Jane Weber",
    album: "Autumn Thunder",
    albumNumber: "",
    label: "NFL Films",
    year: 1974,
  },
  {
    title: "Action Stations",
    artist: "David Lindup",
    album: "KPM 1017",
    albumNumber: "KPM 1017",
    label: "KPM",
    year: 1967,
  },
  {
    title: "Affairs Of State",
    artist: "Neil Richardson",
    album: "KPM 1137",
    albumNumber: "KPM 1137",
    label: "KPM",
    year: 1974,
  },
  {
    title: "Africa Dances",
    artist: "Kenny Graham",
    album: "KPM LP 7",
    albumNumber: "KPM LP 7",
    label: "KPM",
    year: 1962,
  },
  {
    title: "Afro Metropolis",
    artist: "John Cameron",
    album: "KPM 1130",
    albumNumber: "KPM 1130",
    label: "KPM",
    year: 1973,
  },
];

// Constants for pagination
const SONGS_PER_PAGE = 20;

export default function SongsPage() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(songsData.length / SONGS_PER_PAGE);
  
  // Get current songs
  const indexOfLastSong = currentPage * SONGS_PER_PAGE;
  const indexOfFirstSong = indexOfLastSong - SONGS_PER_PAGE;
  const currentSongs = songsData.slice(indexOfFirstSong, indexOfLastSong);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <main style={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/Lambeau68-1024x690.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem'
    }}>
      <div className="max-w-6xl mx-auto">
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
            Football Highlights Music Songs
          </h2>

          {/* Table Container */}
          <div style={{ padding: '1rem' }}>
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
              <div style={{ width: '28%', marginRight: '15px' }}>Title</div>
              <div style={{ width: '20%', marginRight: '15px' }}>Artist</div>
              <div style={{ width: '20%', marginRight: '15px' }}>Album</div>
              <div style={{ width: '20%', marginRight: '15px' }}>Label</div>
              <div style={{ width: '12%' }}>Year</div>
            </div>

            {/* Songs List */}
            <div>
              {currentSongs.map((song, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '0.5rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                    minHeight: '60px'
                  }}
                >
                  <Link href={`/songs/${encodeURIComponent(song.title.toLowerCase())}`} style={{ 
                    width: '28%', 
                    marginRight: '15px', 
                    color: 'white',
                    textDecoration: 'none'
                  }}>
                    {song.title}
                  </Link>
                  <Link href={`/artists/${encodeURIComponent(song.artist.toLowerCase())}`} style={{ 
                    width: '20%', 
                    marginRight: '15px', 
                    color: '#FFD700',
                    textDecoration: 'none'
                  }}>
                    {song.artist}
                  </Link>
                  <Link href={`/albums/${encodeURIComponent(song.albumNumber.toLowerCase())}`} style={{ 
                    width: '20%', 
                    marginRight: '15px', 
                    color: 'white',
                    textDecoration: 'none'
                  }}>
                    {song.album}
                  </Link>
                  <Link href={`/record-labels/${encodeURIComponent(song.label.toLowerCase())}`} style={{ 
                    width: '20%', 
                    marginRight: '15px', 
                    color: '#FFD700',
                    textDecoration: 'none'
                  }}>
                    {song.label}
                  </Link>
                  <Link href={`/years/${song.year}`} style={{ 
                    width: '12%', 
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}>
                    {song.year}
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  style={{
                    margin: '0 0.25rem',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: currentPage === i + 1 ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                    color: currentPage === i + 1 ? 'black' : '#FFD700',
                    border: '1px solid #FFD700',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
