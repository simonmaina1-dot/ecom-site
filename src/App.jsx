import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Wishlist from './pages/Wishlist';
import ElectronicsShop from './pages/ElectronicsShop';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/electronics" element={<ElectronicsShop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
