# Streetwear Boutique

A modern e-commerce application for streetwear fashion, built with React and Vite.

## Features

- **Modern UI/UX** - Sleek, responsive design built with Tailwind CSS
- **Product Catalog** - Browse curated streetwear collections by category
- **Featured Products** - Handpicked favorites from the latest collection
- **Shopping Cart** - Add items to cart with easy quantity management
- **Wishlist** - Save favorite items for later
- **Product Details** - View detailed product information with image gallery
- **Size Selector** - Choose your preferred size
- **Newsletter** - Subscribe for exclusive drops and discounts
- **Responsive Design** - Optimized for all screen sizes

## Categories

- Hoodies
- Tees
- Sneakers
- Accessories

## Tech Stack

- **React** - UI library for building the interface
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd streetwear-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
streetwear-app/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Filters.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── Navbar.jsx
│   │   ├── SizeSelector.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Wishlist.jsx
│   ├── context/
│   │   └── WishlistContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT License

