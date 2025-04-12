import React, { useState, useEffect } from 'react';
import './UserPantryManager.css';

const UserPantryManager = ({ user, onPantryUpdate }) => {
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [userIngredients, setUserIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Fetch all available ingredients
    fetchIngredients().then(ingredients => {
      setAvailableIngredients(ingredients);
    });
    
    // Fetch user's saved ingredients
    fetchUserIngredients(user.id).then(ingredients => {
      setUserIngredients(ingredients);
      
      // If we have an update callback, create a pantry object and pass it
      if (onPantryUpdate) {
        const userPantry = new UserPantry(user.id);
        ingredients.forEach(ingredient => userPantry.addIngredient(ingredient));
        onPantryUpdate(userPantry);
      }
    });
  }, [user.id, onPantryUpdate]);
  
  // Placeholder for actual API calls
  const fetchIngredients = async () => {
    // This would be an API call in the actual implementation
    return [
      { id: 1, name: 'Chicken Breast', category: 'protein' },
      { id: 2, name: 'Salmon', category: 'protein' },
      { id: 3, name: 'Tofu', category: 'protein' },
      { id: 4, name: 'Brown Rice', category: 'grain' },
      { id: 5, name: 'Quinoa', category: 'grain' },
      { id: 6, name: 'Pasta', category: 'grain' },
      { id: 7, name: 'Broccoli', category: 'vegetable' },
      { id: 8, name: 'Spinach', category: 'vegetable' },
      { id: 9, name: 'Bell Pepper', category: 'vegetable' },
      { id: 10, name: 'Olive Oil', category: 'fat' },
      { id: 11, name: 'Soy Sauce', category: 'sauce' },
      { id: 12, name: 'Lemon', category: 'fruit' }
    ];
  };
  
  const fetchUserIngredients = async (userId) => {
    // This would be an API call in the actual implementation
    return [
      { id: 1, name: 'Chicken Breast', category: 'protein' },
      { id: 3, name: 'Brown Rice', category: 'grain' },
      { id: 7, name: 'Broccoli', category: 'vegetable' }
    ];
  };
  
  const addToPantry = (ingredient) => {
    // Only add if not already in pantry
    if (!userIngredients.some(ing => ing.id === ingredient.id)) {
      const updatedIngredients = [...userIngredients, ingredient];
      setUserIngredients(updatedIngredients);
      
      // Update in backend would happen here
      
      // If we have an update callback, create a pantry object and pass it
      if (onPantryUpdate) {
        const userPantry = new UserPantry(user.id);
        updatedIngredients.forEach(ing => userPantry.addIngredient(ing));
        onPantryUpdate(userPantry);
      }
    }
  };
  
  const removeFromPantry = (ingredientId) => {
    const updatedIngredients = userIngredients.filter(ing => ing.id !== ingredientId);
    setUserIngredients(updatedIngredients);
    
    // Update in backend would happen here
    
    // If we have an update callback, create a pantry object and pass it
    if (onPantryUpdate) {
      const userPantry = new UserPantry(user.id);
      updatedIngredients.forEach(ing => userPantry.addIngredient(ing));
      onPantryUpdate(userPantry);
    }
  };
  
  // Filter ingredients based on search term
  const filteredIngredients = availableIngredients.filter(ing => 
    ing.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group ingredients by category
  const groupedIngredients = filteredIngredients.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});
  
  return (
    <div className="pantry-manager">
      <div className="pantry-header">
        <h2 className="section-title">My Ingredient Collection</h2>
        <p className="pantry-description">
          Add ingredients that you typically have on hand to generate meal plans that maximize your options.
        </p>
      </div>
      
      <div className="pantry-search">
        <input
          type="text"
          placeholder="Search ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="pantry-content">
        <div className="available-ingredients">
          <h3>Available Ingredients</h3>
          
          {Object.entries(groupedIngredients).map(([category, ingredients]) => (
            <div key={category} className="ingredient-category">
              <h4 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              
              <div className="ingredient-grid">
                {ingredients.map(ingredient => (
                  <div 
                    key={ingredient.id} 
                    className="ingredient-item"
                    onClick={() => addToPantry(ingredient)}
                  >
                    {ingredient.name}
                    <span className="add-icon">+</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="user-pantry">
          <h3>My Pantry</h3>
          
          {userIngredients.length === 0 ? (
            <p className="empty-message">No ingredients added yet. Click on ingredients to add them to your pantry.</p>
          ) : (
            <div className="pantry-grid">
              {userIngredients.map(ingredient => (
                <div 
                  key={ingredient.id} 
                  className="pantry-item"
                  onClick={() => removeFromPantry(ingredient.id)}
                >
                  {ingredient.name}
                  <span className="remove-icon">×</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPantryManager;
