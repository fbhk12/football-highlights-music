import Image from 'next/image'
import NFLFilmsMusicExplorer from './components/nfl-films-music-explorer'
import ThumbnailGallery from './components/thumbnail-gallery'

export default function Home() {
  return (
    <div className="relative min-h-screen pb-32">
      {/* Background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/vintage-stadium.jpg"
          alt="Vintage NFL Stadium"
          fill
          className="object-cover object-center opacity-20"
          priority
          quality={100}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 min-h-screen bg-transparent">
        <div className="max-w-6xl mx-auto p-6">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold mb-4 text-[#FFD700] font-display">
              FootballHighlightsMusic.com
            </h1>
            <h4 className="text-xl text-black font-display">
              The Songs And Artists That Contributed To The Golden Age (1966-1979) Of Music Used In Football Highlight Films
            </h4>
            <h2 className="text-3xl text-[#1E90FF] font-display" style={{
              textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
            }}>
              &ldquo;The Greatest Soundtrack Never Assembled!&rdquo;
            </h2>
          </div>
          <NFLFilmsMusicExplorer />
        </div>
      </main>

      <ThumbnailGallery />
    </div>
  )
}
