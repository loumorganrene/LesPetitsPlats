/** Media constructor pattern
 * @typedef {Object} RecipeModel
 * @property {number} id
 * @property {string} name
 * @property {number} servings
 * @property {array} ingredientsData
 * @property {number} duration
 * @property {string} directions
 * @property {string} appliance
 * @property {string} ustensils
 */

export class Recipe {
    constructor(recipes) {
        this._id = recipes.id;
        this._name = recipes.name;
        this._servings = recipes.servings;
        this._ingredientsData = recipes.ingredients;
        this._ingredientsList = this._ingredientsData.map(data => data.ingredient.toLowerCase());
        this._duration = recipes.time;
        this._directions = recipes.description;
        this._appliance = recipes.appliance;
        this._ustensils = recipes.ustensils;
        this._ustensilsList = this._ustensils;
    }
}

