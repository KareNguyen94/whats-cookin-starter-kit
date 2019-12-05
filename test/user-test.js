const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class');

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
});