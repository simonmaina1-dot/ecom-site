const Footer = () => {
  return (
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
              <li><a href="#" className="hover:text-street-black transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-street-black transition-colors">Hoodies</a></li>
              <li><a href="#" className="hover:text-street-black transition-colors">Tees</a></li>
              <li><a href="#" className="hover:text-street-black transition-colors">Sneakers</a></li>
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
  );
};

export default Footer;
