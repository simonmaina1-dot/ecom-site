import { useState } from 'react';

const SizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
  const [hoveredSize, setHoveredSize] = useState(null);

  const sizeLabels = {
    'XS': 'Extra Small',
    'S': 'Small',
    'M': 'Medium',
    'L': 'Large',
    'XL': 'Extra Large',
    'XXL': 'Double XL',
  };

  // Group sizes logically
  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const shoeSizes = ['7', '8', '9', '10', '11', '12'];
  const waistSizes = ['28', '30', '32', '34', '36'];
  const oneSize = ['One Size'];

  const isClothing = sizes.some(s => clothingSizes.includes(s));
  const isShoe = sizes.some(s => shoeSizes.includes(s));
  const isWaist = sizes.some(s => waistSizes.includes(s));
  const isOneSize = sizes.includes('One Size');

  let displaySizes = sizes;
  let sizeType = 'clothing';

  if (isOneSize && sizes.length === 1) {
    displaySizes = oneSize;
    sizeType = 'one-size';
  } else if (isShoe && !isClothing) {
    displaySizes = sizes.filter(s => shoeSizes.includes(s));
    sizeType = 'shoe';
  } else if (isWaist && !isClothing) {
    displaySizes = sizes.filter(s => waistSizes.includes(s));
    sizeType = 'waist';
  } else {
    displaySizes = sizes.filter(s => clothingSizes.includes(s));
  }

  const getSizeLabel = () => {
    if (sizeType === 'shoe') return 'US Men\'s Size';
    if (sizeType === 'waist') return 'Waist Size (inches)';
    return 'Standard Sizes';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Select Size</span>
        <button className="text-sm text-gray-500 hover:text-street-black transition-colors underline">
          Size Guide
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {displaySizes.map((size) => {
          const isSelected = selectedSize === size;
          
          return (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              onMouseEnter={() => setHoveredSize(size)}
              onMouseLeave={() => setHoveredSize(null)}
              className={`relative py-3 px-2 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                isSelected
                  ? 'border-street-black bg-street-black text-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="relative z-10">{size}</span>
              
              {/* Hover Effect */}
              {!isSelected && (
                <div className={`absolute inset-0 rounded-xl bg-gray-100 transition-opacity ${
                  hoveredSize === size ? 'opacity-100' : 'opacity-0'
                }`} />
              )}

              {/* Selected indicator */}
              {isSelected && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Size Type Label */}
      {sizeType !== 'one-size' && (
        <p className="text-xs text-gray-500 mt-2">
          {getSizeLabel()}
        </p>
      )}
    </div>
  );
};

export default SizeSelector;

