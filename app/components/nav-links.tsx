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
        alignItems: 'center',
        gap: '1.5rem' // Added gap for space between rectangles
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
              padding: '0.75rem',
              borderRadius: '0.5rem',
              minWidth: item.label === 'Non-Football Films' ? '120px' : '100px', // Reduced widths
              height: '900px', // Reduced height from 110px to 100px to 90px
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              opacity: 0.9
            }}>
              <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center shadow-lg mb-1">
                <item.icon size={28} className="text-white" /> {/* Increased icon size */}
              </div>
              <span style={{
                color: '#000',
                fontSize: '1rem', // Increased font size
                fontWeight: '600',
                textAlign: 'center',
                marginTop: '0.25rem',
                lineHeight: '1.1' // Tighter line height for better fit
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
