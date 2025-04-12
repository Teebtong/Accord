class Ingredient {
    constructor(id, name, category, nutritionalProfile, cookingProperties, seasonality) {
      this.id = id;
      this.name = name;
      this.category = category; // e.g., protein, vegetable, grain, etc.
      this.nutritionalProfile = nutritionalProfile; // e.g., protein, carbs, fats, etc.
      this.cookingProperties = cookingProperties; // e.g., methods, times, etc.
      this.seasonality = seasonality; // array of seasons when ingredient is at peak
      this.flavorProfile = {
        sweetness: 0,
        saltiness: 0,
        acidity: 0,
        bitterness: 0,
        umami: 0,
        pungency: 0
      };
      this.textureProfile = {
        firmness: 0,
        moisture: 0,
        density: 0,
        chewiness: 0
      };
      this.aromaticProfile = {
        fruity: 0,
        herbal: 0,
        earthy: 0,
        spicy: 0,
        roasted: 0
      };
    }
  }

export default Ingredient;
