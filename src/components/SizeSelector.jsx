import { useState } from 'react';

const SizeSelector = ({ sizes, selectedSize, onSizeSelect }) => {
  const [hoveredSize, setHoveredSize] = useState(null);

  // Storage options for electronics
  const storageSizes = ['128GB', '256GB', '512GB', '1TB', '2TB', '4TB'];
  const screenSizes = ['13 inch', '14 inch', '15.6 inch', '16 inch', '17 inch'];
  const watchSizes = ['40mm', '44mm', '45mm', '49mm'];

  // Determine what type of size/variant this is
  const isStorage = sizes.some(s => storageSizes.includes(s));
  const isScreen = sizes.some(s => screenSizes.some(sc => s.includes(sc)));
  const isWatch = sizes.some(s => watchSizes.includes(s));

  let displaySizes = sizes;
  let variantType = 'storage';

  if (isStorage) {
    displaySizes = sizes.filter(s => storageSizes.includes(s));
    variantType = 'storage';
  } else if (isScreen) {
    displaySizes = sizes.filter(s => screenSizes.some(sc => s.includes(sc)));
    variantType = 'screen';
  } else if (isWatch) {
    displaySizes = sizes.filter(s => watchSizes.includes(s));
    variantType = 'watch';
  } else {
    displaySizes = [...new Set(sizes)];
  }

  const getVariantLabel = () => {
    if (variantType === 'storage') return 'Select Storage Capacity';
    if (variantType === 'screen') return 'Select Screen Size';
    if (variantType === 'watch') return 'Select Case Size';
    return 'Select Variant';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">{getVariantLabel()}</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {displaySizes.map((size) => {
          const isSelected = selectedSize === size;
          
          return (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              onMouseEnter={() => setHoveredSize(size)}
              onMouseLeave={() => setHoveredSize(null)}
              className={`relative py-2.5 px-3 rounded-sm border text-sm font-medium transition-all ${
                isSelected
                  ? 'border-brand bg-brand/5 text-brand'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              <span className="relative z-10">{size}</span>
              
              {/* Hover Effect */}
              {!isSelected && (
                <div className={`absolute inset-0 bg-gray-100 transition-opacity ${
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
    </div>
  );
};

export default SizeSelector;
