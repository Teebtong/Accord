// services/MenuPlanningEngine.js - Core algorithm for generating meal combinations
class MenuPlanningEngine {
    constructor(userPantry, accordRegistry) {
      this.userPantry = userPantry;
      this.accordRegistry = accordRegistry; // Existing accord system
      this.mealTemplates = this.getDefaultMealTemplates();
    }
    
    getDefaultMealTemplates() {
      return [
        new MealTemplate('breakfast', 'Breakfast', ['protein', 'grain']),
        new MealTemplate('lunch', 'Lunch', ['protein', 'vegetable', 'grain']),
        new MealTemplate('dinner', 'Dinner', ['protein', 'vegetable', 'grain', 'sauce'])
      ];
    }
    
    // Generate meal plans based on minimum ingredients
    generateMealPlan(days = 7, mealsPerDay = 3) {
      const mealPlan = [];
      const availableIngredients = this.userPantry.getAvailableIngredients();
      
      // Group ingredients by category for easier access
      const ingredientsByCategory = this.categorizeIngredients(availableIngredients);
      
      // Generate meals for each day
      for (let day = 0; day < days; day++) {
        const dailyMeals = [];
        
        // Generate each meal type (breakfast, lunch, dinner)
        for (let meal = 0; meal < mealsPerDay; meal++) {
          const template = this.mealTemplates[meal];
          const mealComponents = {};
          
          // For each component in the template, select an ingredient
          for (const component of template.components) {
            // Get options for this component
            const options = ingredientsByCategory[component] || [];
            
            if (options.length > 0) {
              // Select ingredient, potentially with some weighting/logic
              const selectedIndex = day % options.length; // Simple rotation
              mealComponents[component] = options[selectedIndex];
            }
          }
          
          // Now enhance the meal with a complementary accord
          const enhancedMeal = this.enhanceMealWithAccord(mealComponents);
          dailyMeals.push(enhancedMeal);
        }
        
        mealPlan.push(dailyMeals);
      }
      
      return mealPlan;
    }
    
    categorizeIngredients(ingredients) {
      const categorized = {};
      
      for (const ingredient of ingredients) {
        if (!categorized[ingredient.category]) {
          categorized[ingredient.category] = [];
        }
        categorized[ingredient.category].push(ingredient);
      }
      
      return categorized;
    }
    
    // Integrate with accord system to enhance meal combinations
    enhanceMealWithAccord(mealComponents) {
      // Get primary ingredients
      const ingredients = Object.values(mealComponents);
      
      // Find complementary accord based on ingredients
      const matchingAccords = this.accordRegistry.findAccordsForIngredients(ingredients);
      
      // If we have a matching accord, use it to enhance the meal
      if (matchingAccords.length > 0) {
        // Select most appropriate accord (perhaps based on user preferences)
        const selectedAccord = matchingAccords[0];
        
        // Return enhanced meal with accord information
        return {
          components: mealComponents,
          accord: selectedAccord,
          title: this.generateMealTitle(mealComponents, selectedAccord),
          description: this.generateMealDescription(mealComponents, selectedAccord)
        };
      }
      
      // If no matching accord, return basic meal
      return {
        components: mealComponents,
        title: this.generateMealTitle(mealComponents),
        description: this.generateMealDescription(mealComponents)
      };
    }
    
    // Generate meal title based on components and possibly accord
    generateMealTitle(components, accord = null) {
      // Basic implementation - use main protein and cooking method
      const protein = components.protein ? components.protein.name : 'Vegetarian';
      
      if (accord) {
        return `${accord.title} ${protein} with ${components.vegetable?.name || 'vegetables'}`;
      }
      
      return `${protein} with ${components.vegetable?.name || 'vegetables'}`;
    }
    
    // Generate meal description
    generateMealDescription(components, accord = null) {
      let description = `A meal featuring ${components.protein?.name || 'plant-based protein'}`;
      
      if (components.vegetable) {
        description += ` with ${components.vegetable.name}`;
      }
      
      if (components.grain) {
        description += ` and ${components.grain.name}`;
      }
      
      if (accord) {
        description += `. Enhanced with the ${accord.title} flavor accord featuring ${accord.notes.map(n => n.name).join(', ')}.`;
      }
      
      return description;
    }
  }

export default MenuPlanningEngine;
