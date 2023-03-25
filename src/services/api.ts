import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.18.8:3333'
});

// Interceptions in ERROR or RESPONSE
api.interceptors.response.use((response) => {
    console.log("INTERCEPTOR =>", response);
    return response;
}, (error) => {
    console.log('INTERCEPTOR RESPONSE ERROR =>', error)
    return Promise.reject(error);
});
  
export { api };