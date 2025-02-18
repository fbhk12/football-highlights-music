'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  const musicItems = [
    { href: '/songs', icon: Music, label: 'Songs' },
    { href: '/artists', icon: Mic2, label: 'Artists' },
    { href: '/albums', icon: Disc, label: 'Albums' },
    { href: '/labels', icon: Building2, label: 'Record Labels' },
  ];

  const filmItems = [
    { href: '/teams', icon: Trophy, label: 'Teams' },
    { href: '/seasons', icon: Calendar, label: 'Seasons' },
    { href: '/specials', icon: Film, label: 'Specials' },
    { href: '/other-films', icon: Video, label: 'Non-Football Films' },
  ];

  const IconGroup = ({ items }) => (
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center'
    }}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group hover:transform hover:scale-105 transition-all"
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFD700',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            minWidth: item.label === 'Non-Football Films' ? '120px' : '100px',
            height: '80px',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            opacity: 0.9
          }}>
            <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center shadow-lg mb-1">
              <item.icon size={28} className="text-white" />
            </div>
            <span style={{
              color: '#000',
              fontSize: '1rem',
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '0.25rem',
              lineHeight: '1.1'
            }}>
              {item.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem auto 0',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '2rem'
    }}>
      <div style={{
        flex: 1,
        border: '2px solid #FFD700',
        borderRadius: '0.75rem',
        padding: '1.5rem 1rem 1rem',
        position: 'relative'
      }}>
        <span style={{
          position: 'absolute',
          top: '-0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '0 0.75rem',
          color: '#FFD700',
          fontSize: '1.25rem',
          fontWeight: '600'
        }}>
          The Music
        </span>
        <IconGroup items={musicItems} />
      </div>

      <div style={{
        flex: 1,
        border: '2px solid #FFD700',
        borderRadius: '0.75rem',
        padding: '1.5rem 1rem 1rem',
        position: 'relative'
      }}>
        <span style={{
          position: 'absolute',
          top: '-0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.8)',
          padding: '0 0.75rem',
          color: '#FFD700',
          fontSize: '1.25rem',
          fontWeight: '600'
        }}>
          The Films
        </span>
        <IconGroup items={filmItems} />
      </div>
    </div>
  );
}
