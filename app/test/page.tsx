export default function TestPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Test Page</h1>
      <p className="mb-4">If you see an image below, the file is accessible:</p>
      <img 
        src="/lambeau68.jpg" 
        alt="Lambeau Field 1968" 
        width={500} 
        className="border"
      />
      <p className="mt-4">Image path: /lambeau68.jpg</p>
    </div>
  );
}
