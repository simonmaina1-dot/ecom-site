import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const heroSlides = [
    { image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80", title: "New Collection 2026", subtitle: "Premium Streetwear", button: "Shop Now", link: "/shop" },
    { image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80", title: "Oversized Hoodies", subtitle: "Up to 30% OFF", button: "Explore", link: "/shop?category=Hoodies" },
    { image: "https://images.unsplash.com/photo-1529340877629-52798a2f32d1?w=1200&q=80", title: "Sneaker Season", subtitle: "Limited Edition", button: "Shop", link: "/shop?category=Sneakers" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Slider */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-xl">
                  <span className="inline-block px-4 py-2 bg-brand text-black text-sm font-bold rounded-full mb-4">New Arrivals</span>
                  <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">{slide.title}</h1>
                  <p className="text-lg text-white/90 mb-6">{slide.subtitle}</p>
                  <Link to={slide.link} className="inline-block px-6 py-3 bg-brand text-black font-bold rounded hover:bg-yellow-400 transition-colors">{slide.button}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-brand w-8' : 'bg-white/60'}`} />
          ))}
        </div>
      </section>

      {/* Electronics Banner */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/shop/electronics" className="block relative h-32 md:h-40 rounded-lg overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" alt="Electronics & IT" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
              <div className="pl-6">
                <span className="inline-block px-3 py-1 bg-brand text-black text-xs font-bold rounded mb-2">NEW</span>
                <h2 className="text-2xl font-bold text-white">Electronics & IT</h2>
                <p className="text-white/80 text-sm">Smartphones, Laptops, Audio & More</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800">Shop by Category</h2>
            <Link to="/shop" className="text-sm text-gray-500 hover:text-brand">View All</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="flex flex-col items-center gap-2 min-w-[70px] group">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand transition-all">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-gray-600 text-center whitespace-nowrap">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/shop" className="text-sm text-blue-600 hover:underline font-medium">See All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/shop" className="block relative h-36 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&q=80" alt="Promo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
              <div className="pl-6">
                <span className="inline-block px-3 py-1 bg-brand text-black text-xs font-bold rounded mb-2">Limited Time</span>
                <h2 className="text-2xl font-bold text-white">FREE SHIPPING</h2>
                <p className="text-white/80 text-sm">On orders over KES 15,000</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Join Our Newsletter</h2>
            <p className="text-gray-500 text-sm mb-4">Get 10% off your first order</p>
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
