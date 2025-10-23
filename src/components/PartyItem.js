import React from 'react';
import './PartyItem.css';

const PartyItem = ({ package: pkg }) => {
  return (
    <div className={`party-item ${pkg.popular ? 'popular' : ''}`}>
      {pkg.popular && (
        <div className="popular-badge">
          <span>⭐ Popular</span>
        </div>
      )}
      
      <div className="party-image">
        <span className="party-emoji">{pkg.image}</span>
      </div>
      
      <div className="party-content">
        <div className="party-header">
          <h3 className="party-name">{pkg.name}</h3>
          <span className="party-price">${pkg.price}</span>
        </div>
        
        <p className="party-description">{pkg.description}</p>
        
        <div className="party-details">
          <div className="detail-item">
            <span className="detail-label">Capacity:</span>
            <span className="detail-value">{pkg.capacity}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{pkg.duration}</span>
          </div>
        </div>
        
        <div className="party-includes">
          <h4 className="includes-title">Package Includes:</h4>
          <div className="includes-list">
            {pkg.includes.map((item, index) => (
              <span key={index} className="include-tag">✓ {item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyItem;
