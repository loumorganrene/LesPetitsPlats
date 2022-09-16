import {
    removeDuplicates
} from '../Utils/Utils.js';
// DOM Element
export const $ingredientsWrapper = document.querySelector('#ingredients ul')
export const $appliancesWrapper = document.querySelector('#appareils ul')
export const $ustensilsWrapper = document.querySelector('#ustensils ul')
export class DropdownList {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData

        this._ingredientsList = removeDuplicates(this._recipe
            .map(list => list._ingredientsList)
            //concat all-arrays items in one
            .reduce((pre, cur) => pre.concat(cur))
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            }))
            console.log(this._ingredientsList)
        this._appliancesList = removeDuplicates(this._recipe
            .map(list => list._appliance.toLowerCase())
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            }))

        this._ustensilsList = removeDuplicates(this._recipe
            .map(list => list._ustensils)
            //concat all-arrays items in one
            .reduce((pre, cur) => pre.concat(cur))
            //all items in lowercase
            .map(item => item.toLowerCase())
            // alphabetical order
            .sort(function (a, b) {
                return a > b
            })
        )
    }
    /**
     * @returns {HTMLDOMElements}
     */
    createIngredientDropdownList(query = '') {
        const docFrag = document.createDocumentFragment()
        /** Ingredient dropdown */
        const ingredient = this._ingredientsList
            .filter(item => item.includes(query))
            .map(element => {
                return `<li class="ingredient">${element}</li>`
            })
            .join('')
        const ingredientDropdown = `${ingredient}`

        $ingredientsWrapper.innerHTML = ingredientDropdown
        docFrag.appendChild($ingredientsWrapper)

        return docFrag
    }
    /**
     * @returns {HTMLDOMElements}
     */
    createApplianceDropdownList(query = '') {
        const docFrag = document.createDocumentFragment()
        /** Appliance dropdown */
        const appliance = this._appliancesList
            .filter(item => item.includes(query))
            .map(element => {
                return `<li class="appliance">${element}</li>`
            })
            .join('')
        const applianceDropdown = `${appliance}`

        $appliancesWrapper.innerHTML = applianceDropdown
        docFrag.appendChild($appliancesWrapper)

        return docFrag
    }
    /**
     * @returns {HTMLDOMElements}
     */
    createUstensilDropdownList(query = '') {
        const docFrag = document.createDocumentFragment()
        /** Ustensil dropdown */
        const ustensil = this._ustensilsList
            .filter(item => item.includes(query))
            .map(element => {
                return `<li class="ustensil">${element}</li>`
            })
            .join('')
        const ustensilDropdown = `${ustensil}`

        $ustensilsWrapper.innerHTML = ustensilDropdown
        docFrag.appendChild($ustensilsWrapper)

        return docFrag
    }
}