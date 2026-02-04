import { Link } from 'react-router-dom';
import { products as streetwearProducts, categories as streetwearCategories } from '../data/products';
import { products as electronicsProducts, categories as electronicsCategories } from '../data/electronics';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Combine all products
  const allProducts = [...streetwearProducts, ...electronicsProducts];
  
  // Get featured products (mix of streetwear and electronics)
  const featuredProducts = allProducts.filter((p) => p.featured).slice(0, 8);
  
  // Get flash sale products
  const flashSaleProducts = allProducts.filter((p) => p.flashSale).slice(0, 6);
  
  // Get new arrivals (mix)
  const newArrivals = allProducts.slice(0, 4);
  
  // Combine categories
  const allCategories = [
    ...streetwearCategories.map(c => ({ ...c, type: 'streetwear' })),
    ...electronicsCategories.map(c => ({ ...c, type: 'electronics' }))
  ];

  // Unified hero slider with streetwear and electronics alternating
  const heroSlides = [
    { 
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80", 
      title: "New Collection 2026", 
      subtitle: "Premium Streetwear & Electronics", 
      button: "Shop Now", 
      link: "/shop", 
      color: "from-black/70",
      type: "all"
    },
    { 
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80", 
      title: "iPhone 15 Pro", 
      subtitle: "Experience the Future - Up to 15% OFF", 
      button: "Shop Electronics", 
      link: "/shop", 
      color: "from-blue-900/70",
      type: "electronics"
    },
    { 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80", 
      title: "Oversized Hoodies", 
      subtitle: "Up to 30% OFF", 
      button: "Explore", 
      link: "/shop?category=Hoodies", 
      color: "from-gray-900/70",
      type: "streetwear"
    },
    { 
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=1200&q=80", 
      title: "MacBook Pro M3", 
      subtitle: "Unleash Your Creativity", 
      button: "Shop Laptops", 
      link: "/shop", 
      color: "from-gray-800/70",
      type: "electronics"
    },
    { 
      image: "https://images.unsplash.com/photo-1529340877629-52798a2f32d1?w=1200&q=80", 
      title: "Sneaker Season", 
      subtitle: "Limited Edition Drops", 
      button: "Shop", 
      link: "/shop?category=Sneakers", 
      color: "from-purple-900/70",
      type: "streetwear"
    },
    { 
      image: "https://images.unsplash.com/photo-1550009158-9ebf6905696b?w=1200&q=80", 
      title: "Gaming Season", 
      subtitle: "Play Like a Pro - consoles & Gear", 
      button: "Explore", 
      link: "/shop", 
      color: "from-purple-900/70",
      type: "electronics"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Notification Bar */}
      <div className="bg-brand text-black text-xs md:text-sm py-2 px-4 text-center font-medium">
        <span className="hidden sm:inline">Free Delivery on Orders Over KES 15,000 | </span>
        <span>Download App for 15% OFF | </span>
        <span className="hidden md:inline">Pay with M-PESA | </span>
        <span className="hidden sm:inline">Best Prices Guaranteed</span>
      </div>

      {/* Hero Slider */}
      <section className="relative h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} via-black/30 to-transparent`} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-xl md:max-w-2xl">
                  <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-brand text-black text-xs md:text-sm font-bold rounded-full mb-3 md:mb-4">New Arrivals</span>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 md:mb-3">{slide.title}</h1>
                  <p className="text-sm md:text-lg text-white/90 mb-4 md:mb-6">{slide.subtitle}</p>
                  <Link to={slide.link} className="inline-block px-5 py-2 md:px-6 md:py-3 bg-brand text-black font-bold rounded hover:bg-yellow-400 transition-colors text-sm md:text-base">{slide.button}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-brand w-6 md:w-8' : 'bg-white/60'}`} />
          ))}
        </div>
      </section>

      {/* Flash Sales with Countdown */}
      {flashSaleProducts.length > 0 && (
        <section className="py-4 md:py-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">Flash Sales</h2>
              <div className="flex items-center gap-1 md:gap-2 ml-2 md:ml-4">
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-800 text-white text-xs md:text-sm font-bold rounded">02</span>
                <span className="text-gray-500 text-xs">:</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-800 text-white text-xs md:text-sm font-bold rounded">45</span>
                <span className="text-gray-500 text-xs">:</span>
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-800 text-white text-xs md:text-sm font-bold rounded">12</span>
              </div>
              <Link to="/shop" className="ml-auto text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {flashSaleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Grid - Unified */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Shop by Category</h2>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
            {allCategories.slice(0, 8).map((cat) => (
              <Link key={`${cat.type}-${cat.id}`} to={`/shop${cat.type === 'electronics' ? '/electronics' : ''}?category=${cat.name}`} className="flex flex-col items-center gap-2 p-2 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs md:text-sm text-gray-700 font-medium text-center">{cat.name}</span>
                <span className="text-xs text-gray-500">{cat.count} items</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics & Streetwear Combined Banner */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/shop?category=Hoodies" className="block relative h-28 md:h-36 lg:h-44 rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80" alt="Streetwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <div className="pl-4 md:pl-8">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-brand text-black text-xs md:text-sm font-bold rounded mb-2">STYLE</span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Streetwear</h2>
                  <p className="text-white/80 text-xs md:text-sm">Hoodies, Tees, Sneakers & More</p>
                </div>
              </div>
            </Link>
            <Link to="/shop" className="block relative h-28 md:h-36 lg:h-44 rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" alt="Electronics & IT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                <div className="pl-4 md:pl-8">
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-brand text-black text-xs md:text-sm font-bold rounded mb-2">TECH</span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Electronics & IT</h2>
                  <p className="text-white/80 text-xs md:text-sm">Phones, Laptops, Audio & Gaming</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals - Combined */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">New Arrivals</h2>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Spotlight */}
      <section className="py-4 md:py-6 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 bg-brand text-black text-xs font-bold rounded">HOT</span>
              <h2 className="text-lg md:text-xl font-bold text-white">Top Electronics Deals</h2>
            </div>
            <Link to="/shop" className="text-xs md:text-sm text-white/80 hover:text-white hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {electronicsProducts.filter(p => p.featured).slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Streetwear Spotlight */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 bg-brand text-black text-xs font-bold rounded">FRESH</span>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">Fresh Streetwear Drops</h2>
            </div>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {streetwearProducts.filter(p => p.featured).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/shop" className="block relative h-32 md:h-40 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80" alt="Promo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
              <div className="pl-4 md:pl-8">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-brand text-black text-xs md:text-sm font-bold rounded mb-2">Limited Time</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">FREE SHIPPING</h2>
                <p className="text-white/80 text-xs md:text-sm">On orders over KES 15,000</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Recommended For You</h2>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Promo Banner - Combined */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/shop?category=Hoodies" className="block relative h-32 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80" alt="Promo 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <div className="pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">Streetwear</h3>
                  <p className="text-white/80 text-xs md:text-sm">Up to 40% OFF</p>
                </div>
              </div>
            </Link>
            <Link to="/shop" className="block relative h-32 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80" alt="Promo 2" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                <div className="pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">Tech Deals</h3>
                  <p className="text-white/80 text-xs md:text-sm">From KES 5,000</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Official Stores - Combined */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Official Stores</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {['Nike', 'Adidas', 'Puma', 'Apple', 'Samsung', 'Sony', 'HP', 'Dell'].map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 md:p-4 flex items-center justify-center border border-gray-200 hover:border-brand hover:shadow-md transition-all cursor-pointer">
                <div className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs md:text-sm font-bold text-gray-600">{brand.substring(0, 2)}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Offers */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Bank Offers</h2>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">Equity Bank</h3>
                  <p className="text-xs text-white/80">Get 10% off with Equity cards</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">M-PESA</h3>
                  <p className="text-xs text-white/80">Free delivery on M-PESA payments</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">Absa Bank</h3>
                  <p className="text-xs text-white/80">0% Interest on 3 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Services */}
      <section className="py-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">Free Delivery</h4>
                <p className="text-xs text-gray-500">Orders over KES 15,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">Easy Returns</h4>
                <p className="text-xs text-gray-500">7 day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">100% Authentic</h4>
                <p className="text-xs text-gray-500">Guaranteed genuine products</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">24/7 Support</h4>
                <p className="text-xs text-gray-500">Dedicated customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Street-Fair Global */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Street-Fair Global</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { country: 'China', code: 'CN', category: 'Electronics' },
              { country: 'USA', code: 'US', category: 'Fashion' },
              { country: 'UK', code: 'GB', category: 'Beauty' },
              { country: 'UAE', code: 'AE', category: 'Home' },
              { country: 'India', code: 'IN', category: 'Sports' },
              { country: 'Germany', code: 'DE', category: 'Auto' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-700">{item.code}</span>
                  <span className="text-sm font-medium text-gray-700">{item.country}</span>
                </div>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Banner */}
      <section className="py-4 md:py-6 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Download the Street-Fair App</h2>
                <p className="text-gray-300 text-sm mb-4">Get exclusive deals and 15% off your first order!</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-400">Download on the</p>
                      <p className="text-sm font-bold text-white">App Store</p>
                    </div>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black rounded-lg hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-400">Get it on</p>
                      <p className="text-sm font-bold text-white">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-40 h-80 bg-gradient-to-br from-brand to-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-black">APP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Shop */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">How to Shop on Street-Fair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Create Account', desc: 'Sign up with your email or phone number', icon: 'User' },
              { step: '2', title: 'Browse Products', desc: 'Explore our wide range of products', icon: 'Search' },
              { step: '3', title: 'Make Payment', desc: 'Pay securely with M-PESA or card', icon: 'Card' },
              { step: '4', title: 'Get Delivery', desc: 'Receive your order at your doorstep', icon: 'Package' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-3">
                  {item.icon === 'User' && (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {item.icon === 'Search' && (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                  {item.icon === 'Card' && (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  )}
                  {item.icon === 'Package' && (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Join Our Newsletter</h2>
            <p className="text-gray-500 text-xs md:text-sm mb-4">Get 10% off your first order</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand" />
              <button type="submit" className="px-6 py-2 bg-brand text-black font-bold rounded hover:bg-yellow-400 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
