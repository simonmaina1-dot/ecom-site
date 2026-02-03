import { useState, useCallback } from 'react';

// Fallback image for broken/loading images
const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = useCallback((index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Get image with fallback
  const getImage = (index) => {
    if (imageErrors[index]) {
      return FALLBACK_IMAGE;
    }
    return images[index] || FALLBACK_IMAGE;
  };

  // Handle error and auto-switch to next image
  const handleCurrentImageError = useCallback(() => {
    handleImageError(selectedIndex);
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
  }, [selectedIndex, handleImageError, images.length]);

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-sm border border-jumia-border overflow-hidden">
        <img
          src={getImage(selectedIndex)}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-contain p-4 transition-opacity duration-300"
          onError={handleCurrentImageError}
          loading="eager"
          key={`${productName}-${selectedIndex}`}
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-jumia-border rounded-full flex items-center justify-center text-gray-600 hover:bg-jumia-gray hover:border-jumia-orange transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-jumia-border rounded-full flex items-center justify-center text-gray-600 hover:bg-jumia-gray hover:border-jumia-orange transition-all shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 discount-badge">
          -20%
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 w-8 h-8 bg-white border border-jumia-border rounded-full flex items-center justify-center text-gray-400 hover:text-jumia-red hover:border-jumia-red transition-all shadow-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-jumia-orange'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={imageErrors[index] ? FALLBACK_IMAGE : image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-contain p-1"
                onError={() => handleImageError(index)}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
