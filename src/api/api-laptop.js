import {getAxiosInstanceJsonServer} from "./api";

export const loadLaptopsFromJsonServer = (callback) => {
    getAxiosInstanceJsonServer().get("laptops")
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}

export const loadLaptopDetailFromJsonServer = (id,callback) => {
    getAxiosInstanceJsonServer().get(`laptops/${id}`)
        .then(response => {
            const data = response.data;
            callback(true, data)
        })
        .catch(error => {
            callback(false, error)
        });
}