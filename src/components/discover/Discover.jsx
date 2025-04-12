import React from 'react';
import { Link } from 'react-router-dom';
import './Discover.css';

const DiscoverPage = () => {
  return (
    <section className="hidden-traditions-section">
      <h2 className="section-title">Hidden Traditions</h2>
      <div className="hidden-traditions-collection">
        <div className="collection-image">
          <img src="/images/hidden-traditions.jpg" alt="Hidden Traditions Collection" width="100%" />
        </div>
        <div className="collection-content">
          <h3 className="collection-title">Rediscovering American Culinary Heritage</h3>
          <p className="collection-description">Explore the sophisticated culinary traditions of the Ohio Valley and Great Lakes regions. Our limited-edition collection reveals the nuanced flavors and remarkable preservation techniques that have been overlooked in American regional cuisine.</p>
          <p className="collection-description">From orchard preservation to lake and forest umami, these accords celebrate the quiet complexity of Midwestern culinary traditions, offering a refined approach to regional ingredients and cooking methods.</p>
          <Link to="/collections/hidden-traditions" className="cta-button">Explore Collection</Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPage;
