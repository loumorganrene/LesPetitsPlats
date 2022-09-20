import {
    DropdownList
} from "../templates/DropdownTemplate.js";
export const $ingredientsWrapper = document.querySelector('#ingredients .dropdown-menu')
export const $appliancesWrapper = document.querySelector('#appareils .dropdown-menu')
export const $ustensilsWrapper = document.querySelector('#ustensils .dropdown-menu')
export const $dropdownWrapper = document.querySelector('#sorting-list')
export const ingredientsSearchbar = document.querySelector('.ingredient-searchbar')
export const appliancesSearchbar = document.querySelector('.appliance-searchbar')
export const ustensilsSearchbar = document.querySelector('.ustensil-searchbar')
/**
 * @param {Recipe[]} recipes 
 */
 export function createDropdown(recipes) {
    const Dropdown = new DropdownList(recipes)
    $ingredientsWrapper.appendChild(
        Dropdown.createIngredientDropdownList()
    )
    $appliancesWrapper.appendChild(
        Dropdown.createApplianceDropdownList()
    )
    $ustensilsWrapper.appendChild(
        Dropdown.createUstensilDropdownList()
    )

    $dropdownWrapper.addEventListener('input',
    e => {
        if (e.target.closest('.dropdown-searchbar') == ingredientsSearchbar) {
            const ingredient = e.target.closest('.dropdown-searchbar').value.toLowerCase()
            $ingredientsWrapper.appendChild(
                Dropdown.createIngredientDropdownList(ingredient)
            )
        } else if (e.target.closest('.dropdown-searchbar') == appliancesSearchbar) {
            const appliance = e.target.closest('.dropdown-searchbar').value.toLowerCase()
            $appliancesWrapper.appendChild(
                Dropdown.createApplianceDropdownList(appliance)
            )
        } else if (e.target.closest('.dropdown-searchbar') == ustensilsSearchbar) {
            const ustensil = e.target.closest('.dropdown-searchbar').value.toLowerCase()
            $ustensilsWrapper.appendChild(
                Dropdown.createUstensilDropdownList(ustensil)
            )
        }
    })
}