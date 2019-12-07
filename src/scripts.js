var recipeCardSection = document.querySelector('.recipe-card-section');
let recipes = [];
let user;
let pantry;
let cardId;
let selectedCard;
let numberrrr;


window.onload = displayRecipeCards();

recipeCardSection.addEventListener("click", handleCardClick);

function handleCardClick() {
  let cardId = event.target.parentNode.parentNode.id;
  onFavoriteButtonClick(cardId)

function getRandomInt(min, max) {
    numberrrr = Math.floor(Math.random() * (max - min + 1)) + min;
}

function instantiateRecipes() {
  for (let i = 0; i < recipeData.length; i++) {
    let recipe = new Recipe(recipeData[i])
    recipes.push(recipe)
  }
  return recipes;
};

function instantiateUser() {
  user = new User(usersData[0]);
    return user;
};

function instantiatePantry() {
  pantry = new Pantry(usersData[0]);
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

function onFavoriteButtonClick(cardId) {
  selectedCard = recipes.find(recipe => {
    if (recipe.id === parseInt(cardId)) {
      return recipe;
    }
  })
  user.addFavoriteRecipe(selectedCard);
}

function displayRecipeCards() {
    instantiateRecipes();
    allRecipes = instantiateRecipes();
    getRandomInt(1, 49);
    console.log(numberrrr);
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
        <button class="cook-button"></button>
        <button class="favorite-button"></button>
      </div>
    </article>`
    )
  }
  instantiateUser();
  instantiatePantry();
};
