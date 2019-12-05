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
    // console.log(user);
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

    user.addFavoriteRecipe(recipe);
    
    expect(user.favoriteRecipes.length).to.deep.equal(1);
  });

  it.('should be able to remove an unfavorited recipe', function () {
    let recipe = new Recipe(recipeData[0])
    let recipe1 = new Recipe(recipeData[1])

    user.addFavoriteRecipe(recipe);
    user.addFavoriteRecipe(recipe1);
    user.removeFavoriteRecipe(recipe1);

    expect(user.favoriteRecipes.length).to.deep.equal(1);
  });
});