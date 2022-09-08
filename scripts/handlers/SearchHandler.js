import {
    createCards
} from '../Utils/CreateCard.js';
import {
    $ingredientsWrapper,
    $appliancesWrapper,
    $ustensilsWrapper,
    createDropdown
} from '../Utils/CreateDropdown.js';
// DOM Element
const $searchbarWrapper = document.querySelector('.searchbar-wrapper')
const mainSearchbar = document.querySelector('.searchbar')

// REGEX
const RegEx = /[^0-9<>()[\]\\.,;:\s@"][A-Za-zÀ-ž]{2,}/

export class SearchHandler {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
        this._searchState = {
            main: '',
            ingredients: [],
            ustensils: [],
            appliances: [],
        }
        this.finalSearchResult = this._recipe;
    }

    init() {
        //mainSearch init
        mainSearchbar.addEventListener('input', e => {
            const userInput = e.target.value.toLowerCase()
            this._searchState.main = userInput
            this.searchUpdate(userInput)
            console.log(this._searchState)
        })
        //tagSearch init
        $ingredientsWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            this._searchState.ingredients.push(userSelection)
            this.searchUpdate(userSelection)
            console.log(this._searchState.ingredients)
        })
        $appliancesWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            this._searchState.appliances.push(userSelection)
            this.searchUpdate(userSelection)
            console.log(this._searchState.appliances)
        })
        $ustensilsWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            this._searchState.ustensils.push(userSelection)
            this.searchUpdate(userSelection)
            console.log(this._searchState.ustensils)
        })
    }

    searchUpdate(searchState) {
        const mainSearchRecipesList = this.mainSearchbar(this._recipe, this._searchState.main)
        const ingredientTagsRecipesList = this.ingredientTagSelection(this.finalSearchResult, this._searchState.ingredients)
        const applianceTagsRecipesList = this.applianceTagSelection(this.finalSearchResult, this._searchState.appliances)
        const ustensilTagsRecipesList = this.ustensilTagSelection(this.finalSearchResult, this._searchState.ustensils)

        createDropdown(this.finalSearchResult)
        createCards(this.finalSearchResult)
        console.log(this.finalSearchResult)
        console.log(this._searchState)
    }

    mainSearchbar(recipeData, userInput) {
        const searchFilter = recipeData.filter(recipe => {
            return Boolean(userInput.match(RegEx) &&
                recipe._ingredientsList.join().includes(userInput) ||
                recipe._directions.includes(userInput) ||
                recipe._name.toLowerCase().includes(userInput))
        })
        this.finalSearchResult = searchFilter
        return searchFilter
    }

    ingredientTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._ingredientsList.join().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
        return tagFilter
    }

    applianceTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._appliance.toLowerCase().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
        return tagFilter
    }

    ustensilTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._ustensils.join().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
        return tagFilter
    }

}