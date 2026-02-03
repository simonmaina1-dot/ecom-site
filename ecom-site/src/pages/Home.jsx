import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const formatPrice = (price) => {
    return price.toLocaleString('en-KE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (
    <div className="min-h-screen bg-street-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920&q=80"
            alt="Streetwear Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              New Collection 2026
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              STREET
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                WEAR
              </span>
              <span className="text-2xl sm:text-3xl font-light text-white/90">BOUTIQUE</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Discover the latest trends in urban fashion. Premium quality streetwear for those who dare to stand out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-white text-street-black font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                to="/shop?category=Hoodies"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Hoodies
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-street-black mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Browse our curated collections and find your perfect style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.name}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-white/70 text-sm">{category.count} items</p>
                </div>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/50 rounded-2xl transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-street-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-street-black mb-2">
                Featured Products
              </h2>
              <p className="text-gray-500">Handpicked favorites from our latest collection</p>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-2 text-street-black font-medium hover:text-gray-600 transition-colors group"
            >
              View All
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-street-black text-white font-medium rounded-xl"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 bg-street-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1920&q=80"
                alt="Promo"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative py-16 px-8 sm:px-16 text-center">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6">
                Limited Time Offer
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                FREE SHIPPING
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                On all orders over KES 15,000. Plus, easy returns within 30 days.
              </p>
              <Link
                to="/shop"
                className="inline-block px-8 py-4 bg-white text-street-black font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Shop the Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-street-black mb-4">
              Join the Movement
            </h2>
            <p className="text-gray-500 mb-8">
              Subscribe to our newsletter for exclusive drops, early access, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-street-black focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-street-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-street-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-street-black">
                  STREET<span className="text-gray-400">WEAR</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Premium streetwear for the modern urban lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-street-black mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/shop" className="hover:text-street-black transition-colors">All Products</Link></li>
                <li><Link to="/shop?category=Hoodies" className="hover:text-street-black transition-colors">Hoodies</Link></li>
                <li><Link to="/shop?category=Tees" className="hover:text-street-black transition-colors">Tees</Link></li>
                <li><Link to="/shop?category=Sneakers" className="hover:text-street-black transition-colors">Sneakers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-street-black mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-street-black transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-street-black transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-street-black transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-street-black transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-street-black mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-street-black hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-street-black hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-street-black hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Streetwear Boutique. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

