export class RecipeCard {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
        this._ingredientsData = this._recipe._ingredientsData
    }
    /**
     * @returns {HTMLDOMElements}
     */
    createRecipeCard() {
        const docFrag = document.createDocumentFragment();
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('col')
        const ingredient = this._ingredientsData.map(i => {
            // console.log(i)
            const ingredientName = `<strong>${i.ingredient}</strong>`
            const ingredientQuantity = `${i.quantity}`
            const ingredientUnit = `${i.unit}`
            if (i.quantity && i.unit) {
                return `<li>${ingredientName}: ${ingredientQuantity} ${ingredientUnit}</li>`
            } else if (i.quantity) {
                return `<li>${ingredientName}: ${ingredientQuantity}</li>`
            } else {
                return `<li>${ingredientName}</li>`
            }
        }).join('')
        const dom = `
                    <div class="card h-100 shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#C7BEBE"></rect>
                        </svg>
                        <div class="card-body">
                            <div class="title row px-1">
                                <h2 class="col-9 fw-semibold fs-5">${this._recipe._name}</h2>
                                <p class="col text-end fw-bold"><i class="bi bi-alarm fw-bolder"></i> ${this._recipe._duration}min</p>
                            </div>
                            <div class="card-content row row-cols-1 row-cols-sm-2 g-1 p-1 mb-4">
                                <ul id="recipe-ingredients" class="col list-unstyled">
                                    ${ingredient}
                                </ul>
                                <p id="recipe-instruction" class="col">${this._recipe._directions}</p>
                            </div>
                        </div>
                    </div>
        `
        $wrapper.innerHTML = dom
        docFrag.appendChild($wrapper)
        return docFrag
    }
}