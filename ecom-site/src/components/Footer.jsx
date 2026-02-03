const Footer = () => {
  return (
    <footer className="bg-street-black text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">
              STREET<span className="text-gray-400">WEAR</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Premium streetwear for the modern aesthetic.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              Email: <a href="mailto:mainawaititu2021@gmail.com" className="hover:text-white transition-colors">mainawaititu2021@gmail.com</a>
            </p>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-400 text-sm">
              © 2026 sanchezCom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
