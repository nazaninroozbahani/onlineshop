import {SET_LAPTOPS} from "./LaptopsType";

export const setLaptops = (list) => {
    return {
        type : SET_LAPTOPS,
        payload : list
    }
}

