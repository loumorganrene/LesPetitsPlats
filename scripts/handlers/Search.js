import { RecipeCard } from "../templates/RecipeTemplate.js";
// DOM Element
const $recipesWrapper = document.querySelector('#recipes-list')
const searchbar = document.querySelector('.searchbar')
// REGEX
const RegEx = /[^0-9<>()[\]\\.,;:\s@"][A-Za-z]{2,}/
/**
 * 
 * @param {Recipe[]} recipes 
 */
export function createCards(recipes) {
    recipes.forEach(recipeData => {
        const Template = new RecipeCard(recipeData)
        $recipesWrapper.appendChild(
            Template.createRecipeCard()
        )
    })
}
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
        const filterRecipebyUserInput = this._recipe.filter(recipe => 
            { 
                return Boolean(userInput.match(RegEx) &&
                recipe._ingredientsList.join().includes(userInput) ||
                recipe._directions.includes(userInput) ||
                recipe._name.toLowerCase().includes(userInput))
            })
            $recipesWrapper.innerHTML = ""
            createCards(filterRecipebyUserInput)
            // console.log(filterRecipebyUserInput)
    }

    // dropdownHandler() {

    // }

    // tagHandler() {

    // }
}