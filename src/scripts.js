var recipeCardSection = document.querySelector('.recipe-card-section');
var headerSection = document.querySelector('.user-header');
let recipes = [];
let user;
let pantry;
let cardId;
let selectedCard;
let randomNumber;


window.onload = displayRecipeCards();

recipeCardSection.addEventListener("click", handleCardClick);
headerSection.addEventListener("click", handleHeaderClick);

function handleHeaderClick() {
    if (event.target.classList.contains('home-page-button')) {
        displayHomeCards();
    } if (event.target.classList.contains('favorite-page-button')) {
        displayFavoriteCards();
    } if (event.target.classList.contains('to-cook-page-button')) {
        displayToCookCards();
    }
}

function displayHomeCards() {
    recipeCardSection.innerHTML = '';
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
    )}
}


function displayFavoriteCards() {
    recipeCardSection.innerHTML = '';
    for (let i = 0; i < user.favoriteRecipes.length; i++) {
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${user.favoriteRecipes[i].id}>
      <img class="food-image" src="${user.favoriteRecipes[i].image}" alt="food">
      <p class="recipe-name">${user.favoriteRecipes[i].name}</p>
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(user.favoriteRecipes[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(user.favoriteRecipes[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <button class="cook-button"></button>
        <button class="favorite-button"></button>
      </div>
    </article>`
        )}
}

function displayToCookCards() {
    recipeCardSection.innerHTML = '';
    for (let i = 0; i < user.recipesToCook.length; i++) {
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${user.recipesToCook[i].id}>
      <img class="food-image" src="${user.recipesToCook[i].image}" alt="food">
      <p class="recipe-name">${user.recipesToCook[i].name}</p>
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(user.recipesToCook[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(user.recipesToCook[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <button class="cook-button"></button>
        <button class="favorite-button"></button>
      </div>
    </article>`
        )}
}

function handleCardClick() {
  if (event.target.classList.contains('favorite-button')) {
    favoriteClick();
  } if (event.target.classList.contains('cook-button')) {
    cookClick();
    toggleToCookButton();
  }
}

function favoriteClick() {
  let cardId = event.target.parentNode.parentNode.id;
  if (cardId !== "") {
  onFavoriteButtonClick(cardId)
  }
}

function cookClick() {
  let cardId = event.target.parentNode.parentNode.id;
  if (cardId !== "") {
  onCookButtonClick(cardId)
  }
}



function getRandomInt(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) - 1;
}

function instantiateRecipes() {
  for (let i = 0; i < recipeData.length; i++) {
    let recipe = new Recipe(recipeData[i])
    recipes.push(recipe)
  }
  return recipes;
};

function instantiateUser() {
    user = new User(usersData[randomNumber]);
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
    user.evaluateFavoriteValue(selectedCard);
}

function onCookButtonClick(cardId) {
  selectedCard = recipes.find(recipe => {
    if (recipe.id === parseInt(cardId)) {
      return recipe;
    }
  })
    user.evaluateToCookValue(selectedCard);
}

function toggleToCookButton() {
  let toCookButton = document.querySelector(".cook-button");
  if (selectedCard.toCook === true) {
    toCookButton.classList.add("active-to-cook-button");
  } else {
    toCookButton.classList.remove("active-to-cook-button");
  }
}

function displayRecipeCards() {
    allRecipes = instantiateRecipes();
    getRandomInt(1, 48);
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
