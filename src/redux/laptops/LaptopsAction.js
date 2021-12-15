import {FETCH_LAPTOPS_FAILED, FETCH_LAPTOPS_START, FETCH_LAPTOPS_SUCCESS, SET_LAPTOPS} from "./LaptopsType";
import {loadLaptopsFromJsonServer} from "../../api/api-laptop";

export const getAllLaptops = (dispatch) => {
    dispatch(fetchLaptopsStart());
    loadLaptopsFromJsonServer((isOk, data) => {
        if(!isOk)
            dispatch(fetchLaptopsFailed(data));
        else
            dispatch(fetchLaptopsSuccess(data));
    })
}


export const fetchLaptopsStart = () => {
    return {
        type : FETCH_LAPTOPS_START,
    }
}

export const fetchLaptopsSuccess = (data) => {
    return {
        type : FETCH_LAPTOPS_SUCCESS,
        payload : data
    }
}

export const fetchLaptopsFailed = (errorMessage) => {
    return {
        type : FETCH_LAPTOPS_FAILED,
        payload : errorMessage
    }
}

export const setLaptops = (list) => {
    return {
        type : SET_LAPTOPS,
        payload : list
    }
}

