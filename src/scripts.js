var recipeCardSection = document.querySelector('.recipe-card-section');

function instantiateRecipes() {
    let recipes = [];
    for (let i = 0; i < recipeData.length; i++) {
        let recipe = new Recipe(recipeData[i])
        recipes.push(recipe)
    }
    return recipes;
};

function displayRecipeCards() {
    instantiateRecipes();
    allRecipes = instantiateRecipes();
    for (let i = 0; i < allRecipes.length; i++) {
        recipeCardSection.insertAdjacentHTML('beforeend',
    `<article>
      <img class="food-image" src="${allRecipes[i].image}" alt="food">
      <p class="recipe-name">${allRecipes[i].name}</p>
      <div class="recipe-list">
        <ul class="recipe-ingredients-list>${allRecipes[i].ingredients}</ul>
        <ol class="recipe-instructions-list>${allRecipes[i].instructions}</ol>
      </div>
      <div class="card-footer">
        <img class="cook-icon" src="https://cdn3.iconfinder.com/data/icons/rounded-white-housekeeping/139/Cooking-RoundedWhite-512.png" alt=“Cook icon”>
        <img class="favorite-icon" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt=“Favorite icon”>
      </div>
    </article>`
        )
    }
};

window.onload = displayRecipeCards();
