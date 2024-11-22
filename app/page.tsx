import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">NFL Films Music Archive (1966-1979)</h1>
          <p className="text-lg text-gray-600">
            Explore the iconic music that defined NFL Films' golden era
          </p>
        </div>
        
        {/* Placeholder for the music explorer component */}
        <div className="text-center text-gray-600">
          Coming soon: Search and browse NFL Films music
        </div>
      </div>
    </main>
  )
}
