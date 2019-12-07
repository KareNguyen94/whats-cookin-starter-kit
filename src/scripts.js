var recipeCardSection = document.querySelector('.recipe-card-section');
let recipes = [];
let user;
let pantry;

window.onload = displayRecipeCards();
recipeCardSection.addEventListener("click", handleCardClick);

function handleCardClick() {
  let isCard = event.target.parentNode.parentNode.id;
}

function instantiateUsers() {
  
}

function instantiateRecipes() {
  for (let i = 0; i < recipeData.length; i++) {
      let recipe = new Recipe(recipeData[i])
      recipes.push(recipe)
  }
  return recipes;
};

function instantiateUser() {
        let user = new User(usersData[0]);
    return user;
};

function instantiatePantry() {
        let pantry = new Pantry(usersData[0]);
    return pantry;
};

function insertInstructions(steps) {
    const instructionList = steps.map(step => `<li>${step.number}. ${step.instruction}</li>`);
    return instructionList.join('\n');
}

function insertIngredients(items) {
    const ingredientList = items.map(item => `<li>-${item.quantity.amount} ${item.quantity.unit} ${item.name}</li>`);
    return ingredientList.join('\n');
}
// target class, then id varvar selected.array[i]
// user.favorite includes selectedcheck if false
// call one facorite
// return

function onFavoriteClick(event) {
recipes.find(recipe => {
  return recipe.id === event.target.id
})
  if (event.target.id("favorite-button")) {

  }
}

function addToFavorite(user, recipe) {
  user.addFavoriteRecipe(recipe);
}

function displayRecipeCards() {
    instantiateRecipes();
    allRecipes = instantiateRecipes();
    for (let i = 0; i < allRecipes.length; i++) {
        recipeCardSection.insertAdjacentHTML('beforeend',
    `<article class="card" id=${allRecipes[i].id}>
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
  instantiateUser();
  instantiatePantry();
};
