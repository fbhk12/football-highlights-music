'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface MusicEntry {
  id: number;
  title: string;
  artist: string;
  album: string;
  label: string;
  year: number;
  nflFilms: string[];
}

// Temporary sample data
const sampleData: MusicEntry[] = [
  {
    id: 1,
    title: "Round Up",
    artist: "Sam Spence",
    album: "The Power and the Glory",
    label: "NFL Films",
    year: 1968,
    nflFilms: ["The Green Bay Packers", "Pro Football's Longest Day"],
  }
];

export default function NFLFilmsMusicExplorer() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by song, artist, album, or NFL film..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Placeholder for music entries */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        Coming soon: Music entries will appear here
      </div>
    </div>
  );
}
