import {
    ingredientsSearchbar,
    appliancesSearchbar,
    ustensilsSearchbar
} from '../Utils/CreateDropdown.js';
import {
    $recipesWrapper
} from '../Utils/CreateCard.js';
export function removeDuplicates(array) {
    return Array.from(new Set(array))
}
/**
 * @returns {HTMLDOMElements}
 */
export function resetInput() {
    ingredientsSearchbar.value = ''
    appliancesSearchbar.value = ''
    ustensilsSearchbar.value = ''
}

export function norecipeMessage() {
    $recipesWrapper.innerHTML =
        ` <p class="noresult">Aucune recette ne correspond à votre critère... vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</p>`
}