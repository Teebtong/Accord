import React from 'react';
import Header from '/src/components/Header';
import Hero from '/src/components/Hero';
import FeaturedAccords from '/src/components/FeaturedAccords';
import SeasonalCollection from '/src/components/SeasonalCollections';
import PersonalizedSection from '/src/components/PersonalizedSection';
import RecentlyViewed from '/src/components/RecentlyViewed';
import Footer from '/src/components/Footer';
import '/src/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FeaturedAccords />
      <SeasonalCollection />
      <PersonalizedSection />
      <div className="divider"></div>
      <RecentlyViewed />
      <Footer />
    </div>
  );
}

export default App;
