import axios from "axios";


export const Frontend_Base_Url = 'http://localhost:3000';


const userToken = localStorage.getItem("userToken");

export const api = axios.create({
    baseURL: Frontend_Base_Url,
    headers:{
        "Authorization": `Bearer ${userToken}`,
        "Content-Type":"application/json"
    }
})