import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PROFILE } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{url: string, description: string} | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Life & Lab</h1>
        <p className="text-slate-600">Snapshots from conferences, lab retreats, and daily life.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.galleryImages.map((img, index) => (
          <div 
            key={index} 
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-md cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.url} 
              alt={img.description} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover Overlay with Text */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm sm:text-base leading-snug drop-shadow-md">
                  {img.description}
                </p>
                <div className="flex items-center gap-1 mt-2 text-white/80 text-xs uppercase tracking-wider font-bold">
                  <ZoomIn className="h-3 w-3" /> Click to View
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.description} 
              className="w-full h-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;