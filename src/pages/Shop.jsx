import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const [filters, setFilters] = useState({
    categories: searchParams.get('category') ? [searchParams.get('category')] : [],
    sizes: [],
    priceRange: { min: 0, max: Infinity },
    sortBy: 'featured',
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.categories.length > 0) {
      params.set('category', filters.categories[0]);
    }
    if (filters.sortBy !== 'featured') {
      params.set('sort', filters.sortBy);
    }
    setSearchParams(params);
  }, [filters, setSearchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => filters.sizes.includes(s))
      );
    }

    result = result.filter(
      (p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    );

    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  const resultsCount = filteredProducts.length;

  return (
    <div className="min-h-screen bg-street-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-street-black mb-2">
              Shop All
            </h1>
            <p className="text-gray-500">
              {resultsCount} {resultsCount === 1 ? 'product' : 'products'} found
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </button>

            <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-street-black text-white'
                    : 'text-gray-500 hover:text-street-black'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-street-black text-white'
                    : 'text-gray-500 hover:text-street-black'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <Filters filters={filters} setFilters={setFilters} products={products} />
            </div>
          </aside>

          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-street-black">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <Filters filters={filters} setFilters={setFilters} products={products} />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full py-3 bg-street-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          <main className="flex-1">
            {resultsCount === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-street-black mb-2">No products found</h3>
                <p className="text-gray-500 text-center max-w-sm mb-6">
                  Try adjusting your filters or browse our complete collection.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      categories: [],
                      sizes: [],
                      priceRange: { min: 0, max: Infinity },
                      sortBy: 'featured',
                    })
                  }
                  className="px-6 py-3 bg-street-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
