import axiosInstance from "./axios.service";

class AuthService {
    login({email, password, history}) {
        return axiosInstance.post("/login", {email, password})
            .then(({data}) => {
                localStorage.setItem('access_token', data["access_token"]);
                history.push("/leden")
            })
    }

    logout() {
        localStorage.removeItem('access_token');
        axiosInstance.defaults.headers['Authorization'] = null;
    }

    register({name, email, password, history}) {
        return axiosInstance.post('/register', {name, email, password})
            .then(({data}) => {
                localStorage.setItem('access_token', data.access);
                history.push("/leden")
            })
    }
}

export default new AuthService();
