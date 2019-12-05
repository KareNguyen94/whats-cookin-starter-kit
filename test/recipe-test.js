const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe-class');

const recipeData = require('../data/recipes');

describe('recipes', function() {

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have a name', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.name).to.equal(recipeData[0].name);
  });

  it('should have a unique id', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.id).to.equal(recipeData[0].id);
  });

  it('should have a list of ingredients', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.igredients).to.equal(recipeData[0].ingredients.name);
  });

  it('should have instructions', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.instructions).to.deep.equal(recipeData[0].instructions);
  });

  it('should have tags', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.tags).to.deep.equal(recipeData[0].tags);
  });

  it('should start out not favorited', function() {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.favorite).to.equal(false);
  });

  it('should let you favorite', function() {
    const recipe = new Recipe(recipeData[0]);
    recipe.favoriteRecipe();
    expect(recipe.favorite).to.equal(true);
  });
});
