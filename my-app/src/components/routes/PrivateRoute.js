import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function PrivateRoute({children, ...rest}) {
    const {user} = useContext(AuthContext)
    return (
        <Route {...rest}>
            {user ? (
                children
            ) : (
                <Redirect to={"/signin"}/>
            )}
        </Route>
    );
}
export default PrivateRoute;
