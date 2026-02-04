import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import ImageGallery from '../components/ImageGallery';
import SizeSelector from '../components/SizeSelector';

const ProductDetails = () => {
  const { id } = useParams();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);

  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      if (foundProduct) {
        setSelectedColor(foundProduct.colors[0]);
        setSelectedSize(foundProduct.sizes[0] || '');
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  const isWishlisted = product ? isInWishlist(product.id) : false;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Added to cart: ${product.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert(`Proceeding to checkout with: ${product.name}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-street-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-[3/4] rounded-2xl bg-gray-200 animate-pulse" />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse" />
              <div className="h-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-street-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-street-black mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-street-black underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-street-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-gray-500 hover:text-street-black transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link to="/shop" className="text-gray-500 hover:text-street-black transition-colors">Shop</Link>
          <span className="text-gray-300">/</span>
          <Link to={`/shop?category=${product.category}`} className="text-gray-500 hover:text-street-black transition-colors">{product.category}</Link>
          <span className="text-gray-300">/</span>
          <span className="text-street-black font-medium truncate">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-street-black mt-1">{product.name}</h1>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <span className="text-3xl font-bold text-street-black">KES {formatPrice(product.price)}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">KES {formatPrice(product.originalPrice)}</span>
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              <div className="mt-6">
                <span className="text-sm font-medium text-gray-700 mb-3 block">Color: <span className="text-gray-500">{selectedColor}</span></span>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button key={color} onClick={() => setSelectedColor(color)} className={`relative w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-street-black scale-110' : 'border-gray-200 hover:border-gray-300'}`} style={{ backgroundColor: color.toLowerCase() }} title={color}>
                      {selectedColor === color && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSizeSelect={setSelectedSize} />

              <div className="mt-6">
                <span className="text-sm font-medium text-gray-700 mb-3 block">Quantity</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-lg font-semibold text-street-black">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button onClick={handleAddToCart} className="flex-1 py-4 bg-street-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]">Add to Cart</button>
                <button onClick={handleBuyNow} className="flex-1 py-4 bg-white border-2 border-street-black text-street-black font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">Buy Now</button>
                <button onClick={() => toggleWishlist(product)} className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all transform hover:scale-[1.05] ${isWishlisted ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400 hover:text-red-500'}`}>
                  <svg className={`w-6 h-6 transition-transform ${isWishlisted ? 'scale-110' : ''}`} fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span className="text-gray-600">Free shipping on orders over KES 15,000</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex border-b border-gray-200">
                  {['description', 'shipping', 'returns'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-street-black' : 'text-gray-500 hover:text-street-black'}`}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-street-black" />}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  {activeTab === 'description' && <p className="text-gray-600 leading-relaxed">{product.description}</p>}
                  {activeTab === 'shipping' && (
                    <div className="space-y-3 text-gray-600">
                      <p>• Free standard shipping on orders over KES 15,000</p>
                      <p>• Standard shipping: 5-7 business days</p>
                      <p>• Express shipping: 2-3 business days (KES 2,000)</p>
                      <p>• International shipping available</p>
                    </div>
                  )}
                  {activeTab === 'returns' && (
                    <div className="space-y-3 text-gray-600">
                      <p>• 30-day return policy</p>
                      <p>• Items must be unworn with tags attached</p>
                      <p>• Free returns for store credit</p>
                      <p>• KES 500 fee for refunds to original payment</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-street-black mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4).map((relatedProduct) => (
            <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                <img src={relatedProduct.images[0]} alt={relatedProduct.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-medium text-street-black group-hover:text-gray-600 transition-colors">{relatedProduct.name}</h3>
              <p className="text-gray-500">KES {formatPrice(relatedProduct.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
