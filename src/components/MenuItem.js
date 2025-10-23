import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className={`menu-item ${item.popular ? 'popular' : ''}`}>
      {item.popular && (
        <div className="popular-badge">
          <span>⭐ Popular</span>
        </div>
      )}
      
      <div className="item-image">
        <div className="item-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#667eea" strokeWidth="2" fill="none"/>
            <path d="M2 17L12 22L22 17" stroke="#667eea" strokeWidth="2" fill="none"/>
            <path d="M2 12L12 17L22 12" stroke="#667eea" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>
      
      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-price">${item.price}</span>
        </div>
        
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
