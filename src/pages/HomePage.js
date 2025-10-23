import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.css';

const SimpleHomePage = () => {
  return (
    <div className="page-container">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Udupi Gokula</h1>
            <p className="hero-subtitle">
              Experience luxury and comfort at our premium multi-service establishment. 
              We offer exceptional AC Service Hall dining, comfortable accommodation, 
              and elegant party venues for all your special occasions.
            </p>
            <div className="hero-buttons">
              <Link to="/ac-service" className="btn btn-white">Explore Dining</Link>
              <Link to="/rooms" className="btn btn-secondary">View Rooms</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hotel-showcase">
              <div className="showcase-item">
                <div className="showcase-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M3 9H21" stroke="white" strokeWidth="2"/>
                    <path d="M7 13H17" stroke="white" strokeWidth="2"/>
                    <path d="M7 17H17" stroke="white" strokeWidth="2"/>
                    <circle cx="9" cy="6" r="1" fill="white"/>
                    <circle cx="15" cy="6" r="1" fill="white"/>
                  </svg>
                </div>
                <span className="showcase-text">Luxury Hotel</span>
              </div>
              <div className="showcase-item">
                <div className="showcase-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M6 6H18V8H6V6Z" fill="white"/>
                    <path d="M6 10H18V12H6V10Z" fill="white"/>
                    <path d="M6 14H18V16H6V14Z" fill="white"/>
                    <circle cx="8" cy="18" r="1" fill="white"/>
                    <circle cx="12" cy="18" r="1" fill="white"/>
                    <circle cx="16" cy="18" r="1" fill="white"/>
                  </svg>
                </div>
                <span className="showcase-text">Fine Dining</span>
              </div>
              <div className="showcase-item">
                <div className="showcase-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                    <path d="M19 15L19.5 17L21 17L19.5 18L20 20L19 19L18 20L18.5 18L17 17L18.5 17L19 15Z" fill="white"/>
                    <path d="M5 15L5.5 17L7 17L5.5 18L6 20L5 19L4 20L4.5 18L3 17L4.5 17L5 15Z" fill="white"/>
                    <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <span className="showcase-text">Events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Introduction */}
      <section className="hotel-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>About Udupi Gokula</h2>
              <p>
                Established in 2020, Udupi Gokula has been providing exceptional service 
                and unforgettable experiences to our guests. Our commitment to excellence 
                and attention to detail has made us a preferred destination for travelers, 
                business professionals, and event organizers.
              </p>
              <div className="intro-features">
                <div className="feature-item">
                  <span className="feature-icon">⭐</span>
                  <span className="feature-text">5-Star Service</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <span className="feature-text">Award Winning</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <span className="feature-text">International Standards</span>
                </div>
              </div>
            </div>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Events Hosted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="services-section section">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Choose from our three exceptional services, each designed to provide 
            the highest level of comfort and satisfaction.
          </p>
          
          <div className="services-grid">
            {/* AC Service Hall */}
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3C2 2.44772 2.44772 2 3 2Z" stroke="#667eea" strokeWidth="2" fill="none"/>
                    <path d="M6 6H18V8H6V6Z" fill="#667eea"/>
                    <path d="M6 10H18V12H6V10Z" fill="#667eea"/>
                    <path d="M6 14H18V16H6V14Z" fill="#667eea"/>
                    <circle cx="8" cy="18" r="1" fill="#667eea"/>
                    <circle cx="12" cy="18" r="1" fill="#667eea"/>
                    <circle cx="16" cy="18" r="1" fill="#667eea"/>
                  </svg>
                </div>
                <h3 className="service-title">AC Service Hall</h3>
              </div>
              <p className="service-description">
                Experience fine dining in our air-conditioned service hall. 
                Enjoy our extensive menu featuring international cuisine, 
                fresh juices, and premium beverages in a comfortable, 
                climate-controlled environment.
              </p>
              <div className="service-features">
                <span className="feature-tag">Air-Conditioned</span>
                <span className="feature-tag">Fine Dining</span>
                <span className="feature-tag">Fresh Juices</span>
                <span className="feature-tag">Professional Chef</span>
              </div>
              <div className="service-actions">
                <Link to="/ac-service" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>

            {/* Rooms Stay Service */}
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="#667eea" strokeWidth="2" fill="none"/>
                    <path d="M3 9H21" stroke="#667eea" strokeWidth="2"/>
                    <path d="M7 13H17" stroke="#667eea" strokeWidth="2"/>
                    <path d="M7 17H17" stroke="#667eea" strokeWidth="2"/>
                    <circle cx="9" cy="6" r="1" fill="#667eea"/>
                    <circle cx="15" cy="6" r="1" fill="#667eea"/>
                  </svg>
                </div>
                <h3 className="service-title">Rooms Stay Service</h3>
              </div>
              <p className="service-description">
                Relax in our comfortable and well-appointed rooms. 
                Perfect for business travelers, tourists, or anyone seeking 
                a peaceful stay with modern amenities and excellent service.
              </p>
              <div className="service-features">
                <span className="feature-tag">Comfortable Rooms</span>
                <span className="feature-tag">Modern Amenities</span>
                <span className="feature-tag">24/7 Service</span>
                <span className="feature-tag">Housekeeping</span>
              </div>
              <div className="service-actions">
                <Link to="/rooms" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>

            {/* Party Hall Service */}
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#667eea"/>
                    <path d="M19 15L19.5 17L21 17L19.5 18L20 20L19 19L18 20L18.5 18L17 17L18.5 17L19 15Z" fill="#667eea"/>
                    <path d="M5 15L5.5 17L7 17L5.5 18L6 20L5 19L4 20L4.5 18L3 17L4.5 17L5 15Z" fill="#667eea"/>
                    <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" stroke="#667eea" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="service-title">Party Hall Service</h3>
              </div>
              <p className="service-description">
                Celebrate your special moments in our elegant party hall. 
                Perfect for weddings, birthdays, corporate events, and celebrations 
                with customizable packages and professional service.
              </p>
              <div className="service-features">
                <span className="feature-tag">Elegant Venue</span>
                <span className="feature-tag">Custom Packages</span>
                <span className="feature-tag">Professional Service</span>
                <span className="feature-tag">Full Decoration</span>
              </div>
              <div className="service-actions">
                <Link to="/party-hall" className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Experience Excellence?</h2>
            <p>Contact us today to make your reservation or learn more about our services.</p>
            <div className="contact-buttons">
              <a href="tel:+1234567890" className="btn btn-white">
                📞 Call Now
              </a>
              <a href="mailto:info@udupigokula.com" className="btn btn-secondary">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleHomePage;
