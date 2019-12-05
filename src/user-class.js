class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addFavoriteRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipe(recipe) {
    const index = this.favoriteRecipes.indexOf(recipe)
    if (index !== -1) {
      this.favoriteRecipes.splice(index, 1);
    }
  }

  toFilterRecipes() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
