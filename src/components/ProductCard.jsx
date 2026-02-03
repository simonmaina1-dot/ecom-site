import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState, useCallback } from 'react';

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';

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
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-white p-3">
        <img src={getCurrentImage(currentImage)} alt={product.name} className="w-full h-full object-contain transition-transform duration-300" onError={handleCurrentImageError} loading="eager" key={`${product.id}-${currentImage}`} />

        <button onClick={handleWishlistClick} className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${isWishlisted ? 'bg-brand text-black' : 'bg-white text-gray-400 hover:text-brand shadow border border-gray-200'}`}>
          <svg className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {discountPercentage > 0 && <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-sm">-{discountPercentage}%</div>}

        {product.price >= 15000 && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded-sm flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Free Delivery
          </div>
        )}

        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {product.images.slice(0, 4).map((_, idx) => (
              <span key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === currentImage ? 'bg-brand' : 'bg-gray-300'}`} />
            ))}
          </div>
        )}
      </Link>

      <div className="p-3 border-t border-gray-100">
        {product.brand && <p className="text-xs text-gray-500 uppercase mb-1">{product.brand}</p>}

        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm text-gray-800 line-clamp-2 hover:text-brand transition-colors min-h-[2.5rem]">{product.name}</h3>
        </Link>

        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews || 0})</span>
          </div>
        )}

        <div className="mt-2">
          <span className="text-lg font-bold text-gray-800">KES {formatPrice(product.price)}</span>
          {product.originalPrice > product.price && <span className="text-xs text-gray-400 line-through ml-2">KES {formatPrice(product.originalPrice)}</span>}
        </div>

        {product.price >= 5000 && <p className="text-xs text-gray-500 mt-1">Pay from KES {formatPrice(Math.round(product.price / 3))}/mo</p>}
        <p className="text-xs text-gray-400 mt-1">Sold by Streetwear</p>
      </div>
    </div>
  );
};

export default ProductCard;
