import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

class AuthService {
    login({email, password}, history) {
        return axiosInstance.post("/login", {email, password})
            .then(({data}) => {
                sessionStorage.setItem('access_token', data["access_token"])
                history.push("/leden")
            })
    }

    logout(history) {
        sessionStorage.removeItem('access_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push("/login")
    }

    register({name, email, password}, history) {
        return axiosInstance.post('/register', {name, email, password})
            .then(({data}) => {
                sessionStorage.setItem('access_token', data["access_token"]);
                history.push("/leden")
            })
    }
}

export default new AuthService();
