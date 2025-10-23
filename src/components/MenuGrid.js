import React from 'react';
import MenuItem from './MenuItem';
import './MenuGrid.css';

const MenuGrid = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="no-items">
        <div className="no-items-content">
          <span className="no-items-icon">🔍</span>
          <h3>No items found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="menu-grid">
      {items.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;
