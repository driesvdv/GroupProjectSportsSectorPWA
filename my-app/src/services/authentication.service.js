import axiosInstance from "./axios.service";

class AuthService {
    login({email, password, navigation}) {
        return axiosInstance.post("/token/obtain/", {email, password})
            .then(({data}) => {
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                // TODO: redirect to home page with navigation
            })
    }

    logout() {
        return axiosInstance.post('/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        }).then(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
        }).catch(e => console.log(e))
    }

    register({name, email, password, navigation}) {
        return axiosInstance.post('/user/create/', {name, email, password})
            .then(() => {
                // TODO: redirect to home page with navigation
                }
            )
    }
}

export default new AuthService();
