import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import PartyGrid from '../components/PartyGrid';
import { partyData } from '../data/partyData';
import './PartyHallPage.css';

const PartyHallPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = partyData.packages.filter(pkg => {
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="party-hall-page">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showBackButton={true}
      />
      
      <div className="page-header">
        <div className="container">
          <div className="page-title-section">
            <h1 className="page-title">🎉 Party Hall Service</h1>
            <p className="page-subtitle">
              Celebrate your special moments in our elegant party hall. Perfect for weddings, 
              birthdays, corporate events, and celebrations with customizable packages and professional service.
            </p>
            <div className="service-features">
              <span className="feature-badge">🏛️ Elegant Venue</span>
              <span className="feature-badge">📦 Custom Packages</span>
              <span className="feature-badge">👨‍💼 Professional Service</span>
              <span className="feature-badge">🎨 Full Decoration</span>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <CategoryFilter
            categories={partyData.categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <PartyGrid packages={filteredPackages} />
        </div>
      </main>
    </div>
  );
};

export default PartyHallPage;
