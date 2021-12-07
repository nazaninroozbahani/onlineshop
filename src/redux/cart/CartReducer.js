import {ADD_TO_CART, DECREASE_COUNT, DELETE_FROM_CART, INCREASE_COUNT} from "./CartType";

const initialState = {
    cartList : []
}

const CartReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_TO_CART :
            return {
                ...state,
                cartList: [...state.cartList , action.payload]
            }
        case INCREASE_COUNT :
            const increased = state.cartList.map(item => {
                if(item.id === action.payload)
                    return {...item, count : item.count + 1};
                return item;
            })
            return {
                ...state,
                cartList: increased
            }
        case DECREASE_COUNT :
            const decreased = state.cartList.map(item => {
                if(item.id === action.payload)
                    return {...item, count : item.count - 1};
                return item;
            })
            return {
                ...state,
                cartList: decreased
            }
        case DELETE_FROM_CART :
            return {
                ...state,
                cartList: state.cartList.filter(item => item.id !== action.payload)
            }
        default :
            return state
    }
}

export default CartReducer;