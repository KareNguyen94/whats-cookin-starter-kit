const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class');

describe('recipes', function() {

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });
});
