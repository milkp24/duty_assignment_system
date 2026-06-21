import axios from "axios";

const API_URL = "http://localhost:3000";

const client = axios.create({
    baseURL : API_URL,
})
export const api = {
    key:"value",
    async get (path){
        // fn body
        const {data} = await client.get(path)
        return data
    },
    async post (path , body){
        // fn body
        const {data} = await client.post(path, body)
        return data
    }
    }


console.log(api.get)

