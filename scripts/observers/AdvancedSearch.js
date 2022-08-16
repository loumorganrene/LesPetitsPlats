export class AdvancedSearch {
    /** 
     * @param {array} recipesData 
     */
    constructor(recipesData) {
        this._recipesData = recipesData
    }
    /**
     * @return {HTMLDOMElements}
     * */
    update(action) {
        this._$likesCountContainer = document.querySelector( '.total_like' )
        this._currentTotalLikes = parseInt(this._$likesCountContainer.innerHTML)
        if (action === 'LIKE') {
            this._currentTotalLikes += 1
        } else if (action === 'DISLIKE') {
            this._currentTotalLikes -= 1
        } else {
            throw "Unknow action"
        }

        this._$likesCountContainer.innerHTML = `${this._currentTotalLikes}`
    }
}
