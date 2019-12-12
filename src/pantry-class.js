class Pantry {
  constructor(user) {
    this.id = user.id;
    this.currentStock = user.pantry;
    this.itemsNeeded = [];
  }

  combinePantryData() {
    return this.currentStock.reduce((acc, item) => {
      if (!acc[item.ingredient]) {
        acc[item.ingredient] = {amount: item.amount}
      } else {
        acc[item.ingredient].amount += item.amount
      }
      return acc;
    }, {})
  }

  checkItemStock(recipe) {
    let updatedPantry = this.combinePantryData();
    recipe.ingredients.forEach(recipe => {
      let ingredientName = recipe.name;
      let ingredientId = recipe.id;
      const userPantryItem = Object.keys(updatedPantry).find(key => parseInt(key) === recipe.id);
      if (!userPantryItem) {
        return this.itemsNeeded.push({id: ingredientId, amount: recipe.quantity.amount, name: ingredientName})
      }
      if (recipe.quantity.amount > userPantryItem.amount) {
        let amountNeeded = ((userPantryItem.amount - recipe.quantity.amount) * -1);
        this.itemsNeeded.push({id: ingredientId, amount: amountNeeded, name: ingredientName})
      }
    })
    if (this.itemsNeeded.length > 0) {
      this.checkCost();
    } else {
      displayInstructions(recipe);
    }
  }

  checkCost() {
    let cost = Math.floor(this.itemsNeeded.reduce((acc, item) => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.id === item.id) {
          acc += (ingredient.estimatedCostInCents * item.amount)
        }
      })
      return acc
    }, 0)) / 100;
    displayCost(cost)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
