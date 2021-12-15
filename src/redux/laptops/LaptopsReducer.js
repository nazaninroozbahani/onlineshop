import {FETCH_LAPTOPS_FAILED, FETCH_LAPTOPS_START, FETCH_LAPTOPS_SUCCESS, SET_LAPTOPS} from "./LaptopsType";

const initialState = {
    laptops : [],
    isLoading: true,
    errorMessage: ''
}

const LaptopsReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_LAPTOPS_START :
            return {
                laptops: [],
                isLoading: true,
                errorMessage: ''
            }
        case FETCH_LAPTOPS_SUCCESS :
            return {
                laptops: action.payload,
                isLoading: false,
                errorMessage: ''
            }
        case FETCH_LAPTOPS_FAILED :
            return {
                laptops: [],
                isLoading: false,
                errorMessage: action.payload
            }
        case SET_LAPTOPS :
            return {
                ...state,
                laptops: action.payload
            }
        default :
            return state
    }
}

export default LaptopsReducer;