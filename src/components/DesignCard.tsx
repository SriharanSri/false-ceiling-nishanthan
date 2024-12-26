import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DesignCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const DesignCard = ({ image, title, description, category }: DesignCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[300px] overflow-hidden rounded-xl mb-4">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 px-4 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex items-center text-blue-600 font-medium">
        <span>Read more</span>
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default DesignCard;