import {
    ADD_PROD_TO_BASKET,
    REMOVE_PROD_FROM_BASKET,
    BASKET_CHANGE_COUNT
} from "../actionTypes";

const basket = window.localStorage.getItem("basket")

export function addToBasketAction(data) {
    basket ?
        window.localStorage.setItem("basket", JSON.stringify([...JSON.parse(basket)] , data)) :
        window.localStorage.setItem("basket", JSON.stringify([data]))
    return {
        type: ADD_PROD_TO_BASKET,
        data: data,
    }
}

export function removeFromBasketAction(id) {
    return {
        type: REMOVE_PROD_FROM_BASKET,
        id: id,
    }
}
export function changeCountAction(id, count){
    return {
        type:BASKET_CHANGE_COUNT,
        id: id,
        count: count,
    }
}