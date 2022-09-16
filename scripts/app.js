import {
    recipes
} from "../data/recipes.js";
import {
    Recipe
} from "./models/RecipesModel.js";
import {
    createDropdown
} from './Utils/CreateDropdown.js';
import {
    createCards
} from './Utils/CreateCard.js';
import {
    SearchHandler
} from "./handlers/SearchHandler.js";
class App {
    constructor() {}
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        const recipeData = recipes.map(recipe => new Recipe(recipe))
        createDropdown(recipeData)
        createCards(recipeData)
        const search = new SearchHandler(recipeData)
        search.init()
    }
}
const app = new App()
app.main()