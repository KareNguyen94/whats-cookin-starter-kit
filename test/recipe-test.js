const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe-class');

const recipeData = require('../data/recipes');

describe('recipes', function() {

  let recipe;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0]);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should have a name', function() {
    expect(recipe.name).to.equal(recipeData[0].name);
  });

  it('should have a unique id', function() {
    expect(recipe.id).to.equal(recipeData[0].id);
  });

  it('should have a list of ingredients', function() {
    expect(recipe.igredients).to.equal(recipeData[0].ingredients.name);
  });

  it('should have instructions', function() {
    expect(recipe.instructions).to.deep.equal(recipeData[0].instructions);
  });

  it('should have tags', function() {
    expect(recipe.tags).to.deep.equal(recipeData[0].tags);
  });

  it('should have a default favorite value of false', function() {
    expect(recipe.favorite).to.equal(false);
  });

  it('should have the favorite value be true once favorited', function () {

    recipe.toggleFavoriteRecipe(recipe);

    expect(recipe.favorite).to.equal(true);
  });

  it('should have a default toCook value of false', function () {
    expect(recipe.toCook).to.equal(false);
  });

  it('should have the toCook value be true once favorited', function () {

    recipe.toggleToCook(recipe);

    expect(recipe.toCook).to.equal(true);
  });
});
