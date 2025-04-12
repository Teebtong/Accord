// services/AccordRegistry.js - Registry connecting ingredients and accords
class AccordRegistry {
    constructor() {
      this.accords = [];
    }
    
    addAccord(accord) {
      this.accords.push(accord);
    }
    
    // Find accords that complement the given ingredients
    findAccordsForIngredients(ingredients) {
      const matchingAccords = [];
      
      // Extract flavor profiles from ingredients
      const combinedProfile = this.combineFlavorProfiles(ingredients);
      
      // Find accords that complement or enhance the combined profile
      for (const accord of this.accords) {
        const score = this.calculateCompatibilityScore(combinedProfile, accord);
        
        if (score > 0.7) { // Threshold for "good match"
          matchingAccords.push({
            ...accord,
            compatibilityScore: score
          });
        }
      }
      
      // Sort by compatibility score
      return matchingAccords.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
    }
    
    // Combine flavor profiles of multiple ingredients
    combineFlavorProfiles(ingredients) {
      const combined = {
        sweetness: 0,
        saltiness: 0,
        acidity: 0,
        bitterness: 0,
        umami: 0,
        pungency: 0
      };
      
      // Simple averaging of profiles
      for (const ingredient of ingredients) {
        if (ingredient.flavorProfile) {
          for (const flavor in combined) {
            combined[flavor] += ingredient.flavorProfile[flavor] || 0;
          }
        }
      }
      
      // Normalize
      const count = ingredients.length || 1;
      for (const flavor in combined) {
        combined[flavor] /= count;
      }
      
      return combined;
    }
    
    // Calculate how well an accord complements a flavor profile
    calculateCompatibilityScore(flavorProfile, accord) {
      // This would be a sophisticated algorithm in the actual implementation
      // Based on complementary flavor principles, contrasting elements, etc.
      
      // Placeholder for demonstration
      return 0.85; // High compatibility for example
    }
  }

  export default AccordRegistry;
