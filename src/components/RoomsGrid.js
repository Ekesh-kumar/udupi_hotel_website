import React from 'react';
import RoomItem from './RoomItem';
import './RoomsGrid.css';

const RoomsGrid = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="no-rooms">
        <div className="no-rooms-content">
          <span className="no-rooms-icon">🔍</span>
          <h3>No rooms found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rooms-grid">
      {rooms.map(room => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomsGrid;
