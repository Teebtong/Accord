import React from 'react';
import { Link } from 'react-router-dom';
import '/src/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Art of Culinary Composition</h1>
        <p className="tagline">Experience cooking through the lens of perfumery, with sophisticated flavor accords that elevate your culinary creativity.</p>
        <Link to="/explore" className="cta-button">Explore Accords</Link>
        <Link to="/create" className="cta-button secondary-cta">Create Your Own</Link>
      </div>
    </section>
  );
};

export default Hero;