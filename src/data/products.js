// Mock product data with Unsplash API images
// Streetwear aesthetic: hoodies, tees, sneakers, jackets, accessories

export const products = [
  {
    id: 1,
    name: "Oversized Graphic Hoodie",
    price: 12999,
    originalPrice: 15999,
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Beige"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    description: "Premium oversized hoodie with bold graphic print. Made from 100% cotton fleece with a relaxed fit for that streetwear aesthetic.",
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Minimalist Tech Jacket",
    price: 24999,
    originalPrice: 32999,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1551488852-080184d044d4?w=600&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
    ],
    description: "Lightweight tech jacket with water-resistant coating. Features multiple pockets and a sleek, modern silhouette perfect for urban exploration.",
    featured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Retro High-Top Sneakers",
    price: 18999,
    originalPrice: 22999,
    category: "Sneakers",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White/Red", "Black/White", "Beige/Brown"],
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32cc405f5?w=600&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80"
    ],
    description: "Classic high-top sneakers with retro-inspired design. Premium leather construction with cushioned sole for all-day comfort.",
    featured: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: "Essential Cotton Tee",
    price: 4999,
    originalPrice: 5999,
    category: "Tees",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
    ],
    description: "Boxy fit cotton t-shirt with reinforced collar. The perfect basics piece for layering or wearing solo.",
    featured: false,
    rating: 4.5,
    reviews: 312
  },
  {
    id: 5,
    name: "Cargo Cargo Pants",
    price: 13999,
    originalPrice: 16999,
    category: "Pants",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Olive", "Khaki"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80"
    ],
    description: "Utility cargo pants with multiple pockets. Relaxed fit with adjustable ankle straps for versatile styling.",
    featured: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 6,
    name: "Bucket Hat",
    price: 3999,
    originalPrice: 4999,
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Black", "Beige", "Navy", "Red"],
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
      "https://images.unsplash.com/photo-1612160609504-331bed272984?w=600&q=80"
    ],
    description: "Classic bucket hat in premium cotton. Reversible design with embroidered logo patch.",
    featured: false,
    rating: 4.4,
    reviews: 78
  },
  {
    id: 7,
    name: "Crossbody Bag",
    price: 9999,
    originalPrice: 12999,
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Black", "Tan", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80"
    ],
    description: "Compact crossbody bag with adjustable strap. Features waterproof material and multiple compartments.",
    featured: false,
    rating: 4.7,
    reviews: 92
  },
  {
    id: 8,
    name: "Graphic Print Tee",
    price: 5999,
    originalPrice: 6999,
    category: "Tees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e72333dbdb?w=600&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80"
    ],
    description: "Heavyweight cotton tee with unique graphic print. Relaxed fit with dropped shoulders.",
    featured: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 9,
    name: "Chunky Dad Sneakers",
    price: 21999,
    originalPrice: 25999,
    category: "Sneakers",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Multicolor"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055uj6b352?w=600&q=80"
    ],
    description: "Chunky sole sneakers with retro 90s vibe. Premium materials with maximum comfort technology.",
    featured: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: 10,
    name: "Puffer Vest",
    price: 15999,
    originalPrice: 20999,
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Beige", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1542272617-08f086303293?w=600&q=80",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80"
    ],
    description: "Lightweight puffer vest for versatile layering. Water-resistant finish with zip-up closure.",
    featured: false,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 11,
    name: "Wide-Leg Sweatpants",
    price: 8999,
    originalPrice: 11999,
    category: "Pants",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Beige"],
    images: [
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
    ],
    description: "Relaxed wide-leg sweatpants in premium French terry. Elastic waistband with drawstring closure.",
    featured: false,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 12,
    name: "Tactical Belt",
    price: 5999,
    originalPrice: 7999,
    category: "Accessories",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Olive"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      "https://images.unsplash.com/photo-1512412046876-f386342eddb3?w=600&q=80"
    ],
    description: "Heavy-duty tactical belt with metal buckle. Webbed nylon strap with quick-release mechanism.",
    featured: false,
    rating: 4.5,
    reviews: 67
  }
];

export const categories = [
  { id: 1, name: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80", count: 2 },
  { id: 2, name: "Tees", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", count: 3 },
  { id: 3, name: "Sneakers", image: "https://images.unsplash.com/photo-1552346154-21d32cc405f5?w=400&q=80", count: 2 },
  { id: 4, name: "Jackets", image: "https://images.unsplash.com/photo-1551488852-080184d044d4?w=400&q=80", count: 2 },
  { id: 5, name: "Pants", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80", count: 2 },
  { id: 6, name: "Accessories", image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80", count: 3 }
];

export const priceRanges = [
  { id: 1, label: "Under KES 5,000", min: 0, max: 5000 },
  { id: 2, label: "KES 5,000 - 10,000", min: 5000, max: 10000 },
  { id: 3, label: "KES 10,000 - 15,000", min: 10000, max: 15000 },
  { id: 4, label: "KES 15,000 - 25,000", min: 15000, max: 25000 },
  { id: 5, label: "Over KES 25,000", min: 25000, max: Infinity }
];

export const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "7", "8", "9", "10", "11", "12", "28", "30", "32", "34", "36", "One Size"];

