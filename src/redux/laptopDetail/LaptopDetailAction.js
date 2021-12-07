import {SET_LAPTOP_DETAIL} from "./LaptopDetailType";

export const setLaptopDetail = (det) => {
    return {
        type : SET_LAPTOP_DETAIL,
        payload : det
    }
}

