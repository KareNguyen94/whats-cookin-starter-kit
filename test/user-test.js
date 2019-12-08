const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class');
const Recipe = require('../src/recipe-class');
const recipeData = require('../data/recipes');



const usersData = require('../data/users');

describe('recipes', function () {

  let user;

  beforeEach(() => {
    user = new User(usersData[0]);
  });

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a unique id', function () {
    expect(user.id).to.equal(usersData[0].id);
  });

  it('should have a unique name', function () {
    expect(user.name).to.equal(usersData[0].name);
  });

  it('should be able to favorite a recipe', function() {
    let recipe = new Recipe(recipeData[0]);

    user.evaluateFavoriteValue(recipe);
    
    expect(user.favoriteRecipes.length).to.deep.equal(1);
  });

  it('should be able to unfavorite a recipe', function () {
    let recipe = new Recipe(recipeData[0])
    let recipe1 = new Recipe(recipeData[1])

    user.evaluateFavoriteValue(recipe);
    user.evaluateFavoriteValue(recipe1);
    user.evaluateFavoriteValue(recipe1);

    expect(user.favoriteRecipes.length).to.deep.equal(1);
    expect(recipe.favorite).to.equal(true);
    expect(recipe1.favorite).to.equal(false);
  });

  it('should be able to add a recipe to the to-cook section', function () {
    let recipe = new Recipe(recipeData[0]);

    user.evaluateToCookValue(recipe);

    expect(user.recipesToCook.length).to.deep.equal(1);
  });

  it('should be able to remove a recipe from the to-cook section', function () {
    let recipe = new Recipe(recipeData[0])
    let recipe1 = new Recipe(recipeData[1])

    user.evaluateToCookValue(recipe);
    user.evaluateToCookValue(recipe1);
    user.evaluateToCookValue(recipe1);

    expect(user.recipesToCook.length).to.deep.equal(1);
    expect(recipe.toCook).to.equal(true);
    expect(recipe1.toCook).to.equal(false);
  });
});