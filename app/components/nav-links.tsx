'use client';

import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      <div className="grid grid-cols-8 gap-4 px-4">
        {/* Music-related links */}
        <a href="/songs" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Music size={40} className="text-blue-900" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Songs</span>
        </a>

        <a href="/artists" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={40} className="text-blue-900" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Artists</span>
        </a>

        <a href="/albums" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Disc size={40} className="text-blue-900" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Albums</span>
        </a>

        <a href="/labels" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Building2 size={40} className="text-blue-900" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Record Labels</span>
        </a>

        {/* Film-related links */}
        <a href="/teams" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
            <Trophy size={40} className="text-[#FFD700]" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Teams</span>
        </a>

        <a href="/seasons" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
            <Calendar size={40} className="text-[#FFD700]" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Seasons</span>
        </a>

        <a href="/specials" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
            <Film size={40} className="text-[#FFD700]" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Specials</span>
        </a>

        <a href="/other-films" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
            <Video size={40} className="text-[#FFD700]" />
          </div>
          <span className="mt-2 text-white text-center font-semibold">Non-Football Films</span>
        </a>
      </div>
    </div>
  );
}
