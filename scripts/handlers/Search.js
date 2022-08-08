const searchbar = document.querySelector('.searchbar')
const RegEx = /[^0-9<>()[\]\\.,;:\s@"][A-Za-z]{2,}/

export class SearchHandler {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
     constructor (recipeData) {
        this._recipe = recipeData
        this._completeList = this._recipe.map(element => element._ingredientsList + "," + element._appliance + "," + element._ustensils)
    }

    init() {
        //EventListener
        searchbar.addEventListener('input', (e) => {
            const userInput = e.target.value.toLowerCase()
            this.searchbarHandler(userInput)
        })
    }

    searchbarHandler(userInput) {
        console.log(this._recipe[1]._ingredientsList)
        // let test = this._recipe.map(recipe => {return recipe._ingredientsList.includes("concombre")})
        let test =  this._recipe.map(recipe => 
            { 
                if (userInput.match(RegEx) &&
                    recipe._ingredientsList.join().includes(userInput) ||
                    recipe._ustensils.includes(userInput) ||
                    recipe._appliance.toLowerCase().includes(userInput) ||
                    recipe._name.toLowerCase().includes(userInput)
                    )
                    {return recipe}
                else return 0
            })
        console.log(test)
    }

    // dropdownHandler() {

    // }

    // tagHandler() {

    // }
}