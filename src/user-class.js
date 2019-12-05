class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  toFilterRecipes() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
