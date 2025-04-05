import React, { useState } from 'react';
import { Globe, Map, Compass, ArrowRight, ChevronRight } from 'lucide-react';

const RegionalJourneySplash = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  
  const regions = [
    {
      id: 'hokkaido',
      name: 'Hokkaido, Japan',
      accordName: 'Northern Isle Symphony',
      description: "Pristine waters meet volcanic soil in Japan's northernmost terrain",
      color: 'from-blue-800 to-emerald-700',
      ingredients: ['Sea Urchin', 'Alpine Wasabi', 'Hakodate Rice'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 'rhineland',
      name: 'Rhineland, Germany',
      accordName: 'Rhineland Heritage',
      description: 'River valleys and ancient forests shape forgotten German flavors',
      color: 'from-green-800 to-amber-700',
      ingredients: ['Grüne Soße', 'Riesling', 'Black Forest Ham'],
      image: '/api/placeholder/300/200'
    },
    {
      id: 'galicia',
      name: 'Galicia, Spain',
      accordName: 'Atlantic Mist',
      description: 'Where Celtic heritage meets the untamed Iberian coast',
      color: 'from-blue-700 to-green-600',
      ingredients: ['Percebes', 'Pimentón de Padrón', 'Tetilla Cheese'],
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-stone-50">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-stone-800 to-stone-700 text-white py-12 px-6 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe size={24} className="text-amber-400" />
            <span className="text-sm font-medium tracking-wide text-amber-300 uppercase">Limited Edition Collection</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Uncharted Terroirs</h1>
          <p className="text-xl text-stone-200 mb-6">
            A culinary journey through three of the world's most distinctive yet overlooked regional cuisines
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-medium text-sm">
            <Compass size={16} />
            <span>Begin Your Flavor Journey</span>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}></div>
        </div>
      </div>

      {/* Collection overview */}
      <div className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Map size={20} className="text-amber-700" />
            <h2 className="text-lg font-bold text-stone-800">The Regional Terroir Collection</h2>
          </div>
          
          <p className="text-stone-700 mb-8">
            Every region tells a story through its cuisine—shaped by climate, geography, history, and cultural exchange. We've curated three accords that spotlight overlooked culinary treasures from distinct corners of the world, each one a perfect harmony of flavors that could only exist in its native terroir.
          </p>
          
          {/* Region cards */}
          <div className="space-y-6">
            {regions.map((region) => (
              <div 
                key={region.id}
                className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${region.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                        <img 
                          src={region.image} 
                          alt={region.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-30`}></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-stone-500 mb-1">{region.name}</h3>
                      <h2 className="text-xl font-bold text-stone-800 mb-2">{region.accordName}</h2>
                      <p className="text-stone-600 mb-4">{region.description}</p>
                      
                      {/* Ingredient previews */}
                      <div className="flex items-center gap-3 mb-5">
                        {region.ingredients.map((ingredient, index) => (
                          <div key={index} className="flex items-center">
                            {index > 0 && <ChevronRight size={14} className="text-stone-400 mr-3" />}
                            <span className="text-sm text-stone-700">{ingredient}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`flex items-center text-sm font-medium transition-colors ${hoveredRegion === region.id ? `text-${region.color.split('-')[1]}-700` : 'text-stone-500'}`}>
                        <span>Explore this Accord</span>
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer CTA */}
          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-stone-700 text-white rounded-lg font-bold hover:from-amber-700 hover:to-stone-800 transition-all shadow-sm hover:shadow">
              Unlock All Three Accords
            </button>
            <p className="mt-3 text-sm text-stone-500">Limited availability through the summer season</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalJourneySplash;