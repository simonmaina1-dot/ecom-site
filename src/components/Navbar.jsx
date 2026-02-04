import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Streetwear' },
    { path: '/shop/electronics', label: 'Electronics & IT' },
    { path: '/wishlist', label: 'Wishlist' },
  ];

  const isActive = (path) => location.pathname === path;
  const categories = ['Hoodies', 'Tees', 'Sneakers', 'Jackets', 'Pants', 'Accessories'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Free Delivery on orders above KES 15,000!
            </span>
          </div>
          <Link to="/" className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sell on Street-Fair
          </Link>
        </div>
      </div>

      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                <span className="text-black font-bold text-2xl">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
                STREET<span className="text-brand">-FAIR</span>
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full flex">
                <input
                  type="text"
                  placeholder="Search products, brands and categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-200 border-r-0 rounded-l-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
                <button className="px-8 py-3 bg-brand text-black font-semibold rounded-r-xl hover:bg-yellow-400 transition-colors shadow-md">
                  Search
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Account */}
              <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-left hidden lg:block">
                  <span className="text-xs text-gray-500 block">Hello, Sign in</span>
                  <span className="text-sm font-semibold text-gray-800">Account</span>
                </div>
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand transition-colors">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-brand text-black text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm font-semibold hidden sm:block">Cart</span>
                <span className="w-6 h-6 bg-brand text-black text-xs rounded-full flex items-center justify-center font-bold">0</span>
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand text-black rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      <div className="bg-white border-t border-gray-100 hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 py-3 overflow-x-auto scrollbar-hide">
            <Link to="/shop" className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 whitespace-nowrap hover:text-brand transition-colors group">
              All Categories
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="w-px h-6 bg-gray-200"></div>
            {categories.map((category) => (
              <Link key={category} to={`/shop?category=${category}`} className="text-sm text-gray-600 font-medium whitespace-nowrap hover:text-brand transition-colors relative group">
                {category}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="w-px h-6 bg-gray-200"></div>
            <Link to="/shop/electronics" className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 whitespace-nowrap hover:text-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Electronics & IT
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-sm font-semibold transition-all ${isActive(link.path) ? 'bg-brand text-black shadow-md' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {link.label}
                  {link.path === '/wishlist' && wishlistCount > 0 && (
                    <span className="px-2.5 py-0.5 bg-black text-white text-xs rounded-full">{wishlistCount}</span>
                  )}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-4">Categories</p>
                {categories.map((category) => (
                  <Link key={category} to={`/shop?category=${category}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-3 px-4 text-sm text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                    {category}
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
                <Link to="/shop/electronics" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-3 px-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors mt-2">
                  Electronics & IT
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
