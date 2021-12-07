import { SET_LAPTOPS} from "./LaptopsType";

const initialState = {
    laptops : []
}

const LaptopsReducer = (state = initialState , action) => {
    switch (action.type) {
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