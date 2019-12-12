class Pantry {
  constructor(user) {
    this.id = user.id;
    this.currentStock = user.pantry;
    this.itemsNeeded = [];
  }

  checkItemStock(recipe) {
    recipe.ingredients.forEach(recipe => {
      let ingredientName = recipe.name;
      const userPantryItem = this.currentStock.find(ingredient => ingredient.ingredient === recipe.id);
      if (!userPantryItem) {
        return this.itemsNeeded.push({[ingredientName]: recipe.quantity.amount})
      }
      if (recipe.quantity.amount > userPantryItem.amount) {
        let amountNeeded = ((userPantryItem.amount - recipe.quantity.amount) * -1);
        this.itemsNeeded.push({[ingredientName]: amountNeeded})
      }
    })
    if (this.itemsNeeded.length > 0) {
      this.checkCost();
    } else {
      displayInstructions();
    }
  }
      
      
  checkCost() {
    console.log('COST')
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
