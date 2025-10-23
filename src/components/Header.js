import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm, showBackButton = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <div className="logo-container">
                <div className="logo-icon">
                  <img src={require('../assets/navbar_header_logo.png')} alt="Udupi Gokula Logo" />
                </div>
                <div className="logo-text">
                  <h1>Udupi Gokula</h1>
                  <p>Luxury • Comfort • Excellence</p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="nav-links">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('services-section')}
            >
              Our Services
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('contact-section')}
            >
              Contact Us
            </button>
          </div>
          
          {!isHomePage && showBackButton && (
            <Link to="/" className="back-button">
              ← Back to Home
            </Link>
          )}
          
          {searchTerm !== undefined && (
            <div className="search-container">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
