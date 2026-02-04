// Electronics and IT Products Data
// Street-Fair Global e-commerce with laptops, smartphones, accessories, audio, gaming, TVs

export const products = [
  // Smartphones
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    price: 189999,
    originalPrice: 215000,
    category: "Smartphones",
    brand: "Apple",
    specs: {
      storage: "256GB",
      ram: "8GB",
      screen: "6.7 inches",
      camera: "48MP + 12MP + 12MP",
      battery: "4441 mAh"
    },
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=80"
    ],
    description: "iPhone 15 Pro Max features a titanium design, A17 Pro chip, and the most powerful camera system ever on an iPhone.",
    featured: true,
    rating: 4.8,
    reviews: 456,
    flashSale: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 512GB Titanium Gray",
    price: 159999,
    originalPrice: 185000,
    category: "Smartphones",
    brand: "Samsung",
    specs: {
      storage: "512GB",
      ram: "12GB",
      screen: "6.8 inches",
      camera: "200MP + 50MP + 12MP",
      battery: "5000 mAh"
    },
    sizes: ["256GB", "512GB", "1TB"],
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet"],
    images: [
      "https://images.unsplash.com/photo-1610945265078-385f4e266929?w=600&q=80",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&q=80"
    ],
    description: "Galaxy S24 Ultra with built-in S Pen, 200MP camera, and AI-powered features.",
    featured: true,
    rating: 4.7,
    reviews: 312,
    flashSale: true
  },
  {
    id: 3,
    name: "Tecno Camon 20 Pro 256GB Serene Vale",
    price: 24999,
    originalPrice: 29999,
    category: "Smartphones",
    brand: "Tecno",
    specs: {
      storage: "256GB",
      ram: "8GB",
      screen: "6.67 inches",
      camera: "64MP + 2MP",
      battery: "5000 mAh"
    },
    sizes: ["128GB", "256GB"],
    colors: ["Serene Vale", "Polar Black", "Glacier Lake"],
    images: [
      "https://images.unsplash.com/photo-1598327773202-3c1f043faf32?w=600&q=80"
    ],
    description: "Tecno Camon 20 Pro with 64MP RGBW sensor and AMOLED display.",
    featured: false,
    rating: 4.4,
    reviews: 189
  },
  // Laptops
  {
    id: 4,
    name: "MacBook Pro 14-inch M3 Pro 18GB RAM 512GB SSD",
    price: 289999,
    originalPrice: 329999,
    category: "Laptops",
    brand: "Apple",
    specs: {
      storage: "512GB SSD",
      ram: "18GB",
      screen: "14.2 inches",
      processor: "Apple M3 Pro"
    },
    sizes: ["512GB", "1TB", "2TB"],
    colors: ["Space Gray", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=600&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"
    ],
    description: "MacBook Pro with M3 Pro chip delivers extraordinary performance and battery life.",
    featured: true,
    rating: 4.9,
    reviews: 234,
    flashSale: true
  },
  {
    id: 5,
    name: "HP Spectre x360 14-inch Core i7 16GB RAM 1TB SSD",
    price: 189999,
    originalPrice: 219999,
    category: "Laptops",
    brand: "HP",
    specs: {
      storage: "1TB SSD",
      ram: "16GB",
      screen: "13.5 inches OLED",
      processor: "Intel Core i7-1365U"
    },
    sizes: ["512GB", "1TB"],
    colors: ["Nightfall Blue", "Natural Silver"],
    images: [
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80"
    ],
    description: "HP Spectre x360 is a premium 2-in-1 laptop with stunning OLED display.",
    featured: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 6,
    name: "Dell XPS 15 9530 Core i9 32GB RAM 1TB SSD RTX 4070",
    price: 349999,
    originalPrice: 399999,
    category: "Laptops",
    brand: "Dell",
    specs: {
      storage: "1TB SSD",
      ram: "32GB",
      screen: "15.6 inches OLED",
      processor: "Intel Core i9-13900H",
      graphics: "NVIDIA RTX 4070"
    },
    sizes: ["512GB", "1TB", "2TB"],
    colors: ["Platinum Silver"],
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=600&q=80"
    ],
    description: "Dell XPS 15 with InfinityEdge display and powerful RTX graphics.",
    featured: false,
    rating: 4.7,
    reviews: 145
  },
  // Audio
  {
    id: 7,
    name: "Apple AirPods Pro 2nd Generation with USB-C",
    price: 34999,
    originalPrice: 39999,
    category: "Audio",
    brand: "Apple",
    specs: {
      battery: "6 hours",
      features: "Active Noise Cancellation, Spatial Audio"
    },
    colors: ["White"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80"
    ],
    description: "AirPods Pro with Adaptive Audio and Conversation Awareness.",
    featured: true,
    rating: 4.7,
    reviews: 567
  },
  {
    id: 8,
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 49999,
    originalPrice: 59999,
    category: "Audio",
    brand: "Sony",
    specs: {
      battery: "30 hours",
      features: "Industry-leading ANC, Multipoint Connection"
    },
    colors: ["Black", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80"
    ],
    description: "Industry-leading noise cancellation with 30-hour battery life.",
    featured: true,
    rating: 4.8,
    reviews: 423
  },
  // Gaming
  {
    id: 9,
    name: "Sony PlayStation 5 Disc Edition + Extra Controller",
    price: 79999,
    originalPrice: 89999,
    category: "Gaming",
    brand: "Sony",
    specs: {
      storage: "825GB SSD",
      processor: "AMD Zen 2, 8 cores",
      features: "4K, Ray Tracing, HDR"
    },
    sizes: ["Disc Edition", "Digital Edition"],
    colors: ["White"],
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80"
    ],
    description: "PlayStation 5 with ultra-high speed SSD and 4K gaming.",
    featured: true,
    rating: 4.8,
    reviews: 345,
    flashSale: true
  },
  {
    id: 10,
    name: "Xbox Series X 1TB Console",
    price: 69999,
    originalPrice: 79999,
    category: "Gaming",
    brand: "Microsoft",
    specs: {
      storage: "1TB NVMe SSD",
      processor: "AMD Zen 2, 8 cores",
      graphics: "12 TFLOPs RDNA 2"
    },
    colors: ["Black"],
    images: [
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80"
    ],
    description: "Xbox Series X - The most powerful Xbox ever.",
    featured: false,
    rating: 4.7,
    reviews: 234
  },
  // TVs
  {
    id: 11,
    name: "Samsung 55-inch CU8000 Crystal UHD 4K Smart TV",
    price: 89999,
    originalPrice: 109999,
    category: "TVs",
    brand: "Samsung",
    specs: {
      screen: "55 inches 4K UHD",
      resolution: "3840 x 2160",
      features: "Smart TV, HDR, AirPlay 2"
    },
    sizes: ["43 inch", "50 inch", "55 inch", "65 inch"],
    colors: ["Black"],
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80"
    ],
    description: "Crystal UHD TV with stunning 4K picture quality.",
    featured: true,
    rating: 4.5,
    reviews: 234
  },
  // Tablets
  {
    id: 12,
    name: "Apple iPad Pro 12.9-inch M2 256GB WiFi",
    price: 159999,
    originalPrice: 179999,
    category: "Tablets",
    brand: "Apple",
    specs: {
      storage: "256GB",
      ram: "8GB",
      screen: "12.9 inches Liquid Retina XDR",
      processor: "Apple M2"
    },
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    colors: ["Space Gray", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"
    ],
    description: "iPad Pro with M2 chip delivers breakthrough performance.",
    featured: true,
    rating: 4.8,
    reviews: 345
  },
  // Smartwatches
  {
    id: 13,
    name: "Apple Watch Ultra 2 GPS 49mm",
    price: 99999,
    originalPrice: 114999,
    category: "Smartwatches",
    brand: "Apple",
    specs: {
      screen: "49mm Always-On",
      battery: "36 hours",
      features: "Depth gauge, GPS, Action Button"
    },
    sizes: ["49mm"],
    colors: ["Natural Titanium", "Blue Titanium"],
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80"
    ],
    description: "The most rugged and capable Apple Watch for adventurers.",
    featured: true,
    rating: 4.9,
    reviews: 234,
    flashSale: true
  },
  // Cameras
  {
    id: 14,
    name: "Sony ZV-1 II Vlogging Camera",
    price: 74999,
    originalPrice: 84999,
    category: "Cameras",
    brand: "Sony",
    specs: {
      sensor: "20.1MP 1-inch",
      lens: "18-50mm f/1.8-4",
      video: "4K 30p"
    },
    colors: ["Black"],
    images: [
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=600&q=80"
    ],
    description: "Compact vlogging camera with wide-angle lens.",
    featured: false,
    rating: 4.6,
    reviews: 178
  },
  // Accessories
  {
    id: 15,
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 12999,
    originalPrice: 15999,
    category: "Accessories",
    brand: "Logitech",
    specs: {
      dpi: "8000 DPI",
      battery: "70 days",
      features: "Silent Clicks, App-Specific Settings"
    },
    colors: ["Graphite", "Pale Gray"],
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80"
    ],
    description: "Master your workflow with the most advanced mouse.",
    featured: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 16,
    name: "Samsung 990 PRO 2TB NVMe SSD PCIe 4.0",
    price: 24999,
    originalPrice: 29999,
    category: "Storage",
    brand: "Samsung",
    specs: {
      capacity: "2TB",
      interface: "PCIe 4.0 NVMe",
      readSpeed: "7450 MB/s"
    },
    colors: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    ],
    description: "Next-gen NVMe SSD with blazing fast speeds.",
    featured: true,
    rating: 4.9,
    reviews: 234
  }
];

