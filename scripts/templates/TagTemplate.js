import {
    removeDuplicates
} from '../Utils/ArrayUtils.js';

// DOM Element
const $ingredientsWrapper = document.querySelector('#ingredients ul')
const $appliancesWrapper = document.querySelector('#appareils ul')
const $ustensilsWrapper = document.querySelector('#ustensils ul')
export class TagTemplate {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData, item) {
        this._recipe = recipeData
        this._item = item
        this._ingredientsList = removeDuplicates(this._recipe
            .map(list => {
                return list._ingredientsList
            })
            //concat all-arrays items in one
            .reduce((pre, cur) => pre.concat(cur))
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            }));

        this._appliancesList = removeDuplicates(this._recipe
            .map(list => {
                return list._appliance.toLowerCase()
            })
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            }))

        this._ustensilsList = removeDuplicates(this._recipe
            .map(list => {
                return list._ustensils
            })
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
    createAdvancedIngredientList() {
        const docFrag = document.createDocumentFragment()
        /** Ingredient dropdown */
        const ingredient = this._ingredientsList
            .filter(item => item.includes(this._item))
            .map(element => {
                return `<li>${element}</li>`
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
    createAdvancedApplianceList() {
        const docFrag = document.createDocumentFragment()
        /** Appliance dropdown */
        const appliance = this._appliancesList
            .filter(item => item.includes(this._item))
            .map(element => {
                return `<li>${element}</li>`
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
    createAdvancedUstensilList() {
        /** Test */
        console.log("----From DropdownTemplate.js----")
        console.log(this._ustensilsList)
        console.log("-------------------")
        const docFrag = document.createDocumentFragment()
        /** Appliance dropdown */
        const ustensil = this._ustensilsList
            .filter(item => item.includes(this._item))
            .map(element => {
                return `<li>${element}</li>`
            })
            .join('')
        const ustensilDropdown = `${ustensil}`

        $ustensilsWrapper.innerHTML = ustensilDropdown
        docFrag.appendChild($ustensilsWrapper)

        return docFrag
    }

}