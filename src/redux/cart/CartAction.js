import {ADD_TO_CART, DECREASE_COUNT, DELETE_FROM_CART, INCREASE_COUNT} from "./CartType";

export const addToCart = (item) => {
    return {
        type : ADD_TO_CART,
        payload : item
    }
}

export const increaseCount = (id) => {
    return {
        type : INCREASE_COUNT,
        payload : id
    }
}

export const decreaseCount = (id) => {
    return {
        type : DECREASE_COUNT,
        payload : id
    }
}

export const deleteFromCart = (id) => {
    return {
        type : DELETE_FROM_CART,
        payload : id
    }
}