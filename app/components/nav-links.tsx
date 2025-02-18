'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
      {/* The Music Section */}
      <div style={{ 
        border: '2px solid #FFD700', 
        borderRadius: '8px', 
        padding: '2rem 1rem 1rem',
        marginBottom: '2rem',
        position: 'relative' 
      }}>
        <div style={{ 
          position: 'absolute',
          top: '-1rem',
          left: '2rem',
          backgroundColor: 'black',
          padding: '0 1rem'
        }}>
          <span style={{ color: '#FFD700', fontSize: '1.25rem', fontWeight: 'bold' }}>
            The Music
          </span>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          gap: '1rem' 
        }}>
          {/* Songs */}
          <a href="/songs" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Music className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Songs</span>
            </div>
          </a>

          {/* Artists */}
          <a href="/artists" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Mic2 className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Artists</span>
            </div>
          </a>

          {/* Albums */}
          <a href="/albums" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Disc className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Albums</span>
            </div>
          </a>

          {/* Record Labels */}
          <a href="/labels" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Building2 className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Record Labels</span>
            </div>
          </a>
        </div>
      </div>

      {/* The Films Section */}
      <div style={{ 
        border: '2px solid #FFD700', 
        borderRadius: '8px', 
        padding: '2rem 1rem 1rem',
        position: 'relative' 
      }}>
        <div style={{ 
          position: 'absolute',
          top: '-1rem',
          left: '2rem',
          backgroundColor: 'black',
          padding: '0 1rem'
        }}>
          <span style={{ color: '#FFD700', fontSize: '1.25rem', fontWeight: 'bold' }}>
            The Films
          </span>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          gap: '1rem' 
        }}>
          {/* Teams */}
          <a href="/teams" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Trophy className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Teams</span>
            </div>
          </a>

          {/* Seasons */}
          <a href="/seasons" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Calendar className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Seasons</span>
            </div>
          </a>

          {/* Specials */}
          <a href="/specials" className="flex flex-col items-center">
            <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Film className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Specials</span>
            </div>
          </a>

          {/* Non-Football Films */}
          <a href="/other-films" className="flex flex-col items-center">
            <div style={{ width: '120px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                <Video className="text-white" size={24} />
              </div>
              <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>Non-Football Films</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
