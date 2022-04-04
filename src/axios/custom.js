import axios from 'axios';


export const autoFetch = axios.create({
    baseURL: "https://api.unsplash.com",
    
})
