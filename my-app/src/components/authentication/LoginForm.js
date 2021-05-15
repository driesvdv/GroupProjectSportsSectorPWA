import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AuthService from "../../services/authentication.service"
import {validateEmail, validatePassword} from "../../helpers/authentication.helper";
import { useHistory } from "react-router-dom";


function LoginForm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [login, setLogin] = useState({email: "", password: ""})
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (checkFields()) {
            setLoading(true)
            AuthService.login(login, history).catch(({response}) => {
                console.log(response)
                }
            ).finally(() => {
                setLoading(false)
            })
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setLogin(prev => ({...prev, [name]: value}))
    }

    const checkFields = () => {
        setError(false)
        if (validateEmail(login.email) && validatePassword(login.password)) {
            return true
        } else {
            setError(true)
        }
        return false
    }

    return (
        <form onSubmit={handleSubmit} className={"flex flex-col"}>
            <div className={`flex flex-row border-b-2 ${error ? "border-red" : "border-gray-dark"} mt-4 py-1 bg-white`}>
                <img src={process.env.PUBLIC_URL + '/assets/at sign.svg'}/>
                <input className={`pl-2 text-base w-full bg-white ${error && "text-red"}`} type={"email"} name={"email"}
                       placeholder={"E-mailadres"} onChange={handleChange}/>
            </div>
            <div className={`flex flex-row border-b-2 ${error ? "border-red" : "border-gray-dark"} mt-4 py-1 bg-white`}>
                <img src={process.env.PUBLIC_URL + '/assets/locked.svg'}/>
                <input className={`pl-2 text-base w-full bg-white ${error && "text-red"}`} type={"password"} name={"password"}
                       placeholder={"Wachtwoord"} onChange={handleChange}/>
            </div>
            <div className={"flex justify-end"}>
                <Link className={"text-s font-thin text-blue underline mb-14 mt-4 hover:text-blue-dark"}
                      to={"/registreren"}>Account aanmaken</Link>
            </div>
            <input
                className={"rounded-full py-2 text-2xl font-bold text-white bg-blue z-20 hover:bg-blue-dark cursor-pointer"}
                type="submit" value={loading ? "Laden..." : "Inloggen"} disabled={loading}/>
        </form>
    );
}

export default LoginForm;
