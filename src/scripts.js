var recipeCardSection = document.querySelector('.recipe-card-section');

function instantiateRecipes() {
    let recipes = [];
    for (let i = 0; i < recipeData.length; i++) {
        let recipe = new Recipe(recipeData[i])
        recipes.push(recipe)
    }
    return recipes;
};

function insertInstructions(steps) {
    const instructionList = steps.map(step => `<li>${step.number}. ${step.instruction}</li>`);
    return instructionList.join('\n');
}

function insertIngredients(items) {
    const ingredientList = items.map(item => `<li>-${item.quantity.amount} ${item.quantity.unit} ${item.name}</li>`);
    return ingredientList.join('\n');
}

function onCardClick(event) {
  var recipeCard = event.target.parentNode.parentNode;
  recipes.forEach(selectedRecipe => {
    if(recipes[i].id === id) {
      addToFavorite(recipes[i])
    }
  })

}

function addToFavorite(recipes) {
  recipes.addFavoriteRecipe(recipe);
}

function displayRecipeCards() {
    instantiateRecipes();
    allRecipes = instantiateRecipes();
    for (let i = 0; i < allRecipes.length; i++) {
        recipeCardSection.insertAdjacentHTML('beforeend',
    `<article>
      <img class="food-image" src="${allRecipes[i].image}" alt="food">
      <p class="recipe-name">${allRecipes[i].name}</p>
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(allRecipes[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(allRecipes[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <button><img class="cook-button" src="https://cdn3.iconfinder.com/data/icons/rounded-white-housekeeping/139/Cooking-RoundedWhite-512.png" alt=“Cook icon”></button>
        <button><img class="favorite-button" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt=“Favorite icon”></button>
      </div>
    </article>`
    )
  }
};

window.onload = displayRecipeCards();
