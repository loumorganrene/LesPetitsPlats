import {
    ingredientsSearchbar,
    appliancesSearchbar,
    ustensilsSearchbar
} from './CreateDropdown.js';
import {
    $recipesWrapper
} from './CreateCard.js';
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
/**
 * @returns {HTMLDOMElements}
 */
export function norecipeMessage() {
    $recipesWrapper.innerHTML =
        ` <p class="noresult">Aucune recette ne correspond à votre critère... vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</p>`
}