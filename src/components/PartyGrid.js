import React from 'react';
import PartyItem from './PartyItem';
import './PartyGrid.css';

const PartyGrid = ({ packages }) => {
  if (packages.length === 0) {
    return (
      <div className="no-packages">
        <div className="no-packages-content">
          <span className="no-packages-icon">🔍</span>
          <h3>No packages found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="party-grid">
      {packages.map(pkg => (
        <PartyItem key={pkg.id} package={pkg} />
      ))}
    </div>
  );
};

export default PartyGrid;
