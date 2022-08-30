import {
    createCards, $recipesWrapper
} from '../Utils/CreateCard.js';
import {
    DropdownList
} from "../templates/DropdownTemplate.js";
import { TagTemplate } from '../templates/TagTemplate.js';
// DOM Element
const $searchbarWrapper = document.querySelector('.searchbar-wrapper')
const searchbar = document.querySelector('.searchbar')
const $ingredientsWrapper = document.querySelector('#ingredients .dropdown-menu')
const $appliancesWrapper = document.querySelector('#appareils .dropdown-menu')
const $ustensilsWrapper = document.querySelector('#ustensils .dropdown-menu')
const ingredientsSearchbar = document.querySelector('.ingredient-searchbar')
const appliancesSearchbar = document.querySelector('.appliance-searchbar')
const ustensilsSearchbar = document.querySelector('.ustensils-searchbar')

// REGEX
const RegEx = /[^0-9<>()[\]\\.,;:\s@"][A-Za-zÀ-ž]{2,}/

export class SearchHandler {
    /**
     * @param {import('./models/RecipeModel').RecipeModel} recipeData 
     */
    constructor(recipeData) {
        this._recipe = recipeData
    }

    init() {
        /** Test */
        console.log("----From SearhHandler.js----")
        // console.log(this._recipe)
        // console.log(this._listTest)
        // console.log($appliancesWrapper)
        // console.log(appliancesSearchbar)
        console.log("---------------------------")
        //Dropdowns init
        const Dropdown = new DropdownList(this._recipe)
        $ingredientsWrapper.appendChild(
            Dropdown.createIngredientDropdownList()
        )
        $appliancesWrapper.appendChild(
            Dropdown.createApplianceDropdownList()
        )
        $ustensilsWrapper.appendChild(
            Dropdown.createUstensilDropdownList()
        )
        //EventListeners
        searchbar.addEventListener('input', (e) => {
            const userInput = e.target.value.toLowerCase()
            this.searchbar(userInput)
        })
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
    }

    dropdownHandler(recipeData) {
        const Dropdown = new DropdownList(recipeData)
        $ingredientsWrapper.appendChild(
            Dropdown.createIngredientDropdownList()
        )
        $appliancesWrapper.appendChild(
            Dropdown.createApplianceDropdownList()
        )
        $ustensilsWrapper.appendChild(
            Dropdown.createUstensilDropdownList()
        )

        ingredientsSearchbar.addEventListener('input', e => {
            const ingredientInput = e.target.value.toLowerCase()
            const DropdownAdvanced = new TagTemplate(recipeData, ingredientInput)
            $ingredientsWrapper.appendChild(
                DropdownAdvanced.createAdvancedIngredientList()
            )
        })
        appliancesSearchbar.addEventListener('input', e => {
            const applianceInput = e.target.value.toLowerCase()
            const DropdownAdvanced = new TagTemplate(recipeData, applianceInput)
            $appliancesWrapper.appendChild(
                DropdownAdvanced.createAdvancedApplianceList()
            )
        })
        ustensilsSearchbar.addEventListener('input', e => {
            const ustensilInput = e.target.value.toLowerCase()
            const DropdownAdvanced = new TagTemplate(recipeData, ustensilInput)
            $ustensilsWrapper.appendChild(
                DropdownAdvanced.createAdvancedUstensilList()
            )
        })

        //Tag Handler
        $ingredientsWrapper.addEventListener("click", e => {
            const userSelect = e.target.innerHTML
            $searchbarWrapper.setAttribute("data-tag-visible", "true");
            $searchbarWrapper.setAttribute("data-tag", userSelect);
            console.log(userSelect)
        })
        $appliancesWrapper.addEventListener("click", e => {
            const userSelect = e.target.innerHTML
            $searchbarWrapper.setAttribute("data-tag-visible", "true");
            $searchbarWrapper.setAttribute("data-tag", userSelect);
            console.log(userSelect)
        })
        $ustensilsWrapper.addEventListener("click", e => {
            const userSelect = e.target.innerHTML
            $searchbarWrapper.setAttribute("data-tag-visible", "true");
            $searchbarWrapper.setAttribute("data-tag", userSelect);
            console.log(userSelect)
        })
    }
}