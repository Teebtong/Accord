import React from 'react';
import AccordCard from '/src/components/AccordCard';
import '/src/components/FeaturedAccords.css';

const FeaturedAccords = () => {
  const featuredAccords = [
    {
      title: 'English Herbal',
      description: 'Classic British herbs with a modern twist and subtle citrus notes.',
      image: './images/english-herbal.jpg',
      notes: [
        { name: 'Lemon Thyme', type: 'top' },
        { name: 'Rosemary', type: 'heart' },
        { name: 'Bay Leaf', type: 'base' }
      ]
    },
    {
      title: 'Nordic Citrus Spice',
      description: 'Bright citrus elements balanced with warming spices and evergreen notes.',
      image: './images/nordic-citrus.jpg',
      notes: [
        { name: 'Orange Peel', type: 'top' },
        { name: 'Cardamom', type: 'heart' },
        { name: 'Juniper', type: 'base' }
      ]
    },
    {
      title: 'Mediterranean Umami',
      description: 'Rich, savory depth with sun-dried complexity and herbal brightness.',
      image: './images/mediterranean.jpg',
      notes: [
        { name: 'Basil', type: 'top' },
        { name: 'Sun-dried Tomato', type: 'heart' },
        { name: 'Black Olive', type: 'base' }
      ]
    }
  ];

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Accords</h2>
      <div className="accord-grid">
        {featuredAccords.map((accord, index) => (
          <AccordCard key={index} accord={accord} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAccords;