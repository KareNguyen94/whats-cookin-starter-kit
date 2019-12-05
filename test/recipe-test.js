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
    // console.log(recipe);
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

  it('should start out not favorited', function() {
    expect(recipe.favorite).to.equal(false);
  });

  it.only('should let you favorite', function() {
    recipe.toggleFavorite(recipe);
    expect(recipe.favorite).to.equal(true);
  });
});
