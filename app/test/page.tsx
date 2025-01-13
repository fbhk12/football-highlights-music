'use client';

export default function TestPage() {
  return (
    <div className="p-4">
      <h1>Image Test</h1>
      
      {/* Direct image test */}
      <div className="mb-8">
        <h2>Test 1: Direct img tag</h2>
        <img 
          src="/lambeau68.jpg" 
          alt="Test 1"
          width="300"
          height="200"
        />
      </div>

      {/* Background image test */}
      <div className="mb-8">
        <h2>Test 2: Background image</h2>
        <div 
          style={{
            width: '300px',
            height: '200px',
            backgroundImage: "url('/lambeau68.jpg')",
            backgroundSize: 'cover',
            border: '1px solid black'
          }}
        />
      </div>

      {/* Alternative path test */}
      <div>
        <h2>Test 3: Alternative path</h2>
        <img 
          src="lambeau68.jpg" 
          alt="Test 3"
          width="300"
          height="200"
        />
      </div>
    </div>
  );
}
