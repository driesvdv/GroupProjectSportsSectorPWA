import React, {useState} from 'react';
import AuthService from "../../services/authentication.service";
import {validateEmail, validateName, validatePassword, validatePasswords} from "../../helpers/authentication.helper";
import {Link, useHistory} from "react-router-dom";

function Registerform(props) {
    const [loading, setLoading] = useState(false)
    const [register, setRegister] = useState({name: "",email: "", password: "", repeat_password: ""})
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        if (checkFields()) {
            setLoading(true)
            AuthService.register(register, history).catch((e) => {
                    console.log(e.message)
                }
            ).finally(() => {
                setLoading(false)
            })
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setRegister(prev => ({...prev, [name]: value}))
    }

    const checkFields = () => {
        return validateName(register.name) && validateEmail(register.email) && validatePassword(register.password) && validatePasswords(register.password, register.repeat_password)
    }

    return (
        <form onSubmit={handleSubmit} className={"flex flex-col"}>
            <div className={"flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white"}>
                <img src={process.env.PUBLIC_URL + '/assets/user.svg'}/>
                <input className={"pl-2 text-base w-full bg-white"} type={"text"} name={"name"}
                       placeholder={"Naam"} onChange={handleChange}/>
            </div>
            <div className={"flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white"}>
                <img src={process.env.PUBLIC_URL + '/assets/at sign.svg'}/>
                <input className={"pl-2 text-base w-full bg-white"} type={"email"} name={"email"}
                       placeholder={"E-mailadres"} onChange={handleChange}/>
            </div>
            <div className={"flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white"}>
                <img src={process.env.PUBLIC_URL + '/assets/locked.svg'}/>
                <input className={"pl-2 text-base w-full bg-white"} type={"password"} name={"password"}
                       placeholder={"Wachtwoord"} onChange={handleChange}/>
            </div>
            <div className={"flex flex-row border-b-2 border-gray-dark mt-4 py-1 bg-white"}>
                <img src={process.env.PUBLIC_URL + '/assets/locked.svg'}/>
                <input className={"pl-2 text-base w-full bg-white"} type={"repeat_password"} name={"repeat_password"}
                       placeholder={"Wachtwoord bevestigen"} onChange={handleChange}/>
            </div>
            <div className={"flex justify-end"}>
                <Link className={"text-s font-thin text-blue underline mb-14 mt-4 hover:text-blue-dark"}
                      to={"/login"}>Inloggen</Link>
            </div>
            <input
                className={"rounded-full py-2 text-2xl font-bold text-white bg-blue z-20 hover:bg-blue-dark cursor-pointer"}
                type="submit" value={loading ? "Laden..." : "Registeren"} disabled={loading}/>
        </form>
    );
}

export default Registerform;
