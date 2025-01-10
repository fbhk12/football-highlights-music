export default function Home() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/lambeau68.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 bg-white/80"> {/* semi-transparent white overlay */}
        {/* Rest of your content */}
      </div>
    </div>
  )
}
