import React from 'react';
import { Link } from 'react-router-dom';
import '/src/components/SeasonalCollections.css';

const SeasonalCollection = () => {
  return (
    <section className="seasonal-section">
      <h2 className="section-title">Seasonal Collection</h2>
      <div className="seasonal-collection">
        <div className="collection-image">
          <img src="./images/foragers-holiday.jpg" alt="Forager's Holiday Collection" width="100%" />
        </div>
        <div className="collection-content">
          <h3 className="collection-title">Forager's Holiday</h3>
          <p className="collection-description">
            A celebration of wild ingredients and traditional preservation techniques.
            Discover the rich flavors of seasonal foraging, from wild mushrooms to
            forest berries, carefully preserved to capture their essence at peak
            ripeness.
          </p>
          <div className="collection-notes">
            <span className="note top-note">Wild Mushrooms</span>
            <span className="note heart-note">Forest Berries</span>
            <span className="note base-note">Pine Needles</span>
          </div>
          <Link to="/collections/foragers-holiday" className="cta-button">Explore Collection</Link>
        </div>
      </div>
    </section>
  );
};

export default SeasonalCollection;