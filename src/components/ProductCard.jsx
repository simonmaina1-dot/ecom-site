import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState, useCallback } from 'react';

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f8f9fa" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';

const ProductCard = ({ product }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [currentImage, setCurrentImage] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const formatPrice = (price) => price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const handleImageError = useCallback((index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  }, []);

  const getCurrentImage = (index) => {
    if (imageErrors[index]) return FALLBACK_IMAGE;
    return product.images[index] || FALLBACK_IMAGE;
  };

  const handleCurrentImageError = useCallback(() => {
    handleImageError(currentImage);
    const nextIndex = (currentImage + 1) % product.images.length;
    setCurrentImage(nextIndex);
  }, [currentImage, handleImageError, product.images.length]);

  const discountPercentage = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={getCurrentImage(currentImage)} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out" 
          onError={handleCurrentImageError} 
          loading="eager" 
          key={`${product.id}-${currentImage}`} 
        />

        {/* Wishlist Button */}
        <button 
          onClick={handleWishlistClick} 
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-sm ${isWishlisted ? 'bg-brand text-black scale-110' : 'bg-white text-gray-400 hover:text-red-500 hover:scale-110'}`}
        >
          <svg className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-lg shadow-md">
            -{discountPercentage}%
          </div>
        )}

        {/* Free Delivery Badge */}
        {product.price >= 15000 && (
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg shadow-md flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Free Delivery
          </div>
        )}

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.slice(0, 4).map((_, idx) => (
              <span 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'bg-brand w-6' : 'bg-gray-300 hover:bg-gray-400'}`} 
              />
            ))}
          </div>
        )}
      </Link>

      <div className="p-4 border-t border-gray-100">
        {product.brand && <p className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-medium">{product.brand}</p>}

        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm text-gray-800 line-clamp-2 hover:text-brand transition-colors duration-200 min-h-[2.75rem] font-medium leading-relaxed">{product.name}</h3>
        </Link>

        {product.rating && (
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">({product.reviews || 0})</span>
          </div>
        )}

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">KES {formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">KES {formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {product.price >= 5000 && (
          <p className="text-xs text-gray-500 mt-1.5 font-medium">
            Pay from KES {formatPrice(Math.round(product.price / 3))}/mo
          </p>
        )}
        <p className="text-xs text-gray-400 mt-1">Sold by Street-Fair</p>
      </div>
    </div>
  );
};

export default ProductCard;
