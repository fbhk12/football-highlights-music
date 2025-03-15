// Define the Song type
export type Song = {
  title: string;
  artist: string;
  album: string;
  albumNumber: string;
  label: string;
  year: number;
  fhmUses?: { film: string; time: string }[];
  notes?: string;
};

// Export the songs data
export const songsData: Song[] = [
  {
    title: "Action Man",
    artist: "Syd Dale",
    album: "IA 379",
    albumNumber: "IA 379",
    label: "Impress",
    year: 1966,
    fhmUses: [
      { film: "1967 Colts", time: "3:44" },
      { film: "1967 Packers", time: "6:19" },
      { film: "1968 Cowboys", time: "20:20" },
      { film: "1968 Steelers", time: "16:45" },
    ]
  },
  {
    title: "Action Pack",
    artist: "Simon Haseley",
    album: "DWLP 3268",
    albumNumber: "DWLP 3268",
    label: "De Wolfe",
    year: 1973,
  },
  {
    title: "Action Replay",
    artist: "Alan Hawkshaw",
    album: "KPM 1076",
    albumNumber: "KPM 1076",
    label: "KPM",
    year: 1970,
    notes: "Somewhat like FHM"
  },
  {
    title: "Action Report",
    artist: "Keith Mansfield",
    album: "KPM 1240",
    albumNumber: "KPM 1240",
    label: "KPM",
    year: 1979,
  },
  {
    title: "Action Ride",
    artist: "Martha Jane Weber",
    album: "Autumn Thunder",
    albumNumber: "",
    label: "NFL Films",
    year: 1974,
  },
  {
    title: "Action Stations",
    artist: "David Lindup",
    album: "KPM 1017",
    albumNumber: "KPM 1017",
    label: "KPM",
    year: 1967,
  },
  {
    title: "Affairs Of State",
    artist: "Neil Richardson",
    album: "KPM 1137",
    albumNumber: "KPM 1137",
    label: "KPM",
    year: 1974,
  },
  {
    title: "Africa Dances",
    artist: "Kenny Graham",
    album: "KPM LP 7",
    albumNumber: "KPM LP 7",
    label: "KPM",
    year: 1962,
  },
  {
    title: "Afro Metropolis",
    artist: "John Cameron",
    album: "KPM 1130",
    albumNumber: "KPM 1130",
    label: "KPM",
    year: 1973,
    notes: "Somewhat like FHM"
  },
  // Add more songs as needed
];
