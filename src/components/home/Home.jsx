// Home.jsx - Welcoming introduction to Accord for non-authenticated users
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Component imports
import AccordPreview from './AccordPreview';

const Home = () => {
  const [activeSection, setActiveSection] = useState(1);
  
  // Sample preview accords to showcase the concept
  const previewAccords = [
    {
      id: 1,
      title: 'Mediterranean Citrus',
      description: 'Sun-ripened lemons with herbaceous rosemary and rich olive',
      notes: [
        { type: 'top', name: 'Lemon Zest' },
        { type: 'heart', name: 'Rosemary' },
        { type: 'base', name: 'Kalamata Olive' }
      ],
      image: '/images/mediterranean-citrus.jpg',
    },
    {
      id: 2,
      title: 'Nordic Forest',
      description: 'Wild berries with delicate pine and earthy mushrooms',
      notes: [
        { type: 'top', name: 'Lingonberry' },
        { type: 'heart', name: 'Pine Needle' },
        { type: 'base', name: 'Forest Mushroom' }
      ],
      image: '/images/nordic-forest.jpg',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>The Art of Culinary Composition</h1>
          <p className="tagline">
            Discover flavor through the lens of perfumery. 
            Build your collection of culinary accords.
          </p>
          <Link to="/signup" className="cta-button">Begin Your Culinary Journey</Link>
        </div>
        <div className="hero-visual">
          <div className="accord-charm-animation">
            {/* Animated visualization of connected accord elements */}
            <div className="charm top-note">
              <span>Top Note</span>
            </div>
            <div className="connector"></div>
            <div className="charm heart-note">
              <span>Heart Note</span>
            </div>
            <div className="connector"></div>
            <div className="charm base-note">
              <span>Base Note</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concept introduction */}
      <section className="concept-section">
        <div className="tabs">
          <button 
            className={activeSection === 1 ? 'active' : ''} 
            onClick={() => setActiveSection(1)}
          >
            The Approach
          </button>
          <button 
            className={activeSection === 2 ? 'active' : ''} 
            onClick={() => setActiveSection(2)}
          >
            Build Your Collection
          </button>
          <button 
            className={activeSection === 3 ? 'active' : ''} 
            onClick={() => setActiveSection(3)}
          >
            Discover &amp; Create
          </button>
        </div>
        
        <div className="tab-content">
          {activeSection === 1 && (
            <div className="concept-content">
              <h2>Cooking Inspired by Perfumery</h2>
              <p>
                Accord approaches cooking as an artistic composition of flavors. 
                Like a master perfumer, you'll learn to combine top, heart, and base notes
                to create harmonious flavor profiles that transform your cooking.
              </p>
              <div className="note-explanation">
                <div className="note">
                  <h3>Top Notes</h3>
                  <p>The first impression – bright, immediate flavors that open the experience</p>
                </div>
                <div className="note">
                  <h3>Heart Notes</h3>
                  <p>The core of the composition – robust, defining elements that give character</p>
                </div>
                <div className="note">
                  <h3>Base Notes</h3>
                  <p>The foundation – deep, lingering flavors that provide complexity and depth</p>
                </div>
              </div>
            </div>
          )}
          
          {activeSection === 2 && (
            <div className="concept-content">
              <h2>Your Culinary Charm Collection</h2>
              <p>
                Discover and collect flavor accords like precious charms, each one 
                a unique composition waiting to elevate your cooking. Build a personal 
                collection that reflects your taste and culinary style.
              </p>
              <div className="collection-preview">
                {previewAccords.map(accord => (
                  <AccordPreview key={accord.id} accord={accord} />
                ))}
              </div>
            </div>
          )}
          
          {activeSection === 3 && (
            <div className="concept-content">
              <h2>Inspiration and Creation</h2>
              <p>
                Browse regional collections, seasonal specials, and community-created
                accords for endless inspiration. Then craft your own original compositions
                to share or keep as part of your personal collection.
              </p>
              <div className="seasonal-teaser">
                <div className="seasonal-image">
                  <img src="/images/foragers-holiday.jpg" alt="Seasonal collection preview" />
                </div>
                <div className="seasonal-content">
                  <h3>Current Collection</h3>
                  <h4>Forager's Holiday</h4>
                  <p>A limited-edition winter collection celebrating the subtle elegance of foraged ingredients.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial-section">
        <div className="testimonial">
          <p>"Accord has transformed how I think about flavors. The modular approach makes sophisticated cooking accessible and inspiring."</p>
          <cite>— Alex Chen, Home Cook</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Begin Your Flavor Journey</h2>
        <Link to="/signup" className="cta-button">Join Accord</Link>
        <p className="cta-subtext">Discover new dimensions of taste</p>
      </section>

    </div>
  );
};

export default Home;
