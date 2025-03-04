export type Song = {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  album: string;
  albumId: string;
  label: string;
  labelId: string;
  year: number;
  notes?: string;
  description?: string;
  filmUses?: {
    year: number;
    team: string;
    timestamp: string;
  }[];
};

// Sample song data based on your sketches
export const songData: Song[] = [
  {
    id: 'action-man',
    title: 'Action Man',
    artist: 'Syd Dale',
    artistId: 'syd-dale',
    album: 'IA 379',
    albumId: 'ia-379',
    label: 'Impress',
    labelId: 'impress',
    year: 1966,
    description: 'A fast-paced track with brass stabs and driving rhythm, perfect for game highlights and action sequences.',
    filmUses: [
      { year: 1967, team: 'Colts', timestamp: '3:44' },
      { year: 1967, team: 'Packers', timestamp: '6:19' },
      { year: 1968, team: 'Cowboys', timestamp: '20:20' },
      { year: 1968, team: 'Steelers', timestamp: '16:45' }
    ]
  },
  {
    id: 'action-pack',
    title: 'Action Pack',
    artist: 'Simon Hasely',
    artistId: 'simon-hasely',
    album: 'DWLP 3268',
    albumId: 'dwlp-3268',
    label: 'De Wolfe',
    labelId: 'de-wolfe',
    year: 1973,
    description: 'Energetic orchestral piece with prominent percussion, used for dynamic game moments.'
  },
  {
    id: 'action-replay',
    title: 'Action Replay',
    artist: 'Alan Hawkshaw',
    artistId: 'alan-hawkshaw',
    album: 'KPM 1076',
    albumId: 'kpm-1076',
    label: 'KPM',
    labelId: 'kpm',
    year: 1970,
    notes: 'Somewhat like FHM',
    description: 'A melodic track with a driving beat that sounds similar to official NFL Films music without being an exact match.'
  },
  {
    id: 'action-replay-b',
    title: 'Action Replay (b)',
    artist: 'Keith Mansfield',
    artistId: 'keith-mansfield',
    album: 'KPM 1240',
    albumId: 'kpm-1240',
    label: 'KPM',
    labelId: 'kpm',
    year: 1979,
    description: 'A variation of Action Replay with different instrumentation, used primarily in late 70s highlight films.'
  },
  {
    id: 'action-ride',
    title: 'Action Ride',
    artist: 'Martha Jane Weber',
    artistId: 'martha-jane-weber',
    album: 'Autumn Thunder',
    albumId: 'autumn-thunder',
    label: 'NFL Films',
    labelId: 'nfl-films',
    year: 1974,
    notes: '?',
    description: 'An NFL Films original composition featuring dramatic strings and triumphant brass.'
  },
  {
    id: 'action-stations',
    title: 'Action Stations',
    artist: 'David Lindup',
    artistId: 'david-lindup',
    album: 'KPM 1017',
    albumId: 'kpm-1017',
    label: 'KPM',
    labelId: 'kpm',
    year: 1967,
    description: 'A lively, up-tempo piece with prominent brass and percussion elements.'
  },
  {
    id: 'affairs-of-state',
    title: 'Affairs Of State',
    artist: 'Neil Richardson',
    artistId: 'neil-richardson',
    album: 'KPM 1137',
    albumId: 'kpm-1137',
    label: 'KPM',
    labelId: 'kpm',
    year: 1974,
    description: 'A dignified and stately composition often used for team introductions or historic segments.'
  },
  {
    id: 'africa-dances',
    title: 'Africa Dances',
    artist: 'Kenny Graham',
    artistId: 'kenny-graham',
    album: 'KPM LP 7',
    albumId: 'kpm-lp-7',
    label: 'KPM',
    labelId: 'kpm',
    year: 1962,
    notes: '?',
    description: 'An early KPM track with distinctive percussive elements and ethnic instrumentation.'
  },
  {
    id: 'afro-metropolis',
    title: 'Afro Metropolis',
    artist: 'John Cameron',
    artistId: 'john-cameron',
    album: 'KPM 1130',
    albumId: 'kpm-1130',
    label: 'KPM',
    labelId: 'kpm',
    year: 1973,
    notes: 'Somewhat like FHM',
    description: 'A fusion of orchestral and funk elements with an urban feel, similar to some NFL Films compositions.'
  }
  // You can add more songs here as needed
];
