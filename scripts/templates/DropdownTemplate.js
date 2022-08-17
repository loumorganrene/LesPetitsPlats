// DOM Element
const $ingredientsWrapper = document.querySelector('#ingredients ul')
const $appliancesWrapper = document.querySelector('#appareils ul')
const $ustensilsWrapper = document.querySelector('#ustensils ul')
export class DropdownList {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
        this._ingredientsList = this._recipe
            .map(list => {
                return list._ingredientsList
            })
            //concat all-arrays items in one
            .reduce((pre, cur) => pre.concat(cur))
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            })
            //deduplicate item
            .reduce(function (a, b) {
                if (a.slice(-1)[0] !== b) a.push(b);
                return a;
            }, [])
        this._appliancesList = this._recipe
            .map(list => {
                return list._appliance
            })
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            })
            //deduplicate item
            .reduce(function (a, b) {
                if (a.slice(-1)[0] !== b) a.push(b);
                return a;
            }, [])
        this._ustensilsList = this._recipe
            .map(list => {
                return list._ustensils
            })
            //concat all-arrays items in one
            .reduce((pre, cur) => pre.concat(cur))
            //alphabetical order
            .sort(function (a, b) {
                return a > b
            })
            //deduplicate item
            .reduce(function (a, b) {
                if (a.slice(-1)[0] !== b) a.push(b);
                return a;
            }, [])
    }

    /**
     * @returns {HTMLDOMElements}
     */
    createIngredientDropdownList() {
        /** Test */
        console.log("----#1 - DropdownTemplate.js----")
        console.log(this._recipe)
        console.log(this._ingredientsList)
        console.log($ingredientsWrapper)
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
        console.log("----#2 - DropdownTemplate.js----")
        console.log(this._recipe)
        console.log(this._appliancesList)
        console.log($appliancesWrapper)
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
        console.log("----#3 - DropdownTemplate.js----")
        console.log(this._recipe)
        console.log(this._ustensilsList)
        console.log($ustensilsWrapper)

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
}