import { useState } from 'react';
import { priceRanges, allSizes, categories } from '../data/products';

const Filters = ({ filters, setFilters, products }) => {
  const [isExpanded, setIsExpanded] = useState({
    category: true,
    price: true,
    size: true,
  });

  const toggleSection = (section) => {
    setIsExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };

  const handleSizeChange = (size) => {
    setFilters((prev) => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

  const handlePriceChange = (range) => {
    setFilters((prev) => {
      const isSelected = prev.priceRange.min === range.min && prev.priceRange.max === range.max;
      if (isSelected) {
        return { ...prev, priceRange: { min: 0, max: Infinity } };
      }
      return { ...prev, priceRange: { min: range.min, max: range.max } };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      sizes: [],
      priceRange: { min: 0, max: Infinity },
      sortBy: 'featured',
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.sizes.length > 0 ||
    filters.priceRange.max !== Infinity;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-street-black">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-street-black transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-street-black focus:border-transparent transition-all"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Best Rating</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="text-sm font-medium text-street-black">Category</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded.category ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded.category && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-street-black peer-checked:border-street-black transition-all" />
                  <svg
                    className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-street-black transition-colors">
                  {category.name}
                </span>
                <span className="text-xs text-gray-400 ml-auto">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="text-sm font-medium text-street-black">Price Range</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded.price ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded.price && (
          <div className="mt-3 space-y-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => handlePriceChange(range)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                  filters.priceRange.min === range.min && filters.priceRange.max === range.max
                    ? 'bg-street-black text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span>{range.label}</span>
                {filters.priceRange.min === range.min && filters.priceRange.max === range.max && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <span className="text-sm font-medium text-street-black">Size</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded.size ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded.size && (
          <div className="mt-3 grid grid-cols-4 gap-2">
            {allSizes.slice(0, 12).map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`aspect-square flex items-center justify-center rounded-lg text-xs font-medium transition-all ${
                  filters.sizes.includes(size)
                    ? 'bg-street-black text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-3">Active filters:</p>
          <div className="flex flex-wrap gap-2">
            {filters.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {cat}
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className="hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
            {filters.sizes.map((size) => (
              <span
                key={size}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {size}
                <button
                  onClick={() => handleSizeChange(size)}
                  className="hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
            {filters.priceRange.max !== Infinity && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                ${filters.priceRange.min} - ${filters.priceRange.max === Infinity ? '∞' : filters.priceRange.max}
                <button
                  onClick={() => handlePriceChange(filters.priceRange)}
                  className="hover:text-red-500"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;

