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
import {
    resetInput
} from '../Utils/Utils.js';
// DOM Element
export const mainSearchbar = document.querySelector('.searchbar')
export const $tagWrapper = document.querySelector('#tag-list')

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
        /** reset input */
        mainSearchbar.value = ''
        resetInput()
        /** mainSearch init */
        mainSearchbar.addEventListener('input', e => {
            const userInput = e.target.value.toLowerCase()
            this._searchState.main = userInput
            this.searchUpdate()
        })
        /** tagSearch init */
        $ingredientsWrapper.addEventListener("click", e => {
            if (e.target.closest('li')) {
                const userSelection = e.target.innerHTML
                createTag(userSelection)
                this._searchState.ingredients = userSelection
                this.searchUpdate()
                //tagRemove init
                $tagWrapper.addEventListener("click", e => {
                    e.target.closest('.tag').remove()
                    this._searchState.ingredients = ""
                    if ($tagWrapper.querySelector('li') == null) {
                        $tagWrapper.style.display = "none"
                    }
                    this.searchUpdate()
                })
            }
            return
        })
        $appliancesWrapper.addEventListener("click", e => {
            if (e.target.closest('li')) {
                const userSelection = e.target.closest('li').innerHTML
                createTag(userSelection)
                document.querySelector(".tag:last-child").style.backgroundColor = "#68D9A4"
                this._searchState.appliances = userSelection
                this.searchUpdate()
                // tagRemove init
                $tagWrapper.addEventListener("click", e => {
                    e.target.closest('.tag').remove()
                    this._searchState.appliances = ""
                    if ($tagWrapper.querySelector('li') == null) {
                        $tagWrapper.style.display = "none"
                        console.log($tagWrapper.querySelector('li'))
                    }
                    this.searchUpdate()
                })
            }
            return
        })
        $ustensilsWrapper.addEventListener("click", e => {
            if (e.target.closest('li')) {
                const userSelection = e.target.closest('li').innerHTML
                createTag(userSelection)
                document.querySelector(".tag:last-child").style.backgroundColor = "#dc3545"
                this._searchState.ustensils = userSelection
                this.searchUpdate()
                // tagRemove init
                $tagWrapper.addEventListener("click", e => {
                    e.target.closest('.tag').remove()
                    this._searchState.ustensils = ""
                    if ($tagWrapper.querySelector('li') == null) {
                        $tagWrapper.style.display = "none"
                        console.log($tagWrapper.querySelector('li'))
                    }
                    this.searchUpdate()
                })
            }
            return
        })
    }

    searchUpdate() {
        this.mainSearchbar(this._recipe, this._searchState.main)
        this.ingredientTagSelection(this.finalSearchResult, this._searchState.ingredients)
        this.applianceTagSelection(this.finalSearchResult, this._searchState.appliances)
        this.ustensilTagSelection(this.finalSearchResult, this._searchState.ustensils)
        createDropdown(this.finalSearchResult)
        createCards(this.finalSearchResult)
    }

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
        resetInput()
        this.finalSearchResult = tagFilter
    }

    applianceTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._appliance.toLowerCase().includes(userSelection))
        })
        resetInput()
        this.finalSearchResult = tagFilter
    }

    ustensilTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return Boolean(recipe._ustensils.join().includes(userSelection))
        })
        resetInput()
        this.finalSearchResult = tagFilter
    }
}