import React from 'react';
import AccordCard from '/src/components/AccordCard';
import '/src/components/PersonalizedSection.css';

const PersonalizedSection = () => {
  const personalizedAccords = [
    {
      title: 'Smoky Autumnal',
      description: 'Warm, woodsy notes with a subtle smokiness and earthy undertones.',
      image: './images/smoky-autumnal.jpg',
      notes: [
        { name: 'Smoked Paprika', type: 'top' },
        { name: 'Roasted Chestnut', type: 'heart' },
        { name: 'Maple', type: 'base' }
      ]
    },
    {
      title: 'Coastal Umami',
      description: 'Briny sea notes balanced with bright citrus and aromatic herbs.',
      image: './images/coastal-umami.jpg',
      notes: [
        { name: 'Lemon Zest', type: 'top' },
        { name: 'Sea Salt', type: 'heart' },
        { name: 'Kombu', type: 'base' }
      ]
    },
    {
      title: 'Floral Honey',
      description: 'Delicate floral notes with sweet honey undertones and subtle spice.',
      image: './images/floral-honey.jpg',
      notes: [
        { name: 'Lavender', type: 'top' },
        { name: 'Wildflower Honey', type: 'heart' },
        { name: 'Vanilla Bean', type: 'base' }
      ]
    }
  ];

  return (
    <section className="personalized-section">
      <h2 className="section-title">Personalized Recommendations</h2>
      <div className="accord-grid">
        {personalizedAccords.map((accord, index) => (
          <AccordCard key={index} accord={accord} />
        ))}
      </div>
    </section>
  );
};

export default PersonalizedSection;