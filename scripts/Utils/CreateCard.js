import {
    RecipeCard
} from "../templates/RecipeTemplate.js";
export const $recipesWrapper = document.querySelector('#recipes-list')
/**
 * 
 * @param {Recipe[]} recipes 
 */
 export function createCards(recipes) {
    $recipesWrapper.innerHTML = ""
    recipes.forEach(recipeData => {
        const Template = new RecipeCard(recipeData)
        $recipesWrapper.appendChild(
            Template.createRecipeCard()
        )
    })
}