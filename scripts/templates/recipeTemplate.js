export class RecipeCard {
    /**
     * @param {Object} recipeData 
     */
    constructor (recipeData) {
        this._recipe = recipeData

    }
    /**
     * @returns {HTMLDOMElements}
     */
    createRecipeCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('col')
        // Push DocfragmentElement into 
        const recipeCard = `<div class="card h-100 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#c8bebd"></rect>
        </svg>
        <div class="card-body">
            <div class="title row">
            <h2 class="col-9 fw-semibold fs-5">${this._recipe.name}</h5>
                <p class="col text-end fw-bold"><i class="bi bi-alarm fw-bolder"></i> ${this._recipe.duration}min</p>
            </div>

            <div class="card-content row row-cols-1 row-cols-sm-2 g-1">

            <ul id="recipe-ingredients" class="col list-unstyled">
                <li><strong>${this._recipe.ingredientsData[0].ingredient}:</strong> ${this._recipe.ingredientsData[0].quantity} ${this._recipe.ingredientsData[0].unit}</li>
                <li><strong>${this._recipe.ingredientsData[1].ingredient}:</strong> ${this._recipe.ingredientsData[1].quantity} ${this._recipe.ingredientsData[1].unit}</li>
                <li><strong>${this._recipe.ingredientsData[2].ingredient}:</strong> ${this._recipe.ingredientsData[2].quantity} ${this._recipe.ingredientsData[2].unit}</li>
            </ul>

            <p id="recipe-instruction" class="col text-break">${this._recipe.directions}</p>
            </div>
        </div>
        </div>`
        $wrapper.innerHTML = recipeCard
    return $wrapper
    }
}
            //factory pattern to generate exact number of ingredient, displaying unit or quantity only if present in the data
            // <ul id="recipe-ingredients" class="col list-unstyled">
            //     <li>Ingredient: ${this._recipe.ingredientsData[0].ingredient} ${this._recipe.ingredientsData[0].quantity}</li>
            //     <li>Ingredient: ${this._recipe.ingredientsData[1].ingredient} ${this._recipe.ingredientsData[1].quantity}</li>
            //     <li>Ingredient: ${this._recipe.ingredientsData[2].ingredient} ${this._recipe.ingredientsData[2].quantity}</li>
            // </ul>