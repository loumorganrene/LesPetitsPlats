import {
    RecipeCard
} from "../templates/RecipeTemplate.js";
import {
    DropdownList
} from "../templates/DropdownTemplate.js";

// DOM Element
const $recipesWrapper = document.querySelector('#recipes-list')
const searchbar = document.querySelector('.searchbar')
const $ingredientsWrapper = document.querySelector('#ingredients .dropdown-menu')
const $appliancesWrapper = document.querySelector('#appareils .dropdown-menu')
const $ustensilsWrapper = document.querySelector('#ustensils .dropdown-menu')
const ingredientsSearchbar = document.querySelector('.ingredient-searchbar')
const appliancesSearchbar = document.querySelector('.appliance-searchbar')
const ustensilsSearchbar = document.querySelector('.ustensils-searchbar')

// REGEX
const RegEx = /[^0-9<>()[\]\\.,;:\s@"][A-Za-zÀ-ž]{2,}/
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
    constructor(recipeData) {
        this._recipe = recipeData
        this._listTest = new Set(this._recipe
            .map(list => {
                return list._ingredientsList
            })
            .reduce((pre, cur) => pre.concat(cur)))
    }

    init() {
        /** Test */
        console.log("----From SearhHandler.js----")
        // console.log(this._recipe)
        // console.log(this._listTest)
        // console.log($appliancesWrapper)
        console.log(appliancesSearchbar)
        console.log("---------------------------")
        //Dropdowns init
        const DropdownTest = new DropdownList(this._recipe)
        $ingredientsWrapper.appendChild(
            DropdownTest.createIngredientDropdownList()
        )
        $appliancesWrapper.appendChild(
            DropdownTest.createApplianceDropdownList()
        )
        $ustensilsWrapper.appendChild(
            DropdownTest.createUstensilDropdownList()
        )

        //EventListener
        searchbar.addEventListener('input', (e) => {
            const userInput = e.target.value.toLowerCase()
            this.searchbar(userInput)
        })

        // ingredientsSearchbar.addEventListener('input', (e) => {
        //     console.log(e.target.value.toLowerCase())
        // })
        
        // appliancesSearchbar.addEventListener('input', (e) => {
        //     const userApplianceSelection = e.target.value.toLowerCase()
        // })

        // ustensilsSearchbar.addEventListener('input', (e) => {
        //     const userUstensilSelection = e.target.value.toLowerCase()
        // })
    }

    searchbar(userInput) {
        const filterRecipebyUserInput = this._recipe.filter(recipe => {
            return Boolean(userInput.match(RegEx) &&
                recipe._ingredientsList.join().includes(userInput) ||
                recipe._directions.includes(userInput) ||
                recipe._name.toLowerCase().includes(userInput))
        })
        $recipesWrapper.innerHTML = ""
        createCards(filterRecipebyUserInput)
        this.dropdownHandler(filterRecipebyUserInput)

        ingredientsSearchbar.addEventListener('input', (e) => {
            const userIngredientInput = e.target.value.toLowerCase()
            this.tagHandler(filterRecipebyUserInput, userIngredientInput)
        })

        appliancesSearchbar.addEventListener('input', (e) => {
            const userApplianceSelection = e.target.value.toLowerCase()
            this.tagHandler(filterRecipebyUserInput, userApplianceSelection)
        })

        ustensilsSearchbar.addEventListener('input', (e) => {
            const userUstensilSelection = e.target.value.toLowerCase()
            this.tagHandler(filterRecipebyUserInput, userUstensilSelection)
        })
    }

    dropdownHandler(recipeData) {
        const DropdownTest = new DropdownList(recipeData)
        $ingredientsWrapper.appendChild(
            DropdownTest.createIngredientDropdownList()
        )
        $appliancesWrapper.appendChild(
            DropdownTest.createApplianceDropdownList()
        )
        $ustensilsWrapper.appendChild(
            DropdownTest.createUstensilDropdownList()
        )
    }

    tagHandler(recipeData, item) {
        const DropdownAdvanced = new DropdownList(recipeData, item)
        $ingredientsWrapper.appendChild(
            DropdownAdvanced.createAdvancedIngredientList()
        )
        $appliancesWrapper.appendChild(
            DropdownAdvanced.createAdvancedApplianceList()
        )
        $ustensilsWrapper.appendChild(
            DropdownAdvanced.createAdvancedUstensilList()
        )
    }
}