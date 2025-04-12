class Accord {
    constructor(id, title, description, notes) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.notes = notes || []; // top, heart, base notes
      this.compatibleIngredients = []; // ingredients that work well with this accord
      this.culinaryStyle = ''; // e.g., Mediterranean, Nordic, etc.
      this.season = ''; // optional seasonal association
    }
    
    // Add an ingredient that works well with this accord
    addCompatibleIngredient(ingredient) {
      this.compatibleIngredients.push(ingredient);
    }
    
    // Check if an ingredient is compatible with this accord
    isIngredientCompatible(ingredient) {
      return this.compatibleIngredients.some(ing => ing.id === ingredient.id);
    }
    
    // Calculate compatibility score with a set of ingredients
    calculateCompatibilityScore(ingredients) {
      if (!ingredients || ingredients.length === 0) return 0;
      
      let compatibleCount = 0;
      
      for (const ingredient of ingredients) {
        if (this.isIngredientCompatible(ingredient)) {
          compatibleCount++;
        }
      }
      
      return compatibleCount / ingredients.length;
    }
  }

export default Accord;
