let currentPage = 'home';
var headerSection = document.querySelector('.user-header');
let pantry;
let searchInput = document.querySelector('.search-input');
let searchButton = document.querySelector(".search-button");
let tagList = document.querySelector(".dropdown-content");
var recipeCardSection = document.querySelector('.recipe-card-section');
let recipes = [];
let user;

window.onload = displayRecipeCards();

headerSection.addEventListener("click", handleHeaderClick);
searchButton.addEventListener('click', search);
recipeCardSection.addEventListener("click", handleCardClick);

function handleHeaderClick() {
    if (event.target.classList.contains('home-page-button')) {
        currentPage = 'home';
        displayCards(allRecipes);
    } if (event.target.classList.contains('favorite-page-button')) {
        currentPage = 'favorite';
        displayCards(user.favoriteRecipes);
    } if (event.target.classList.contains('to-cook-page-button')) {
        currentPage = 'to-cook';
        displayCards(user.recipesToCook);
    }
     if (event.target.classList.contains('tag-button')) {
       tagClick(allRecipes);
     }
}

function handleCardClick() {
  if (event.target.classList.contains('favorite-button') || event.target.classList.contains('active-favorite-button')) {
    favoriteClick();
    toggleFavoriteButton(event);
  } if (event.target.classList.contains('cook-button') || event.target.classList.contains('active-to-cook-button')) {
    cookClick();
    toggleToCookButton(event);
    } if (event.target.classList.contains('cook-now-button')) {
        cookNow(event);
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
    return Math.floor(Math.random() * (max - min + 1)) - 1;
}

function instantiateRecipes() {
  recipeData.forEach(data => {
    let recipe = new Recipe(data)
    recipes.push(recipe)
  })
  return recipes;
}

function instantiateUser(number) {
    user = new User(usersData[number]);
    return user;
};

function instantiatePantry(number) {
    pantry = new Pantry(usersData[number]);
    return pantry;
};

function insertInstructions(steps) {
  const instructionList = steps.map(step => `<li>${step.number}. ${step.instruction}</li>`);
  return instructionList.join('\n');
}

function insertIngredients(items) {
    const ingredientList = items.map(item => `<li>-${(Math.floor(item.quantity.amount * 100) / 100)} ${item.quantity.unit} ${item.name}</li>`);
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

function search() {
    var searchValue = searchInput.value.toLowerCase();
    let currentPageArray = findCurrentPage();
    recipeCardSection.innerHTML = "";
    let searchResult = currentPageArray.filter(recipe => {
        var ingredientSearch = recipe.ingredients.filter(ingredient => {
            return ingredient.name.toLowerCase().includes(searchValue);
        })
        return (recipe.name.toLowerCase().includes(searchValue) || recipe.tags.includes(searchValue) || ingredientSearch.length > 0
        );
    })
    displayCards(searchResult);
    searchInput.value = '';
}

function findCurrentPage() {
    if (currentPage === 'home') {
        return allRecipes;
    } if (currentPage === 'favorite') {
        return user.favoriteRecipes;
    } if (currentPage === 'to-cook') {
        return user.recipesToCook;
    }
}

function displayRecipeCards() {
    allRecipes = instantiateRecipes();
    displayCards(allRecipes);
    let randomNumber = getRandomInt(1, 48);
    instantiateUser(randomNumber);
    instantiatePantry(randomNumber);
    filterTags();
};

function filterTags() {
  let recipeTags = [];
  allRecipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!recipeTags.includes(tag)) {
        recipeTags.push(tag);
      }
    });
  });
  recipeTags.sort();
  createTags(recipeTags);
}

function createTags(allTags) {
    allTags.forEach(tag => {
    tagList.insertAdjacentHTML('beforeend',`<ul><button class="tag-button" id="${tag}">${tag}</button><ul>`);
  });
}

function tagClick(allRecipes) {
  var tagValue = event.target.id;
  let recipesWithTag = allRecipes.filter(recipe => {
      return recipe.tags.includes(tagValue);
  })
  displayCards(recipesWithTag);
}

function showCookButton(page) {
    if (page === 'to-cook') {
        return `<button class="cook-now-button">COOK NOW!</button>`;
    } else {
        return ""
    }
}

function displayCards(totalRecipes) {
    recipeCardSection.innerHTML = '';
    totalRecipes.forEach(recipe => {
        let favoriteValue = verifyFavoriteValue(recipe);
        let toCookValue = verifyToCookValue(recipe);
        recipeCardSection.insertAdjacentHTML('beforeend',
            `<article class="card" id=${recipe.id}>
      <p class="recipe-name">${recipe.name}</p>
      <img class="food-image" src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-list">
        <h3>Ingredients:</h3>
        <ul>${insertIngredients(recipe.ingredients)}</ul></br>
        <h3>Instructions:</h3>
        <ol>${insertInstructions(recipe.instructions)}</ol>
      </div>
      <div class="card-footer">
        <img class="${toCookValue} this-cook-button"/>
        ${showCookButton(currentPage)}
        <img class="${favoriteValue} this-favorite-button"/>
      </div>
    </article>`
        )
    })
}

function cookNow(event) {
  let recipeToCook = event.target.parentNode.parentNode.id;
  findRecipe(recipeToCook);
}

function findRecipe(want) {
  let thisRecipe = allRecipes.find(recipe => recipe.id === parseInt(want));
  pantry.checkItemStock(thisRecipe);
}

function displayInstructions() {
  console.log('DISPLAY')
}