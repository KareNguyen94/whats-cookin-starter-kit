class Pantry {
  constructor(user) {
    this.id = user.id;
    this.currentStock = [];
    this.itemsNeeded = [];
    this.EnoughItems = true;
  }

  checkItemStock() {

  }

  checkCost() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
