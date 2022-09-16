import { $tagWrapper } from "../handlers/SearchHandler.js";
export function createTag(userSelection) {
        $tagWrapper.style.display = "flex"
        // $wrapper.style.display = ($wrapper.style.display =="flex") ? $wrapper.style.display = "none" : $wrapper.style.display = "flex"
        const li =  document.createElement('li')
        li.classList.add('tag')
        li.innerHTML = `<span>${userSelection}</span>` + '<i class="bi bi-x-circle"></i>'

        $tagWrapper.appendChild(li)
    }

export function removeTag() {

}