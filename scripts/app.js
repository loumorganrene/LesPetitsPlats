import { recipes } from "../data/recipes.js";
import { Recipe } from "./models/RecipesModel.js";

class App {
    constructor() {
        
    }
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        recipes
        .forEach(recipe => {
            const recipeData = new Recipe(recipe)
            console.log(recipeData)
        })
    }
}

const app = new App()
app.main()