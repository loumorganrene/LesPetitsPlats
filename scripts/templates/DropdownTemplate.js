import { removeDuplicates } from '../utils.js';

// DOM Element
const $ingredientsWrapper = document.querySelector('#ingredients ul')
const $appliancesWrapper = document.querySelector('#appareils ul')
const $ustensilsWrapper = document.querySelector('#ustensils ul')
export class DropdownList {
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
            .reduce((pre, cur) => pre.concat(cur))
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
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            }))
    }

    /**
     * @returns {HTMLDOMElements}
     */
    createIngredientDropdownList() {
        /** Test */
        console.log("----#1 - DropdownTemplate.js----")
        console.log(this._recipe)
        console.log(this._ingredientsList)
        const docFrag = document.createDocumentFragment()
        /** Ingredient dropdown */
        const ingredient = this._ingredientsList
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
    createApplianceDropdownList() {
        /** Test */
        // console.log("----#2 - DropdownTemplate.js----")
        // console.log(this._recipe)
        // console.log(this._appliancesList)
        // console.log(this._appliancesList.filter(item => item.includes("a")).join())
        // console.log($appliancesWrapper)
        const docFrag = document.createDocumentFragment()
        /** Appliance dropdown */
        const appliance = this._appliancesList
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
    createUstensilDropdownList() {
        /** Test */
        // console.log("----#3 - DropdownTemplate.js----")
        // console.log(this._recipe)
        // console.log(this._ustensilsList)
        // console.log($ustensilsWrapper)

        const docFrag = document.createDocumentFragment()
        /** Ustensil dropdown */
        const ustensil = this._ustensilsList
            .map(element => {
                return `<li>${element}</li>`
            })
            .join('')
        const ustensilDropdown = `${ustensil}`

        $ustensilsWrapper.innerHTML = ustensilDropdown
        docFrag.appendChild($ustensilsWrapper)
        console.log("---------------------------")
        return docFrag
    }

    createAdvancedIngredientList() {
        // /** Test */
        // console.log("----#4 - DropdownTemplate.js----")
        // console.log(this._recipe)
        // console.log(this._ingredient)
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

    createAdvancedApplianceList() {
        // /** Test */
        // console.log("----#5 - DropdownTemplate.js----")
        // console.log(this._recipe)
        // console.log(this._appliancesList.filter(item => item.includes(this._appliance)))
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

    createAdvancedUstensilList() {
        // /** Test */
        // console.log("----#6 - DropdownTemplate.js----")
        // console.log(this._recipe)
        // console.log(this._ustensil)
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
