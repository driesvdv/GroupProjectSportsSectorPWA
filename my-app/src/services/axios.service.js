import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.sportplus.vandevelde.studio/api/',
    timeout: 5000,
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);


export default axiosInstance
