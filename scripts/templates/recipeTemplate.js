export class RecipeCard {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
        this._ingredientsData = this._recipe.ingredientsData
        // console.log(this._recipe.ingredientsData)
    }

    /**
     * @returns {HTMLDOMElements}
     */
    createRecipeCard() {
        const docFrag = document.createDocumentFragment();
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('col')
        
        const ingredient = this._ingredientsData.map(i => {
            console.log(i)
            const ingredientName = `<strong>${i.ingredient}</strong>`
            const ingredientQuantity = `${i.quantity}`
            const ingredientUnit = `${i.unit}`
            if (i.quantity && i.unit) {
                return `<li>${ingredientName}: ${ingredientQuantity}${ingredientUnit}</li>`
            } else if (i.quantity) {
                return `<li>${ingredientName}: ${ingredientQuantity}</li>`
            } else {
                return `<li>${ingredientName}</li>`
            }
        })

        const dom =  `
                    <div class="card h-100 shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#c8bebd"></rect>
                        </svg>
                        <div class="card-body">
                            <div class="title row px-1">
                                <h2 class="col-9 fw-semibold fs-5">${this._recipe.name}</h2>
                                <p class="col text-end fw-bold"><i class="bi bi-alarm fw-bolder"></i> ${this._recipe.duration}min</p>
                            </div>
                            <div class="card-content row row-cols-1 row-cols-sm-2 g-1 p-1 mb-4">
                                <ul id="recipe-ingredients" class="col list-unstyled">
                                    ${ingredient}
                                </ul>
                                <p id="recipe-instruction" class="col">${this._recipe.directions}</p>
                            </div>
                        </div>
                    </div>
        `
        $wrapper.innerHTML = dom
        docFrag.appendChild($wrapper)

        return docFrag
    }
}

        // const docFrag = document.createDocumentFragment();
        // const $wrapper = document.createElement('article')
        // $wrapper.classList.add('col')

        // const cardContainer = document.createElement('div')
        // cardContainer.classList.add('card')
        // cardContainer.classList.add('h-100')
        // cardContainer.classList.add('shadow-sm')

        // const cardImage =
        //     `<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
        // role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        // <title>Placeholder</title>
        // <rect width="100%" height="100%" fill="#c8bebd"></rect>
        // </svg>`

        // const cardBody = document.createElement('div')
        // cardBody.classList.add('card-body')

        // /** recipe title **/
        // const recipeTitleContainer = document.createElement('div')
        // recipeTitleContainer.classList.add('title')
        // recipeTitleContainer.classList.add('row')
        // recipeTitleContainer.classList.add('px-1')

        // const recipeTitle = document.createElement('h2')
        // recipeTitle.classList.add('col-9')
        // recipeTitle.classList.add('fw-semibold')
        // recipeTitle.classList.add('fs-5')
        // recipeTitle.innerHTML = `${this._recipe.name}`

        // const recipeDuration = document.createElement('p')
        // recipeDuration.classList.add('col')
        // recipeDuration.classList.add('text-end')
        // recipeDuration.classList.add('fw-bold')
        // recipeDuration.innerHTML = `<i class="bi bi-alarm fw-bolder"></i> ${this._recipe.duration}min`
        // recipeTitleContainer.appendChild(recipeTitle)
        // recipeTitleContainer.appendChild(recipeDuration)
        // cardBody.appendChild(recipeTitleContainer)

        // /**recipe content**/
        // const recipeContentContainer = document.createElement('div')
        // recipeContentContainer.classList.add('card-content')
        // recipeContentContainer.classList.add('row')
        // recipeContentContainer.classList.add('row-cols-1')
        // recipeContentContainer.classList.add('row-cols-sm-2')
        // recipeContentContainer.classList.add('g-1')
        // recipeContentContainer.classList.add('p-1')
        // recipeContentContainer.classList.add('mb-4')

        // const recipeIngredients = document.createElement('ul')
        // recipeIngredients.setAttribute('id', 'recipe-ingredients')
        // recipeIngredients.classList.add('col')
        // recipeIngredients.classList.add('list-unstyled')
        
        // //ingredient quantity & unit factory
        // this._recipe.ingredientsData.forEach(ingredient => {
        //     const ingredientName = `<strong>${ingredient.ingredient}:</strong>`
        //     const ingredientQuantity = ` ${ingredient.quantity}`
        //     const ingredientUnit = ` ${ingredient.unit}`
        //     if (ingredient.quantity && ingredient.unit) {
        //         const ingredientContainer = document.createElement('li')
        //         ingredientContainer.innerHTML = ingredientName + ingredientQuantity + ingredientUnit
        //         recipeIngredients.appendChild(ingredientContainer)
        //     } else if (ingredient.quantity) {
        //         const ingredientContainer = document.createElement('li')
        //         ingredientContainer.innerHTML = ingredientName + ingredientQuantity
        //         recipeIngredients.appendChild(ingredientContainer)
        //     } else {
        //         const ingredientName = `<strong>${ingredient.ingredient}</strong>`
        //         const ingredientContainer = document.createElement('li')
        //         ingredientContainer.innerHTML = ingredientName
        //         recipeIngredients.appendChild(ingredientContainer)
        //     }
        // })
        // recipeContentContainer.appendChild(recipeIngredients)

        // const recipeInstruction = document.createElement('p')
        // recipeInstruction.setAttribute('id', 'recipe-instruction')
        // recipeInstruction.classList.add('col')
        // recipeInstruction.innerHTML = `${this._recipe.directions}`
        // recipeContentContainer.appendChild(recipeInstruction)
        // cardBody.appendChild(recipeContentContainer)

        // cardContainer.innerHTML = cardImage
        // cardContainer.appendChild(cardBody)

        // $wrapper.appendChild(cardContainer)
        // docFrag.appendChild($wrapper)