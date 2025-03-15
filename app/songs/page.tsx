'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Song, songsData } from '../songsData';

// Type for sort configuration
type SortConfig = {
  key: keyof Song;
  direction: 'ascending' | 'descending';
};

// Constants for pagination
const SONGS_PER_PAGE = 20;

export default function SongsPage() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for sorting
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'title',
    direction: 'ascending'
  });
  
  // State for sorted and paginated songs
  const [displayedSongs, setDisplayedSongs] = useState<Song[]>([]);
  
  // Calculate total pages
  const totalPages = Math.ceil(songsData.length / SONGS_PER_PAGE);

  // Handle sort request
  const requestSort = (key: keyof Song) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    
    // If we're sorting by the same key, toggle direction
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    setSortConfig({ key, direction });
  };
  
  // Get class names for sort headers
  const getSortDirectionIcon = (key: keyof Song) => {
    if (sortConfig.key !== key) {
      return '↕️'; // Default - both directions
    }
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };
  
  // Update displayed songs when sort config or page changes
  useEffect(() => {
    // Create a copy of the songs array to avoid mutating the original
    const sortedSongs = [...songsData].sort((a, b) => {
      // Handle special case for year (numeric sort)
      if (sortConfig.key === 'year') {
        return sortConfig.direction === 'ascending' 
          ? a.year - b.year 
          : b.year - a.year;
      }
      
      // For all other fields (string sort)
      const aValue = String(a[sortConfig.key] || '').toLowerCase();
      const bValue = String(b[sortConfig.key] || '').toLowerCase();
      
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    
    // Get current page songs
    const indexOfLastSong = currentPage * SONGS_PER_PAGE;
    const indexOfFirstSong = indexOfLastSong - SONGS_PER_PAGE;
    setDisplayedSongs(sortedSongs.slice(indexOfFirstSong, indexOfLastSong));
    
  }, [sortConfig, currentPage]);

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
              <button 
                onClick={() => requestSort('title')}
                style={{ 
                  width: '28%', 
                  marginRight: '15px',
                  border: 'none',
                  background: 'none',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Title <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('title')}</span>
              </button>
              <button 
                onClick={() => requestSort('artist')}
                style={{ 
                  width: '20%', 
                  marginRight: '15px',
                  border: 'none',
                  background: 'none',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Artist <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('artist')}</span>
              </button>
              <button 
                onClick={() => requestSort('album')}
                style={{ 
                  width: '20%', 
                  marginRight: '15px',
                  border: 'none',
                  background: 'none',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Album <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('album')}</span>
              </button>
              <button 
                onClick={() => requestSort('label')}
                style={{ 
                  width: '20%', 
                  marginRight: '15px',
                  border: 'none',
                  background: 'none',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Label <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('label')}</span>
              </button>
              <button 
                onClick={() => requestSort('year')}
                style={{ 
                  width: '12%',
                  border: 'none',
                  background: 'none',
                  color: '#FFD700',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Year <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('year')}</span>
              </button>
            </div>

            {/* Songs List */}
            <div>
              {displayedSongs.length > 0 ? (
                displayedSongs.map((song, index) => (
                  <div 
                    key={`${song.title}-${index}`}
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
                ))
              ) : (
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '2rem 1rem',
                    textAlign: 'center',
                    color: 'white'
                  }}
                >
                  No songs found to display
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 0 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                {totalPages <= 10 ? (
                  // If fewer than 10 pages, show all page numbers
                  Array.from({ length: totalPages }, (_, i) => (
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
                  ))
                ) : (
                  // If more than 10 pages, show a more compact pagination
                  <>
                    {/* First page */}
                    <button
                      onClick={() => paginate(1)}
                      style={{
                        margin: '0 0.25rem',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: currentPage === 1 ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                        color: currentPage === 1 ? 'black' : '#FFD700',
                        border: '1px solid #FFD700',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      1
                    </button>

                    {/* Previous button */}
                    {currentPage > 2 && (
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        style={{
                          margin: '0 0.25rem',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: '#FFD700',
                          border: '1px solid #FFD700',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        &lt;
                      </button>
                    )}

                    {/* Current page (if not first or last) */}
                    {currentPage !== 1 && currentPage !== totalPages && (
                      <button
                        style={{
                          margin: '0 0.25rem',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: '#FFD700',
                          color: 'black',
                          border: '1px solid #FFD700',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        {currentPage}
                      </button>
                    )}

                    {/* Next button */}
                    {currentPage < totalPages - 1 && (
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        style={{
                          margin: '0 0.25rem',
                          padding: '0.5rem 0.75rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: '#FFD700',
                          border: '1px solid #FFD700',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        &gt;
                      </button>
                    )}

                    {/* Last page */}
                    <button
                      onClick={() => paginate(totalPages)}
                      style={{
                        margin: '0 0.25rem',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: currentPage === totalPages ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                        color: currentPage === totalPages ? 'black' : '#FFD700',
                        border: '1px solid #FFD700',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
