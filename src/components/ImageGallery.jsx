import { useState, useCallback } from 'react';

// Fallback image for broken/loading images
const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = useCallback((index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
        <img
          src={imageErrors[selectedIndex] ? FALLBACK_IMAGE : images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={() => handleImageError(selectedIndex)}
          loading="lazy"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-24 rounded-xl overflow-hidden transition-all ${
                selectedIndex === index
                  ? 'ring-2 ring-street-black ring-offset-2'
                  : 'ring-1 ring-gray-200 hover:ring-gray-300'
              }`}
            >
              <img
                src={imageErrors[index] ? FALLBACK_IMAGE : image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
                loading="lazy"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-black/0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

