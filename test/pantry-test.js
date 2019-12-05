const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry-class');
const usersData = require('../data/users');


describe('ingredients', function() {

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {
    const pantry = new Pantry();
    const user = new User(usersData[0]);
    console.log(pantry)
    expect(pantry).to.be.an.instanceof(Pantry);
  });
});
