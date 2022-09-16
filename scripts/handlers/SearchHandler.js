import {
    createCards
} from '../Utils/CreateCard.js';
import {
    $ingredientsWrapper,
    $appliancesWrapper,
    $ustensilsWrapper,
    createDropdown
} from '../Utils/CreateDropdown.js';
import {
    createTag
} from '../templates/TagTemplate.js';
// DOM Element
export const mainSearchbar = document.querySelector('.searchbar')

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
        mainSearchbar.value = ""
        mainSearchbar.addEventListener('input', e => {
            const userInput = e.target.value.toLowerCase()
            this._searchState.main = userInput
            this.searchUpdate()
        })
        //tagSearch init
        $ingredientsWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            createTag(userSelection)
            this._searchState.ingredients = userSelection
            // this._searchState.ingredients.push(userSelection)
            this.searchUpdate()
        })

        $appliancesWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            createTag(userSelection)
            document.querySelector(".tag:last-child").style.backgroundColor = "#68D9A4"
            // this._searchState.appliances.push(userSelection)
            this._searchState.appliances = userSelection
            this.searchUpdate()
        })

        $ustensilsWrapper.addEventListener("click", e => {
            const userSelection = e.target.innerHTML
            createTag(userSelection)
            document.querySelector(".tag:last-child").style.backgroundColor = "#dc3545"
            // this._searchState.ustensils.push(userSelection)
            this._searchState.ustensils = userSelection
            this.searchUpdate()
        })
        // removeTag(e.target)
    }

    searchUpdate() {
        this.mainSearchbar(this._recipe, this._searchState.main)
        this.ingredientTagSelection(this.finalSearchResult, this._searchState.ingredients)
        this.applianceTagSelection(this.finalSearchResult, this._searchState.appliances)
        this.ustensilTagSelection(this.finalSearchResult, this._searchState.ustensils)

        createDropdown(this.finalSearchResult)
        createCards(this.finalSearchResult)
    }
    // $ingredientsWrapper.querySelector('li').remove(this._searchState.ingredients)
    mainSearchbar(recipeData, userInput) {
        const searchFilter = recipeData.filter(recipe => {
            return Boolean(userInput.match(RegEx) &&
                recipe._ingredientsList.join().includes(userInput) ||
                recipe._directions.includes(userInput) ||
                recipe._name.toLowerCase().includes(userInput))
        })
        this.finalSearchResult = searchFilter
    }

    ingredientTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._ingredientsList.join().toLowerCase().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
        console.log(this.finalSearchResult)
    }

    applianceTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._appliance.toLowerCase().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
    }

    ustensilTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._ustensils.join().includes(userSelection))
        })
        this.finalSearchResult = tagFilter
    }
}