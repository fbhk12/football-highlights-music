'use client';

export default function TestPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Test Page</h1>
      <div className="space-y-4">
        <img 
          src="/lambeau68.jpg" 
          alt="Lambeau Field 1968"
          width={500}
          height={300}
          style={{ border: '1px solid #ccc' }}
        />
        <p>Image path: /lambeau68.jpg</p>
      </div>
    </div>
  );
}
