import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/home/Home';
import MenuPlanningPage from './components/menuPlanning/MenuPlanningPage';
import DiscoverPage from './components/discover/Discover';
import ProfilePage from './components/profile/Profile';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-planning" element={<MenuPlanningPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
