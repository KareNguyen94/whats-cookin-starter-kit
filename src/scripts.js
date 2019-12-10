var recipeCardSection = document.querySelector('.recipe-card-section');
var headerSection = document.querySelector('.user-header');
let recipes = [];
let user;
let pantry;
let cardId;
let selectedCard;
let randomNumber;
let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector('.search-input');
let returnedAfterSearch;

window.onload = displayRecipeCards();

searchButton.addEventListener('click', search);
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
        let favoriteValue = verifyFavoriteValue(allRecipes[i]);
        let toCookValue = verifyToCookValue(allRecipes[i]);
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${allRecipes[i].id}>
      <p class="recipe-name">${allRecipes[i].name}</p>
      <img class="food-image" src="${allRecipes[i].image}" alt="${allRecipes[i].name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(allRecipes[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(allRecipes[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
    )}
}

function displayFavoriteCards() {
    recipeCardSection.innerHTML = '';
    for (let i = 0; i < user.favoriteRecipes.length; i++) {
        let favoriteValue = verifyFavoriteValue(user.favoriteRecipes[i]);
        let toCookValue = verifyToCookValue(user.favoriteRecipes[i]);
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${user.favoriteRecipes[i].id}>
      <p class="recipe-name">${user.favoriteRecipes[i].name}</p>
      <img class="food-image" src="${user.favoriteRecipes[i].image}" alt="${user.favoriteRecipes[i].name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(user.favoriteRecipes[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(user.favoriteRecipes[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
        )}
}

function displayToCookCards() {
    recipeCardSection.innerHTML = '';
    for (let i = 0; i < user.recipesToCook.length; i++) {
        let favoriteValue = verifyFavoriteValue(user.recipesToCook[i]);
        let toCookValue = verifyToCookValue(user.recipesToCook[i]);
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${user.recipesToCook[i].id}>
      <p class="recipe-name">${user.recipesToCook[i].name}</p>
      <img class="food-image" src="${user.recipesToCook[i].image}" alt="${user.recipesToCook[i].name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(user.recipesToCook[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(user.recipesToCook[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
        )}
}

function handleCardClick() {
  if (event.target.classList.contains('favorite-button') || event.target.classList.contains('active-favorite-button')) {
    favoriteClick();
    toggleFavoriteButton(event);
  } if (event.target.classList.contains('cook-button') || event.target.classList.contains('active-to-cook-button')) {
    cookClick();
    toggleToCookButton(event);
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

function toggleToCookButton(event) {
    let toCookButton = event.target.closest('.this-cook-button');
    if (selectedCard.toCook) {
        toCookButton.classList.toggle('active-to-cook-button');
        toCookButton.classList.toggle('cook-button');
    } else {
        toCookButton.classList.toggle('active-to-cook-button');
        toCookButton.classList.toggle('cook-button');
    }
}
function toggleFavoriteButton(event) {
    let favoriteButton = event.target.closest('.this-favorite-button');
    if (selectedCard.favorite) {
        favoriteButton.classList.toggle('active-favorite-button');
        favoriteButton.classList.toggle('favorite-button');
    } else {
        favoriteButton.classList.toggle('active-favorite-button');
        favoriteButton.classList.toggle('favorite-button');
    }
}

function verifyFavoriteValue(recipe) {
    if (recipe.favorite) {
        return "active-favorite-button";
    } else {
        return "favorite-button";
    }
}

function verifyToCookValue(recipe) {
    if (recipe.toCook) {
        return "active-to-cook-button";
    } else {
        return "cook-button"
    }
}

function displayRecipeCards() {
    allRecipes = instantiateRecipes();
    getRandomInt(1, 48);
    for (let i = 0; i < allRecipes.length; i++) {
        let favoriteValue = verifyFavoriteValue(allRecipes[i]);
        let toCookValue = verifyToCookValue(allRecipes[i]);
        recipeCardSection.insertAdjacentHTML('beforeend',
      `<article class="card" id=${allRecipes[i].id}>
      <p class="recipe-name">${allRecipes[i].name}</p>
      <img class="food-image" src="${allRecipes[i].image}" alt="${allRecipes[i].name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(allRecipes[i].ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(allRecipes[i].instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
    )
  }
  instantiateUser();
  instantiatePantry();
};


function search() {
    var searchValue = searchInput.value.toLowerCase();
    recipeCardSection.innerHTML = "";
    let returnedAfterSearch = allRecipes.filter(recipe => {
        var ingredientSearch = recipe.ingredients.filter(ingredient => {
            return ingredient.name.toLowerCase().includes(searchValue);
        })
        return (recipe.name.toLowerCase().includes(searchValue) || recipe.tags.includes(searchValue) || ingredientSearch.length > 0 
        );
    })
    console.log('11111111', returnedAfterSearch)
    createSearchedRecipeCard(returnedAfterSearch);
}



function createSearchedRecipeCard(recipe) {
    console.log('22222', recipe)
    recipe.forEach(singleRecipe => {
    let favoriteValue = verifyFavoriteValue(singleRecipe);
    let toCookValue = verifyToCookValue(singleRecipe);
    recipeCardSection.insertAdjacentHTML('beforeend',
        `<article class="card" id=${singleRecipe.id}>
      <p class="recipe-name">${singleRecipe.name}</p>
      <img class="food-image" src="${singleRecipe.image}" alt="${singleRecipe.name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(singleRecipe.ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(singleRecipe.instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
    )
    })
}