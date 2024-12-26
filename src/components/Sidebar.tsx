import React from 'react';
import { Ruler, PaintBucket, Lightbulb, DollarSign } from 'lucide-react';

const tips = [
  {
    icon: <Ruler />,
    title: 'Room Height',
    description: 'Ensure minimum 8 feet ceiling height for false ceiling installation'
  },
  {
    icon: <PaintBucket />,
    title: 'Material Choice',
    description: 'Choose between Gypsum, POP, or wooden panels based on your needs'
  },
  {
    icon: <Lightbulb />,
    title: 'Lighting Plan',
    description: 'Plan your lighting layout before finalizing the ceiling design'
  },
  {
    icon: <DollarSign />,
    title: 'Budget Planning',
    description: 'Factor in material, labor, and lighting fixture costs'
  }
];

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Design Tips</h3>
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="text-blue-600 mt-1">{tip.icon}</div>
              <div>
                <h4 className="font-medium">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-blue-600 text-white p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Need Expert Help?</h3>
        <p className="text-blue-100 mb-4">Get personalized design consultation from our experts</p>
        <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Sidebar;