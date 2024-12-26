import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] rounded-xl overflow-hidden mb-12">
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
        alt="Modern false ceiling design"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6">Stunning False Ceiling Designs</h1>
          <p className="text-xl max-w-2xl mx-auto">Elevate your home's aesthetics with our curated collection of modern false ceiling designs for every room</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;