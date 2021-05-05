import axios from 'axios'
import {history} from "../App";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:8000',
    timeout: 5000,
    headers: {
        'Authorization': `JWT ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
            history.push("/login", {error})
        }
        return Promise.reject(error);
    }
);
export default axiosInstance