import axiosInstance from "./axios.service";

class AuthService {
    login({email, password}, history) {
        return axiosInstance.post("/login", {email, password})
            .then(({data}) => {
                sessionStorage.setItem('access_token', data["access_token"])
                history.push("/leden")
            })
    }

    logout(history) {
        localStorage.removeItem('access_token');
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
