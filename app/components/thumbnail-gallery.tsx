'use client';

import ThumbnailGallery from './components/thumbnail-gallery.tsx'
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

// Sample data - replace with your actual images
const sampleImages: GalleryImage[][] = [
  [{ id: 1, url: '/gallery1/image1.jpg', alt: 'NFL Films Scene 1', title: 'Sample Title 1' }],
  [{ id: 2, url: '/gallery2/image1.jpg', alt: 'NFL Films Scene 2', title: 'Sample Title 2' }],
  [{ id: 3, url: '/gallery3/image1.jpg', alt: 'NFL Films Scene 3', title: 'Sample Title 3' }]
];

export default function ThumbnailGallery() {
  const [currentIndices, setCurrentIndices] = useState([0, 0, 0]);

  return (
    <div className="fixed bottom-0 left-0 right-0 mb-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-6">
          {sampleImages.map((gallery, galleryIndex) => (
            <div key={galleryIndex} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={gallery[0].url}
                alt={gallery[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 300px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm text-center">
                {gallery[0].title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
