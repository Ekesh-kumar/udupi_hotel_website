import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './HomePage.css';

const SimpleHomePage = () => {
  return (
    <div className="home-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to Grand Palace Hotel</h1>
            <p className="hero-subtitle">
              Experience luxury and comfort at our premium multi-service establishment. 
              We offer exceptional AC Service Hall dining, comfortable accommodation, 
              and elegant party venues for all your special occasions.
            </p>
            <div className="hero-buttons">
              <Link to="/ac-service" className="hero-btn primary">Explore Dining</Link>
              <Link to="/rooms" className="hero-btn secondary">View Rooms</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hotel-showcase">
              <div className="showcase-item">
                <span className="showcase-icon">🏨</span>
                <span className="showcase-text">Luxury Hotel</span>
              </div>
              <div className="showcase-item">
                <span className="showcase-icon">🍽️</span>
                <span className="showcase-text">Fine Dining</span>
              </div>
              <div className="showcase-item">
                <span className="showcase-icon">🎉</span>
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
              <h2>About Grand Palace Hotel</h2>
              <p>
                Established in 2020, Grand Palace Hotel has been providing exceptional service 
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
      <section className="services-section">
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
                <div className="service-icon">🍽️</div>
                <h3 className="service-title">AC Service Hall</h3>
              </div>
              <p className="service-description">
                Experience fine dining in our air-conditioned service hall. 
                Enjoy our extensive menu featuring international cuisine, 
                fresh juices, and premium beverages in a comfortable, 
                climate-controlled environment.
              </p>
              <div className="service-features">
                <span className="feature-tag">❄️ Air-Conditioned</span>
                <span className="feature-tag">🍽️ Fine Dining</span>
                <span className="feature-tag">🥤 Fresh Juices</span>
                <span className="feature-tag">👨‍🍳 Professional Chef</span>
              </div>
              <div className="service-actions">
                <Link to="/ac-service" className="service-btn primary">
                  View Menu & Order
                </Link>
                <Link to="/ac-service" className="service-btn secondary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Rooms Stay Service */}
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🛏️</div>
                <h3 className="service-title">Rooms Stay Service</h3>
              </div>
              <p className="service-description">
                Relax in our comfortable and well-appointed rooms. 
                Perfect for business travelers, tourists, or anyone seeking 
                a peaceful stay with modern amenities and excellent service.
              </p>
              <div className="service-features">
                <span className="feature-tag">🛏️ Comfortable Rooms</span>
                <span className="feature-tag">🏨 Modern Amenities</span>
                <span className="feature-tag">🕐 24/7 Service</span>
                <span className="feature-tag">🧹 Housekeeping</span>
              </div>
              <div className="service-actions">
                <Link to="/rooms" className="service-btn primary">
                  View Rooms & Book
                </Link>
                <Link to="/rooms" className="service-btn secondary">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Party Hall Service */}
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">🎉</div>
                <h3 className="service-title">Party Hall Service</h3>
              </div>
              <p className="service-description">
                Celebrate your special moments in our elegant party hall. 
                Perfect for weddings, birthdays, corporate events, and celebrations 
                with customizable packages and professional service.
              </p>
              <div className="service-features">
                <span className="feature-tag">🏛️ Elegant Venue</span>
                <span className="feature-tag">📦 Custom Packages</span>
                <span className="feature-tag">👨‍💼 Professional Service</span>
                <span className="feature-tag">🎨 Full Decoration</span>
              </div>
              <div className="service-actions">
                <Link to="/party-hall" className="service-btn primary">
                  View Packages & Book
                </Link>
                <Link to="/party-hall" className="service-btn secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Ready to Experience Excellence?</h2>
            <p>Contact us today to make your reservation or learn more about our services.</p>
            <div className="contact-buttons">
              <a href="tel:+1234567890" className="contact-btn">
                📞 Call Now
              </a>
              <a href="mailto:info@grandpalace.com" className="contact-btn">
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
