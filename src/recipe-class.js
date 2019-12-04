class Recipe {
  constructor(name, id, ingredients, instructions, tags) {
    this.name = name;
    this.id = id;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
    this.favorite = false;
  }

  showSteps() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
