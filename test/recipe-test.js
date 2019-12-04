const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/recipe-class');

describe('recipes', function() {

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceof(Recipe);
  });
});
