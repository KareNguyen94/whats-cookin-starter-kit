class Pantry {
  constructor(user) {
    this.id = user.id;
    this.currentStock = user.pantry;
    this.itemsNeeded = [];
  }

  checkItemStock(recipe) {
    recipe.ingredients.forEach(recipe => {
      let ingredientId = recipe.id;
      const userPantryItem = this.currentStock.find(ingredient => ingredient.ingredient === recipe.id);
      if (!userPantryItem) {
        return this.itemsNeeded.push({id: ingredientId, amount: recipe.quantity.amount})
      }
      if (recipe.quantity.amount > userPantryItem.amount) {
        let amountNeeded = ((userPantryItem.amount - recipe.quantity.amount) * -1);
        this.itemsNeeded.push({id: ingredientId, amount: amountNeeded})
      }
    })
    if (this.itemsNeeded.length > 0) {
      this.checkCost();
    } else {
      displayInstructions();
    }
  }


  checkCost() {
  return Math.floor(this.itemsNeeded.reduce((acc, item) => {
    ingredientsData.forEach(ingredient => {
      if (ingredient.id === item.id) {
        acc += (ingredient.estimatedCostInCents * item.amount)
      }
    })
      return acc
    }, 0)) / 100;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
