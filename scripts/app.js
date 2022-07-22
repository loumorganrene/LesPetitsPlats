import { recipes } from "../data/recipes.js";
import { Recipe } from "./models/RecipesModel.js";
import { RecipeCard } from "./templates/recipeTemplate.js";

class App {
    constructor() {
        this.$recipesWrapper = document.querySelector('#recipes-list')
    }
    /**
     * @returns {HTMLDOMElements}
     */
    async main() {
        recipes
        .forEach(recipe => {
            const recipeData = new Recipe(recipe)
            const Template = new RecipeCard(recipeData)
            this.$recipesWrapper.appendChild(
                Template.createRecipeCard()
            )

            console.log(Template)
        })
    }
}

const app = new App()
app.main()