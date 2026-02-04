import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const flashSaleProducts = products.filter((p) => p.flashSale).slice(0, 6);
  const newArrivals = products.slice(0, 4);

  const heroSlides = [
    { image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80", title: "New Collection 2026", subtitle: "Premium Streetwear", button: "Shop Now", link: "/shop", color: "from-black/70" },
    { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80", title: "Oversized Hoodies", subtitle: "Up to 30% OFF", button: "Explore", link: "/shop?category=Hoodies", color: "from-gray-900/70" },
    { image: "https://images.unsplash.com/photo-1529340877629-52798a2f32d1?w=1200&q=80", title: "Sneaker Season", subtitle: "Limited Edition", button: "Shop", link: "/shop?category=Sneakers", color: "from-purple-900/70" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Notification Bar */}
      <div className="bg-brand text-black text-xs md:text-sm py-2 px-4 text-center font-medium">
        <span className="hidden sm:inline">🚚 Free Delivery on Orders Over KES 15,000 | </span>
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

      {/* Categories Grid */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Shop by Category</h2>
            <Link to="/shop" className="text-xs md:text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.name}`} className="flex flex-col items-center gap-2 p-2 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs md:text-sm text-gray-700 font-medium text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Banner */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/shop/electronics" className="block relative h-28 md:h-36 lg:h-44 rounded-lg overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" alt="Electronics & IT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
              <div className="pl-4 md:pl-8">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-brand text-black text-xs md:text-sm font-bold rounded mb-2">NEW</span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Electronics & IT</h2>
                <p className="text-white/80 text-xs md:text-sm">Smartphones, Laptops, Audio & More</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
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

      {/* Second Promo Banner */}
      <section className="py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/shop" className="block relative h-32 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80" alt="Promo 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
                <div className="pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">Streetwear</h3>
                  <p className="text-white/80 text-xs md:text-sm">Up to 40% OFF</p>
                </div>
              </div>
            </Link>
            <Link to="/shop/electronics" className="block relative h-32 rounded-lg overflow-hidden">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-brand rounded flex items-center justify-center">
                  <span className="text-black font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-white">STREET<span className="text-gray-500">WEAR</span></span>
              </div>
              <p className="text-gray-400 text-sm">Premium streetwear for the modern urban lifestyle.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
                <li><Link to="/shop?category=Hoodies" className="hover:text-white">Hoodies</Link></li>
                <li><Link to="/shop?category=Tees" className="hover:text-white">Tees</Link></li>
                <li><Link to="/shop?category=Sneakers" className="hover:text-white">Sneakers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>© 2026 Streetwear Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
