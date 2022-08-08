import { recipes } from "../data/recipes.js";
import { SearchHandler } from "./handlers/Search.js";
import { Recipe } from "./models/RecipesModel.js";
import { createCards } from "./handlers/Search.js";
class App {
    constructor() {
        // this.$recipesWrapper = document.querySelector('#recipes-list')
    }
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        const recipeData = recipes.map(recipe => new Recipe(recipe))
        createCards(recipeData);

        const search = new SearchHandler(recipeData)
            search.init()
            search.searchbarHandler()
    }
}

const app = new App()
app.main()