'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Song, songsData } from '../songsData';
import ResponsiveLayout from '../components/ResponsiveLayout';
import { useWindowSize, useLoading, ResponsiveRenderer } from '../utils/responsive-utils';


// Type for sort configuration
type SortConfig = {
  key: keyof Song;
  direction: 'ascending' | 'descending';
};

// Constants for pagination
const SONGS_PER_PAGE = 20;

export default function SongsPage() {
  const { isMobile } = useWindowSize();
  const { isLoading, startLoading } = useLoading();

  // State for loading
  const [isLoading, setIsLoading] = useState(true);

  // State for window width (for responsive design)
  const [windowWidth, setWindowWidth] = useState(1200); // Default to desktop

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for sorting
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'title',
    direction: 'ascending'
  });
  
  // State for filtered songs
  const [filteredSongs, setFilteredSongs] = useState<Song[]>(songsData);
  
  // State for displayed (paginated) songs
  const [displayedSongs, setDisplayedSongs] = useState<Song[]>([]);
  
  // Track window size for responsive layout
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);

  // Determine if we're in mobile view
  const isMobileView = windowWidth < 768;

  // Filter songs based on search query
  useEffect(() => {
    setIsLoading(true);
    
    const filterSongs = () => {
      if (!searchQuery.trim()) {
        setFilteredSongs(songsData);
      } else {
        const query = searchQuery.toLowerCase().trim();
        const filtered = songsData.filter(song => 
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query) ||
          song.album.toLowerCase().includes(query) ||
          song.label.toLowerCase().includes(query) ||
          String(song.year).includes(query)
        );
        setFilteredSongs(filtered);
      }
      // Reset to first page when search query changes
      setCurrentPage(1);
      setIsLoading(false);
    };
    
    // Small delay to show loading state and prevent excessive filtering
    const timer = setTimeout(filterSongs, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle sort request
  const requestSort = (key: keyof Song) => {
    setIsLoading(true);
    let direction: 'ascending' | 'descending' = 'ascending';
    
    // If we're sorting by the same key, toggle direction
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    setSortConfig({ key, direction });
    // Add small delay to show loading state
    setTimeout(() => setIsLoading(false), 300);
  };
  
  // Get class names for sort headers
  const getSortDirectionIcon = (key: keyof Song) => {
    if (sortConfig.key !== key) {
      return '↕️'; // Default - both directions
    }
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };
  
  // Update displayed songs when sort config, filtered songs, or page changes
  useEffect(() => {
    // Create a copy of the filtered songs array to avoid mutating the original
    const sortedSongs = [...filteredSongs].sort((a, b) => {
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
    
  }, [sortConfig, filteredSongs, currentPage]);

  // Change page
  const paginate = (pageNumber: number) => {
    setIsLoading(true);
    setCurrentPage(pageNumber);
    // Add small delay to show loading state
    setTimeout(() => setIsLoading(false), 300);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  // Render mobile view of a song
  const renderMobileSongCard = (song: Song, index: number) => (
    <div 
      key={`${song.title}-${index}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0.75rem',
        borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
        marginBottom: '0.5rem',
        borderRadius: '4px',
        transition: 'background-color 0.2s'
      }}
    >
      <div style={{ marginBottom: '0.5rem' }}>
        <Link href={`/songs/${encodeURIComponent(song.title.toLowerCase())}`} style={{ 
          display: 'block',
          fontSize: '1.1rem',
          color: 'white',
          textDecoration: 'none',
          marginBottom: '0.25rem'
        }}>
          {song.title}
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        marginBottom: '0.25rem'
      }}>
        <div style={{ width: '35%', color: '#FFD700' }}>Artist:</div>
        <Link href={`/artists/${encodeURIComponent(song.artist.toLowerCase())}`} style={{ 
          width: '65%',
          color: '#FFD700',
          textDecoration: 'none',
          textAlign: 'right'
        }}>
          {song.artist}
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        marginBottom: '0.25rem'
      }}>
        <div style={{ width: '35%', color: '#FFD700' }}>Album:</div>
        <Link href={`/albums/${encodeURIComponent(song.albumNumber.toLowerCase())}`} style={{ 
          width: '65%',
          color: 'white',
          textDecoration: 'none',
          textAlign: 'right'
        }}>
          {song.album}
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        marginBottom: '0.25rem'
      }}>
        <div style={{ width: '35%', color: '#FFD700' }}>Label:</div>
        <Link href={`/record-labels/${encodeURIComponent(song.label.toLowerCase())}`} style={{ 
          width: '65%',
          color: '#FFD700',
          textDecoration: 'none',
          textAlign: 'right'
        }}>
          {song.label}
        </Link>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        fontSize: '0.9rem'
      }}>
        <div style={{ width: '35%', color: '#FFD700' }}>Year:</div>
        <Link href={`/years/${song.year}`} style={{ 
          width: '65%',
          color: 'white',
          textDecoration: 'none',
          textAlign: 'right'
        }}>
          {song.year}
        </Link>
      </div>
    </div>
  );
  
  // Render desktop view of a song
  const renderDesktopSongRow = (song: Song, index: number) => (
    <div 
      key={`${song.title}-${index}`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
        minHeight: '60px',
        transition: 'background-color 0.2s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(25, 25, 25, 0.7)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
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
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {song.year}
      </Link>
    </div>
  );
  
  return (<ResponsiveLayout title="Football Highlights Music Songs">
          </h2>

          {/* Search Bar */}
          <div style={{
            padding: isMobileView ? '0.75rem' : '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: isMobileView ? 'column' : 'row',
            alignItems: isMobileView ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: isMobileView ? '0.5rem' : '0'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              width: '100%',
              maxWidth: isMobileView ? '100%' : '500px',
              position: 'relative'
            }}>
              <input
                type="text"
                placeholder="Search songs, artists, albums..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  padding: '0.5rem 2.5rem 0.5rem 0.75rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  border: '1px solid #FFD700',
                  borderRadius: '4px',
                  width: '100%',
                  fontSize: '0.9rem'
                }}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    background: 'none',
                    border: 'none',
                    color: '#FFD700',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0.25rem'
                  }}
                >
                  ×
                </button>
              )}
            </div>
            <div style={{ 
              color: 'white', 
              marginLeft: isMobileView ? '0' : '1rem',
              fontSize: isMobileView ? '0.9rem' : '1rem',
              textAlign: isMobileView ? 'center' : 'left'
            }}>
              Showing {Math.min(filteredSongs.length, displayedSongs.length)} of {filteredSongs.length} songs
            </div>
          </div>

          {/* Table Container */}
          <div style={{ padding: isMobileView ? '0.5rem' : '0 1rem 1rem' }}>
            {/* Loading Indicator */}
            {isLoading && (
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                color: '#FFD700'
              }}>
                Loading...
              </div>
            )}
            
            {!isLoading && (
              <>
                {/* Desktop View: Column Headers */}
                {!isMobileView && (
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
                        textAlign: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      Year <span style={{ marginLeft: '5px' }}>{getSortDirectionIcon('year')}</span>
                    </button>
                  </div>
                )}

                {/* Mobile View: Sort Options */}
                {isMobileView && (
                  <div style={{
                    padding: '0.5rem',
                    color: '#FFD700',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.25rem'
                    }}>
                      <span>Sort by:</span>
                      <div style={{
                        display: 'flex',
                        gap: '0.5rem'
                      }}>
                        <button 
                          onClick={() => requestSort('title')}
                          style={{ 
                            border: 'none',
                            backgroundColor: sortConfig.key === 'title' ? 'rgba(255, 215, 0, 0.2)' : 'transparent',
                            color: '#FFD700',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontWeight: sortConfig.key === 'title' ? 'bold' : 'normal',
                            fontSize: '0.8rem'
                          }}
                        >
                          Title {sortConfig.key === 'title' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                        </button>
                        <button 
                          onClick={() => requestSort('artist')}
                          style={{ 
                            border: 'none',
                            backgroundColor: sortConfig.key === 'artist' ? 'rgba(255, 215, 0, 0.2)' : 'transparent',
                            color: '#FFD700',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontWeight: sortConfig.key === 'artist' ? 'bold' : 'normal',
                            fontSize: '0.8rem'
                          }}
                        >
                          Artist {sortConfig.key === 'artist' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                        </button>
                        <button 
                          onClick={() => requestSort('year')}
                          style={{ 
                            border: 'none',
                            backgroundColor: sortConfig.key === 'year' ? 'rgba(255, 215, 0, 0.2)' : 'transparent',
                            color: '#FFD700',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontWeight: sortConfig.key === 'year' ? 'bold' : 'normal',
                            fontSize: '0.8rem'
                          }}
                        >
                          Year {sortConfig.key === 'year' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Songs List */}
                <div>
                  {displayedSongs.length > 0 ? (
                    isMobileView ? (
                      // Mobile view: Card layout
                      displayedSongs.map((song, index) => renderMobileSongCard(song, index))
                    ) : (
                      // Desktop view: Table layout
                      displayedSongs.map((song, index) => renderDesktopSongRow(song, index))
                    )
                  ) : (
                    <div 
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '2rem 1rem',
                        textAlign: 'center',
                        color: 'white'
                      }}
                    >
                      {searchQuery ? `No songs found matching "${searchQuery}"` : "No songs found to display"}
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 0 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: isMobileView ? '0.75rem 0.5rem' : '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    flexWrap: 'wrap',
                    gap: '0.25rem'
                  }}>
                    {totalPages <= (isMobileView ? 5 : 10) ? (
                      // If fewer than 5/10 pages, show all page numbers
                      Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => paginate(i + 1)}
                          style={{
                            margin: '0 0.25rem',
                            padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                            backgroundColor: currentPage === i + 1 ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                            color: currentPage === i + 1 ? 'black' : '#FFD700',
                            border: '1px solid #FFD700',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: isMobileView ? '0.9rem' : '1rem'
                          }}
                        >
                          {i + 1}
                        </button>
                      ))
                    ) : (
                      // If more than 5/10 pages, show a more compact pagination
                      <>
                        {/* First page */}
                        <button
                          onClick={() => paginate(1)}
                          style={{
                            margin: '0 0.25rem',
                            padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                            backgroundColor: currentPage === 1 ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                            color: currentPage === 1 ? 'black' : '#FFD700',
                            border: '1px solid #FFD700',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: isMobileView ? '0.9rem' : '1rem'
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
                              padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: '#FFD700',
                              border: '1px solid #FFD700',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: isMobileView ? '0.9rem' : '1rem'
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
                              padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                              backgroundColor: '#FFD700',
                              color: 'black',
                              border: '1px solid #FFD700',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: isMobileView ? '0.9rem' : '1rem'
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
                              padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: '#FFD700',
                              border: '1px solid #FFD700',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: isMobileView ? '0.9rem' : '1rem'
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
                            padding: isMobileView ? '0.4rem 0.6rem' : '0.5rem 0.75rem',
                            backgroundColor: currentPage === totalPages ? '#FFD700' : 'rgba(0, 0, 0, 0.5)',
                            color: currentPage === totalPages ? 'black' : '#FFD700',
                            border: '1px solid #FFD700',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: isMobileView ? '0.9rem' : '1rem'
                          }}
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
