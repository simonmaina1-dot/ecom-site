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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar - Jumia style */}
      <div className="bg-gray-800 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Free Delivery on orders above KES 15,000!</span>
          <span>Sell on Streetwear</span>
        </div>
      </div>

      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand rounded flex items-center justify-center">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-800 hidden sm:block">
                STREET<span className="text-gray-500">WEAR</span>
              </span>
            </Link>

            {/* Search Bar - Jumia style */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <input
                type="text"
                placeholder="Search products, brands and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 border-r-0 rounded-l text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
              />
              <button className="px-6 py-2 bg-brand text-black font-medium rounded-r hover:bg-yellow-400 transition-colors">
                Search
              </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Account */}
              <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="text-xs">
                  <span className="text-gray-500 block">Hello, Sign in</span>
                  <span className="font-medium text-gray-800">Account</span>
                </div>
              </div>

              {/* Wishlist */}
              <Link to="/wishlist" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded transition-colors">
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand text-black text-xs rounded-full flex items-center justify-center font-bold">
                      {wishlistCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Cart */}
              <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-sm font-medium">Cart</span>
                <span className="w-5 h-5 bg-brand text-black text-xs rounded-full flex items-center justify-center font-bold">0</span>
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
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
          <div className="md:hidden pb-3">
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 border-r-0 rounded-l text-sm text-gray-800 placeholder-gray-500"
              />
              <button className="px-5 py-2 bg-brand text-black font-medium rounded-r">Search</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Category Navigation - Jumia style */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-5 py-2 overflow-x-auto">
            <Link to="/shop" className="flex items-center gap-1 text-sm text-gray-800 font-medium whitespace-nowrap hover:text-brand transition-colors">
              All Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {categories.map((category) => (
              <Link key={category} to={`/shop?category=${category}`} className="text-sm text-gray-600 hover:text-brand whitespace-nowrap transition-colors">
                {category}
              </Link>
            ))}
            <div className="w-px h-5 bg-gray-300"></div>
            <Link to="/shop/electronics" className="text-sm text-blue-600 font-medium whitespace-nowrap hover:text-blue-800 transition-colors">
              Electronics & IT
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`py-3 px-4 rounded text-sm font-medium ${isActive(link.path) ? 'bg-brand text-black' : 'text-gray-700 hover:bg-gray-100'}`}>
                  {link.label}
                  {link.path === '/wishlist' && wishlistCount > 0 && (
                    <span className="ml-2 px-2 py-0.5 bg-brand text-black text-xs rounded-full">{wishlistCount}</span>
                  )}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <p className="text-xs text-gray-500 mb-3 px-4">Categories</p>
                {categories.map((category) => (
                  <Link key={category} to={`/shop?category=${category}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">
                    {category}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
                <Link to="/shop/electronics" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between py-2 px-4 text-sm text-blue-600 font-medium hover:bg-gray-100 rounded">
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
