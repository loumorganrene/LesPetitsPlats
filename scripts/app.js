import { recipes } from "../data/recipes.js";
// import { IngredientFactory } from "./factories/IngredientsFactory.js";
import { Recipe } from "./models/RecipesModel.js";
import { RecipeCard } from "./templates/RecipeTemplate.js";

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
            console.log(recipeData._ingredientsList)
        })
    }
}

const app = new App()
app.main()