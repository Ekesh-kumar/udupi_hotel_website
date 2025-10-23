import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import RoomsGrid from '../components/RoomsGrid';
import { roomsData } from '../data/roomsData';
import './RoomsPage.css';

const RoomsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRooms = roomsData.rooms.filter(room => {
    const matchesCategory = selectedCategory === 'all' || room.category === selectedCategory;
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="rooms-page">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showBackButton={true}
      />
      
      <div className="page-header">
        <div className="container">
          <div className="page-title-section">
            <h1 className="page-title">🛏️ Rooms Stay Service</h1>
            <p className="page-subtitle">
              Relax in our comfortable and well-appointed rooms. Perfect for business travelers, 
              tourists, or anyone seeking a peaceful stay with modern amenities and excellent service.
            </p>
            <div className="service-features">
              <span className="feature-badge">🛏️ Comfortable Rooms</span>
              <span className="feature-badge">🏨 Modern Amenities</span>
              <span className="feature-badge">🕐 24/7 Service</span>
              <span className="feature-badge">🧹 Housekeeping</span>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <CategoryFilter
            categories={roomsData.categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RoomsGrid rooms={filteredRooms} />
        </div>
      </main>
    </div>
  );
};

export default RoomsPage;
