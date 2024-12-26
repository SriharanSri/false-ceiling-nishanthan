import React from 'react';

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Dining Room'];

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({ activeCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
            ${activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;