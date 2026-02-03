import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/electronics';
import ProductCard from '../components/ProductCard';

const ElectronicsShop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80", title: "iPhone 15 Pro", subtitle: "Experience the future", color: "from-black/70" },
    { image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=1200&q=80", title: "MacBook Pro M3", subtitle: "Unleash your creativity", color: "from-gray-900/70" },
    { image: "https://images.unsplash.com/photo-1550009158-9ebf6905696b?w=1200&q=80", title: "Gaming Season", subtitle: "Play like a pro", color: "from-purple-900/70" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const flashSaleProducts = products.filter((p) => p.flashSale).slice(0, 6);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="min-h-screen bg-gray-100 pt-36">
      {/* Hero Slider */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].color} to-transparent flex items-center`}>
              <div className="pl-6 md:pl-10">
                <span className="inline-block px-3 py-1 bg-brand text-black text-xs font-bold rounded mb-2">{heroSlides[currentSlide].discount || 'UP TO 30% OFF'}</span>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-1">{heroSlides[currentSlide].title}</h1>
                <p className="text-white/90 text-sm md:text-lg mb-4">{heroSlides[currentSlide].subtitle}</p>
                <Link to="/shop/electronics" className="inline-block px-5 py-2 bg-brand text-black font-bold rounded hover:bg-yellow-400 transition-colors text-sm">Shop Now</Link>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-brand w-6' : 'bg-white/60'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      {flashSaleProducts.length > 0 && (
        <section className="pb-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Flash Sales</h2>
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <span className="px-2 py-1 bg-gray-800 text-white text-sm font-bold rounded">02</span>
                <span className="text-gray-500">:</span>
                <span className="px-2 py-1 bg-gray-800 text-white text-sm font-bold rounded">45</span>
                <span className="text-gray-500">:</span>
                <span className="px-2 py-1 bg-gray-800 text-white text-sm font-bold rounded">12</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {flashSaleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Shop by Category</h2>
            <Link to="/shop/electronics" className="text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop/electronics?category=${cat.name}`} className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-gray-700 font-medium text-center">{cat.name}</span>
                <span className="text-xs text-gray-500">{cat.count} items</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/shop/electronics" className="block relative h-32 md:h-40 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" alt="Electronics Sale" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-900/60 flex items-center">
              <div className="pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Electronics & IT</h3>
                <p className="text-white/80 text-sm">Up to 30% OFF on selected items</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Smartphones */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Smartphones</h2>
            <Link to="/shop/electronics" className="text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.filter((p) => p.category === "Smartphones").slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Laptops */}
      <section className="pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Laptops & Computers</h2>
            <Link to="/shop/electronics" className="text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.filter((p) => p.category === "Laptops").slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Audio & Gaming */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link to="/shop/electronics" className="relative h-32 rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80" alt="Audio" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/50 flex items-center">
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-white">Audio</h3>
                  <p className="text-white/80 text-xs">Headphones & Speakers</p>
                </div>
              </div>
            </Link>
            <Link to="/shop/electronics" className="relative h-32 rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80" alt="Gaming" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-purple-900/50 flex items-center">
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-white">Gaming</h3>
                  <p className="text-white/80 text-xs">Consoles & Games</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recommended For You</h2>
            <Link to="/shop/electronics" className="text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2026 TechZone Electronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ElectronicsShop;
