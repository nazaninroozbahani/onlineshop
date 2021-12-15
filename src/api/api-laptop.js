import {getAxiosInstanceJsonServer} from "./api";

export const loadLaptopsFromJsonServer = (callback) => {
    getAxiosInstanceJsonServer().get("onlineshopFakeData/laptops")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const loadLaptopDetailFromJsonServer = (id,callback) => {
    getAxiosInstanceJsonServer().get(`onlineshopFakeData/laptops/${id}`)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const loadCommentsFromJsonServer = (id,callback) => {
    getAxiosInstanceJsonServer().get(`onlineshopFakeComments/comments/${id}`)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}