import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ACServicePage from './pages/ACServicePage';
import RoomsPage from './pages/RoomsPage';
import PartyHallPage from './pages/PartyHallPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ac-service" element={<ACServicePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/party-hall" element={<PartyHallPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
