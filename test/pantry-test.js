const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry-class');
const usersData = require('../data/users');


describe('ingredients', function () {

  let pantry;

  beforeEach(() => {
    pantry = new Pantry(usersData[0]);
  });

  it('should be a function', function () {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function () {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should have a current stock that holds the users pantry information', function () {
    expect(pantry.currentStock).to.deep.equal(usersData[0].pantry);
  });
});