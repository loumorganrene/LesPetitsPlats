import {
    recipes
} from "../data/recipes.js";
import {
    SearchHandler
} from "./handlers/SearchHandler.js";
import {
    Recipe
} from "./models/RecipesModel.js";
import {
    createCards
} from "./handlers/SearchHandler.js";
class App {
    constructor() {}
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        const recipeData = recipes.map(recipe => new Recipe(recipe))
        const listTest = new Set(recipeData.map(list => {
            return list._ingredientsList
        }).reduce((pre, cur) => pre.concat(cur)))
        
        /** Test */
        console.log("----From App.js----")
        console.log(recipeData)
        console.log(listTest)
        console.log("-------------------")

        createCards(recipeData)

        const search = new SearchHandler(recipeData)
        search.init()
    }
}
const app = new App()
app.main()