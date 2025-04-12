import React, { useState, useEffect } from 'react';
import UserPantry from '../../models/UserPantry';
import MenuPlanningEngine from '../../services/MenuPlanningEngine';
import AccordRegistry from '../../services/AccordRegistry';
import './MenuPlanner.css';

const MenuPlanner = ({ user }) => {
  const [pantry, setPantry] = useState(null);
  const [mealPlan, setMealPlan] = useState([]);
  const [daysToGenerate, setDaysToGenerate] = useState(7);
  const [accordRegistry, setAccordRegistry] = useState(null);
  
  useEffect(() => {
    // Initialize user pantry
    const userPantry = new UserPantry(user.id);
    
    // Load user's saved ingredients from API/storage
    fetchUserIngredients(user.id).then(ingredients => {
      ingredients.forEach(ingredient => userPantry.addIngredient(ingredient));
      setPantry(userPantry);
    });
    
    // Initialize accord registry
    const registry = new AccordRegistry();
    
    // Load accords from API/storage
    fetchAccords().then(accords => {
      accords.forEach(accord => registry.addAccord(accord));
      setAccordRegistry(registry);
    });
  }, [user.id]);
  
  // Placeholder for actual API calls
  const fetchUserIngredients = async (userId) => {
    // This would be an API call in the actual implementation
    return [
      { id: 1, name: 'Chicken Breast', category: 'protein' },
      { id: 2, name: 'Salmon', category: 'protein' },
      { id: 3, name: 'Brown Rice', category: 'grain' },
      { id: 4, name: 'Quinoa', category: 'grain' },
      { id: 5, name: 'Broccoli', category: 'vegetable' },
      { id: 6, name: 'Spinach', category: 'vegetable' }
    ];
  };
  
  const fetchAccords = async () => {
    // This would be an API call in the actual implementation
    return [
      {
        id: 1,
        title: 'English Herbal',
        description: 'A sophisticated blend of garden herbs with subtle citrus undertones.',
        notes: [
          { name: 'Lemon Thyme', type: 'top' },
          { name: 'Rosemary', type: 'heart' },
          { name: 'Bay Leaf', type: 'base' }
        ]
      },
      {
        id: 2,
        title: 'Nordic Citrus Spice',
        description: 'Bright citrus elements balanced with warming spices and evergreen notes.',
        notes: [
          { name: 'Orange Peel', type: 'top' },
          { name: 'Cardamom', type: 'heart' },
          { name: 'Juniper', type: 'base' }
        ]
      }
    ];
  };
  
  const generateMealPlan = () => {
    if (pantry && accordRegistry) {
      const engine = new MenuPlanningEngine(pantry, accordRegistry);
      const plan = engine.generateMealPlan(daysToGenerate);
      setMealPlan(plan);
    }
  };
  
  return (
    <div className="menu-planner">
      <div className="menu-planner-header">
        <h2 className="section-title">Menu Planning</h2>
        <p className="planner-description">
          Create maximum meal variety from your ingredients using our advanced planning engine, 
          enhanced with sophisticated flavor accords.
        </p>
      </div>
      
      <div className="planner-controls">
        <div className="days-selector">
          <label htmlFor="days">Days to Plan:</label>
          <select 
            id="days" 
            value={daysToGenerate} 
            onChange={(e) => setDaysToGenerate(parseInt(e.target.value))}
          >
            <option value="3">3 Days</option>
            <option value="5">5 Days</option>
            <option value="7">7 Days</option>
            <option value="14">14 Days</option>
          </select>
        </div>
        
        <button 
          className="cta-button" 
          onClick={generateMealPlan}
        >
          Generate Meal Plan
        </button>
      </div>
      
      {mealPlan.length > 0 && (
        <div className="meal-plan-results">
          {mealPlan.map((dayMeals, dayIndex) => (
            <div key={dayIndex} className="day-plan">
              <h3 className="day-title">Day {dayIndex + 1}</h3>
              
              <div className="day-meals">
                {dayMeals.map((meal, mealIndex) => (
                  <div key={mealIndex} className="meal-card">
                    <h4 className="meal-title">{meal.title}</h4>
                    <p className="meal-description">{meal.description}</p>
                    
                    {meal.accord && (
                      <div className="meal-accord">
                        <h5 className="accord-title">Flavor Accord: {meal.accord.title}</h5>
                        <div className="accord-notes">
                          {meal.accord.notes.map((note, noteIndex) => (
                            <span 
                              key={noteIndex} 
                              className={`note ${note.type}-note`}
                            >
                              {note.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="meal-components">
                      <h5>Ingredients:</h5>
                      <ul>
                        {Object.entries(meal.components).map(([category, ingredient]) => (
                          <li key={category}>{ingredient.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPlanner;
