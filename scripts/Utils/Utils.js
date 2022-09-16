import {
    ingredientsSearchbar,
    appliancesSearchbar,
    ustensilsSearchbar
} from '../Utils/CreateDropdown.js';
export function removeDuplicates(array) {
    return Array.from(new Set(array))
}

export function resetInput() {
    ingredientsSearchbar.value = ''
    appliancesSearchbar.value = ''
    ustensilsSearchbar.value = ''
}