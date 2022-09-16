export function createTag(userSelection) {
        const $wrapper = document.querySelector('#tag-list')
        $wrapper.style.display = "flex"
        // $wrapper.style.display = ($wrapper.style.display =="flex") ? $wrapper.style.display = "none" : $wrapper.style.display = "flex"
        const li =  document.createElement('li')
        li.classList.add('tag')
        li.innerHTML = `<span>${userSelection}</span>` + '<i class="bi bi-x-circle"></i>'

        $wrapper.appendChild(li)
    }

export function removeTag(userSelection) {
    userSelection.remove()
}