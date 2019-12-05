class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }

  showSteps() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