export const categories = [
  { id: 1, name: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", count: 3 },
  { id: 2, name: "Laptops", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=400&q=80", count: 3 },
  { id: 3, name: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", count: 2 },
  { id: 4, name: "Gaming", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80", count: 2 },
  { id: 5, name: "TVs", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80", count: 1 },
  { id: 6, name: "Tablets", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80", count: 1 },
  { id: 7, name: "Smartwatches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", count: 1 },
  { id: 8, name: "Cameras", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", count: 1 },
  { id: 9, name: "Accessories", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", count: 2 },
  { id: 10, name: "Storage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", count: 1 }
];

export const brands = [
  { id: 1, name: "Apple", count: 5 },
  { id: 2, name: "Samsung", count: 3 },
  { id: 3, name: "Sony", count: 2 },
  { id: 4, name: "HP", count: 1 },
  { id: 5, name: "Dell", count: 1 },
  { id: 6, name: "Logitech", count: 1 },
  { id: 7, name: "Tecno", count: 1 },
  { id: 8, name: "Microsoft", count: 1 }
];

export const priceRanges = [
  { id: 1, label: "Under KES 10,000", min: 0, max: 10000 },
  { id: 2, label: "KES 10,000 - 25,000", min: 10000, max: 25000 },
  { id: 3, label: "KES 25,000 - 50,000", min: 25000, max: 50000 },
  { id: 4, label: "KES 50,000 - 100,000", min: 50000, max: 100000 },
  { id: 5, label: "KES 100,000 - 200,000", min: 100000, max: 200000 },
  { id: 6, label: "Over KES 200,000", min: 200000, max: Infinity }
];

