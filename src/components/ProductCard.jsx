import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState, useCallback } from 'react';

// Fallback image for broken/loading images
const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const handleImageError = useCallback((index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Get current image with fallback
  const getCurrentImage = (index) => {
    if (imageErrors[index]) {
      return FALLBACK_IMAGE;
    }
    return product.images[index] || FALLBACK_IMAGE;
  };

  // Reset to first image when error occurs on current
  const handleCurrentImageError = useCallback(() => {
    handleImageError(currentImage);
    // Auto-switch to next available image
    const nextIndex = (currentImage + 1) % product.images.length;
    setCurrentImage(nextIndex);
  }, [currentImage, handleImageError, product.images.length]);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
        {/* Main Image */}
        <img
          src={getCurrentImage(currentImage)}
          alt={`${product.name} - Image ${currentImage + 1}`}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onError={handleCurrentImageError}
          loading="eager"
          key={`${product.id}-${currentImage}`}
        />

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300`}
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isWishlisted
              ? 'bg-red-500 text-white scale-100'
              : 'bg-white/90 text-gray-400 hover:text-red-500 hover:bg-white scale-100'
          } ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isWishlisted ? 'scale-110' : ''}`}
            fill={isWishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Sale Badge */}
        {product.originalPrice > product.price && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Quick View Button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Link
            to={`/product/${product.id}`}
            className="block w-full py-3 bg-street-black text-white text-center text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            View Details
          </Link>
        </div>

        {/* Image Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.slice(0, 3).map((_, idx) => (
              <span
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-street-black line-clamp-2 group-hover:text-gray-600 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-500">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-street-black">KES {formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">KES {formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5 mt-3">
          {product.colors.slice(0, 4).map((color, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full border border-gray-200"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-400">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

