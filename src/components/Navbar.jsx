import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useState } from 'react';

const Navbar = () => {
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/wishlist', label: 'Wishlist' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-street-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-street-black">
              STREET<span className="text-gray-400">WEAR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-street-black'
                    : 'text-gray-500 hover:text-street-black'
                }`}
              >
                {link.label}
                {link.path === '/wishlist' && wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-street-black" />
                )}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-street-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Cart</span>
            <span className="w-5 h-5 bg-white text-street-black text-xs rounded-full flex items-center justify-center">0</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-street-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-sm font-medium ${
                    isActive(link.path)
                      ? 'text-street-black'
                      : 'text-gray-500 hover:text-street-black'
                  }`}
                >
                  {link.label}
                  {link.path === '/wishlist' && wishlistCount > 0 && (
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

