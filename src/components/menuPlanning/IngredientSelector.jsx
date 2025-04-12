import React, { useState, useEffect } from 'react';
import './IngredientSelector.css';

const IngredientSelector = ({ onIngredientsSelected }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    season: 'all'
  });
  
  useEffect(() => {
    // Fetch available ingredients
    fetchIngredients().then(ingredients => {
      setAvailableIngredients(ingredients);
    });
  }, []);
  
  // Placeholder for API call
  const fetchIngredients = async () => {
    // In a real app, this would be an API call
    return [
      { 
        id: 1, 
        name: 'Chicken Breast', 
        category: 'protein',
        seasons: ['spring', 'summer', 'fall', 'winter'],
        flavorProfile: {
          sweetness: 1,
          saltiness: 2,
          umami: 4
        }
      },
      { 
        id: 2, 
        name: 'Salmon', 
        category: 'protein',
        seasons: ['spring', 'summer', 'fall', 'winter'],
        flavorProfile: {
          sweetness: 2,
          saltiness: 3,
          umami: 5,
          fattiness: 4
        }
      },
      // Additional ingredients would be here
    ];
  };
  
  const toggleIngredient = (ingredient) => {
    if (selectedIngredients.some(item => item.id === ingredient.id)) {
      // Remove if already selected
      setSelectedIngredients(selectedIngredients.filter(item => item.id !== ingredient.id));
    } else {
      // Add if not selected
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };
  
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  // Apply filters to ingredients
  const filteredIngredients = availableIngredients.filter(ingredient => {
    // Category filter
    if (filters.category !== 'all' && ingredient.category !== filters.category) {
      return false;
    }
    
    // Season filter
    if (filters.season !== 'all' && !ingredient.seasons.includes(filters.season)) {
      return false;
    }
    
    return true;
  });
  
  // Group by category for display
  const groupedIngredients = filteredIngredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});
  
  const handleComplete = () => {
    if (onIngredientsSelected) {
      onIngredientsSelected(selectedIngredients);
    }
  };
  
  return (
    <div className="ingredient-selector">
      <div className="selector-filters">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="protein">Proteins</option>
            <option value="vegetable">Vegetables</option>
            <option value="grain">Grains</option>
            <option value="fat">Fats</option>
            <option value="herb">Herbs</option>
            <option value="spice">Spices</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Season:</label>
          <select 
            value={filters.season}
            onChange={(e) => handleFilterChange('season', e.target.value)}
          >
            <option value="all">All Seasons</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </div>
      </div>
      
      <div className="ingredients-display">
        {Object.entries(groupedIngredients).map(([category, ingredients]) => (
          <div key={category} className="category-group">
            <h3 className="category-heading">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            
            <div className="ingredient-tiles">
              {ingredients.map(ingredient => (
                <div 
                  key={ingredient.id}
                  className={`ingredient-tile ${selectedIngredients.some(item => item.id === ingredient.id) ? 'selected' : ''}`}
                  onClick={() => toggleIngredient(ingredient)}
                >
                  <span className="ingredient-name">{ingredient.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="selector-footer">
        <div className="selected-count">
          {selectedIngredients.length} ingredients selected
        </div>
        
        <button 
          className="cta-button"
          onClick={handleComplete}
          disabled={selectedIngredients.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default IngredientSelector;
