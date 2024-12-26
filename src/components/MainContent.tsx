import React, { useState } from 'react';
import FilterBar from './FilterBar';
import DesignCard from './DesignCard';

const designs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    title: 'Modern POP Design with LED Lighting',
    description: 'Contemporary false ceiling with integrated LED lighting perfect for modern living rooms.',
    category: 'Living Room'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    title: 'Minimalist Bedroom Ceiling',
    description: 'Clean lines and subtle lighting create a peaceful atmosphere in this bedroom design.',
    category: 'Bedroom'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    title: 'Elegant Kitchen Tray Ceiling',
    description: 'Multi-level tray ceiling design with recessed lighting for modern kitchens.',
    category: 'Kitchen'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
    title: 'Luxurious Dining Room Design',
    description: 'Sophisticated false ceiling with chandelier placement and ambient lighting.',
    category: 'Dining Room'
  }
];

const MainContent = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDesigns = activeCategory === 'All' 
    ? designs
    : designs.filter(design => design.category === activeCategory);

  return (
    <div>
      <FilterBar 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDesigns.map((design) => (
          <DesignCard key={design.id} {...design} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;