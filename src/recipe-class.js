class Recipe {
  constructor(recipe) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.favorite = false;
    this.toCook = false;
  }

  toggleToCook(recipe) {
    this.toCook = !this.toCook;
  }


  toggleFavoriteRecipe(recipe) {
    this.favorite = !this.favorite;
  }


  showSteps() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
