class Pantry {
  constructor(user) {
    this.id = user.id;
    this.currentStock = user.pantry;
    this.itemsNeeded = [];
    this.enoughItems = true;
  }

  checkItemStock() {

  }

  checkCost() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
