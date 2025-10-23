import React from 'react';
import './RoomItem.css';

const RoomItem = ({ room }) => {
  return (
    <div className={`room-item ${room.popular ? 'popular' : ''}`}>
      {room.popular && (
        <div className="popular-badge">
          <span>⭐ Popular</span>
        </div>
      )}
      
      <div className="room-image">
        <span className="room-emoji">{room.image}</span>
      </div>
      
      <div className="room-content">
        <div className="room-header">
          <h3 className="room-name">{room.name}</h3>
          <span className="room-price">${room.price}/night</span>
        </div>
        
        <p className="room-description">{room.description}</p>
        
        <div className="room-details">
          <div className="detail-item">
            <span className="detail-label">Size:</span>
            <span className="detail-value">{room.size}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Occupancy:</span>
            <span className="detail-value">{room.occupancy}</span>
          </div>
        </div>
        
        <div className="room-amenities">
          <h4 className="amenities-title">Amenities:</h4>
          <div className="amenities-list">
            {room.amenities.map((amenity, index) => (
              <span key={index} className="amenity-tag">{amenity}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
