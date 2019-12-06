class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.image = recipe.image;
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
