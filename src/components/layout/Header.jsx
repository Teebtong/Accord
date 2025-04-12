import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ACCORD<span>.</span></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu-planning">Menu Planning</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/search"><i className="fas fa-search"></i></Link></li>
          <li className="auth-buttons">
            <Link to="/login" className="button-link">Log In</Link>
            <Link to="/signup" className="button-link signup">Join</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
