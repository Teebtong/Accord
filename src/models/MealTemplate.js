// models/MealTemplate.js - Template structure for different meal types
class MealTemplate {
    constructor(id, name, components) {
      this.id = id;
      this.name = name;
      this.components = components; // e.g., protein + veg + grain for dinner
    }
  }

export default MealTemplate;
