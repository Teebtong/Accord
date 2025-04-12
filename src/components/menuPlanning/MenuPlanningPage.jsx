import React, { useState } from 'react';
import UserPantryManager from './UserPantryManager';
import MenuPlanner from './MenuPlanner';
import './MenuPlanningPage.css';

const MenuPlanningPage = () => {
  const [userPantry, setUserPantry] = useState(null);
  const [activeTab, setActiveTab] = useState('pantry');
  
  // Mock user for demo
  const user = { id: 1, name: 'User' };
  
  const handlePantryUpdate = (pantry) => {
    setUserPantry(pantry);
  };
  
  return (
    <div className="menu-planning-page">
      <div className="page-hero">
        <h1>Menu Planning</h1>
        <p>Create maximum meal variety with minimum ingredients</p>
      </div>
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'pantry' ? 'active' : ''}`}
          onClick={() => setActiveTab('pantry')}
        >
          My Ingredients
        </button>
        <button 
          className={`tab-button ${activeTab === 'planner' ? 'active' : ''}`}
          onClick={() => setActiveTab('planner')}
        >
          Generate Meal Plan
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'pantry' && (
          <UserPantryManager user={user} onPantryUpdate={handlePantryUpdate} />
        )}
        
        {activeTab === 'planner' && (
          userPantry ? (
            <MenuPlanner user={user} pantry={userPantry} />
          ) : (
            <div className="empty-pantry-message">
              <p>Please add ingredients to your pantry first.</p>
              <button 
                className="cta-button" 
                onClick={() => setActiveTab('pantry')}
              >
                Add Ingredients
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MenuPlanningPage;
