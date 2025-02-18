'use client';
import { Music, Mic2, Disc, Building2, Trophy, Calendar, Film, Video } from 'lucide-react';

export default function NavLinks() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col gap-8">
        {/* The Music Section */}
        <div className="relative border-2 border-[#FFD700] rounded-lg p-6">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <span className="text-[#FFD700] text-xl font-bold">The Music</span>
          </div>
          <div className="flex justify-between">
            <a href="/songs" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Music size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Songs</span>
              </div>
            </a>
            <a href="/artists" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Mic2 size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Artists</span>
              </div>
            </a>
            <a href="/albums" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Disc size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Albums</span>
              </div>
            </a>
            <a href="/labels" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Building2 size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Record Labels</span>
              </div>
            </a>
          </div>
        </div>

        {/* The Films Section */}
        <div className="relative border-2 border-[#FFD700] rounded-lg p-6">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black px-4">
            <span className="text-[#FFD700] text-xl font-bold">The Films</span>
          </div>
          <div className="flex justify-between">
            <a href="/teams" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Trophy size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Teams</span>
              </div>
            </a>
            <a href="/seasons" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Calendar size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Seasons</span>
              </div>
            </a>
            <a href="/specials" className="flex flex-col items-center">
              <div className="w-[100px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Film size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Specials</span>
              </div>
            </a>
            <a href="/other-films" className="flex flex-col items-center">
              <div className="w-[120px] h-[80px] bg-[#FFD700] rounded-lg flex flex-col items-center justify-center opacity-90">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mb-1">
                  <Video size={20} className="text-white" />
                </div>
                <span className="text-black font-semibold text-sm">Non-Football Films</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
