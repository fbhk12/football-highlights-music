'use client';

import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-8">  {/* Reduced top margin */}
      <div className="flex justify-center gap-4 px-4">  {/* Changed from grid to flex */}
        {/* Music-related links */}
        <a href="/songs" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">  {/* Reduced size */}
            <Music size={24} className="text-blue-900" />  {/* Reduced icon size */}
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Songs</span>  {/* Reduced text size */}
        </a>

        <a href="/artists" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

        <a href="/albums" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

        <<a href="/labels" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

        {/* Film-related links */}
        <a href="/teams" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

        <a href="/seasons" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

       <a href="/specials" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

        <a href="/other films" className="flex flex-col items-center group hover:transform hover:scale-105 transition-all">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
            <Mic2 size={24} className="text-blue-900" />
          </div>
          <span className="mt-1 text-white text-center font-semibold text-sm">Artists</span>
        </a>

      </div>
    </div>
  );
}
