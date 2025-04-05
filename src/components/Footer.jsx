import React from 'react';
import { Link } from 'react-router-dom';
import '/src/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">About Accord</h4>
          <ul className="footer-links">
            <li><Link to="/about/approach">Our Approach</Link></li>
            <li><Link to="/about/team">The Team</Link></li>
            <li><Link to="/about/press">Press</Link></li>
            <li><Link to="/about/careers">Careers</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            <li><Link to="/explore/featured">Featured Accords</Link></li>
            <li><Link to="/explore/seasonal">Seasonal Collections</Link></li>
            <li><Link to="/explore/accords">Accord Explorer</Link></li>
            <li><Link to="/explore/community">Community Creations</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Account</h4>
          <ul className="footer-links">
            <li><Link to="/account/signin">Sign In</Link></li>
            <li><Link to="/account/create">Create Account</Link></li>
            <li><Link to="/account/collection">My Collection</Link></li>
            <li><Link to="/account/subscription">Subscription</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><Link to="/support/help">Help Center</Link></li>
            <li><Link to="/support/contact">Contact Us</Link></li>
            <li><Link to="/support/privacy">Privacy Policy</Link></li>
            <li><Link to="/support/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Accord. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;