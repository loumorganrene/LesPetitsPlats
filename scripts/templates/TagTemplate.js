import { $tagWrapper } from "../handlers/SearchHandler.js";
/**
* @returns {HTMLDOMElements}
*/
export function createTag(userSelection) {
    $tagWrapper.style.display = "flex"
    const li =  document.createElement('li')
    li.classList.add('tag')
    li.innerHTML = `<span>${userSelection}</span>` + '<i class="bi bi-x-circle"></i>'
    $tagWrapper.appendChild(li)
}
/**
* @returns {HTMLDOMElements}
*/
export function removeTagWrapper() {
    if ($tagWrapper.querySelector('li') == null) {
        $tagWrapper.style.display = "none"
    }
}
