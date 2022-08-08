import { recipes } from "../data/recipes.js";
import { SearchHandler } from "./handlers/Search.js";
import { Recipe } from "./models/RecipesModel.js";
import { RecipeCard } from "./templates/RecipeTemplate.js";
const $recipesWrapper = document.querySelector('#recipes-list')

/**
 * 
 * @param {Recipe[]} recipes 
 */
function createCards(recipes) {
    recipes.forEach(recipeData => {
        const Template = new RecipeCard(recipeData)
        $recipesWrapper.appendChild(
            Template.createRecipeCard()
        )
    })
}

class App {
    constructor() {
        // this.$recipesWrapper = document.querySelector('#recipes-list')
    }
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        const recipeData = recipes.map(recipe => new Recipe(recipe))
        // console.log(recipeData)
        createCards(recipeData);

        const search = new SearchHandler(recipeData)
            search.init()
            search.searchbarHandler()

        createCards(recipeData)
            /*const Template = new RecipeCard(recipeData)
            this.$recipesWrapper.appendChild(
                Template.createRecipeCard()
            )
            const search = new SearchHandler(recipeData)
            search.init()
            search.searchbarHandler()*/
            

        // console.log(recipes)

    }
}

const app = new App()
app.main()