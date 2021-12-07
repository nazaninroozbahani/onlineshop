import Axios from 'axios'

export const getAxiosInstanceJsonServer = () => {

    return Axios.create({
        baseURL: "https://my-json-server.typicode.com/roozbahani92/onlineshopFakeData/",
        headers: {
            //API_KEY: "hggkjdffjkllhfdswdfhjlliutewsdfhllhy"
        }
    });
};