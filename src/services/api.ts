import axios, { AxiosInstance } from "axios";
import { AppError } from "@utils/AppError";

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
}

const api = axios.create({
  baseURL: 'http://192.168.18.8:3333'
}) as APIInstanceProps;

// Interceptions in ERROR or RESPONSE
api.registerInterceptTokenManager = singOut => {
    const interceptTokenManager = api.interceptors.response.use((response) => response, (error) => {
      if(error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
      } else {
        return Promise.reject(error)
      }
    });
  
    return () => {
      api.interceptors.response.eject(interceptTokenManager);
    }
}
  
export { api };