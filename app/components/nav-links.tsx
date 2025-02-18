'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        {/* The Music Section */}
        <div style={{ 
          border: '2px solid #FFD700', 
          borderRadius: '8px', 
          padding: '2rem 1rem 1rem',
          position: 'relative',
          flex: '1'
        }}>
          <div style={{ 
            position: 'absolute',
            top: '-1rem',
            left: '0',
            right: '0',
            textAlign: 'center'
          }}>
            <span style={{ 
              color: '#FFD700', 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              backgroundColor: 'black',
              padding: '0 1rem'
            }}>
              The Music
            </span>
          </div>
          {/* Rest of The Music section stays the same */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            gap: '1rem' 
          }}>
            {[
              { href: '/songs', icon: Music, label: 'Songs' },
              { href: '/artists', icon: Mic2, label: 'Artists' },
              { href: '/albums', icon: Disc, label: 'Albums' },
              { href: '/labels', icon: Building2, label: 'Record Labels' }
            ].map((item, index) => (
              <a key={index} href={item.href} className="flex flex-col items-center">
                <div style={{ width: '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* The Films Section */}
        <div style={{ 
          border: '2px solid #FFD700', 
          borderRadius: '8px', 
          padding: '2rem 1rem 1rem',
          position: 'relative',
          flex: '1'
        }}>
          <div style={{ 
            position: 'absolute',
            top: '-1rem',
            left: '0',
            right: '0',
            textAlign: 'center'
          }}>
            <span style={{ 
              color: '#FFD700', 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              backgroundColor: 'black',
              padding: '0 1rem'
            }}>
              The Films
            </span>
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            gap: '1rem' 
          }}>
            {[
              { href: '/teams', icon: Trophy, label: 'Teams' },
              { href: '/seasons', icon: Calendar, label: 'Seasons' },
              { href: '/specials', icon: Film, label: 'Specials' },
              { href: '/other-films', icon: Video, label: 'Non-Football Films', width: '120px' }
            ].map((item, index) => (
              <a key={index} href={item.href} className="flex flex-col items-center">
                <div style={{ width: item.width || '100px', height: '80px', backgroundColor: '#FFD700', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4px' }}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <span style={{ color: 'black', fontSize: '0.875rem', fontWeight: '600' }}>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
