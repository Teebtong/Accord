import React from 'react';
import AccordCard from '/src/components/AccordCard';
import '/src/components/RecentlyViewed.css';

const RecentlyViewed = () => {
  const recentlyViewedAccords = [
    {
      title: 'East Asian Fusion',
      description: 'Traditional Asian flavors reimagined with modern techniques.',
      image: './images/east-asian.jpg',
      notes: [
        { name: 'Ginger', type: 'top' },
        { name: 'Miso', type: 'heart' },
        { name: 'Soy Sauce', type: 'base' }
      ]
    },
    {
      title: 'Mexican Citrus Chili',
      description: 'Bright citrus with controlled heat and earthy undertones.',
      image: './images/mexican-citrus.jpg',
      notes: [
        { name: 'Lime', type: 'top' },
        { name: 'Ancho Chili', type: 'heart' },
        { name: 'Mexican Oregano', type: 'base' }
      ]
    },
    {
      title: 'French Alpine',
      description: 'Rustic mountain herbs with creamy dairy notes and pine freshness.',
      image: './images/french-alpine.jpg',
      notes: [
        { name: 'Alpine Thyme', type: 'top' },
        { name: 'Mountain Cheese', type: 'heart' },
        { name: 'Pine Nut', type: 'base' }
      ]
    }
  ];

  return (
    <section className="recently-viewed-section">
      <h2 className="section-title">Recently Viewed</h2>
      <div className="accord-grid">
        {recentlyViewedAccords.map((accord, index) => (
          <AccordCard key={index} accord={accord} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;