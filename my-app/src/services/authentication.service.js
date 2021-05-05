import axiosInstance from "./axios.service";
import {history} from "../App";

class AuthService {
    login({email, password}) {
        return axiosInstance.post("/token/obtain/", {email, password})
            .then(({data}) => {
                localStorage.setItem('access_token', data.access);
                history.push("/leden")
            })
    }

    logout() {
        return axiosInstance.post('/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        }).then(() => {
            localStorage.removeItem('access_token');
            axiosInstance.defaults.headers['Authorization'] = null;
        }).catch(e => console.log(e))
    }

    register({name, email, password}) {
        return axiosInstance.post('/user/create/', {name, email, password})
            .then(({data}) => {
                localStorage.setItem('access_token', data.access);
                history.push("/leden")
            })
    }
}

export default new AuthService();
