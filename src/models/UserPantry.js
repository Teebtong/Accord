// models/UserPantry.js - Class for managing user's available ingredients
class UserPantry {
    constructor(userId) {
      this.userId = userId;
      this.ingredients = [];
      this.staples = []; // Always assumed to be in pantry (salt, pepper, etc.)
    }
    
    addIngredient(ingredient) {
      this.ingredients.push(ingredient);
    }
    
    removeIngredient(ingredientId) {
      this.ingredients = this.ingredients.filter(ing => ing.id !== ingredientId);
    }
    
    getAvailableIngredients() {
      return [...this.ingredients, ...this.staples];
    }
  }

export default UserPantry;
