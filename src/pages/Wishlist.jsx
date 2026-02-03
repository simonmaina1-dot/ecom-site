import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState, useEffect } from 'react';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const [isLoaded, setIsLoaded] = useState(false);

  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-street-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-48 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4">
                  <div className="aspect-[3/4] bg-gray-200 rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-street-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-street-black mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-500">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              className="px-4 py-2 text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-street-black mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 text-center max-w-md mb-8">
              Save items you love by clicking the heart icon on any product. Start exploring and build your wishlist!
            </p>
            <Link
              to="/shop"
              className="px-8 py-4 bg-street-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          // Wishlist Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
              >
                {/* Product Link */}
                <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </Link>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white transition-all z-10 shadow-lg"
                  title="Remove from wishlist"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Product Info */}
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-street-black line-clamp-2 mb-2 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-street-black">KES {formatPrice(product.price)}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">KES {formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.colors.slice(0, 4).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full py-2.5 bg-street-black text-white text-center text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recently Added / Browse More */}
        {wishlist.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-street-black mb-2">Keep Exploring</h2>
              <p className="text-gray-500">Discover more styles for your collection</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/shop?category=Hoodies"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
                  alt="Hoodies"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">Hoodies</h3>
                </div>
              </Link>
              <Link
                to="/shop?category=Sneakers"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1552346154-21d32cc405f5?w=400&q=80"
                  alt="Sneakers"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">Sneakers</h3>
                </div>
              </Link>
              <Link
                to="/shop?category=Tees"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80"
                  alt="Tees"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">Tees</h3>
                </div>
              </Link>
              <Link
                to="/shop?category=Jackets"
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
                  alt="Jackets"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">Jackets</h3>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

