/** Media constructor pattern
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
        this._ingredientsList = [];
        this._ingredientsData = recipes.ingredients;
        this._GETingredients = this._ingredientsData
                    .forEach(data => { 
                        this._ingredientsList.push(data['ingredient']);
                        return this._ingredientsList;
                    });
        this._duration = recipes.time;
        this._directions = recipes.description;
        this._appliance = recipes.appliance;
        this._ustensils = recipes.ustensils;
    }
    
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get servings() {
        return this._servings
    }

    get duration() {
        return this._duration
    }

    get directions() {
        return this._directions
    }

    get appliances() {
        return this._appliance
    }

    get ustensils() {
        return this._ustensils
    }

    get ingredientsData() {
        return this._ingredientsData
    }

    get ingredientsList() {
        return this._ingredientsList
    }

}

