import React, {createContext, useState, useEffect} from 'react'

const AuthContext = createContext(null)

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({user_id: 0, username: ""})

    const updateUser = () => {
        if (localStorage.getItem("access_token") !== null) {
            const {email, id} = JSON.parse(atob(localStorage.getItem("access_token").split('.')[1]))
            setUser(() => ({
                email: email,
                id: id
            }))
        } else {
            setUser(() => ({
                email: "",
                user_id: 0,
            }))
        }
    }

    useEffect(() => {
        if (localStorage.getItem("access_token") !== null) {
            const {email, id} = JSON.parse(atob(localStorage.getItem("access_token").split('.')[1]))
            setUser({email: email, id: id})
        }
    }, [setUser])

    return (
        <AuthContext.Provider value={{user, updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext}
