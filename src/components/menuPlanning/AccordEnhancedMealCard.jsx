import Accord from '../../models/Accord';

class MenuAccordIntegration {
    constructor(ingredientDatabase, accordRegistry) {
      this.ingredientDatabase = ingredientDatabase;
      this.accordRegistry = accordRegistry;
    }
    
    // Find the best accord to enhance a set of ingredients
    findBestAccordForIngredients(ingredients) {
      if (!ingredients || ingredients.length === 0) return null;
      
      let bestAccord = null;
      let highestScore = 0;
      
      for (const accord of this.accordRegistry.accords) {
        const score = accord.calculateCompatibilityScore(ingredients);
        
        if (score > highestScore) {
          highestScore = score;
          bestAccord = accord;
        }
      }
      
      return {
        accord: bestAccord,
        score: highestScore
      };
    }
    
    // Suggest additional ingredients to complement a meal based on accords
    suggestComplementaryIngredients(currentIngredients, mealType) {
      // Find best matching accord
      const { accord, score } = this.findBestAccordForIngredients(currentIngredients);
      
      if (!accord || score < 0.3) {
        // If no good accord match, fall back to basic food pairing rules
        return this.suggestBasedOnFoodPairingRules(currentIngredients, mealType);
      }
      
      // Find ingredients from the accord that aren't already in the meal
      const suggestions = accord.compatibleIngredients.filter(
        ingredient => !currentIngredients.some(ing => ing.id === ingredient.id)
      );
      
      // Limit suggestions to 3
      return suggestions.slice(0, 3);
    }
    
    // Fallback method using basic food pairing principles
    suggestBasedOnFoodPairingRules(ingredients, mealType) {
      // Basic food pairing logic would go here
      // For example: proteins + acid, complementary textures, etc.
      return [];
    }
    
    // Generate a meal plan enhanced with accords
    generateAccordEnhancedMealPlan(userPantry, days = 7, preferences = {}) {
      // Create a base meal plan using pantry ingredients
      const basePlan = this.createBaseMealPlan(userPantry, days, preferences);
      
      // Enhance each meal with appropriate accords
      return basePlan.map(day => {
        return day.map(meal => {
          const mealIngredients = Object.values(meal.components);
          const { accord, score } = this.findBestAccordForIngredients(mealIngredients);
          
          if (accord && score > 0.5) {
            // If we have a good accord match, enhance the meal
            meal.accord = accord;
            meal.title = `${accord.title} ${meal.title}`;
            
            // Add any missing accord notes as suggested additions
            meal.suggestedAdditions = accord.notes
              .filter(note => !mealIngredients.some(ing => ing.name === note.name))
              .map(note => note.name);
          }
          
          return meal;
        });
      });
    }
    
    // Base meal plan creation (simplified)
    createBaseMealPlan(userPantry, days, preferences) {
      // Simplified implementation - in a real app this would be more sophisticated
      const plan = [];
      
      for (let i = 0; i < days; i++) {
        plan.push([
          { 
            type: 'breakfast',
            components: {
              // Sample components
            },
            title: 'Sample Breakfast'
          },
          { 
            type: 'lunch',
            components: {
              // Sample components
            },
            title: 'Sample Lunch'
          },
          { 
            type: 'dinner',
            components: {
              // Sample components
            },
            title: 'Sample Dinner'
          }
        ]);
      }
      
      return plan;
    }
  }

export default MenuAccordIntegration;
