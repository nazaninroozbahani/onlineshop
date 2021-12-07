import {SET_LAPTOP_DETAIL} from "./LaptopDetailType";

const initialState = {
    laptopDetail : null
}

const LaptopDetailReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_LAPTOP_DETAIL :
            return {
                ...state,
                laptopDetail: action.payload
            }
        default :
            return state
    }
}

export default LaptopDetailReducer;