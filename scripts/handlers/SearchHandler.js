import {
    createCards
} from '../utils/CreateCard.js';
import {
    $ingredientsWrapper,
    $appliancesWrapper,
    $ustensilsWrapper,
    createDropdown
} from '../utils/CreateDropdown.js';
import {
    createTag,
    removeTagWrapper
} from '../templates/TagTemplate.js';
import {
    resetInput,
    norecipeMessage
} from '../utils/Utils.js';
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
        $ingredientsWrapper.addEventListener("click", item => {
            if (item.target.closest('li')) {
                const userSelection = item.target.innerHTML
                this.addTag('ingredients', userSelection)
                this.searchUpdate()
                //tagRemove init
                $tagWrapper.addEventListener("click", tag => {
                    tag.target.closest('.tag').remove()
                    this.removeTag('ingredients', tag.target.closest('.tag').textContent)
                    removeTagWrapper()
                    this.searchUpdate()
                })
            }
        })
        $appliancesWrapper.addEventListener("click", item => {
            if (item.target.closest('li')) {
                const userSelection = item.target.innerHTML
                this.addTag('appliances', userSelection)
                document.querySelector(".tag:last-child").classList.add('green-tag')
                this.searchUpdate()
                //tagRemove init
                $tagWrapper.addEventListener("click", tag => {
                    tag.target.closest('.tag').remove()
                    this.removeTag('appliances', tag.target.closest('.tag').textContent)
                    removeTagWrapper()
                    this.searchUpdate()
                })
            }
        })
        $ustensilsWrapper.addEventListener("click", item => {
            if (item.target.closest('li')) {
                const userSelection = item.target.innerHTML
                this.addTag('ustensils', userSelection)
                document.querySelector(".tag:last-child").classList.add('red-tag')
                this.searchUpdate()
                //tagRemove init
                $tagWrapper.addEventListener("click", tag => {
                    tag.target.closest('.tag').remove()
                    this.removeTag('ustensils', tag.target.closest('.tag').textContent)
                    removeTagWrapper()
                    this.searchUpdate()
                })
            }
        })
    }
    /**
     * @returns {HTMLDOMElements}
     */
    searchUpdate() {
        this.mainSearchbar(this._recipe, this._searchState.main)
        this.ingredientTagSelection(this.finalSearchResult, this._searchState.ingredients)
        this.applianceTagSelection(this.finalSearchResult, this._searchState.appliances)
        this.ustensilTagSelection(this.finalSearchResult, this._searchState.ustensils)

        if (this.finalSearchResult.length > 0) {
            createDropdown(this.finalSearchResult)
            createCards(this.finalSearchResult)
        } else {
            norecipeMessage()
        }
    }
    /**
     * @param {Recipe[]} recipeData
     * @param {string} userInput 
     */
    mainSearchbar(recipeData, userInput) {
        const searchFilter = []
        if (userInput.match(RegEx)) {
            for (let i = 0; i < recipeData.length; i++) {
                if (recipeData[i]._ingredientsList.join().includes(userInput) ||
                    recipeData[i]._directions.includes(userInput) ||
                    recipeData[i]._name.toLowerCase().includes(userInput)) {
                    searchFilter.push(recipeData[i])
                }
            }
            this.finalSearchResult = searchFilter
        } else {
            this.finalSearchResult = recipeData
        }
    }
    /**
     * @param {Recipe[]} recipeData
     * @param {string} userInput 
     */
    ingredientTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return userSelection.every(ing => recipe._ingredientsList.join().toLowerCase().includes(ing.toLowerCase()))
        })
        resetInput()
        this.finalSearchResult = tagFilter
    }
    /**
     * @param {Recipe[]} recipeData
     * @param {string} userInput 
     */
    applianceTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return recipe._appliance.toLowerCase().includes(userSelection)
        })
        resetInput()
        this.finalSearchResult = tagFilter
    }
    /**
     * @param {Recipe[]} recipeData
     * @param {string} userInput 
     */
    ustensilTagSelection(recipeData, userSelection) {
        const tagFilter = recipeData.filter(recipe => {
            return recipe._ustensils.join().includes(userSelection)
        })
        resetInput()
        this.finalSearchResult = tagFilter
    }
    /**
     * @param {'ingredients' | 'ustensils' | 'appliances'} type 
     * @param {string} tag 
     */
    addTag(type, tag) {
        if (!this._searchState[type].includes(tag)) {
            this._searchState[type].push(tag)
            createTag(tag)
        }
    }
    /**
     * @param {'ingredients' | 'ustensils' | 'appliances'} type 
     * @param {string} tag 
     */
    removeTag(type, tag) {
        this._searchState[type] = this._searchState[type].filter(i => i !== tag)
    }
}