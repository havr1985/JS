const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => printRecipes(data));

function printRecipes({recipes}){
    for (const recipe of recipes) {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipeWrap')
        container.appendChild(recipeDiv);
        printRecipe(recipe, recipeDiv);
    }
}

function printRecipe(recipe, recipeDiv) {
    for (const recipeKey in recipe) {
        if (recipeKey === 'ingredients') {
           const ingredientList = document.createElement('ul');
           ingredientList.innerText = 'Ingredients:'
            recipeDiv.appendChild(ingredientList);
            printIngredients(recipe[recipeKey], ingredientList);
        } else if (recipeKey === 'image') {
           const img = document.createElement('img');
           img.src = `${recipe[recipeKey]}`;
           recipeDiv.appendChild(img);
        } else {
            const p = document.createElement('p');
            p.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
            recipeDiv.appendChild(p);
        }
    }
}

function printIngredients(ingredients, ingredientList) {
    for (const ingredient of ingredients) {
        const li = document.createElement('li');
        li.innerText = `${ingredient}`;
        ingredientList.appendChild(li);
    }
}