'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  const navItems = [
    { href: '/songs', icon: Music, label: 'Songs' },
    { href: '/artists', icon: Mic2, label: 'Artists' },
    { href: '/albums', icon: Disc, label: 'Albums' },
    { href: '/labels', icon: Building2, label: 'Record Labels' },
    { href: '/teams', icon: Trophy, label: 'Teams' },
    { href: '/seasons', icon: Calendar, label: 'Seasons' },
    { href: '/specials', icon: Film, label: 'Specials' },
    { href: '/other-films', icon: Video, label: 'Non-Football Films' },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '2rem auto 0',
      padding: '0 1rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
        {navItems.map((item, index) => (
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
              padding: '1rem',
              borderRadius: '0.5rem',
              minWidth: item.label === 'Non-Football Films' ? '140px' : '120px',
              height: '120px',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              opacity: 0.9
            }}>
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg mb-2">
                <item.icon size={24} className="text-white" />
              </div>
              <span style={{
                color: '#000',
                fontSize: '0.875rem',
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '0.5rem'
              }}>
                {item.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
