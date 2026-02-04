const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-2xl">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                STREET<span className="text-brand">-FAIR</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium urban fashion & electronics for the modern lifestyle. Quality products, unbeatable prices, and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
              <a href="#" className="social-icon">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand rounded-full"></span>
              Shop
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>All Products</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Hoodies</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Tees</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Sneakers</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Electronics</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Contact Us</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Size Guide</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Shipping Info</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Returns</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>FAQ</a></li>
              <li><a href="#" className="footer-link flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand rounded-full"></span>
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive deals and updates!</p>
            <form className="space-y-3">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand transition-all" />
              <button type="submit" className="w-full px-6 py-3 bg-brand text-black font-semibold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg">Subscribe</button>
            </form>
            <div className="mt-6">
              <p className="text-gray-400 text-xs mb-3">Payment Methods</p>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">M-PESA</span>
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">Visa</span>
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 Street-Fair. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

