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

  toggleToCook() {
    this.toCook = !this.toCook;
  }

  toggleFavoriteRecipe() {
    this.favorite = !this.favorite;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
