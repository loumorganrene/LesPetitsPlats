import { Recipe } from "../models/RecipesModel.js";
export class DropdownList {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
        this._ingredientsList = this._recipe
                                .map(list => {return list._ingredientsList})
                                .reduce((pre, cur) => pre.concat(cur))
                                .slice().sort(function(a,b){return a > b})
                                .reduce(function(a,b){if (a.slice(-1)[0] !== b) a.push(b);return a;},[])
    }

    /**
     * @returns {HTMLDOMElements}
     */
    createDropdownList() {
        console.log("----DropdownTemplate.js----")
        console.log(this._recipe)
        console.log(this._ingredientsList)
        console.log("---------------------------")
        const docFrag = document.createDocumentFragment()
        const $wrapper = document.querySelector('#ingredients ul')

        const item = this._ingredientsList
                .map(element => {return `<li>${element}</li>`})
                .join('')
        //     return `<li>${i.ingredient}</li>`
        // }).join('')       
        
        const dom = `${item}`

        $wrapper.innerHTML = dom
        docFrag.appendChild($wrapper)

        return docFrag
    }
}