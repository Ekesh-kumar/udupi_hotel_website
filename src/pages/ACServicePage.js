import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import MenuGrid from '../components/MenuGrid';
import { menuData } from '../data/menuData';
import './ACServicePage.css';

const ACServicePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuData.items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ac-service-page">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showBackButton={true}
      />
      
      <div className="page-header">
        <div className="container">
          <div className="page-title-section">
            <h1 className="page-title">AC Service Hall</h1>
            <p className="page-subtitle">
              Experience fine dining in our air-conditioned service hall. 
              Enjoy our extensive menu of delicious food and fresh juices in a comfortable environment.
            </p>
            <div className="service-features">
              <span className="feature-badge">Air-Conditioned</span>
              <span className="feature-badge">Fine Dining</span>
              <span className="feature-badge">Fresh Juices</span>
              <span className="feature-badge">Professional Service</span>
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <CategoryFilter
            categories={menuData.categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <MenuGrid items={filteredItems} />
        </div>
      </main>
    </div>
  );
};

export default ACServicePage;
