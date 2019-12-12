class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  evaluateToCookValue(recipe) {
    if (recipe.toCook) {
      this.removeToCook(recipe);
    } else {
      this.addToCook(recipe);
    }
  }

  evaluateFavoriteValue(recipe) {
    if (recipe.favorite) {
      this.removeFavoriteRecipe(recipe);
    } else {
      this.addFavoriteRecipe(recipe);
    }
  }

  addToCook(recipe) {
    this.recipesToCook.push(recipe);
    recipe.toggleToCook(recipe);
  }

  removeToCook(recipe) {
    const index = this.recipesToCook.indexOf(recipe)
    if (index !== -1) {
      this.recipesToCook.splice(index, 1);
    }
    recipe.toggleToCook(recipe);
  }

  addFavoriteRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
    recipe.toggleFavoriteRecipe(recipe);
  }

  removeFavoriteRecipe(recipe) {
    const index = this.favoriteRecipes.indexOf(recipe)
    if (index !== -1) {
      this.favoriteRecipes.splice(index, 1);
    }
    recipe.toggleFavoriteRecipe(recipe);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
