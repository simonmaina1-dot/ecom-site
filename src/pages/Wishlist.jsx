import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const [isLoaded, setIsLoaded] = useState(false);

  const formatPrice = (price) => price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-street-white pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-36 mb-8" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-3">
                  <div className="aspect-square bg-gray-200 rounded mb-3" />
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
    <div className="min-h-screen bg-street-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-street-black">My Wishlist</h1>
            <p className="text-gray-500 text-sm">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved</p>
          </div>
          {wishlist.length > 0 && (
            <button onClick={clearWishlist} className="px-4 py-2 text-sm text-gray-500 hover:text-red-500 font-medium transition-colors">Clear All</button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-street-black mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 text-center max-w-md mb-8 text-sm">Save items you love by clicking the heart icon on any product.</p>
            <Link to="/shop" className="px-6 py-3 bg-street-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {wishlist.map((product) => (
              <div key={product.id} className="product-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</div>
                  )}
                </Link>
                <button onClick={() => removeFromWishlist(product.id)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-md transition-colors z-10" title="Remove from wishlist">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="p-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm text-street-black line-clamp-2 mb-2 hover:text-gray-600 transition-colors min-h-[2.5rem]">{product.name}</h3>
                  </Link>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-lg font-bold text-street-black">KES {formatPrice(product.price)}</span>
                    {product.originalPrice > product.price && <span className="text-xs text-gray-400 line-through">KES {formatPrice(product.originalPrice)}</span>}
                  </div>
                  <Link to={`/product/${product.id}`} className="block w-full py-2 bg-street-black text-white text-center text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
